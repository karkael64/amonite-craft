const path = require("path")

const { src, concat, watch, map } = require("./stream")
const babelStream = require("./stream/babel")

const documentConfig = require("../../test/config/document.config.json")
const file = path.resolve("./build", documentConfig.run)
const extensions = [".js"]

function babel(then) {
  console.log(`Create script file…`);
  return src("./test/app/main/index.js")
    .pipe(babelStream())
    .pipe(concat(file))
    .on("finish", () => {
      console.log(`Script file created at:\t${file}`)
      if (then) then()
    })
}

function reloadBabel(then) {
  return src("./test/app")
    .pipe(map((file, callback) => {
      console.log(`Watch script files at:\t${file}`)
      callback(null, file)
    }))
    .pipe(watch((eventname, file) => {
      const ext = path.extname(file)
      if (extensions.indexOf(ext) !== -1) {
        console.log(`File changed at:\t${file}`)
        babel()
      }
    }))
    .on("finish", then)
}

exports.babel = babel
exports.reloadBabel = reloadBabel
