const { watch } = require('gulp')
const fs = require('fs')
const browserify = require('browserify')
const connect = require('gulp-connect')
const babelify = require('./babelify')

const path = require('path')
const documentConfig = require('../../test/config/document.config.json')
const file = path.resolve(__dirname, '../../build', documentConfig.run)

const { map, concat } = require('./gulp-utils')

function babel() {
  var first = true
  var count = 0
  function then (next) {
    return function (err, res) {
      if (err) next(err)
      else if (count === 0) fs.readFile(file, next)
      else next()
    }
  }

  return browserify('../test/app/main/index.js', { debug: true })
    .transform(babelify, { presets: ['@babel/env'], sourceMaps: true, extensions: ['.js', '.json', '.html', '.po'] })
    .bundle()
    .pipe(concat(file))
    .pipe(connect.reload())
}

function reloadBabel(then) {
  watch(['./libs/**/*.js', './test/app/**/*.js', './test/app/**/*.json', './test/app/**/*.html', './test/i18n/*.po'], babel)
  then()
}

exports.babel = babel
exports.reloadBabel = reloadBabel
