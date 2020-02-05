const path = require("path")

const { src, concat, watch } = require("./stream")
const babelStream = require("./stream/babel")

const documentConfig = require("../../test/config/document.config.json")
const file = path.resolve("./build", documentConfig.run)
const extensions = [".js"]

function babel(then) {
  console.log(`Create script file`);
  return src("./test/app/main/index.js")
    .pipe(babelStream())
    .pipe(concat(file))
    .on("finish", () => {
      console.log(`Script file created at: ${file}`)
      if (then) then()
    })
}

function reloadBabel(then) {
  console.log("Watch script files")
  return src("./test/app")
    .pipe(watch((eventname, filename) => {
      const ext = path.extname(filename)
      if (extensions.indexOf(ext) !== -1) babel()
    }))
    .on("finish", then)
}

exports.babel = babel
exports.reloadBabel = reloadBabel
