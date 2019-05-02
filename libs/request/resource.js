import ajax from "./ajax"

function merge (...args) {
  const result = {}, success = [], failure = []
  while (args.length) {
    const builder = args.shift()
    if (Array.isArray(builder.success)) success.concat(builder.success)
    if (typeof builder.success === "function") success.push(builder.success)
    if (Array.isArray(builder.failure)) failure.concat(builder.failure)
    if (typeof builder.failure === "function") failure.push(builder.failure)
    Object.assign(builder)
  }
  result.success = success
  result.failure = failure
  return result
}


/**
 *  @function <ajaxParameters> execute parameters and returns in good format
 *  @param {string|function|object} method or builder
 *  @param {string|function} uri to resource
 *  @param {string|function} data to send in request body
 *  @param {function|Array.<function>} success functions
 *  @param {function|Array.<function>} failure functions
 *  @param {object|function} headers to send to request headers
 *  @param {string|function} overrideMimeType to enforce response reading format
 *  @return {Object}
 */

function ajaxParameters (method, uri, data, success, failure, headers, overrideMimeType) {
  if (typeof method === "object" && method !== null) {
    return ajaxParameters(
      method.method,
      method.uri || method.url || method.file || method.source,
      method.data || method.body || method.post,
      method.success || method.load,
      method.failure || method.error,
      method.headers,
      method.overrideMimeType
    )
  }
  else {
    return {
      method,
      uri,
      data,
      success,
      failure,
      headers,
      overrideMimeType
    }
  }
}


/**
 *  @class <Resource> store methods on a common distant "resource". A distant
 *    resource is a stream with same origin and (almost) same acess methods,
 *    like a data server.
 *    Look carefully, the constructor, the addMethod and each methods are called
 *    with same parameters, except addMethod which has a "name" at first
 *    parameter. Theses parameters are merged to create the final builder for
 *    the request.
 */

class Resource {

  /**
   *  @method <constructor>
   *  @param {string|function|object} method or builder
   *  @param {string|function} uri to resource
   *  @param {string|function} data to send in request body
   *  @param {function|Array.<function>} success functions
   *  @param {function|Array.<function>} failure functions
   *  @param {object|function} headers to send to request headers
   *  @param {string|function} overrideMimeType to enforce response reading format
   *  @return {Resource} self
   */

  constructor (...args) {
    this.commonBuilder = ajaxParameters.apply(null, args)
    this.methodsBuilder = {}
  }

  /**
   *  @method <addMethod> register a new method of this resource, which could be called
   *      with resource.${name}(method, uri, data, success, failure, headers, overrideMimeType).
   *  @param {string} name used to call the method.
   *  @param {string|function|object} method or builder
   *  @param {string|function} uri to resource
   *  @param {string|function} data to send in request body
   *  @param {function|Array.<function>} success functions
   *  @param {function|Array.<function>} failure functions
   *  @param {object|function} headers to send to request headers
   *  @param {string|function} overrideMimeType to enforce response reading format
   *  @return {Resource} self
   */

  addMethod (name, ...args) {
    const self = this
    if (this[name]) {
      throw new Error(`This resource already has a ${name} method`)
    }

    this.methodsBuilder[name] = ajaxParameters.apply(null, args)
    this[name] = () => {
      const builder = ajaxParameters.apply(null, arguments)
      return ajax(merge(self.commonBuilder, self.methodsBuilder[name], builder))
    }
    return this
  }


  /**
   *  @function <request> send a request
   *  @param {string|function|object} method or builder
   *  @param {string|function} uri to resource
   *  @param {string|function} data to send in request body
   *  @param {function|Array.<function>} success functions
   *  @param {function|Array.<function>} failure functions
   *  @param {object|function} headers to send to request headers
   *  @param {string|function} overrideMimeType to enforce response reading format
   *  @return {Promise.<XMLHttpRequest>.<XMLHttpRequest>}
   */

  static request (...args) {
    const builder = ajaxParameters.apply(null, args)
    return ajax(builder)
  }
}

export { Resource as default, Resource, merge }
