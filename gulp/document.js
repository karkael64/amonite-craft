const fs = require('fs');
const { src } = require('gulp')
const { map, concat, compile } = require('./gulp-utils')

const path = require('path')
const config = require('../test/config/document.config.json')
const file = path.resolve('./build', config.page)

function document() {
  return src('./test/config/document.template.html')
    .pipe(compile(config))
    .pipe(concat(file))
}

exports.html = document
