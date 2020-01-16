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

function babel (path, opts) {
  if (!opts) {
    opts = {
      sourceMaps: false,
      presets: ['@babel/env']
    }
  }
  opts.filename = path
  return new Promise((resolve, reject) => {
    readFile(path).catch(reject).then((contents) => {
      const cfg = babelCore.loadPartialConfig(opts)
      babelCore.transform(prepare(contents, path), cfg.options, (err, obj) => {
        if (err) reject(err)
        else resolve(obj.code)
      })
    })
  })
}

function prepare(data, filename) {
  let ext = path.extname(filename)

  if ([".js"].indexOf(ext) !== -1) {
    return data
  }
  if ([".html"].indexOf(ext) !== -1) {
    return preparePlain(data)
  }
  if ([".json"].indexOf(ext) !== -1) {
    return prepareJson(data)
  }
  if ([".po"].indexOf(ext) !== -1) {
    return preparePo(data)
  }
}

function preparePlain(data) {
  return Buffer.from("export default function(options){\n\treturn `\n" + data.toString() + "`\n}\n")
}

function prepareJson(data) {
  return Buffer.from("export default " + data.toString() + "\n")
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

module.exports = babel
