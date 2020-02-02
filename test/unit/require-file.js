const fs = require("fs")
const path = require("path")

function fileExists (filepath) {
  return new Promise((resolve, reject) => {
    fs.stat(filepath, (err, data) => {
      if (err) return resolve(false)
      if (data.isFile()) return resolve(true)
      resolve(false)
    })
  })
}

function dirExists (dirpath) {
  return new Promise((resolve, reject) => {
    fs.stat(dirpath, (err, data) => {
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

function readJsonFile (filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, (err, contents) => {
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

/**
 * @function getRequireEntry resolve a string path (formatted for nodejs
 *    `require` function) to the filesystem absolute path. Also reads the
 *    `node_modules` path and `package.json`.
 * @param {string} required path of a nodejs require function
 * @param {string} from path of the file calling the require function
 * @return {Promise.<{string} absolutePath>.<{Error} err> resolve the
 *    absolute path
 */

async function getRequireEntry (required, from) {
  if (!from) from = process.cwd()
  if (required.match(/^\.{0,2}\//)) {
    return await getPathEntry(path.resolve(path.dirname(from), required))
  } else {
    return await getPathEntry(await getNodeModulePathEntry(from, required))
  }
}

module.exports = getRequireEntry
