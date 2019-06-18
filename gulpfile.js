const { series } = require('gulp');

const { dev, build, icons } = require( './gulp/gulp.dev' );
const { prod } = require( './gulp/prod' );

exports.default = dev;
exports.build = build;
exports.dev = dev;
exports.icons = icons;
exports.prod = prod;
