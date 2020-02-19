const fs = require('fs');
const browserify = require('browserify')
const babelify = require('./babelify')
const { map, concat } = require('./gulp-utils')

const path = require('path')
const file = path.resolve('./amonite-craft.js')


function prod() {
  var first = true
  var count = 0

  function then (next) {
    return function (err, res) {
      if (err) next(err)
      else if (count === 0) fs.readFile(file, next)
      else next()
    }
  }

  return browserify('./gulp/windowed.js', {debug: true})
    .transform(babelify, {presets: ['@babel/env', 'minify'], sourceMaps: true, extensions: ['.js', '.json', '.html', '.po'], comments: false})
    .bundle()
    .pipe(concat(file))
}

exports.prod = prod
