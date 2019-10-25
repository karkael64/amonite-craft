import Amonite from "../../../../../"
import Topic from "./topic"
import ForumRequest from "../../../requests/forums/forum"
import template from "./template.html"

export default class ForumRead extends Amonite.Component {
  template () {
    return template()
  }

  elements () {
    return {
      topic: ".topic"
    }
  }

  constructor (id) {
    super()
    const self = this
    this.loadTopic(id).then((topic) => {
      self.fillComponent("topic", topic)
    })
  }

  loadTopic (id) {
    return new Promise((resolve, reject) => {
      const req = new ForumRequest(id)
      req.fetch().then((data) => {
        resolve(new Topic(data.id, data.title, data.message))
      })
    })
  }
}
