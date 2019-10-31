const { src, watch } = require('gulp')
const iconfontCss = require('gulp-iconfont-css')
const gulpIconfont = require('gulp-iconfont')
const { map } = require('./gulp-utils')

const fs = require('fs')
const path = require('path')
const documentConfig = require('../test/config/document.config.json')
const dir = path.resolve('./build', documentConfig.fonts);

const fontName = 'icons'

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
    .pipe(map(function (file, then) {
      const filepath = file.history[file.history.length-1]
      const ext = path.extname(filepath);

      if (ext === '.scss') {
        const filename = path.basename(filepath)
        const sdir = path.dirname(filepath)

        try {
          fs.accessSync(sdir)
        } catch (err) {
          fs.mkdirSync(sdir)
        }

        const dest = `${sdir}/${filename}`
        return fs.writeFile(dest, file._contents, then)
      }
      else {
        const filename = path.basename(filepath)

        try {
          fs.accessSync(dir)
        } catch (err) {
          fs.mkdirSync(dir)
        }

        const dest = `${dir}/${filename}`
        return fs.writeFile(dest, file._contents, then)
      }
    }))
}

function reloadIcons(then) {
  watch('./test/app/**/*.svg', icons)
  then()
}

exports.icons = icons
exports.reloadIcons = reloadIcons
