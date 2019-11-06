const { src, concat } = require("./stream")
const compile = require("./stream/compile")

const path = require("path")
const config = require("../test/config/document.config.json")
const file = path.resolve("./build", config.page)

function document(then) {
  console.log(`Create html file`)
  return src("./test/config/document.template.html")
    .pipe(compile(config))
    .pipe(concat(file))
    .on("finish", () => {
      console.log(`Html file created at: ${file}`)
      if (then) then()
    })
}

exports.html = document
