import Component from "./component"
import Page from "./page"

/**
 * @class <Section> is a Component which should be only child of a page (which
 *    is the only child of Document body) at time.
 * @warn Section.wrapper() should return a Page constructor, else nothing is
 *    displayed.
 */

export default class Section extends Component {


  /**
   * @method <constructor>
   * @param {Object} options is transfered to Section.template, Section.elements
   *    and Section.events.
   * @return {Section} self
   */

  constructor () {
    super(...arguments)
    this.template.setAttribute("section", this.template.getAttribute("component"))
    this.template.removeAttribute("component")
  }


  /**
   * @method <setSection> set this section in Document as only child of a Page
   *    and Page instance as only child of Document body.
   * @return {Section} self
   */

  setSection () {
    const page = this.getWrapper()
    if (page) {
      page.setPage(this)
      this._builder.wrapper = page
    }
    return this
  }


  /**
   * @method <getWrapper> returns section wrapper component, a Page instance
   * @return {Page} a component which wrap this section
   */

  getWrapper () {
    if (!this._builder.wrapper) {
      this._builder.wrapper = Page.getPageByConstructor(this.wrapper())
    }
    return this._builder.wrapper
  }

  /**
   * @method <wrapper> should be overriden and should return a Page child class
   *    constructor.
   * @return {Page} which will wrap this section
   */

  wrapper () {
    return null
  }
}
