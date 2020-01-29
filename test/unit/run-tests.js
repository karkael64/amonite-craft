const vm = require("vm")
const path = require("path")
const { getTestFilesCode, translators } = require("./test-files-code")
const context = require("./functions")


/**
 * @method runTests load every test files, compile script with required files
 *    then execute them
 * @param {object} opts the options for the babel translation
 * @param {string} dir the directory where we search test files
 * @param {string} match a matcher for filtering test files
 * @return {Promise}
 */

async function runTests(opts, dir = "", match = "\\.test\\.js$") {
  const { describe } = context
  const files_code = await getTestFilesCode(opts, path.resolve(dir), match)
  const files = Object.keys(files_code)

  try {
    await describe("Global", async function () {
      process.exitCode = 0
      let file, code, ctx
      while (files.length) {
        file = files.shift()
        script = files_code[file]
        ctx = vm.createContext(context)
        try {
          await script.runInContext(ctx)
        } catch (err) {
          process.exitCode++
          process.stdout.write("\n")
          process.stderr.write(err.stack + "\n")
        }
      }
    })
  } catch (err) {
    process.stdout.write("\n")
    process.stderr.write(err.stack + "\n")
  }
  process.stdout.write("\n")
}

module.exports = Object.assign(runTests, {
  runTests,
  context,
  translators
})
