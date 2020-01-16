const fs = require('fs');
const browserify = require('browserify')
const babelify = require('./babelify')
const { map, concat } = require('./stream')

const path = require('path')
const file = path.resolve('./esm.js')


function prod(then) {
  console.log(`Create script file at: ${file}`);
  return browserify('./gulp/windowed.js', {debug: true})
    .transform(babelify, {presets: ['@babel/env', 'minify'], sourceMaps: true, extensions: ['.js', '.json', '.html', '.po'], comments: false})
    .bundle()
    .pipe(concat(file))
    .on('end', () => {
      console.log(`Script file created`)
      then()
    })
}

exports.prod = prod
