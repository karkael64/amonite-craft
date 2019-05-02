import Model from "../../../libs/request/model"

export default class TableModel extends Model {
  getCollection () {
    throw new Error("This function should be overriden")
  }

  getTotal () {
    throw new Error("This function should be overriden")
  }

  getFirst () {
    return 0
  }

  getMax () {
    return 10
  }

  getCurrentPage () {
    return this.getFirst() / this.getMax()
  }

  getMaxPage () {
    return this.getTotal() / this.getMax()
  }
}
