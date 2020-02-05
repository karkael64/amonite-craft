import Amonite from "../../../../../"
import ForumRequest from "../../../requests/forums/forum"
import template from "./template.html"
import Action from "../../../components/action"
import Input from "../../../components/input"
import { list, read } from "../routes"

export default class ForumRead extends Amonite.Component {
  template () {
    return template()
  }

  elements () {
    return {
      title: ".title-input",
      message: ".message-input",
      cancel: ".btn-cancel",
      delete: ".btn-delete",
      save: ".btn-save",
      form: "form"
    }
  }

  constructor (id) {
    super()

    this.id = id

    this.elements.form[0].addEventListener("submit", (ev) => { ev.preventDefault() })

    this.fillComponent("title", this.titleInput = new Input("title"))
    this.fillComponent("message", this.messageInput = new Input("message"))
    this.fillComponent("cancel", this.cancelBtn = new Action("Cancel", this.onCancel.bind(this)))
    this.fillComponent("delete", this.deleteBtn = new Action("Delete", this.onDelete.bind(this)))
    this.fillComponent("save", this.saveBtn = new Action("Save", this.onSave.bind(this)))

    this.loadData()
  }

  loadData () {
    const self = this
    const req = new ForumRequest(this.id)
    return req.fetch().then((data) => {
      self.setFields(data.title, data.message)
    })
  }

  saveData () {
    const req = new ForumRequest(this.id)
    return req.save(this.titleInput.value, this.messageInput.value)
  }

  deleteData () {
    const req = new ForumRequest(this.id)
    return req.delete()
  }

  setFields (title, message) {
    this.titleInput.value = title
    this.messageInput.value = message
  }

  onCancel (ev, btn) {
    read.go(["", "", this.id])
  }

  onDelete (ev, btn) {
    this.deleteData().then(() => {
      list.go()
    }).catch(() => {
      alert("Delete failed!")
      btn.rearm()
    })
  }

  onSave (ev, btn) {
    this.saveData().then(() => {
      read.go(["", "", this.id])
    }).catch(() => {
      alert("Save failed!")
      btn.rearm()
    })
  }
}
