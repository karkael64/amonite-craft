const fs = require('fs');
const browserify = require('browserify')
const babelify = require('./babelify')
const { map } = require('./gulp-utils')

const path = require('path')
const file = path.resolve('./esm.js')


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
    .pipe(map(function (buffer, cb) {
      const dir = path.dirname(file)
      try {
        fs.accessSync(dir)
      } catch (err) {
        fs.mkdirSync(dir)
      }

      if (first) fs.writeFile(file, buffer, then(cb));
      else fs.appendFile(file, buffer, then(cb));
      first = false;
    }))
}

exports.prod = prod
