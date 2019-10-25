import Component from "../../../../libs/layout/component"
import template from "./template.html"

let inst

export default class Popin extends Component {
  template (title) {
    return template({ title })
  }

  elements () {
    return {
      body: ".body",
      title: "h3",
      close: ".close",
      wrapper: ".wrapper"
    }
  }

  events () {
    return {
      "close click": "hide"
    }
  }

  constructor (title = "") {
    super(title)
    this.initHideEvents()
  }

  initHideEvents () {
    this.template.addEventListener("click", this.hide.bind(this))
    this.elements.wrapper[0].addEventListener("click", (ev) => {
      ev.stopPropagation()
    })
  }

  setTitle (title) {
    this.elements.title[0].innerText = "" + title
    return this
  }


  setComponent (comp) {
    if (comp instanceof Component) {
      this.fillComponent("body", comp)
      this.setContainer()
    }
    return this
  }

  /**
   * @method <setPopin> set this popin as only popin wrapper on this Document body
   *    and set a component if set in parameter.
   * @param {Component} component
   */

  setPopin (component) {
    if (Popin.popin !== this) {
      this.setContainer(Popin.container)
      Popin.popin = this
    }
    return this.setComponent(component)
  }

  /**
   * @method <hide> remove popin of user interface
   * @return {Component} self
   */

  hide () {
    Popin.container.removeChild(this.template)
    Popin.popin = null
    return this
  }


  /**
   * @function <setContainer> set the container where every popins should be
   *    filled in.
   * @param {HTMLElement|Function|String} into
   */

  static setContainer (into) {
    if (typeof into === "function") {
      return Popin.setContainer(into())
    }
    if (typeof into === "string") {
      into = document.querySelector(into)
    }
    if (into instanceof HTMLElement) {
      Popin.container = into
    }
    else {
      Popin.container = Popin.container || document.body
    }

    if (Popin.popin) {
      Popin.popin.setContainer(into)
    }
  }


  static getInstance () {
    if (!inst) {
      Popin.setContainer()
      inst = new Popin
    }
    return inst
  }
}
