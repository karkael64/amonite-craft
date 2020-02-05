import { Router } from "../../../../"
import ForumSection from "./"

let forum

const rs = new Router("/forum", () => { forum = new ForumSection })
const list = rs.add("/list", () => { forum.showList() })
const read = rs.add("/:integer", (args) => { forum.showRead(args[2].value) })
const edit = rs.add("/:integer/edit", (args) => { forum.showEdit(args[2].value) })
const create = rs.add("/create", () => { forum.showCreate() })

export {
  rs as router,
  list,
  read,
  edit,
  create
}
