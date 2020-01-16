const {exec} = require("child_process")
const fs = require("fs")
const path = require("path")
const babelCore = require("@babel/core")


class MokeEnv {
  constructor () {
    this.restituteItems = []
  }

  moke (obj, field, replacement) {
    this.restituteItems.push({
      obj,
      field,
      descriptor: Object.getOwnPropertyDescriptor(obj, field)
    })
    obj[field] = replacement
  }

  mokeDescriptor (obj, field, desc) {
    this.restituteItems.push({
      obj,
      field,
      descriptor: Object.getOwnPropertyDescriptor(obj, field)
    })
    Object.defineProperty(obj, field, desc)
  }

  unmoke (obj, field) {
    const key = this.restituteItems.findKey(item => item.obj === obj && item.field === field)
    if (key) {
      const found = this.restituteItems.splice(key, 1)
      Object.defineProperty(found.obj, found.field, found.descriptor)
    }
  }

  unmokeAll () {
    this.restituteItems.forEach(item => Object.defineProperty(item.obj, item.field, item.descriptor))
    this.restituteItems.splice(0)
  }
}


//# CLASS TestScope

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
    this.countExpect++;
    if (this.parent) this.parent.incrExpect();
  }

  incrError () {
    this.countError++;
    if (this.parent) this.parent.incrError();
  }

  static getCurrent () {
    return TestScope.stack[TestScope.stack.length-1]
  }

  static stack = []
}

async function describe (title, fn) {
  const scope = (new TestScope(title, fn))
  if (!scope.parent) {
    try {
      await scope.execute()
    }
    catch (e) {
      console.error("\n" + e.toString())
    }
    globalMoke.unmokeAll()
  }
}

function expect (value, toBe, msgError) {
  const
    desc = TestScope.getCurrent(),
    depth = desc ? desc.depth : "";

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

const globalMoke = new MokeEnv

function moke (obj, field, replacement) {
  globalMoke.moke(obj, field, replacement)
}

function mokeDescriptor (obj, field, desc) {
  globalMoke.mokeDescriptor(obj, field, replacement)
}

function unmoke (obj, field) {
  globalMoke.unmoke(obj, field)
}

function unmokeAll () {
  globalMoke.unmokeAll()
}

module.exports = {
  describe,
  expect,
  moke
}
