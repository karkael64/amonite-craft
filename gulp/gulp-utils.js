const stream = require('stream');

class Map extends stream.Transform {
  constructor(fn) {
    super({ objectMode: true, highWaterMark: 16 });
    this.fn = fn;
  }

  _transform(file, enc, callback) {
    return this.fn(file, callback);
  }
}

exports.map = (fn) => { return new Map(fn); };
