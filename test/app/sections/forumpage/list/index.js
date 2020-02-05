import Amonite from "../../../../../"
import Action from "../../../components/action"
import template from "./template.html"
import { create, read } from "../routes"

export default class ForumList extends Amonite.Component {
  template () {
    return template({
      title: "Liste des sujets",
      list: [
        { id: 123, title: "Titre", count: 1 },
        { id: 123, title: "Titre", count: 12 },
        { id: 123, title: "Titre", count: 123 }
      ]
    })
  }

  elements () {
    return {
      create: ".create-button",
      subjects: ".forum-subject"
    }
  }

  constructor () {
    super()
    this.fillComponent("create", new Action("Créer un sujet", this.onCreate.bind(this)))

    this.elements.subjects.forEach((node) => {
      node.addEventListener("click", () => {
        read.go(["", "", node.getAttribute("data-id")])
      })
    })
  }

  onCreate (ev, btn) {
    create.go()
  }
}
