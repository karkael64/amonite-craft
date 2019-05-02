import Amonite from "../../../../"
import Action from "../../../components/action"
import template from "./topic-template.html"
import { edit } from "../routes"

export default class ForumRead extends Amonite.Component {
  template (opts) {
    return template(opts)
  }

  elements () {
    return {
      "btn-edit": ".btn-edit"
    }
  }

  constructor (id, title, message) {
    super({ title, message })
    this.id = id

    this.fillComponent("btn-edit", this.btnEdit = new Action("Edit", this.onEdit.bind(this)))
  }

  onEdit () {
    edit.go({ id: this.id })
  }
}
