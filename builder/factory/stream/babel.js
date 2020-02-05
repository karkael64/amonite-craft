const map = require("./map")
const babelUnifyer = require("babel-unifyer")

function babel(config) {
  if (!(typeof options === 'object')) options = {}
  return map((filepath, callback) => {
    babelUnifyer(filepath.toString(), config).then(script => {
      callback(null, script)
    }).catch(err => {
      console.error(err)
      callback(err, null)
    })
  })
}

module.exports = babel
