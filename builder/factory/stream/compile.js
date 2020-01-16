const fs = require("fs")
const map = require("./map")

function compile(options) {
  if (!(typeof options === 'object')) options = {}
  return map((filepath, callback) => {
    fs.readFile(filepath.toString(), (err, contents) => {
      if (err) callback(err)
      const text = eval('(function(options){ return `' + contents + '` })')(options)
      callback(null, text)
    })
  })
}

module.exports = compile
