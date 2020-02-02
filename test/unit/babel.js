const path = require("path")
const babelCore = require("@babel/core")
const fs = require("fs")

function readFile (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, contents) => {
      if (err) reject(err)
      else resolve(contents)
    })
  })
}

function prepareJs(data) {
  return data
}

function preparePlain(data) {
  return Buffer.from("export default function(options){\n\treturn `\n" + data + "`\n}\n")
}

function prepareJson(data) {
  return Buffer.from("export default " + data + "\n")
}

function preparePo(data) {
  let current_key
  let result = {}
  data.toString().split(/\n/).forEach(function (line) {
    let t
    if (t = line.match(/^msgid\s+"(.+)"\s*$/)) {
      current_key = t[1]
    }
    if (t = line.match(/^msgstr\s+"(.+)"\s*$/)) {
      result[current_key] = t[1]
    }
  })
  return Buffer.from("export default " + JSON.stringify(result, null, 2) + "\n")
}

const translators = {
  ".js": prepareJs,
  ".json": prepareJson,
  ".po": preparePo
}

function prepare(data, filename) {
  const
    ext = path.extname(filename),
    trans = typeof translators[ext] === "function" ? translators[ext] : preparePlain
  return trans(data.toString())
}

function sourcemapFilepath(filepath) {
  const fileChunks = filepath.split("/"),
    rootChunks = process.cwd().split("/")
  while (fileChunks[0] === rootChunks[0]) {
    fileChunks.shift()
    rootChunks.shift()
  }
  return "/" + fileChunks.join("/")
}


/**
 * @function babel promisify the babel function, and helps the translation of
 *    non-javascript files (json and po-translator files) or return it as a
 *    simple text files.
 * @param {string} path the file to read
 * @param {object} opts the options for the babel translation
 * @param {object|undefined} opts the options to send to babel
 * @return {Promise.<{string} code>.<{Error}> err} resolve the script or reject
 *    and error if files is not reachable.
 */

function babel (path, editOpts) {
  const opts = {
    sourceFileName: sourcemapFilepath(path),
    presets: ["@babel/env"/*, "minify"*/],
    ast: true,
    sourceMap: true,
    comments: false
  }
  if (editOpts && (typeof editOpts === "object")) {
    Object.assign(opts, editOpts)
  }
  return new Promise((resolve, reject) => {
    readFile(path).catch(reject).then((contents) => {
      const cfg = babelCore.loadPartialConfig(opts)
      babelCore.transform(prepare(contents, path), cfg.options, (err, obj) => {
        if (err) reject(err)
        else resolve(obj)
      })
    })
  })
}

module.exports = Object.assign(babel, {
  babel,
  translators
})
