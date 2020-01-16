const { src, dest, watch } = require('gulp')

const gulpSass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const connect = require('gulp-connect')

const path = require('path')
const documentConfig = require('../../test/config/document.config.json')
const file = path.basename(documentConfig.design)
const dir = path.resolve('../build', path.dirname(file))

function sass() {
  return src('./test/app/**/*.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpSass.sync().on('error', gulpSass.logError))
    .pipe(concat(file))
    .pipe(sourcemaps.write())
    .pipe(dest(dir))
    .pipe(connect.reload())
}

function reloadSass(then) {
  watch('./test/app/**/*.scss', sass)
  then()
}

exports.sass = sass
exports.reloadSass = reloadSass
