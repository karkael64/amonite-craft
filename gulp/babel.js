const { dest, watch } = require('gulp');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const babelify = require('./babelify');

const path = require('path');
const documentConfig = require('../test/config/document.config.json');
const file = path.basename(documentConfig.run);
const dir = path.resolve('./build', path.dirname(file));

function babel() {
  return browserify('./test/app/main/index.js', { debug: true })
    .transform(babelify, { presets: ['@babel/env'], sourceMaps: true, extensions: ['.js', '.json', '.html', '.po'] })
    .bundle()
    .pipe(source(file))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write())
    .pipe(dest(dir))
    .pipe(connect.reload());
}

function reloadBabel(then) {
  watch(['./libs/**/*.js', './test/app/**/*.js', './test/app/**/*.json', './test/app/**/*.html', './i18n/*.po'], babel);
  then();
}

exports.babel = babel;
exports.reloadBabel = reloadBabel;
