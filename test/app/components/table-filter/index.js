import Component from "../../../../libs/layout/component"
import template from "./template.html"

import Input from "../input"
import Action from "../action"

export default class TableFilter extends Component {
  template () {
    return template({})
  }

  elements () {
    return {
      simpleFilter: ".simple-filter",
      advancedFilterButton: ".advanced-filter-button"
    }
  }

  constructor (placeHolder) {
    super()

    this.fillComponent("simpleFilter", this.simpleFilter = new Input("filter", "text", "", placeHolder))
    this.fillComponent("advancedFilterButton", this.advancedFilterButton = new Action("", this.showAdvancedFilterPanel.bind(this), "icons-filter flaticons"))
  }

  //  TODO
  showAdvancedFilterPanel (ev, btn) {
    console.log("advanced_filter")
    setTimeout(() => {
      btn.rearm()
    }, 1000)
  }
}
