import Page from "../../../libs/layout/page"
import template from "./template.html"

export default class BrandedPage extends Page {
  template () {
    return template()
  }

  elements () {
    return {
      section: "main"
    }
  }
}
