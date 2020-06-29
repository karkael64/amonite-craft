const path = require('path')

const { src, concat, watch, map } = require('../stream')
const babelStream = require('../stream/babel')


function babel(then, config) {

  if (!config.scriptEntry) {
    throw new Error('Please set config scriptEntry')
  }
  if (!config.scriptOutput) {
    throw new Error('Please set config scriptOutput')
  }
  const scriptOutput = path.resolve(config.localServer.folder, config.scriptOutput)

  console.log(`Create script file…`);
  return src(config.scriptEntry)
    .pipe(babelStream(config.babelConfig))
    .pipe(concat(scriptOutput))
    .on('finish', () => {
      console.log(`Script file created at:\t${scriptOutput}`)
      if (then) then()
    })
}


function reloadBabel(then, config) {
  if (!config.scriptListen) {
    throw new Error('Please set config scriptListen')
  }
  const extensions = config.scriptExtensions || ['.js']

  return src(config.scriptListen)
    .pipe(map((file, callback) => {
      console.log(`Watch script files at:\t${file}`)
      callback(null, file)
    }))
    .pipe(watch((eventname, file) => {
      const ext = path.extname(file)
      if (extensions.indexOf(ext) !== -1) {
        console.log(`File triggered ${eventname} at \t${file}`)
        babel(null, config)
      }
    }))
    .on('finish', then)
}


exports.babel = babel
exports.reloadBabel = reloadBabel
