const { src, dest, watch } = require('gulp');
const iconfontCss = require('gulp-iconfont-css');
const gulpIconfont = require('gulp-iconfont');

const fontName = 'icons';

function icons() {
  return src(['./test/app/**/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      fontPath: './fonts/',
      path: './test/config/icons.tpl-scss',
      targetPath: '../../test/app/icons/icons.scss'
    }))
    .pipe(gulpIconfont({
      fontName: fontName,
      fontHeight: 1000,
      descent: 136,
      winAscent: 833,
      winDescent: 103,
      normalize: true
    }))
    .pipe(dest('./build/fonts/'));
}

function reloadIcons(then) {
  watch('./test/app/**/*.svg', icons);
  then();
}

exports.icons = icons;
exports.reloadIcons = reloadIcons;
