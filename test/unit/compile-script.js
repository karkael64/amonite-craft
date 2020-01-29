const vm = require("vm")
const { babel, translators } = require("./babel")
const getRequireEntry = require("./require-file")

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


class JoinScripts {
  constructor (opts) {
    this.files = []
    if (typeof opts === "object" && opts) {
      this.options = opts
    }
  }

  async load (path) {
    if (!this.entry) this.entry = path
    await this.loadFileWithRequires(path)
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

    const code = await babel(await getRequireEntry(path), this.options)
    const reqs = await extractRequires(path, code)
    Object.assign(file, {code, reqs})

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

  concat () {
    return `(function(e,f){function r(x){return function(p){var i=x[p];if(f[i][2])return f[i][2].exports;var o={},m={exports:o},[s,h]=f[i];f[i][2]=m;h.call(o,r(s),m,o);return m.exports}}r({"":e})("")})(${this.entryIndex}, [${this.files.map(obj => `[${JSON.stringify(obj.reqsIndex)},function (require,module,exports) {${obj.code}\n}]`).join(",")}]);`
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
  const script = (await joiner.load(src)).concat()
  return new vm.Script(script)
}


module.exports = Object.assign(compileScript, {
  compileScript,
  translators
})
