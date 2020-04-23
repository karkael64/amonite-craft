import { Router } from "../../../../module"
import StatsSection from "./"

let stats

const rs = new Router("/stats", () => { stats = new StatsSection })
const index = rs.add("/*", () => { stats.setSection() })

export {
  rs as router,
  index
}
