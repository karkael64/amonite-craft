function directoryPatternMatch (matcher, dirpath) {
  const dirs = dirpath.split("/").filter((el) => el)
  const elems = matcher.split("/").filter((el) => el)

  while (dirs.length && elems.length) {
    const dir = dirs.shift()
    const el = elems.shift()

    if (el === "*") continue
    else if (el === "**") return true
    else if (dir.match(new RegExp(el.replace(/\*/g, ".*")))) continue
    else return false
  }
  return !elems.length
}

function filePatternMatch (matcher, filepath) {
  const dirs = filepath.split("/").filter((el) => el)
  const elems = matcher.split("/").filter((el) => el)

  while (dirs.length && elems.length) {
    const dir = dirs.shift()
    const el = elems.shift()

    if (el === "*") continue
    else if (el !== "**" && dir.match(new RegExp(el.replace(/([\.])/g, "\\$1").replace(/\*/g, ".*")))) continue
    else if (el === "**") {
      elems.unshift("**")
      continue
    }
    else return false
  }
  return !dirs.length
}


console.log(true, directoryPatternMatch("/homes//user/www", "/homes/user/www/test/it.js"))
console.log(false, directoryPatternMatch("/homes/user/www", "/homes/user/test/it.js"))
console.log(true, directoryPatternMatch("/homes//user/www/**/*.js", "/homes/user/www/test/foo/bar"));
console.log(true, filePatternMatch("/homes//user/www/**/*.js", "/homes/user/www/test/foo/bar/it.js"));
console.log(false, filePatternMatch("/homes//user/www/*.js", "/homes/user/www/test/it.js"));
console.log(true, filePatternMatch("/homes//user/www/*.js", "/homes/user/www/it.js"));
