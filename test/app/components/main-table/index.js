import Loader from "../loader"
import Component from "../../../../libs/layout/component"
import Wrapper from "./wrapper"
import TableModel from "./model"
import MainTableData from "./data-formatter"

function promiseBuilder (promiseData) {
  const self = this
  if (promiseData instanceof Promise) {
    return new Promise((resolve, reject) => {
      promiseData.then((model) => {
        if (model instanceof TableModel) {
          self.model = model
          self.setData(model.getCollection().toJSON(), model.getTotal(), model.getFirst(), model.getMax())
          resolve(self.wrapper)
        } else if (model instanceof MainTableData) {
          self.data = model
          self.setData(model.getList(), model.getTotal(), model.getFirst(), model.getMax())
          resolve(self.wrapper)
        } else {
          resolve(null)
        }
      }).catch(() => {
        reject(new Error("Request failed load data"))
      })
    })
  }
  else {
    throw new TypeError("Parameter should be a Promise")
  }
}

function listenEvents () {
  if (this.wrapper) {
    const self = this
    this.wrapper.onFirstPage(() => {
      self.dispatch("first")
    })
    this.wrapper.onPreviousPage(() => {
      self.dispatch("previous")
    })
    this.wrapper.onNextPage(() => {
      self.dispatch("next")
    })
    this.wrapper.onLastPage(() => {
      self.dispatch("last")
    })
    this.wrapper.onChangePage((page) => {
      self.dispatch("change", [page])
    })
  }
}


export default class MainTable extends Component {
  constructor (promiseData, builder) {
    super()
    this.loadData(promiseData)
    this.builder = builder
  }


  /**
   * @method <loadData> loads data from a Promise ${promiseData} and set its
   *    resolved parameter as this MainTable rows and fields.
   * @param {Promise} promiseData
   * @return {MainTable} self
   */

  loadData (promiseData) {
    while (this.template.firstChild)
      this.template.removeChild(this.template.firstChild)
    this.loader = new Loader(promiseBuilder.call(this, promiseData))
    this.loader.setContainer(this.template)
    return this
  }


  /**
   * @method <setData> set Collection ${collection} as this MainTable rows and
   *    fields, paginated with ${total} and ${max}.
   * @param {Array|Collection} collection
   * @param {integer} total
   * @param {integer} first
   * @param {integer} max
   * @return {MainTable} self
   */

  setData (collection, total, first, max) {
    this.wrapper = new Wrapper(collection, total, first, max, this.builder)
    listenEvents.call(this)
    return this
  }


  /**
   * @method <setData> set Collection ${collection} as this MainTable rows and
   *    fields, paginated with ${total} and ${max}.
   * @param {integer} total
   * @param {integer} first
   * @param {integer} max
   * @return {MainTable} self
   */

  setPagination (total, first, max) {
    if (this.wrapper) {
      this.wrapper.pagination.setPagination(total, first, max)
    }
    return this
  }


  // pagination events triggering

  onFirstPage (fn) {
    return this.listen("first", fn)
  }

  onPreviousPage (fn) {
    return this.listen("previous", fn)
  }

  onNextPage (fn) {
    return this.listen("next", fn)
  }

  onLastPage (fn) {
    return this.listen("last", fn)
  }

  onChangePage (fn) {
    return this.listen("change", fn)
  }
}
