import ajax from "./ajax"
import Collection from "./collection"

/**
 *  @function <request> send a request to server using ajax, with JSON body for request and response.
 *  @param {Model} model context
 *  @param {object} options custom parameters for the request
 *  @return {Promise}
 */

function request (model, options) {
  options.uri = options.uri || options.url || model.uri || model.url || ""

  const success = options.success || options.load || model.success || model.load || null
  const failure = options.failure || options.error || model.failure || model.error || null

  options.success = options.load = null
  options.failure = options.error = null

  const prom = new Promise((resolve, reject) => {
    ajax(options).then((xhr) => {
      try {
        const data = JSON.parse(xhr.responseText)
        if (typeof data === "object") {
          model.attributes = model.parse(data)
          resolve(xhr, model)
        }
        else {
          reject(xhr, model)
        }
      }
      catch (e) {
        reject(xhr, model)
      }
    }).catch((xhr) => {
      reject(xhr, model)
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
 *  @class <Model> is an object which stock data & can be sync with a server data.
 */

class Model {


  /**
   * @method <constructor> init a model with attributes in first parameter.
   * @param {object|*} attributes
   * @return {Model} self
   */

  constructor (attributes) {
    this.attributes = {}
    if (typeof this.default === "function") {
      this.set(this.default())
    }
    this.set(attributes)
  }


  /**
   *  @method <get> returns model attribute
   *  @param {string} field
   *  @return {*} value
   */

  get (field) {
    return this.attributes[field]
  }


  /**
   *  @method <set> set model {field} attribute with {value}
   *  @param {string|object} field
   *  @param {*} value
   *  @return {Model} self
   */

  set (field, value) {
    const self = this
    if (typeof field === "object") {
      Object.keys(field).forEach((f) => {
        self.set(f, field[f])
      })
    }
    else if (typeof field === "string") {
      this.attributes[field] = value
    }
    return this
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
    this.set(attributes)
    if (typeof options !== "object") options = {}
    options.method = options.method || this.method || "POST"
    options.data = JSON.stringify(this.attributes)

    const req = request(this, options)

    const self = this
    req.then(() => {
      self.parse(self.attributes)
    })

    return req
  }


  /**
   *  @method <clean> replace attributes object by new one empty.
   */

  clean () {
    this.attributes = {}
  }


  /**
   *  @method <parse> is called when request succeeds
   *  @param {Object} raw is raw object extract from request
   *  @return {Object}
   */

  parse (raw) {
    return raw
  }

  toJSON () {
    const result = {}, self = this
    Object.keys(this.attributes).forEach((key) => {
      if (self.attributes[key] instanceof Collection || self.attributes[key] instanceof Model) {
        result[key] = self.attributes[key].toJSON()
      }
      else {
        result[key] = self.attributes[key]
      }
    })
    return result
  }
}

export default Model
