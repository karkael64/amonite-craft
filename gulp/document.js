const { dest, src } = require('gulp');
const { map } = require('./gulp-utils');
const concat = require('gulp-concat');
const config = require('../config/document.config.json');

function compile(options) {
  if (!(typeof options === 'object')) options = {};
  return map(function (file, callback) {
    const text = eval('(function(options){ return `' + file.contents.toString() + '`; })')(options);
    file.contents = Buffer.from(text);
    callback(null, file);
  });
}

function document() {
  return src('./config/document.template.html')
    .pipe(compile(config))
    .pipe(concat('index.html'))
    .pipe(dest('./build/'));
}

exports.html = document;
