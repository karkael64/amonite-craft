const fs = require("fs")
const path = require("path")

function fileExists (path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, data) => {
      if (err) return resolve(false)
      if (data.isFile()) return resolve(true)
      resolve(false)
    })
  })
}

function dirExists (path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, data) => {
      if (err) return resolve(false)
      if (data.isDirectory()) return resolve(true)
      resolve(false)
    })
  })
}

function getNodeModulesPath (from) {
  return new Promise(async (resolve, reject) => {
    previous = null
    while (!(await dirExists(from + "/node_modules"))) {
      previous = from
      from = path.dirname(from)
      if (from === previous) resolve(null)
    }
    resolve(from + "/node_modules")
  })
}

function readJsonFile (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, contents) => {
      if (err) reject(err)
      else resolve(JSON.parse(contents.toString()))
    })
  })
}

async function getNodeModulePathEntry (from, name) {
  const root = await getNodeModulesPath(from)
  try {
    const config = await readJsonFile(path.resolve(root, name, "package.json"))
    if (config.main) {
      return path.resolve(root, name, config.main)
    }
  } catch (e) {}
  return path.resolve(root, name)
}

async function getPathEntry (str) {
  if (await fileExists(str)) return str
  if (await fileExists(str + ".js")) return str + ".js"
  if (await fileExists(str + "/index.js")) return str + "/index.js"
  return null
}

async function getRequireEntry (required, from) {
  if (!from) from = process.cwd()
  if (required.match(/^\.{0,2}\//)) {
    return await getPathEntry(path.resolve(path.dirname(from), required))
  } else {
    return await getPathEntry(await getNodeModulePathEntry(from, required))
  }
}

module.exports = getRequireEntry
