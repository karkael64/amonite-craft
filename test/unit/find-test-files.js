const {exec} = require("child_process")
const path = require("path")

function getTestFiles (dir = ".", match = "\\.test\\.js$") {
  return new Promise((resolve, reject) => {
    exec(`find ${dir} | grep -e '${match}'`, (err, msg) => {
      if (err) reject(err)
      else {
        const paths = msg
                      .split("\n")
                      .filter(s => s.length)
                      .map(s => path.resolve(s))
        resolve(paths)
      }
    })
    // Windows style:
    // exec(`dir /s /b /o:n | findstr -r '${match}'`, (err, msg) => {})
  })
}

module.exports = getTestFiles
