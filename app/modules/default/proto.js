function flat (depth = 1) {
  const res = depth <= 1 ? [] : this.flat(depth - 1);
  this.forEach(function (item) {
    if (Array.isArray(item)) {
      item.forEach(function (element) {
        res.push(element)
      })
    } else {
      res.push(item)
    }
  })
  return res
}

Object.defineProperty(Array.prototype, "flat", { enumerable: false, value: flat })
