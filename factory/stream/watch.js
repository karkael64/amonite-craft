const fs = require("fs")
const map = require("./map")

function watch (listener) {
  return map((filepath, cb) => {
    fs.watch(filepath.toString(), {
      persistent: true,
      recursive: true,
      encoding: "utf8"
    }, listener)
  })
}

module.exports = watch
