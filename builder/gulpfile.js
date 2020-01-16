const { series } = require('gulp');

const { dev, build, icons, sass, html } = require('./gulp/gulp.dev');
const { prod } = require('./gulp/prod');

exports.default = dev;
exports.build = build;
exports.dev = dev;
exports.icons = icons;
exports.sass = sass;
exports.html = html;
exports.prod = prod;
