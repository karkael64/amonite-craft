export default class MainTableData {
  constructor (list, total, first, max) {
    if (Array.isArray(list)) {
      this.list = list
    } else {
      throw new TypeError("First argument is not an array")
    }

    if (!Number.isNaN(total = parseInt(total))) {
      this.total = total
    } else {
      throw new TypeError("Second argument is not a number")
    }

    if (!Number.isNaN(first = parseInt(first))) {
      this.first = first
    } else {
      throw new TypeError("Third argument is not a number")
    }

    if (!Number.isNaN(max = parseInt(max))) {
      this.max = max
    } else {
      throw new TypeError("Fourth argument is not a number")
    }
  }

  getList () {
    return this.list
  }

  getTotal () {
    return this.total
  }

  getMax () {
    return this.max
  }

  getFirst () {
    return this.first
  }
}
