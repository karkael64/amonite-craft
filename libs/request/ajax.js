/**
 *  @function <ajax> execute a request to server
 *  @param {string|function|object} method or builder
 *  @param {string|function} uri to resource
 *  @param {string|function} data to send in request body
 *  @param {function|Array.<function>} success functions
 *  @param {function|Array.<function>} failure functions
 *  @param {object|function} headers to send to request headers
 *  @param {string|function} overrideMimeType to enforce response reading format
 *  @return {Promise}
 */

function ajax (...args) {
  const builder = ajaxParameters.apply(null, args)

  const prom = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.addEventListener("loadend", () => {
      resolve(xhr)
    })
    xhr.addEventListener("error", () => {
      const err = new Error(`Request ${builder.method} ${builder.uri} failed`)
      err.xhr = xhr
      reject(err)
    })

    xhr.open(builder.method, builder.uri)

    if (typeof builder.headers === "object" && builder.headers !== null) {
      Object.keys(builder.headers).forEach((key) => {
        const str = tryExec(builder.headers[key])
        if (typeof str === "string") {
          xhr.setRequestHeader(key, str)
        }
      })
    }

    if (typeof builder.overrideMimeType === "string") {
      xhr.overrideMimeType(builder.overrideMimeType)
    }

    xhr.send(builder.data)
  })

  if (Array.isArray(builder.success)) {
    builder.success.forEach((fn) => {
      if (typeof fn === "function")
        prom.then(fn)
    })
  }
  if (typeof builder.success === "function") {
    prom.then(builder.success)
  }

  if (Array.isArray(builder.failure)) {
    builder.failure.forEach((fn) => {
      if (typeof fn === "function")
        prom.catch(fn)
    })
  }
  if (typeof builder.failure === "function") {
    prom.catch(builder.failure)
  }

  return prom
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
  if (typeof method === "object") {
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
      method: tryExec.call(this, method, "GET", arguments),
      uri: tryExec.call(this, uri, "", arguments),
      data: tryExec.call(this, data, null, arguments),
      success,
      failure,
      headers: tryExec.call(this, headers, null, arguments),
      overrideMimeType: tryExec.call(this, overrideMimeType, null, arguments)
    }
  }
}


/**
 *  @function <tryExec> execute {fn} if it is a function or
 *    return {fn} if it is a string or
 *    return {def}.
 *  @return {string|*}
 */

function tryExec (fn, def, args) {
  if (typeof fn === "function") {
    return fn.apply(this, args)
  }
  if (typeof fn === "string") {
    return fn
  }
  return def
}

export { ajax as default, ajax, ajaxParameters, tryExec }
