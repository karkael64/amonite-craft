import Section from "../../pages/plainpage/section"
import Input from "../../components/input"
import Action from "../../components/action"
import template from "./template.html"
import "./routes"
import { Router } from "../../../"

export default class IndexSection extends Section {
  template () {
    return template({
      list: this.getList(),
      routes: Router.getAll()
    })
  }

  elements () {
    return {
      inpName: ".input-name",
      inpCount: ".input-count",
      btnAdd: ".button-add",
      list: "ul",
      form: "form"
    }
  }

  constructor () {
    super()
    this.fillComponent("inpName", this.inpName = new Input("name", "text", "", "Insert a name…"))
    this.fillComponent("inpCount", this.inpCount = new Input("count", "number", "", "How many?"))
    this.fillComponent("btnAdd", this.btnAdd = new Action("Insert", (ev, btn) => {
      this.addItem(this.inpName.value, parseInt(this.inpCount.value))
      this.inpName.value = ""
      this.inpCount.value = ""
      btn.rearm()
    }))
    this.setSection()
    this.elements.form[0].addEventListener("submit", (ev) => {
      ev.preventDefault()
    })
  }

  getList () {
    if (!this.list) {
      this.list = [
        {
          "name": "Tomato",
          "count": 12
        },
        {
          "name": "Banana",
          "count": 113
        }
      ]
    }
    return this.list
  }

  addItem (name = "", count = 0) {
    this.list.push({ name, count })
    const li = document.createElement("li")
    li.textContent = `${name} (${count})`
    this.elements.list[0].appendChild(li)
    return this
  }
}
