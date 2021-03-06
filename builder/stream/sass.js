const nodeSass = require('node-sass')
const map = require('./map')

function sass () {
  return map(function (filepath, cb) {
    nodeSass.render({
      file: filepath.toString(),
      outFile: filepath.toString(),
      sourceMap: true,
      sourceMapContents: true,
      sourceMapEmbed: true
    }, function (err, obj) {
      if (err) cb(err)
      else cb(null, obj.css)
    })
  })
}

module.exports = sass
exports.sass = sass
