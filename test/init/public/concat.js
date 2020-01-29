(function(e,f){
function r(x){return function(p){var i=x[p];if(f[i][2])return f[i][2];var o={},m={exports:o},[s,h]=f[i];f[i][2]=o;h.call(o,r(s),m,o);return o}}
r({"":e})("")
})(0, [[{"../modules/default/proto":1,"../../../":2,"../sections/index":4,"../sections/onepage":3,"../sections/forumpage":5,"../sections/statspage":6},function (require,module,exports) {"use strict";

require("../modules/default/proto");

var _ = _interopRequireDefault(require("../../../"));

require("../sections/index");

require("../sections/onepage");

require("../sections/forumpage");

require("../sections/statspage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_["default"].initAll();}],
[{},function (require,module,exports) {"use strict";

function flat() {
  var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var res = depth <= 1 ? [] : this.flat(depth - 1);
  this.forEach(function (item) {
    if (Array.isArray(item)) {
      item.forEach(function (element) {
        res.push(element);
      });
    } else {
      res.push(item);
    }
  });
  return res;
}

Object.defineProperty(Array.prototype, "flat", {
  enumerable: false,
  value: flat
});}],
[{"./libs/layout/component":7,"./libs/layout/section":14,"./libs/layout/page":15,"./libs/layout/define":8,"./libs/request/ajax":9,"./libs/request/resource":16,"./libs/router/router":17,"./libs/router/route":18},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.initAll = initAll;
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _component["default"];
  }
});
Object.defineProperty(exports, "Section", {
  enumerable: true,
  get: function get() {
    return _section["default"];
  }
});
Object.defineProperty(exports, "Page", {
  enumerable: true,
  get: function get() {
    return _page["default"];
  }
});
Object.defineProperty(exports, "define", {
  enumerable: true,
  get: function get() {
    return _define.define;
  }
});
Object.defineProperty(exports, "CustomHTMLElement", {
  enumerable: true,
  get: function get() {
    return _define.CustomHTMLElement;
  }
});
Object.defineProperty(exports, "ajax", {
  enumerable: true,
  get: function get() {
    return _ajax["default"];
  }
});
Object.defineProperty(exports, "Resource", {
  enumerable: true,
  get: function get() {
    return _resource["default"];
  }
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function get() {
    return _router["default"];
  }
});
Object.defineProperty(exports, "Route", {
  enumerable: true,
  get: function get() {
    return _route["default"];
  }
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./libs/layout/component"));

var _section = _interopRequireDefault(require("./libs/layout/section"));

var _page = _interopRequireDefault(require("./libs/layout/page"));

var _define = require("./libs/layout/define");

var _ajax = _interopRequireDefault(require("./libs/request/ajax"));

var _resource = _interopRequireDefault(require("./libs/request/resource"));

var _router = _interopRequireDefault(require("./libs/router/router"));

var _route = _interopRequireDefault(require("./libs/router/route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function init(then) {
  if (typeof then === "function") {
    if (document.readyState === "complete") {
      then();
    } else {
      window.addEventListener("load", then);
    }
  }
}

function initAll(then) {
  if (document.readyState === "complete") {
    _page["default"].setContainer();

    _router["default"].listenPopstate();

    if (typeof then === "function") {
      then();
    }
  } else {
    window.addEventListener("load", function () {
      _page["default"].setContainer();

      _router["default"].listenPopstate();

      if (typeof then === "function") {
        then();
      }
    });
  }
}

var Amonite = {
  Component: _component["default"],
  Section: _section["default"],
  Page: _page["default"],
  define: _define.define,
  CustomHTMLElement: _define.CustomHTMLElement,
  ajax: _ajax["default"],
  Resource: _resource["default"],
  Router: _router["default"],
  Route: _route["default"],
  init: init,
  initAll: initAll
};
exports["default"] = Amonite;}],
[{"./template.html":10,"../../pages/plainpage/section":22,"./routes":23},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _section = _interopRequireDefault(require("../../pages/plainpage/section"));

var _template2 = _interopRequireDefault(require("./template.html"));

require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OnePageSection =
/*#__PURE__*/
function (_Section) {
  _inherits(OnePageSection, _Section);

  function OnePageSection() {
    _classCallCheck(this, OnePageSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnePageSection).apply(this, arguments));
  }

  _createClass(OnePageSection, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }]);

  return OnePageSection;
}(_section["default"]);

exports["default"] = OnePageSection;}],
[{"./template.html":11,"../../pages/plainpage/section":22,"./routes":25,"../../components/input":20,"../../components/action":21,"../../../../":2},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _section = _interopRequireDefault(require("../../pages/plainpage/section"));

var _input = _interopRequireDefault(require("../../components/input"));

var _action = _interopRequireDefault(require("../../components/action"));

var _template2 = _interopRequireDefault(require("./template.html"));

require("./routes");

var _ = require("../../../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndexSection =
/*#__PURE__*/
function (_Section) {
  _inherits(IndexSection, _Section);

  _createClass(IndexSection, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])({
        list: this.getList(),
        routes: _.Router.getAll()
      });
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        inpName: ".input-name",
        inpCount: ".input-count",
        btnAdd: ".button-add",
        list: "ul",
        form: "form"
      };
    }
  }]);

  function IndexSection() {
    var _this;

    _classCallCheck(this, IndexSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndexSection).call(this));

    _this.fillComponent("inpName", _this.inpName = new _input["default"]("name", "text", "", "Insert a name…"));

    _this.fillComponent("inpCount", _this.inpCount = new _input["default"]("count", "number", "", "How many?"));

    _this.fillComponent("btnAdd", _this.btnAdd = new _action["default"]("Insert", function (ev, btn) {
      _this.addItem(_this.inpName.value, parseInt(_this.inpCount.value));

      _this.inpName.value = "";
      _this.inpCount.value = "";
      btn.rearm();
    }));

    _this.setSection();

    _this.elements.form[0].addEventListener("submit", function (ev) {
      ev.preventDefault();
    });

    return _this;
  }

  _createClass(IndexSection, [{
    key: "getList",
    value: function getList() {
      if (!this.list) {
        this.list = [{
          "name": "Tomato",
          "count": 12
        }, {
          "name": "Banana",
          "count": 113
        }];
      }

      return this.list;
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.list.push({
        name: name,
        count: count
      });
      var li = document.createElement("li");
      li.textContent = "".concat(name, " (").concat(count, ")");
      this.elements.list[0].appendChild(li);
      return this;
    }
  }]);

  return IndexSection;
}(_section["default"]);

exports["default"] = IndexSection;}],
[{"./template.html":12,"../../pages/brandedpage/section":26,"./routes":27,"./list":28,"./read":29,"./edit":30,"./create":31},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _list = _interopRequireDefault(require("./list"));

var _read = _interopRequireDefault(require("./read"));

var _edit = _interopRequireDefault(require("./edit"));

var _create = _interopRequireDefault(require("./create"));

var _section = _interopRequireDefault(require("../../pages/brandedpage/section"));

var _template2 = _interopRequireDefault(require("./template.html"));

require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ForumSection =
/*#__PURE__*/
function (_Section) {
  _inherits(ForumSection, _Section);

  function ForumSection() {
    _classCallCheck(this, ForumSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(ForumSection).apply(this, arguments));
  }

  _createClass(ForumSection, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        forum: ".forum"
      };
    }
  }, {
    key: "showList",
    value: function showList() {
      this.fillComponent("forum", new _list["default"]());
      this.setSection();
    }
  }, {
    key: "showRead",
    value: function showRead(id) {
      this.fillComponent("forum", new _read["default"](id));
      this.setSection();
    }
  }, {
    key: "showEdit",
    value: function showEdit(id) {
      this.fillComponent("forum", new _edit["default"](id));
      this.setSection();
    }
  }, {
    key: "showCreate",
    value: function showCreate() {
      this.fillComponent("forum", new _create["default"]());
      this.setSection();
    }
  }]);

  return ForumSection;
}(_section["default"]);

exports["default"] = ForumSection;}],
[{"./template.html":13,"../../pages/brandedpage/section":26,"../../requests/users/user":32,"./routes":34,"../../components/main-table":35,"../../modules/translate":19},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _section = _interopRequireDefault(require("../../pages/brandedpage/section"));

var _mainTable = _interopRequireDefault(require("../../components/main-table"));

var _user = _interopRequireDefault(require("../../requests/users/user"));

var _translate = _interopRequireDefault(require("../../modules/translate"));

var _template2 = _interopRequireDefault(require("./template.html"));

require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MAX = 10;

var StatsSection =
/*#__PURE__*/
function (_Section) {
  _inherits(StatsSection, _Section);

  _createClass(StatsSection, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        table: ".table"
      };
    }
  }]);

  function StatsSection() {
    var _this;

    _classCallCheck(this, StatsSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatsSection).call(this));
    _this.total = 0;
    _this.first = 0;

    _this.buildTable();

    return _this;
  }

  _createClass(StatsSection, [{
    key: "buildTable",
    value: function buildTable() {
      this.fillComponent("table", this.table = new _mainTable["default"](this.getTableData(), {
        translatedCivility: {
          label: (0, _translate["default"])("page:stats:table:user:headers:civility")
        },
        lastName: {
          label: (0, _translate["default"])("page:stats:table:user:headers:lastName")
        },
        firstName: {
          label: (0, _translate["default"])("page:stats:table:user:headers:firstName")
        }
      }));
      this.table.listen("first", this.onFirstPage.bind(this));
      this.table.listen("previous", this.onPreviousPage.bind(this));
      this.table.listen("next", this.onNextPage.bind(this));
      this.table.listen("last", this.onLastPage.bind(this));
    }
  }, {
    key: "getTableData",
    value: function getTableData() {
      var _this2 = this;

      this.userRequest = new _user["default"]();
      var prom = this.userRequest.fetch(this.first, MAX);
      prom.then(function (dataFormatter) {
        _this2.total = dataFormatter.getTotal();
      });
      return prom;
    }
  }, {
    key: "onFirstPage",
    value: function onFirstPage() {
      this.first = 0;
      this.buildTable();
    }
  }, {
    key: "onPreviousPage",
    value: function onPreviousPage() {
      this.first = Math.max(0, this.first - MAX);
      this.buildTable();
    }
  }, {
    key: "onNextPage",
    value: function onNextPage() {
      this.first = Math.max(0, this.first + MAX);
      this.buildTable();
    }
  }, {
    key: "onLastPage",
    value: function onLastPage() {
      this.first = Math.max(0, Math.floor(this.total / MAX) * MAX);
      this.buildTable();
    }
  }]);

  return StatsSection;
}(_section["default"]);

exports["default"] = StatsSection;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function container(el, self, args) {
  if (el instanceof HTMLElement) {
    return el;
  } else if (typeof el === "string") {
    return container(document.querySelector(el), self, args);
  } else if (typeof el === "function") {
    return container(el.apply(self, args), self, args);
  } else {
    return null;
  }
}

function template(el, self, args) {
  if (el instanceof HTMLElement) {
    return el;
  } else if (typeof el === "function") {
    return template(el.apply(self, args), self, args);
  } else {
    var div = document.createElement("div");
    div.setAttribute("component", self.constructor.name);

    if (typeof el === "string") {
      div.innerHTML = el;
    }

    return div;
  }
}

function elements(el, self, args) {
  var into = self.template;

  if (typeof el === "function") {
    return elements(el.apply(self, args), self, args);
  } else if (_typeof(el) === "object" && into instanceof HTMLElement) {
    var result = {};
    Object.keys(el).forEach(function (name) {
      if (el[name] instanceof HTMLElement) {
        result[name] = [el[name]];
      }

      if (typeof el[name] === "string") {
        result[name] = _toConsumableArray(into.querySelectorAll(el[name]));
      } else if (el[name] && el[name].forEach) {
        result[name] = el[name];
      }
    });
    return result;
  } else {
    return {};
  }
}

function events(el, self, args) {
  var _this = this,
      _arguments = arguments;

  if (typeof el === "function") {
    return events(el.apply(self, args), self, args);
  } else if (_typeof(el) === "object") {
    Object.keys(el).forEach(function (pair) {
      var split = pair.split(" ");

      if (typeof el[pair] === "string" && split.length > 1) {
        var evs = split.pop();
        var selectors = split.join(" ");
        el[pair].split(",").forEach(function (method) {
          evs.split(",").forEach(function (eventName) {
            selectors.split(",").forEach(function (selector) {
              var node;

              var fn = function fn() {
                self[method].apply(self, _arguments);
              };

              if (eventName && typeof self[method] === "function") {
                if ((node = self.elements[selector]) instanceof HTMLElement) {
                  node.addEventListener(eventName, fn);
                } else if (node && node.forEach) {
                  node.forEach(function (n) {
                    n.addEventListener(eventName, fn);
                  });
                } else if (self.template && (node = self.template.querySelector(selector))) {
                  node.addEventListener(eventName, fn);
                }
              }
            });
          });
        });
      } else if (_typeof(el[pair]) === "object") {
        var _selectors = split.join(" ");

        Object.keys(el[pair]).forEach(function (evs) {
          var method = el[pair][evs];

          if (typeof method === "string") {
            evs.split(",").forEach(function (eventName) {
              _selectors.split(",").forEach(function (selector) {
                var node;

                var fn = function fn() {
                  var _args = _toConsumableArray(_arguments);

                  _args.unshift(_this);

                  self[method].apply(self, _args);
                };

                if (eventName && typeof self[method] === "function") {
                  if ((node = self.elements[selector]) instanceof HTMLElement) {
                    node.addEventListener(eventName, fn);
                  } else if (node && node.forEach) {
                    node.forEach(function (n) {
                      n.addEventListener(eventName, fn);
                    });
                  } else if (self.template && (node = self.template.querySelector(selector))) {
                    node.addEventListener(eventName, fn);
                  }
                }
              });
            });
          }
        });
      }
    });
  }
}
/**
 *  @class <Component> is used to build DOM elements, generating data, template & events.
 *    A component can contain other components.
 */


var Component =
/*#__PURE__*/
function () {
  /**
   * @method <constructor> build this object
   * @param {HTMLElement|String|Function} container will contain this component
   * @param {*} arguments... are passed in template, elements and events functions
   * @return {Component} self
   */
  function Component() {
    _classCallCheck(this, Component);

    Object.defineProperty(this, "_builder", {
      "enumerable": false,
      "configurable": false,
      "value": {
        template: this.template,
        elements: this.elements,
        events: this.events
      }
    });
    Object.defineProperty(this, "__events__", {
      "enumerable": false,
      "configurable": false,
      "value": {}
    });
    this.setTemplate.apply(this, [null].concat(Array.prototype.slice.call(arguments)));
  }
  /**
   * @method <setTemplate> build the DOM of this Component, then list elements,
   *    finally link elements with events functions
   * @param {HTMLElement|Function|String} dom is the HTML of this component
   * @param {*} arguments... are passed in template, elements and events functions
   * @return {Component} self
   */


  _createClass(Component, [{
    key: "setTemplate",
    value: function setTemplate() {
      var _ref = Array.prototype.slice.call(arguments),
          dom = _ref[0],
          args = _ref.slice(1),
          tpl = template(dom || this._builder.template, this, args);

      if (tpl instanceof HTMLElement) {
        this.template = tpl;
        this.elements = elements(this._builder.elements, this, args);
        events(this._builder.events, this, args);
      }

      return this;
    }
    /**
     * @method <setContainer> set first parameter as parent of this component
     * @param {HTMLElement|String|Function} element will contain this component
     * @param {*} arguments... are passed in template, elements and events functions
     * @return {Component} self
     */

  }, {
    key: "setContainer",
    value: function setContainer(element) {
      var cont = container(element, this, arguments);

      if (cont instanceof HTMLElement) {
        this.container = cont;

        if (this.template instanceof HTMLElement) {
          this.container.appendChild(this.template);
        }
      }

      return this;
    } // CHILD COMPONENTS MANAGER

    /**
     * @method <clearElement> clear an HTML element of this Component
     * @param {String} name is the name of the HTML element
     * @return {Component} self
     * @throws {Error} if the name does not match an element
     */

  }, {
    key: "clearElement",
    value: function clearElement(name) {
      var _this$elements$name, _this$elements$name2;

      var element;

      if (this.elements[name] && (_this$elements$name = this.elements[name], _this$elements$name2 = _slicedToArray(_this$elements$name, 1), element = _this$elements$name2[0], _this$elements$name)) {
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }

        return this;
      } else {
        throw new Error("Element \"".concat(name, "\" is not an element of this component"));
      }
    }
    /**
     * @method <appendComponent> append a Component in this Component HTML element
     * @param {String} name is the name of the HTML element
     * @param {Component} component is the Component to append in the HTML element
     * @return {Component} self
     * @throws {Error} if the name does not match an element or if the component
     *    is not a Component instance.
     */

  }, {
    key: "appendComponent",
    value: function appendComponent(name, component) {
      var _this$elements$name3, _this$elements$name4;

      var element;

      if (this.elements[name] && (_this$elements$name3 = this.elements[name], _this$elements$name4 = _slicedToArray(_this$elements$name3, 1), element = _this$elements$name4[0], _this$elements$name3)) {
        if (component instanceof Component) {
          component.setContainer(element);
          return this;
        } else {
          throw new Error("Second parameter is not a Component object");
        }
      } else {
        throw new Error("Element \"".concat(name, "\" is not an element of this component"));
      }
    }
    /**
     * @method <fillComponent> set component as only child of HTML element of this
     *    by clearing then appending Component.
     * @param {String} name is the name of the HTML element
     * @param {Component} component is the Component to append in the HTML element
     * @return {Component} self
     * @throws {Error} if the name does not match an element or if the component
     *    is not a Component instance.
     */

  }, {
    key: "fillComponent",
    value: function fillComponent(name, component) {
      return this.clearElement(name).appendComponent(name, component);
    } // TEMPLATE BUILDERS

    /**
     * @method <template> should be overriden and should return text in HTML
     *    format or an HTMLElement.
     * @param {*} arguments... are transfered from <constructor>
     * @return {String|HTMLElement|function}
     */

  }, {
    key: "template",
    value: function template() {
      return "";
    }
    /**
     * @method <elements> should be overriden and should return object where keys
     *    are the name, and the values are the selector in this component (not
     *    its children!).
     * @param {*} arguments... are transfered from <constructor>
     * @return {Object|function}
     * @warn this function does not select child components elements.
     */

  }, {
    key: "elements",
    value: function elements() {
      return {};
    }
    /**
     * @method <elements> should be overriden and should return object where keys
     *    are the name spaced with event, and the values are the component methods
     *    to call when event is triggered (not its children!).
     * @param {*} arguments... are transfered from <constructor>
     * @return {Object|function}
     */

  }, {
    key: "events",
    value: function events() {
      return {};
    } // EXTERNAL EVENTS

    /**
     * @method <listen> listen an event ${eventName} happening and register the
     *    function ${fn} to execute it when event happen.
     * @param {string|Array} eventName
     * @param {function|Array} fn
     * @return {Component} self
     */

  }, {
    key: "listen",
    value: function listen(eventName, fn) {
      var self = this;

      if (typeof eventName === "string") {
        var t = eventName.split(/[\n\s,]+/g);

        if (t.length > 1) {
          return this.listen(_toConsumableArray(t), fn);
        }
      } else if (Array.isArray(eventName)) {
        eventName.forEach(function (ev) {
          self.listen(ev, fn);
        });
        return this;
      }

      if (Array.isArray(fn)) {
        fn.forEach(function (f) {
          self.listen(eventName, f);
        });
        return this;
      }

      if (typeof fn === "function") {
        var evs = this["__events__"];

        if (!Array.isArray(evs[eventName])) {
          evs[eventName] = [];
        }

        evs[eventName].push(fn);
      }

      return this;
    }
    /**
     * @method <dispatch> trigger an event ${eventName} happening and execute the
     *    registered functions.
     * @param {string|Array} eventName
     * @param {function} args
     * @return {Component} self
     */

  }, {
    key: "dispatch",
    value: function dispatch(eventName, args) {
      var self = this;

      if (typeof eventName === "string") {
        var t = eventName.split(/[\n\s,]+/g);

        if (t.length > 1) {
          return this.listen(_toConsumableArray(t), args);
        }
      } else if (Array.isArray(eventName)) {
        eventName.forEach(function (ev) {
          self.listen(ev, args);
        });
        return this;
      }

      var evs = this["__events__"];

      if (!Array.isArray(evs[eventName])) {
        evs[eventName] = [];
      }

      evs[eventName].forEach(function (fn) {
        if (Array.isArray(args)) {
          fn.apply(null, args);
        } else {
          fn();
        }
      });
      return this;
    }
    /**
     * @method <detach> remove the registered function ${fn} listened by event
     *    ${eventName}, or all of its functions if ${fn} is undefined
     * @param {string|Array} eventName
     * @param {function|Array} fn
     * @return {Component} self
     */

  }, {
    key: "detach",
    value: function detach(eventName, fn) {
      var self = this;

      if (typeof eventName === "string") {
        var t = eventName.split(/[\n\s,]+/g);

        if (t.length > 1) {
          return this.listen(_toConsumableArray(t), fn);
        }
      } else if (Array.isArray(eventName)) {
        eventName.forEach(function (ev) {
          self.listen(ev, fn);
        });
        return this;
      }

      if (Array.isArray(fn)) {
        fn.forEach(function (f) {
          self.listen(eventName, f);
        });
        return this;
      }

      var evs = this["__events__"];

      if (!Array.isArray(evs[eventName])) {
        evs[eventName] = [];
      }

      if (fn === undefined) {
        evs[eventName] = [];
      } else {
        evs[eventName] = evs[eventName].slice(evs[eventName].indexOf(fn));
      }

      return this;
    }
    /**
     * @method <listenOnce> listen event ${eventName} happening for executing
     *    function ${fn} only one time.
     * @param {string|Array} eventName
     * @param {function|Array} fn
     * @return {Component} self
     */

  }, {
    key: "listenOnce",
    value: function listenOnce(eventName, fn) {
      var self = this,
          del = function del() {
        self.detach(eventName, fn);
        self.detach(eventName, del);
      };

      this.listen(eventName, fn);
      this.listen(eventName, del);
      return this;
    }
  }]);

  return Component;
}();

exports["default"] = Component;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.define = exports["default"] = define;
exports.CustomHTMLElement = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getCustomChildren(node) {
  return _toConsumableArray(node.querySelectorAll(Object.keys(DEFINES).join(",").toUpperCase()));
}

function test(node) {
  var Def = DEFINES[node.nodeName.toUpperCase()];

  if (DEFINED.indexOf(node) !== -1) {
    return;
  } else if (Def) {
    new Def(node); // eslint-disable-line no-new

    var children = getCustomChildren(node);

    if (children.length) {
      children.forEach(function (child) {
        child.addEventListener("load", function () {
          if (!children.filter(function (_child) {
            return DEFINED.indexOf(_child) === -1;
          }).length) {
            DEFINED.push(node);
            node.dispatchEvent(new Event("load"));
          }
        });
      });
    } else {
      DEFINED.push(node);
      node.dispatchEvent(new Event("load"));
    }
  }

  if (node.childNodes.length) {
    node.childNodes.forEach(test);
  }
}

function onload() {
  var mo = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(test);
    });
  });
  var cnf = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  };
  mo.observe(document.querySelector("html"), cnf);
}

window.addEventListener("load", onload);

if (window.document.readyState === "complete") {
  onload();
}

var DEFINES = {};
var DEFINED = [];
/**
 * @function <define> run a function ${builder} each ${nodeName} first insertion
 *    in current HTML Document.
 * @param {String} nodeName is the nodeName of your HTMLElement, please use correct spelling
 * @param {Function} builder is the function run when an HTMLElement that match
 *    nodeName is inserted in current HTML Document/
 */

function define(nodeName, builder) {
  if (typeof nodeName !== "string") throw new Error("First parameter should be a string (to select items by node name in dom tree)");
  if (typeof builder !== "function") throw new Error("Second parameter should be a class or a function (to construct item)");
  DEFINES[nodeName.toUpperCase()] = builder;

  _toConsumableArray(document.querySelectorAll(nodeName.toUpperCase())).forEach(test);
}
/**
 * @class <CustomHTMLElement> is an abstract class for helping dev
 */


var CustomHTMLElement = function CustomHTMLElement() {
  _classCallCheck(this, CustomHTMLElement);
};

exports.CustomHTMLElement = CustomHTMLElement;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajax = exports["default"] = ajax;
exports.ajaxParameters = ajaxParameters;
exports.tryExec = tryExec;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
function ajax() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var builder = ajaxParameters.apply(null, args);
  var prom = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend", function () {
      resolve(xhr);
    });
    xhr.addEventListener("error", function () {
      var err = new Error("Request ".concat(builder.method, " ").concat(builder.uri, " failed"));
      err.xhr = xhr;
      reject(err);
    });
    xhr.open(builder.method, builder.uri);

    if (_typeof(builder.headers) === "object" && builder.headers !== null) {
      Object.keys(builder.headers).forEach(function (key) {
        var str = tryExec(builder.headers[key]);

        if (typeof str === "string") {
          xhr.setRequestHeader(key, str);
        }
      });
    }

    if (typeof builder.overrideMimeType === "string") {
      xhr.overrideMimeType(builder.overrideMimeType);
    }

    xhr.send(builder.data);
  });

  if (Array.isArray(builder.success)) {
    builder.success.forEach(function (fn) {
      if (typeof fn === "function") prom.then(fn);
    });
  }

  if (typeof builder.success === "function") {
    prom.then(builder.success);
  }

  if (Array.isArray(builder.failure)) {
    builder.failure.forEach(function (fn) {
      if (typeof fn === "function") prom["catch"](fn);
    });
  }

  if (typeof builder.failure === "function") {
    prom["catch"](builder.failure);
  }

  return prom;
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


function ajaxParameters(method, uri, data, success, failure, headers, overrideMimeType) {
  if (_typeof(method) === "object") {
    return ajaxParameters(method.method, method.uri || method.url || method.file || method.source, method.data || method.body || method.post, method.success || method.load, method.failure || method.error, method.headers, method.overrideMimeType);
  } else {
    return {
      method: tryExec.call(this, method, "GET", arguments),
      uri: tryExec.call(this, uri, "", arguments),
      data: tryExec.call(this, data, null, arguments),
      success: success,
      failure: failure,
      headers: tryExec.call(this, headers, null, arguments),
      overrideMimeType: tryExec.call(this, overrideMimeType, null, arguments)
    };
  }
}
/**
 *  @function <tryExec> execute {fn} if it is a function or
 *    return {fn} if it is a string or
 *    return {def}.
 *  @return {string|*}
 */


function tryExec(fn, def, args) {
  if (typeof fn === "function") {
    return fn.apply(this, args);
  }

  if (typeof fn === "string") {
    return fn;
  }

  return def;
}}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<section></section>\n";
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<section>\n  <h1>Hello World!</h1>\n  <ul>\n    ".concat(options.list.map(function (item) {
    return "<li>".concat(item.name, " (").concat(item.count, ")</li>");
  }).join(""), "\n  </ul>\n  <form>\n    <div class=\"input-name\"></div>\n    <div class=\"input-count\"></div>\n    <div class=\"button-add\"></div>\n  </form>\n  <pre><ul>").concat(options.routes.map(function (route) {
    return "<li><a href=\"#".concat(route, "\">").concat(route, "</a></li>");
  }).join(""), "</ul><pre>\n</section>\n");
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<div class=\"forum\"></div>\n";
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<section>\n  <div class=\"table\"></div>\n</section>\n";
}

;}],
[{"./component":7,"./page":15},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _page = _interopRequireDefault(require("./page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @class <Section> is a Component which should be only child of a page (which
 *    is the only child of Document body) at time.
 * @warn Section.wrapper() should return a Page constructor, else nothing is
 *    displayed.
 */
var Section =
/*#__PURE__*/
function (_Component) {
  _inherits(Section, _Component);

  /**
   * @method <constructor>
   * @param {Object} options is transfered to Section.template, Section.elements
   *    and Section.events.
   * @return {Section} self
   */
  function Section() {
    var _this;

    _classCallCheck(this, Section);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Section).apply(this, arguments));

    _this.template.setAttribute("section", _this.template.getAttribute("component"));

    _this.template.removeAttribute("component");

    return _this;
  }
  /**
   * @method <setSection> set this section in Document as only child of a Page
   *    and Page instance as only child of Document body.
   * @return {Section} self
   */


  _createClass(Section, [{
    key: "setSection",
    value: function setSection() {
      var page = this.getWrapper();

      if (page) {
        page.setPage(this);
        this._builder.wrapper = page;
      }

      return this;
    }
    /**
     * @method <getWrapper> returns section wrapper component, a Page instance
     * @return {Page} a component which wrap this section
     */

  }, {
    key: "getWrapper",
    value: function getWrapper() {
      if (!this._builder.wrapper) {
        this._builder.wrapper = _page["default"].getPageByConstructor(this.wrapper());
      }

      return this._builder.wrapper;
    }
    /**
     * @method <wrapper> should be overriden and should return a Page child class
     *    constructor.
     * @return {Page} which will wrap this section
     */

  }, {
    key: "wrapper",
    value: function wrapper() {
      return null;
    }
  }]);

  return Section;
}(_component["default"]);

exports["default"] = Section;}],
[{"./component":7,"./section":14},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _section = _interopRequireDefault(require("./section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @class <Page> is a Component which is set as only child of Document body at
 *    time. A section is defined with a Page, so when a section is called, the
 *    page wrap the only child section in the page. It simplify the construction
 *    of the DOM.
 * @warn Page.elements should contain "section" element
 * @advise A single child class of Page instance should exists so please
 *    call Page.getPageByConstructor(page) in section.
 */
var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  /**
   * @method <constructor> at construction of this Page, the page fill the
   *    Document body as only child.
   * @return {Page} self
   */
  function Page() {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, Page.container));

    _this.template.setAttribute("page", _this.template.getAttribute("component"));

    _this.template.removeAttribute("component");

    Page.instances[_this.constructor.name] = _assertThisInitialized(_this);
    return _this;
  }
  /**
   * @method <setSection> fill this page with a Section
   * @param {Section} section
   * @return {Page} self
   */


  _createClass(Page, [{
    key: "setSection",
    value: function setSection(section) {
      if (section instanceof _section["default"]) {
        this.fillComponent("section", section);
      }

      return this;
    }
    /**
     * @method <setPage> set this page as only page wrapper on this Document body
     *    and set a section if set in parameter.
     * @param {Section} section
     */

  }, {
    key: "setPage",
    value: function setPage(section) {
      if (Page.page !== this) {
        var into = Page.container;

        while (into.firstChild) {
          into.removeChild(into.firstChild);
        }

        this.setContainer(into);
        Page.page = this;
      }

      return this.setSection(section);
    }
    /**
     * @function <setContainer> set the container where every pages should be
     *    filled in.
     * @param {HTMLElement|Function|String} into
     */

  }], [{
    key: "setContainer",
    value: function setContainer(into) {
      if (typeof into === "function") {
        return Page.setContainer(into());
      }

      if (typeof into === "string") {
        into = document.querySelector(into);
      }

      if (into instanceof HTMLElement) {
        Page.container = into;
      } else {
        Page.container = Page.container || document.body;
      }

      if (Page.page) {
        Page.page.setContainer(into);
      }
    }
    /**
     * @function <getCurrentPage> returns last page set in body
     * @return {Page}
     */

  }, {
    key: "getCurrentPage",
    value: function getCurrentPage() {
      return Page.page;
    }
    /**
     * @function <getPageByConstructor> returns a Page instance of ${Constr} if it
     *    exists or a new instance.
     * @param {Page} Constr
     * @return {Page}
     */

  }, {
    key: "getPageByConstructor",
    value: function getPageByConstructor(Constr) {
      var inst = Page.instances[Constr.name];

      if (inst instanceof Page) {
        return inst;
      } else {
        return new Constr();
      }
    }
  }]);

  return Page;
}(_component["default"]);

exports["default"] = Page;
Page.instances = {};
Page.container = null;}],
[{"./ajax":9},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;
exports.Resource = exports["default"] = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function merge() {
  var result = {},
      success = [],
      failure = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  while (args.length) {
    var builder = args.shift();
    if (Array.isArray(builder.success)) success.concat(builder.success);
    if (typeof builder.success === "function") success.push(builder.success);
    if (Array.isArray(builder.failure)) failure.concat(builder.failure);
    if (typeof builder.failure === "function") failure.push(builder.failure);
    Object.assign(result, builder);
  }

  result.success = success;
  result.failure = failure;
  return result;
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


function ajaxParameters(method, uri, data, success, failure, headers, overrideMimeType) {
  if (_typeof(method) === "object" && method !== null) {
    return ajaxParameters(method.method, method.uri || method.url || method.file || method.source, method.data || method.body || method.post, method.success || method.load, method.failure || method.error, method.headers, method.overrideMimeType);
  } else {
    return {
      method: method,
      uri: uri,
      data: data,
      success: success,
      failure: failure,
      headers: headers,
      overrideMimeType: overrideMimeType
    };
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


var Resource =
/*#__PURE__*/
function () {
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
  function Resource() {
    _classCallCheck(this, Resource);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.commonBuilder = ajaxParameters.apply(null, args);
    this.methodsBuilder = {};
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


  _createClass(Resource, [{
    key: "addMethod",
    value: function addMethod(name) {
      var _arguments = arguments;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var self = this;

      if (this[name]) {
        throw new Error("This resource already has a ".concat(name, " method"));
      }

      this.methodsBuilder[name] = ajaxParameters.apply(null, args);

      this[name] = function () {
        var builder = ajaxParameters.apply(null, _arguments);
        return (0, _ajax["default"])(merge(self.commonBuilder, self.methodsBuilder[name], builder));
      };

      return this;
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

  }], [{
    key: "request",
    value: function request() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var builder = ajaxParameters.apply(null, args);
      return (0, _ajax["default"])(builder);
    }
  }]);

  return Resource;
}();

exports.Resource = exports["default"] = Resource;}],
[{"./route":18},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _route = _interopRequireDefault(require("./route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ROUTERS = [];
var defaultController = null;
var launched = false;
window.r = ROUTERS;
/**
 * @class <Router> stock routes, add prefix in their paths, tests them, and
 *    executes their controllers if one matches.
 */

var Router =
/*#__PURE__*/
function () {
  /**
   * @method <constructor> set prefix of each urls
   * @return {Router} self
   */
  function Router(baseUrl, firstCall) {
    _classCallCheck(this, Router);

    this.baseUrl = baseUrl || "";
    this.firstCall = firstCall || null;
    this.routes = [];
    ROUTERS.push(this);
  }
  /**
   * @method <add> add a route in this router
   * @param {Route|string} route or path
   * @param {function} controller to execute when path matches
   * @return {Route} created
   */


  _createClass(Router, [{
    key: "add",
    value: function add(route, controller) {
      if (typeof route === "string" && typeof controller === "function") {
        route = new _route["default"](this.baseUrl + route, controller);
      }

      if (route instanceof _route["default"]) {
        this.routes.push(route);

        if (launched) {
          var args = route.getArgs();

          if (args) {
            this.callFirst();
            route.go(args);
            Router.current = route;
          }
        }
      }

      return route;
    }
    /**
     * @method <test> each routes of this router and return a path if it matches
     * @return {Route|null} null if not found
     */

  }, {
    key: "test",
    value: function test() {
      return this.routes.find(function (route) {
        return route.getArgs();
      });
    }
    /**
     * @method <callFirst> is called one time when a route of this router is found.
     */

  }, {
    key: "callFirst",
    value: function callFirst() {
      if (typeof this.firstCall === "function") {
        this.firstCall();
        this.firstCall = null;
      }
    }
    /**
     * @function <setDefault> set the controller to call when no any route found.
     * @param {function} controller
     */

  }], [{
    key: "setDefault",
    value: function setDefault(controller) {
      defaultController = controller;
    }
    /**
     * @function <listenPopstate> set event in the window to trigger the routed
     *    controller
     */

  }, {
    key: "listenPopstate",
    value: function listenPopstate() {
      window.addEventListener("popstate", popstate);

      if (!launched) {
        popstate();
      }
    }
    /**
     * @function <getAll> returns a list of all routes available
     * @return {Array}
     */

  }, {
    key: "getAll",
    value: function getAll() {
      var list = ROUTERS.map(function (router) {
        return router.routes.map(function (route) {
          return route.path;
        });
      }).flat();

      if (defaultController) {
        list.unshift("*");
      }

      return list;
    }
  }]);

  return Router;
}();
/**
 * @function <popstate> is triggered when page is loaded or navigation changes.
 * Also sets Router.current if a Route is found, else sets default controller
 * if it exists.
 */


exports["default"] = Router;

function popstate() {
  launched = true;
  var route, found;
  ROUTERS.forEach(function (router) {
    if (!route) {
      route = router.test();
      found = router;
    }
  });

  if (route) {
    found.callFirst();
    route.run();
    Router.current = route;
  } else if (typeof defaultController === "function") {
    defaultController();
  }
}}],
[{"./path":36},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORMATS = exports.Route = exports["default"] = void 0;

var _path = _interopRequireDefault(require("./path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var FORMATS = {
  number: function number(str) {
    var n = parseFloat(str);
    if (isNaN(n)) throw new Error("Bad type: expect argument to be a number.");
    return n;
  },
  integer: function integer(str) {
    var n = parseInt(str);
    if (isNaN(n)) throw new Error("Bad type: expect argument to be an integer.");
    return n;
  },
  "float": function float(str) {
    var n = parseFloat(str);
    if (isNaN(n)) throw new Error("Bad type: expect argument to be a float.");
    return n;
  },
  text: function text(str) {
    try {
      var s = JSON.parse(str);
      if (typeof s === "string") return s;
    } catch (e) {}

    return str;
  },
  object: function object(str) {
    try {
      var o = JSON.parse(str);
      if (_typeof(o) === "object") return o;
    } catch (e) {}

    throw new Error("Bad type: expect argument to be an object.");
  },
  "boolean": function boolean(str) {
    try {
      var b = JSON.parse(str);
      if (typeof b === "boolean") return b;
    } catch (e) {}

    throw new Error("Bad type: expect argument to be a boolean.");
  },
  any: function any(str) {
    try {
      return JSON.parse(str);
    } catch (e) {}

    return str;
  },
  uuid: function uuid(str) {
    if (str.match(/[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}/)) return str;else throw new Error("Bad type: expect argument to be an uuid.");
  }
};
exports.FORMATS = FORMATS;
var currentArgs;
/**
 * @class <Route> if a route matches current path, return args with getArgs().
 *    If args are returned, then execute go(args).
 */

var Route =
/*#__PURE__*/
function () {
  /**
   * @method <constructor> set path and its controller if route match
   * @param {String} path format "/key:type/key:/:type/*"
   * @param {}
   */
  function Route(path, controller) {
    _classCallCheck(this, Route);

    if (typeof path !== "string") throw new Error("First parameter should be a string.");
    if (typeof controller !== "function") throw new Error("Second parameter should be a function.");
    this.path = path;
    this.controller = controller;
  }
  /**
   * @method <go> redirect to this controller passing by URL
   * @param {*} args new arguments for this controller, merged with current arguments
   * @return {Route} self
   */


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
    /**
     * @method <run> run this controller anyway with these arguments.
     * @param {*} args if falsy, try to return route.getArgs().
     * @return {*} returned by controller.
     */

  }, {
    key: "run",
    value: function run(args) {
      currentArgs = args || this.getArgs();
      return this.controller(currentArgs);
    }
    /**
     * @method <getArgs> return an object of corresponding parameters in browser
     *    path or null object if it does not match.
     * @return {Object|null} null if it does not match.
     */

  }, {
    key: "getArgs",
    value: function getArgs() {
      var current = Route.getRequestObject(),
          self = this.getRequestObject();

      if (self[self.length - 1] === "*") {
        if (current.length < self.length - 1) {
          return null;
        }
      } else if (current.length !== self.length) {
        return null;
      }

      return self.reduce(function (args, chunk, index) {
        var tmp = current[index];
        if (args === null) return null;else if (chunk === "*") return args;else if (typeof chunk === "string") return chunk === tmp ? args : null;else if (_typeof(chunk) === "object") {
          var expectedKey = chunk.key,
              expectedValue = chunk.value,
              regexp = chunk.regexp,
              type = chunk.type;

          var _ref = _typeof(tmp) === "object" ? tmp : {
            value: tmp
          },
              key = _ref.key,
              value = _ref.value;

          if (key) {
            if (key === expectedKey) {
              if (type) {
                try {
                  args[expectedKey] = FORMATS[type](value);
                  return args;
                } catch (e) {
                  return null;
                }
              } else if (regexp) {
                if (regexp.test(value)) {
                  args[expectedKey] = value;
                  return args;
                } else {
                  return null;
                }
              } else if (value) {
                args[expectedKey] = value;
                return args;
              }
            }
          } else if (expectedValue) {
            if (type) {
              try {
                args[expectedValue] = FORMATS[type](value);
                return args;
              } catch (e) {
                return null;
              }
            } else if (regexp) {
              if (regexp.test(value)) {
                args[expectedValue] = value;
                return args;
              } else {
                return null;
              }
            } else if (value) {
              args[expectedValue] = value;
              return args;
            }
          }
        }
        return null;
      }, {});
    }
    /**
     * @method <isMatch> return if current route matches browser path
     * @return {Boolean}
     */

  }, {
    key: "isMatch",
    value: function isMatch() {
      return this.getArgs() !== null;
    }
    /**
     * @method <createPath> create a path string with arguments, in order to
     *    create a link to call this route.
     * @param {Object} args
     * @return {String} path
     */

  }, {
    key: "createPath",
    value: function createPath(args) {
      if (_typeof(args) !== "object") {
        args = {};
      }

      return this.getRequestObject().map(function (item) {
        if (typeof item === "string") {
          return item === "*" ? "" : item;
        } else {
          var key = item.key,
              value = item.value;

          if (key === "") {
            if (args[value] === undefined) {
              throw new Error("Can't build this path, not enough arguments (expect \"".concat(value, "\" field)"));
            }

            return args[value];
          } else if (value === "") {
            return key + ":" + (args[key] === undefined ? "" : args[key]);
          } else {
            try {
              return key + ":" + JSON.stringify(FORMATS[value](args[key]));
            } catch (e) {
              throw new Error("Can't build this path, bad formatting arguments (expect \"".concat(key, "\" field)"));
            }
          }
        }
      }).join("/");
    }
    /**
     * @method <getRequestObject> translates a path to an object
     * @param {String} url format "/key:type/key:/:type/*"
     * @return {Array.<Object,*>}
     */

  }, {
    key: "getRequestObject",
    value: function getRequestObject() {
      return this.path.split("/").map(function (item) {
        var split = item.split(":");

        if (split.length > 1) {
          var key = split.shift(),
              value = split.join(":"),
              found = value.match(/([^(]+)\((.+)\)/),
              regexp;

          if (found) {
            var _found = _slicedToArray(found, 3);

            value = _found[1];
            regexp = _found[2];

            if (FORMATS[regexp]) {
              return {
                key: key,
                value: value,
                type: regexp
              };
            } else {
              return {
                key: key,
                value: value,
                regexp: new RegExp(regexp)
              };
            }
          } else if (key === "") {
            return {
              value: value
            };
          } else {
            if (FORMATS[value]) {
              return {
                key: key,
                type: value
              };
            } else {
              return {
                key: key,
                regexp: new RegExp(value)
              };
            }
          }
        } else {
          return item;
        }
      });
    }
    /**
     * @function <getBrowserRequest> returns the current browser path
     * @return {String}
     */

  }], [{
    key: "getBrowserRequest",
    value: function getBrowserRequest() {
      return window.location.hash.substr(1);
    }
    /**
     * @function <setBrowserRequest> set the current browser path
     */

  }, {
    key: "setBrowserRequest",
    value: function setBrowserRequest(str) {
      window.location.hash = str;
    }
    /**
     * @function <getRequestObject> translates a path to an object
     * @param {String} url format "/key:type/key:/:type/*"
     * @return {Array.<Object,*>}
     */

  }, {
    key: "getRequestObject",
    value: function getRequestObject(url) {
      if (typeof url !== "string") url = Route.getBrowserRequest();
      if (!url) return [];
      return url.split("/").map(function (item) {
        var split = item.split(":");

        if (split.length > 1) {
          var key = split.shift(),
              value = split.join(":");
          return {
            key: key,
            value: value
          };
        } else {
          return item;
        }
      });
    }
  }]);

  return Route;
}();

exports.Route = exports["default"] = Route;}],
[{"../../../i18n/fr.po":37,"../../../i18n/en.po":38},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fr = _interopRequireDefault(require("../../../i18n/fr.po"));

var _en = _interopRequireDefault(require("../../../i18n/en.po"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var FILES = {
  "en": _en["default"],
  "fr": _fr["default"]
};
var LANGUAGES = Object.keys(FILES);
/**
 * @function <translate> search field in json files and if it matches execute
 *    it with other arguments in parameters.
 * @param {String} field
 * @param {*} arguments...
 * @return {String}
 */

function translate(field, options) {
  var text = FILES[translate.language][field] || ""; // eslint-disable-next-line no-eval

  var fn = eval("(function (options) { return `" + text + "` })");

  if (_typeof(options) !== "object") {
    options = {};
  }

  return fn(options);
}

function userLanguage(language) {
  if (LANGUAGES.indexOf(language) !== -1) {
    translate.language = language;
    to.language = language;
  }

  return translate;
}

function to(language) {
  if (LANGUAGES.indexOf(language) !== -1) {
    to.language = translate.language;
    translate.language = language;
  }

  return translate;
}

function resolve() {
  var switcher = to.language;
  to.language = translate.language;
  translate.language = switcher;
  return translate;
}

translate.userLanguage = userLanguage;
translate.to = to;
translate.resolve = resolve;
translate.userLanguage(LANGUAGES[0]);
translate.userLanguage((navigator.language || navigator.userLanguage || "").substr(0, 2).toLowerCase());
var _default = translate;
exports["default"] = _default;}],
[{"./template.html":39,"../../../../libs/layout/component":7},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("../../../../libs/layout/component"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  _createClass(Input, [{
    key: "template",
    value: function template(options) {
      return (0, _template2["default"])({
        name: options.name,
        type: options.type || "text",
        defaultValue: options.defaultValue || "",
        placeholder: options.placeholder || ""
      });
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        input: "input",
        removeContent: ".remove-content",
        showPassword: ".show-password",
        errorMessage: ".error-message"
      };
    }
  }, {
    key: "events",
    value: function events() {
      return {
        "input focus": "hideErrors",
        "input change": "verifyErrors",
        "input input": "showIcons",
        "removeContent click": "removeContent",
        "showPassword click": "showPassword"
      };
    }
  }]);

  function Input(name, type, defaultValue, placeholder, errorFunction) {
    var _this;

    _classCallCheck(this, Input);

    if (typeof name !== "string") {
      throw new TypeError("Input name should be a string");
    }

    type = type || "text";
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, {
      name: name,
      type: type,
      defaultValue: defaultValue,
      placeholder: placeholder
    }));
    _this.originalType = type;
    var _ref = [_this.elements.errorMessage[0], _this.elements.input[0]],
        $error = _ref[0],
        $input = _ref[1];
    Object.assign(_assertThisInitialized(_this), {
      $error: $error,
      $input: $input
    });

    if (typeof errorFunction === "function") {
      _this.errorFunction = errorFunction;
    }

    _this.showIcons();

    return _this;
  }

  _createClass(Input, [{
    key: "hideErrors",
    value: function hideErrors() {
      this.$error.classList.add("hidden");
      return this;
    }
  }, {
    key: "verifyErrors",
    value: function verifyErrors() {
      if (this.errorFunction) {
        var err;

        try {
          err = this.errorFunction(this.value);
        } catch (e) {
          err = e;
        }

        if (err) {
          this.$error.classList.remove("hidden");

          if (typeof err === "number") {
            this.$error.textContent = "Error #".concat(err);
          } else if (err.message) {
            this.$error.textContent = err.message;
          } else {
            this.$error.textContent = "" + err; // eslint-disable-line no-implicit-coercion
          }

          return err;
        } else {
          this.$error.classList.add("hidden");
          return false;
        }
      }
    }
  }, {
    key: "showIcons",
    value: function showIcons() {
      this.elements.removeContent[0].classList.remove("show");
      this.elements.showPassword[0].classList.remove("show");

      if (this.originalType === "text" && this.value.length) {
        this.elements.removeContent[0].classList.add("show");
      }

      if (this.originalType === "password") {
        this.elements.showPassword[0].classList.add("show");
      }

      return this;
    }
  }, {
    key: "removeContent",
    value: function removeContent() {
      this.value = "";
      this.showIcons();
      return this;
    }
  }, {
    key: "showPassword",
    value: function showPassword() {
      if (this.originalType === "password") {
        this.$input.type = this.$input.type === "text" ? "password" : "text";
      }

      return this;
    }
  }, {
    key: "name",
    get: function get() {
      return this.$input.name;
    }
  }, {
    key: "type",
    get: function get() {
      return this.originalType;
    }
  }, {
    key: "value",
    get: function get() {
      return this.$input.value;
    },
    set: function set(value) {
      this.$input.value = value;
      this.showIcons();
      return this;
    }
  }]);

  return Input;
}(_component["default"]);

exports["default"] = Input;}],
[{"./template.html":40,"../../../../libs/layout/component":7},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("../../../../libs/layout/component"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Action =
/*#__PURE__*/
function (_Component) {
  _inherits(Action, _Component);

  _createClass(Action, [{
    key: "template",
    value: function template(text) {
      return (0, _template2["default"])({
        text: text
      });
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        button: "button"
      };
    }
  }, {
    key: "events",
    value: function events() {
      return {
        "button click": "click"
      };
    }
  }]);

  function Action(text, cb, className) {
    var _this;

    _classCallCheck(this, Action);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Action).call(this, text));
    _this.callbacks = [];

    var _this$elements$button = _slicedToArray(_this.elements.button, 1);

    _this.$btn = _this$elements$button[0];

    if (typeof cb === "function") {
      _this.onClick(cb);
    }

    if (typeof className === "string") {
      _this.elements.button[0].className = className;
    }

    return _this;
  }

  _createClass(Action, [{
    key: "onClick",
    value: function onClick(cb) {
      if (typeof cb === "function") {
        this.callbacks.push(cb);
      } else {
        throw new Error("First parameter should be a function");
      }
    }
  }, {
    key: "click",
    value: function click(ev) {
      var self = this;

      if (!this.isLoading() && this.isEnabled()) {
        var height = this.$btn.clientHeight,
            width = Math.max(this.$btn.clientWidth, height);
        this.$btn.style.minWidth = width + "px";
        this.$btn.style.minHeight = height + "px";
        this.$btn.classList.add("load");
        this.callbacks.forEach(function (cb) {
          cb(ev, self);
        });
      }

      return this;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.$btn.disabled = true;
      return this;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.$btn.disabled = false;
      return this;
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return !this.$btn.disabled;
    }
  }, {
    key: "isLoading",
    value: function isLoading() {
      return this.$btn.classList.contains("load");
    }
  }, {
    key: "rearm",
    value: function rearm() {
      this.$btn.classList.remove("load");
      this.$btn.style.removeProperty("min-width");
      this.$btn.style.removeProperty("min-height");
      return this;
    }
  }]);

  return Action;
}(_component["default"]);

exports["default"] = Action;}],
[{"../../../../":2,"./":49},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("../../../../");

var _2 = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndexSection =
/*#__PURE__*/
function (_Section) {
  _inherits(IndexSection, _Section);

  function IndexSection() {
    _classCallCheck(this, IndexSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexSection).apply(this, arguments));
  }

  _createClass(IndexSection, [{
    key: "wrapper",
    value: function wrapper() {
      return _2["default"];
    }
  }]);

  return IndexSection;
}(_.Section);

exports["default"] = IndexSection;}],
[{"../../../../":2,"./":3},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = exports.router = void 0;

var _ = require("../../../../");

var _2 = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var onepage;
var rs = new _.Router("/onepage", function () {
  onepage = new _2["default"]();
});
exports.router = rs;
var index = rs.add("/*", function () {
  onepage.setSection();
});
exports.index = index;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("../../../../");

var _2 = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndexSection =
/*#__PURE__*/
function (_Section) {
  _inherits(IndexSection, _Section);

  function IndexSection() {
    _classCallCheck(this, IndexSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexSection).apply(this, arguments));
  }

  _createClass(IndexSection, [{
    key: "wrapper",
    value: function wrapper() {
      return _2["default"];
    }
  }]);

  return IndexSection;
}(_.Section);

exports["default"] = IndexSection;}],
[{"../../../../":2,"./":4},function (require,module,exports) {"use strict";

var _ = require("../../../../");

var _2 = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_.Router.setDefault(function () {
  return new _2["default"]();
});}],
[{"../../../../":2,"./":51},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("../../../../");

var _2 = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndexSection =
/*#__PURE__*/
function (_Section) {
  _inherits(IndexSection, _Section);

  function IndexSection() {
    _classCallCheck(this, IndexSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexSection).apply(this, arguments));
  }

  _createClass(IndexSection, [{
    key: "wrapper",
    value: function wrapper() {
      return _2["default"];
    }
  }]);

  return IndexSection;
}(_.Section);

exports["default"] = IndexSection;}],
[{"../../../../":2,"./":5},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.edit = exports.read = exports.list = exports.router = void 0;

var _ = require("../../../../");

var _2 = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var forum;
var rs = new _.Router("/forum", function () {
  forum = new _2["default"]();
});
exports.router = rs;
var list = rs.add("/list", function () {
  forum.showList();
});
exports.list = list;
var read = rs.add("/:id(integer)", function (args) {
  forum.showRead(args.id);
});
exports.read = read;
var edit = rs.add("/:id(^\\d+$)/edit", function (args) {
  forum.showEdit(args.id);
});
exports.edit = edit;
var create = rs.add("/create", function () {
  forum.showCreate();
});
exports.create = create;}],
[{"./template.html":43,"../routes":27,"../../../../../":2,"../../../components/action":21},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require("../../../../../"));

var _action = _interopRequireDefault(require("../../../components/action"));

var _template2 = _interopRequireDefault(require("./template.html"));

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ForumList =
/*#__PURE__*/
function (_Amonite$Component) {
  _inherits(ForumList, _Amonite$Component);

  _createClass(ForumList, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])({
        title: "Liste des sujets",
        list: [{
          id: 123,
          title: "Titre",
          count: 1
        }, {
          id: 123,
          title: "Titre",
          count: 12
        }, {
          id: 123,
          title: "Titre",
          count: 123
        }]
      });
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        create: ".create-button",
        subjects: ".forum-subject"
      };
    }
  }]);

  function ForumList() {
    var _this;

    _classCallCheck(this, ForumList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForumList).call(this));

    _this.fillComponent("create", new _action["default"]("Créer un sujet", _this.onCreate.bind(_assertThisInitialized(_this))));

    _this.elements.subjects.forEach(function (node) {
      node.addEventListener("click", function () {
        _routes.read.go({
          id: node.getAttribute("data-id")
        });
      });
    });

    return _this;
  }

  _createClass(ForumList, [{
    key: "onCreate",
    value: function onCreate(ev, btn) {
      _routes.create.go();
    }
  }]);

  return ForumList;
}(_["default"].Component);

exports["default"] = ForumList;}],
[{"./template.html":44,"./topic":56,"../../../requests/forums/forum":57,"../../../../../":2},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require("../../../../../"));

var _topic = _interopRequireDefault(require("./topic"));

var _forum = _interopRequireDefault(require("../../../requests/forums/forum"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ForumRead =
/*#__PURE__*/
function (_Amonite$Component) {
  _inherits(ForumRead, _Amonite$Component);

  _createClass(ForumRead, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        topic: ".topic"
      };
    }
  }]);

  function ForumRead(id) {
    var _this;

    _classCallCheck(this, ForumRead);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForumRead).call(this));

    var self = _assertThisInitialized(_this);

    _this.loadTopic(id).then(function (topic) {
      self.fillComponent("topic", topic);
    });

    return _this;
  }

  _createClass(ForumRead, [{
    key: "loadTopic",
    value: function loadTopic(id) {
      return new Promise(function (resolve, reject) {
        var req = new _forum["default"](id);
        req.fetch().then(function (data) {
          resolve(new _topic["default"](data.id, data.title, data.message));
        });
      });
    }
  }]);

  return ForumRead;
}(_["default"].Component);

exports["default"] = ForumRead;}],
[{"./template.html":45,"../../../requests/forums/forum":57,"../routes":27,"../../../../../":2,"../../../components/input":20,"../../../components/action":21},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require("../../../../../"));

var _forum = _interopRequireDefault(require("../../../requests/forums/forum"));

var _template2 = _interopRequireDefault(require("./template.html"));

var _action = _interopRequireDefault(require("../../../components/action"));

var _input = _interopRequireDefault(require("../../../components/input"));

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ForumRead =
/*#__PURE__*/
function (_Amonite$Component) {
  _inherits(ForumRead, _Amonite$Component);

  _createClass(ForumRead, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        title: ".title-input",
        message: ".message-input",
        cancel: ".btn-cancel",
        "delete": ".btn-delete",
        save: ".btn-save",
        form: "form"
      };
    }
  }]);

  function ForumRead(id) {
    var _this;

    _classCallCheck(this, ForumRead);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForumRead).call(this));
    _this.id = id;

    _this.elements.form[0].addEventListener("submit", function (ev) {
      ev.preventDefault();
    });

    _this.fillComponent("title", _this.titleInput = new _input["default"]("title"));

    _this.fillComponent("message", _this.messageInput = new _input["default"]("message"));

    _this.fillComponent("cancel", _this.cancelBtn = new _action["default"]("Cancel", _this.onCancel.bind(_assertThisInitialized(_this))));

    _this.fillComponent("delete", _this.deleteBtn = new _action["default"]("Delete", _this.onDelete.bind(_assertThisInitialized(_this))));

    _this.fillComponent("save", _this.saveBtn = new _action["default"]("Save", _this.onSave.bind(_assertThisInitialized(_this))));

    _this.loadData();

    return _this;
  }

  _createClass(ForumRead, [{
    key: "loadData",
    value: function loadData() {
      var self = this;
      var req = new _forum["default"](this.id);
      return req.fetch().then(function (data) {
        self.setFields(data.title, data.message);
      });
    }
  }, {
    key: "saveData",
    value: function saveData() {
      var req = new _forum["default"](this.id);
      return req.save(this.titleInput.value, this.messageInput.value);
    }
  }, {
    key: "deleteData",
    value: function deleteData() {
      var req = new _forum["default"](this.id);
      return req["delete"]();
    }
  }, {
    key: "setFields",
    value: function setFields(title, message) {
      this.titleInput.value = title;
      this.messageInput.value = message;
    }
  }, {
    key: "onCancel",
    value: function onCancel(ev, btn) {
      _routes.read.go({
        id: this.id
      });
    }
  }, {
    key: "onDelete",
    value: function onDelete(ev, btn) {
      this.deleteData().then(function () {
        _routes.list.go();
      })["catch"](function () {
        alert("Delete failed!");
        btn.rearm();
      });
    }
  }, {
    key: "onSave",
    value: function onSave(ev, btn) {
      var _this2 = this;

      this.saveData().then(function () {
        _routes.read.go({
          id: _this2.id
        });
      })["catch"](function () {
        alert("Save failed!");
        btn.rearm();
      });
    }
  }]);

  return ForumRead;
}(_["default"].Component);

exports["default"] = ForumRead;}],
[{"./template.html":46,"./validation-popin":59,"../../../../../":2,"../../../components/action":21,"../../../components/popin":52,"../../../modules/translate":19},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require("../../../../../"));

var _action = _interopRequireDefault(require("../../../components/action"));

var _popin = _interopRequireDefault(require("../../../components/popin"));

var _translate = _interopRequireDefault(require("../../../modules/translate"));

var _template2 = _interopRequireDefault(require("./template.html"));

var _validationPopin = _interopRequireDefault(require("./validation-popin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ForumCreate =
/*#__PURE__*/
function (_Amonite$Component) {
  _inherits(ForumCreate, _Amonite$Component);

  _createClass(ForumCreate, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        create: ".button-create"
      };
    }
  }]);

  function ForumCreate() {
    var _this;

    _classCallCheck(this, ForumCreate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForumCreate).call(this));

    _this.fillComponent("create", new _action["default"]("Créer", _this.onCreate.bind(_assertThisInitialized(_this))));

    return _this;
  }

  _createClass(ForumCreate, [{
    key: "onCreate",
    value: function onCreate(ev, btn) {
      _popin["default"].getInstance().setPopin(new _validationPopin["default"]()).setTitle((0, _translate["default"])("page:forum:create:popin:title"));

      btn.rearm();
    }
  }]);

  return ForumCreate;
}(_["default"].Component);

exports["default"] = ForumCreate;}],
[{"../../components/main-table/data-formatter":47,"../../../../":2,"../../modules/translate":19},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("../../../../");

var _dataFormatter = _interopRequireDefault(require("../../components/main-table/data-formatter"));

var _translate = _interopRequireDefault(require("../../modules/translate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UserRequest =
/*#__PURE__*/
function (_Resource) {
  _inherits(UserRequest, _Resource);

  function UserRequest() {
    _classCallCheck(this, UserRequest);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserRequest).apply(this, arguments));
  }

  _createClass(UserRequest, [{
    key: "fetch",
    value: function fetch() {
      var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var self = this;
      return new Promise(function (resolve, reject) {
        UserRequest.request("POST", "//localhost:2999/api/v1/users", JSON.stringify({
          first: first,
          max: max
        })).then(function (data) {
          self.data = JSON.parse(data.responseText);
          resolve(new _dataFormatter["default"](self.parseUsers(self.data.users), self.data.total, first, max));
        })["catch"](reject);
      });
    }
  }, {
    key: "parseUsers",
    value: function parseUsers(users) {
      return users.map(function (user) {
        user.translatedCivility = (0, _translate["default"])("civility:" + user.civility);
        return user;
      });
    }
  }]);

  return UserRequest;
}(_.Resource);

exports["default"] = UserRequest;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("../../../../");

var _2 = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndexSection =
/*#__PURE__*/
function (_Section) {
  _inherits(IndexSection, _Section);

  function IndexSection() {
    _classCallCheck(this, IndexSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexSection).apply(this, arguments));
  }

  _createClass(IndexSection, [{
    key: "wrapper",
    value: function wrapper() {
      return _2["default"];
    }
  }]);

  return IndexSection;
}(_.Section);

exports["default"] = IndexSection;}],
[{"../../../../":2,"./":6},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = exports.router = void 0;

var _ = require("../../../../");

var _2 = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stats;
var rs = new _.Router("/stats", function () {
  stats = new _2["default"]();
});
exports.router = rs;
var index = rs.add("/*", function () {
  stats.setSection();
});
exports.index = index;}],
[{"../../../../libs/layout/component":7,"./model":54,"./data-formatter":47,"../loader":55,"./wrapper":60},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loader = _interopRequireDefault(require("../loader"));

var _component = _interopRequireDefault(require("../../../../libs/layout/component"));

var _wrapper = _interopRequireDefault(require("./wrapper"));

var _model = _interopRequireDefault(require("./model"));

var _dataFormatter = _interopRequireDefault(require("./data-formatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function promiseBuilder(promiseData) {
  var self = this;

  if (promiseData instanceof Promise) {
    return new Promise(function (resolve, reject) {
      promiseData.then(function (model) {
        if (model instanceof _model["default"]) {
          self.model = model;
          self.setData(model.getCollection().toJSON(), model.getTotal(), model.getFirst(), model.getMax());
          resolve(self.wrapper);
        } else if (model instanceof _dataFormatter["default"]) {
          self.data = model;
          self.setData(model.getList(), model.getTotal(), model.getFirst(), model.getMax());
          resolve(self.wrapper);
        } else {
          resolve(null);
        }
      })["catch"](function () {
        reject(new Error("Request failed load data"));
      });
    });
  } else {
    throw new TypeError("Parameter should be a Promise");
  }
}

function listenEvents() {
  if (this.wrapper) {
    var self = this;
    this.wrapper.onFirstPage(function () {
      self.dispatch("first");
    });
    this.wrapper.onPreviousPage(function () {
      self.dispatch("previous");
    });
    this.wrapper.onNextPage(function () {
      self.dispatch("next");
    });
    this.wrapper.onLastPage(function () {
      self.dispatch("last");
    });
    this.wrapper.onChangePage(function (page) {
      self.dispatch("change", [page]);
    });
  }
}

var MainTable =
/*#__PURE__*/
function (_Component) {
  _inherits(MainTable, _Component);

  function MainTable(promiseData, builder) {
    var _this;

    _classCallCheck(this, MainTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainTable).call(this));

    _this.loadData(promiseData);

    _this.builder = builder;
    return _this;
  }
  /**
   * @method <loadData> loads data from a Promise ${promiseData} and set its
   *    resolved parameter as this MainTable rows and fields.
   * @param {Promise} promiseData
   * @return {MainTable} self
   */


  _createClass(MainTable, [{
    key: "loadData",
    value: function loadData(promiseData) {
      while (this.template.firstChild) {
        this.template.removeChild(this.template.firstChild);
      }

      this.loader = new _loader["default"](promiseBuilder.call(this, promiseData));
      this.loader.setContainer(this.template);
      return this;
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

  }, {
    key: "setData",
    value: function setData(collection, total, first, max) {
      this.wrapper = new _wrapper["default"](collection, total, first, max, this.builder);
      listenEvents.call(this);
      return this;
    }
    /**
     * @method <setData> set Collection ${collection} as this MainTable rows and
     *    fields, paginated with ${total} and ${max}.
     * @param {integer} total
     * @param {integer} first
     * @param {integer} max
     * @return {MainTable} self
     */

  }, {
    key: "setPagination",
    value: function setPagination(total, first, max) {
      if (this.wrapper) {
        this.wrapper.pagination.setPagination(total, first, max);
      }

      return this;
    } // pagination events triggering

  }, {
    key: "onFirstPage",
    value: function onFirstPage(fn) {
      return this.listen("first", fn);
    }
  }, {
    key: "onPreviousPage",
    value: function onPreviousPage(fn) {
      return this.listen("previous", fn);
    }
  }, {
    key: "onNextPage",
    value: function onNextPage(fn) {
      return this.listen("next", fn);
    }
  }, {
    key: "onLastPage",
    value: function onLastPage(fn) {
      return this.listen("last", fn);
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(fn) {
      return this.listen("change", fn);
    }
  }]);

  return MainTable;
}(_component["default"]);

exports["default"] = MainTable;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var FORMATS = {
  number: function number(str) {
    var n = parseFloat(str);
    if (isNaN(n)) throw new Error("Bad type: expect argument to be a number.");
    return n;
  },
  integer: function integer(str) {
    var n = parseInt(str);
    if (isNaN(n)) throw new Error("Bad type: expect argument to be an integer.");
    return n;
  },
  "float": function float(str) {
    var n = parseFloat(str);
    if (isNaN(n)) throw new Error("Bad type: expect argument to be a float.");
    return n;
  },
  string: function string(str) {
    try {
      var s = JSON.parse(str);
      if (typeof s === "string") return s;
    } catch (e) {}

    return str;
  },
  object: function object(str) {
    try {
      var o = JSON.parse(str);
      if (_typeof(o) === "object") return o;
    } catch (e) {}

    throw new Error("Bad type: expect argument to be an object.");
  },
  "boolean": function boolean(str) {
    try {
      var b = JSON.parse(str);
      if (typeof b === "boolean") return b;
    } catch (e) {}

    throw new Error("Bad type: expect argument to be a boolean.");
  },
  any: function any(str) {
    try {
      return JSON.parse(str);
    } catch (e) {}

    return str;
  },
  uuid: function uuid(str) {
    if (str.match(/[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}/)) return str;else throw new Error("Bad type: expect argument to be an uuid.");
  }
};
var FORMATS_DEFAULT = "any";

function objectDeepContainedIn(object, compare) {
  var keys_found = [];
  return !Object.keys(object).find(function (key) {
    if (object[key] === undefined) return false;
    if (compare[key] === undefined) return true;

    var type = _typeof(object[key]);

    if (type !== _typeof(object[key])) return true;
    if (type === "object") return !objectDeepContainedIn(object[key], compare[key]);
    if (type === "function") return object[key].toString() !== compare[key].toString();
    if (compare[key] !== object[key]) return true;
  });
}

function ruleToFunction(rule) {
  if (typeof rule === "function") {
    return rule;
  }

  if (typeof rule === "string") {
    return ruleStringToFunction(rule);
  }

  if (rule instanceof RegExp) {
    return function (value) {
      var found = rule.match(value);

      if (found) {
        return {
          value: value,
          regexp: rule,
          match: found
        };
      } else {
        throw new Error("Bad type: chunk doesn't match RegExp.");
      }
    };
  }

  if (_typeof(rule) === "object") {
    return function (value) {
      var chunked = value.split(":");
      var found;

      if (chunked.length > 1) {
        var ckey = chunked.shift();
        var cvalue = chunked.join(":");

        if (rule.key !== undefined && rule.key !== ckey) {
          throw new Error("Bad type: chunk key doesn't match string.");
        }

        if (rule.value !== undefined && rule.value !== cvalue) {
          throw new Error("Bad type: chunk value doesn't match string.");
        }

        if (rule.regexp !== undefined && !(found = cvalue.match(rule.regexp))) {
          throw new Error("Bad type: chunk value doesn't match RegExp.");
        }

        if (rule.match !== undefined && (!found || !objectDeepContainedIn(rule.match, found))) {
          throw new Error("Bad type: chunk value RegExp result doesn't match expected value.");
        }
      } else {
        if (rule.key !== undefined) {
          throw new Error("Bad type: chunk key doesn't match string.");
        }

        if (rule.value !== undefined && rule.value !== value) {
          throw new Error("Bad type: chunk doesn't match string.");
        }

        if (rule.regexp !== undefined && !(found = value.match(rule.regexp))) {
          throw new Error("Bad type: chunk doesn't match RegExp.");
        }

        if (rule.match !== undefined && (!found || !objectDeepContainedIn(rule.match, found))) {
          throw new Error("Bad type: chunk RegExp result doesn't match expected value.");
        }
      }
    };
  }

  return null;
}

function ruleStringToFunction(rule) {
  var splitted = rule.split(":");

  if (splitted.length > 1) {
    var key = splitted.shift();
    var type = splitted.join(":");

    if (key.length && type.length) {
      return function (value) {
        var chunked = value.split(":");
        var ckey = chunked.shift();

        if (ckey !== key) {
          throw new Error("Bad type: chunk key doesn't match string.");
        }

        if (!chunked.length) {
          throw new Error("Bad type: chunk value doesn't exists.");
        }

        var cvalue = chunked.join(":");

        if (FORMATS[type]) {
          return {
            key: key,
            type: type,
            value: FORMATS[type](cvalue)
          };
        } else {
          throw new Error("Bad type: chunk value doesn't match format.");
        }
      };
    }

    if (key.length) {
      return function (value) {
        var chunked = value.split(":");
        var ckey = chunked.shift();

        if (ckey !== key) {
          throw new Error("Bad type: chunk key doesn't match string.");
        }

        if (!chunked.length) {
          throw new Error("Bad type: chunk value doesn't exists.");
        }

        var cvalue = chunked.join(":");
        return {
          key: key,
          value: FORMATS[FORMATS_DEFAULT](cvalue)
        };
      };
    }

    if (type.length) {
      return function (value) {
        if (FORMATS[type]) {
          return {
            type: type,
            value: FORMATS[type](value)
          };
        } else {
          throw new Error("Bad type: chunk value doesn't match format.");
        }
      };
    }
  }

  return function (value) {
    if (value === rule) {
      return {
        value: rule
      };
    } else {
      throw new Error("Bad type: chunk doesn't match string.");
    }
  };
}

function parsePathRules(rules) {
  if (typeof rules === "string") rules = rules.split("/");
  if (Array.isArray(rules)) return rules.map(ruleToFunction);
  return null;
}

var Path =
/*#__PURE__*/
function () {
  function Path(rules) {
    _classCallCheck(this, Path);

    this.original = rules;
    this.rules = parsePathRules(rules);
  }

  _createClass(Path, [{
    key: "extractArgs",
    value: function extractArgs(path) {
      var chunks = path.split("/");

      try {
        var args = this.rules.map(function (fn) {
          return fn(chunks.shift());
        });
        return args;
      } catch (err) {
        return false;
      }
    }
  }], [{
    key: "registerFormat",
    value: function registerFormat(formatName, parser) {
      if (!(typeof formatName === "string" && !formatName.match(/[\?\#\/:]/))) {
        throw new Error("First parameter should be a string without characters /:?#");
      }

      if (!(typeof parser === "function")) {
        throw new Error("Second parameter should be a function");
      }

      FORMATS[formatName] = parser;
    }
  }]);

  return Path;
}();

var _default = Path;
exports["default"] = _default;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  "general:welcome": "Bienvenue, ${options.username} !",
  "component:main-table:pagination:stats:phrase": "Page ${options.page}/${options.lastPage} (${options.total} élements)",
  "page:stats:table:user:headers:lastName": "Nom",
  "page:stats:table:user:headers:firstName": "Prénom",
  "page:stats:table:user:headers:civility": "Titre",
  "civility:mr": "Monsieur",
  "civility:mrs": "Madame",
  "civility:short:m": "M",
  "civility:short:mrs": "Mme",
  "page:forum:create:popin:title": "Confirmer la création"
};
exports["default"] = _default;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  "general:welcome": "Welcome, ${options.username}!",
  "component:main-table:pagination:stats:phrase": "Page ${options.page}/${options.lastPage} (${options.total} items)",
  "page:stats:table:user:headers:lastName": "Last Name",
  "page:stats:table:user:headers:firstName": "First Name",
  "page:stats:table:user:headers:civility": "Civility",
  "civility:mr": "Mister",
  "civility:mrs": "Miss",
  "civility:short:m": "Mr",
  "civility:short:mrs": "Mrs",
  "page:forum:create:popin:title": "Confirm topic creation"
};
exports["default"] = _default;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<div class=\"hover-icons\">\n  <div class=\"remove-content\">\u274C</div>\n  <div class=\"show-password\">\uD83D\uDC41</div>\n</div>\n<input type=\"".concat(options.type, "\" name=\"").concat(options.name, "\" autocomplete=\"").concat(options.name, "\" value=\"").concat(options.defaultValue, "\" placeholder=\"").concat(options.placeholder, "\">\n<div class=\"error-message hidden\"></div>\n");
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<button>\n  <p>".concat(options.text, "</p>\n  <div class=\"loader\">\n    <div class=\"anim1\"></div>\n    <div class=\"anim2\"></div>\n    <div class=\"anim3\"></div>\n  </div>\n</button>\n");
}

;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _section = _interopRequireDefault(require("./section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @class <Page> is a Component which is set as only child of Document body at
 *    time. A section is defined with a Page, so when a section is called, the
 *    page wrap the only child section in the page. It simplify the construction
 *    of the DOM.
 * @warn Page.elements should contain "section" element
 * @advise A single child class of Page instance should exists so please
 *    call Page.getPageByConstructor(page) in section.
 */
var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  /**
   * @method <constructor> at construction of this Page, the page fill the
   *    Document body as only child.
   * @return {Page} self
   */
  function Page() {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, Page.container));

    _this.template.setAttribute("page", _this.template.getAttribute("component"));

    _this.template.removeAttribute("component");

    Page.instances[_this.constructor.name] = _assertThisInitialized(_this);
    return _this;
  }
  /**
   * @method <setSection> fill this page with a Section
   * @param {Section} section
   * @return {Page} self
   */


  _createClass(Page, [{
    key: "setSection",
    value: function setSection(section) {
      if (section instanceof _section["default"]) {
        this.fillComponent("section", section);
      }

      return this;
    }
    /**
     * @method <setPage> set this page as only page wrapper on this Document body
     *    and set a section if set in parameter.
     * @param {Section} section
     */

  }, {
    key: "setPage",
    value: function setPage(section) {
      if (Page.page !== this) {
        var into = Page.container;

        while (into.firstChild) {
          into.removeChild(into.firstChild);
        }

        this.setContainer(into);
        Page.page = this;
      }

      return this.setSection(section);
    }
    /**
     * @function <setContainer> set the container where every pages should be
     *    filled in.
     * @param {HTMLElement|Function|String} into
     */

  }], [{
    key: "setContainer",
    value: function setContainer(into) {
      if (typeof into === "function") {
        return Page.setContainer(into());
      }

      if (typeof into === "string") {
        into = document.querySelector(into);
      }

      if (into instanceof HTMLElement) {
        Page.container = into;
      } else {
        Page.container = Page.container || document.body;
      }

      if (Page.page) {
        Page.page.setContainer(into);
      }
    }
    /**
     * @function <getCurrentPage> returns last page set in body
     * @return {Page}
     */

  }, {
    key: "getCurrentPage",
    value: function getCurrentPage() {
      return Page.page;
    }
    /**
     * @function <getPageByConstructor> returns a Page instance of ${Constr} if it
     *    exists or a new instance.
     * @param {Page} Constr
     * @return {Page}
     */

  }, {
    key: "getPageByConstructor",
    value: function getPageByConstructor(Constr) {
      var inst = Page.instances[Constr.name];

      if (inst instanceof Page) {
        return inst;
      } else {
        return new Constr();
      }
    }
  }]);

  return Page;
}(_component["default"]);

exports["default"] = Page;
Page.instances = {};
Page.container = null;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORMATS = exports.Route = exports["default"] = void 0;

var _path = _interopRequireDefault(require("./path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var FORMATS = {
  number: function number(str) {
    var n = parseFloat(str);
    if (isNaN(n)) throw new Error("Bad type: expect argument to be a number.");
    return n;
  },
  integer: function integer(str) {
    var n = parseInt(str);
    if (isNaN(n)) throw new Error("Bad type: expect argument to be an integer.");
    return n;
  },
  "float": function float(str) {
    var n = parseFloat(str);
    if (isNaN(n)) throw new Error("Bad type: expect argument to be a float.");
    return n;
  },
  text: function text(str) {
    try {
      var s = JSON.parse(str);
      if (typeof s === "string") return s;
    } catch (e) {}

    return str;
  },
  object: function object(str) {
    try {
      var o = JSON.parse(str);
      if (_typeof(o) === "object") return o;
    } catch (e) {}

    throw new Error("Bad type: expect argument to be an object.");
  },
  "boolean": function boolean(str) {
    try {
      var b = JSON.parse(str);
      if (typeof b === "boolean") return b;
    } catch (e) {}

    throw new Error("Bad type: expect argument to be a boolean.");
  },
  any: function any(str) {
    try {
      return JSON.parse(str);
    } catch (e) {}

    return str;
  },
  uuid: function uuid(str) {
    if (str.match(/[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}/)) return str;else throw new Error("Bad type: expect argument to be an uuid.");
  }
};
exports.FORMATS = FORMATS;
var currentArgs;
/**
 * @class <Route> if a route matches current path, return args with getArgs().
 *    If args are returned, then execute go(args).
 */

var Route =
/*#__PURE__*/
function () {
  /**
   * @method <constructor> set path and its controller if route match
   * @param {String} path format "/key:type/key:/:type/*"
   * @param {}
   */
  function Route(path, controller) {
    _classCallCheck(this, Route);

    if (typeof path !== "string") throw new Error("First parameter should be a string.");
    if (typeof controller !== "function") throw new Error("Second parameter should be a function.");
    this.path = path;
    this.controller = controller;
  }
  /**
   * @method <go> redirect to this controller passing by URL
   * @param {*} args new arguments for this controller, merged with current arguments
   * @return {Route} self
   */


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
    /**
     * @method <run> run this controller anyway with these arguments.
     * @param {*} args if falsy, try to return route.getArgs().
     * @return {*} returned by controller.
     */

  }, {
    key: "run",
    value: function run(args) {
      currentArgs = args || this.getArgs();
      return this.controller(currentArgs);
    }
    /**
     * @method <getArgs> return an object of corresponding parameters in browser
     *    path or null object if it does not match.
     * @return {Object|null} null if it does not match.
     */

  }, {
    key: "getArgs",
    value: function getArgs() {
      var current = Route.getRequestObject(),
          self = this.getRequestObject();

      if (self[self.length - 1] === "*") {
        if (current.length < self.length - 1) {
          return null;
        }
      } else if (current.length !== self.length) {
        return null;
      }

      return self.reduce(function (args, chunk, index) {
        var tmp = current[index];
        if (args === null) return null;else if (chunk === "*") return args;else if (typeof chunk === "string") return chunk === tmp ? args : null;else if (_typeof(chunk) === "object") {
          var expectedKey = chunk.key,
              expectedValue = chunk.value,
              regexp = chunk.regexp,
              type = chunk.type;

          var _ref = _typeof(tmp) === "object" ? tmp : {
            value: tmp
          },
              key = _ref.key,
              value = _ref.value;

          if (key) {
            if (key === expectedKey) {
              if (type) {
                try {
                  args[expectedKey] = FORMATS[type](value);
                  return args;
                } catch (e) {
                  return null;
                }
              } else if (regexp) {
                if (regexp.test(value)) {
                  args[expectedKey] = value;
                  return args;
                } else {
                  return null;
                }
              } else if (value) {
                args[expectedKey] = value;
                return args;
              }
            }
          } else if (expectedValue) {
            if (type) {
              try {
                args[expectedValue] = FORMATS[type](value);
                return args;
              } catch (e) {
                return null;
              }
            } else if (regexp) {
              if (regexp.test(value)) {
                args[expectedValue] = value;
                return args;
              } else {
                return null;
              }
            } else if (value) {
              args[expectedValue] = value;
              return args;
            }
          }
        }
        return null;
      }, {});
    }
    /**
     * @method <isMatch> return if current route matches browser path
     * @return {Boolean}
     */

  }, {
    key: "isMatch",
    value: function isMatch() {
      return this.getArgs() !== null;
    }
    /**
     * @method <createPath> create a path string with arguments, in order to
     *    create a link to call this route.
     * @param {Object} args
     * @return {String} path
     */

  }, {
    key: "createPath",
    value: function createPath(args) {
      if (_typeof(args) !== "object") {
        args = {};
      }

      return this.getRequestObject().map(function (item) {
        if (typeof item === "string") {
          return item === "*" ? "" : item;
        } else {
          var key = item.key,
              value = item.value;

          if (key === "") {
            if (args[value] === undefined) {
              throw new Error("Can't build this path, not enough arguments (expect \"".concat(value, "\" field)"));
            }

            return args[value];
          } else if (value === "") {
            return key + ":" + (args[key] === undefined ? "" : args[key]);
          } else {
            try {
              return key + ":" + JSON.stringify(FORMATS[value](args[key]));
            } catch (e) {
              throw new Error("Can't build this path, bad formatting arguments (expect \"".concat(key, "\" field)"));
            }
          }
        }
      }).join("/");
    }
    /**
     * @method <getRequestObject> translates a path to an object
     * @param {String} url format "/key:type/key:/:type/*"
     * @return {Array.<Object,*>}
     */

  }, {
    key: "getRequestObject",
    value: function getRequestObject() {
      return this.path.split("/").map(function (item) {
        var split = item.split(":");

        if (split.length > 1) {
          var key = split.shift(),
              value = split.join(":"),
              found = value.match(/([^(]+)\((.+)\)/),
              regexp;

          if (found) {
            var _found = _slicedToArray(found, 3);

            value = _found[1];
            regexp = _found[2];

            if (FORMATS[regexp]) {
              return {
                key: key,
                value: value,
                type: regexp
              };
            } else {
              return {
                key: key,
                value: value,
                regexp: new RegExp(regexp)
              };
            }
          } else if (key === "") {
            return {
              value: value
            };
          } else {
            if (FORMATS[value]) {
              return {
                key: key,
                type: value
              };
            } else {
              return {
                key: key,
                regexp: new RegExp(value)
              };
            }
          }
        } else {
          return item;
        }
      });
    }
    /**
     * @function <getBrowserRequest> returns the current browser path
     * @return {String}
     */

  }], [{
    key: "getBrowserRequest",
    value: function getBrowserRequest() {
      return window.location.hash.substr(1);
    }
    /**
     * @function <setBrowserRequest> set the current browser path
     */

  }, {
    key: "setBrowserRequest",
    value: function setBrowserRequest(str) {
      window.location.hash = str;
    }
    /**
     * @function <getRequestObject> translates a path to an object
     * @param {String} url format "/key:type/key:/:type/*"
     * @return {Array.<Object,*>}
     */

  }, {
    key: "getRequestObject",
    value: function getRequestObject(url) {
      if (typeof url !== "string") url = Route.getBrowserRequest();
      if (!url) return [];
      return url.split("/").map(function (item) {
        var split = item.split(":");

        if (split.length > 1) {
          var key = split.shift(),
              value = split.join(":");
          return {
            key: key,
            value: value
          };
        } else {
          return item;
        }
      });
    }
  }]);

  return Route;
}();

exports.Route = exports["default"] = Route;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<h2>".concat(options.title, "</h2>\n<div class=\"actions\">\n  <div class=\"create-button\"></div>\n</div>\n<div class=\"forum-list\">\n  ").concat(options.list.map(function (subject) {
    return "<div class=\"forum-subject\" data-id=\"".concat(subject.id, "\">\n      <h3>").concat(subject.title, "</h3>\n      <p>").concat(subject.count, "</p>\n    </div>");
  }).join(''), "\n</div>\n");
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<h1>Read this subject</h1>\n<div class=\"topic\"></div>\n";
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<form>\n  <h1>Edit topic</h1>\n  <div class=\"title-input\"></div>\n  <div class=\"message-input\"></div>\n  <div class=\"btn-cancel\"></div>\n  <div class=\"btn-delete\"></div>\n  <div class=\"btn-save\"></div>\n</form>\n";
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<p></p>\n<div class=\"actions\">\n  <div class=\"button-create\"></div>\n</div>\n";
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MainTableData =
/*#__PURE__*/
function () {
  function MainTableData(list, total, first, max) {
    _classCallCheck(this, MainTableData);

    if (Array.isArray(list)) {
      this.list = list;
    } else {
      throw new TypeError("First argument is not an array");
    }

    if (!Number.isNaN(total = parseInt(total))) {
      this.total = total;
    } else {
      throw new TypeError("Second argument is not a number");
    }

    if (!Number.isNaN(first = parseInt(first))) {
      this.first = first;
    } else {
      throw new TypeError("Third argument is not a number");
    }

    if (!Number.isNaN(max = parseInt(max))) {
      this.max = max;
    } else {
      throw new TypeError("Fourth argument is not a number");
    }
  }

  _createClass(MainTableData, [{
    key: "getList",
    value: function getList() {
      return this.list;
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      return this.total;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this.max;
    }
  }, {
    key: "getFirst",
    value: function getFirst() {
      return this.first;
    }
  }]);

  return MainTableData;
}();

exports["default"] = MainTableData;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MainTableData =
/*#__PURE__*/
function () {
  function MainTableData(list, total, first, max) {
    _classCallCheck(this, MainTableData);

    if (Array.isArray(list)) {
      this.list = list;
    } else {
      throw new TypeError("First argument is not an array");
    }

    if (!Number.isNaN(total = parseInt(total))) {
      this.total = total;
    } else {
      throw new TypeError("Second argument is not a number");
    }

    if (!Number.isNaN(first = parseInt(first))) {
      this.first = first;
    } else {
      throw new TypeError("Third argument is not a number");
    }

    if (!Number.isNaN(max = parseInt(max))) {
      this.max = max;
    } else {
      throw new TypeError("Fourth argument is not a number");
    }
  }

  _createClass(MainTableData, [{
    key: "getList",
    value: function getList() {
      return this.list;
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      return this.total;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this.max;
    }
  }, {
    key: "getFirst",
    value: function getFirst() {
      return this.first;
    }
  }]);

  return MainTableData;
}();

exports["default"] = MainTableData;}],
[{"./template.html":61,"../../../../libs/layout/page":15},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _page = _interopRequireDefault(require("../../../../libs/layout/page"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PlainPage =
/*#__PURE__*/
function (_Page) {
  _inherits(PlainPage, _Page);

  function PlainPage() {
    _classCallCheck(this, PlainPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlainPage).apply(this, arguments));
  }

  _createClass(PlainPage, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        section: "main"
      };
    }
  }]);

  return PlainPage;
}(_page["default"]);

exports["default"] = PlainPage;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _page = _interopRequireDefault(require("../../../../libs/layout/page"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PlainPage =
/*#__PURE__*/
function (_Page) {
  _inherits(PlainPage, _Page);

  function PlainPage() {
    _classCallCheck(this, PlainPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlainPage).apply(this, arguments));
  }

  _createClass(PlainPage, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        section: "main"
      };
    }
  }]);

  return PlainPage;
}(_page["default"]);

exports["default"] = PlainPage;}],
[{"./template.html":63,"../../../../libs/layout/page":15},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _page = _interopRequireDefault(require("../../../../libs/layout/page"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BrandedPage =
/*#__PURE__*/
function (_Page) {
  _inherits(BrandedPage, _Page);

  function BrandedPage() {
    _classCallCheck(this, BrandedPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(BrandedPage).apply(this, arguments));
  }

  _createClass(BrandedPage, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        section: "main"
      };
    }
  }]);

  return BrandedPage;
}(_page["default"]);

exports["default"] = BrandedPage;}],
[{"./template.html":64,"../../../../libs/layout/component":7},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("../../../../libs/layout/component"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var inst;

var Popin =
/*#__PURE__*/
function (_Component) {
  _inherits(Popin, _Component);

  _createClass(Popin, [{
    key: "template",
    value: function template(title) {
      return (0, _template2["default"])({
        title: title
      });
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        body: ".body",
        title: "h3",
        close: ".close",
        wrapper: ".wrapper"
      };
    }
  }, {
    key: "events",
    value: function events() {
      return {
        "close click": "hide"
      };
    }
  }]);

  function Popin() {
    var _this;

    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    _classCallCheck(this, Popin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popin).call(this, title));

    _this.initHideEvents();

    return _this;
  }

  _createClass(Popin, [{
    key: "initHideEvents",
    value: function initHideEvents() {
      this.template.addEventListener("click", this.hide.bind(this));
      this.elements.wrapper[0].addEventListener("click", function (ev) {
        ev.stopPropagation();
      });
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.elements.title[0].innerText = "" + title;
      return this;
    }
  }, {
    key: "setComponent",
    value: function setComponent(comp) {
      if (comp instanceof _component["default"]) {
        this.fillComponent("body", comp);
        this.setContainer();
      }

      return this;
    }
    /**
     * @method <setPopin> set this popin as only popin wrapper on this Document body
     *    and set a component if set in parameter.
     * @param {Component} component
     */

  }, {
    key: "setPopin",
    value: function setPopin(component) {
      if (Popin.popin !== this) {
        this.setContainer(Popin.container);
        Popin.popin = this;
      }

      return this.setComponent(component);
    }
    /**
     * @method <hide> remove popin of user interface
     * @return {Component} self
     */

  }, {
    key: "hide",
    value: function hide() {
      Popin.container.removeChild(this.template);
      Popin.popin = null;
      return this;
    }
    /**
     * @function <setContainer> set the container where every popins should be
     *    filled in.
     * @param {HTMLElement|Function|String} into
     */

  }], [{
    key: "setContainer",
    value: function setContainer(into) {
      if (typeof into === "function") {
        return Popin.setContainer(into());
      }

      if (typeof into === "string") {
        into = document.querySelector(into);
      }

      if (into instanceof HTMLElement) {
        Popin.container = into;
      } else {
        Popin.container = Popin.container || document.body;
      }

      if (Popin.popin) {
        Popin.popin.setContainer(into);
      }
    }
  }, {
    key: "getInstance",
    value: function getInstance() {
      if (!inst) {
        Popin.setContainer();
        inst = new Popin();
      }

      return inst;
    }
  }]);

  return Popin;
}(_component["default"]);

exports["default"] = Popin;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _page = _interopRequireDefault(require("../../../../libs/layout/page"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BrandedPage =
/*#__PURE__*/
function (_Page) {
  _inherits(BrandedPage, _Page);

  function BrandedPage() {
    _classCallCheck(this, BrandedPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(BrandedPage).apply(this, arguments));
  }

  _createClass(BrandedPage, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        section: "main"
      };
    }
  }]);

  return BrandedPage;
}(_page["default"]);

exports["default"] = BrandedPage;}],
[{"../../../../libs/request/model":69},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("../../../../libs/request/model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TableModel =
/*#__PURE__*/
function (_Model) {
  _inherits(TableModel, _Model);

  function TableModel() {
    _classCallCheck(this, TableModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableModel).apply(this, arguments));
  }

  _createClass(TableModel, [{
    key: "getCollection",
    value: function getCollection() {
      throw new Error("This function should be overriden");
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      throw new Error("This function should be overriden");
    }
  }, {
    key: "getFirst",
    value: function getFirst() {
      return 0;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return 10;
    }
  }, {
    key: "getCurrentPage",
    value: function getCurrentPage() {
      return this.getFirst() / this.getMax();
    }
  }, {
    key: "getMaxPage",
    value: function getMaxPage() {
      return this.getTotal() / this.getMax();
    }
  }]);

  return TableModel;
}(_model["default"]);

exports["default"] = TableModel;}],
[{"./template.html":66,"../../../../libs/layout/component":7},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("../../../../libs/layout/component"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Loader =
/*#__PURE__*/
function (_Component) {
  _inherits(Loader, _Component);

  _createClass(Loader, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        content: ".content"
      };
    }
  }]);

  function Loader(promise) {
    var _this;

    _classCallCheck(this, Loader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loader).call(this));
    _this.loads = [];
    _this.errors = [];

    _this.reload(promise);

    return _this;
  }

  _createClass(Loader, [{
    key: "onLoad",
    value: function onLoad(cb) {
      if (typeof cb === "function") {
        this.loads.push(cb);
        return this;
      } else {
        throw new Error("First parameter is not a function");
      }
    }
  }, {
    key: "onError",
    value: function onError(cb) {
      if (typeof cb === "function") {
        this.errors.push(cb);
        return this;
      } else {
        throw new Error("First parameter is not a function");
      }
    }
  }, {
    key: "reload",
    value: function reload(promise) {
      var _arguments = arguments;

      if (promise instanceof Promise) {
        promise.then(this.dispatchLoad.bind(this))["catch"](this.dispatchError.bind(this));
      }

      if (typeof promise === "function") {
        var self = this;

        try {
          if (promise.length) {
            promise(function () {
              self.dispatchLoad.apply(self, _arguments);
            });
          } else {
            this.dispatchLoad(promise());
          }
        } catch (err) {
          this.dispatchError(err);
        }
      }

      this.template.setAttribute("anim", "loading");
      return this;
    }
  }, {
    key: "dispatchLoad",
    value: function dispatchLoad(component, then) {
      var _arguments2 = arguments;

      if (component instanceof _component["default"]) {
        this.component = component;
        this.fillComponent("content", component);
      }

      this.animateLoad(then);
      this.loads.forEach(function (cb) {
        cb.apply(null, _arguments2);
      });
      return this;
    }
  }, {
    key: "animateLoad",
    value: function animateLoad(then) {
      var node = this.template;
      node.setAttribute("anim", "loaded-step2");
      setTimeout(function () {
        node.setAttribute("anim", "loaded-step3");
        setTimeout(function () {
          node.removeAttribute("anim");

          if (typeof then === "function") {
            setTimeout(function () {
              then();
            }, 200);
          }
        }, 200);
      }, 200);
      return this;
    }
  }, {
    key: "animateReload",
    value: function animateReload(then) {
      var node = this.template;
      node.setAttribute("anim", "loaded-step3");
      setTimeout(function () {
        node.setAttribute("anim", "loaded-step2");
        setTimeout(function () {
          node.setAttribute("anim", "loading");

          if (typeof then === "function") {
            setTimeout(function () {
              then();
            }, 200);
          }
        }, 200);
      }, 200);
      return this;
    }
  }, {
    key: "dispatchError",
    value: function dispatchError() {
      var _arguments3 = arguments;
      this.template.removeAttribute("anim");
      this.errors.forEach(function (cb) {
        cb.apply(null, _arguments3);
      });
      return this;
    }
  }, {
    key: "isLoading",
    value: function isLoading() {
      return this.template.getAttribute("anim") === "loading";
    }
  }]);

  return Loader;
}(_component["default"]);

exports["default"] = Loader;}],
[{"./topic-template.html":67,"../routes":27,"../../../../../":2,"../../../components/action":21},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require("../../../../../"));

var _action = _interopRequireDefault(require("../../../components/action"));

var _topicTemplate = _interopRequireDefault(require("./topic-template.html"));

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ForumRead =
/*#__PURE__*/
function (_Amonite$Component) {
  _inherits(ForumRead, _Amonite$Component);

  _createClass(ForumRead, [{
    key: "template",
    value: function template(opts) {
      return (0, _topicTemplate["default"])(opts);
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        "btn-edit": ".btn-edit"
      };
    }
  }]);

  function ForumRead(id, title, message) {
    var _this;

    _classCallCheck(this, ForumRead);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForumRead).call(this, {
      title: title,
      message: message
    }));
    _this.id = id;

    _this.fillComponent("btn-edit", _this.btnEdit = new _action["default"]("Edit", _this.onEdit.bind(_assertThisInitialized(_this))));

    return _this;
  }

  _createClass(ForumRead, [{
    key: "onEdit",
    value: function onEdit() {
      _routes.edit.go({
        id: this.id
      });
    }
  }]);

  return ForumRead;
}(_["default"].Component);

exports["default"] = ForumRead;}],
[{"../../../../":2},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("../../../../");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ForumRequest =
/*#__PURE__*/
function (_Resource) {
  _inherits(ForumRequest, _Resource);

  function ForumRequest(id) {
    var _this;

    _classCallCheck(this, ForumRequest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForumRequest).call(this));
    _this.id = id;
    return _this;
  }

  _createClass(ForumRequest, [{
    key: "fetch",
    value: function fetch() {
      var self = this;
      return new Promise(function (resolve, reject) {
        ForumRequest.request("GET", "//localhost:2999/api/v1/forum/".concat(self.id)).then(function (data) {
          self.data = JSON.parse(data.responseText);
          resolve(self.data);
        })["catch"](reject);
      });
    }
  }, {
    key: "save",
    value: function save(title, message) {
      var self = this;
      return new Promise(function (resolve, reject) {
        ForumRequest.request("POST", "//localhost:2999/api/v1/forum/".concat(self.id), {
          title: title,
          message: message
        }).then(function (xhr) {
          if (xhr.status < 400) resolve();else reject();
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var self = this;
      return new Promise(function (resolve, reject) {
        ForumRequest.request("GET", "//localhost:2999/api/v1/forum/".concat(self.id, "/delete")).then(function (xhr) {
          if (xhr.status < 400) resolve();else reject();
        });
      });
    }
  }]);

  return ForumRequest;
}(_.Resource);

exports["default"] = ForumRequest;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("../../../../");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ForumRequest =
/*#__PURE__*/
function (_Resource) {
  _inherits(ForumRequest, _Resource);

  function ForumRequest(id) {
    var _this;

    _classCallCheck(this, ForumRequest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForumRequest).call(this));
    _this.id = id;
    return _this;
  }

  _createClass(ForumRequest, [{
    key: "fetch",
    value: function fetch() {
      var self = this;
      return new Promise(function (resolve, reject) {
        ForumRequest.request("GET", "//localhost:2999/api/v1/forum/".concat(self.id)).then(function (data) {
          self.data = JSON.parse(data.responseText);
          resolve(self.data);
        })["catch"](reject);
      });
    }
  }, {
    key: "save",
    value: function save(title, message) {
      var self = this;
      return new Promise(function (resolve, reject) {
        ForumRequest.request("POST", "//localhost:2999/api/v1/forum/".concat(self.id), {
          title: title,
          message: message
        }).then(function (xhr) {
          if (xhr.status < 400) resolve();else reject();
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var self = this;
      return new Promise(function (resolve, reject) {
        ForumRequest.request("GET", "//localhost:2999/api/v1/forum/".concat(self.id, "/delete")).then(function (xhr) {
          if (xhr.status < 400) resolve();else reject();
        });
      });
    }
  }]);

  return ForumRequest;
}(_.Resource);

exports["default"] = ForumRequest;}],
[{"../../../../../":2},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = _interopRequireDefault(require("../../../../../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ForumCreateValidation =
/*#__PURE__*/
function (_Amonite$Component) {
  _inherits(ForumCreateValidation, _Amonite$Component);

  function ForumCreateValidation() {
    _classCallCheck(this, ForumCreateValidation);

    return _possibleConstructorReturn(this, _getPrototypeOf(ForumCreateValidation).apply(this, arguments));
  }

  return ForumCreateValidation;
}(_["default"].Component);

exports["default"] = ForumCreateValidation;}],
[{"./template.html":68,"../../../../../libs/layout/component":7,"../empty-table":70,"../../table-data":71,"../pagination":72},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _emptyTable = _interopRequireDefault(require("../empty-table"));

var _tableData = _interopRequireDefault(require("../../table-data"));

var _component = _interopRequireDefault(require("../../../../../libs/layout/component"));

var _template2 = _interopRequireDefault(require("./template.html"));

var _pagination = _interopRequireDefault(require("../pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Wrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(Wrapper, _Component);

  _createClass(Wrapper, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])();
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        empty: ".table-empty",
        table: ".table-data",
        pagination: ".pagination"
      };
    }
  }]);

  function Wrapper(list, total, first, max, builder) {
    var _this;

    _classCallCheck(this, Wrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wrapper).call(this));

    if (Array.isArray(list) && list.length) {
      _this.clearElement("empty");

      _this.fillComponent("table", _this.table = new _tableData["default"](list, builder));

      _this.fillComponent("pagination", _this.pagination = new _pagination["default"](total, first, max));
    } else {
      _this.fillComponent("empty", _this.empty = new _emptyTable["default"]());

      _this.clearElement("table");

      _this.clearElement("pagination");
    }

    return _this;
  }

  _createClass(Wrapper, [{
    key: "onFirstPage",
    value: function onFirstPage(fn) {
      if (this.pagination) this.pagination.listen("first", fn);
      return this;
    }
  }, {
    key: "onPreviousPage",
    value: function onPreviousPage(fn) {
      if (this.pagination) this.pagination.listen("previous", fn);
      return this;
    }
  }, {
    key: "onNextPage",
    value: function onNextPage(fn) {
      if (this.pagination) this.pagination.listen("next", fn);
      return this;
    }
  }, {
    key: "onLastPage",
    value: function onLastPage(fn) {
      if (this.pagination) this.pagination.listen("last", fn);
      return this;
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(fn) {
      if (this.pagination) this.pagination.listen("change", fn);
      return this;
    }
  }]);

  return Wrapper;
}(_component["default"]);

exports["default"] = Wrapper;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<main></main>\n";
}

;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<main></main>\n";
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<main></main>\n";
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<div class=\"wrapper\">\n  <div class=\"head\">\n    <h3>".concat(options.title, "</h3>\n    <div class=\"close\"></div>\n  </div>\n  <div class=\"body\"></div>\n</div>\n");
}

;}],
[undefined,function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<main></main>\n";
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<div class=\"loader\"></div>\n<div class=\"content\"></div>\n";
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<h2>".concat(options.title, "</h2>\n<p>").concat(options.message, "</p>\n<div class=\"btn-edit\"></div>\n");
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<div class=\"table-empty\"></div>\n<div class=\"table-data\"></div>\n<div class=\"pagination\"></div>\n";
}

;}],
[{"./ajax":9,"./collection":75},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

var _collection = _interopRequireDefault(require("./collection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 *  @function <request> send a request to server using ajax, with JSON body for request and response.
 *  @param {Model} model context
 *  @param {object} options custom parameters for the request
 *  @return {Promise}
 */
function request(model, options) {
  options.uri = options.uri || options.url || model.uri || model.url || "";
  var success = options.success || options.load || model.success || model.load || null;
  var failure = options.failure || options.error || model.failure || model.error || null;
  options.success = options.load = null;
  options.failure = options.error = null;
  var prom = new Promise(function (resolve, reject) {
    (0, _ajax["default"])(options).then(function (xhr) {
      try {
        var data = JSON.parse(xhr.responseText);

        if (_typeof(data) === "object") {
          model.attributes = model.parse(data);
          resolve(xhr, model);
        } else {
          reject(xhr, model);
        }
      } catch (e) {
        reject(xhr, model);
      }
    })["catch"](function (xhr) {
      reject(xhr, model);
    });
  });

  if (Array.isArray(success)) {
    success.forEach(function (fn) {
      if (typeof fn === "function") prom.then(fn);
    });
  }

  if (typeof success === "function") {
    prom.then(success);
  }

  if (Array.isArray(failure)) {
    failure.forEach(function (fn) {
      if (typeof fn === "function") prom.then(fn);
    });
  }

  if (typeof failure === "function") {
    prom.then(failure);
  }

  return prom;
}
/**
 *  @class <Model> is an object which stock data & can be sync with a server data.
 */


var Model =
/*#__PURE__*/
function () {
  /**
   * @method <constructor> init a model with attributes in first parameter.
   * @param {object|*} attributes
   * @return {Model} self
   */
  function Model(attributes) {
    _classCallCheck(this, Model);

    this.attributes = {};

    if (typeof this["default"] === "function") {
      this.set(this["default"]());
    }

    this.set(attributes);
  }
  /**
   *  @method <get> returns model attribute
   *  @param {string} field
   *  @return {*} value
   */


  _createClass(Model, [{
    key: "get",
    value: function get(field) {
      return this.attributes[field];
    }
    /**
     *  @method <set> set model {field} attribute with {value}
     *  @param {string|object} field
     *  @param {*} value
     *  @return {Model} self
     */

  }, {
    key: "set",
    value: function set(field, value) {
      var self = this;

      if (_typeof(field) === "object") {
        Object.keys(field).forEach(function (f) {
          self.set(f, field[f]);
        });
      } else if (typeof field === "string") {
        this.attributes[field] = value;
      }

      return this;
    }
    /**
     *  @method <fetch> request sync with server, with a GET method
     *  @param {object|null} options
     *  @return {Promise}
     */

  }, {
    key: "fetch",
    value: function fetch(options) {
      if (_typeof(options) !== "object") options = {};
      options.method = options.method || this.method || "GET";
      options.data = options.body = options.post = null;
      var req = request(this, options);

      if (typeof this.parse === "function") {
        var self = this;
        req.then(function () {
          self.parse(self.attributes);
        });
      }

      return req;
    }
    /**
     *  @method <save> request sync with server, with a POST method
     *  @param {object|null} attributes to send in request body
     *  @param {object|null} options
     *  @return {Promise}
     */

  }, {
    key: "save",
    value: function save(attributes, options) {
      this.set(attributes);
      if (_typeof(options) !== "object") options = {};
      options.method = options.method || this.method || "POST";
      options.data = JSON.stringify(this.attributes);
      var req = request(this, options);
      var self = this;
      req.then(function () {
        self.parse(self.attributes);
      });
      return req;
    }
    /**
     *  @method <clean> replace attributes object by new one empty.
     */

  }, {
    key: "clean",
    value: function clean() {
      this.attributes = {};
    }
    /**
     *  @method <parse> is called when request succeeds
     *  @param {Object} raw is raw object extract from request
     *  @return {Object}
     */

  }, {
    key: "parse",
    value: function parse(raw) {
      return raw;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var result = {},
          self = this;
      Object.keys(this.attributes).forEach(function (key) {
        if (self.attributes[key] instanceof _collection["default"] || self.attributes[key] instanceof Model) {
          result[key] = self.attributes[key].toJSON();
        } else {
          result[key] = self.attributes[key];
        }
      });
      return result;
    }
  }]);

  return Model;
}();

var _default = Model;
exports["default"] = _default;}],
[{"./template.html":73,"../../../../../libs/layout/component":7},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("../../../../../libs/layout/component"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EmptyTable =
/*#__PURE__*/
function (_Component) {
  _inherits(EmptyTable, _Component);

  function EmptyTable() {
    _classCallCheck(this, EmptyTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(EmptyTable).apply(this, arguments));
  }

  _createClass(EmptyTable, [{
    key: "template",
    value: function template() {
      return (0, _template2["default"])({
        "body": "This table is empty"
      });
    }
  }]);

  return EmptyTable;
}(_component["default"]);

exports["default"] = EmptyTable;}],
[{"./template.html":74,"../../../../libs/layout/component":7},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("../../../../libs/layout/component"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TableData =
/*#__PURE__*/
function (_Component) {
  _inherits(TableData, _Component);

  function TableData() {
    _classCallCheck(this, TableData);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableData).apply(this, arguments));
  }

  _createClass(TableData, [{
    key: "template",
    value: function template(rows, builder) {
      var columns = Object.keys(builder);
      var headers = {};
      columns.forEach(function (key) {
        headers[key] = {
          label: builder[key].label
        };
      });
      return (0, _template2["default"])({
        columns: columns,
        headers: headers,
        rows: rows
      });
    }
  }]);

  return TableData;
}(_component["default"]);

exports["default"] = TableData;}],
[{"./template.html":76,"../../../../../libs/layout/component":7,"../../../modules/translate":19},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("../../../../../libs/layout/component"));

var _translate = _interopRequireDefault(require("../../../modules/translate"));

var _template2 = _interopRequireDefault(require("./template.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  _createClass(Pagination, [{
    key: "template",
    value: function template(total, first, max) {
      this.total = total;
      this.max = max || 10;
      this.first = first || 0;
      this.page = Math.floor(this.first / this.max);
      this.lastPage = Math.floor(this.total / this.max);
      return (0, _template2["default"])({
        phrase: this.getPhrase()
      });
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        first: ".first",
        prev: ".prev",
        next: ".next",
        last: ".last"
      };
    }
  }, {
    key: "events",
    value: function events() {
      return {
        "first click": "callFirst",
        "prev click": "callPrevious",
        "next click": "callNext",
        "last click": "callLast"
      };
    }
  }, {
    key: "getPhrase",
    value: function getPhrase() {
      return (0, _translate["default"])("component:main-table:pagination:stats:phrase", {
        page: this.page + 1,
        lastPage: this.lastPage + 1,
        total: this.total
      });
    }
  }]);

  function Pagination(total, first, max) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, total, first, max));

    if (_this.page === 0) {
      _this.elements.first[0].disabled = true;
      _this.elements.prev[0].disabled = true;
    }

    if (_this.page === _this.lastPage) {
      _this.elements.next[0].disabled = true;
      _this.elements.last[0].disabled = true;
    }

    return _this;
  }

  _createClass(Pagination, [{
    key: "callFirst",
    value: function callFirst() {
      if (this.page !== 0) {
        this.dispatch("change", [0]);
        this.dispatch("first");
      }

      return this;
    }
  }, {
    key: "callPrevious",
    value: function callPrevious() {
      var page = this.page - 1;
      if (page < 0) page = 0;

      if (page !== this.page) {
        this.dispatch("change", [page]);
        this.dispatch("previous");
      }

      return this;
    }
  }, {
    key: "callNext",
    value: function callNext() {
      var page = this.page + 1;
      if (page > this.lastPage) page = this.lastPage;

      if (page !== this.page) {
        this.dispatch("change", [page]);
        this.dispatch("next");
      }
    }
  }, {
    key: "callLast",
    value: function callLast() {
      if (this.page !== this.lastPage) {
        this.dispatch("change", [this.lastPage]);
        this.dispatch("last");
      }

      return this;
    }
  }]);

  return Pagination;
}(_component["default"]);

exports["default"] = Pagination;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<table>\n  <thead>\n    <th></th>\n  </thead>\n  <tbody>\n    <tr>\n      <td>\n        ".concat(options.body, "\n      </td>\n    </tr>\n  </tbody>\n</table>\n");
}

;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _default(options) {
  return "\n<table>\n  <thead>\n    <tr>\n      ".concat(options.columns.map(function (columnName) {
    var header = options.headers[columnName];
    return header ? "<th>".concat(header.label, "</th>\n") : "";
  }).join(""), "\n    </tr>\n  </thead>\n  <tbody>\n    ").concat(options.rows.map(function (row) {
    return '<tr>\n' + options.columns.map(function (columnName) {
      var cell = row[columnName];
      if (cell === undefined) cell = (_readOnlyError("cell"), "");
      return "<td>".concat(cell, "</td>\n");
    }).join("") + '</tr>\n';
  }).join(""), "\n  </tbody>\n</table>\n");
}

;}],
[{"./ajax":9,"./model":69},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 *  @function <request> send a request to server using ajax, with JSON body for request and response.
 *  @param {Collection} collection context
 *  @param {object} options custom parameters for the request
 *  @return {Promise}
 */
function request(collection, options) {
  options.uri = options.uri || options.url || collection.uri || collection.url || "";
  var success = options.success || options.load || collection.success || collection.load || null;
  var failure = options.failure || options.error || collection.failure || collection.error || null;
  options.success = options.load = null;
  options.failure = options.error = null;
  var prom = new Promise(function (resolve, reject) {
    (0, _ajax["default"])(options).then(function (xhr) {
      try {
        var data = JSON.parse(xhr.responseText);

        if (_typeof(data) === "object") {
          collection.attributes = collection.parse(data);
          resolve(xhr, collection);
        } else {
          reject(xhr, collection);
        }
      } catch (e) {
        reject(xhr, collection);
      }
    })["catch"](function (xhr) {
      reject(xhr, collection);
    });
  });

  if (Array.isArray(success)) {
    success.forEach(function (fn) {
      if (typeof fn === "function") prom.then(fn);
    });
  }

  if (typeof success === "function") {
    prom.then(success);
  }

  if (Array.isArray(failure)) {
    failure.forEach(function (fn) {
      if (typeof fn === "function") prom.then(fn);
    });
  }

  if (typeof failure === "function") {
    prom.then(failure);
  }

  return prom;
}
/**
 * @class <Collection> is an object which stock a list of Model and can be sync
 *      with a server data.
 */


var Collection =
/*#__PURE__*/
function () {
  /**
   * @method <constructor> set first parameter as list of models of this collection.
   * @param {Array.<Object|Model,>} models
   */
  function Collection(models) {
    _classCallCheck(this, Collection);

    this.models = [];
    this.set(models);
  }
  /**
   * @method <model> should be overriden in child class and should return a Model
   *    constructor.
   * @return {Model}
   */


  _createClass(Collection, [{
    key: "model",
    value: function model() {
      return _model["default"];
    }
    /**
     *  @method <get> returns model attribute
     *  @param {string} row
     *  @return {*} value
     */

  }, {
    key: "get",
    value: function get(row) {
      return this.model[row];
    }
    /**
     *  @method <set> set model {row} attribute with {value}
     *  @param {number|array} row
     *  @param {Model} value
     *  @return {Collection} this
     */

  }, {
    key: "set",
    value: function set(row, value) {
      var self = this;

      if (Array.isArray(row)) {
        this.clean();

        var _Model = this.model();

        row.forEach(function (item) {
          self.add(new _Model(item));
        });
      } else if (typeof row === "number" && value instanceof this.model) {
        this.models[row] = value;
      }

      return this;
    }
    /**
     *  @method <add> push a model at the end of the collection
     */

  }, {
    key: "add",
    value: function add(value) {
      if (value instanceof this.model()) {
        this.models.push(value);
      }

      return this;
    }
    /**
     *  @method <indexOf> returns the index of a model in this collection.
     *  @param {Model} value
     *  @return {number} -1 if not found
     */

  }, {
    key: "indexOf",
    value: function indexOf(value) {
      return this.models.indexOf(value);
    }
    /**
     *  @method <remove> splice a model in this Collection
     *  @param {Model|number} value
     *  @return {Model}
     */

  }, {
    key: "remove",
    value: function remove(value) {
      if (value instanceof this.model) value = this.models.indexOf(value);

      if (Number.isInteger(value)) {
        return this.models.splice(value, 1)[0];
      }

      return null;
    }
    /**
     *  @function <clean> empty all models contains in this collection
     */

  }, {
    key: "clean",
    value: function clean() {
      this.models = [];
    }
    /**
     *  @method <fetch> request sync with server, with a GET method
     *  @param {object|null} options
     *  @return {Promise}
     */

  }, {
    key: "fetch",
    value: function fetch(options) {
      if (_typeof(options) !== "object") options = {};
      options.method = options.method || this.method || "GET";
      options.data = options.body = options.post = null;
      var req = request(this, options);

      if (typeof this.parse === "function") {
        var self = this;
        req.then(function () {
          self.parse(self.attributes);
        });
      }

      return req;
    }
    /**
     *  @method <save> request sync with server, with a POST method
     *  @param {object|null} attributes to send in request body
     *  @param {object|null} options
     *  @return {Promise}
     */

  }, {
    key: "save",
    value: function save(attributes, options) {
      if (_typeof(options) !== "object") options = {};
      options.method = options.method || this.method || "POST";
      options.data = JSON.stringify(attributes);
      var req = request(this, options);

      if (typeof this.parse === "function") {
        var self = this;
        req.then(function () {
          self.parse(self.attributes);
        });
      }

      return req;
    }
    /**
     *  @method <parse> is called when request succeeds
     *  @param {Object} raw is raw object extract from request
     *  @return {Object}
     */

  }, {
    key: "parse",
    value: function parse(raw) {
      if (Array.isArray(raw)) {
        this.models = raw;
      }

      return raw;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var result = [];
      Object.values(this.models).forEach(function (model) {
        if (model instanceof _model["default"]) {
          result.push(model.toJSON());
        }
      });
      return result;
    }
  }]);

  return Collection;
}();

exports["default"] = Collection;}],
[{},function (require,module,exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(options) {
  return "\n<button class=\"first\">\n  <i class=\"icons-chevron-left\"></i>\n  <i class=\"icons-chevron-left\"></i>\n</button>\n<button class=\"prev\">\n  <i class=\"icons-chevron-left\"></i>\n</button>\n<div class=\"current\">".concat(options.phrase, "</div>\n<button class=\"next\">\n  <i class=\"icons-chevron-right\"></i>\n</button>\n<button class=\"last\">\n  <i class=\"icons-chevron-right\"></i>\n  <i class=\"icons-chevron-right\"></i>\n</button>\n");
}

;}]]);
