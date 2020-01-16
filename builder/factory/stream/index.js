const concat = require("./concat")
const map = require("./map")
const src = require("./src")
const watch = require("./watch")

function serie () {
  const list = [...arguments]

  return function (then) {
    function next () {
      if (!list.length) then()
      const fn = list.shift()

      if (fn.length) {
        return fn(next)
      }
      else {
        throw new Error("Function should have a callback")
      }
    }

    next()
  }
}

function parallel (then) {
  const list = [...arguments]
  var len = arguments.length

  return function (then) {
    function end() {
      len--
      if (!len) then()
    }

    list.forEach((fn) => {
      if (fn.length) {
        fn(end)
      }
      else {
        throw new Error("Function should have a callback")
      }
    })
  }
}

exports.concat = concat
exports.map = map
exports.src = src
exports.watch = watch
exports.serie = serie
exports.parallel = parallel
