import Component from "./component"
import Section from "./section"

/**
 * @class <Page> is a Component which is set as only child of Document body at
 *    time. A section is defined with a Page, so when a section is called, the
 *    page wrap the only child section in the page. It simplify the construction
 *    of the DOM.
 * @warn Page.elements should contain "section" element
 * @advise A single child class of Page instance should exists so please
 *    call Page.getPageByConstructor(page) in section.
 */

export default class Page extends Component {

  /**
   * @method <constructor> at construction of this Page, the page fill the
   *    Document body as only child.
   * @return {Page} self
   */

  constructor () {
    super(Page.container)
    this.template.setAttribute("page", this.template.getAttribute("component"))
    this.template.removeAttribute("component")
    Page.instances[this.constructor.name] = this
  }


  /**
   * @method <setSection> fill this page with a Section
   * @param {Section} section
   * @return {Page} self
   */

  setSection (section) {
    if (section instanceof Section) {
      this.fillComponent("section", section)
    }
    return this
  }


  /**
   * @method <setPage> set this page as only page wrapper on this Document body
   *    and set a section if set in parameter.
   * @param {Section} section
   */

  setPage (section) {
    if (Page.page !== this) {
      const into = Page.container
      while (into.firstChild)
        into.removeChild(into.firstChild)
      this.setContainer(into)
      Page.page = this
    }
    return this.setSection(section)
  }


  /**
   * @function <setContainer> set the container where every pages should be
   *    filled in.
   * @param {HTMLElement|Function|String} into
   */

  static setContainer (into) {
    if (typeof into === "function") {
      return Page.setContainer(into())
    }
    if (typeof into === "string") {
      into = document.querySelector(into)
    }
    if (into instanceof HTMLElement) {
      Page.container = into
    }
    else {
      Page.container = Page.container || document.body
    }

    if (Page.page) {
      Page.page.setContainer(into)
    }
  }


  /**
   * @function <getCurrentPage> returns last page set in body
   * @return {Page}
   */

  static getCurrentPage () {
    return Page.page
  }


  /**
   * @function <getPageByConstructor> returns a Page instance of ${Constr} if it
   *    exists or a new instance.
   * @param {Page} Constr
   * @return {Page}
   */

  static getPageByConstructor (Constr) {
    const inst = Page.instances[Constr.name]
    if (inst instanceof Page) {
      return inst
    }
    else {
      return new Constr()
    }
  }
}

Page.instances = {}
Page.container = null
