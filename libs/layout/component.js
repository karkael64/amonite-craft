function container (el, self, args) {
  if (el instanceof HTMLElement) {
    return el
  }
  else if (typeof el === "string") {
    return container(document.querySelector(el), self, args)
  }
  else if (typeof el === "function") {
    return container(el.apply(self, args), self, args)
  }
  else {
    return null
  }
}

function template (el, self, args) {
  if (el instanceof HTMLElement) {
    return el
  }
  else if (typeof el === "function") {
    return template(el.apply(self, args), self, args)
  }
  else {
    const div = document.createElement("div")
    div.setAttribute("component", self.constructor.name)
    if (typeof el === "string") {
      div.innerHTML = el
    }
    return div
  }
}

function elements (el, self, args) {
  const into = self.template
  if (typeof el === "function") {
    return elements(el.apply(self, args), self, args)
  }
  else if ((typeof el === "object") && ((into) instanceof HTMLElement)) {
    const result = {}
    Object.keys(el).forEach((name) => {
      if (el[name] instanceof HTMLElement) {
        result[name] = [el[name]]
      }
      if (typeof el[name] === "string") {
        result[name] = [...into.querySelectorAll(el[name])]
      }
      else if (el[name] && el[name].forEach) {
        result[name] = el[name]
      }
    })
    return result
  }
  else {
    return {}
  }
}

function events (el, self, args) {
  if (typeof el === "function") {
    return events(el.apply(self, args), self, args)
  }
  else if (typeof el === "object") {
    Object.keys(el).forEach((pair) => {
      const split = pair.split(" ")
      if ((typeof el[pair] === "string") && (split.length > 1)) {
        const evs = split.pop()
        const selectors = split.join(" ")
        el[pair].split(",").forEach((method) => {
          evs.split(",").forEach((eventName) => {
            selectors.split(",").forEach((selector) => {
              let node
              const fn = () => {
                self[method].apply(self, arguments)
              }
              if (eventName && (typeof self[method] === "function")) {
                if ((node = self.elements[selector]) instanceof HTMLElement) {
                  node.addEventListener(eventName, fn)
                }
                else if (node && node.forEach) {
                  node.forEach((n) => {
                    n.addEventListener(eventName, fn)
                  })
                }
                else if (self.template && (node = self.template.querySelector(selector))) {
                  node.addEventListener(eventName, fn)
                }
              }
            })
          })
        })
      }
      else if (typeof el[pair] === "object") {
        const selectors = split.join(" ")
        Object.keys(el[pair]).forEach((evs) => {
          const method = el[pair][evs]
          if (typeof method === "string") {
            evs.split(",").forEach((eventName) => {
              selectors.split(",").forEach((selector) => {
                let node
                const fn = () => {
                  const _args = [...arguments]
                  _args.unshift(this)
                  self[method].apply(self, _args)
                }
                if (eventName && (typeof self[method] === "function")) {
                  if ((node = self.elements[selector]) instanceof HTMLElement) {
                    node.addEventListener(eventName, fn)
                  }
                  else if (node && node.forEach) {
                    node.forEach((n) => {
                      n.addEventListener(eventName, fn)
                    })
                  }
                  else if (self.template && (node = self.template.querySelector(selector))) {
                    node.addEventListener(eventName, fn)
                  }
                }
              })
            })
          }
        })
      }
    })
  }
}


/**
 *  @class <Component> is used to build DOM elements, generating data, template & events.
 *    A component can contain other components.
 */

export default class Component {

  /**
   * @method <constructor> build this object
   * @param {HTMLElement|String|Function} container will contain this component
   * @param {*} arguments... are passed in template, elements and events functions
   * @return {Component} self
   */

  constructor () {
    Object.defineProperty(this, "_builder", {
      "enumerable": false,
      "configurable": false,
      "value": {
        template: this.template,
        elements: this.elements,
        events: this.events
      }
    })

    Object.defineProperty(this, "__events__", {
      "enumerable": false,
      "configurable": false,
      "value": {}
    })

    this.setTemplate(...[null, ...arguments])
  }


  /**
   * @method <setTemplate> build the DOM of this Component, then list elements,
   *    finally link elements with events functions
   * @param {HTMLElement|Function|String} dom is the HTML of this component
   * @param {*} arguments... are passed in template, elements and events functions
   * @return {Component} self
   */

  setTemplate () {
    const [dom, ...args] = [...arguments],
      tpl = template(dom || this._builder.template, this, args)
    if (tpl instanceof HTMLElement) {
      this.template = tpl
      this.elements = elements(this._builder.elements, this, args)
      events(this._builder.events, this, args)
    }
    return this
  }


  /**
   * @method <setContainer> set first parameter as parent of this component
   * @param {HTMLElement|String|Function} element will contain this component
   * @param {*} arguments... are passed in template, elements and events functions
   * @return {Component} self
   */

  setContainer (element) {
    const cont = container(element, this, arguments)
    if (cont instanceof HTMLElement) {
      this.container = cont
      if (this.template instanceof HTMLElement) {
        this.container.appendChild(this.template)
      }
    }
    return this
  }


  // CHILD COMPONENTS MANAGER

  /**
   * @method <clearElement> clear an HTML element of this Component
   * @param {String} name is the name of the HTML element
   * @return {Component} self
   * @throws {Error} if the name does not match an element
   */

  clearElement (name) {
    let element
    if (this.elements[name] && ([element] = this.elements[name])) {
      while (element.firstChild)
        element.removeChild(element.firstChild)
      return this
    }
    else {
      throw new Error(`Element "${name}" is not an element of this component`)
    }
  }


  /**
   * @method <appendComponent> append a Component in this Component HTML element
   * @param {String} name is the name of the HTML element
   * @param {Component} component is the Component to append in the HTML element
   * @return {Component} self
   * @throws {Error} if the name does not match an element or if the component
   *    is not a Component instance.
   */

  appendComponent (name, component) {
    let element
    if (this.elements[name] && ([element] = this.elements[name])) {
      if (component instanceof Component) {
        component.setContainer(element)
        return this
      }
      else {
        throw new Error("Second parameter is not a Component object")
      }
    }
    else {
      throw new Error(`Element "${name}" is not an element of this component`)
    }
  }


  /**
   * @method <fillComponent> set component as only child of HTML element of this
   *    by clearing then appending Component.
   * @param {String} name is the name of the HTML element
   * @param {Component} component is the Component to append in the HTML element
   * @return {Component} self
   * @throws {Error} if the name does not match an element or if the component
   *    is not a Component instance.
   */

  fillComponent (name, component) {
    return this.clearElement(name).appendComponent(name, component)
  }


  // TEMPLATE BUILDERS

  /**
   * @method <template> should be overriden and should return text in HTML
   *    format or an HTMLElement.
   * @param {*} arguments... are transfered from <constructor>
   * @return {String|HTMLElement|function}
   */

  template () {
    return ""
  }


  /**
   * @method <elements> should be overriden and should return object where keys
   *    are the name, and the values are the selector in this component (not
   *    its children!).
   * @param {*} arguments... are transfered from <constructor>
   * @return {Object|function}
   * @warn this function does not select child components elements.
   */

  elements () {
    return {}
  }


  /**
   * @method <elements> should be overriden and should return object where keys
   *    are the name spaced with event, and the values are the component methods
   *    to call when event is triggered (not its children!).
   * @param {*} arguments... are transfered from <constructor>
   * @return {Object|function}
   */

  events () {
    return {}
  }


  // EXTERNAL EVENTS

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
        return this.listen([...t], args)
      }
    }
    else if (Array.isArray(eventName)) {
      eventName.forEach((ev) => {
        self.listen(ev, args)
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

    const evs = this["__events__"]
    if (!Array.isArray(evs[eventName])) {
      evs[eventName] = []
    }
    if (fn === undefined) {
      evs[eventName] = []
    }
    else {
      evs[eventName] = evs[eventName].slice(evs[eventName].indexOf(fn))
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
        self.detach(eventName, fn)
        self.detach(eventName, del)
      }
    this.listen(eventName, fn)
    this.listen(eventName, del)
    return this
  }
}
