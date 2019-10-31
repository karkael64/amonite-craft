const fs = require('fs');
const { src } = require('gulp')
const { map, compile } = require('./gulp-utils')

const path = require('path')
const config = require('../test/config/document.config.json')
const file = path.resolve('./build', config.page)

function document() {
  return src('./test/config/document.template.html')
    .pipe(compile(config))
    .pipe(map(function (buffer, then) {
      const dir = path.dirname(file)
      try {
        fs.accessSync(dir)
      } catch (err) {
        fs.mkdirSync(dir)
      }
      fs.writeFile(file, buffer._contents, then)
    }))
}

exports.html = document
