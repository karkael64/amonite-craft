import Component from "../../../../libs/layout/component"
import translate from "../../../modules/translate"
import template from "./template.html"

export default class Pagination extends Component {
  template (total, first, max) {
    this.total = total
    this.max = max || 10
    this.first = first || 0
    this.page = Math.floor(this.first / this.max)
    this.lastPage = Math.floor(this.total / this.max)

    return template({
      phrase: this.getPhrase()
    })
  }

  elements () {
    return {
      first: ".first",
      prev: ".prev",
      next: ".next",
      last: ".last"
    }
  }

  events () {
    return {
      "first click": "callFirst",
      "prev click": "callPrevious",
      "next click": "callNext",
      "last click": "callLast"
    }
  }

  getPhrase () {
    return translate("component:main-table:pagination:stats:phrase", {
      page: this.page + 1,
      lastPage: this.lastPage + 1,
      total: this.total
    })
  }

  constructor (total, first, max) {
    super(total, first, max)
    if (this.page === 0) {
      this.elements.first[0].disabled = true
      this.elements.prev[0].disabled = true
    }
    if (this.page === this.lastPage) {
      this.elements.next[0].disabled = true
      this.elements.last[0].disabled = true
    }
  }

  callFirst () {
    if (this.page !== 0) {
      this.dispatch("change", [0])
      this.dispatch("first")
    }
    return this
  }

  callPrevious () {
    let page = this.page - 1
    if (page < 0) page = 0
    if (page !== this.page) {
      this.dispatch("change", [page])
      this.dispatch("previous")
    }
    return this
  }

  callNext () {
    let page = this.page + 1
    if (page > this.lastPage) page = this.lastPage
    if (page !== this.page) {
      this.dispatch("change", [page])
      this.dispatch("next")
    }
  }

  callLast () {
    if (this.page !== this.lastPage) {
      this.dispatch("change", [this.lastPage])
      this.dispatch("last")
    }
    return this
  }
}
