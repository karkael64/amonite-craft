const { series } = require('gulp');

const { dev, build, icons } = require( './gulp/gulp.dev' );

exports.default = dev;
exports.build = build;
exports.dev = dev;
exports.icons = icons;
