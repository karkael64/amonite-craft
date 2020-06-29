const exec = require('child_process').exec
const stream = require('stream')
const path = require('path')
const fs = require('fs')

class SrcStream extends stream.Transform {
  constructor () {
    super()
    this.foundFiles = []
  }

  pushFiles (files) {
    if (Array.isArray(files)) {
      const self = this
      files.forEach((file) => {
        self.push(file)
        self.foundFiles.push(file)
      })
      this.end()
    }
  }

  async findFiles (matcher, into) {
    this.pushFiles(await findFiles(matcher, into))
    return this.foundFiles
  }
}


async function readdir (dir) {
  return await new Promise((resolve, reject) => {
    const cmd = `find ${dir} -type f`
    exec(cmd, function (err, stdout, stderr) {
      if (err) return reject(err)
      if (stdout) return resolve(stdout.split('\n').filter((file) => file.length))
      if (stderr) return reject(new Error(`Command "${cmd}" has thrown an error`))
    })
  })
}

async function findFiles (matcher, into = '') {
  into = path.resolve(process.cwd(), into)

  if (Array.isArray(matcher)) {
    return (await Promise.all(matcher.map(async (match) => {
      return await findFiles(match, into)
    }))).flat()
  }

  if (typeof matcher === 'string') return [path.resolve(into, matcher)]
  if (typeof matcher === 'function') return await findFilesByFunction(matcher, into)
  if (matcher instanceof RegExp) return await findFilesByRegExp(matcher, into)
  throw new Error('First parameter should be a RegExp or a function')
}

async function findFilesByRegExp (matcher, into) {
  const files = await readdir(into)
  return files.filter((file) => {
    return file.match(matcher)
  })
}

async function findFilesByFunction (matcher, into) {
  const files = await readdir(into)
  return await files.filter(async (file) => {
    return await matcher(file)
  })
}

function src (matchers, into) {
  const src = new SrcStream
  src.findFiles(matchers, into)
  return src
}

module.exports = src
