const stream = require('stream')

class Map extends stream.Transform {
  constructor(fn) {
    super({ objectMode: true, highWaterMark: 16 })
    this.fn = fn
  }

  _transform(file, enc, callback) {
    if (typeof this.fn === 'function') {
      return this.fn(file, callback)
    }
    else {
      callback(null, file)
    }
  }
}

function compile(options) {
  if (!(typeof options === 'object')) options = {}
  return new Map(function (file, callback) {
    const text = eval('(function(options){ return `' + file.contents.toString() + '` })')(options)
    file.contents = Buffer.from(text)
    callback(null, file)
  })
}

exports.map = (fn) => { return new Map(fn) }
exports.compile = compile
