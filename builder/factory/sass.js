const src = require("./stream/src")
const concat = require("./stream/concat")
const sassStream = require("./stream/sass")
const watch = require('./stream/watch')

const path = require("path")
const documentConfig = require("../test/config/document.config.json")
const file = path.resolve("./build", documentConfig.design)

function sass (then) {
  console.log(`Create style file`)
  return src("./test/app/main/index.scss")
    .pipe(sassStream())
    .pipe(concat(file))
    .on("finish", () => {
      console.log(`Style file created at: ${file}`)
      if (then) then()
    })
}

function reloadSass(then) {
  console.log("Watch style files")
  return src("./test/app")
    .pipe(watch((eventname, filename) => {
      const ext = path.extname(filename)
      if (ext === ".scss") sass()
    }))
    .on("finish", then)
}

exports.sass = sass
exports.reloadSass = reloadSass
