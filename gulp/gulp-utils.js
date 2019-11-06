const { Transform } = require('stream')
const fs = require("fs")

class Map extends Transform {
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

function map (fn) {
  return new Map(fn)
}

function compile(options) {
  if (!(typeof options === 'object')) options = {}
  return map(function (file, callback) {
    const text = eval('(function(options){ return `' + file.contents.toString() + '` })')(options)
    callback(null, Buffer.from(text))
  })
}

class Concat extends Transform {
  constructor(filepath, opts) {
    if (typeof filepath === "object") opts = filepath;
    super(opts)
    this._data = [];
    this._filepath = filepath;
  }

  _transform(buf, enc, callback) {
    this._data.push(buf);
    callback();
  }

  _flush(callback) {
    const data = Buffer.concat(this._data);
    if (this._filepath) fs.writeFile(this._filepath, data, function (err) {
      if (err) callback(err);
      else callback(null, data);
    })
    else callback(null, data);
  }
}

function concat(filepath, opts) {
  return new Concat(filepath, opts)
}

exports.map = map
exports.concat = concat
exports.compile = compile
