import EventTarget from "./event-target"


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
      else if (Array.isArray(el[name])) {
        result[name] = el[name].filter(item => item instanceof HTMLElement)
      }
    })
    return result
  }
  else {
    return {}
  }
}

function events (el, self, args, parent_selectors = [], parent_events = []) {
  if (typeof el === "function") {
    if (parent_events.length) {
      const fn = function () {
        el.apply(self, args)
      };
      events_gettargets(parent_selectors, self).forEach(target => {
        parent_events.forEach(eventname => {
          target.addEventListener(eventname, el)
        })
      })
    } else {
      events(el.apply(self, args), self, args, parent_selectors, parent_events)
    }
  }
  else if (typeof el === "string" && typeof self[el] === "function") {
    events_gettargets(parent_selectors, self).forEach(target => {
      parent_events.forEach(eventname => {
        target.addEventListener(eventname, self[el].bind(self))
      })
    })
  }
  else if (Array.isArray(el)) {
    el.forEach(val => events(val, self, args, parent_selectors, parent_events))
  }
  else if (typeof el === "object") {
    Object.keys(el).forEach(key => {
      const {selectors, eventnames} = events_keysplit(key)
      parent_selectors.forEach(sel => selectors.push(sel))
      parent_events.forEach(ev => eventnames.push(ev))
      events(el[key], self, args, selectors, eventnames)
    })
  }
}

function events_keysplit (key) {
  const split = key.split(/[\n\s]+/g)
  const selectors = [], eventnames = []
  split.forEach(el => {
    if (el[0] === "@") {
      eventnames.push(el.substr(1))
    } else {
      selectors.push(el)
    }
  })
  return {
    selectors: selectors.join(' ').split(/,/g).filter(n=>n.length),
    eventnames: eventnames.join(',').split(/,+/g).filter(n=>n.length)
  }
}

function events_gettargets(selectors, self) {
  const targets = []

  selectors.map(selector => {
    if (Array.isArray(selector)) {
      return events_gettargets(selector, self)
    }
    if (Array.isArray(self.elements[selector])) {
      return self.elements[selector]
    }
    if (typeof selector === "string") {
      return [...self.template.querySelectorAll(selector)]
    }
    if (selector instanceof HTMLElement) {
      return selector
    }
  }).forEach(found => found.filter(el => el instanceof HTMLElement).forEach(target => targets.push(target)))

  return targets
}



/**
 *  @class <Component> is used to build DOM elements, generating data, template & events.
 *    A component can contain other components.
 */

export default class Component extends EventTarget {

  /**
   * @method <constructor> build this object
   * @param {HTMLElement|string|function} container will contain this component
   * @param {*} arguments... are passed in template, elements and events functions
   * @return {Component} self
   */

  constructor () {
    super()

    Object.defineProperty(this, "__builder__", {
      "enumerable": false,
      "configurable": false,
      "value": {
        container: this.container.bind(this),
        template: this.template.bind(this),
        elements: this.elements.bind(this),
        events: this.events.bind(this)
      }
    })


    this.container = null
    this.template = null
    this.elements = []
    this.events = {}

    this.setTemplate(null, ...arguments)

    const cont = this.__builder__.container(...arguments)
    if (cont) {
      this.setContainer(cont, ...arguments)
    }
  }


  /**
   * @method <setTemplate> build the DOM of this Component, then list elements,
   *    finally link elements with events functions
   * @param {HTMLElement|function|string} dom is the HTML of this component
   * @param {*} arguments... are passed in template, elements and events functions
   * @return {Component} self
   */

  setTemplate (dom, ...args) {
    const tpl = template(dom || this.__builder__.template, this, args)
    if (tpl instanceof HTMLElement) {
      this.template = tpl
      this.elements = elements(this.__builder__.elements, this, args)
      events(this.__builder__.events, this, args)
    }
    return this
  }


  /**
   * @method <setContainer> set first parameter as parent of this component
   * @param {HTMLElement|string|function} element will contain this component
   * @param {*} arguments... are passed in template, elements and events functions
   * @return {Component} self
   */

  setContainer (element, ...args) {
    const cont = container(element, this, args)
    if (cont instanceof HTMLElement) {
      this.container = cont
      if (this.template instanceof HTMLElement) {
        this.container.appendChild(this.template)
        this.dispatch('append', [new Event('append')])
      }
    }
    return this
  }


  // CHILD COMPONENTS MANAGER

  /**
   * @method <clearElement> clear an HTML element of this Component
   * @param {string} name is the name of the HTML element
   * @return {Component} self
   * @throws {Error} if the name does not match an element
   */

  clearElement (name) {
    let element
    if (this.elements[name] && ([element] = this.elements[name]) && element) {
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
   * @param {string} name is the name of the HTML element
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
   * @param {string} name is the name of the HTML element
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
   * @method <container> should be overriden and should return an HTMLElement
   *    which will contain this component's template.
   * @param {*} arguments... are transfered from <constructor>
   * @return {string|HTMLElement|function}
   */

   container () {
    return null
  }


  /**
   * @method <template> should be overriden and should return text in HTML
   *    format or an HTMLElement.
   * @param {*} arguments... are transfered from <constructor>
   * @return {string|HTMLElement|function}
   */

  template () {
    return ""
  }


  /**
   * @method <elements> should be overriden and should return object where keys
   *    are the name, and the values are the selector in THIS component (not
   *    its children!).
   * @param {*} arguments... are transfered from <constructor>
   * @return {object.{}>|function}
   * @warn this function does not select child components elements.
   */

  elements () {
    return {}
  }


  /**
   * @method <events> should be overriden and should return object where keys
   *    are the name spaced with event, and the values are the component methods
   *    to call when event is triggered (not its children!).
   * @param {*} arguments... are transfered from <constructor>
   * @return {object.{}|function}
   */

  events () {
    return {}
  }
}
