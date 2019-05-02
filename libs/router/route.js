const FORMATS = {
  number: (str) => {
    const n = parseFloat(str)
    if (isNaN(n))
      throw new Error("Bad type: expect argument to be a number.")
    return n
  },
  integer: (str) => {
    const n = parseInt(str)
    if (isNaN(n))
      throw new Error("Bad type: expect argument to be an integer.")
    return n
  },
  float: (str) => {
    const n = parseFloat(str)
    if (isNaN(n))
      throw new Error("Bad type: expect argument to be a float.")
    return n
  },
  text: (str) => {
    try {
      const s = JSON.parse(str)
      if (typeof s === "string")
        return s
    }
    catch (e) {}
    return str
  },
  object: (str) => {
    try {
      const o = JSON.parse(str)
      if (typeof o === "object")
        return o
    }
    catch (e) {}
    throw new Error("Bad type: expect argument to be an object.")
  },
  boolean: (str) => {
    try {
      const b = JSON.parse(str)
      if (typeof b === "boolean")
        return b
    }
    catch (e) {}
    throw new Error("Bad type: expect argument to be a boolean.")
  },
  any: (str) => {
    try {
      return JSON.parse(str)
    }
    catch (e) {}
    return str
  },
  uuid: (str) => {
    if (str.match(/[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}/))
      return str
    else
      throw new Error("Bad type: expect argument to be an uuid.")
  }
}

let currentArgs


/**
 * @class <Route> if a route matches current path, return args with getArgs().
 *    If args are returned, then execute go(args).
 */

class Route {

  /**
   * @method <constructor> set path and its controller if route match
   * @param {String} path format "/key:type/key:/:type/*"
   * @param {}
   */

  constructor (path, controller) {
    if (typeof path !== "string")
      throw new Error("First parameter should be a string.")
    if (typeof controller !== "function")
      throw new Error("Second parameter should be a function.")
    this.path = path
    this.controller = controller
  }


  /**
   * @method <go> redirect to this controller passing by URL
   * @param {*} args new arguments for this controller, merged with current arguments
   * @return {Route} self
   */

  go (args, force) {
    const params = (typeof args === "object") ? args : {}
    const path = this.createPath(Object.assign({}, currentArgs, params))
    if (force && path === Route.getBrowserRequest()) {
      this.run(args)
    } else {
      Route.setBrowserRequest(path)
    }
    return this
  }


  /**
   * @method <run> run this controller anyway with these arguments.
   * @param {*} args if falsy, try to return route.getArgs().
   * @return {*} returned by controller.
   */

  run (args) {
    currentArgs = args || this.getArgs()
    return this.controller(currentArgs)
  }


  /**
   * @method <getArgs> return an object of corresponding parameters in browser
   *    path or null object if it does not match.
   * @return {Object|null} null if it does not match.
   */

  getArgs () {
    const current = Route.getRequestObject(),
      self = this.getRequestObject()

    if (self[self.length - 1] === "*") {
      if (current.length < self.length - 1) {
        return null
      }
    } else if (current.length !== self.length) {
      return null
    }

    return self.reduce((args, chunk, index) => {
      const tmp = current[index]
      if (args === null) return null
      else if (chunk === "*") return args
      else if (typeof chunk === "string") return (chunk === tmp) ? args : null
      else if (typeof chunk === "object") {
        const { key: expectedKey, value: expectedValue, regexp, type } = chunk
        const { key, value } = (typeof tmp === "object") ? tmp : { value: tmp }
        if (key) {
          if (key === expectedKey) {
            if (type) {
              try {
                args[expectedKey] = FORMATS[type](value)
                return args
              } catch (e) {
                return null
              }
            } else if (regexp) {
              if (regexp.test(value)) {
                args[expectedKey] = value
                return args
              } else {
                return null
              }
            } else if (value) {
              args[expectedKey] = value
              return args
            }
          }
        } else if (expectedValue) {
          if (type) {
            try {
              args[expectedValue] = FORMATS[type](value)
              return args
            } catch (e) {
              return null
            }
          } else if (regexp) {
            if (regexp.test(value)) {
              args[expectedValue] = value
              return args
            } else {
              return null
            }
          } else if (value) {
            args[expectedValue] = value
            return args
          }
        }
      }
      return null
    }, {})
  }


  /**
   * @method <isMatch> return if current route matches browser path
   * @return {Boolean}
   */

  isMatch () {
    return this.getArgs() !== null
  }


  /**
   * @method <createPath> create a path string with arguments, in order to
   *    create a link to call this route.
   * @param {Object} args
   * @return {String} path
   */

  createPath (args) {
    if (typeof args !== "object") {
      args = {}
    }

    return this.getRequestObject().map((item) => {
      if (typeof item === "string") {
        return (item === "*") ? "" : item
      }
      else {
        const { key, value } = item

        if (key === "") {
          if (args[value] === undefined) {
            throw new Error(`Can't build this path, not enough arguments (expect "${value}" field)`)
          }
          return args[value]
        }
        else if (value === "") {
          return key + ":" + (args[key] === undefined ? "" : args[key])
        }
        else {
          try {
            return key + ":" + JSON.stringify(FORMATS[value](args[key]))
          }
          catch (e) {
            throw new Error(`Can't build this path, bad formatting arguments (expect "${key}" field)`)
          }
        }
      }
    }).join("/")
  }


  /**
   * @method <getRequestObject> translates a path to an object
   * @param {String} url format "/key:type/key:/:type/*"
   * @return {Array.<Object,*>}
   */

  getRequestObject () {
    return this.path.split("/").map((item) => {
      const split = item.split(":")

      if (split.length > 1) {
        let key = split.shift(),
          value = split.join(":"),
          regexp = value.match(/([^(]+)\((.+)\)/);

        if (regexp) {
          [, value, regexp] = regexp
          if (FORMATS[regexp]) {
            return {
              key,
              value,
              type: regexp
            }
          } else {
            return {
              key,
              value,
              regexp: new RegExp(regexp)
            }
          }
        } else if (key === "") {
          return {
            value
          }
        } else {
          if (FORMATS[value]) {
            return {
              key,
              type: value
            }
          } else {
            return {
              key,
              regexp: new RegExp(value)
            }
          }
        }
      } else {
        return item
      }
    })
  }


  /**
   * @function <getBrowserRequest> returns the current browser path
   * @return {String}
   */

  static getBrowserRequest () {
    return window.location.hash.substr(1)
  }


  /**
   * @function <setBrowserRequest> set the current browser path
   */

  static setBrowserRequest (str) {
    window.location.hash = str
  }


  /**
   * @function <getRequestObject> translates a path to an object
   * @param {String} url format "/key:type/key:/:type/*"
   * @return {Array.<Object,*>}
   */

  static getRequestObject (url) {
    if (typeof url !== "string")
      url = Route.getBrowserRequest()

    if (!url) return []

    return url.split("/").map((item) => {
      const split = item.split(":")
      if (split.length > 1) {
        const key = split.shift(),
          value = split.join(":")
        return {
          key,
          value
        }
      } else {
        return item
      }
    })
  }
}

export { Route as default, Route, FORMATS }
