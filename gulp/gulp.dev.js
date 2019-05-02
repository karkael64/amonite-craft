const { src, series, dest, parallel } = require('gulp');
const connect = require('gulp-connect');

const { icons, reloadIcons } = require('./icon');
const { sass, reloadSass } = require('./sass');

const { html } = require('./document');


const Express = require('express');
const expressRoute = require('../stub/api');

const { babel, reloadBabel } = require('./babel');
const scss = series(icons, sass);

function pictures() {
  return src(['./app/**/*.png', './app/**/*.jpg', './app/**/*.jpeg'])
    .pipe(dest('./build/pictures/'));
}

function stub(then) {
  const express = Express();

  express.use('/api/v1/', expressRoute);
  express.listen(2999, then);
}

function local(then) {
  connect.server({
    port: 3000,
    root: './build/',
    livereload: true
  });
  then();
}

const build = parallel(pictures, scss, babel, html);
const server = parallel(stub, local);
const reload = parallel(reloadIcons, reloadBabel, reloadSass);

exports.build = build;
exports.server = server;
exports.reload = reload;
exports.dev = series(build, server, reload);
exports.babel = babel;
exports.icons = icons;
