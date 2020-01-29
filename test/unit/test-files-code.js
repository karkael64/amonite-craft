const getTestFiles = require("./find-test-files")
const { compileScript, translators } = require("./compile-script")


/**
 * @function getTestFilesCode create an object associating test files path and
 *    its script
 * @param {object} opts the options for the babel translation
 * @param {string} dir the directory where we search test files
 * @param {string} match a matcher for filtering test files
 * @return {Promise.<{object} list>.<{Error} err>} reject an error if :
 *    - a file required is not reachable
 *    - there is an error at compilation
 */

async function getTestFilesCode (opts, dir = ".", match = "\\.test\\.js$") {
  const paths = await getTestFiles(dir, match)
  const list = {}
  await Promise.all(paths.map(async (path) => {
    list[path] = await compileScript(path, opts)
  }))
  return list
}

module.exports = Object.assign(getTestFilesCode, {
  getTestFilesCode,
  translators
})
