import Component from "../../../libs/layout/component"
import template from "./template.html"

export default class Loader extends Component {
  template () {
    return template()
  }

  elements () {
    return {
      content: ".content"
    }
  }

  constructor (promise) {
    super()
    this.loads = []
    this.errors = []

    this.reload(promise)
  }

  onLoad (cb) {
    if (typeof cb === "function") {
      this.loads.push(cb)
      return this
    }
    else {
      throw new Error("First parameter is not a function")
    }
  }

  onError (cb) {
    if (typeof cb === "function") {
      this.errors.push(cb)
      return this
    }
    else {
      throw new Error("First parameter is not a function")
    }
  }

  reload (promise) {
    if (promise instanceof Promise) {
      promise.then(this.dispatchLoad.bind(this)).catch(this.dispatchError.bind(this))
    }
    if (typeof promise === "function") {
      const self = this
      try {
        if (promise.length) {
          promise(() => {
            self.dispatchLoad.apply(self, arguments)
          })
        }
        else {
          this.dispatchLoad(promise())
        }
      }
      catch (err) {
        this.dispatchError(err)
      }
    }
    this.template.setAttribute("anim", "loading")
    return this
  }

  dispatchLoad (component, then) {
    if (component instanceof Component) {
      this.component = component
      this.fillComponent("content", component)
    }
    this.animateLoad(then)
    this.loads.forEach((cb) => {
      cb.apply(null, arguments)
    })
    return this
  }

  animateLoad (then) {
    const node = this.template
    node.setAttribute("anim", "loaded-step2")
    setTimeout(() => {
      node.setAttribute("anim", "loaded-step3")
      setTimeout(() => {
        node.removeAttribute("anim")
        if (typeof then === "function") {
          setTimeout(() => {
            then()
          }, 200)
        }
      }, 200)
    }, 200)
    return this
  }

  animateReload (then) {
    const node = this.template
    node.setAttribute("anim", "loaded-step3")
    setTimeout(() => {
      node.setAttribute("anim", "loaded-step2")
      setTimeout(() => {
        node.setAttribute("anim", "loading")
        if (typeof then === "function") {
          setTimeout(() => {
            then()
          }, 200)
        }
      }, 200)
    }, 200)
    return this
  }

  dispatchError () {
    this.template.removeAttribute("anim")
    this.errors.forEach((cb) => {
      cb.apply(null, arguments)
    })
    return this
  }

  isLoading () {
    return this.template.getAttribute("anim") === "loading"
  }
}
