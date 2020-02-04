const fs = require("fs")
const path = require("path")

let default_root = null


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

async function getNodeModulePathEntry (root, name) {
  try {
    const config = await readJsonFile(path.resolve(root, name, "package.json"))
    if (config.main) {
      return path.resolve(root, name, config.main)
    }
  } catch (e) {}
  return path.resolve(root, name)
}

async function getPathEntry (str, allowedExtensions) {
  if (await fileExists(str)) return str
  if (!Array.isArray(allowedExtensions)) allowedExtensions = [".js"]
  for (let i = 0; i < allowedExtensions.length; i++) {
    if (await fileExists(str + ".js")) return str + allowedExtensions[i]
    if (await fileExists(str + "/index.js")) return str + "/index" + allowedExtensions[i]
  }
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

async function getRequireEntry (required, from, allowedExtensions) {
  if (default_root === null) {
    default_root = await getNodeModulesPath(process.cwd())
  }
  if (!from) from = process.cwd()
  if (required.match(/^\.{0,2}\//)) {
    return await getPathEntry(path.resolve(path.dirname(from), required), allowedExtensions)
  } else {
    const
      custom_root = await getNodeModulesPath(from),
      custom_path = await getNodeModulePathEntry(custom_root, required),
      found_path = await getPathEntry(custom_path, allowedExtensions)
    if (!found_path && custom_root !== default_root) {
      const default_path = await getNodeModulePathEntry(default_root, required)
      return await getPathEntry(default_path, allowedExtensions)
    } else {
      return found_path
    }
  }
}

module.exports = getRequireEntry
