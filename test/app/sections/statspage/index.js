import Section from "../../pages/brandedpage/section"
import Table from "../../components/main-table"
import UserRequest from "../../requests/users/user"
import translate from "../../modules/translate"
import template from "./template.html"
import "./routes"

const MAX = 10

export default class StatsSection extends Section {
  template () {
    return template()
  }

  elements () {
    return {
      table: ".table"
    }
  }

  constructor () {
    super()
    this.total = 0
    this.first = 0
    this.buildTable()
  }

  buildTable () {
    this.fillComponent("table", this.table = new Table(this.getTableData(), {
      translatedCivility: { label: translate("page:stats:table:user:headers:civility") },
      lastName: { label: translate("page:stats:table:user:headers:lastName") },
      firstName: { label: translate("page:stats:table:user:headers:firstName") }
    }))
    this.table.listen("first", this.onFirstPage.bind(this))
    this.table.listen("previous", this.onPreviousPage.bind(this))
    this.table.listen("next", this.onNextPage.bind(this))
    this.table.listen("last", this.onLastPage.bind(this))

  }

  getTableData () {
    this.userRequest = new UserRequest
    const prom = this.userRequest.fetch(this.first, MAX)
    prom.then((dataFormatter) => {
      this.total = dataFormatter.getTotal()
    })
    return prom
  }

  onFirstPage () {
    this.first = 0
    this.buildTable()
  }

  onPreviousPage () {
    this.first = Math.max(0, this.first - MAX)
    this.buildTable()
  }

  onNextPage () {
    this.first = Math.max(0, this.first + MAX)
    this.buildTable()
  }

  onLastPage () {
    this.first = Math.max(0, Math.floor(this.total / MAX) * MAX)
    this.buildTable()
  }
}
