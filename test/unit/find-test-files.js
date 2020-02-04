const { exec } = require("child_process")
const path = require("path")


/**
 * @function getTestFiles list directory and subdirectories items of `dir`.
 * @param {string} dir directory starting
 * @param {string} match the filename regexp
 * @return {Promise.<{Array.[{string}]} dirItems>.<{Error} err>} resolves the
 *    item files or reject command (dir does not exist, regexp error, dir is
 *    not authorized)
 */

function getTestFiles (dir = ".", match = "\\.test\\.js$") {
  return new Promise((resolve, reject) => {
    const cmd = (process.platform.substr(0,3) === "win") ?
      `dir /s /b /o:n | findstr -r '${match}'` :
      `find ${dir} | grep -e '${match}'`

    exec(cmd, (err, msg) => {
      if (err) reject(err)
      else {
        const paths = msg
          .split("\n")
          .filter(s => s.length)
          .map(s => path.resolve(s))
        resolve(paths)
      }
    })
  })
}

module.exports = getTestFiles
