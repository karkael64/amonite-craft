const fs = require('fs');
const babelStream = require('./stream/babel')
const { src, concat, map } = require('./stream')

function prod(then, config) {
  if (!config.scriptEntry) {
    throw new Error("Please set config scriptEntry")
  }
  if (!config.scriptOutput) {
    throw new Error("Please set config scriptOutput")
  }

  console.log(`Create script file at:\t${config.scriptOutput}`);
  return src(config.scriptEntry)
    .pipe(babelStream(config.babelConfig))
    .pipe(map(function (buf, callback) {
      const out = Buffer.concat([
        Buffer.from('var req='), 
        buf,
        Buffer.from('\nmodule.exports=req[\'default\'];\n')])
      callback(null, out)
    }))
    .pipe(concat(config.scriptOutput))
    .on('end', () => {
      console.log(`Script file created`)
      then()
    })
}

exports.prod = prod
