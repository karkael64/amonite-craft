const { Transform } = require('stream')

class Map extends Transform {
  constructor(fn, opts) {
    if (typeof fn === 'object') opts = fn;
    super(opts)
    this._mapper = fn
  }

  _transform(file, enc, callback) {
    if (typeof this._mapper === 'function') {
      return this._mapper(file, callback)
    }
    else {
      callback(null, file)
    }
  }
}

function map (fn, opts) {
  return new Map(fn, opts)
}

module.exports = map
