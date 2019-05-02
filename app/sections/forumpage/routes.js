import { Router } from "../../../"
import ForumSection from "./"

let forum

const rs = new Router("/forum", () => { forum = new ForumSection })
const list = rs.add("/list", () => { forum.showList() })
const read = rs.add("/:id(integer)", (args) => { forum.showRead(args.id) })
const edit = rs.add("/:id(^\\d+$)/edit", (args) => { forum.showEdit(args.id) })
const create = rs.add("/create", () => { forum.showCreate() })

export {
  rs as router,
  list,
  read,
  edit,
  create
}
