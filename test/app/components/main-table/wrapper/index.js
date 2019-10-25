import TableEmpty from "../empty-table"
import TableData from "../../table-data"
import Component from "../../../../../libs/layout/component"
import template from "./template.html"
import Pagination from "../pagination"

export default class Wrapper extends Component {
  template () {
    return template()
  }

  elements () {
    return {
      empty: ".table-empty",
      table: ".table-data",
      pagination: ".pagination"
    }
  }

  constructor (list, total, first, max, builder) {
    super()

    if (Array.isArray(list) && list.length) {
      this.clearElement("empty")
      this.fillComponent("table", this.table = new TableData(list, builder))
      this.fillComponent("pagination", this.pagination = new Pagination(total, first, max))
    }
    else {
      this.fillComponent("empty", this.empty = new TableEmpty)
      this.clearElement("table")
      this.clearElement("pagination")
    }
  }

  onFirstPage (fn) {
    if (this.pagination) this.pagination.listen("first", fn)
    return this
  }

  onPreviousPage (fn) {
    if (this.pagination) this.pagination.listen("previous", fn)
    return this
  }

  onNextPage (fn) {
    if (this.pagination) this.pagination.listen("next", fn)
    return this
  }

  onLastPage (fn) {
    if (this.pagination) this.pagination.listen("last", fn)
    return this
  }

  onChangePage (fn) {
    if (this.pagination) this.pagination.listen("change", fn)
    return this
  }
}
