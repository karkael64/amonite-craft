const fs = require('fs');
const babelStream = require('./stream/babel')
const { src, concat } = require('./stream')

const path = require('path')
const file = path.resolve('./amonite-craft.js')


function prod(then) {
  console.log(`Create script file at:\t${file}`);
  return src('./builder/factory/windowed.js')
    .pipe(babelStream({presets: ['@babel/env', 'minify'], comments: false}))
    .pipe(concat(file))
    .on('end', () => {
      console.log(`Script file created`)
      then()
    })
}

exports.prod = prod
