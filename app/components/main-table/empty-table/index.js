import Component from "../../../../libs/layout/component"
import template from "./template.html"

export default class EmptyTable extends Component {
  template () {
    return template({
      "body": "This table is empty"
    })
  }
}
