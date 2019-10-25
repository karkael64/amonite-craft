import { Router } from "../../../../"
import OnePageSection from "./"

let onepage

const rs = new Router("/onepage", () => { onepage = new OnePageSection })
const index = rs.add("/*", () => { onepage.setSection() })

export {
  rs as router,
  index
}
