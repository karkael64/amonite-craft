const { src, concat, watch, map } = require("./stream")
const sassStream = require("./stream/sass")

const path = require("path")
const documentConfig = require("../../test/config/document.config.json")
const file = path.resolve("./build", documentConfig.design)

function sass (then) {
  console.log(`Create style file…`)
  return src("./test/app/main/index.scss")
    .pipe(sassStream())
    .pipe(concat(file))
    .on("finish", () => {
      console.log(`Style file created at:\t${file}`)
      if (then) then()
    })
}

function reloadSass(then) {
  return src("./test/app")
    .pipe(map((file, callback) => {
      console.log(`Watch style files at:\t${file}`)
      callback(null, file)
    }))
    .pipe(watch((eventname, filename) => {
      const ext = path.extname(filename)
      if (ext === ".scss") sass()
    }))
    .on("finish", then)
}

exports.sass = sass
exports.reloadSass = reloadSass
