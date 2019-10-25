import { Resource } from "../../../../"

export default class ForumRequest extends Resource {
  constructor (id) {
    super()
    this.id = id
  }

  fetch () {
    const self = this
    return new Promise((resolve, reject) => {
      ForumRequest.request("GET", `//localhost:2999/api/v1/forum/${self.id}`).then((data) => {
        self.data = JSON.parse(data.responseText)
        resolve(self.data)
      }).catch(reject)
    })
  }

  save (title, message) {
    const self = this;
    return new Promise((resolve, reject) => {
      ForumRequest.request("POST", `//localhost:2999/api/v1/forum/${self.id}`, { title, message }).then((xhr) => {
        if (xhr.status < 400) resolve()
        else reject()
      })
    })
  }

  delete () {
    const self = this;
    return new Promise((resolve, reject) => {
      ForumRequest.request("GET", `//localhost:2999/api/v1/forum/${self.id}/delete`).then((xhr) => {
        if (xhr.status < 400) resolve()
        else reject()
      })
    })
  }
}
