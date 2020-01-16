const fs = require("fs");

(async function (cb) {

  const path = require("path")
  const { getTestFilesCode, compileFile } = require("./babel-test-files")
  const { describe, expect, moke } = require("./functions")

  const code = await getTestFilesCode(path.resolve("../"))
  cb(code, describe, expect, moke)

})(function (_code, describe, expect, moke) {
  eval(_code)
})
