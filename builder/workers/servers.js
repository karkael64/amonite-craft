const Express = require('express')
const path = require('path')

function local (then, config) {

  const local = config.localServer || {}
  const host = local.host || 'localhost'
  const port = local.port || 80

  if (!local.folder) {
    throw new Error('Please set config localServer.folder')
  }
  const folder = local.folder
  const file = config.templateOutput;

  console.log(`Launch local server at \thttp://${host}:${port}/`)
  const express = Express()

  express.use(Express.static(folder))
  express.use(function (req, res) {
    const defaultfile = path.resolve(folder, file)
    console.log(defaultfile)
    res.sendFile(defaultfile)
  });
  express.listen(port, host, then)
}


function stub (then, config) {

  const stub = config.stubServer || {}
  const host = stub.host || 'localhost'
  const port = stub.port || 80

  if (!stub.api) {
    throw new Error('Please set config stubServer.api')
  }
  const api = stub.api
  const root = stub.root || ''

  console.log(`Launch stub server at \thttp://${host}:${port}${root}/`)
  const express = Express()

  express.use(root, api)
  express.listen(port, host, then)
}

exports.local = local
exports.stub = stub
