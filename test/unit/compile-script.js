const vm = require("vm")
const { babel, translators } = require("./babel")
const getRequireEntry = require("./require-file")
const { SourceNode, SourceMapConsumer } = require("source-map")


async function extractRequires (from, code) {
  const foundpaths = {}, notfoundpaths = []
  const requires = (code.match(/(^|\W)require\(\s*("[^\"]+"|'[^\']+')\s*\)/g) || [])
    .map(str => str.split(/["']/g)[1])

  await Promise.all(requires.map(async (str) => {
    if (found = await getRequireEntry(str, from)) {
      foundpaths[found] = str
    } else {
      notfoundpaths.push(str)
    }
  }))

  if (notfoundpaths.length) throw new Error(`These paths are not resolved: ${notfoundpaths.map(JSON.stringify).join(", ")}`)
  return foundpaths
}


async function extractAstRequires (from, ast) {
  const foundpaths = {}, notfoundpaths = []
  const requires = ast.program.body.map(statm => {
    if (statm.declarations &&
      statm.declarations[0] &&
      statm.declarations[0].init &&
      statm.declarations[0].init.arguments &&
      statm.declarations[0].init.arguments[0] &&
      statm.declarations[0].init.arguments[0].callee &&
      statm.declarations[0].init.arguments[0].callee.name === "require"
    ) {
      return statm.declarations[0].init.arguments[0].arguments[0].value
    }
    return null
  }).filter(str => str)

  await Promise.all(requires.map(async (str) => {
    if (found = await getRequireEntry(str, from)) {
      foundpaths[found] = str
    } else {
      notfoundpaths.push(str)
    }
  }))

  if (notfoundpaths.length) throw new Error(`These paths are not resolved: ${notfoundpaths.map(JSON.stringify).join(", ")}`)
  return foundpaths
}


class JoinScripts {
  constructor (opts) {
    this.files = []
    if (typeof opts !== "object" || !opts) {
      opts = {sourceMap: true}
    }
    if (opts.sourceMap !== false) {
      opts.sourceMap = this.sourceMap = true
    }
    this.options = opts
  }

  async load (path) {
    if (!this.entry) this.entry = path
    const source = await this.loadFileWithRequires(path)
    this.composeRequires()
    return this
  }

  async loadFileWithRequires (path) {
    if (this.files.find(obj => path === obj.path)) return;
    const file = {
      index: this.files.length,
      path
    }
    this.files.push(file)

    const result = await babel(await getRequireEntry(path), this.options)
    const { code, ast, map } = result
    const reqs = ast ? await extractAstRequires(path, ast) : await extractRequires(path, code)
    Object.assign(file, { code, reqs, map })

    await Promise.all(Object.keys(reqs).map(this.loadFileWithRequires.bind(this)))
    return this
  }

  composeRequires () {
    const self = this
    const listFiles = {}
    this.files.forEach(obj => {
      listFiles[obj.path] = obj.index
    })
    this.files.forEach(obj => {
      const reqsIndex = {}
      Object.keys(obj.reqs).forEach(to => {
        reqsIndex[obj.reqs[to]] = listFiles[to]
      })
      obj.reqsIndex = reqsIndex
    })
    this.entryIndex = listFiles[this.entry]
    return this
  }

  getSourceNode () {
    const chunks = []
    chunks.push(`(function(e,f){function r(x){return function(p){var i=x[p];if(f[i][2])return f[i][2].exports;var o={},m={exports:o},[s,h]=f[i];f[i][2]=m;h.call(o,r(s),m,o);return m.exports}}r({"":e})("")})(${this.entryIndex}, [`)
    this.files.forEach((obj, key) => {
      if (key) chunks.push(',')
      chunks.push(`[${JSON.stringify(obj.reqsIndex)},function (require,module,exports) {\n`)
      const consumer = new SourceMapConsumer(obj.map)
      const source = SourceNode.fromStringWithSourceMap(obj.code, consumer)
      // chunks.push(new SourceNode(obj.line, obj.column, obj.path, obj.code))
      chunks.push(source)
      chunks.push('\n}]')
    })
    chunks.push(']);')
    return new SourceNode(null, null, this.entry, chunks)
  }

  concat () {
    if (this.sourceMap) {
      const source = this.getSourceNode()
      const {code, map} = source.toStringWithSourceMap({ file: this.entry })
      return (code + "\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64," + Buffer.from(JSON.stringify(map)).toString("base64"))
    } else {
      return `(function(e,f){function r(x){return function(p){var i=x[p];if(f[i][2])return f[i][2].exports;var o={},m={exports:o},[s,h]=f[i];f[i][2]=m;h.call(o,r(s),m,o);return m.exports}}r({"":e})("")})(${this.entryIndex}, [${this.files.map(obj => `[${JSON.stringify(obj.reqsIndex)},function (require,module,exports) {${obj.code}\n}]`).join(",")}]);`
    }
  }
}


/**
 * @function compileScript translate a script entry `src` to an only one
 *    executable script with its required files
 * @param {object} opts the options for the babel translation
 * @param {string} src the entry script path
 * @return {Promise.<{vm.Script} script>.<{Error} err>} reject an error if :
 *    - a file required is not reachable
 *    - there is an error at compilation
 */

async function compileScript (src, opts) {
  const joiner = new JoinScripts(opts)
  await joiner.load(src)
  const script = joiner.concat()
  return new vm.Script(script)
}


module.exports = Object.assign(compileScript, {
  compileScript,
  translators
})
