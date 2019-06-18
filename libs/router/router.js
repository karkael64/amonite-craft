import Route from "./route"

const ROUTERS = []
let defaultController = null
let launched = false

window.r = ROUTERS

/**
 * @class <Router> stock routes, add prefix in their paths, tests them, and
 *    executes their controllers if one matches.
 */

export default class Router {


  /**
   * @method <constructor> set prefix of each urls
   * @return {Router} self
   */

  constructor (baseUrl, firstCall) {
    this.baseUrl = baseUrl || ""
    this.firstCall = firstCall || null
    this.routes = []
    ROUTERS.push(this)
  }


  /**
   * @method <add> add a route in this router
   * @param {Route|string} route or path
   * @param {function} controller to execute when path matches
   * @return {Route} created
   */

  add (route, controller) {
    if (typeof route === "string" && typeof controller === "function") {
      route = new Route(this.baseUrl + route, controller)
    }
    if (route instanceof Route) {
      this.routes.push(route)
      if (launched) {
        const args = route.getArgs()
        if (args) {
          this.callFirst()
          route.go(args)
          Router.current = route
        }
      }
    }
    return route
  }


  /**
   * @method <test> each routes of this router and return a path if it matches
   * @return {Route|null} null if not found
   */

  test () {
    return this.routes.find((route) => {
      const args = route.getArgs()
      if (args !== null) {
        return route
      }
    })
  }


  /**
   * @method <callFirst> is called one time when a route of this router is found.
   */

  callFirst () {
    if (typeof this.firstCall === "function") {
      this.firstCall()
      this.firstCall = null
    }
  }


  /**
   * @function <setDefault> set the controller to call when no any route found.
   * @param {function} controller
   */

  static setDefault (controller) {
    defaultController = controller
  }


  /**
   * @function <listenPopstate> set event in the window to trigger the routed
   *    controller
   */

  static listenPopstate () {
    window.addEventListener("popstate", popstate)
    if (!launched) {
      popstate()
    }
  }


  /**
   * @function <getAll> returns a list of all routes available
   * @return {Array}
   */

  static getAll () {
    const list = ROUTERS.map((router) => {
      return router.routes.map((route) => {
        return route.path
      })
    }).flat()
    if (defaultController) {
      list.unshift("*")
    }
    return list
  }
}


/**
 * @function <popstate> is triggered when page is loaded or navigation changes.
 * Also sets Router.current if a Route is found, else sets default controller
 * if it exists.
 */

function popstate () {
  launched = true
  let route, found
  ROUTERS.forEach((router) => {
    if (!route) {
      route = router.test()
      found = router
    }
  })
  if (route) {
    found.callFirst()
    route.run()
    Router.current = route
  }
  else if (typeof defaultController === "function") {
    defaultController()
  }
}
