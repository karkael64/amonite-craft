const concat = require("./concat")
const map = require("./map")
const src = require("./src")
const watch = require("./watch")

function serie () {
  const list = [...arguments]

  return function (then, config) {
    function next () {
      if (!list.length && then) {
        return then()
      }
      
      const fn = list.shift()
      if (fn.length) {
        return fn(next, config)
      }
      else {
        fn()
        next()
      }
    }

    next()
  }
}

function parallel () {
  const list = [...arguments]
  var len = arguments.length

  return function (then, config) {
    function end() {
      len--
      if (!len) then()
    }

    while (list.length) {
      const fn = list.shift()
      if (fn.length) {
        fn(end, config)
      }
      else {
        fn()
        end()
      }
    }
  }
}

exports.concat = concat
exports.map = map
exports.src = src
exports.watch = watch
exports.serie = serie
exports.parallel = parallel
