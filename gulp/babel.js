const { dest, watch } = require('gulp');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const babelify = require('./babelify');

function babel() {
  return browserify('./app/main/index.js', { debug: true })
    .transform(babelify, { presets: ['@babel/env'], sourceMaps: true, extensions: ['.js', '.json', '.html', '.po'] })
    .bundle()
    .pipe(source('run.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write())
    .pipe(dest('./build/'))
    .pipe(connect.reload());
}

function reloadBabel(then) {
  watch(['./libs/**/*.js', './app/**/*.js', './app/**/*.json', './app/**/*.html', './i18n/*.po'], babel);
  then();
}

exports.babel = babel;
exports.reloadBabel = reloadBabel;
