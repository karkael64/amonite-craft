import ajax from "./ajax"
import Model from "./model"

/**
 *  @function <request> send a request to server using ajax, with JSON body for request and response.
 *  @param {Collection} collection context
 *  @param {object} options custom parameters for the request
 *  @return {Promise}
 */

function request (collection, options) {
  options.uri = options.uri || options.url || collection.uri || collection.url || ""

  const success = options.success || options.load || collection.success || collection.load || null
  const failure = options.failure || options.error || collection.failure || collection.error || null

  options.success = options.load = null
  options.failure = options.error = null

  const prom = new Promise((resolve, reject) => {
    ajax(options).then((xhr) => {
      try {
        const data = JSON.parse(xhr.responseText)
        if (typeof data === "object") {
          collection.attributes = collection.parse(data)
          resolve(xhr, collection)
        }
        else {
          reject(xhr, collection)
        }
      }
      catch (e) {
        reject(xhr, collection)
      }
    }).catch((xhr) => {
      reject(xhr, collection)
    })
  })

  if (Array.isArray(success)) {
    success.forEach((fn) => {
      if (typeof fn === "function")
        prom.then(fn)
    })
  }
  if (typeof success === "function") {
    prom.then(success)
  }

  if (Array.isArray(failure)) {
    failure.forEach((fn) => {
      if (typeof fn === "function")
        prom.then(fn)
    })
  }
  if (typeof failure === "function") {
    prom.then(failure)
  }

  return prom
}


/**
 * @class <Collection> is an object which stock a list of Model and can be sync
 *      with a server data.
 */

export default class Collection {

  /**
   * @method <constructor> set first parameter as list of models of this collection.
   * @param {Array.<Object|Model,>} models
   */

  constructor (models) {
    this.models = []
    this.set(models)
  }


  /**
   * @method <model> should be overriden in child class and should return a Model
   *    constructor.
   * @return {Model}
   */

  model () {
    return Model
  }


  /**
   *  @method <get> returns model attribute
   *  @param {string} row
   *  @return {*} value
   */

  get (row) {
    return this.model[row]
  }


  /**
   *  @method <set> set model {row} attribute with {value}
   *  @param {number|array} row
   *  @param {Model} value
   *  @return {Collection} this
   */

  set (row, value) {
    const self = this
    if (Array.isArray(row)) {
      this.clean()
      const _Model = this.model()
      row.forEach((item) => {
        self.add(new _Model(item))
      })
    }
    else if ((typeof row === "number") && (value instanceof this.model)) {
      this.models[row] = value
    }
    return this
  }


  /**
   *  @method <add> push a model at the end of the collection
   */

  add (value) {
    if (value instanceof this.model()) {
      this.models.push(value)
    }
    return this
  }


  /**
   *  @method <indexOf> returns the index of a model in this collection.
   *  @param {Model} value
   *  @return {number} -1 if not found
   */

  indexOf (value) {
    return this.models.indexOf(value)
  }


  /**
   *  @method <remove> splice a model in this Collection
   *  @param {Model|number} value
   *  @return {Model}
   */

  remove (value) {
    if (value instanceof this.model)
      value = this.models.indexOf(value)

    if (Number.isInteger(value)) {
      return this.models.splice(value, 1)[0]
    }

    return null
  }


  /**
   *  @function <clean> empty all models contains in this collection
   */

  clean () {
    this.models = []
  }


  /**
   *  @method <fetch> request sync with server, with a GET method
   *  @param {object|null} options
   *  @return {Promise}
   */

  fetch (options) {
    if (typeof options !== "object") options = {}
    options.method = options.method || this.method || "GET"
    options.data = options.body = options.post = null

    const req = request(this, options)

    if (typeof this.parse === "function") {
      const self = this
      req.then(() => {
        self.parse(self.attributes)
      })
    }

    return req
  }


  /**
   *  @method <save> request sync with server, with a POST method
   *  @param {object|null} attributes to send in request body
   *  @param {object|null} options
   *  @return {Promise}
   */

  save (attributes, options) {
    if (typeof options !== "object") options = {}
    options.method = options.method || this.method || "POST"
    options.data = JSON.stringify(attributes)

    const req = request(this, options)

    if (typeof this.parse === "function") {
      const self = this
      req.then(() => {
        self.parse(self.attributes)
      })
    }

    return req
  }


  /**
   *  @method <parse> is called when request succeeds
   *  @param {Object} raw is raw object extract from request
   *  @return {Object}
   */

  parse (raw) {
    if (Array.isArray(raw)) {
      this.models = raw
    }
    return raw
  }

  toJSON () {
    const result = []
    Object.values(this.models).forEach((model) => {
      if (model instanceof Model) {
        result.push(model.toJSON())
      }
    })
    return result
  }
}
