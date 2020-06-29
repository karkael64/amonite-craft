const { src, concat } = require('../stream')
const compile = require('../stream/compile')

const path = require('path')

function document(then, config) {
  if (!config.templateOutput) {
    throw new Error('Please set config templateOutput')
  }
  if (!config.templateEntry) {
    throw new Error('Please set config templateEntry')
  }
  const templateOutput = path.resolve(config.localServer.folder, config.templateOutput)

  console.log(`Create html file…`)
  return src(config.templateEntry)
    .pipe(compile(config))
    .pipe(concat(templateOutput))
    .on('finish', () => {
      console.log(`Html file created at:\t${config.templateOutput}`)
      if (then) then()
    })
}

exports.html = document
