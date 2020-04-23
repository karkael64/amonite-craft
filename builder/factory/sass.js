const { src, concat, watch, map } = require('./stream')
const sassStream = require('./stream/sass')

const path = require('path')

function sass (then, config) {
  if (!config.styleEntry) {
    throw new Error('Please set config styleEntry')
  }
  if (!config.styleOutput) {
    throw new Error('Please set config styleOutput')
  }
  const styleOutput = path.resolve(config.localServer.folder, config.styleOutput)

  console.log(`Create style file…`)
  return src(config.styleEntry)
    .pipe(sassStream())
    .pipe(concat(styleOutput))
    .on('finish', () => {
      console.log(`Style file created at \t${styleOutput}`)
      if (then) then()
    })  
}

function reloadSass (then, config) {
  if (!config.styleListen) {
    throw new Error('Please set config styleListen')
  }

  return src(config.styleListen)
    .pipe(map((file, callback) => {
      console.log(`Watch style files at:\t${file}`)
      callback(null, file)
    }))
    .pipe(watch((eventname, filename) => {
      const ext = path.extname(filename)
      if (ext === '.scss') {
        console.log(`File triggered ${eventname} at \t${filename}`)
        sass(null, config)
      }
    }))
    .on('finish', then)
}

exports.sass = sass
exports.reloadSass = reloadSass
