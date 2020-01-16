const path = require("path")

const browserify = require("browserify")
const babelify = require("./babelify")
const { src, map, concat, watch } = require("./stream")

const documentConfig = require("../test/config/document.config.json")
const file = path.resolve("./build", documentConfig.run)
const extensions = [".js", ".json", ".html", ".po"]

function babel(then) {
  console.log(`Create script file`);
  return browserify("./test/app/main/index.js", { debug: true })
    .transform(babelify, { presets: ["@babel/env"], sourceMaps: true, extensions })
    .bundle()
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
