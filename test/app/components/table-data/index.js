import Component from "../../../../libs/layout/component"
import template from "./template.html"

export default class TableData extends Component {
  template (rows, builder) {
    const columns = Object.keys(builder)
    const headers = {}
    columns.forEach((key) => {
      headers[key] = { label: builder[key].label }
    })

    return template({
      columns,
      headers,
      rows
    })
  }
}
