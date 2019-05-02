const fs = require("fs");
const route = new require("express").Router();

const delay = 300,
  longDelay = 2000,
  shortDelay = 10;

function readJsonFileSync(filepath, encoding) {
  const file = fs.readFileSync(filepath, encoding || "utf8");
  return JSON.parse(file);
}

function getConfig(file) {
  const filepath = __dirname + "/" + file;
  return readJsonFileSync(filepath);
}


route.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

route.get("/user", function(req, res){
  setTimeout(function(){
    res.json(getConfig("./v1/user/index.json"));
  }, delay);
});

route.post("/users", function(req, res){
  setTimeout(function(){
    res.json(getConfig("./v1/users/index.json"));
  }, delay);
});

route.get("/forum/:id(\\d+)", function(req, res) {
  setTimeout(function(){
    res.json(getConfig("./v1/forum/123.json"));
  }, delay);
});

route.post("/forum/:id(\\d+)", function(req, res) {
  setTimeout(function(){
    res.json(getConfig("./v1/forum/123.json"));
  }, delay);
});

route.get("/forum/:id(\\d+)/delete", function(req, res) {
  setTimeout(function(){
    res.json(getConfig("./v1/forum/123.json"));
  }, delay);
});


module.exports = route;
