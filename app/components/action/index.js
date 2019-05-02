import Component from "../../../libs/layout/component"
import template from "./template.html"

export default class Action extends Component {
  template (text) {
    return template({
      text
    })
  }

  elements () {
    return {
      button: "button"
    }
  }

  events () {
    return {
      "button click": "click"
    }
  }

  constructor (text, cb, className) {
    super(text)
    this.callbacks = [];
    [this.$btn] = this.elements.button

    if (typeof cb === "function") {
      this.onClick(cb)
    }

    if (typeof className === "string") {
      this.elements.button[0].className = className
    }
  }

  onClick (cb) {
    if (typeof cb === "function") {
      this.callbacks.push(cb)
    }
    else {
      throw new Error("First parameter should be a function")
    }
  }

  click (ev) {
    const self = this
    if (!this.isLoading() && this.isEnabled()) {
      const height = this.$btn.clientHeight,
        width = Math.max(this.$btn.clientWidth, height)

      this.$btn.style.minWidth = width + "px"
      this.$btn.style.minHeight = height + "px"
      this.$btn.classList.add("load")
      this.callbacks.forEach((cb) => {
        cb(ev, self)
      })
    }
    return this
  }

  disable () {
    this.$btn.disabled = true
    return this
  }

  enable () {
    this.$btn.disabled = false
    return this
  }

  isEnabled () {
    return !this.$btn.disabled
  }

  isLoading () {
    return this.$btn.classList.contains("load")
  }

  rearm () {
    this.$btn.classList.remove("load")
    this.$btn.style.removeProperty("min-width")
    this.$btn.style.removeProperty("min-height")
    return this
  }
}
