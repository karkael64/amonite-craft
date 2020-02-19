export default class EventTarget {
  constructor () {
    Object.defineProperty(this, "__events__", {
      "enumerable": false,
      "configurable": false,
      "value": {}
    })
  }


  /**
   * @method <listen> listen an event ${eventName} happening and register the
   *    function ${fn} to execute it when event happen.
   * @param {string|Array} eventName
   * @param {function|Array} fn
   * @return {Component} self
   */

  listen (eventName, fn) {
    const self = this
    if (typeof eventName === "string") {
      const t = eventName.split(/[\n\s,]+/g)
      if (t.length > 1) {
        return this.listen([...t], fn)
      }
    }
    else if (Array.isArray(eventName)) {
      eventName.forEach((ev) => {
        self.listen(ev, fn)
      })
      return this
    }
    if (Array.isArray(fn)) {
      fn.forEach((f) => {
        self.listen(eventName, f)
      })
      return this
    }

    if (typeof fn === "function") {
      const evs = this["__events__"]
      if (!Array.isArray(evs[eventName])) {
        evs[eventName] = []
      }
      evs[eventName].push(fn)
    }
    return this
  }


  /**
   * @method <dispatch> trigger an event ${eventName} happening and execute the
   *    registered functions.
   * @param {string|Array} eventName
   * @param {function} args
   * @return {Component} self
   */

  dispatch (eventName, args) {
    const self = this
    if (typeof eventName === "string") {
      const t = eventName.split(/[\n\s,]+/g)
      if (t.length > 1) {
        return this.dispatch([...t], args)
      }
    }
    else if (Array.isArray(eventName)) {
      eventName.forEach((ev) => {
        self.dispatch(ev, args)
      })
      return this
    }

    const evs = this["__events__"]
    if (!Array.isArray(evs[eventName])) {
      evs[eventName] = []
    }
    evs[eventName].forEach((fn) => {
      if (Array.isArray(args)) {
        fn.apply(null, args)
      }
      else {
        fn()
      }
    })
    return this
  }


  /**
   * @method <detach> remove the registered function ${fn} listened by event
   *    ${eventName}, or all of its functions if ${fn} is undefined
   * @param {string|Array} eventName
   * @param {function|Array} fn
   * @return {Component} self
   */

  detach (eventName, fn) {
    const self = this
    if (typeof eventName === "string") {
      const t = eventName.split(/[\n\s,]+/g)
      if (t.length > 1) {
        return this.detach([...t], fn)
      }
    }
    else if (Array.isArray(eventName)) {
      eventName.forEach((ev) => {
        self.detach(ev, fn)
      })
      return this
    }
    if (Array.isArray(fn)) {
      fn.forEach((f) => {
        self.detach(eventName, f)
      })
      return this
    }

    const evs = this["__events__"]
    if (!Array.isArray(evs[eventName])) {
      evs[eventName] = []
    }
    if (fn === undefined) {
      evs[eventName] = []
    }
    else {
      evs[eventName] = evs[eventName].splice(evs[eventName].indexOf(fn))
    }
    return this
  }


  /**
   * @method <listenOnce> listen event ${eventName} happening for executing
   *    function ${fn} only one time.
   * @param {string|Array} eventName
   * @param {function|Array} fn
   * @return {Component} self
   */

  listenOnce (eventName, fn) {
    const self = this,
      del = () => {
        self.detach(eventName, [fn, del])
      }
    this.listen(eventName, [fn, del])
    return this
  }
}
