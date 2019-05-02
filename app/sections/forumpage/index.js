import ForumList from "./list"
import ForumRead from "./read"
import ForumEdit from "./edit"
import ForumCreate from "./create"

import Section from "../../pages/brandedpage/section"
import template from "./template.html"
import "./routes"

export default class ForumSection extends Section {
  template () {
    return template()
  }

  elements () {
    return {
      forum: ".forum"
    }
  }

  showList () {
    this.fillComponent("forum", new ForumList)
    this.setSection()
  }

  showRead (id) {
    this.fillComponent("forum", new ForumRead(id))
    this.setSection()
  }

  showEdit (id) {
    this.fillComponent("forum", new ForumEdit(id))
    this.setSection()
  }

  showCreate () {
    this.fillComponent("forum", new ForumCreate)
    this.setSection()
  }
}
