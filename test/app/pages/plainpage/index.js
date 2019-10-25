import Page from "../../../../libs/layout/page"
import template from "./template.html"

export default class PlainPage extends Page {
  template () {
    return template()
  }

  elements () {
    return {
      section: "main"
    }
  }
}
