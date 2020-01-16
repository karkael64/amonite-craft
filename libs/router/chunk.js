class ChunkError {
  constructor (message, code = 0, previous = null) {
    const stack = (new Error).stack.split(/\s*[\r\n]+\s*/)
    stack.shift()
    stack.shift()
    Object.assign(this, {message, code, previous, stack})
  }

  toString () {
    return `${this.constructor.name} (${this.code}): ${this.message}\n\t${this.stack.join("\n\t")}\n`
  }
}

const FORMATS = {
  number: (str) => {
    const n = parseFloat(str)
    if (isNaN(n))
      throw new ChunkError("Bad type: expect argument to be a number.")
    return n
  },
  integer: (str) => {
    const n = parseInt(str)
    if (isNaN(n))
      throw new ChunkError("Bad type: expect argument to be an integer.")
    return n
  },
  float: (str) => {
    const n = parseFloat(str)
    if (isNaN(n))
      throw new ChunkError("Bad type: expect argument to be a float.")
    return n
  },
  string: (str) => {
    try {
      const s = JSON.parse(str)
      if (typeof s === "string")
        return s
    }
    catch (e) {}
    return str
  },
  json: (str) => {
    try {
      const o = JSON.parse(str)
      if (typeof o === "object")
        return o
    }
    catch (e) {}
    throw new ChunkError("Bad type: expect argument to be a json object.")
  },
  jsonarray: (str) => {
    try {
      const o = JSON.parse(str)
      if (typeof o === "object" && Array.isArray(o))
        return o
    }
    catch (e) {}
    throw new ChunkError("Bad type: expect argument to be a json array.")
  },
  jsonobject: (str) => {
    try {
      const o = JSON.parse(str)
      if (typeof o === "object" && !Array.isArray(o))
        return o
    }
    catch (e) {}
    throw new ChunkError("Bad type: expect argument to be a json object not array.")
  },
  boolean: (str) => {
    try {
      const b = JSON.parse(str)
      if (typeof b === "boolean")
        return b
    }
    catch (e) {}
    throw new ChunkError("Bad type: expect argument to be a boolean.")
  },
  any: (str) => {
    try {
      return JSON.parse(str)
    }
    catch (e) {}
    return str
  },
  uuid: (str) => {
    if (str.match(/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/))
      return str
    else
      throw new ChunkError("Bad type: expect argument to be an uuid.")
  },
  date: (str) => {
    if (str.match(/^\d{4}-\d{2}-\d{2}$/))
      return new Date(str)
    else
      throw new ChunkError("Bad type: expect argument to be a date.")
  },
  time: (str) => {
    const found = str.match(/^(2[0-3]|[01][0-9]):([0-5][0-9])(:([0-5][0-9])(.(\d{1,3}))?)?$/)
    if (found) {
      const dt = new Date()
      dt.setHours(found[1])
      dt.setMinutes(found[2])
      if (found[3]) dt.setSeconds(found[4])
      if (found[5]) dt.setMilliseconds(found[6])
      return
    }
    else
      throw new ChunkError("Bad type: expect argument to be a time.")
  },
  datetime: (str) => {
    const date = new Date(str)
    if (!isNaN(+date))
      return date
    else
      throw new ChunkError("Bad type: expect argument to be any Date format.")
  },
  jsondate: (str) => {
    const date = new Date(str)
    if (!isNaN(+date))
      return date
    else
      throw new ChunkError("Bad type: expect argument to be any Date format.")
  },
  integerdate: (str) => {
    const date = new Date(parseInt(str))
    if (!isNaN(+date))
      return date
    else
      throw new ChunkError("Bad type: expect argument to be an integer.")
  }
}

function isObject(el) {
  return typeof el === "object" && el !== null
}


/**
 * @function <ruleToObject>
 * @param {Object|RegExp|Function|string}
 * @return {Object}
 */

function ruleToObject (rule) {
  const res = {}
  if (typeof rule === "object") {
    if (rule instanceof RegExp) {
      res.regexp = rule
    } else {
      if (rule.value) res.value = rule.value
      if (rule.key) res.key = rule.key
      if (rule.type) res.type = rule.type
      if (rule.regexp) res.regexp = rule.regexp
      if (rule.match) res.match = rule.match
      if (rule.transform) res.transform = rule.transform
    }
  }
  if (typeof rule === "function") {
    res.transform = rule
  }
  if (typeof rule === "string") {
    if (rule === "*") {
      return {}
    }
    const split = rule.split(":")
    if (split.length > 1) {
      const key = split.shift(),
        type = split.join(":")
      res.type = type
      if (key.length) {
        res.key = key
      }
    } else {
      res.value = rule
    }
  }
  return res
}


/**
 * @function <testValue>
 * @param {Object} rule
 * @param {string} value
 * @return {Object}
 * @throws {ChunkError}
 */

function testValue (rule, value) {
  if (rule.value !== undefined) {
    if (rule.value === value) {
      return { value }
    } else {
      throw new ChunkError("Chunk value does not match")
    }
  }

  const res = {}
  if (rule.type !== undefined) {
    if (FORMATS[rule.type] !== undefined) {
      res.value = FORMATS[rule.type](value)
      res.type = rule.type
    } else {
      throw new ChunkError("Chunk value match type does not exists")
    }
  } else {
    res.value = value
  }

  if (rule.regexp instanceof RegExp) {
    const found = value.match(rule.regexp)
    if (found) {
      res.regexp = rule.regexp
      if (isObject(rule.match)) {
        const el = Object.keys(rule.match).find(m => rule.match[m] === found[0])
        if (el !== undefined) {
          res.index = el
        } else {
          throw new ChunkError("Chunk RegExp found value does not match listed values")
        }
      }
    } else {
      throw new ChunkError("Chunk value does not match RegExp")
    }
  } else {
    if (isObject(rule.match)) {
      const el = Object.keys(rule.match).find(m => rule.match[m] === value)
      if (el !== undefined) {
        res.index = el
      } else {
        throw new ChunkError("Chunk value does not match listed values")
      }
    }
  }

  if (typeof rule.transform === "function") {
    res.original = value
    res.transform = rule.transform
    return rule.transform(res)
  }

  return res
}


/**
 * @function <extractArgs>
 * @param {Object} rule
 * @param {string} chunk
 * @return {Object}
 * @throws {ChunkError}
 */

function extractArgs (rule, chunk) {
  if (rule.key !== undefined) {
    const split = chunk.split(":")
    if (split.length > 1) {
      const key = split.shift(),
        value = split.join(":"),
        res = testValue(rule, value)
      res.key = rule.key
      return res
    } else {
      throw new ChunkError("Chunk content does not match key/value format")
    }
  } else {
    return testValue(rule, chunk)
  }
}


/**
 * @function <createPath>
 * @param {Object} rule
 * @param {string} value
 * @return {string}
 * @throws {ChunkError}
 */

function createPath(rule, value) {
  const res = (rule.key ? rule.key + ":" : "") + value

  if (rule.type !== undefined) {
    try {
      FORMATS[rule.type](value)
    } catch (e) {
      throw new ChunkError("Value does not match path requirements")
    }
  }

  if (rule.regexp instanceof RegExp) {
    const found = value.match(rule.regexp)
    if (found) {
      if (Array.isArray(rule.match) && rule.match.indexOf(found[0]) === -1) {
        throw new ChunkError("Value does not match path requirements")
      }
    } else {
      throw new ChunkError("Value does not match path requirements")
    }
  } else {
    if (Array.isArray(rule.match) && rule.match.indexOf(value) === -1) {
      throw new ChunkError("Value does not match path requirements")
    }
  }


  return res
}


class Chunk {
  constructor (rule) {
    this.original = rule
    this.rule = ruleToObject(rule)
  }

  extractArgs (chunk) {
    return extractArgs(this.rule, "" + chunk)
  }

  createPath (value) {
    return createPath(this.rule, "" + value)
  }

  setType (type) {
    this.rule.type = type
    return this
  }

  setTransform (transform) {
    if (typeof transform === "function") {
      this.rule.transform = transform
    } else {
      throw new Error("First parameter should be a Function")
    }
    return this
  }

  setRegExp (regexp) {
    if (regexp instanceof RegExp) {
      this.rule.regexp = regexp
    } else {
      throw new TypeError("First parameter should be a RegExp instance")
    }
    return this
  }

  addMatcher (matcher) {
    if (!this.rule.match) {
      this.rule.match = []
    }
    this.rule.match.push(matcher)
    return this
  }

  setMatchers (matchers) {
    if (Array.isArray(matchers)) {
      this.rule.match = matchers
    } else {
      throw new TypeError("First parameter should be an Array")
    }
    return this
  }

  static addFormat (name, formatter) {
    if (!(typeof formatter === "function")) {
      throw new TypeError("Second parameter should be a Function")
    }
    if (FORMATS[name]) {
      throw new TypeError(`Type ${name} already exists`)
    }
    FORMATS[name] = formatter
  }
}


export default Chunk
