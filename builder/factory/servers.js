const Express = require("express")
const expressRoute = require("../../test/stub/api")

function local(then) {
  console.log("Launch local server at: http://localhost:3000/")
  const express = Express()

  express.use(Express.static("./build/"))
  express.listen(3000, then)
}


function stub(then) {
  console.log("Launch stub server at: http://localhost:2999/")
  const express = Express()

  express.use("/api/v1/", expressRoute)
  express.listen(2999, then)
}

exports.local = local
exports.stub = stub
