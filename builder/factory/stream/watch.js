const watcher = require('node-watch')
const fs = require('fs')
const map = require('./map')

function watch (listener, delay = 200) {
  return map((filepath, cb) => {
    watcher(filepath.toString(), {
      persistent: true,
      recursive: true,
      encoding: 'utf8',
      ignoreInitial: true,
      delay
    }, listener)
    cb(null, filepath)
  })
}

module.exports = watch
