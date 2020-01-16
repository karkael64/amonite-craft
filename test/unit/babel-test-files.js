const fs = require("fs")
const path = require("path")
const babel = require("./babel")
const getTestFiles = require("./find-test-files")
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
  }));

  if (notfoundpaths.length) throw new Error(`These paths are not resolved: ${notfoundpaths.map(JSON.stringify).join(", ")}`)
  return foundpaths
}


async function getTestFilesCode (dir = ".", match = "\\.test\\.js$") {
  const paths = await getTestFiles(dir, match)
  const joiner = new JoinScripts
  await Promise.all(paths.map(joiner.load.bind(joiner)))
  return joiner.concat()
}

async function compileFile (src) {
  const joiner = new JoinScripts
  await joiner.load(src)
  return joiner.concat()
}


class JoinScripts {
  constructor () {
    this.files = []
  }

  async load (path) {
    if (!this.entry) this.entry = path
    await this.loadFileWithRequires(path)
    this.composeRequires()
  }

  async loadFileWithRequires (path) {
    if (this.files.find(obj => path === obj.path)) return;
    const file = {
      index: this.files.length,
      path
    }
    this.files.push(file)

    const code = await babel(await getRequireEntry(path))
    const reqs = await extractRequires(path, code)
    Object.assign(file, {code, reqs})

    await Promise.all(Object.keys(reqs).map(this.loadFileWithRequires.bind(this)))
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
  }

  concat () {
    return `(function(e,f){
function r(x){return function(p){var i=x[p];if(f[i][2])return f[i][2].exports;var o={},m={exports:o},[s,h]=f[i];f[i][2]=m;h.call(o,r(s),m,o);return m.exports}}
r({"":e})("")
})(${this.entryIndex}, [${this.files.map(obj => `[${JSON.stringify(obj.reqsIndex)},function (require,module,exports) {${obj.code}\n}]`).join(",")}]);
`;
  }
}

module.exports = {
  getTestFilesCode,
  compileFile
}
