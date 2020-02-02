(function(e,f){function r(x){return function(p){var i=x[p];if(f[i][2])return f[i][2].exports;var o={},m={exports:o},[s,h]=f[i];f[i][2]=m;h.call(o,r(s),m,o);return m.exports}}r({"":e})("")})(0, [[{"../../../libs/router/route":1},function (require,module,exports) {
"use strict";

var _route = _interopRequireDefault(require("../../../libs/router/route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Test Class Route", function () {
  if (!global.window) {
    global.window = {
      location: {
        hash: ""
      }
    };
    global.window.window = global.window;
  }

  expect(!!_route["default"], true, "First expect in class Route");
  expect(!!new _route["default"]("", function () {}), true, "Can instanciate class Route");
  describe("Create a Route from a string", function () {
    var count_controller = 0;

    var fn = function fn() {
      count_controller++;
    };

    var route = new _route["default"]("/hello/world:string/test:/:integer", fn);
    describe("Match", function () {
      var hash = "#/hello/world:any/test:yep-123/42";

      _route["default"].setBrowserRequest("#/hello/world:any/test:yep-123/42");

      expect(hash, window.location.hash, "window location hash has changed");
      expect(hash.substr(1), _route["default"].getBrowserRequest(), "recover hash without #");
      expect(route.isMatch(), true, "route matches");
      var args = route.getArgs();
      expect(args.length, 5, "route matchs and returns 5 computed chunks");
      expectEquiv(args[0], {
        value: ""
      }, "first chunk matches (empty)");
      expectEquiv(args[1], {
        value: "hello"
      }, "second chunk matches (simple)");
      expectEquiv(args[2], {
        value: "any",
        type: "string",
        key: "world"
      }, "third chunk matches (key:type)");
      expectEquiv(args[3], {
        value: "yep-123",
        type: "",
        key: "test"
      }, "fourth chunk matches (key:)");
      expectEquiv(args[4], {
        value: 42,
        type: "integer"
      }, "fifth chunk matches (:type)");
      expect(count_controller, 0, "controller not called yet");
      route.run(args);
      expect(count_controller, 1, "controller first call");
      expect("#" + route.createPath(args), window.location.hash, "can recreate path from args");
      expect("#" + route.createPath(args.map(function (obj) {
        return obj.value;
      })), window.location.hash, "can recreate path from args values");
    });
    describe("Don't match", function () {
      _route["default"].setBrowserRequest("");

      expect(route.isMatch(), false, "should not match empty");

      _route["default"].setBrowserRequest("#");

      expect(route.isMatch(), false, "should not match empty");

      _route["default"].setBrowserRequest("#/hello/world:something/test:123/");

      expect(route.isMatch(), false, "should match every chunk");

      _route["default"].setBrowserRequest("#/hello/world:something/test/123");

      expect(route.isMatch(), false, "need \":\" even for empty chunk");
    });
  });
  describe("Create a Route from a list of string", function () {
    var route = new _route["default"](["what", "is:", ":time"], function () {});

    _route["default"].setBrowserRequest("#what/is:your/23:59:59");

    expect(route.isMatch(), true, "route matches");
  });
  describe("Create a Route from a list of objects", function () {
    var r = /^\d{4}-\d{2}-\d{2}$/;
    var route = new _route["default"]([{
      value: ""
    }, {
      key: "hello",
      regexp: r
    }], function () {});

    _route["default"].setBrowserRequest("#/hello:2019-01-01");

    expect(route.isMatch(), true, "route matches");
  });
  describe("Create a Route with a star", function () {
    describe("Create a Route with a single star", function () {
      var route = new _route["default"]("*", function () {});

      _route["default"].setBrowserRequest("");

      expect(route.isMatch(), true, "route matches all (4)");

      _route["default"].setBrowserRequest("#");

      expect(route.isMatch(), true, "route matches all (1)");

      _route["default"].setBrowserRequest("#aze");

      expect(route.isMatch(), true, "route matches all (2)");

      _route["default"].setBrowserRequest("#ljn/4567&éiujhz&é\"\"/aze\"");

      expect(route.isMatch(), true, "route matches all (3)");
      expectEquiv(route.getArgs(), [{
        value: "ljn/4567&éiujhz&é\"\"/aze\""
      }], "extracted args");
    });
    describe("Create a Route with a star at the end", function () {
      var route = new _route["default"]("/hello/*", function () {});

      _route["default"].setBrowserRequest("#/hello/");

      expect(route.isMatch(), true, "route matches all");

      _route["default"].setBrowserRequest("#/hello/aze");

      expect(route.isMatch(), true, "route matches all");

      _route["default"].setBrowserRequest("#/hello/aze/123");

      expect(route.isMatch(), true, "route matches all");
      expectEquiv(route.getArgs(), [{
        value: ""
      }, {
        value: "hello"
      }, {
        value: "aze/123"
      }], "extracted args");
    });
  });
  describe("Create a Route with a star within", function () {
    var route = new _route["default"]("/hello/*/other", function () {});

    _route["default"].setBrowserRequest("#/hello/you_and/other");

    expect(route.isMatch(), true, "route matches");

    _route["default"].setBrowserRequest("#/hello/you/and/other");

    expect(route.isMatch(), false, "route does not match");
  });
});
}],[{"./chunk":2},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chunk = _interopRequireDefault(require("./chunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var currentArgs;

var Route = function () {
  function Route(path, controller) {
    _classCallCheck(this, Route);

    if (typeof path === "string") {
      path = path.split("/");
    }

    if (Array.isArray(path)) {
      this.chunks = path.map(function (chunk) {
        return new _chunk["default"](chunk);
      });
    } else {
      throw new Error("First parameter should be a string.");
    }

    if (typeof controller !== "function") {
      throw new Error("Second parameter should be a function.");
    }

    this.controller = controller;
    this.noEnd = this.chunks[this.chunks.length - 1].original === "*";
  }

  _createClass(Route, [{
    key: "go",
    value: function go(args, force) {
      var params = _typeof(args) === "object" ? args : {};
      var path = this.createPath(Object.assign({}, currentArgs, params));

      if (force && path === Route.getBrowserRequest()) {
        this.run(args);
      } else {
        Route.setBrowserRequest(path);
      }

      return this;
    }
  }, {
    key: "run",
    value: function run(args) {
      currentArgs = args || this.getArgs();
      return this.controller(currentArgs);
    }
  }, {
    key: "getArgs",
    value: function getArgs() {
      var items = Route.getBrowserRequest().split("/");

      try {
        var i = 0;
        var args = this.chunks.map(function (chunk) {
          var item = items[i++];
          var res = chunk.extractArgs(item);
          return res;
        });

        if (this.chunks[i - 1].original === "*") {
          args.pop();
          args.push({
            value: items.slice(i - 1).join("/")
          });
        } else if (i !== items.length) {
          return null;
        }

        return args;
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "isMatch",
    value: function isMatch() {
      return this.getArgs() !== null;
    }
  }, {
    key: "createPath",
    value: function createPath(args) {
      if (!Array.isArray(args)) {
        args = [];
      }

      return this.chunks.map(function (chunk, key) {
        return chunk.createPath(args[key]);
      }).join("/");
    }
  }], [{
    key: "getBrowserRequest",
    value: function getBrowserRequest() {
      return window.location.hash.substr(1);
    }
  }, {
    key: "setBrowserRequest",
    value: function setBrowserRequest(str) {
      window.location.hash = str;
    }
  }]);

  return Route;
}();

var _default = Route;
exports["default"] = _default;
}],[{},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChunkError = function () {
  function ChunkError(message) {
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var previous = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, ChunkError);

    var stack = new Error().stack.split(/\s*[\r\n]+\s*/);
    stack.shift();
    stack.shift();
    Object.assign(this, {
      message: message,
      code: code,
      previous: previous,
      stack: stack
    });
  }

  _createClass(ChunkError, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.constructor.name, " (").concat(this.code, "): ").concat(this.message, "\n\t").concat(this.stack.join("\n\t"), "\n");
    }
  }]);

  return ChunkError;
}();

var FORMATS = {
  number: function number(str) {
    var n = parseFloat(str);
    if (isNaN(n)) throw new ChunkError("Bad type: expect argument to be a number.");
    return n;
  },
  integer: function integer(str) {
    var n = parseInt(str);
    if (isNaN(n)) throw new ChunkError("Bad type: expect argument to be an integer.");
    return n;
  },
  "float": function float(str) {
    var n = parseFloat(str);
    if (isNaN(n)) throw new ChunkError("Bad type: expect argument to be a float.");
    return n;
  },
  string: function string(str) {
    try {
      var s = JSON.parse(str);
      if (typeof s === "string") return s;
    } catch (e) {}

    return str;
  },
  json: function json(str) {
    try {
      var o = JSON.parse(str);
      if (_typeof(o) === "object") return o;
    } catch (e) {}

    throw new ChunkError("Bad type: expect argument to be a json object.");
  },
  jsonarray: function jsonarray(str) {
    try {
      var o = JSON.parse(str);
      if (_typeof(o) === "object" && Array.isArray(o)) return o;
    } catch (e) {}

    throw new ChunkError("Bad type: expect argument to be a json array.");
  },
  jsonobject: function jsonobject(str) {
    try {
      var o = JSON.parse(str);
      if (_typeof(o) === "object" && !Array.isArray(o)) return o;
    } catch (e) {}

    throw new ChunkError("Bad type: expect argument to be a json object not array.");
  },
  "boolean": function boolean(str) {
    try {
      var b = JSON.parse(str);
      if (typeof b === "boolean") return b;
    } catch (e) {}

    throw new ChunkError("Bad type: expect argument to be a boolean.");
  },
  any: function any(str) {
    try {
      return JSON.parse(str);
    } catch (e) {}

    return str;
  },
  uuid: function uuid(str) {
    if (str.match(/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/)) return str;else throw new ChunkError("Bad type: expect argument to be an uuid.");
  },
  date: function date(str) {
    if (str.match(/^\d{4}-\d{2}-\d{2}$/)) return new Date(str);else throw new ChunkError("Bad type: expect argument to be a date.");
  },
  time: function time(str) {
    var found = str.match(/^(2[0-3]|[01][0-9]):([0-5][0-9])(:([0-5][0-9])(.(\d{1,3}))?)?$/);

    if (found) {
      var dt = new Date();
      dt.setHours(found[1]);
      dt.setMinutes(found[2]);
      if (found[3]) dt.setSeconds(found[4]);
      if (found[5]) dt.setMilliseconds(found[6]);
      return dt;
    } else throw new ChunkError("Bad type: expect argument to be a time.");
  },
  datetime: function datetime(str) {
    var date = new Date(str);
    if (!isNaN(+date)) return date;else throw new ChunkError("Bad type: expect argument to be any Date format.");
  },
  jsondate: function jsondate(str) {
    var date = new Date(str);
    if (!isNaN(+date)) return date;else throw new ChunkError("Bad type: expect argument to be any Date format.");
  },
  integerdate: function integerdate(str) {
    var date = new Date(parseInt(str));
    if (!isNaN(+date)) return date;else throw new ChunkError("Bad type: expect argument to be an integer.");
  }
};
FORMATS[''] = FORMATS['any'];

function isObject(el) {
  return _typeof(el) === "object" && el !== null;
}

function ruleToObject(rule) {
  var res = {};

  if (_typeof(rule) === "object") {
    if (rule instanceof RegExp) {
      res.regexp = rule;
    } else {
      if (rule.value) res.value = rule.value;
      if (rule.key) res.key = rule.key;
      if (rule.type) res.type = rule.type;
      if (rule.regexp) res.regexp = rule.regexp;
      if (rule.match) res.match = rule.match;
      if (rule.transform) res.transform = rule.transform;
    }
  }

  if (typeof rule === "function") {
    res.transform = rule;
  }

  if (typeof rule === "string") {
    if (rule === "*") {
      return {};
    }

    var split = rule.split(":");

    if (split.length > 1) {
      var key = split.shift(),
          type = split.join(":");
      res.type = type;

      if (key.length) {
        res.key = key;
      }
    } else {
      res.value = rule;
    }
  }

  return res;
}

function testValue(rule, value) {
  if (rule.value !== undefined) {
    if (rule.value === value) {
      return {
        value: value
      };
    } else {
      throw new ChunkError("Chunk value does not match");
    }
  }

  var res = {};

  if (rule.type !== undefined) {
    if (FORMATS[rule.type] !== undefined) {
      res.value = FORMATS[rule.type](value);
      res.type = rule.type;
    } else {
      throw new ChunkError("Chunk value match type does not exists");
    }
  } else {
    res.value = value;
  }

  if (rule.regexp instanceof RegExp) {
    var found = value.match(rule.regexp);

    if (found) {
      res.regexp = rule.regexp;

      if (isObject(rule.match)) {
        var el = Object.keys(rule.match).find(function (m) {
          return rule.match[m] === found[0];
        });

        if (el !== undefined) {
          res.index = el;
        } else {
          throw new ChunkError("Chunk RegExp found value does not match listed values");
        }
      }
    } else {
      throw new ChunkError("Chunk value does not match RegExp");
    }
  } else {
    if (isObject(rule.match)) {
      var _el = Object.keys(rule.match).find(function (m) {
        return rule.match[m] === value;
      });

      if (_el !== undefined) {
        res.index = _el;
      } else {
        throw new ChunkError("Chunk value does not match listed values");
      }
    }
  }

  if (typeof rule.transform === "function") {
    res.original = value;
    res.transform = rule.transform;
    return rule.transform(res);
  }

  return res;
}

function _extractArgs(rule, chunk) {
  if (rule.key !== undefined) {
    var split = chunk.split(":");

    if (split.length > 1) {
      var key = split.shift(),
          value = split.join(":"),
          res = testValue(rule, value);
      res.key = rule.key;
      return res;
    } else {
      throw new ChunkError("Chunk content does not match key/value format");
    }
  } else {
    return testValue(rule, chunk);
  }
}

function _createPath(rule, value) {
  var res = (rule.key ? rule.key + ":" : "") + value;

  if (rule.type !== undefined) {
    try {
      FORMATS[rule.type](value);
    } catch (e) {
      throw new ChunkError("Value does not match path requirements");
    }
  }

  if (rule.regexp instanceof RegExp) {
    var found = value.match(rule.regexp);

    if (found) {
      if (Array.isArray(rule.match) && rule.match.indexOf(found[0]) === -1) {
        throw new ChunkError("Value does not match path requirements");
      }
    } else {
      throw new ChunkError("Value does not match path requirements");
    }
  } else {
    if (Array.isArray(rule.match) && rule.match.indexOf(value) === -1) {
      throw new ChunkError("Value does not match path requirements");
    }
  }

  return res;
}

var Chunk = function () {
  function Chunk(rule) {
    _classCallCheck(this, Chunk);

    this.original = rule;
    this.rule = ruleToObject(rule);
  }

  _createClass(Chunk, [{
    key: "extractArgs",
    value: function extractArgs(chunk) {
      return _extractArgs(this.rule, "" + chunk);
    }
  }, {
    key: "createPath",
    value: function createPath(value) {
      if (_typeof(value) === "object") {
        value = value.value;
      }

      if (~["string", "number"].indexOf(_typeof(value))) {
        return _createPath(this.rule, "" + value);
      } else {
        throw new Error("First parameter should be a string, a number or an object containing \"value\" field");
      }
    }
  }, {
    key: "setType",
    value: function setType(type) {
      this.rule.type = type;
      return this;
    }
  }, {
    key: "setTransform",
    value: function setTransform(transform) {
      if (typeof transform === "function") {
        this.rule.transform = transform;
      } else {
        throw new Error("First parameter should be a Function");
      }

      return this;
    }
  }, {
    key: "setRegExp",
    value: function setRegExp(regexp) {
      if (regexp instanceof RegExp) {
        this.rule.regexp = regexp;
      } else {
        throw new TypeError("First parameter should be a RegExp instance");
      }

      return this;
    }
  }, {
    key: "addMatcher",
    value: function addMatcher(matcher) {
      if (!this.rule.match) {
        this.rule.match = [];
      }

      this.rule.match.push(matcher);
      return this;
    }
  }, {
    key: "setMatchers",
    value: function setMatchers(matchers) {
      if (Array.isArray(matchers)) {
        this.rule.match = matchers;
      } else {
        throw new TypeError("First parameter should be an Array");
      }

      return this;
    }
  }], [{
    key: "addFormat",
    value: function addFormat(name, formatter) {
      if (!(typeof formatter === "function")) {
        throw new TypeError("Second parameter should be a Function");
      }

      if (FORMATS[name]) {
        throw new TypeError("Type ".concat(name, " already exists"));
      }

      FORMATS[name] = formatter;
    }
  }]);

  return Chunk;
}();

var _default = Chunk;
exports["default"] = _default;
}]]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90ZXN0L2xpYnMvcm91dGVyL3JvdXRlLnRlc3QuanMiLCIvbGlicy9yb3V0ZXIvcm91dGUuanMiLCIvbGlicy9yb3V0ZXIvY2h1bmsuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJnbG9iYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJleHBlY3QiLCJSb3V0ZSIsImNvdW50X2NvbnRyb2xsZXIiLCJmbiIsInJvdXRlIiwic2V0QnJvd3NlclJlcXVlc3QiLCJzdWJzdHIiLCJnZXRCcm93c2VyUmVxdWVzdCIsImlzTWF0Y2giLCJhcmdzIiwiZ2V0QXJncyIsImxlbmd0aCIsImV4cGVjdEVxdWl2IiwidmFsdWUiLCJ0eXBlIiwia2V5IiwicnVuIiwiY3JlYXRlUGF0aCIsIm1hcCIsIm9iaiIsInIiLCJyZWdleHAiLCJjdXJyZW50QXJncyIsInBhdGgiLCJjb250cm9sbGVyIiwic3BsaXQiLCJBcnJheSIsImlzQXJyYXkiLCJjaHVua3MiLCJjaHVuayIsIkNodW5rIiwiRXJyb3IiLCJub0VuZCIsIm9yaWdpbmFsIiwiZm9yY2UiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtcyIsImkiLCJpdGVtIiwicmVzIiwiZXh0cmFjdEFyZ3MiLCJwb3AiLCJwdXNoIiwic2xpY2UiLCJqb2luIiwiZSIsInN0ciIsIkNodW5rRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInByZXZpb3VzIiwic3RhY2siLCJzaGlmdCIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkZPUk1BVFMiLCJudW1iZXIiLCJuIiwicGFyc2VGbG9hdCIsImlzTmFOIiwiaW50ZWdlciIsInBhcnNlSW50Iiwic3RyaW5nIiwicyIsIkpTT04iLCJwYXJzZSIsImpzb24iLCJvIiwianNvbmFycmF5IiwianNvbm9iamVjdCIsImIiLCJhbnkiLCJ1dWlkIiwibWF0Y2giLCJkYXRlIiwiRGF0ZSIsInRpbWUiLCJmb3VuZCIsImR0Iiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsInNldE1pbGxpc2Vjb25kcyIsImRhdGV0aW1lIiwianNvbmRhdGUiLCJpbnRlZ2VyZGF0ZSIsImlzT2JqZWN0IiwiZWwiLCJydWxlVG9PYmplY3QiLCJydWxlIiwiUmVnRXhwIiwidHJhbnNmb3JtIiwidGVzdFZhbHVlIiwidW5kZWZpbmVkIiwia2V5cyIsImZpbmQiLCJtIiwiaW5kZXgiLCJpbmRleE9mIiwiVHlwZUVycm9yIiwibWF0Y2hlciIsIm1hdGNoZXJzIiwiZm9ybWF0dGVyIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7OztBQUVBQSxRQUFRLENBQUMsa0JBQUQsRUFBcUIsWUFBWTtBQUN2QyxNQUFJLENBQUNDLE1BQU0sQ0FBQ0MsTUFBWixFQUFvQjtBQUNsQkQsVUFBTSxDQUFDQyxNQUFQLEdBQWdCO0FBQUNDLGNBQVEsRUFBRTtBQUFDQyxZQUFJLEVBQUU7QUFBUDtBQUFYLEtBQWhCO0FBQ0FILFVBQU0sQ0FBQ0MsTUFBUCxDQUFjQSxNQUFkLEdBQXVCRCxNQUFNLENBQUNDLE1BQTlCO0FBQ0Q7O0FBRURHLFFBQU0sQ0FBQyxDQUFDLENBQUNDLGlCQUFILEVBQVUsSUFBVixFQUFnQiw2QkFBaEIsQ0FBTjtBQUNBRCxRQUFNLENBQUMsQ0FBQyxDQUFFLElBQUlDLGlCQUFKLENBQVUsRUFBVixFQUFjLFlBQUksQ0FBRSxDQUFwQixDQUFKLEVBQTRCLElBQTVCLEVBQWtDLDZCQUFsQyxDQUFOO0FBRUFOLFVBQVEsQ0FBQyw4QkFBRCxFQUFpQyxZQUFZO0FBQ25ELFFBQUlPLGdCQUFnQixHQUFHLENBQXZCOztBQUNBLFFBQU1DLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQVk7QUFBRUQsc0JBQWdCO0FBQUksS0FBN0M7O0FBQ0EsUUFBTUUsS0FBSyxHQUFHLElBQUlILGlCQUFKLENBQVUsb0NBQVYsRUFBZ0RFLEVBQWhELENBQWQ7QUFFQVIsWUFBUSxDQUFDLE9BQUQsRUFBVSxZQUFZO0FBQzVCLFVBQU1JLElBQUksR0FBRyxtQ0FBYjs7QUFDQUUsd0JBQU1JLGlCQUFOLENBQXdCLG1DQUF4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UyxFQUFXO0FBQ2pDLFVBQUksRUFBRSxPQUFPQSxTQUFQLEtBQXFCLFVBQXZCLENBQUosRUFBd0M7QUFDdEMsY0FBTSxJQUFJSCxTQUFKLENBQWMsdUNBQWQsQ0FBTjtBQUNEOztBQUNELFVBQUk1QyxPQUFPLENBQUNELElBQUQsQ0FBWCxFQUFtQjtBQUNqQixjQUFNLElBQUk2QyxTQUFKLGdCQUFzQjdDLElBQXRCLHFCQUFOO0FBQ0Q7O0FBQ0RDLGFBQU8sQ0FBQ0QsSUFBRCxDQUFQLEdBQWdCZ0QsU0FBaEI7QUFDRDs7Ozs7O2VBSVkxRSxLIiwiZmlsZSI6Ii9ob21lL3YuY291cnRpbkBnb3AubGluay93d3cvYW1vbml0ZS1jcmFmdC90ZXN0L2xpYnMvcm91dGVyL3JvdXRlLnRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGUgZnJvbSBcIi4uLy4uLy4uL2xpYnMvcm91dGVyL3JvdXRlXCJcblxuZGVzY3JpYmUoXCJUZXN0IENsYXNzIFJvdXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKCFnbG9iYWwud2luZG93KSB7XG4gICAgZ2xvYmFsLndpbmRvdyA9IHtsb2NhdGlvbjoge2hhc2g6IFwiXCJ9fTtcbiAgICBnbG9iYWwud2luZG93LndpbmRvdyA9IGdsb2JhbC53aW5kb3c7XG4gIH1cblxuICBleHBlY3QoISFSb3V0ZSwgdHJ1ZSwgXCJGaXJzdCBleHBlY3QgaW4gY2xhc3MgUm91dGVcIilcbiAgZXhwZWN0KCEhKG5ldyBSb3V0ZShcIlwiLCAoKT0+e30pKSwgdHJ1ZSwgXCJDYW4gaW5zdGFuY2lhdGUgY2xhc3MgUm91dGVcIilcblxuICBkZXNjcmliZShcIkNyZWF0ZSBhIFJvdXRlIGZyb20gYSBzdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb3VudF9jb250cm9sbGVyID0gMFxuICAgIGNvbnN0IGZuID0gZnVuY3Rpb24gKCkgeyBjb3VudF9jb250cm9sbGVyKysgfVxuICAgIGNvbnN0IHJvdXRlID0gbmV3IFJvdXRlKFwiL2hlbGxvL3dvcmxkOnN0cmluZy90ZXN0Oi86aW50ZWdlclwiLCBmbilcblxuICAgIGRlc2NyaWJlKFwiTWF0Y2hcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaGFzaCA9IFwiIy9oZWxsby93b3JsZDphbnkvdGVzdDp5ZXAtMTIzLzQyXCJcbiAgICAgIFJvdXRlLnNldEJyb3dzZXJSZXF1ZXN0KFwiIy9oZWxsby93b3JsZDphbnkvdGVzdDp5ZXAtMTIzLzQyXCIpXG4gICAgICBleHBlY3QoaGFzaCwgd2luZG93LmxvY2F0aW9uLmhhc2gsIFwid2luZG93IGxvY2F0aW9uIGhhc2ggaGFzIGNoYW5nZWRcIilcbiAgICAgIGV4cGVjdChoYXNoLnN1YnN0cigxKSwgUm91dGUuZ2V0QnJvd3NlclJlcXVlc3QoKSwgXCJyZWNvdmVyIGhhc2ggd2l0aG91dCAjXCIpXG4gICAgICBleHBlY3Qocm91dGUuaXNNYXRjaCgpLCB0cnVlLCBcInJvdXRlIG1hdGNoZXNcIilcblxuICAgICAgY29uc3QgYXJncyA9IHJvdXRlLmdldEFyZ3MoKVxuICAgICAgZXhwZWN0KGFyZ3MubGVuZ3RoLCA1LCBcInJvdXRlIG1hdGNocyBhbmQgcmV0dXJucyA1IGNvbXB1dGVkIGNodW5rc1wiKVxuICAgICAgZXhwZWN0RXF1aXYoYXJnc1swXSwge3ZhbHVlOiBcIlwifSwgXCJmaXJzdCBjaHVuayBtYXRjaGVzIChlbXB0eSlcIilcbiAgICAgIGV4cGVjdEVxdWl2KGFyZ3NbMV0sIHt2YWx1ZTogXCJoZWxsb1wifSwgXCJzZWNvbmQgY2h1bmsgbWF0Y2hlcyAoc2ltcGxlKVwiKVxuICAgICAgZXhwZWN0RXF1aXYoYXJnc1syXSwge3ZhbHVlOiBcImFueVwiLCB0eXBlOiBcInN0cmluZ1wiLCBrZXk6IFwid29ybGRcIn0sIFwidGhpcmQgY2h1bmsgbWF0Y2hlcyAoa2V5OnR5cGUpXCIpXG4gICAgICBleHBlY3RFcXVpdihhcmdzWzNdLCB7dmFsdWU6IFwieWVwLTEyM1wiLCB0eXBlOiBcIlwiLCBrZXk6IFwidGVzdFwifSwgXCJmb3VydGggY2h1bmsgbWF0Y2hlcyAoa2V5OilcIilcbiAgICAgIGV4cGVjdEVxdWl2KGFyZ3NbNF0sIHt2YWx1ZTogNDIsIHR5cGU6IFwiaW50ZWdlclwifSwgXCJmaWZ0aCBjaHVuayBtYXRjaGVzICg6dHlwZSlcIilcblxuICAgICAgZXhwZWN0KGNvdW50X2NvbnRyb2xsZXIsIDAsIFwiY29udHJvbGxlciBub3QgY2FsbGVkIHlldFwiKVxuICAgICAgcm91dGUucnVuKGFyZ3MpXG4gICAgICBleHBlY3QoY291bnRfY29udHJvbGxlciwgMSwgXCJjb250cm9sbGVyIGZpcnN0IGNhbGxcIilcblxuICAgICAgZXhwZWN0KFwiI1wiICsgcm91dGUuY3JlYXRlUGF0aChhcmdzKSwgd2luZG93LmxvY2F0aW9uLmhhc2gsIFwiY2FuIHJlY3JlYXRlIHBhdGggZnJvbSBhcmdzXCIpXG4gICAgICBleHBlY3QoXCIjXCIgKyByb3V0ZS5jcmVhdGVQYXRoKGFyZ3MubWFwKG9iaiA9PiBvYmoudmFsdWUpKSwgd2luZG93LmxvY2F0aW9uLmhhc2gsIFwiY2FuIHJlY3JlYXRlIHBhdGggZnJvbSBhcmdzIHZhbHVlc1wiKVxuICAgIH0pXG5cbiAgICBkZXNjcmliZShcIkRvbid0IG1hdGNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIFJvdXRlLnNldEJyb3dzZXJSZXF1ZXN0KFwiXCIpXG4gICAgICBleHBlY3Qocm91dGUuaXNNYXRjaCgpLCBmYWxzZSwgXCJzaG91bGQgbm90IG1hdGNoIGVtcHR5XCIpXG4gICAgICBSb3V0ZS5zZXRCcm93c2VyUmVxdWVzdChcIiNcIilcbiAgICAgIGV4cGVjdChyb3V0ZS5pc01hdGNoKCksIGZhbHNlLCBcInNob3VsZCBub3QgbWF0Y2ggZW1wdHlcIilcbiAgICAgIFJvdXRlLnNldEJyb3dzZXJSZXF1ZXN0KFwiIy9oZWxsby93b3JsZDpzb21ldGhpbmcvdGVzdDoxMjMvXCIpXG4gICAgICBleHBlY3Qocm91dGUuaXNNYXRjaCgpLCBmYWxzZSwgXCJzaG91bGQgbWF0Y2ggZXZlcnkgY2h1bmtcIilcbiAgICAgIFJvdXRlLnNldEJyb3dzZXJSZXF1ZXN0KFwiIy9oZWxsby93b3JsZDpzb21ldGhpbmcvdGVzdC8xMjNcIilcbiAgICAgIGV4cGVjdChyb3V0ZS5pc01hdGNoKCksIGZhbHNlLCBcIm5lZWQgXFxcIjpcXFwiIGV2ZW4gZm9yIGVtcHR5IGNodW5rXCIpXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZShcIkNyZWF0ZSBhIFJvdXRlIGZyb20gYSBsaXN0IG9mIHN0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgcm91dGUgPSBuZXcgUm91dGUoW1wid2hhdFwiLCBcImlzOlwiLCBcIjp0aW1lXCJdLCBmdW5jdGlvbiAoKSB7fSlcbiAgICBSb3V0ZS5zZXRCcm93c2VyUmVxdWVzdChcIiN3aGF0L2lzOnlvdXIvMjM6NTk6NTlcIilcbiAgICBleHBlY3Qocm91dGUuaXNNYXRjaCgpLCB0cnVlLCBcInJvdXRlIG1hdGNoZXNcIilcbiAgfSlcblxuICBkZXNjcmliZShcIkNyZWF0ZSBhIFJvdXRlIGZyb20gYSBsaXN0IG9mIG9iamVjdHNcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHIgPSAvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC9cbiAgICBjb25zdCByb3V0ZSA9IG5ldyBSb3V0ZShbe3ZhbHVlOiBcIlwifSwge2tleTogXCJoZWxsb1wiLCByZWdleHA6IHJ9XSwgZnVuY3Rpb24gKCkge30pXG4gICAgUm91dGUuc2V0QnJvd3NlclJlcXVlc3QoXCIjL2hlbGxvOjIwMTktMDEtMDFcIilcbiAgICBleHBlY3Qocm91dGUuaXNNYXRjaCgpLCB0cnVlLCBcInJvdXRlIG1hdGNoZXNcIilcbiAgfSlcblxuICBkZXNjcmliZShcIkNyZWF0ZSBhIFJvdXRlIHdpdGggYSBzdGFyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkZXNjcmliZShcIkNyZWF0ZSBhIFJvdXRlIHdpdGggYSBzaW5nbGUgc3RhclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCByb3V0ZSA9IG5ldyBSb3V0ZShcIipcIiwgZnVuY3Rpb24gKCkge30pXG4gICAgICBSb3V0ZS5zZXRCcm93c2VyUmVxdWVzdChcIlwiKVxuICAgICAgZXhwZWN0KHJvdXRlLmlzTWF0Y2goKSwgdHJ1ZSwgXCJyb3V0ZSBtYXRjaGVzIGFsbCAoNClcIilcbiAgICAgIFJvdXRlLnNldEJyb3dzZXJSZXF1ZXN0KFwiI1wiKVxuICAgICAgZXhwZWN0KHJvdXRlLmlzTWF0Y2goKSwgdHJ1ZSwgXCJyb3V0ZSBtYXRjaGVzIGFsbCAoMSlcIilcbiAgICAgIFJvdXRlLnNldEJyb3dzZXJSZXF1ZXN0KFwiI2F6ZVwiKVxuICAgICAgZXhwZWN0KHJvdXRlLmlzTWF0Y2goKSwgdHJ1ZSwgXCJyb3V0ZSBtYXRjaGVzIGFsbCAoMilcIilcbiAgICAgIFJvdXRlLnNldEJyb3dzZXJSZXF1ZXN0KFwiI2xqbi80NTY3JsOpaXVqaHomw6lcXFwiXFxcIi9hemVcXFwiXCIpXG4gICAgICBleHBlY3Qocm91dGUuaXNNYXRjaCgpLCB0cnVlLCBcInJvdXRlIG1hdGNoZXMgYWxsICgzKVwiKVxuXG4gICAgICBleHBlY3RFcXVpdihyb3V0ZS5nZXRBcmdzKCksIFt7dmFsdWU6IFwibGpuLzQ1Njcmw6lpdWpoeibDqVxcXCJcXFwiL2F6ZVxcXCJcIn1dLCBcImV4dHJhY3RlZCBhcmdzXCIpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKFwiQ3JlYXRlIGEgUm91dGUgd2l0aCBhIHN0YXIgYXQgdGhlIGVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCByb3V0ZSA9IG5ldyBSb3V0ZShcIi9oZWxsby8qXCIsIGZ1bmN0aW9uICgpIHt9KVxuICAgICAgUm91dGUuc2V0QnJvd3NlclJlcXVlc3QoXCIjL2hlbGxvL1wiKVxuICAgICAgZXhwZWN0KHJvdXRlLmlzTWF0Y2goKSwgdHJ1ZSwgXCJyb3V0ZSBtYXRjaGVzIGFsbFwiKVxuICAgICAgUm91dGUuc2V0QnJvd3NlclJlcXVlc3QoXCIjL2hlbGxvL2F6ZVwiKVxuICAgICAgZXhwZWN0KHJvdXRlLmlzTWF0Y2goKSwgdHJ1ZSwgXCJyb3V0ZSBtYXRjaGVzIGFsbFwiKVxuICAgICAgUm91dGUuc2V0QnJvd3NlclJlcXVlc3QoXCIjL2hlbGxvL2F6ZS8xMjNcIilcbiAgICAgIGV4cGVjdChyb3V0ZS5pc01hdGNoKCksIHRydWUsIFwicm91dGUgbWF0Y2hlcyBhbGxcIilcblxuICAgICAgZXhwZWN0RXF1aXYocm91dGUuZ2V0QXJncygpLCBbe3ZhbHVlOiBcIlwifSwge3ZhbHVlOiBcImhlbGxvXCJ9LCB7dmFsdWU6IFwiYXplLzEyM1wifV0sIFwiZXh0cmFjdGVkIGFyZ3NcIilcbiAgICB9KVxuICB9KVxuXG4gIGRlc2NyaWJlKFwiQ3JlYXRlIGEgUm91dGUgd2l0aCBhIHN0YXIgd2l0aGluXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb3V0ZSA9IG5ldyBSb3V0ZShcIi9oZWxsby8qL290aGVyXCIsIGZ1bmN0aW9uICgpIHt9KVxuXG4gICAgUm91dGUuc2V0QnJvd3NlclJlcXVlc3QoXCIjL2hlbGxvL3lvdV9hbmQvb3RoZXJcIilcbiAgICBleHBlY3Qocm91dGUuaXNNYXRjaCgpLCB0cnVlLCBcInJvdXRlIG1hdGNoZXNcIilcblxuICAgIFJvdXRlLnNldEJyb3dzZXJSZXF1ZXN0KFwiIy9oZWxsby95b3UvYW5kL290aGVyXCIpXG4gICAgZXhwZWN0KHJvdXRlLmlzTWF0Y2goKSwgZmFsc2UsIFwicm91dGUgZG9lcyBub3QgbWF0Y2hcIilcbiAgfSlcbn0pXG4iLCJpbXBvcnQgQ2h1bmsgZnJvbSBcIi4vY2h1bmtcIlxuXG5sZXQgY3VycmVudEFyZ3NcblxuXG4vKipcbiAqIEBjbGFzcyA8Um91dGU+IGlmIGEgcm91dGUgbWF0Y2hlcyBjdXJyZW50IHBhdGgsIHJldHVybiBhcmdzIHdpdGggZ2V0QXJncygpLlxuICogICAgSWYgYXJncyBhcmUgcmV0dXJuZWQsIHRoZW4gZXhlY3V0ZSBnbyhhcmdzKS5cbiAqL1xuXG5jbGFzcyBSb3V0ZSB7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGNvbnN0cnVjdG9yPiBzZXQgcGF0aCBhbmQgaXRzIGNvbnRyb2xsZXIgaWYgcm91dGUgbWF0Y2hcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGggZm9ybWF0IFwiL2tleTp0eXBlL2tleTovOnR5cGUvKlwiXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRyb2xsZXJcbiAgICovXG5cbiAgY29uc3RydWN0b3IgKHBhdGgsIGNvbnRyb2xsZXIpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNwbGl0KFwiL1wiKVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSkge1xuICAgICAgdGhpcy5jaHVua3MgPSBwYXRoLm1hcChjaHVuayA9PiBuZXcgQ2h1bmsoY2h1bmspKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpcnN0IHBhcmFtZXRlciBzaG91bGQgYmUgYSBzdHJpbmcuXCIpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb250cm9sbGVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24uXCIpXG4gICAgfVxuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXJcbiAgICB0aGlzLm5vRW5kID0gdGhpcy5jaHVua3NbdGhpcy5jaHVua3MubGVuZ3RoLTFdLm9yaWdpbmFsID09PSBcIipcIlxuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCA8Z28+IHJlZGlyZWN0IHRvIHRoaXMgY29udHJvbGxlciBwYXNzaW5nIGJ5IFVSTFxuICAgKiBAcGFyYW0geyp9IGFyZ3MgbmV3IGFyZ3VtZW50cyBmb3IgdGhpcyBjb250cm9sbGVyLCBtZXJnZWQgd2l0aCBjdXJyZW50IGFyZ3VtZW50c1xuICAgKiBAcmV0dXJuIHtSb3V0ZX0gc2VsZlxuICAgKi9cblxuICBnbyAoYXJncywgZm9yY2UpIHtcbiAgICBjb25zdCBwYXJhbXMgPSAodHlwZW9mIGFyZ3MgPT09IFwib2JqZWN0XCIpID8gYXJncyA6IHt9XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aChPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50QXJncywgcGFyYW1zKSlcbiAgICBpZiAoZm9yY2UgJiYgcGF0aCA9PT0gUm91dGUuZ2V0QnJvd3NlclJlcXVlc3QoKSkge1xuICAgICAgdGhpcy5ydW4oYXJncylcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGUuc2V0QnJvd3NlclJlcXVlc3QocGF0aClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPHJ1bj4gcnVuIHRoaXMgY29udHJvbGxlciBhbnl3YXkgd2l0aCB0aGVzZSBhcmd1bWVudHMuXG4gICAqIEBwYXJhbSB7Kn0gYXJncyBpZiBmYWxzeSwgdHJ5IHRvIHJldHVybiByb3V0ZS5nZXRBcmdzKCkuXG4gICAqIEByZXR1cm4geyp9IHJldHVybmVkIGJ5IGNvbnRyb2xsZXIuXG4gICAqL1xuXG4gIHJ1biAoYXJncykge1xuICAgIGN1cnJlbnRBcmdzID0gYXJncyB8fCB0aGlzLmdldEFyZ3MoKVxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIoY3VycmVudEFyZ3MpXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxnZXRBcmdzPiByZXR1cm4gYW4gb2JqZWN0IG9mIGNvcnJlc3BvbmRpbmcgcGFyYW1ldGVycyBpbiBicm93c2VyXG4gICAqICAgIHBhdGggb3IgbnVsbCBvYmplY3QgaWYgaXQgZG9lcyBub3QgbWF0Y2guXG4gICAqIEByZXR1cm4ge09iamVjdHxudWxsfSBudWxsIGlmIGl0IGRvZXMgbm90IG1hdGNoLlxuICAgKi9cblxuICBnZXRBcmdzICgpIHtcbiAgICBjb25zdCBpdGVtcyA9IFJvdXRlLmdldEJyb3dzZXJSZXF1ZXN0KCkuc3BsaXQoXCIvXCIpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IGkgPSAwXG4gICAgICBjb25zdCBhcmdzID0gdGhpcy5jaHVua3MubWFwKChjaHVuaykgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaSsrXVxuICAgICAgICBjb25zdCByZXMgPSBjaHVuay5leHRyYWN0QXJncyhpdGVtKVxuICAgICAgICByZXR1cm4gcmVzXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMuY2h1bmtzW2ktMV0ub3JpZ2luYWwgPT09IFwiKlwiKSB7XG4gICAgICAgIGFyZ3MucG9wKClcbiAgICAgICAgYXJncy5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogaXRlbXMuc2xpY2UoaS0xKS5qb2luKFwiL1wiKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChpICE9PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmdzXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxpc01hdGNoPiByZXR1cm4gaWYgY3VycmVudCByb3V0ZSBtYXRjaGVzIGJyb3dzZXIgcGF0aFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cblxuICBpc01hdGNoICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBcmdzKCkgIT09IG51bGxcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGNyZWF0ZVBhdGg+IGNyZWF0ZSBhIHBhdGggc3RyaW5nIHdpdGggYXJndW1lbnRzLCBpbiBvcmRlciB0b1xuICAgKiAgICBjcmVhdGUgYSBsaW5rIHRvIGNhbGwgdGhpcyByb3V0ZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGFyZ3NcbiAgICogQHJldHVybiB7U3RyaW5nfSBwYXRoXG4gICAqL1xuXG4gIGNyZWF0ZVBhdGggKGFyZ3MpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgIGFyZ3MgPSBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNodW5rcy5tYXAoKGNodW5rLCBrZXkpID0+IGNodW5rLmNyZWF0ZVBhdGgoYXJnc1trZXldKSkuam9pbihcIi9cIilcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiA8Z2V0QnJvd3NlclJlcXVlc3Q+IHJldHVybnMgdGhlIGN1cnJlbnQgYnJvd3NlciBwYXRoXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG5cbiAgc3RhdGljIGdldEJyb3dzZXJSZXF1ZXN0ICgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gPHNldEJyb3dzZXJSZXF1ZXN0PiBzZXQgdGhlIGN1cnJlbnQgYnJvd3NlciBwYXRoXG4gICAqL1xuXG4gIHN0YXRpYyBzZXRCcm93c2VyUmVxdWVzdCAoc3RyKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBzdHJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZVxuIiwiY2xhc3MgQ2h1bmtFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBjb2RlID0gMCwgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgY29uc3Qgc3RhY2sgPSAobmV3IEVycm9yKS5zdGFjay5zcGxpdCgvXFxzKltcXHJcXG5dK1xccyovKVxuICAgIHN0YWNrLnNoaWZ0KClcbiAgICBzdGFjay5zaGlmdCgpXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7bWVzc2FnZSwgY29kZSwgcHJldmlvdXMsIHN0YWNrfSlcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSAoJHt0aGlzLmNvZGV9KTogJHt0aGlzLm1lc3NhZ2V9XFxuXFx0JHt0aGlzLnN0YWNrLmpvaW4oXCJcXG5cXHRcIil9XFxuYFxuICB9XG59XG5cbmNvbnN0IEZPUk1BVFMgPSB7XG4gIG51bWJlcjogKHN0cikgPT4ge1xuICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHN0cilcbiAgICBpZiAoaXNOYU4obikpXG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYSBudW1iZXIuXCIpXG4gICAgcmV0dXJuIG5cbiAgfSxcbiAgaW50ZWdlcjogKHN0cikgPT4ge1xuICAgIGNvbnN0IG4gPSBwYXJzZUludChzdHIpXG4gICAgaWYgKGlzTmFOKG4pKVxuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJCYWQgdHlwZTogZXhwZWN0IGFyZ3VtZW50IHRvIGJlIGFuIGludGVnZXIuXCIpXG4gICAgcmV0dXJuIG5cbiAgfSxcbiAgZmxvYXQ6IChzdHIpID0+IHtcbiAgICBjb25zdCBuID0gcGFyc2VGbG9hdChzdHIpXG4gICAgaWYgKGlzTmFOKG4pKVxuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJCYWQgdHlwZTogZXhwZWN0IGFyZ3VtZW50IHRvIGJlIGEgZmxvYXQuXCIpXG4gICAgcmV0dXJuIG5cbiAgfSxcbiAgc3RyaW5nOiAoc3RyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHMgPSBKU09OLnBhcnNlKHN0cilcbiAgICAgIGlmICh0eXBlb2YgcyA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIHNcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIHN0clxuICB9LFxuICBqc29uOiAoc3RyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG8gPSBKU09OLnBhcnNlKHN0cilcbiAgICAgIGlmICh0eXBlb2YgbyA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgcmV0dXJuIG9cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJCYWQgdHlwZTogZXhwZWN0IGFyZ3VtZW50IHRvIGJlIGEganNvbiBvYmplY3QuXCIpXG4gIH0sXG4gIGpzb25hcnJheTogKHN0cikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvID0gSlNPTi5wYXJzZShzdHIpXG4gICAgICBpZiAodHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgQXJyYXkuaXNBcnJheShvKSlcbiAgICAgICAgcmV0dXJuIG9cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJCYWQgdHlwZTogZXhwZWN0IGFyZ3VtZW50IHRvIGJlIGEganNvbiBhcnJheS5cIilcbiAgfSxcbiAganNvbm9iamVjdDogKHN0cikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvID0gSlNPTi5wYXJzZShzdHIpXG4gICAgICBpZiAodHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkobykpXG4gICAgICAgIHJldHVybiBvXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICAgIHRocm93IG5ldyBDaHVua0Vycm9yKFwiQmFkIHR5cGU6IGV4cGVjdCBhcmd1bWVudCB0byBiZSBhIGpzb24gb2JqZWN0IG5vdCBhcnJheS5cIilcbiAgfSxcbiAgYm9vbGVhbjogKHN0cikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBiID0gSlNPTi5wYXJzZShzdHIpXG4gICAgICBpZiAodHlwZW9mIGIgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICByZXR1cm4gYlxuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYSBib29sZWFuLlwiKVxuICB9LFxuICBhbnk6IChzdHIpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKVxuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gc3RyXG4gIH0sXG4gIHV1aWQ6IChzdHIpID0+IHtcbiAgICBpZiAoc3RyLm1hdGNoKC9eW1xcZGEtZl17OH0tW1xcZGEtZl17NH0tNFtcXGRhLWZdezN9LVs4OWFiXVtcXGRhLWZdezN9LVtcXGRhLWZdezEyfSQvKSlcbiAgICAgIHJldHVybiBzdHJcbiAgICBlbHNlXG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYW4gdXVpZC5cIilcbiAgfSxcbiAgZGF0ZTogKHN0cikgPT4ge1xuICAgIGlmIChzdHIubWF0Y2goL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvKSlcbiAgICAgIHJldHVybiBuZXcgRGF0ZShzdHIpXG4gICAgZWxzZVxuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJCYWQgdHlwZTogZXhwZWN0IGFyZ3VtZW50IHRvIGJlIGEgZGF0ZS5cIilcbiAgfSxcbiAgdGltZTogKHN0cikgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gc3RyLm1hdGNoKC9eKDJbMC0zXXxbMDFdWzAtOV0pOihbMC01XVswLTldKSg6KFswLTVdWzAtOV0pKC4oXFxkezEsM30pKT8pPyQvKVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZSgpXG4gICAgICBkdC5zZXRIb3Vycyhmb3VuZFsxXSlcbiAgICAgIGR0LnNldE1pbnV0ZXMoZm91bmRbMl0pXG4gICAgICBpZiAoZm91bmRbM10pIGR0LnNldFNlY29uZHMoZm91bmRbNF0pXG4gICAgICBpZiAoZm91bmRbNV0pIGR0LnNldE1pbGxpc2Vjb25kcyhmb3VuZFs2XSlcbiAgICAgIHJldHVybiBkdFxuICAgIH1cbiAgICBlbHNlXG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYSB0aW1lLlwiKVxuICB9LFxuICBkYXRldGltZTogKHN0cikgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzdHIpXG4gICAgaWYgKCFpc05hTigrZGF0ZSkpXG4gICAgICByZXR1cm4gZGF0ZVxuICAgIGVsc2VcbiAgICAgIHRocm93IG5ldyBDaHVua0Vycm9yKFwiQmFkIHR5cGU6IGV4cGVjdCBhcmd1bWVudCB0byBiZSBhbnkgRGF0ZSBmb3JtYXQuXCIpXG4gIH0sXG4gIGpzb25kYXRlOiAoc3RyKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0cilcbiAgICBpZiAoIWlzTmFOKCtkYXRlKSlcbiAgICAgIHJldHVybiBkYXRlXG4gICAgZWxzZVxuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJCYWQgdHlwZTogZXhwZWN0IGFyZ3VtZW50IHRvIGJlIGFueSBEYXRlIGZvcm1hdC5cIilcbiAgfSxcbiAgaW50ZWdlcmRhdGU6IChzdHIpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQoc3RyKSlcbiAgICBpZiAoIWlzTmFOKCtkYXRlKSlcbiAgICAgIHJldHVybiBkYXRlXG4gICAgZWxzZVxuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJCYWQgdHlwZTogZXhwZWN0IGFyZ3VtZW50IHRvIGJlIGFuIGludGVnZXIuXCIpXG4gIH1cbn1cblxuRk9STUFUU1snJ10gPSBGT1JNQVRTWydhbnknXVxuXG5mdW5jdGlvbiBpc09iamVjdChlbCkge1xuICByZXR1cm4gdHlwZW9mIGVsID09PSBcIm9iamVjdFwiICYmIGVsICE9PSBudWxsXG59XG5cblxuLyoqXG4gKiBAZnVuY3Rpb24gPHJ1bGVUb09iamVjdD5cbiAqIEBwYXJhbSB7T2JqZWN0fFJlZ0V4cHxGdW5jdGlvbnxzdHJpbmd9XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gcnVsZVRvT2JqZWN0IChydWxlKSB7XG4gIGNvbnN0IHJlcyA9IHt9XG4gIGlmICh0eXBlb2YgcnVsZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGlmIChydWxlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXMucmVnZXhwID0gcnVsZVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocnVsZS52YWx1ZSkgcmVzLnZhbHVlID0gcnVsZS52YWx1ZVxuICAgICAgaWYgKHJ1bGUua2V5KSByZXMua2V5ID0gcnVsZS5rZXlcbiAgICAgIGlmIChydWxlLnR5cGUpIHJlcy50eXBlID0gcnVsZS50eXBlXG4gICAgICBpZiAocnVsZS5yZWdleHApIHJlcy5yZWdleHAgPSBydWxlLnJlZ2V4cFxuICAgICAgaWYgKHJ1bGUubWF0Y2gpIHJlcy5tYXRjaCA9IHJ1bGUubWF0Y2hcbiAgICAgIGlmIChydWxlLnRyYW5zZm9ybSkgcmVzLnRyYW5zZm9ybSA9IHJ1bGUudHJhbnNmb3JtXG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgcnVsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVzLnRyYW5zZm9ybSA9IHJ1bGVcbiAgfVxuICBpZiAodHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAocnVsZSA9PT0gXCIqXCIpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cbiAgICBjb25zdCBzcGxpdCA9IHJ1bGUuc3BsaXQoXCI6XCIpXG4gICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGtleSA9IHNwbGl0LnNoaWZ0KCksXG4gICAgICAgIHR5cGUgPSBzcGxpdC5qb2luKFwiOlwiKVxuICAgICAgcmVzLnR5cGUgPSB0eXBlXG4gICAgICBpZiAoa2V5Lmxlbmd0aCkge1xuICAgICAgICByZXMua2V5ID0ga2V5XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy52YWx1ZSA9IHJ1bGVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5cbi8qKlxuICogQGZ1bmN0aW9uIDx0ZXN0VmFsdWU+XG4gKiBAcGFyYW0ge09iamVjdH0gcnVsZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAdGhyb3dzIHtDaHVua0Vycm9yfVxuICovXG5cbmZ1bmN0aW9uIHRlc3RWYWx1ZSAocnVsZSwgdmFsdWUpIHtcbiAgaWYgKHJ1bGUudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChydWxlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHsgdmFsdWUgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkNodW5rIHZhbHVlIGRvZXMgbm90IG1hdGNoXCIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzID0ge31cbiAgaWYgKHJ1bGUudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKEZPUk1BVFNbcnVsZS50eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXMudmFsdWUgPSBGT1JNQVRTW3J1bGUudHlwZV0odmFsdWUpXG4gICAgICByZXMudHlwZSA9IHJ1bGUudHlwZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkNodW5rIHZhbHVlIG1hdGNoIHR5cGUgZG9lcyBub3QgZXhpc3RzXCIpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBpZiAocnVsZS5yZWdleHAgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICBjb25zdCBmb3VuZCA9IHZhbHVlLm1hdGNoKHJ1bGUucmVnZXhwKVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmVzLnJlZ2V4cCA9IHJ1bGUucmVnZXhwXG4gICAgICBpZiAoaXNPYmplY3QocnVsZS5tYXRjaCkpIHtcbiAgICAgICAgY29uc3QgZWwgPSBPYmplY3Qua2V5cyhydWxlLm1hdGNoKS5maW5kKG0gPT4gcnVsZS5tYXRjaFttXSA9PT0gZm91bmRbMF0pXG4gICAgICAgIGlmIChlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzLmluZGV4ID0gZWxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkNodW5rIFJlZ0V4cCBmb3VuZCB2YWx1ZSBkb2VzIG5vdCBtYXRjaCBsaXN0ZWQgdmFsdWVzXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJDaHVuayB2YWx1ZSBkb2VzIG5vdCBtYXRjaCBSZWdFeHBcIilcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzT2JqZWN0KHJ1bGUubWF0Y2gpKSB7XG4gICAgICBjb25zdCBlbCA9IE9iamVjdC5rZXlzKHJ1bGUubWF0Y2gpLmZpbmQobSA9PiBydWxlLm1hdGNoW21dID09PSB2YWx1ZSlcbiAgICAgIGlmIChlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlcy5pbmRleCA9IGVsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkNodW5rIHZhbHVlIGRvZXMgbm90IG1hdGNoIGxpc3RlZCB2YWx1ZXNcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHJ1bGUudHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXMub3JpZ2luYWwgPSB2YWx1ZVxuICAgIHJlcy50cmFuc2Zvcm0gPSBydWxlLnRyYW5zZm9ybVxuICAgIHJldHVybiBydWxlLnRyYW5zZm9ybShyZXMpXG4gIH1cblxuICByZXR1cm4gcmVzXG59XG5cblxuLyoqXG4gKiBAZnVuY3Rpb24gPGV4dHJhY3RBcmdzPlxuICogQHBhcmFtIHtPYmplY3R9IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaHVua1xuICogQHJldHVybiB7T2JqZWN0fVxuICogQHRocm93cyB7Q2h1bmtFcnJvcn1cbiAqL1xuXG5mdW5jdGlvbiBleHRyYWN0QXJncyAocnVsZSwgY2h1bmspIHtcbiAgaWYgKHJ1bGUua2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBzcGxpdCA9IGNodW5rLnNwbGl0KFwiOlwiKVxuICAgIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBrZXkgPSBzcGxpdC5zaGlmdCgpLFxuICAgICAgICB2YWx1ZSA9IHNwbGl0LmpvaW4oXCI6XCIpLFxuICAgICAgICByZXMgPSB0ZXN0VmFsdWUocnVsZSwgdmFsdWUpXG4gICAgICByZXMua2V5ID0gcnVsZS5rZXlcbiAgICAgIHJldHVybiByZXNcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJDaHVuayBjb250ZW50IGRvZXMgbm90IG1hdGNoIGtleS92YWx1ZSBmb3JtYXRcIilcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRlc3RWYWx1ZShydWxlLCBjaHVuaylcbiAgfVxufVxuXG5cbi8qKlxuICogQGZ1bmN0aW9uIDxjcmVhdGVQYXRoPlxuICogQHBhcmFtIHtPYmplY3R9IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHRocm93cyB7Q2h1bmtFcnJvcn1cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVQYXRoKHJ1bGUsIHZhbHVlKSB7XG4gIGNvbnN0IHJlcyA9IChydWxlLmtleSA/IHJ1bGUua2V5ICsgXCI6XCIgOiBcIlwiKSArIHZhbHVlXG5cbiAgaWYgKHJ1bGUudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdHJ5IHtcbiAgICAgIEZPUk1BVFNbcnVsZS50eXBlXSh2YWx1ZSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIlZhbHVlIGRvZXMgbm90IG1hdGNoIHBhdGggcmVxdWlyZW1lbnRzXCIpXG4gICAgfVxuICB9XG5cbiAgaWYgKHJ1bGUucmVnZXhwIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgY29uc3QgZm91bmQgPSB2YWx1ZS5tYXRjaChydWxlLnJlZ2V4cClcbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJ1bGUubWF0Y2gpICYmIHJ1bGUubWF0Y2guaW5kZXhPZihmb3VuZFswXSkgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBDaHVua0Vycm9yKFwiVmFsdWUgZG9lcyBub3QgbWF0Y2ggcGF0aCByZXF1aXJlbWVudHNcIilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJWYWx1ZSBkb2VzIG5vdCBtYXRjaCBwYXRoIHJlcXVpcmVtZW50c1wiKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShydWxlLm1hdGNoKSAmJiBydWxlLm1hdGNoLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJWYWx1ZSBkb2VzIG5vdCBtYXRjaCBwYXRoIHJlcXVpcmVtZW50c1wiKVxuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5cbmNsYXNzIENodW5rIHtcbiAgY29uc3RydWN0b3IgKHJ1bGUpIHtcbiAgICB0aGlzLm9yaWdpbmFsID0gcnVsZVxuICAgIHRoaXMucnVsZSA9IHJ1bGVUb09iamVjdChydWxlKVxuICB9XG5cbiAgZXh0cmFjdEFyZ3MgKGNodW5rKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RBcmdzKHRoaXMucnVsZSwgXCJcIiArIGNodW5rKVxuICB9XG5cbiAgY3JlYXRlUGF0aCAodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnZhbHVlXG4gICAgfVxuICAgIGlmICh+W1wic3RyaW5nXCIsIFwibnVtYmVyXCJdLmluZGV4T2YodHlwZW9mIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVBhdGgodGhpcy5ydWxlLCBcIlwiK3ZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgc3RyaW5nLCBhIG51bWJlciBvciBhbiBvYmplY3QgY29udGFpbmluZyBcXFwidmFsdWVcXFwiIGZpZWxkXCIpXG4gICAgfVxuICB9XG5cbiAgc2V0VHlwZSAodHlwZSkge1xuICAgIHRoaXMucnVsZS50eXBlID0gdHlwZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzZXRUcmFuc2Zvcm0gKHRyYW5zZm9ybSkge1xuICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucnVsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmlyc3QgcGFyYW1ldGVyIHNob3VsZCBiZSBhIEZ1bmN0aW9uXCIpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzZXRSZWdFeHAgKHJlZ2V4cCkge1xuICAgIGlmIChyZWdleHAgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHRoaXMucnVsZS5yZWdleHAgPSByZWdleHBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IHBhcmFtZXRlciBzaG91bGQgYmUgYSBSZWdFeHAgaW5zdGFuY2VcIilcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFkZE1hdGNoZXIgKG1hdGNoZXIpIHtcbiAgICBpZiAoIXRoaXMucnVsZS5tYXRjaCkge1xuICAgICAgdGhpcy5ydWxlLm1hdGNoID0gW11cbiAgICB9XG4gICAgdGhpcy5ydWxlLm1hdGNoLnB1c2gobWF0Y2hlcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc2V0TWF0Y2hlcnMgKG1hdGNoZXJzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWF0Y2hlcnMpKSB7XG4gICAgICB0aGlzLnJ1bGUubWF0Y2ggPSBtYXRjaGVyc1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgcGFyYW1ldGVyIHNob3VsZCBiZSBhbiBBcnJheVwiKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhdGljIGFkZEZvcm1hdCAobmFtZSwgZm9ybWF0dGVyKSB7XG4gICAgaWYgKCEodHlwZW9mIGZvcm1hdHRlciA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgRnVuY3Rpb25cIilcbiAgICB9XG4gICAgaWYgKEZPUk1BVFNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFR5cGUgJHtuYW1lfSBhbHJlYWR5IGV4aXN0c2ApXG4gICAgfVxuICAgIEZPUk1BVFNbbmFtZV0gPSBmb3JtYXR0ZXJcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENodW5rXG4iXX0=