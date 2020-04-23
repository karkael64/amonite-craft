import { Resource } from "../../../../module"
import Data from "../../components/main-table/data-formatter"
import translate from "../../modules/translate"

export default class UserRequest extends Resource {
  fetch (first = 0, max = 10) {
    const self = this
    return new Promise((resolve, reject) => {
      UserRequest.request("POST", "//localhost:2999/api/v1/users", JSON.stringify({ first, max })).then((data) => {
        self.data = JSON.parse(data.responseText)
        resolve(new Data(self.parseUsers(self.data.users), self.data.total, first, max))
      }).catch(reject)
    })
  }

  parseUsers (users) {
    return users.map((user) => {
      user.translatedCivility = translate("civility:" + user.civility)
      return user
    })
  }
}
