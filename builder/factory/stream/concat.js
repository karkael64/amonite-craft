const { Transform } = require('stream')
const fs = require('fs')

class Concat extends Transform {
  constructor(filepath, opts) {
    if (typeof filepath === 'object') opts = filepath;
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

module.exports = concat
