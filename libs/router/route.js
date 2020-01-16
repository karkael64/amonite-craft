import Chunk from "./chunk"

let currentArgs


/**
 * @class <Route> if a route matches current path, return args with getArgs().
 *    If args are returned, then execute go(args).
 */

class Route {

  /**
   * @method <constructor> set path and its controller if route match
   * @param {String} path format "/key:type/key:/:type/*"
   * @param {Function} controller
   */

  constructor (path, controller) {
    if (typeof path !== "string")
      throw new Error("First parameter should be a string.")
    if (typeof controller !== "function")
      throw new Error("Second parameter should be a function.")
    this.path = path
    this.controller = controller
    this.chunks = path.split("/").map(chunk => new Chunk(chunk))
    this.noEnd = this.chunks[this.chunks.length-1].original === "*"
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
    const items = Route.getBrowserRequest().split("/"),
      chunks = this.chunks

    try {
      return this.chunks.map((chunk) => {
        const res = chunk.extractArgs(items[key])
        return res
      })
    } catch (e) {
      return null
    }
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
    if (!Array.isArray(args)) {
      args = []
    }

    return this.chunks.map((chunk, key) => {
      chunk.createPath(args[key])
    }).join("/")
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
}

export default Route
