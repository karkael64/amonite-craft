class TestScope {
  constructor (title, run) {
    this.title = title
    this.run = run
    this.parent = TestScope.getCurrent()
    this.sub = []
    this.restituteItems = []
    if (this.parent) {
      this.depth = this.parent.depth + "  "
      this.parent.addSub(this)
    }
    else {
      this.depth = ""
    }
    this.countExpect = 0
    this.countError = 0
  }

  addSub (sub) {
    if (sub instanceof TestScope) this.sub.push(sub)
    else throw new Error("Bad arguments")
  }

  execute () {
    const self = this
    return new Promise((resolve, reject) => {
      try {
        self.start()

        const run = self.run
        if (run.length) {
          run((err, result) => {
            self.end(err, result).then(resolve).catch(reject)
          })
        }
        else {
          const res = run()
          if (res instanceof Promise) {
            res.then(function (ret) {
              self.end(null, res).then(resolve).catch(reject)
            }).catch(function (err) {
              self.end(err).then(resolve).catch(reject)
            })
          }
          else {
            self.end(null, null).then(resolve).catch(reject)
          }
        }
      }
      catch (e) {
        self.end(e, null).then(resolve).catch(reject)
      }
    })
  }

  async executeSub () {
    const len = this.sub.length
    if (len) {
      process.stdout.write("\n")
    }
    for (var i = 0; i < len; i++) {
      await this.sub[i].execute()
    }
  }

  start () {
    process.stdout.write(`${this.depth} \x1b[2m${this.title}: \x1b[m`)
    this.startDate = new Date
    TestScope.stack.push(this)
  }

  async end (error, result) {
    if (!error) {
      try {
        await this.executeSub()
      }
      catch (e) {
        error = e
      }
    }

    if (!this.countExpect) {
      error = new Error("No expectation")
    }

    this.endDate = new Date
    const elapsed = this.endDate.valueOf() - this.startDate.valueOf()
    if (error) {
      process.stdout.write(`\n${this.depth} \x1b[0;31m${this.title}: KO ${error.constructor.name} (${error.code}): ${JSON.stringify(error.message)} (${this.countError}/${this.countExpect}) ${elapsed}ms\x1b[m`)
      TestScope.stack.pop()
      throw error
    } else {
      if (this.sub.length) {
        process.stdout.write(`${this.depth} \x1b[0;32m${this.title}: OK (${this.countExpect} succeded) ${elapsed}ms\x1b[m\n`)
      } else {
        process.stdout.write(`\x1b[0;32mOK (${this.countExpect} succeded) ${elapsed}ms\x1b[m\n`)
      }
      TestScope.stack.pop()
    }
  }

  incrExpect () {
    this.countExpect++
    if (this.parent) this.parent.incrExpect()
  }

  incrError () {
    this.countError++
    if (this.parent) this.parent.incrError()
  }

  static getCurrent () {
    return TestScope.stack[TestScope.stack.length-1]
  }

  static stack = []
}


/**
 * @function describe register a function `fn` to execute tests in its
 *    execution context titled `title`.
 * @param {string} title to know what does the function tests
 * @param {function} fn execution context for tests
 * @return {Promise.<>.<>}
 */

async function describe (title, fn) {
  const scope = (new TestScope(title, fn))
  if (!scope.parent) {
    await scope.execute()
  }
}


/**
 * @function expect verify `value` is strictly equal to `toBe`, or writes and
 *    throws error `msgError`.
 * @param {*} value
 * @param {*} toBe
 * @param {string|undefined} msgError
 */

function expect (value, toBe, msgError) {
  const
    desc = TestScope.getCurrent(),
    depth = desc ? desc.depth : ""

  if (desc) {
    desc.incrExpect()
  }
  if (value !== toBe) {
    if (desc) {
      desc.incrError()
    }
    if (msgError) {
      process.stdout.write(`\n${depth}   \x1b[0;91mExpectation failed: ${msgError}\x1b[m`)
    } else {
      process.stdout.write(`\n${depth}   \x1b[0;91mExpectation failed: Expected value ${value} to be ${toBe}\x1b[m`)
    }
    throw new Error("Expectation failed!")
  }
}


/**
 * @function objectEquiv compare fields of the two objects as parameter,
 *    but not hidden properties or class builders. It's helpfull for object
 *    comparision without creating new class instance.
 * @param obj1 {object}
 * @param obj2 {object}
 * @return {boolean} `true` if objects are similar
 */

function objectEquiv (obj1, obj2) {
  const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) return false
  return !keys1.find((key1) => {
    if (!keys2.includes(key1)) return true
    const
      val1 = obj1[key1],
      val2 = obj2[key1],
      type1 = typeof val1,
      type2 = typeof val2
    if (type1 !== type2) return true
    if (type1 === "object") return !objectEquiv(val1, val2)
    if (type1 === "function") return type1.toString() !== type2.toString()
    if (val1 !== val2) return true
    return false
  })
}


/**
 * @function shouldThrow execute the parameter `fn` and catch expected error
 * @param {function} fn tested function
 * @return {boolean} `true` if function thrown anything
 */

function shouldThrow (fn) {
  try {
    fn()
    return false
  } catch (e) {
    return true
  }
}


/**
 * @function expectThrow is a short for expect and shouldThrow
 * @param {function} fn
 * @param {string|undefined} msgError
 */

function expectThrow (fn, msgError) {
  return expect(shouldThrow(fn), true, msgError)
}


/**
 * @function expectEquiv is a short for expect and objectEquiv
 * @param {*} value
 * @param {*} toBe
 * @param {string|undefined} msgError
 */

function expectEquiv (value, toBe, msgError) {
  return expect(objectEquiv(value, toBe), true, msgError)
}


const global = {
  describe,
  objectEquiv,
  shouldThrow,
  expect,
  expectThrow,
  expectEquiv,
  console
}

module.exports = global.global = global
