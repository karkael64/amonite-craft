const http = require("http")
const fs = require("fs")

const server = http.createServer(function (req, res) {
  var filepath = req.url
  if (filepath.substr(-1) === "/") filepath += "index.html"
  filepath = `${__dirname}/public/${filepath}`

  if (fs.existsSync(filepath)) {
    res.statusCode = 200
    res.end(fs.readFileSync(filepath))
  } else {
    res.statusCode = 404
    res.end("Not found!")
  }
})

server.listen(3001, function () {
  console.log("Server run http://localhost:3001")
})
