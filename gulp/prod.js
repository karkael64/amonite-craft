const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const babelify = require('./babelify');
const {dest} = require('gulp');

function prod() {
  return browserify('./config/windowed.js', {debug: true})
    .transform(babelify, {presets: ['@babel/env', 'minify'], sourceMaps: true, extensions: ['.js', '.json', '.html', '.po']})
    .bundle()
    .pipe(source('esm.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(dest('./'));
}

exports.prod = prod;
