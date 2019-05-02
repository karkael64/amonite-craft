const { src, dest, watch } = require('gulp');

const gulpSass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const connect = require('gulp-connect');

function sass() {
  return src('./app/**/*.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpSass.sync().on('error', gulpSass.logError))
    .pipe(concat('design.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('./build/'))
    .pipe(connect.reload());
}

function reloadSass(then) {
  watch('./app/**/*.scss', sass);
  then();
}

exports.sass = sass;
exports.reloadSass = reloadSass;
