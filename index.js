(function(e,f){function r(x){return function(p){var i=x[p];if(f[i][2])return f[i][2].exports;var o={},m={exports:o},[s,h]=f[i];f[i][2]=m;h.call(o,r(s),m,o);return m.exports}}r({"":e})("")})(0, [[{"./libs/layout/component":1,"./libs/layout/event-target":2,"./libs/layout/section":3,"./libs/layout/define":4,"./libs/layout/page":5,"./libs/request/ajax":6,"./libs/request/resource":7,"./libs/router/router":8,"./libs/router/route":9},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.initAll = initAll;
Object.defineProperty(exports, "EventTarget", {
  enumerable: true,
  get: function get() {
    return _eventTarget["default"];
  }
});
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

var _eventTarget = _interopRequireDefault(require("./libs/layout/event-target"));

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
  init(function () {
    _page["default"].setContainer();

    _router["default"].listenPopstate();

    if (typeof then === "function") {
      then();
    }
  });
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
exports["default"] = Amonite;
}],[{"./event-target":2},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventTarget = _interopRequireDefault(require("./event-target"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      } else if (Array.isArray(el[name])) {
        result[name] = el[name];
      }
    });
    return result;
  } else {
    return {};
  }
}

function events(el, self, args) {
  var parent_selectors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var parent_events = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

  if (typeof el === "function") {
    if (parent_events.length) {
      var fn = function fn() {
        el.apply(self, args);
      };

      events_gettargets(parent_selectors, self).forEach(function (target) {
        parent_events.forEach(function (eventname) {
          target.addEventListener(eventname, el);
        });
      });
    } else {
      events(el.apply(self, args), self, args, parent_selectors, parent_events);
    }
  } else if (typeof el === "string" && typeof self[el] === "function") {
    events_gettargets(parent_selectors, self).forEach(function (target) {
      parent_events.forEach(function (eventname) {
        target.addEventListener(eventname, self[el].bind(self));
      });
    });
  } else if (Array.isArray(el)) {
    el.forEach(function (val) {
      return events(val, self, args, parent_selectors, parent_events);
    });
  } else if (_typeof(el) === "object") {
    Object.keys(el).forEach(function (key) {
      var _events_keysplit = events_keysplit(key),
          selectors = _events_keysplit.selectors,
          eventnames = _events_keysplit.eventnames;

      parent_selectors.forEach(function (sel) {
        return selectors.push(sel);
      });
      parent_events.forEach(function (ev) {
        return eventnames.push(ev);
      });
      events(el[key], self, args, selectors, eventnames);
    });
  }
}

function events_keysplit(key) {
  var split = key.split(/[\n\s]+/g);
  var selectors = [],
      eventnames = [];
  split.forEach(function (el) {
    if (el[0] === "@") {
      eventnames.push(el.substr(1));
    } else {
      selectors.push(el);
    }
  });
  return {
    selectors: selectors.join(' ').split(/,/g).filter(function (n) {
      return n.length;
    }),
    eventnames: eventnames.join(',').split(/,+/g).filter(function (n) {
      return n.length;
    })
  };
}

function events_gettargets(selectors, self) {
  var targets = [];
  selectors.map(function (selector) {
    if (Array.isArray(selector)) {
      return events_gettargets(selector, self);
    }

    if (Array.isArray(self.elements[selector])) {
      return self.elements[selector];
    }

    if (typeof selector === "string") {
      return _toConsumableArray(self.template.querySelectorAll(selector));
    }

    if (selector instanceof HTMLElement) {
      return selector;
    }
  }).forEach(function (found) {
    return found.filter(function (el) {
      return el instanceof HTMLElement;
    }).forEach(function (target) {
      return targets.push(target);
    });
  });
  return targets;
}

var Component = function (_EventTarget) {
  _inherits(Component, _EventTarget);

  function Component() {
    var _this2;

    var _this;

    _classCallCheck(this, Component);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "_builder", {
      "enumerable": false,
      "configurable": false,
      "value": {
        container: _this.container,
        template: _this.template,
        elements: _this.elements,
        events: _this.events
      }
    });
    _this.container = null;
    _this.template = null;
    _this.elements = [];
    _this.events = {};

    (_this2 = _this).setTemplate.apply(_this2, [null].concat(Array.prototype.slice.call(arguments)));

    if (_this._builder.container) {
      _this.setContainer(_this._builder.container);
    }

    return _this;
  }

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
    }
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
  }, {
    key: "fillComponent",
    value: function fillComponent(name, component) {
      return this.clearElement(name).appendComponent(name, component);
    }
  }, {
    key: "template",
    value: function template() {
      return "";
    }
  }, {
    key: "elements",
    value: function elements() {
      return {};
    }
  }, {
    key: "events",
    value: function events() {
      return {};
    }
  }]);

  return Component;
}(_eventTarget["default"]);

exports["default"] = Component;
}],[{},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventTarget = function () {
  function EventTarget() {
    _classCallCheck(this, EventTarget);

    Object.defineProperty(this, "__events__", {
      "enumerable": false,
      "configurable": false,
      "value": {}
    });
  }

  _createClass(EventTarget, [{
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
  }, {
    key: "dispatch",
    value: function dispatch(eventName, args) {
      var self = this;

      if (typeof eventName === "string") {
        var t = eventName.split(/[\n\s,]+/g);

        if (t.length > 1) {
          return this.dispatch(_toConsumableArray(t), args);
        }
      } else if (Array.isArray(eventName)) {
        eventName.forEach(function (ev) {
          self.dispatch(ev, args);
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
  }, {
    key: "detach",
    value: function detach(eventName, fn) {
      var self = this;

      if (typeof eventName === "string") {
        var t = eventName.split(/[\n\s,]+/g);

        if (t.length > 1) {
          return this.detach(_toConsumableArray(t), fn);
        }
      } else if (Array.isArray(eventName)) {
        eventName.forEach(function (ev) {
          self.detach(ev, fn);
        });
        return this;
      }

      if (Array.isArray(fn)) {
        fn.forEach(function (f) {
          self.detach(eventName, f);
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
        evs[eventName] = evs[eventName].splice(evs[eventName].indexOf(fn));
      }

      return this;
    }
  }, {
    key: "listenOnce",
    value: function listenOnce(eventName, fn) {
      var self = this,
          del = function del() {
        self.detach(eventName, [fn, del]);
      };

      this.listen(eventName, [fn, del]);
      return this;
    }
  }]);

  return EventTarget;
}();

exports["default"] = EventTarget;
}],[{"./component":1,"./page":5},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _page = _interopRequireDefault(require("./page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Section = function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    var _this;

    _classCallCheck(this, Section);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Section).apply(this, arguments));

    _this.template.setAttribute("section", _this.template.getAttribute("component"));

    _this.template.removeAttribute("component");

    return _this;
  }

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
  }, {
    key: "getWrapper",
    value: function getWrapper() {
      if (!this._builder.wrapper) {
        this._builder.wrapper = _page["default"].getPageByConstructor(this.wrapper());
      }

      return this._builder.wrapper;
    }
  }, {
    key: "wrapper",
    value: function wrapper() {
      return null;
    }
  }]);

  return Section;
}(_component["default"]);

exports["default"] = Section;
}],[{},function (require,module,exports) {
"use strict";

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
    new Def(node);
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

function define(nodeName, builder) {
  if (typeof nodeName !== "string") throw new Error("First parameter should be a string (to select items by node name in dom tree)");
  if (typeof builder !== "function") throw new Error("Second parameter should be a class or a function (to construct item)");
  DEFINES[nodeName.toUpperCase()] = builder;

  _toConsumableArray(document.querySelectorAll(nodeName.toUpperCase())).forEach(test);
}

var CustomHTMLElement = function CustomHTMLElement() {
  _classCallCheck(this, CustomHTMLElement);
};

exports.CustomHTMLElement = CustomHTMLElement;
}],[{"./component":1,"./section":3},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./component"));

var _section = _interopRequireDefault(require("./section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, Page.container));

    _this.template.setAttribute("page", _this.template.getAttribute("component"));

    _this.template.removeAttribute("component");

    Page.instances[_this.constructor.name] = _assertThisInitialized(_this);
    return _this;
  }

  _createClass(Page, [{
    key: "setSection",
    value: function setSection(section) {
      if (section instanceof _section["default"]) {
        this.fillComponent("section", section);
      }

      return this;
    }
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
  }, {
    key: "getCurrentPage",
    value: function getCurrentPage() {
      return Page.page;
    }
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
Page.container = null;
}],[{},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajax = exports["default"] = ajax;
exports.ajaxParameters = ajaxParameters;
exports.tryExec = tryExec;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function tryExec(fn, def, args) {
  if (typeof fn === "function") {
    return fn.apply(this, args);
  }

  if (typeof fn === "string") {
    return fn;
  }

  return def;
}
}],[{"./ajax":6},function (require,module,exports) {
"use strict";

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Resource = function () {
  function Resource() {
    _classCallCheck(this, Resource);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.commonBuilder = ajaxParameters.apply(null, args);
    this.methodsBuilder = {};
  }

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

exports.Resource = exports["default"] = Resource;
}],[{"./route":9},function (require,module,exports) {
"use strict";

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

var Router = function () {
  function Router(baseUrl, firstCall) {
    _classCallCheck(this, Router);

    this.baseUrl = baseUrl || "";
    this.firstCall = firstCall || null;
    this.routes = [];
    ROUTERS.push(this);
  }

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
  }, {
    key: "test",
    value: function test() {
      return this.routes.find(function (route) {
        return route.getArgs();
      });
    }
  }, {
    key: "callFirst",
    value: function callFirst() {
      if (typeof this.firstCall === "function") {
        this.firstCall();
        this.firstCall = null;
      }
    }
  }], [{
    key: "setDefault",
    value: function setDefault(controller) {
      defaultController = controller;
    }
  }, {
    key: "listenPopstate",
    value: function listenPopstate() {
      window.addEventListener("popstate", popstate);

      if (!launched) {
        popstate();
      }
    }
  }, {
    key: "getAll",
    value: function getAll() {
      var list = ROUTERS.map(function (router) {
        return router.routes.map(function (route) {
          return route.toString();
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
}
}],[{"./chunk":10},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chunk = _interopRequireDefault(require("./chunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var currentArgs;

var Route = function () {
  function Route(path, controller) {
    _classCallCheck(this, Route);

    this.original = path;

    if (typeof path === "string") {
      path = path.split("/");
    }

    if (Array.isArray(path)) {
      this.chunks = path.map(function (chunk) {
        return new _chunk["default"](chunk);
      });
    } else {
      throw new Error("First parameter should be a string or an Array.");
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
      var params = Array.isArray(args) ? args : [];
      var path = this.createPath(params || currentArgs);

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
  }, {
    key: "toString",
    value: function toString() {
      if (typeof this.original === "string") {
        return this.original;
      } else {
        return this.chunks.map(function (chunk) {
          return chunk.toString();
        }).join("/");
      }
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      if (rule.value) {
        res.value = rule.value;
      } else {
        if (rule.key) res.key = rule.key;
        if (rule.type) res.type = rule.type;
        if (rule.regexp) res.regexp = rule.regexp;
        if (rule.match) res.match = rule.match;
        if (rule.transform) res.transform = rule.transform;
      }
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
      if (this.rule.value !== undefined) {
        return this.rule.value;
      }

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
  }, {
    key: "toString",
    value: function toString() {
      if (typeof this.original === "string") {
        return this.original;
      }

      var val = this.rule.match && this.rule.math[0] || this.rule.type && ":" + this.rule.type || "*";

      if (this.rule.key) {
        return "".concat(this.rule.key, ":").concat(val);
      } else {
        return this.rule.value === undefined ? val : this.rule.value;
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tb2R1bGUuanMiLCIvbGlicy9sYXlvdXQvY29tcG9uZW50LmpzIiwiL2xpYnMvbGF5b3V0L2V2ZW50LXRhcmdldC5qcyIsIi9saWJzL2xheW91dC9zZWN0aW9uLmpzIiwiL2xpYnMvbGF5b3V0L2RlZmluZS5qcyIsIi9saWJzL2xheW91dC9wYWdlLmpzIiwiL2xpYnMvcmVxdWVzdC9hamF4LmpzIiwiL2xpYnMvcmVxdWVzdC9yZXNvdXJjZS5qcyIsIi9saWJzL3JvdXRlci9yb3V0ZXIuanMiLCIvbGlicy9yb3V0ZXIvcm91dGUuanMiLCIvbGlicy9yb3V0ZXIvY2h1bmsuanMiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdEFsbCIsIlBhZ2UiLCJzZXRDb250YWluZXIiLCJSb3V0ZXIiLCJsaXN0ZW5Qb3BzdGF0ZSIsIkFtb25pdGUiLCJDb21wb25lbnQiLCJTZWN0aW9uIiwiZGVmaW5lIiwiQ3VzdG9tSFRNTEVsZW1lbnQiLCJhamF4IiwiUmVzb3VyY2UiLCJSb3V0ZSIsImNvbnRhaW5lciIsImVsIiwic2VsZiIsImFyZ3MiLCJIVE1MRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBseSIsInRlbXBsYXRlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImlubmVySFRNTCIsImVsZW1lbnRzIiwiaW50byIsInJlc3VsdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiaXNBcnJheSIsImV2ZW50cyIsInBhcmVudF9zZWxlY3RvcnMiLCJwYXJlbnRfZXZlbnRzIiwibGVuZ3RoIiwiZm4iLCJldmVudHNfZ2V0dGFyZ2V0cyIsInRhcmdldCIsImV2ZW50bmFtZSIsImJpbmQiLCJ2YWwiLCJrZXkiLCJldmVudHNfa2V5c3BsaXQiLCJzZWxlY3RvcnMiLCJldmVudG5hbWVzIiwic2VsIiwicHVzaCIsImV2Iiwic3BsaXQiLCJzdWJzdHIiLCJqb2luIiwiZmlsdGVyIiwibiIsInRhcmdldHMiLCJtYXAiLCJzZWxlY3RvciIsImZvdW5kIiwiZGVmaW5lUHJvcGVydHkiLCJzZXRUZW1wbGF0ZSIsImFyZ3VtZW50cyIsIl9idWlsZGVyIiwiZG9tIiwidHBsIiwiZWxlbWVudCIsImNvbnQiLCJhcHBlbmRDaGlsZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsIkVycm9yIiwiY29tcG9uZW50IiwiY2xlYXJFbGVtZW50IiwiYXBwZW5kQ29tcG9uZW50IiwiRXZlbnRUYXJnZXQiLCJldmVudE5hbWUiLCJ0IiwibGlzdGVuIiwiZiIsImV2cyIsImRpc3BhdGNoIiwiZGV0YWNoIiwidW5kZWZpbmVkIiwic3BsaWNlIiwiaW5kZXhPZiIsImRlbCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInBhZ2UiLCJnZXRXcmFwcGVyIiwic2V0UGFnZSIsIndyYXBwZXIiLCJnZXRQYWdlQnlDb25zdHJ1Y3RvciIsImdldEN1c3RvbUNoaWxkcmVuIiwibm9kZSIsIkRFRklORVMiLCJ0b1VwcGVyQ2FzZSIsInRlc3QiLCJEZWYiLCJub2RlTmFtZSIsIkRFRklORUQiLCJjaGlsZHJlbiIsImNoaWxkIiwiX2NoaWxkIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiY2hpbGROb2RlcyIsIm9ubG9hZCIsIm1vIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiYWRkZWROb2RlcyIsImNuZiIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsIm9ic2VydmUiLCJidWlsZGVyIiwiaW5zdGFuY2VzIiwic2VjdGlvbiIsImZpbGxDb21wb25lbnQiLCJzZXRTZWN0aW9uIiwiYm9keSIsIkNvbnN0ciIsImluc3QiLCJhamF4UGFyYW1ldGVycyIsInByb20iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiZXJyIiwibWV0aG9kIiwidXJpIiwib3BlbiIsImhlYWRlcnMiLCJzdHIiLCJ0cnlFeGVjIiwic2V0UmVxdWVzdEhlYWRlciIsIm92ZXJyaWRlTWltZVR5cGUiLCJzZW5kIiwiZGF0YSIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwidXJsIiwiZmlsZSIsInNvdXJjZSIsInBvc3QiLCJsb2FkIiwiZXJyb3IiLCJjYWxsIiwiZGVmIiwibWVyZ2UiLCJzaGlmdCIsImNvbmNhdCIsImFzc2lnbiIsImNvbW1vbkJ1aWxkZXIiLCJtZXRob2RzQnVpbGRlciIsIlJPVVRFUlMiLCJkZWZhdWx0Q29udHJvbGxlciIsImxhdW5jaGVkIiwiciIsImJhc2VVcmwiLCJmaXJzdENhbGwiLCJyb3V0ZXMiLCJyb3V0ZSIsImNvbnRyb2xsZXIiLCJnZXRBcmdzIiwiY2FsbEZpcnN0IiwiZ28iLCJjdXJyZW50IiwiZmluZCIsInBvcHN0YXRlIiwibGlzdCIsInJvdXRlciIsInRvU3RyaW5nIiwiZmxhdCIsInVuc2hpZnQiLCJydW4iLCJjdXJyZW50QXJncyIsInBhdGgiLCJvcmlnaW5hbCIsImNodW5rcyIsImNodW5rIiwiQ2h1bmsiLCJub0VuZCIsImZvcmNlIiwicGFyYW1zIiwiY3JlYXRlUGF0aCIsImdldEJyb3dzZXJSZXF1ZXN0Iiwic2V0QnJvd3NlclJlcXVlc3QiLCJpdGVtcyIsImkiLCJpdGVtIiwicmVzIiwiZXh0cmFjdEFyZ3MiLCJwb3AiLCJ2YWx1ZSIsInNsaWNlIiwiZSIsImxvY2F0aW9uIiwiaGFzaCIsIkNodW5rRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInByZXZpb3VzIiwic3RhY2siLCJGT1JNQVRTIiwibnVtYmVyIiwicGFyc2VGbG9hdCIsImlzTmFOIiwiaW50ZWdlciIsInBhcnNlSW50Iiwic3RyaW5nIiwicyIsIkpTT04iLCJwYXJzZSIsImpzb24iLCJvIiwianNvbmFycmF5IiwianNvbm9iamVjdCIsImIiLCJhbnkiLCJ1dWlkIiwibWF0Y2giLCJkYXRlIiwiRGF0ZSIsInRpbWUiLCJkdCIsInNldEhvdXJzIiwic2V0TWludXRlcyIsInNldFNlY29uZHMiLCJzZXRNaWxsaXNlY29uZHMiLCJkYXRldGltZSIsImpzb25kYXRlIiwiaW50ZWdlcmRhdGUiLCJpc09iamVjdCIsInJ1bGVUb09iamVjdCIsInJ1bGUiLCJSZWdFeHAiLCJyZWdleHAiLCJ0eXBlIiwidHJhbnNmb3JtIiwidGVzdFZhbHVlIiwibSIsImluZGV4IiwiVHlwZUVycm9yIiwibWF0Y2hlciIsIm1hdGNoZXJzIiwibWF0aCIsImZvcm1hdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ25CLE1BQUksT0FBT0EsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QixRQUFJQyxRQUFRLENBQUNDLFVBQVQsS0FBd0IsVUFBNUIsRUFBd0M7QUFDdENGLFVBQUk7QUFDTCxLQUZELE1BRU87QUFDTEcsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQ0osSUFBaEM7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBU0ssT0FBVCxDQUFrQkwsSUFBbEIsRUFBd0I7QUFDdEJELE1BQUksQ0FBQyxZQUFNO0FBQ1RPLHFCQUFLQyxZQUFMOztBQUNBQyx1QkFBT0MsY0FBUDs7QUFDQSxRQUFJLE9BQU9ULElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDOUJBLFVBQUk7QUFDTDtBQUNGLEdBTkcsQ0FBSjtBQU9EOztBQUVELElBQU1VLE9BQU8sR0FBRztBQUNkQyxXQUFTLEVBQVRBLHFCQURjO0FBRWRDLFNBQU8sRUFBUEEsbUJBRmM7QUFHZE4sTUFBSSxFQUFKQSxnQkFIYztBQUlkTyxRQUFNLEVBQU5BLGNBSmM7QUFLZEMsbUJBQWlCLEVBQWpCQSx5QkFMYztBQU9kQyxNQUFJLEVBQUpBLGdCQVBjO0FBUWRDLFVBQVEsRUFBUkEsb0JBUmM7QUFVZFIsUUFBTSxFQUFOQSxrQkFWYztBQVdkUyxPQUFLLEVBQUxBLGlCQVhjO0FBYWRsQixNQUFJLEVBQUpBLElBYmM7QUFjZE0sU0FBTyxFQUFQQTtBQWRjLENBQWhCOzs7Ozs7Ozs7O0FDaENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFNBQVNhLFNBQVQsQ0FBb0JDLEVBQXBCLEVBQXdCQyxJQUF4QixFQUE4QkMsSUFBOUIsRUFBb0M7QUFDbEMsTUFBSUYsRUFBRSxZQUFZRyxXQUFsQixFQUErQjtBQUM3QixXQUFPSCxFQUFQO0FBQ0QsR0FGRCxNQUdLLElBQUksT0FBT0EsRUFBUCxLQUFjLFFBQWxCLEVBQTRCO0FBQy9CLFdBQU9ELFNBQVMsQ0FBQ2pCLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUJKLEVBQXZCLENBQUQsRUFBNkJDLElBQTdCLEVBQW1DQyxJQUFuQyxDQUFoQjtBQUNELEdBRkksTUFHQSxJQUFJLE9BQU9GLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUNqQyxXQUFPRCxTQUFTLENBQUNDLEVBQUUsQ0FBQ0ssS0FBSCxDQUFTSixJQUFULEVBQWVDLElBQWYsQ0FBRCxFQUF1QkQsSUFBdkIsRUFBNkJDLElBQTdCLENBQWhCO0FBQ0QsR0FGSSxNQUdBO0FBQ0gsV0FBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTSSxRQUFULENBQW1CTixFQUFuQixFQUF1QkMsSUFBdkIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQ2pDLE1BQUlGLEVBQUUsWUFBWUcsV0FBbEIsRUFBK0I7QUFDN0IsV0FBT0gsRUFBUDtBQUNELEdBRkQsTUFHSyxJQUFJLE9BQU9BLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUNqQyxXQUFPTSxRQUFRLENBQUNOLEVBQUUsQ0FBQ0ssS0FBSCxDQUFTSixJQUFULEVBQWVDLElBQWYsQ0FBRCxFQUF1QkQsSUFBdkIsRUFBNkJDLElBQTdCLENBQWY7QUFDRCxHQUZJLE1BR0E7QUFDSCxRQUFNSyxHQUFHLEdBQUd6QixRQUFRLENBQUMwQixhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsT0FBRyxDQUFDRSxZQUFKLENBQWlCLFdBQWpCLEVBQThCUixJQUFJLENBQUNTLFdBQUwsQ0FBaUJDLElBQS9DOztBQUNBLFFBQUksT0FBT1gsRUFBUCxLQUFjLFFBQWxCLEVBQTRCO0FBQzFCTyxTQUFHLENBQUNLLFNBQUosR0FBZ0JaLEVBQWhCO0FBQ0Q7O0FBQ0QsV0FBT08sR0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU00sUUFBVCxDQUFtQmIsRUFBbkIsRUFBdUJDLElBQXZCLEVBQTZCQyxJQUE3QixFQUFtQztBQUNqQyxNQUFNWSxJQUFJLEdBQUdiLElBQUksQ0FBQ0ssUUFBbEI7O0FBQ0EsTUFBSSxPQUFPTixFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsV0FBT2EsUUFBUSxDQUFDYixFQUFFLENBQUNLLEtBQUgsQ0FBU0osSUFBVCxFQUFlQyxJQUFmLENBQUQsRUFBdUJELElBQXZCLEVBQTZCQyxJQUE3QixDQUFmO0FBQ0QsR0FGRCxNQUdLLElBQUssUUFBT0YsRUFBUCxNQUFjLFFBQWYsSUFBOEJjLElBQUQsWUFBa0JYLFdBQW5ELEVBQWlFO0FBQ3BFLFFBQU1ZLE1BQU0sR0FBRyxFQUFmO0FBQ0FDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZakIsRUFBWixFQUFnQmtCLE9BQWhCLENBQXdCLFVBQUNQLElBQUQsRUFBVTtBQUNoQyxVQUFJWCxFQUFFLENBQUNXLElBQUQsQ0FBRixZQUFvQlIsV0FBeEIsRUFBcUM7QUFDbkNZLGNBQU0sQ0FBQ0osSUFBRCxDQUFOLEdBQWUsQ0FBQ1gsRUFBRSxDQUFDVyxJQUFELENBQUgsQ0FBZjtBQUNEOztBQUNELFVBQUksT0FBT1gsRUFBRSxDQUFDVyxJQUFELENBQVQsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaENJLGNBQU0sQ0FBQ0osSUFBRCxDQUFOLHNCQUFtQkcsSUFBSSxDQUFDSyxnQkFBTCxDQUFzQm5CLEVBQUUsQ0FBQ1csSUFBRCxDQUF4QixDQUFuQjtBQUNELE9BRkQsTUFHSyxJQUFJUyxLQUFLLENBQUNDLE9BQU4sQ0FBY3JCLEVBQUUsQ0FBQ1csSUFBRCxDQUFoQixDQUFKLEVBQTZCO0FBQ2hDSSxjQUFNLENBQUNKLElBQUQsQ0FBTixHQUFlWCxFQUFFLENBQUNXLElBQUQsQ0FBakI7QUFDRDtBQUNGLEtBVkQ7QUFXQSxXQUFPSSxNQUFQO0FBQ0QsR0FkSSxNQWVBO0FBQ0gsV0FBTyxFQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTTyxNQUFULENBQWlCdEIsRUFBakIsRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUE0RTtBQUFBLE1BQTNDcUIsZ0JBQTJDLHVFQUF4QixFQUF3QjtBQUFBLE1BQXBCQyxhQUFvQix1RUFBSixFQUFJOztBQUMxRSxNQUFJLE9BQU94QixFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsUUFBSXdCLGFBQWEsQ0FBQ0MsTUFBbEIsRUFBMEI7QUFDeEIsVUFBTUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBWTtBQUNyQjFCLFVBQUUsQ0FBQ0ssS0FBSCxDQUFTSixJQUFULEVBQWVDLElBQWY7QUFDRCxPQUZEOztBQUdBeUIsdUJBQWlCLENBQUNKLGdCQUFELEVBQW1CdEIsSUFBbkIsQ0FBakIsQ0FBMENpQixPQUExQyxDQUFrRCxVQUFBVSxNQUFNLEVBQUk7QUFDMURKLHFCQUFhLENBQUNOLE9BQWQsQ0FBc0IsVUFBQVcsU0FBUyxFQUFJO0FBQ2pDRCxnQkFBTSxDQUFDM0MsZ0JBQVAsQ0FBd0I0QyxTQUF4QixFQUFtQzdCLEVBQW5DO0FBQ0QsU0FGRDtBQUdELE9BSkQ7QUFLRCxLQVRELE1BU087QUFDTHNCLFlBQU0sQ0FBQ3RCLEVBQUUsQ0FBQ0ssS0FBSCxDQUFTSixJQUFULEVBQWVDLElBQWYsQ0FBRCxFQUF1QkQsSUFBdkIsRUFBNkJDLElBQTdCLEVBQW1DcUIsZ0JBQW5DLEVBQXFEQyxhQUFyRCxDQUFOO0FBQ0Q7QUFDRixHQWJELE1BY0ssSUFBSSxPQUFPeEIsRUFBUCxLQUFjLFFBQWQsSUFBMEIsT0FBT0MsSUFBSSxDQUFDRCxFQUFELENBQVgsS0FBb0IsVUFBbEQsRUFBOEQ7QUFDakUyQixxQkFBaUIsQ0FBQ0osZ0JBQUQsRUFBbUJ0QixJQUFuQixDQUFqQixDQUEwQ2lCLE9BQTFDLENBQWtELFVBQUFVLE1BQU0sRUFBSTtBQUMxREosbUJBQWEsQ0FBQ04sT0FBZCxDQUFzQixVQUFBVyxTQUFTLEVBQUk7QUFDakNELGNBQU0sQ0FBQzNDLGdCQUFQLENBQXdCNEMsU0FBeEIsRUFBbUM1QixJQUFJLENBQUNELEVBQUQsQ0FBSixDQUFTOEIsSUFBVCxDQUFjN0IsSUFBZCxDQUFuQztBQUNELE9BRkQ7QUFHRCxLQUpEO0FBS0QsR0FOSSxNQU9BLElBQUltQixLQUFLLENBQUNDLE9BQU4sQ0FBY3JCLEVBQWQsQ0FBSixFQUF1QjtBQUMxQkEsTUFBRSxDQUFDa0IsT0FBSCxDQUFXLFVBQUFhLEdBQUc7QUFBQSxhQUFJVCxNQUFNLENBQUNTLEdBQUQsRUFBTTlCLElBQU4sRUFBWUMsSUFBWixFQUFrQnFCLGdCQUFsQixFQUFvQ0MsYUFBcEMsQ0FBVjtBQUFBLEtBQWQ7QUFDRCxHQUZJLE1BR0EsSUFBSSxRQUFPeEIsRUFBUCxNQUFjLFFBQWxCLEVBQTRCO0FBQy9CZ0IsVUFBTSxDQUFDQyxJQUFQLENBQVlqQixFQUFaLEVBQWdCa0IsT0FBaEIsQ0FBd0IsVUFBQWMsR0FBRyxFQUFJO0FBQUEsNkJBQ0dDLGVBQWUsQ0FBQ0QsR0FBRCxDQURsQjtBQUFBLFVBQ3RCRSxTQURzQixvQkFDdEJBLFNBRHNCO0FBQUEsVUFDWEMsVUFEVyxvQkFDWEEsVUFEVzs7QUFFN0JaLHNCQUFnQixDQUFDTCxPQUFqQixDQUF5QixVQUFBa0IsR0FBRztBQUFBLGVBQUlGLFNBQVMsQ0FBQ0csSUFBVixDQUFlRCxHQUFmLENBQUo7QUFBQSxPQUE1QjtBQUNBWixtQkFBYSxDQUFDTixPQUFkLENBQXNCLFVBQUFvQixFQUFFO0FBQUEsZUFBSUgsVUFBVSxDQUFDRSxJQUFYLENBQWdCQyxFQUFoQixDQUFKO0FBQUEsT0FBeEI7QUFDQWhCLFlBQU0sQ0FBQ3RCLEVBQUUsQ0FBQ2dDLEdBQUQsQ0FBSCxFQUFVL0IsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0JnQyxTQUF0QixFQUFpQ0MsVUFBakMsQ0FBTjtBQUNELEtBTEQ7QUFNRDtBQUNGOztBQUVELFNBQVNGLGVBQVQsQ0FBMEJELEdBQTFCLEVBQStCO0FBQzdCLE1BQU1PLEtBQUssR0FBR1AsR0FBRyxDQUFDTyxLQUFKLENBQVUsVUFBVixDQUFkO0FBQ0EsTUFBTUwsU0FBUyxHQUFHLEVBQWxCO0FBQUEsTUFBc0JDLFVBQVUsR0FBRyxFQUFuQztBQUNBSSxPQUFLLENBQUNyQixPQUFOLENBQWMsVUFBQWxCLEVBQUUsRUFBSTtBQUNsQixRQUFJQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsR0FBZCxFQUFtQjtBQUNqQm1DLGdCQUFVLENBQUNFLElBQVgsQ0FBZ0JyQyxFQUFFLENBQUN3QyxNQUFILENBQVUsQ0FBVixDQUFoQjtBQUNELEtBRkQsTUFFTztBQUNMTixlQUFTLENBQUNHLElBQVYsQ0FBZXJDLEVBQWY7QUFDRDtBQUNGLEdBTkQ7QUFPQSxTQUFPO0FBQ0xrQyxhQUFTLEVBQUVBLFNBQVMsQ0FBQ08sSUFBVixDQUFlLEdBQWYsRUFBb0JGLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDRyxNQUFoQyxDQUF1QyxVQUFBQyxDQUFDO0FBQUEsYUFBRUEsQ0FBQyxDQUFDbEIsTUFBSjtBQUFBLEtBQXhDLENBRE47QUFFTFUsY0FBVSxFQUFFQSxVQUFVLENBQUNNLElBQVgsQ0FBZ0IsR0FBaEIsRUFBcUJGLEtBQXJCLENBQTJCLEtBQTNCLEVBQWtDRyxNQUFsQyxDQUF5QyxVQUFBQyxDQUFDO0FBQUEsYUFBRUEsQ0FBQyxDQUFDbEIsTUFBSjtBQUFBLEtBQTFDO0FBRlAsR0FBUDtBQUlEOztBQUVELFNBQVNFLGlCQUFULENBQTJCTyxTQUEzQixFQUFzQ2pDLElBQXRDLEVBQTRDO0FBQzFDLE1BQU0yQyxPQUFPLEdBQUcsRUFBaEI7QUFFQVYsV0FBUyxDQUFDVyxHQUFWLENBQWMsVUFBQUMsUUFBUSxFQUFJO0FBQ3hCLFFBQUkxQixLQUFLLENBQUNDLE9BQU4sQ0FBY3lCLFFBQWQsQ0FBSixFQUE2QjtBQUMzQixhQUFPbkIsaUJBQWlCLENBQUNtQixRQUFELEVBQVc3QyxJQUFYLENBQXhCO0FBQ0Q7O0FBQ0QsUUFBSW1CLEtBQUssQ0FBQ0MsT0FBTixDQUFjcEIsSUFBSSxDQUFDWSxRQUFMLENBQWNpQyxRQUFkLENBQWQsQ0FBSixFQUE0QztBQUMxQyxhQUFPN0MsSUFBSSxDQUFDWSxRQUFMLENBQWNpQyxRQUFkLENBQVA7QUFDRDs7QUFDRCxRQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsZ0NBQVc3QyxJQUFJLENBQUNLLFFBQUwsQ0FBY2EsZ0JBQWQsQ0FBK0IyQixRQUEvQixDQUFYO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxZQUFZM0MsV0FBeEIsRUFBcUM7QUFDbkMsYUFBTzJDLFFBQVA7QUFDRDtBQUNGLEdBYkQsRUFhRzVCLE9BYkgsQ0FhVyxVQUFBNkIsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0wsTUFBTixDQUFhLFVBQUExQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxZQUFZRyxXQUFsQjtBQUFBLEtBQWYsRUFBOENlLE9BQTlDLENBQXNELFVBQUFVLE1BQU07QUFBQSxhQUFJZ0IsT0FBTyxDQUFDUCxJQUFSLENBQWFULE1BQWIsQ0FBSjtBQUFBLEtBQTVELENBQUo7QUFBQSxHQWJoQjtBQWVBLFNBQU9nQixPQUFQO0FBQ0Q7O0lBU29CcEQsUzs7O0FBU25CLHVCQUFlO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2I7QUFFQXdCLFVBQU0sQ0FBQ2dDLGNBQVAsZ0NBQTRCLFVBQTVCLEVBQXdDO0FBQ3RDLG9CQUFjLEtBRHdCO0FBRXRDLHNCQUFnQixLQUZzQjtBQUd0QyxlQUFTO0FBQ1BqRCxpQkFBUyxFQUFFLE1BQUtBLFNBRFQ7QUFFUE8sZ0JBQVEsRUFBRSxNQUFLQSxRQUZSO0FBR1BPLGdCQUFRLEVBQUUsTUFBS0EsUUFIUjtBQUlQUyxjQUFNLEVBQUUsTUFBS0E7QUFKTjtBQUg2QixLQUF4QztBQVlBLFVBQUt2QixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsVUFBS08sUUFBTCxHQUFnQixJQUFoQjtBQUNBLFVBQUtPLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxVQUFLUyxNQUFMLEdBQWMsRUFBZDs7QUFFQSxxQkFBSzJCLFdBQUwsZ0JBQXFCLElBQXJCLG9DQUE4QkMsU0FBOUI7O0FBRUEsUUFBSSxNQUFLQyxRQUFMLENBQWNwRCxTQUFsQixFQUE2QjtBQUMzQixZQUFLWCxZQUFMLENBQWtCLE1BQUsrRCxRQUFMLENBQWNwRCxTQUFoQztBQUNEOztBQXhCWTtBQXlCZDs7OztrQ0FXYztBQUFBLDRDQUNjbUQsU0FEZDtBQUFBLFVBQ05FLEdBRE07QUFBQSxVQUNFbEQsSUFERjtBQUFBLFVBRVhtRCxHQUZXLEdBRUwvQyxRQUFRLENBQUM4QyxHQUFHLElBQUksS0FBS0QsUUFBTCxDQUFjN0MsUUFBdEIsRUFBZ0MsSUFBaEMsRUFBc0NKLElBQXRDLENBRkg7O0FBR2IsVUFBSW1ELEdBQUcsWUFBWWxELFdBQW5CLEVBQWdDO0FBQzlCLGFBQUtHLFFBQUwsR0FBZ0IrQyxHQUFoQjtBQUNBLGFBQUt4QyxRQUFMLEdBQWdCQSxRQUFRLENBQUMsS0FBS3NDLFFBQUwsQ0FBY3RDLFFBQWYsRUFBeUIsSUFBekIsRUFBK0JYLElBQS9CLENBQXhCO0FBQ0FvQixjQUFNLENBQUMsS0FBSzZCLFFBQUwsQ0FBYzdCLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkJwQixJQUE3QixDQUFOO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztpQ0FVYW9ELE8sRUFBUztBQUNyQixVQUFNQyxJQUFJLEdBQUd4RCxTQUFTLENBQUN1RCxPQUFELEVBQVUsSUFBVixFQUFnQkosU0FBaEIsQ0FBdEI7O0FBQ0EsVUFBSUssSUFBSSxZQUFZcEQsV0FBcEIsRUFBaUM7QUFDL0IsYUFBS0osU0FBTCxHQUFpQndELElBQWpCOztBQUNBLFlBQUksS0FBS2pELFFBQUwsWUFBeUJILFdBQTdCLEVBQTBDO0FBQ3hDLGVBQUtKLFNBQUwsQ0FBZXlELFdBQWYsQ0FBMkIsS0FBS2xELFFBQWhDO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPLElBQVA7QUFDRDs7O2lDQVlhSyxJLEVBQU07QUFBQTs7QUFDbEIsVUFBSTJDLE9BQUo7O0FBQ0EsVUFBSSxLQUFLekMsUUFBTCxDQUFjRixJQUFkLDRCQUFvQyxLQUFLRSxRQUFMLENBQWNGLElBQWQsQ0FBcEMsaUVBQXlCMkMsT0FBekIsZ0RBQUosRUFBOEQ7QUFDNUQsZUFBT0EsT0FBTyxDQUFDRyxVQUFmO0FBQ0VILGlCQUFPLENBQUNJLFdBQVIsQ0FBb0JKLE9BQU8sQ0FBQ0csVUFBNUI7QUFERjs7QUFFQSxlQUFPLElBQVA7QUFDRCxPQUpELE1BS0s7QUFDSCxjQUFNLElBQUlFLEtBQUoscUJBQXNCaEQsSUFBdEIsNENBQU47QUFDRDtBQUNGOzs7b0NBWWdCQSxJLEVBQU1pRCxTLEVBQVc7QUFBQTs7QUFDaEMsVUFBSU4sT0FBSjs7QUFDQSxVQUFJLEtBQUt6QyxRQUFMLENBQWNGLElBQWQsNkJBQW9DLEtBQUtFLFFBQUwsQ0FBY0YsSUFBZCxDQUFwQyxrRUFBeUIyQyxPQUF6QixpREFBSixFQUE4RDtBQUM1RCxZQUFJTSxTQUFTLFlBQVlwRSxTQUF6QixFQUFvQztBQUNsQ29FLG1CQUFTLENBQUN4RSxZQUFWLENBQXVCa0UsT0FBdkI7QUFDQSxpQkFBTyxJQUFQO0FBQ0QsU0FIRCxNQUlLO0FBQ0gsZ0JBQU0sSUFBSUssS0FBSixDQUFVLDRDQUFWLENBQU47QUFDRDtBQUNGLE9BUkQsTUFTSztBQUNILGNBQU0sSUFBSUEsS0FBSixxQkFBc0JoRCxJQUF0Qiw0Q0FBTjtBQUNEO0FBQ0Y7OztrQ0FhY0EsSSxFQUFNaUQsUyxFQUFXO0FBQzlCLGFBQU8sS0FBS0MsWUFBTCxDQUFrQmxELElBQWxCLEVBQXdCbUQsZUFBeEIsQ0FBd0NuRCxJQUF4QyxFQUE4Q2lELFNBQTlDLENBQVA7QUFDRDs7OytCQVlXO0FBQ1YsYUFBTyxFQUFQO0FBQ0Q7OzsrQkFZVztBQUNWLGFBQU8sRUFBUDtBQUNEOzs7NkJBV1M7QUFDUixhQUFPLEVBQVA7QUFDRDs7OztFQWpMb0NHLHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDM0lsQkEsVztBQUNuQix5QkFBZTtBQUFBOztBQUNiL0MsVUFBTSxDQUFDZ0MsY0FBUCxDQUFzQixJQUF0QixFQUE0QixZQUE1QixFQUEwQztBQUN4QyxvQkFBYyxLQUQwQjtBQUV4QyxzQkFBZ0IsS0FGd0I7QUFHeEMsZUFBUztBQUgrQixLQUExQztBQUtEOzs7OzJCQVdPZ0IsUyxFQUFXdEMsRSxFQUFJO0FBQ3JCLFVBQU16QixJQUFJLEdBQUcsSUFBYjs7QUFDQSxVQUFJLE9BQU8rRCxTQUFQLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLFlBQU1DLENBQUMsR0FBR0QsU0FBUyxDQUFDekIsS0FBVixDQUFnQixXQUFoQixDQUFWOztBQUNBLFlBQUkwQixDQUFDLENBQUN4QyxNQUFGLEdBQVcsQ0FBZixFQUFrQjtBQUNoQixpQkFBTyxLQUFLeUMsTUFBTCxvQkFBZ0JELENBQWhCLEdBQW9CdkMsRUFBcEIsQ0FBUDtBQUNEO0FBQ0YsT0FMRCxNQU1LLElBQUlOLEtBQUssQ0FBQ0MsT0FBTixDQUFjMkMsU0FBZCxDQUFKLEVBQThCO0FBQ2pDQSxpQkFBUyxDQUFDOUMsT0FBVixDQUFrQixVQUFDb0IsRUFBRCxFQUFRO0FBQ3hCckMsY0FBSSxDQUFDaUUsTUFBTCxDQUFZNUIsRUFBWixFQUFnQlosRUFBaEI7QUFDRCxTQUZEO0FBR0EsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsVUFBSU4sS0FBSyxDQUFDQyxPQUFOLENBQWNLLEVBQWQsQ0FBSixFQUF1QjtBQUNyQkEsVUFBRSxDQUFDUixPQUFILENBQVcsVUFBQ2lELENBQUQsRUFBTztBQUNoQmxFLGNBQUksQ0FBQ2lFLE1BQUwsQ0FBWUYsU0FBWixFQUF1QkcsQ0FBdkI7QUFDRCxTQUZEO0FBR0EsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSSxPQUFPekMsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCLFlBQU0wQyxHQUFHLEdBQUcsS0FBSyxZQUFMLENBQVo7O0FBQ0EsWUFBSSxDQUFDaEQsS0FBSyxDQUFDQyxPQUFOLENBQWMrQyxHQUFHLENBQUNKLFNBQUQsQ0FBakIsQ0FBTCxFQUFvQztBQUNsQ0ksYUFBRyxDQUFDSixTQUFELENBQUgsR0FBaUIsRUFBakI7QUFDRDs7QUFDREksV0FBRyxDQUFDSixTQUFELENBQUgsQ0FBZTNCLElBQWYsQ0FBb0JYLEVBQXBCO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFXU3NDLFMsRUFBVzlELEksRUFBTTtBQUN6QixVQUFNRCxJQUFJLEdBQUcsSUFBYjs7QUFDQSxVQUFJLE9BQU8rRCxTQUFQLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLFlBQU1DLENBQUMsR0FBR0QsU0FBUyxDQUFDekIsS0FBVixDQUFnQixXQUFoQixDQUFWOztBQUNBLFlBQUkwQixDQUFDLENBQUN4QyxNQUFGLEdBQVcsQ0FBZixFQUFrQjtBQUNoQixpQkFBTyxLQUFLNEMsUUFBTCxvQkFBa0JKLENBQWxCLEdBQXNCL0QsSUFBdEIsQ0FBUDtBQUNEO0FBQ0YsT0FMRCxNQU1LLElBQUlrQixLQUFLLENBQUNDLE9BQU4sQ0FBYzJDLFNBQWQsQ0FBSixFQUE4QjtBQUNqQ0EsaUJBQVMsQ0FBQzlDLE9BQVYsQ0FBa0IsVUFBQ29CLEVBQUQsRUFBUTtBQUN4QnJDLGNBQUksQ0FBQ29FLFFBQUwsQ0FBYy9CLEVBQWQsRUFBa0JwQyxJQUFsQjtBQUNELFNBRkQ7QUFHQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNa0UsR0FBRyxHQUFHLEtBQUssWUFBTCxDQUFaOztBQUNBLFVBQUksQ0FBQ2hELEtBQUssQ0FBQ0MsT0FBTixDQUFjK0MsR0FBRyxDQUFDSixTQUFELENBQWpCLENBQUwsRUFBb0M7QUFDbENJLFdBQUcsQ0FBQ0osU0FBRCxDQUFILEdBQWlCLEVBQWpCO0FBQ0Q7O0FBQ0RJLFNBQUcsQ0FBQ0osU0FBRCxDQUFILENBQWU5QyxPQUFmLENBQXVCLFVBQUNRLEVBQUQsRUFBUTtBQUM3QixZQUFJTixLQUFLLENBQUNDLE9BQU4sQ0FBY25CLElBQWQsQ0FBSixFQUF5QjtBQUN2QndCLFlBQUUsQ0FBQ3JCLEtBQUgsQ0FBUyxJQUFULEVBQWVILElBQWY7QUFDRCxTQUZELE1BR0s7QUFDSHdCLFlBQUU7QUFDSDtBQUNGLE9BUEQ7QUFRQSxhQUFPLElBQVA7QUFDRDs7OzJCQVdPc0MsUyxFQUFXdEMsRSxFQUFJO0FBQ3JCLFVBQU16QixJQUFJLEdBQUcsSUFBYjs7QUFDQSxVQUFJLE9BQU8rRCxTQUFQLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLFlBQU1DLENBQUMsR0FBR0QsU0FBUyxDQUFDekIsS0FBVixDQUFnQixXQUFoQixDQUFWOztBQUNBLFlBQUkwQixDQUFDLENBQUN4QyxNQUFGLEdBQVcsQ0FBZixFQUFrQjtBQUNoQixpQkFBTyxLQUFLNkMsTUFBTCxvQkFBZ0JMLENBQWhCLEdBQW9CdkMsRUFBcEIsQ0FBUDtBQUNEO0FBQ0YsT0FMRCxNQU1LLElBQUlOLEtBQUssQ0FBQ0MsT0FBTixDQUFjMkMsU0FBZCxDQUFKLEVBQThCO0FBQ2pDQSxpQkFBUyxDQUFDOUMsT0FBVixDQUFrQixVQUFDb0IsRUFBRCxFQUFRO0FBQ3hCckMsY0FBSSxDQUFDcUUsTUFBTCxDQUFZaEMsRUFBWixFQUFnQlosRUFBaEI7QUFDRCxTQUZEO0FBR0EsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsVUFBSU4sS0FBSyxDQUFDQyxPQUFOLENBQWNLLEVBQWQsQ0FBSixFQUF1QjtBQUNyQkEsVUFBRSxDQUFDUixPQUFILENBQVcsVUFBQ2lELENBQUQsRUFBTztBQUNoQmxFLGNBQUksQ0FBQ3FFLE1BQUwsQ0FBWU4sU0FBWixFQUF1QkcsQ0FBdkI7QUFDRCxTQUZEO0FBR0EsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsR0FBRyxHQUFHLEtBQUssWUFBTCxDQUFaOztBQUNBLFVBQUksQ0FBQ2hELEtBQUssQ0FBQ0MsT0FBTixDQUFjK0MsR0FBRyxDQUFDSixTQUFELENBQWpCLENBQUwsRUFBb0M7QUFDbENJLFdBQUcsQ0FBQ0osU0FBRCxDQUFILEdBQWlCLEVBQWpCO0FBQ0Q7O0FBQ0QsVUFBSXRDLEVBQUUsS0FBSzZDLFNBQVgsRUFBc0I7QUFDcEJILFdBQUcsQ0FBQ0osU0FBRCxDQUFILEdBQWlCLEVBQWpCO0FBQ0QsT0FGRCxNQUdLO0FBQ0hJLFdBQUcsQ0FBQ0osU0FBRCxDQUFILEdBQWlCSSxHQUFHLENBQUNKLFNBQUQsQ0FBSCxDQUFlUSxNQUFmLENBQXNCSixHQUFHLENBQUNKLFNBQUQsQ0FBSCxDQUFlUyxPQUFmLENBQXVCL0MsRUFBdkIsQ0FBdEIsQ0FBakI7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7OytCQVdXc0MsUyxFQUFXdEMsRSxFQUFJO0FBQ3pCLFVBQU16QixJQUFJLEdBQUcsSUFBYjtBQUFBLFVBQ0V5RSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ1Z6RSxZQUFJLENBQUNxRSxNQUFMLENBQVlOLFNBQVosRUFBdUIsQ0FBQ3RDLEVBQUQsRUFBS2dELEdBQUwsQ0FBdkI7QUFDRCxPQUhIOztBQUlBLFdBQUtSLE1BQUwsQ0FBWUYsU0FBWixFQUF1QixDQUFDdEMsRUFBRCxFQUFLZ0QsR0FBTCxDQUF2QjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNuSkg7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTcUJqRixPOzs7QUFVbkIscUJBQWU7QUFBQTs7QUFBQTs7QUFDYixrRkFBU3lELFNBQVQ7O0FBQ0EsVUFBSzVDLFFBQUwsQ0FBY0csWUFBZCxDQUEyQixTQUEzQixFQUFzQyxNQUFLSCxRQUFMLENBQWNxRSxZQUFkLENBQTJCLFdBQTNCLENBQXRDOztBQUNBLFVBQUtyRSxRQUFMLENBQWNzRSxlQUFkLENBQThCLFdBQTlCOztBQUhhO0FBSWQ7Ozs7aUNBU2E7QUFDWixVQUFNQyxJQUFJLEdBQUcsS0FBS0MsVUFBTCxFQUFiOztBQUNBLFVBQUlELElBQUosRUFBVTtBQUNSQSxZQUFJLENBQUNFLE9BQUwsQ0FBYSxJQUFiO0FBQ0EsYUFBSzVCLFFBQUwsQ0FBYzZCLE9BQWQsR0FBd0JILElBQXhCO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztpQ0FRYTtBQUNaLFVBQUksQ0FBQyxLQUFLMUIsUUFBTCxDQUFjNkIsT0FBbkIsRUFBNEI7QUFDMUIsYUFBSzdCLFFBQUwsQ0FBYzZCLE9BQWQsR0FBd0I3RixpQkFBSzhGLG9CQUFMLENBQTBCLEtBQUtELE9BQUwsRUFBMUIsQ0FBeEI7QUFDRDs7QUFDRCxhQUFPLEtBQUs3QixRQUFMLENBQWM2QixPQUFyQjtBQUNEOzs7OEJBUVU7QUFDVCxhQUFPLElBQVA7QUFDRDs7OztFQXJEa0N4RixxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZyQyxTQUFTMEYsaUJBQVQsQ0FBNEJDLElBQTVCLEVBQWtDO0FBQ2hDLDRCQUFXQSxJQUFJLENBQUNoRSxnQkFBTCxDQUFzQkgsTUFBTSxDQUFDQyxJQUFQLENBQVltRSxPQUFaLEVBQXFCM0MsSUFBckIsQ0FBMEIsR0FBMUIsRUFBK0I0QyxXQUEvQixFQUF0QixDQUFYO0FBQ0Q7O0FBRUQsU0FBU0MsSUFBVCxDQUFlSCxJQUFmLEVBQXFCO0FBQ25CLE1BQU1JLEdBQUcsR0FBR0gsT0FBTyxDQUFDRCxJQUFJLENBQUNLLFFBQUwsQ0FBY0gsV0FBZCxFQUFELENBQW5COztBQUNBLE1BQUlJLE9BQU8sQ0FBQ2hCLE9BQVIsQ0FBZ0JVLElBQWhCLE1BQTBCLENBQUMsQ0FBL0IsRUFBa0M7QUFDaEM7QUFDRCxHQUZELE1BR0ssSUFBSUksR0FBSixFQUFTO0FBQ1osUUFBSUEsR0FBSixDQUFRSixJQUFSO0FBQ0EsUUFBTU8sUUFBUSxHQUFHUixpQkFBaUIsQ0FBQ0MsSUFBRCxDQUFsQzs7QUFDQSxRQUFJTyxRQUFRLENBQUNqRSxNQUFiLEVBQXFCO0FBQ25CaUUsY0FBUSxDQUFDeEUsT0FBVCxDQUFpQixVQUFDeUUsS0FBRCxFQUFXO0FBQzFCQSxhQUFLLENBQUMxRyxnQkFBTixDQUF1QixNQUF2QixFQUErQixZQUFNO0FBQ25DLGNBQUksQ0FBQ3lHLFFBQVEsQ0FBQ2hELE1BQVQsQ0FBZ0IsVUFBQ2tELE1BQUQsRUFBWTtBQUFFLG1CQUFPSCxPQUFPLENBQUNoQixPQUFSLENBQWdCbUIsTUFBaEIsTUFBNEIsQ0FBQyxDQUFwQztBQUF1QyxXQUFyRSxFQUF1RW5FLE1BQTVFLEVBQW9GO0FBQ2xGZ0UsbUJBQU8sQ0FBQ3BELElBQVIsQ0FBYThDLElBQWI7QUFDQUEsZ0JBQUksQ0FBQ1UsYUFBTCxDQUFtQixJQUFJQyxLQUFKLENBQVUsTUFBVixDQUFuQjtBQUNEO0FBQ0YsU0FMRDtBQU1ELE9BUEQ7QUFRRCxLQVRELE1BVUs7QUFDSEwsYUFBTyxDQUFDcEQsSUFBUixDQUFhOEMsSUFBYjtBQUNBQSxVQUFJLENBQUNVLGFBQUwsQ0FBbUIsSUFBSUMsS0FBSixDQUFVLE1BQVYsQ0FBbkI7QUFDRDtBQUNGOztBQUVELE1BQUlYLElBQUksQ0FBQ1ksVUFBTCxDQUFnQnRFLE1BQXBCLEVBQTRCO0FBQzFCMEQsUUFBSSxDQUFDWSxVQUFMLENBQWdCN0UsT0FBaEIsQ0FBd0JvRSxJQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1UsTUFBVCxHQUFtQjtBQUNqQixNQUFNQyxFQUFFLEdBQUcsSUFBSUMsZ0JBQUosQ0FBcUIsVUFBQ0MsU0FBRCxFQUFlO0FBQzdDQSxhQUFTLENBQUNqRixPQUFWLENBQWtCLFVBQUNrRixRQUFELEVBQWM7QUFDOUJBLGNBQVEsQ0FBQ0MsVUFBVCxDQUFvQm5GLE9BQXBCLENBQTRCb0UsSUFBNUI7QUFDRCxLQUZEO0FBR0QsR0FKVSxDQUFYO0FBTUEsTUFBTWdCLEdBQUcsR0FBRztBQUNWQyxjQUFVLEVBQUUsSUFERjtBQUVWQyxhQUFTLEVBQUUsSUFGRDtBQUdWQyxpQkFBYSxFQUFFLElBSEw7QUFJVkMsV0FBTyxFQUFFO0FBSkMsR0FBWjtBQU9BVCxJQUFFLENBQUNVLE9BQUgsQ0FBVzdILFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWCxFQUEyQ2tHLEdBQTNDO0FBQ0Q7O0FBRUR0SCxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDK0csTUFBaEM7O0FBQ0EsSUFBSWhILE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQkMsVUFBaEIsS0FBK0IsVUFBbkMsRUFBK0M7QUFDN0NpSCxRQUFNO0FBQ1A7O0FBR0QsSUFBTVosT0FBTyxHQUFHLEVBQWhCO0FBQ0EsSUFBTUssT0FBTyxHQUFHLEVBQWhCOztBQVVBLFNBQVMvRixNQUFULENBQWlCOEYsUUFBakIsRUFBMkJvQixPQUEzQixFQUFvQztBQUNsQyxNQUFJLE9BQU9wQixRQUFQLEtBQW9CLFFBQXhCLEVBQ0UsTUFBTSxJQUFJN0IsS0FBSixDQUFVLCtFQUFWLENBQU47QUFDRixNQUFJLE9BQU9pRCxPQUFQLEtBQW1CLFVBQXZCLEVBQ0UsTUFBTSxJQUFJakQsS0FBSixDQUFVLHNFQUFWLENBQU47QUFDRnlCLFNBQU8sQ0FBQ0ksUUFBUSxDQUFDSCxXQUFULEVBQUQsQ0FBUCxHQUFrQ3VCLE9BQWxDOztBQUNBLHFCQUFJOUgsUUFBUSxDQUFDcUMsZ0JBQVQsQ0FBMEJxRSxRQUFRLENBQUNILFdBQVQsRUFBMUIsQ0FBSixFQUF1RG5FLE9BQXZELENBQStEb0UsSUFBL0Q7QUFDRDs7SUFPSzNGLGlCOzs7Ozs7Ozs7Ozs7O0FDakZOOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBWXFCUixJOzs7QUFRbkIsa0JBQWU7QUFBQTs7QUFBQTs7QUFDYiw4RUFBTUEsSUFBSSxDQUFDWSxTQUFYOztBQUNBLFVBQUtPLFFBQUwsQ0FBY0csWUFBZCxDQUEyQixNQUEzQixFQUFtQyxNQUFLSCxRQUFMLENBQWNxRSxZQUFkLENBQTJCLFdBQTNCLENBQW5DOztBQUNBLFVBQUtyRSxRQUFMLENBQWNzRSxlQUFkLENBQThCLFdBQTlCOztBQUNBekYsUUFBSSxDQUFDMEgsU0FBTCxDQUFlLE1BQUtuRyxXQUFMLENBQWlCQyxJQUFoQztBQUphO0FBS2Q7Ozs7K0JBU1dtRyxPLEVBQVM7QUFDbkIsVUFBSUEsT0FBTyxZQUFZckgsbUJBQXZCLEVBQWdDO0FBQzlCLGFBQUtzSCxhQUFMLENBQW1CLFNBQW5CLEVBQThCRCxPQUE5QjtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7NEJBU1FBLE8sRUFBUztBQUNoQixVQUFJM0gsSUFBSSxDQUFDMEYsSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFlBQU0vRCxJQUFJLEdBQUczQixJQUFJLENBQUNZLFNBQWxCOztBQUNBLGVBQU9lLElBQUksQ0FBQzJDLFVBQVo7QUFDRTNDLGNBQUksQ0FBQzRDLFdBQUwsQ0FBaUI1QyxJQUFJLENBQUMyQyxVQUF0QjtBQURGOztBQUVBLGFBQUtyRSxZQUFMLENBQWtCMEIsSUFBbEI7QUFDQTNCLFlBQUksQ0FBQzBGLElBQUwsR0FBWSxJQUFaO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLbUMsVUFBTCxDQUFnQkYsT0FBaEIsQ0FBUDtBQUNEOzs7aUNBU29CaEcsSSxFQUFNO0FBQ3pCLFVBQUksT0FBT0EsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QixlQUFPM0IsSUFBSSxDQUFDQyxZQUFMLENBQWtCMEIsSUFBSSxFQUF0QixDQUFQO0FBQ0Q7O0FBQ0QsVUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCQSxZQUFJLEdBQUdoQyxRQUFRLENBQUNzQixhQUFULENBQXVCVSxJQUF2QixDQUFQO0FBQ0Q7O0FBQ0QsVUFBSUEsSUFBSSxZQUFZWCxXQUFwQixFQUFpQztBQUMvQmhCLFlBQUksQ0FBQ1ksU0FBTCxHQUFpQmUsSUFBakI7QUFDRCxPQUZELE1BR0s7QUFDSDNCLFlBQUksQ0FBQ1ksU0FBTCxHQUFpQlosSUFBSSxDQUFDWSxTQUFMLElBQWtCakIsUUFBUSxDQUFDbUksSUFBNUM7QUFDRDs7QUFFRCxVQUFJOUgsSUFBSSxDQUFDMEYsSUFBVCxFQUFlO0FBQ2IxRixZQUFJLENBQUMwRixJQUFMLENBQVV6RixZQUFWLENBQXVCMEIsSUFBdkI7QUFDRDtBQUNGOzs7cUNBUXdCO0FBQ3ZCLGFBQU8zQixJQUFJLENBQUMwRixJQUFaO0FBQ0Q7Ozt5Q0FVNEJxQyxNLEVBQVE7QUFDbkMsVUFBTUMsSUFBSSxHQUFHaEksSUFBSSxDQUFDMEgsU0FBTCxDQUFlSyxNQUFNLENBQUN2RyxJQUF0QixDQUFiOztBQUNBLFVBQUl3RyxJQUFJLFlBQVloSSxJQUFwQixFQUEwQjtBQUN4QixlQUFPZ0ksSUFBUDtBQUNELE9BRkQsTUFHSztBQUNILGVBQU8sSUFBSUQsTUFBSixFQUFQO0FBQ0Q7QUFDRjs7OztFQW5HK0IxSCxxQjs7O0FBc0dsQ0wsSUFBSSxDQUFDMEgsU0FBTCxHQUFpQixFQUFqQjtBQUNBMUgsSUFBSSxDQUFDWSxTQUFMLEdBQWlCLElBQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUN4R0EsU0FBU0gsSUFBVCxHQUF3QjtBQUFBLG9DQUFOTSxJQUFNO0FBQU5BLFFBQU07QUFBQTs7QUFDdEIsTUFBTTBHLE9BQU8sR0FBR1EsY0FBYyxDQUFDL0csS0FBZixDQUFxQixJQUFyQixFQUEyQkgsSUFBM0IsQ0FBaEI7QUFFQSxNQUFNbUgsSUFBSSxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDNUMsUUFBTUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUVBRCxPQUFHLENBQUN4SSxnQkFBSixDQUFxQixTQUFyQixFQUFnQyxZQUFNO0FBQ3BDc0ksYUFBTyxDQUFDRSxHQUFELENBQVA7QUFDRCxLQUZEO0FBR0FBLE9BQUcsQ0FBQ3hJLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDbEMsVUFBTTBJLEdBQUcsR0FBRyxJQUFJaEUsS0FBSixtQkFBcUJpRCxPQUFPLENBQUNnQixNQUE3QixjQUF1Q2hCLE9BQU8sQ0FBQ2lCLEdBQS9DLGFBQVo7QUFDQUYsU0FBRyxDQUFDRixHQUFKLEdBQVVBLEdBQVY7QUFDQUQsWUFBTSxDQUFDRyxHQUFELENBQU47QUFDRCxLQUpEO0FBTUFGLE9BQUcsQ0FBQ0ssSUFBSixDQUFTbEIsT0FBTyxDQUFDZ0IsTUFBakIsRUFBeUJoQixPQUFPLENBQUNpQixHQUFqQzs7QUFFQSxRQUFJLFFBQU9qQixPQUFPLENBQUNtQixPQUFmLE1BQTJCLFFBQTNCLElBQXVDbkIsT0FBTyxDQUFDbUIsT0FBUixLQUFvQixJQUEvRCxFQUFxRTtBQUNuRS9HLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZMkYsT0FBTyxDQUFDbUIsT0FBcEIsRUFBNkI3RyxPQUE3QixDQUFxQyxVQUFDYyxHQUFELEVBQVM7QUFDNUMsWUFBTWdHLEdBQUcsR0FBR0MsT0FBTyxDQUFDckIsT0FBTyxDQUFDbUIsT0FBUixDQUFnQi9GLEdBQWhCLENBQUQsQ0FBbkI7O0FBQ0EsWUFBSSxPQUFPZ0csR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCUCxhQUFHLENBQUNTLGdCQUFKLENBQXFCbEcsR0FBckIsRUFBMEJnRyxHQUExQjtBQUNEO0FBQ0YsT0FMRDtBQU1EOztBQUVELFFBQUksT0FBT3BCLE9BQU8sQ0FBQ3VCLGdCQUFmLEtBQW9DLFFBQXhDLEVBQWtEO0FBQ2hEVixTQUFHLENBQUNVLGdCQUFKLENBQXFCdkIsT0FBTyxDQUFDdUIsZ0JBQTdCO0FBQ0Q7O0FBRURWLE9BQUcsQ0FBQ1csSUFBSixDQUFTeEIsT0FBTyxDQUFDeUIsSUFBakI7QUFDRCxHQTVCWSxDQUFiOztBQThCQSxNQUFJakgsS0FBSyxDQUFDQyxPQUFOLENBQWN1RixPQUFPLENBQUMwQixPQUF0QixDQUFKLEVBQW9DO0FBQ2xDMUIsV0FBTyxDQUFDMEIsT0FBUixDQUFnQnBILE9BQWhCLENBQXdCLFVBQUNRLEVBQUQsRUFBUTtBQUM5QixVQUFJLE9BQU9BLEVBQVAsS0FBYyxVQUFsQixFQUNFMkYsSUFBSSxDQUFDeEksSUFBTCxDQUFVNkMsRUFBVjtBQUNILEtBSEQ7QUFJRDs7QUFDRCxNQUFJLE9BQU9rRixPQUFPLENBQUMwQixPQUFmLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDakIsUUFBSSxDQUFDeEksSUFBTCxDQUFVK0gsT0FBTyxDQUFDMEIsT0FBbEI7QUFDRDs7QUFFRCxNQUFJbEgsS0FBSyxDQUFDQyxPQUFOLENBQWN1RixPQUFPLENBQUMyQixPQUF0QixDQUFKLEVBQW9DO0FBQ2xDM0IsV0FBTyxDQUFDMkIsT0FBUixDQUFnQnJILE9BQWhCLENBQXdCLFVBQUNRLEVBQUQsRUFBUTtBQUM5QixVQUFJLE9BQU9BLEVBQVAsS0FBYyxVQUFsQixFQUNFMkYsSUFBSSxTQUFKLENBQVczRixFQUFYO0FBQ0gsS0FIRDtBQUlEOztBQUNELE1BQUksT0FBT2tGLE9BQU8sQ0FBQzJCLE9BQWYsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNsQixRQUFJLFNBQUosQ0FBV1QsT0FBTyxDQUFDMkIsT0FBbkI7QUFDRDs7QUFFRCxTQUFPbEIsSUFBUDtBQUNEOztBQWVELFNBQVNELGNBQVQsQ0FBeUJRLE1BQXpCLEVBQWlDQyxHQUFqQyxFQUFzQ1EsSUFBdEMsRUFBNENDLE9BQTVDLEVBQXFEQyxPQUFyRCxFQUE4RFIsT0FBOUQsRUFBdUVJLGdCQUF2RSxFQUF5RjtBQUN2RixNQUFJLFFBQU9QLE1BQVAsTUFBa0IsUUFBdEIsRUFBZ0M7QUFDOUIsV0FBT1IsY0FBYyxDQUNuQlEsTUFBTSxDQUFDQSxNQURZLEVBRW5CQSxNQUFNLENBQUNDLEdBQVAsSUFBY0QsTUFBTSxDQUFDWSxHQUFyQixJQUE0QlosTUFBTSxDQUFDYSxJQUFuQyxJQUEyQ2IsTUFBTSxDQUFDYyxNQUYvQixFQUduQmQsTUFBTSxDQUFDUyxJQUFQLElBQWVULE1BQU0sQ0FBQ1gsSUFBdEIsSUFBOEJXLE1BQU0sQ0FBQ2UsSUFIbEIsRUFJbkJmLE1BQU0sQ0FBQ1UsT0FBUCxJQUFrQlYsTUFBTSxDQUFDZ0IsSUFKTixFQUtuQmhCLE1BQU0sQ0FBQ1csT0FBUCxJQUFrQlgsTUFBTSxDQUFDaUIsS0FMTixFQU1uQmpCLE1BQU0sQ0FBQ0csT0FOWSxFQU9uQkgsTUFBTSxDQUFDTyxnQkFQWSxDQUFyQjtBQVNELEdBVkQsTUFXSztBQUNILFdBQU87QUFDTFAsWUFBTSxFQUFFSyxPQUFPLENBQUNhLElBQVIsQ0FBYSxJQUFiLEVBQW1CbEIsTUFBbkIsRUFBMkIsS0FBM0IsRUFBa0MxRSxTQUFsQyxDQURIO0FBRUwyRSxTQUFHLEVBQUVJLE9BQU8sQ0FBQ2EsSUFBUixDQUFhLElBQWIsRUFBbUJqQixHQUFuQixFQUF3QixFQUF4QixFQUE0QjNFLFNBQTVCLENBRkE7QUFHTG1GLFVBQUksRUFBRUosT0FBTyxDQUFDYSxJQUFSLENBQWEsSUFBYixFQUFtQlQsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0JuRixTQUEvQixDQUhEO0FBSUxvRixhQUFPLEVBQVBBLE9BSks7QUFLTEMsYUFBTyxFQUFQQSxPQUxLO0FBTUxSLGFBQU8sRUFBRUUsT0FBTyxDQUFDYSxJQUFSLENBQWEsSUFBYixFQUFtQmYsT0FBbkIsRUFBNEIsSUFBNUIsRUFBa0M3RSxTQUFsQyxDQU5KO0FBT0xpRixzQkFBZ0IsRUFBRUYsT0FBTyxDQUFDYSxJQUFSLENBQWEsSUFBYixFQUFtQlgsZ0JBQW5CLEVBQXFDLElBQXJDLEVBQTJDakYsU0FBM0M7QUFQYixLQUFQO0FBU0Q7QUFDRjs7QUFVRCxTQUFTK0UsT0FBVCxDQUFrQnZHLEVBQWxCLEVBQXNCcUgsR0FBdEIsRUFBMkI3SSxJQUEzQixFQUFpQztBQUMvQixNQUFJLE9BQU93QixFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsV0FBT0EsRUFBRSxDQUFDckIsS0FBSCxDQUFTLElBQVQsRUFBZUgsSUFBZixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxPQUFPd0IsRUFBUCxLQUFjLFFBQWxCLEVBQTRCO0FBQzFCLFdBQU9BLEVBQVA7QUFDRDs7QUFDRCxTQUFPcUgsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7QUMxSEQ7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNDLEtBQVQsR0FBeUI7QUFDdkIsTUFBTWpJLE1BQU0sR0FBRyxFQUFmO0FBQUEsTUFBbUJ1SCxPQUFPLEdBQUcsRUFBN0I7QUFBQSxNQUFpQ0MsT0FBTyxHQUFHLEVBQTNDOztBQUR1QixvQ0FBTnJJLElBQU07QUFBTkEsUUFBTTtBQUFBOztBQUV2QixTQUFPQSxJQUFJLENBQUN1QixNQUFaLEVBQW9CO0FBQ2xCLFFBQU1tRixPQUFPLEdBQUcxRyxJQUFJLENBQUMrSSxLQUFMLEVBQWhCO0FBQ0EsUUFBSTdILEtBQUssQ0FBQ0MsT0FBTixDQUFjdUYsT0FBTyxDQUFDMEIsT0FBdEIsQ0FBSixFQUFvQ0EsT0FBTyxDQUFDWSxNQUFSLENBQWV0QyxPQUFPLENBQUMwQixPQUF2QjtBQUNwQyxRQUFJLE9BQU8xQixPQUFPLENBQUMwQixPQUFmLEtBQTJCLFVBQS9CLEVBQTJDQSxPQUFPLENBQUNqRyxJQUFSLENBQWF1RSxPQUFPLENBQUMwQixPQUFyQjtBQUMzQyxRQUFJbEgsS0FBSyxDQUFDQyxPQUFOLENBQWN1RixPQUFPLENBQUMyQixPQUF0QixDQUFKLEVBQW9DQSxPQUFPLENBQUNXLE1BQVIsQ0FBZXRDLE9BQU8sQ0FBQzJCLE9BQXZCO0FBQ3BDLFFBQUksT0FBTzNCLE9BQU8sQ0FBQzJCLE9BQWYsS0FBMkIsVUFBL0IsRUFBMkNBLE9BQU8sQ0FBQ2xHLElBQVIsQ0FBYXVFLE9BQU8sQ0FBQzJCLE9BQXJCO0FBQzNDdkgsVUFBTSxDQUFDbUksTUFBUCxDQUFjcEksTUFBZCxFQUFzQjZGLE9BQXRCO0FBQ0Q7O0FBQ0Q3RixRQUFNLENBQUN1SCxPQUFQLEdBQWlCQSxPQUFqQjtBQUNBdkgsUUFBTSxDQUFDd0gsT0FBUCxHQUFpQkEsT0FBakI7QUFDQSxTQUFPeEgsTUFBUDtBQUNEOztBQWVELFNBQVNxRyxjQUFULENBQXlCUSxNQUF6QixFQUFpQ0MsR0FBakMsRUFBc0NRLElBQXRDLEVBQTRDQyxPQUE1QyxFQUFxREMsT0FBckQsRUFBOERSLE9BQTlELEVBQXVFSSxnQkFBdkUsRUFBeUY7QUFDdkYsTUFBSSxRQUFPUCxNQUFQLE1BQWtCLFFBQWxCLElBQThCQSxNQUFNLEtBQUssSUFBN0MsRUFBbUQ7QUFDakQsV0FBT1IsY0FBYyxDQUNuQlEsTUFBTSxDQUFDQSxNQURZLEVBRW5CQSxNQUFNLENBQUNDLEdBQVAsSUFBY0QsTUFBTSxDQUFDWSxHQUFyQixJQUE0QlosTUFBTSxDQUFDYSxJQUFuQyxJQUEyQ2IsTUFBTSxDQUFDYyxNQUYvQixFQUduQmQsTUFBTSxDQUFDUyxJQUFQLElBQWVULE1BQU0sQ0FBQ1gsSUFBdEIsSUFBOEJXLE1BQU0sQ0FBQ2UsSUFIbEIsRUFJbkJmLE1BQU0sQ0FBQ1UsT0FBUCxJQUFrQlYsTUFBTSxDQUFDZ0IsSUFKTixFQUtuQmhCLE1BQU0sQ0FBQ1csT0FBUCxJQUFrQlgsTUFBTSxDQUFDaUIsS0FMTixFQU1uQmpCLE1BQU0sQ0FBQ0csT0FOWSxFQU9uQkgsTUFBTSxDQUFDTyxnQkFQWSxDQUFyQjtBQVNELEdBVkQsTUFXSztBQUNILFdBQU87QUFDTFAsWUFBTSxFQUFOQSxNQURLO0FBRUxDLFNBQUcsRUFBSEEsR0FGSztBQUdMUSxVQUFJLEVBQUpBLElBSEs7QUFJTEMsYUFBTyxFQUFQQSxPQUpLO0FBS0xDLGFBQU8sRUFBUEEsT0FMSztBQU1MUixhQUFPLEVBQVBBLE9BTks7QUFPTEksc0JBQWdCLEVBQWhCQTtBQVBLLEtBQVA7QUFTRDtBQUNGOztJQWFLdEksUTtBQWNKLHNCQUFzQjtBQUFBOztBQUFBLHVDQUFOSyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDcEIsU0FBS2tKLGFBQUwsR0FBcUJoQyxjQUFjLENBQUMvRyxLQUFmLENBQXFCLElBQXJCLEVBQTJCSCxJQUEzQixDQUFyQjtBQUNBLFNBQUttSixjQUFMLEdBQXNCLEVBQXRCO0FBQ0Q7Ozs7OEJBZ0JVMUksSSxFQUFlO0FBQUE7O0FBQUEseUNBQU5ULElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN4QixVQUFNRCxJQUFJLEdBQUcsSUFBYjs7QUFDQSxVQUFJLEtBQUtVLElBQUwsQ0FBSixFQUFnQjtBQUNkLGNBQU0sSUFBSWdELEtBQUosdUNBQXlDaEQsSUFBekMsYUFBTjtBQUNEOztBQUVELFdBQUswSSxjQUFMLENBQW9CMUksSUFBcEIsSUFBNEJ5RyxjQUFjLENBQUMvRyxLQUFmLENBQXFCLElBQXJCLEVBQTJCSCxJQUEzQixDQUE1Qjs7QUFDQSxXQUFLUyxJQUFMLElBQWEsWUFBTTtBQUNqQixZQUFNaUcsT0FBTyxHQUFHUSxjQUFjLENBQUMvRyxLQUFmLENBQXFCLElBQXJCLEVBQTJCNkMsVUFBM0IsQ0FBaEI7QUFDQSxlQUFPLHNCQUFLOEYsS0FBSyxDQUFDL0ksSUFBSSxDQUFDbUosYUFBTixFQUFxQm5KLElBQUksQ0FBQ29KLGNBQUwsQ0FBb0IxSSxJQUFwQixDQUFyQixFQUFnRGlHLE9BQWhELENBQVYsQ0FBUDtBQUNELE9BSEQ7O0FBSUEsYUFBTyxJQUFQO0FBQ0Q7Ozs4QkFld0I7QUFBQSx5Q0FBTjFHLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUN2QixVQUFNMEcsT0FBTyxHQUFHUSxjQUFjLENBQUMvRyxLQUFmLENBQXFCLElBQXJCLEVBQTJCSCxJQUEzQixDQUFoQjtBQUNBLGFBQU8sc0JBQUswRyxPQUFMLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FDaklIOzs7Ozs7Ozs7O0FBRUEsSUFBTTBDLE9BQU8sR0FBRyxFQUFoQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLElBQXhCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFFQXhLLE1BQU0sQ0FBQ3lLLENBQVAsR0FBV0gsT0FBWDs7SUFPcUJqSyxNO0FBUW5CLGtCQUFhcUssT0FBYixFQUFzQkMsU0FBdEIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0QsT0FBTCxHQUFlQSxPQUFPLElBQUksRUFBMUI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFTLElBQUksSUFBOUI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBTixXQUFPLENBQUNqSCxJQUFSLENBQWEsSUFBYjtBQUNEOzs7O3dCQVVJd0gsSyxFQUFPQyxVLEVBQVk7QUFDdEIsVUFBSSxPQUFPRCxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLE9BQU9DLFVBQVAsS0FBc0IsVUFBdkQsRUFBbUU7QUFDakVELGFBQUssR0FBRyxJQUFJL0osaUJBQUosQ0FBVSxLQUFLNEosT0FBTCxHQUFlRyxLQUF6QixFQUFnQ0MsVUFBaEMsQ0FBUjtBQUNEOztBQUNELFVBQUlELEtBQUssWUFBWS9KLGlCQUFyQixFQUE0QjtBQUMxQixhQUFLOEosTUFBTCxDQUFZdkgsSUFBWixDQUFpQndILEtBQWpCOztBQUNBLFlBQUlMLFFBQUosRUFBYztBQUNaLGNBQU10SixJQUFJLEdBQUcySixLQUFLLENBQUNFLE9BQU4sRUFBYjs7QUFDQSxjQUFJN0osSUFBSixFQUFVO0FBQ1IsaUJBQUs4SixTQUFMO0FBQ0FILGlCQUFLLENBQUNJLEVBQU4sQ0FBUy9KLElBQVQ7QUFDQWIsa0JBQU0sQ0FBQzZLLE9BQVAsR0FBaUJMLEtBQWpCO0FBQ0Q7QUFDRjtBQUNGOztBQUNELGFBQU9BLEtBQVA7QUFDRDs7OzJCQVFPO0FBQ04sYUFBTyxLQUFLRCxNQUFMLENBQVlPLElBQVosQ0FBaUIsVUFBQU4sS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ0UsT0FBTixFQUFKO0FBQUEsT0FBdEIsQ0FBUDtBQUNEOzs7Z0NBT1k7QUFDWCxVQUFJLE9BQU8sS0FBS0osU0FBWixLQUEwQixVQUE5QixFQUEwQztBQUN4QyxhQUFLQSxTQUFMO0FBQ0EsYUFBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0Y7OzsrQkFRa0JHLFUsRUFBWTtBQUM3QlAsdUJBQWlCLEdBQUdPLFVBQXBCO0FBQ0Q7OztxQ0FRd0I7QUFDdkI5SyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DbUwsUUFBcEM7O0FBQ0EsVUFBSSxDQUFDWixRQUFMLEVBQWU7QUFDYlksZ0JBQVE7QUFDVDtBQUNGOzs7NkJBUWdCO0FBQ2YsVUFBTUMsSUFBSSxHQUFHZixPQUFPLENBQUN6RyxHQUFSLENBQVksVUFBQ3lILE1BQUQsRUFBWTtBQUNuQyxlQUFPQSxNQUFNLENBQUNWLE1BQVAsQ0FBYy9HLEdBQWQsQ0FBa0IsVUFBQ2dILEtBQUQsRUFBVztBQUNsQyxpQkFBT0EsS0FBSyxDQUFDVSxRQUFOLEVBQVA7QUFDRCxTQUZNLENBQVA7QUFHRCxPQUpZLEVBSVZDLElBSlUsRUFBYjs7QUFLQSxVQUFJakIsaUJBQUosRUFBdUI7QUFDckJjLFlBQUksQ0FBQ0ksT0FBTCxDQUFhLEdBQWI7QUFDRDs7QUFDRCxhQUFPSixJQUFQO0FBQ0Q7Ozs7Ozs7O0FBVUgsU0FBU0QsUUFBVCxHQUFxQjtBQUNuQlosVUFBUSxHQUFHLElBQVg7QUFDQSxNQUFJSyxLQUFKLEVBQVc5RyxLQUFYO0FBQ0F1RyxTQUFPLENBQUNwSSxPQUFSLENBQWdCLFVBQUNvSixNQUFELEVBQVk7QUFDMUIsUUFBSSxDQUFDVCxLQUFMLEVBQVk7QUFDVkEsV0FBSyxHQUFHUyxNQUFNLENBQUNoRixJQUFQLEVBQVI7QUFDQXZDLFdBQUssR0FBR3VILE1BQVI7QUFDRDtBQUNGLEdBTEQ7O0FBTUEsTUFBSVQsS0FBSixFQUFXO0FBQ1Q5RyxTQUFLLENBQUNpSCxTQUFOO0FBQ0FILFNBQUssQ0FBQ2EsR0FBTjtBQUNBckwsVUFBTSxDQUFDNkssT0FBUCxHQUFpQkwsS0FBakI7QUFDRCxHQUpELE1BS0ssSUFBSSxPQUFPTixpQkFBUCxLQUE2QixVQUFqQyxFQUE2QztBQUNoREEscUJBQWlCO0FBQ2xCO0FBQ0YsQzs7Ozs7Ozs7O0FDOUlEOzs7Ozs7Ozs7O0FBRUEsSUFBSW9CLFdBQUo7O0lBUU03SyxLO0FBUUosaUJBQWE4SyxJQUFiLEVBQW1CZCxVQUFuQixFQUErQjtBQUFBOztBQUM3QixTQUFLZSxRQUFMLEdBQWdCRCxJQUFoQjs7QUFDQSxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUJBLFVBQUksR0FBR0EsSUFBSSxDQUFDckksS0FBTCxDQUFXLEdBQVgsQ0FBUDtBQUNEOztBQUNELFFBQUluQixLQUFLLENBQUNDLE9BQU4sQ0FBY3VKLElBQWQsQ0FBSixFQUF5QjtBQUN2QixXQUFLRSxNQUFMLEdBQWNGLElBQUksQ0FBQy9ILEdBQUwsQ0FBUyxVQUFBa0ksS0FBSztBQUFBLGVBQUksSUFBSUMsaUJBQUosQ0FBVUQsS0FBVixDQUFKO0FBQUEsT0FBZCxDQUFkO0FBQ0QsS0FGRCxNQUdLO0FBQ0gsWUFBTSxJQUFJcEgsS0FBSixDQUFVLGlEQUFWLENBQU47QUFDRDs7QUFFRCxRQUFJLE9BQU9tRyxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ3BDLFlBQU0sSUFBSW5HLEtBQUosQ0FBVSx3Q0FBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBS21HLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS21CLEtBQUwsR0FBYSxLQUFLSCxNQUFMLENBQVksS0FBS0EsTUFBTCxDQUFZckosTUFBWixHQUFtQixDQUEvQixFQUFrQ29KLFFBQWxDLEtBQStDLEdBQTVEO0FBQ0Q7Ozs7dUJBU0czSyxJLEVBQU1nTCxLLEVBQU87QUFDZixVQUFNQyxNQUFNLEdBQUcvSixLQUFLLENBQUNDLE9BQU4sQ0FBY25CLElBQWQsSUFBc0JBLElBQXRCLEdBQTZCLEVBQTVDO0FBQ0EsVUFBTTBLLElBQUksR0FBRyxLQUFLUSxVQUFMLENBQWdCRCxNQUFNLElBQUlSLFdBQTFCLENBQWI7O0FBQ0EsVUFBSU8sS0FBSyxJQUFJTixJQUFJLEtBQUs5SyxLQUFLLENBQUN1TCxpQkFBTixFQUF0QixFQUFpRDtBQUMvQyxhQUFLWCxHQUFMLENBQVN4SyxJQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xKLGFBQUssQ0FBQ3dMLGlCQUFOLENBQXdCVixJQUF4QjtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7d0JBU0kxSyxJLEVBQU07QUFDVHlLLGlCQUFXLEdBQUd6SyxJQUFJLElBQUksS0FBSzZKLE9BQUwsRUFBdEI7QUFDQSxhQUFPLEtBQUtELFVBQUwsQ0FBZ0JhLFdBQWhCLENBQVA7QUFDRDs7OzhCQVNVO0FBQ1QsVUFBTVksS0FBSyxHQUFHekwsS0FBSyxDQUFDdUwsaUJBQU4sR0FBMEI5SSxLQUExQixDQUFnQyxHQUFoQyxDQUFkOztBQUVBLFVBQUk7QUFDRixZQUFJaUosQ0FBQyxHQUFHLENBQVI7QUFDQSxZQUFNdEwsSUFBSSxHQUFHLEtBQUs0SyxNQUFMLENBQVlqSSxHQUFaLENBQWdCLFVBQUNrSSxLQUFELEVBQVc7QUFDdEMsY0FBTVUsSUFBSSxHQUFHRixLQUFLLENBQUNDLENBQUMsRUFBRixDQUFsQjtBQUNBLGNBQU1FLEdBQUcsR0FBR1gsS0FBSyxDQUFDWSxXQUFOLENBQWtCRixJQUFsQixDQUFaO0FBQ0EsaUJBQU9DLEdBQVA7QUFDRCxTQUpZLENBQWI7O0FBS0EsWUFBSSxLQUFLWixNQUFMLENBQVlVLENBQUMsR0FBQyxDQUFkLEVBQWlCWCxRQUFqQixLQUE4QixHQUFsQyxFQUF1QztBQUNyQzNLLGNBQUksQ0FBQzBMLEdBQUw7QUFDQTFMLGNBQUksQ0FBQ21DLElBQUwsQ0FBVTtBQUNSd0osaUJBQUssRUFBRU4sS0FBSyxDQUFDTyxLQUFOLENBQVlOLENBQUMsR0FBQyxDQUFkLEVBQWlCL0ksSUFBakIsQ0FBc0IsR0FBdEI7QUFEQyxXQUFWO0FBR0QsU0FMRCxNQUtPLElBQUkrSSxDQUFDLEtBQUtELEtBQUssQ0FBQzlKLE1BQWhCLEVBQXdCO0FBQzdCLGlCQUFPLElBQVA7QUFDRDs7QUFDRCxlQUFPdkIsSUFBUDtBQUNELE9BaEJELENBZ0JFLE9BQU82TCxDQUFQLEVBQVU7QUFDVixlQUFPLElBQVA7QUFDRDtBQUNGOzs7OEJBUVU7QUFDVCxhQUFPLEtBQUtoQyxPQUFMLE9BQW1CLElBQTFCO0FBQ0Q7OzsrQkFVVzdKLEksRUFBTTtBQUNoQixVQUFJLENBQUNrQixLQUFLLENBQUNDLE9BQU4sQ0FBY25CLElBQWQsQ0FBTCxFQUEwQjtBQUN4QkEsWUFBSSxHQUFHLEVBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQUs0SyxNQUFMLENBQVlqSSxHQUFaLENBQWdCLFVBQUNrSSxLQUFELEVBQVEvSSxHQUFSO0FBQUEsZUFBZ0IrSSxLQUFLLENBQUNLLFVBQU4sQ0FBaUJsTCxJQUFJLENBQUM4QixHQUFELENBQXJCLENBQWhCO0FBQUEsT0FBaEIsRUFBNkRTLElBQTdELENBQWtFLEdBQWxFLENBQVA7QUFDRDs7OytCQUdXO0FBQ1YsVUFBSSxPQUFPLEtBQUtvSSxRQUFaLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ3JDLGVBQU8sS0FBS0EsUUFBWjtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBS0MsTUFBTCxDQUFZakksR0FBWixDQUFnQixVQUFBa0ksS0FBSztBQUFBLGlCQUFJQSxLQUFLLENBQUNSLFFBQU4sRUFBSjtBQUFBLFNBQXJCLEVBQTJDOUgsSUFBM0MsQ0FBZ0QsR0FBaEQsQ0FBUDtBQUNEO0FBQ0Y7Ozt3Q0FRMkI7QUFDMUIsYUFBT3pELE1BQU0sQ0FBQ2dOLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCekosTUFBckIsQ0FBNEIsQ0FBNUIsQ0FBUDtBQUNEOzs7c0NBT3lCd0YsRyxFQUFLO0FBQzdCaEosWUFBTSxDQUFDZ04sUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJqRSxHQUF2QjtBQUNEOzs7Ozs7ZUFHWWxJLEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3pKVG9NLFU7QUFDSixzQkFBYUMsT0FBYixFQUFpRDtBQUFBLFFBQTNCQyxJQUEyQix1RUFBcEIsQ0FBb0I7QUFBQSxRQUFqQkMsUUFBaUIsdUVBQU4sSUFBTTs7QUFBQTs7QUFDL0MsUUFBTUMsS0FBSyxHQUFJLElBQUkzSSxLQUFKLEVBQUQsQ0FBWTJJLEtBQVosQ0FBa0IvSixLQUFsQixDQUF3QixlQUF4QixDQUFkO0FBQ0ErSixTQUFLLENBQUNyRCxLQUFOO0FBQ0FxRCxTQUFLLENBQUNyRCxLQUFOO0FBQ0FqSSxVQUFNLENBQUNtSSxNQUFQLENBQWMsSUFBZCxFQUFvQjtBQUFDZ0QsYUFBTyxFQUFQQSxPQUFEO0FBQVVDLFVBQUksRUFBSkEsSUFBVjtBQUFnQkMsY0FBUSxFQUFSQSxRQUFoQjtBQUEwQkMsV0FBSyxFQUFMQTtBQUExQixLQUFwQjtBQUNEOzs7OytCQUVXO0FBQ1YsdUJBQVUsS0FBSzVMLFdBQUwsQ0FBaUJDLElBQTNCLGVBQW9DLEtBQUt5TCxJQUF6QyxnQkFBbUQsS0FBS0QsT0FBeEQsaUJBQXNFLEtBQUtHLEtBQUwsQ0FBVzdKLElBQVgsQ0FBZ0IsTUFBaEIsQ0FBdEU7QUFDRDs7Ozs7O0FBR0gsSUFBTThKLE9BQU8sR0FBRztBQUNkQyxRQUFNLEVBQUUsZ0JBQUN4RSxHQUFELEVBQVM7QUFDZixRQUFNckYsQ0FBQyxHQUFHOEosVUFBVSxDQUFDekUsR0FBRCxDQUFwQjtBQUNBLFFBQUkwRSxLQUFLLENBQUMvSixDQUFELENBQVQsRUFDRSxNQUFNLElBQUl1SixVQUFKLENBQWUsMkNBQWYsQ0FBTjtBQUNGLFdBQU92SixDQUFQO0FBQ0QsR0FOYTtBQU9kZ0ssU0FBTyxFQUFFLGlCQUFDM0UsR0FBRCxFQUFTO0FBQ2hCLFFBQU1yRixDQUFDLEdBQUdpSyxRQUFRLENBQUM1RSxHQUFELENBQWxCO0FBQ0EsUUFBSTBFLEtBQUssQ0FBQy9KLENBQUQsQ0FBVCxFQUNFLE1BQU0sSUFBSXVKLFVBQUosQ0FBZSw2Q0FBZixDQUFOO0FBQ0YsV0FBT3ZKLENBQVA7QUFDRCxHQVphO0FBYWQsV0FBTyxlQUFDcUYsR0FBRCxFQUFTO0FBQ2QsUUFBTXJGLENBQUMsR0FBRzhKLFVBQVUsQ0FBQ3pFLEdBQUQsQ0FBcEI7QUFDQSxRQUFJMEUsS0FBSyxDQUFDL0osQ0FBRCxDQUFULEVBQ0UsTUFBTSxJQUFJdUosVUFBSixDQUFlLDBDQUFmLENBQU47QUFDRixXQUFPdkosQ0FBUDtBQUNELEdBbEJhO0FBbUJka0ssUUFBTSxFQUFFLGdCQUFDN0UsR0FBRCxFQUFTO0FBQ2YsUUFBSTtBQUNGLFVBQU04RSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXaEYsR0FBWCxDQUFWO0FBQ0EsVUFBSSxPQUFPOEUsQ0FBUCxLQUFhLFFBQWpCLEVBQ0UsT0FBT0EsQ0FBUDtBQUNILEtBSkQsQ0FLQSxPQUFPZixDQUFQLEVBQVUsQ0FBRTs7QUFDWixXQUFPL0QsR0FBUDtBQUNELEdBM0JhO0FBNEJkaUYsTUFBSSxFQUFFLGNBQUNqRixHQUFELEVBQVM7QUFDYixRQUFJO0FBQ0YsVUFBTWtGLENBQUMsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdoRixHQUFYLENBQVY7QUFDQSxVQUFJLFFBQU9rRixDQUFQLE1BQWEsUUFBakIsRUFDRSxPQUFPQSxDQUFQO0FBQ0gsS0FKRCxDQUtBLE9BQU9uQixDQUFQLEVBQVUsQ0FBRTs7QUFDWixVQUFNLElBQUlHLFVBQUosQ0FBZSxnREFBZixDQUFOO0FBQ0QsR0FwQ2E7QUFxQ2RpQixXQUFTLEVBQUUsbUJBQUNuRixHQUFELEVBQVM7QUFDbEIsUUFBSTtBQUNGLFVBQU1rRixDQUFDLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXaEYsR0FBWCxDQUFWO0FBQ0EsVUFBSSxRQUFPa0YsQ0FBUCxNQUFhLFFBQWIsSUFBeUI5TCxLQUFLLENBQUNDLE9BQU4sQ0FBYzZMLENBQWQsQ0FBN0IsRUFDRSxPQUFPQSxDQUFQO0FBQ0gsS0FKRCxDQUtBLE9BQU9uQixDQUFQLEVBQVUsQ0FBRTs7QUFDWixVQUFNLElBQUlHLFVBQUosQ0FBZSwrQ0FBZixDQUFOO0FBQ0QsR0E3Q2E7QUE4Q2RrQixZQUFVLEVBQUUsb0JBQUNwRixHQUFELEVBQVM7QUFDbkIsUUFBSTtBQUNGLFVBQU1rRixDQUFDLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXaEYsR0FBWCxDQUFWO0FBQ0EsVUFBSSxRQUFPa0YsQ0FBUCxNQUFhLFFBQWIsSUFBeUIsQ0FBQzlMLEtBQUssQ0FBQ0MsT0FBTixDQUFjNkwsQ0FBZCxDQUE5QixFQUNFLE9BQU9BLENBQVA7QUFDSCxLQUpELENBS0EsT0FBT25CLENBQVAsRUFBVSxDQUFFOztBQUNaLFVBQU0sSUFBSUcsVUFBSixDQUFlLDBEQUFmLENBQU47QUFDRCxHQXREYTtBQXVEZCxhQUFTLGlCQUFDbEUsR0FBRCxFQUFTO0FBQ2hCLFFBQUk7QUFDRixVQUFNcUYsQ0FBQyxHQUFHTixJQUFJLENBQUNDLEtBQUwsQ0FBV2hGLEdBQVgsQ0FBVjtBQUNBLFVBQUksT0FBT3FGLENBQVAsS0FBYSxTQUFqQixFQUNFLE9BQU9BLENBQVA7QUFDSCxLQUpELENBS0EsT0FBT3RCLENBQVAsRUFBVSxDQUFFOztBQUNaLFVBQU0sSUFBSUcsVUFBSixDQUFlLDRDQUFmLENBQU47QUFDRCxHQS9EYTtBQWdFZG9CLEtBQUcsRUFBRSxhQUFDdEYsR0FBRCxFQUFTO0FBQ1osUUFBSTtBQUNGLGFBQU8rRSxJQUFJLENBQUNDLEtBQUwsQ0FBV2hGLEdBQVgsQ0FBUDtBQUNELEtBRkQsQ0FHQSxPQUFPK0QsQ0FBUCxFQUFVLENBQUU7O0FBQ1osV0FBTy9ELEdBQVA7QUFDRCxHQXRFYTtBQXVFZHVGLE1BQUksRUFBRSxjQUFDdkYsR0FBRCxFQUFTO0FBQ2IsUUFBSUEsR0FBRyxDQUFDd0YsS0FBSixDQUFVLGtFQUFWLENBQUosRUFDRSxPQUFPeEYsR0FBUCxDQURGLEtBR0UsTUFBTSxJQUFJa0UsVUFBSixDQUFlLDBDQUFmLENBQU47QUFDSCxHQTVFYTtBQTZFZHVCLE1BQUksRUFBRSxjQUFDekYsR0FBRCxFQUFTO0FBQ2IsUUFBSUEsR0FBRyxDQUFDd0YsS0FBSixDQUFVLHFCQUFWLENBQUosRUFDRSxPQUFPLElBQUlFLElBQUosQ0FBUzFGLEdBQVQsQ0FBUCxDQURGLEtBR0UsTUFBTSxJQUFJa0UsVUFBSixDQUFlLHlDQUFmLENBQU47QUFDSCxHQWxGYTtBQW1GZHlCLE1BQUksRUFBRSxjQUFDM0YsR0FBRCxFQUFTO0FBQ2IsUUFBTWpGLEtBQUssR0FBR2lGLEdBQUcsQ0FBQ3dGLEtBQUosQ0FBVSxnRUFBVixDQUFkOztBQUNBLFFBQUl6SyxLQUFKLEVBQVc7QUFDVCxVQUFNNkssRUFBRSxHQUFHLElBQUlGLElBQUosRUFBWDtBQUNBRSxRQUFFLENBQUNDLFFBQUgsQ0FBWTlLLEtBQUssQ0FBQyxDQUFELENBQWpCO0FBQ0E2SyxRQUFFLENBQUNFLFVBQUgsQ0FBYy9LLEtBQUssQ0FBQyxDQUFELENBQW5CO0FBQ0EsVUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBVCxFQUFjNkssRUFBRSxDQUFDRyxVQUFILENBQWNoTCxLQUFLLENBQUMsQ0FBRCxDQUFuQjtBQUNkLFVBQUlBLEtBQUssQ0FBQyxDQUFELENBQVQsRUFBYzZLLEVBQUUsQ0FBQ0ksZUFBSCxDQUFtQmpMLEtBQUssQ0FBQyxDQUFELENBQXhCO0FBQ2QsYUFBTzZLLEVBQVA7QUFDRCxLQVBELE1BU0UsTUFBTSxJQUFJMUIsVUFBSixDQUFlLHlDQUFmLENBQU47QUFDSCxHQS9GYTtBQWdHZCtCLFVBQVEsRUFBRSxrQkFBQ2pHLEdBQUQsRUFBUztBQUNqQixRQUFNeUYsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBUzFGLEdBQVQsQ0FBYjtBQUNBLFFBQUksQ0FBQzBFLEtBQUssQ0FBQyxDQUFDZSxJQUFGLENBQVYsRUFDRSxPQUFPQSxJQUFQLENBREYsS0FHRSxNQUFNLElBQUl2QixVQUFKLENBQWUsa0RBQWYsQ0FBTjtBQUNILEdBdEdhO0FBdUdkZ0MsVUFBUSxFQUFFLGtCQUFDbEcsR0FBRCxFQUFTO0FBQ2pCLFFBQU15RixJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTMUYsR0FBVCxDQUFiO0FBQ0EsUUFBSSxDQUFDMEUsS0FBSyxDQUFDLENBQUNlLElBQUYsQ0FBVixFQUNFLE9BQU9BLElBQVAsQ0FERixLQUdFLE1BQU0sSUFBSXZCLFVBQUosQ0FBZSxrREFBZixDQUFOO0FBQ0gsR0E3R2E7QUE4R2RpQyxhQUFXLEVBQUUscUJBQUNuRyxHQUFELEVBQVM7QUFDcEIsUUFBTXlGLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNkLFFBQVEsQ0FBQzVFLEdBQUQsQ0FBakIsQ0FBYjtBQUNBLFFBQUksQ0FBQzBFLEtBQUssQ0FBQyxDQUFDZSxJQUFGLENBQVYsRUFDRSxPQUFPQSxJQUFQLENBREYsS0FHRSxNQUFNLElBQUl2QixVQUFKLENBQWUsNkNBQWYsQ0FBTjtBQUNIO0FBcEhhLENBQWhCO0FBdUhBSyxPQUFPLENBQUMsRUFBRCxDQUFQLEdBQWNBLE9BQU8sQ0FBQyxLQUFELENBQXJCOztBQUVBLFNBQVM2QixRQUFULENBQWtCcE8sRUFBbEIsRUFBc0I7QUFDcEIsU0FBTyxRQUFPQSxFQUFQLE1BQWMsUUFBZCxJQUEwQkEsRUFBRSxLQUFLLElBQXhDO0FBQ0Q7O0FBU0QsU0FBU3FPLFlBQVQsQ0FBdUJDLElBQXZCLEVBQTZCO0FBQzNCLE1BQU01QyxHQUFHLEdBQUcsRUFBWjs7QUFDQSxNQUFJLFFBQU80QyxJQUFQLE1BQWdCLFFBQXBCLEVBQThCO0FBQzVCLFFBQUlBLElBQUksWUFBWUMsTUFBcEIsRUFBNEI7QUFDMUI3QyxTQUFHLENBQUM4QyxNQUFKLEdBQWFGLElBQWI7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJQSxJQUFJLENBQUN6QyxLQUFULEVBQWdCO0FBQ2RILFdBQUcsQ0FBQ0csS0FBSixHQUFZeUMsSUFBSSxDQUFDekMsS0FBakI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJeUMsSUFBSSxDQUFDdE0sR0FBVCxFQUFjMEosR0FBRyxDQUFDMUosR0FBSixHQUFVc00sSUFBSSxDQUFDdE0sR0FBZjtBQUNkLFlBQUlzTSxJQUFJLENBQUNHLElBQVQsRUFBZS9DLEdBQUcsQ0FBQytDLElBQUosR0FBV0gsSUFBSSxDQUFDRyxJQUFoQjtBQUNmLFlBQUlILElBQUksQ0FBQ0UsTUFBVCxFQUFpQjlDLEdBQUcsQ0FBQzhDLE1BQUosR0FBYUYsSUFBSSxDQUFDRSxNQUFsQjtBQUNqQixZQUFJRixJQUFJLENBQUNkLEtBQVQsRUFBZ0I5QixHQUFHLENBQUM4QixLQUFKLEdBQVljLElBQUksQ0FBQ2QsS0FBakI7QUFDaEIsWUFBSWMsSUFBSSxDQUFDSSxTQUFULEVBQW9CaEQsR0FBRyxDQUFDZ0QsU0FBSixHQUFnQkosSUFBSSxDQUFDSSxTQUFyQjtBQUNyQjtBQUNGO0FBQ0Y7O0FBQ0QsTUFBSSxPQUFPSixJQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0FBQzlCNUMsT0FBRyxDQUFDZ0QsU0FBSixHQUFnQkosSUFBaEI7QUFDRDs7QUFDRCxNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsUUFBSUEsSUFBSSxLQUFLLEdBQWIsRUFBa0I7QUFDaEIsYUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsUUFBTS9MLEtBQUssR0FBRytMLElBQUksQ0FBQy9MLEtBQUwsQ0FBVyxHQUFYLENBQWQ7O0FBQ0EsUUFBSUEsS0FBSyxDQUFDZCxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEIsVUFBTU8sR0FBRyxHQUFHTyxLQUFLLENBQUMwRyxLQUFOLEVBQVo7QUFBQSxVQUNFd0YsSUFBSSxHQUFHbE0sS0FBSyxDQUFDRSxJQUFOLENBQVcsR0FBWCxDQURUO0FBRUFpSixTQUFHLENBQUMrQyxJQUFKLEdBQVdBLElBQVg7O0FBQ0EsVUFBSXpNLEdBQUcsQ0FBQ1AsTUFBUixFQUFnQjtBQUNkaUssV0FBRyxDQUFDMUosR0FBSixHQUFVQSxHQUFWO0FBQ0Q7QUFDRixLQVBELE1BT087QUFDTDBKLFNBQUcsQ0FBQ0csS0FBSixHQUFZeUMsSUFBWjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTzVDLEdBQVA7QUFDRDs7QUFXRCxTQUFTaUQsU0FBVCxDQUFvQkwsSUFBcEIsRUFBMEJ6QyxLQUExQixFQUFpQztBQUMvQixNQUFJeUMsSUFBSSxDQUFDekMsS0FBTCxLQUFldEgsU0FBbkIsRUFBOEI7QUFDNUIsUUFBSStKLElBQUksQ0FBQ3pDLEtBQUwsS0FBZUEsS0FBbkIsRUFBMEI7QUFDeEIsYUFBTztBQUFFQSxhQUFLLEVBQUxBO0FBQUYsT0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0sSUFBSUssVUFBSixDQUFlLDRCQUFmLENBQU47QUFDRDtBQUNGOztBQUVELE1BQU1SLEdBQUcsR0FBRyxFQUFaOztBQUNBLE1BQUk0QyxJQUFJLENBQUNHLElBQUwsS0FBY2xLLFNBQWxCLEVBQTZCO0FBQzNCLFFBQUlnSSxPQUFPLENBQUMrQixJQUFJLENBQUNHLElBQU4sQ0FBUCxLQUF1QmxLLFNBQTNCLEVBQXNDO0FBQ3BDbUgsU0FBRyxDQUFDRyxLQUFKLEdBQVlVLE9BQU8sQ0FBQytCLElBQUksQ0FBQ0csSUFBTixDQUFQLENBQW1CNUMsS0FBbkIsQ0FBWjtBQUNBSCxTQUFHLENBQUMrQyxJQUFKLEdBQVdILElBQUksQ0FBQ0csSUFBaEI7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNLElBQUl2QyxVQUFKLENBQWUsd0NBQWYsQ0FBTjtBQUNEO0FBQ0YsR0FQRCxNQU9PO0FBQ0xSLE9BQUcsQ0FBQ0csS0FBSixHQUFZQSxLQUFaO0FBQ0Q7O0FBRUQsTUFBSXlDLElBQUksQ0FBQ0UsTUFBTCxZQUF1QkQsTUFBM0IsRUFBbUM7QUFDakMsUUFBTXhMLEtBQUssR0FBRzhJLEtBQUssQ0FBQzJCLEtBQU4sQ0FBWWMsSUFBSSxDQUFDRSxNQUFqQixDQUFkOztBQUNBLFFBQUl6TCxLQUFKLEVBQVc7QUFDVDJJLFNBQUcsQ0FBQzhDLE1BQUosR0FBYUYsSUFBSSxDQUFDRSxNQUFsQjs7QUFDQSxVQUFJSixRQUFRLENBQUNFLElBQUksQ0FBQ2QsS0FBTixDQUFaLEVBQTBCO0FBQ3hCLFlBQU14TixFQUFFLEdBQUdnQixNQUFNLENBQUNDLElBQVAsQ0FBWXFOLElBQUksQ0FBQ2QsS0FBakIsRUFBd0JyRCxJQUF4QixDQUE2QixVQUFBeUUsQ0FBQztBQUFBLGlCQUFJTixJQUFJLENBQUNkLEtBQUwsQ0FBV29CLENBQVgsTUFBa0I3TCxLQUFLLENBQUMsQ0FBRCxDQUEzQjtBQUFBLFNBQTlCLENBQVg7O0FBQ0EsWUFBSS9DLEVBQUUsS0FBS3VFLFNBQVgsRUFBc0I7QUFDcEJtSCxhQUFHLENBQUNtRCxLQUFKLEdBQVk3TyxFQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZ0JBQU0sSUFBSWtNLFVBQUosQ0FBZSx1REFBZixDQUFOO0FBQ0Q7QUFDRjtBQUNGLEtBVkQsTUFVTztBQUNMLFlBQU0sSUFBSUEsVUFBSixDQUFlLG1DQUFmLENBQU47QUFDRDtBQUNGLEdBZkQsTUFlTztBQUNMLFFBQUlrQyxRQUFRLENBQUNFLElBQUksQ0FBQ2QsS0FBTixDQUFaLEVBQTBCO0FBQ3hCLFVBQU14TixHQUFFLEdBQUdnQixNQUFNLENBQUNDLElBQVAsQ0FBWXFOLElBQUksQ0FBQ2QsS0FBakIsRUFBd0JyRCxJQUF4QixDQUE2QixVQUFBeUUsQ0FBQztBQUFBLGVBQUlOLElBQUksQ0FBQ2QsS0FBTCxDQUFXb0IsQ0FBWCxNQUFrQi9DLEtBQXRCO0FBQUEsT0FBOUIsQ0FBWDs7QUFDQSxVQUFJN0wsR0FBRSxLQUFLdUUsU0FBWCxFQUFzQjtBQUNwQm1ILFdBQUcsQ0FBQ21ELEtBQUosR0FBWTdPLEdBQVo7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFNLElBQUlrTSxVQUFKLENBQWUsMENBQWYsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxNQUFJLE9BQU9vQyxJQUFJLENBQUNJLFNBQVosS0FBMEIsVUFBOUIsRUFBMEM7QUFDeENoRCxPQUFHLENBQUNiLFFBQUosR0FBZWdCLEtBQWY7QUFDQUgsT0FBRyxDQUFDZ0QsU0FBSixHQUFnQkosSUFBSSxDQUFDSSxTQUFyQjtBQUNBLFdBQU9KLElBQUksQ0FBQ0ksU0FBTCxDQUFlaEQsR0FBZixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsR0FBUDtBQUNEOztBQVdELFNBQVNDLFlBQVQsQ0FBc0IyQyxJQUF0QixFQUE0QnZELEtBQTVCLEVBQW1DO0FBQ2pDLE1BQUl1RCxJQUFJLENBQUN0TSxHQUFMLEtBQWF1QyxTQUFqQixFQUE0QjtBQUMxQixRQUFNaEMsS0FBSyxHQUFHd0ksS0FBSyxDQUFDeEksS0FBTixDQUFZLEdBQVosQ0FBZDs7QUFDQSxRQUFJQSxLQUFLLENBQUNkLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQixVQUFNTyxHQUFHLEdBQUdPLEtBQUssQ0FBQzBHLEtBQU4sRUFBWjtBQUFBLFVBQ0U0QyxLQUFLLEdBQUd0SixLQUFLLENBQUNFLElBQU4sQ0FBVyxHQUFYLENBRFY7QUFBQSxVQUVFaUosR0FBRyxHQUFHaUQsU0FBUyxDQUFDTCxJQUFELEVBQU96QyxLQUFQLENBRmpCO0FBR0FILFNBQUcsQ0FBQzFKLEdBQUosR0FBVXNNLElBQUksQ0FBQ3RNLEdBQWY7QUFDQSxhQUFPMEosR0FBUDtBQUNELEtBTkQsTUFNTztBQUNMLFlBQU0sSUFBSVEsVUFBSixDQUFlLCtDQUFmLENBQU47QUFDRDtBQUNGLEdBWEQsTUFXTztBQUNMLFdBQU95QyxTQUFTLENBQUNMLElBQUQsRUFBT3ZELEtBQVAsQ0FBaEI7QUFDRDtBQUNGOztBQVdELFNBQVNLLFdBQVQsQ0FBb0JrRCxJQUFwQixFQUEwQnpDLEtBQTFCLEVBQWlDO0FBQy9CLE1BQU1ILEdBQUcsR0FBRyxDQUFDNEMsSUFBSSxDQUFDdE0sR0FBTCxHQUFXc00sSUFBSSxDQUFDdE0sR0FBTCxHQUFXLEdBQXRCLEdBQTRCLEVBQTdCLElBQW1DNkosS0FBL0M7O0FBRUEsTUFBSXlDLElBQUksQ0FBQ0csSUFBTCxLQUFjbEssU0FBbEIsRUFBNkI7QUFDM0IsUUFBSTtBQUNGZ0ksYUFBTyxDQUFDK0IsSUFBSSxDQUFDRyxJQUFOLENBQVAsQ0FBbUI1QyxLQUFuQjtBQUNELEtBRkQsQ0FFRSxPQUFPRSxDQUFQLEVBQVU7QUFDVixZQUFNLElBQUlHLFVBQUosQ0FBZSx3Q0FBZixDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJb0MsSUFBSSxDQUFDRSxNQUFMLFlBQXVCRCxNQUEzQixFQUFtQztBQUNqQyxRQUFNeEwsS0FBSyxHQUFHOEksS0FBSyxDQUFDMkIsS0FBTixDQUFZYyxJQUFJLENBQUNFLE1BQWpCLENBQWQ7O0FBQ0EsUUFBSXpMLEtBQUosRUFBVztBQUNULFVBQUkzQixLQUFLLENBQUNDLE9BQU4sQ0FBY2lOLElBQUksQ0FBQ2QsS0FBbkIsS0FBNkJjLElBQUksQ0FBQ2QsS0FBTCxDQUFXL0ksT0FBWCxDQUFtQjFCLEtBQUssQ0FBQyxDQUFELENBQXhCLE1BQWlDLENBQUMsQ0FBbkUsRUFBc0U7QUFDcEUsY0FBTSxJQUFJbUosVUFBSixDQUFlLHdDQUFmLENBQU47QUFDRDtBQUNGLEtBSkQsTUFJTztBQUNMLFlBQU0sSUFBSUEsVUFBSixDQUFlLHdDQUFmLENBQU47QUFDRDtBQUNGLEdBVEQsTUFTTztBQUNMLFFBQUk5SyxLQUFLLENBQUNDLE9BQU4sQ0FBY2lOLElBQUksQ0FBQ2QsS0FBbkIsS0FBNkJjLElBQUksQ0FBQ2QsS0FBTCxDQUFXL0ksT0FBWCxDQUFtQm9ILEtBQW5CLE1BQThCLENBQUMsQ0FBaEUsRUFBbUU7QUFDakUsWUFBTSxJQUFJSyxVQUFKLENBQWUsd0NBQWYsQ0FBTjtBQUNEO0FBQ0Y7O0FBR0QsU0FBT1IsR0FBUDtBQUNEOztJQUdLVixLO0FBQ0osaUJBQWFzRCxJQUFiLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUt6RCxRQUFMLEdBQWdCeUQsSUFBaEI7QUFDQSxTQUFLQSxJQUFMLEdBQVlELFlBQVksQ0FBQ0MsSUFBRCxDQUF4QjtBQUNEOzs7O2dDQUVZdkQsSyxFQUFPO0FBQ2xCLGFBQU9ZLFlBQVcsQ0FBQyxLQUFLMkMsSUFBTixFQUFZLEtBQUt2RCxLQUFqQixDQUFsQjtBQUNEOzs7K0JBRVdjLEssRUFBTztBQUNqQixVQUFJLEtBQUt5QyxJQUFMLENBQVV6QyxLQUFWLEtBQW9CdEgsU0FBeEIsRUFBbUM7QUFDakMsZUFBTyxLQUFLK0osSUFBTCxDQUFVekMsS0FBakI7QUFDRDs7QUFDRCxVQUFJLFFBQU9BLEtBQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDN0JBLGFBQUssR0FBR0EsS0FBSyxDQUFDQSxLQUFkO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUJwSCxPQUFyQixTQUFvQ29ILEtBQXBDLEVBQUwsRUFBaUQ7QUFDL0MsZUFBT1QsV0FBVSxDQUFDLEtBQUtrRCxJQUFOLEVBQVksS0FBR3pDLEtBQWYsQ0FBakI7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFNLElBQUlsSSxLQUFKLENBQVUsc0ZBQVYsQ0FBTjtBQUNEO0FBQ0Y7Ozs0QkFFUThLLEksRUFBTTtBQUNiLFdBQUtILElBQUwsQ0FBVUcsSUFBVixHQUFpQkEsSUFBakI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O2lDQUVhQyxTLEVBQVc7QUFDdkIsVUFBSSxPQUFPQSxTQUFQLEtBQXFCLFVBQXpCLEVBQXFDO0FBQ25DLGFBQUtKLElBQUwsQ0FBVUksU0FBVixHQUFzQkEsU0FBdEI7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFNLElBQUkvSyxLQUFKLENBQVUsc0NBQVYsQ0FBTjtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7OEJBRVU2SyxNLEVBQVE7QUFDakIsVUFBSUEsTUFBTSxZQUFZRCxNQUF0QixFQUE4QjtBQUM1QixhQUFLRCxJQUFMLENBQVVFLE1BQVYsR0FBbUJBLE1BQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBTSxJQUFJTSxTQUFKLENBQWMsNkNBQWQsQ0FBTjtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7K0JBRVdDLE8sRUFBUztBQUNuQixVQUFJLENBQUMsS0FBS1QsSUFBTCxDQUFVZCxLQUFmLEVBQXNCO0FBQ3BCLGFBQUtjLElBQUwsQ0FBVWQsS0FBVixHQUFrQixFQUFsQjtBQUNEOztBQUNELFdBQUtjLElBQUwsQ0FBVWQsS0FBVixDQUFnQm5MLElBQWhCLENBQXFCME0sT0FBckI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O2dDQUVZQyxRLEVBQVU7QUFDckIsVUFBSTVOLEtBQUssQ0FBQ0MsT0FBTixDQUFjMk4sUUFBZCxDQUFKLEVBQTZCO0FBQzNCLGFBQUtWLElBQUwsQ0FBVWQsS0FBVixHQUFrQndCLFFBQWxCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBTSxJQUFJRixTQUFKLENBQWMsb0NBQWQsQ0FBTjtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7K0JBRVc7QUFDVixVQUFJLE9BQU8sS0FBS2pFLFFBQVosS0FBeUIsUUFBN0IsRUFBdUM7QUFDckMsZUFBTyxLQUFLQSxRQUFaO0FBQ0Q7O0FBQ0QsVUFBTTlJLEdBQUcsR0FBSSxLQUFLdU0sSUFBTCxDQUFVZCxLQUFWLElBQW1CLEtBQUtjLElBQUwsQ0FBVVcsSUFBVixDQUFlLENBQWYsQ0FBbkIsSUFBeUMsS0FBS1gsSUFBTCxDQUFVRyxJQUFWLElBQW1CLE1BQU0sS0FBS0gsSUFBTCxDQUFVRyxJQUE1RSxJQUFzRixHQUFuRzs7QUFDQSxVQUFJLEtBQUtILElBQUwsQ0FBVXRNLEdBQWQsRUFBbUI7QUFDakIseUJBQVUsS0FBS3NNLElBQUwsQ0FBVXRNLEdBQXBCLGNBQTJCRCxHQUEzQjtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBS3VNLElBQUwsQ0FBVXpDLEtBQVYsS0FBb0J0SCxTQUFwQixHQUFnQ3hDLEdBQWhDLEdBQXNDLEtBQUt1TSxJQUFMLENBQVV6QyxLQUF2RDtBQUNEO0FBQ0Y7Ozs4QkFFaUJsTCxJLEVBQU11TyxTLEVBQVc7QUFDakMsVUFBSSxFQUFFLE9BQU9BLFNBQVAsS0FBcUIsVUFBdkIsQ0FBSixFQUF3QztBQUN0QyxjQUFNLElBQUlKLFNBQUosQ0FBYyx1Q0FBZCxDQUFOO0FBQ0Q7O0FBQ0QsVUFBSXZDLE9BQU8sQ0FBQzVMLElBQUQsQ0FBWCxFQUFtQjtBQUNqQixjQUFNLElBQUltTyxTQUFKLGdCQUFzQm5PLElBQXRCLHFCQUFOO0FBQ0Q7O0FBQ0Q0TCxhQUFPLENBQUM1TCxJQUFELENBQVAsR0FBZ0J1TyxTQUFoQjtBQUNEOzs7Ozs7ZUFJWWxFLEsiLCJmaWxlIjoiL2hvbWUvdi5jb3VydGluQGdvcC5saW5rL3d3dy9hbW9uaXRlLWNyYWZ0L21vZHVsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudFRhcmdldCBmcm9tIFwiLi9saWJzL2xheW91dC9ldmVudC10YXJnZXRcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vbGlicy9sYXlvdXQvY29tcG9uZW50XCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9saWJzL2xheW91dC9zZWN0aW9uXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9saWJzL2xheW91dC9wYWdlXCI7XG5pbXBvcnQgeyBkZWZpbmUsIEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4vbGlicy9sYXlvdXQvZGVmaW5lXCI7XG5cbmltcG9ydCBhamF4IGZyb20gXCIuL2xpYnMvcmVxdWVzdC9hamF4XCI7XG5pbXBvcnQgUmVzb3VyY2UgZnJvbSBcIi4vbGlicy9yZXF1ZXN0L3Jlc291cmNlXCI7XG5cbmltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vbGlicy9yb3V0ZXIvcm91dGVyXCI7XG5pbXBvcnQgUm91dGUgZnJvbSBcIi4vbGlicy9yb3V0ZXIvcm91dGVcIjtcblxuZnVuY3Rpb24gaW5pdCAodGhlbikge1xuICBpZiAodHlwZW9mIHRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgIHRoZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoZW4pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0QWxsICh0aGVuKSB7XG4gIGluaXQoKCkgPT4ge1xuICAgIFBhZ2Uuc2V0Q29udGFpbmVyKCk7XG4gICAgUm91dGVyLmxpc3RlblBvcHN0YXRlKCk7XG4gICAgaWYgKHR5cGVvZiB0aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoZW4oKTtcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IEFtb25pdGUgPSB7XG4gIENvbXBvbmVudCxcbiAgU2VjdGlvbixcbiAgUGFnZSxcbiAgZGVmaW5lLFxuICBDdXN0b21IVE1MRWxlbWVudCxcblxuICBhamF4LFxuICBSZXNvdXJjZSxcblxuICBSb3V0ZXIsXG4gIFJvdXRlLFxuXG4gIGluaXQsXG4gIGluaXRBbGxcbn07XG5cbmV4cG9ydCB7XG4gIEV2ZW50VGFyZ2V0LFxuICBDb21wb25lbnQsXG4gIFNlY3Rpb24sXG4gIFBhZ2UsXG4gIGRlZmluZSxcbiAgQ3VzdG9tSFRNTEVsZW1lbnQsXG5cbiAgYWpheCxcbiAgUmVzb3VyY2UsXG5cbiAgUm91dGVyLFxuICBSb3V0ZSxcblxuICBpbml0LFxuICBpbml0QWxsLFxuXG4gIEFtb25pdGUgYXMgZGVmYXVsdFxufTtcbiIsImltcG9ydCBFdmVudFRhcmdldCBmcm9tIFwiLi9ldmVudC10YXJnZXRcIlxuXG5cbmZ1bmN0aW9uIGNvbnRhaW5lciAoZWwsIHNlbGYsIGFyZ3MpIHtcbiAgaWYgKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gY29udGFpbmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpLCBzZWxmLCBhcmdzKVxuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lcihlbC5hcHBseShzZWxmLCBhcmdzKSwgc2VsZiwgYXJncylcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIHRlbXBsYXRlIChlbCwgc2VsZiwgYXJncykge1xuICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBlbFxuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKGVsLmFwcGx5KHNlbGYsIGFyZ3MpLCBzZWxmLCBhcmdzKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY29tcG9uZW50XCIsIHNlbGYuY29uc3RydWN0b3IubmFtZSlcbiAgICBpZiAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gZWxcbiAgICB9XG4gICAgcmV0dXJuIGRpdlxuICB9XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzIChlbCwgc2VsZiwgYXJncykge1xuICBjb25zdCBpbnRvID0gc2VsZi50ZW1wbGF0ZVxuICBpZiAodHlwZW9mIGVsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gZWxlbWVudHMoZWwuYXBwbHkoc2VsZiwgYXJncyksIHNlbGYsIGFyZ3MpXG4gIH1cbiAgZWxzZSBpZiAoKHR5cGVvZiBlbCA9PT0gXCJvYmplY3RcIikgJiYgKChpbnRvKSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9XG4gICAgT2JqZWN0LmtleXMoZWwpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGlmIChlbFtuYW1lXSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJlc3VsdFtuYW1lXSA9IFtlbFtuYW1lXV1cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZWxbbmFtZV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmVzdWx0W25hbWVdID0gWy4uLmludG8ucXVlcnlTZWxlY3RvckFsbChlbFtuYW1lXSldXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGVsW25hbWVdKSkge1xuICAgICAgICByZXN1bHRbbmFtZV0gPSBlbFtuYW1lXVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50cyAoZWwsIHNlbGYsIGFyZ3MsIHBhcmVudF9zZWxlY3RvcnMgPSBbXSwgcGFyZW50X2V2ZW50cyA9IFtdKSB7XG4gIGlmICh0eXBlb2YgZWwgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmIChwYXJlbnRfZXZlbnRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsLmFwcGx5KHNlbGYsIGFyZ3MpXG4gICAgICB9O1xuICAgICAgZXZlbnRzX2dldHRhcmdldHMocGFyZW50X3NlbGVjdG9ycywgc2VsZikuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICBwYXJlbnRfZXZlbnRzLmZvckVhY2goZXZlbnRuYW1lID0+IHtcbiAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGVsKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRzKGVsLmFwcGx5KHNlbGYsIGFyZ3MpLCBzZWxmLCBhcmdzLCBwYXJlbnRfc2VsZWN0b3JzLCBwYXJlbnRfZXZlbnRzKVxuICAgIH1cbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNlbGZbZWxdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBldmVudHNfZ2V0dGFyZ2V0cyhwYXJlbnRfc2VsZWN0b3JzLCBzZWxmKS5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICBwYXJlbnRfZXZlbnRzLmZvckVhY2goZXZlbnRuYW1lID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBzZWxmW2VsXS5iaW5kKHNlbGYpKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XG4gICAgZWwuZm9yRWFjaCh2YWwgPT4gZXZlbnRzKHZhbCwgc2VsZiwgYXJncywgcGFyZW50X3NlbGVjdG9ycywgcGFyZW50X2V2ZW50cykpXG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm9iamVjdFwiKSB7XG4gICAgT2JqZWN0LmtleXMoZWwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IHtzZWxlY3RvcnMsIGV2ZW50bmFtZXN9ID0gZXZlbnRzX2tleXNwbGl0KGtleSlcbiAgICAgIHBhcmVudF9zZWxlY3RvcnMuZm9yRWFjaChzZWwgPT4gc2VsZWN0b3JzLnB1c2goc2VsKSlcbiAgICAgIHBhcmVudF9ldmVudHMuZm9yRWFjaChldiA9PiBldmVudG5hbWVzLnB1c2goZXYpKVxuICAgICAgZXZlbnRzKGVsW2tleV0sIHNlbGYsIGFyZ3MsIHNlbGVjdG9ycywgZXZlbnRuYW1lcylcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50c19rZXlzcGxpdCAoa2V5KSB7XG4gIGNvbnN0IHNwbGl0ID0ga2V5LnNwbGl0KC9bXFxuXFxzXSsvZylcbiAgY29uc3Qgc2VsZWN0b3JzID0gW10sIGV2ZW50bmFtZXMgPSBbXVxuICBzcGxpdC5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAoZWxbMF0gPT09IFwiQFwiKSB7XG4gICAgICBldmVudG5hbWVzLnB1c2goZWwuc3Vic3RyKDEpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RvcnMucHVzaChlbClcbiAgICB9XG4gIH0pXG4gIHJldHVybiB7XG4gICAgc2VsZWN0b3JzOiBzZWxlY3RvcnMuam9pbignICcpLnNwbGl0KC8sL2cpLmZpbHRlcihuPT5uLmxlbmd0aCksXG4gICAgZXZlbnRuYW1lczogZXZlbnRuYW1lcy5qb2luKCcsJykuc3BsaXQoLywrL2cpLmZpbHRlcihuPT5uLmxlbmd0aClcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudHNfZ2V0dGFyZ2V0cyhzZWxlY3RvcnMsIHNlbGYpIHtcbiAgY29uc3QgdGFyZ2V0cyA9IFtdXG5cbiAgc2VsZWN0b3JzLm1hcChzZWxlY3RvciA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gZXZlbnRzX2dldHRhcmdldHMoc2VsZWN0b3IsIHNlbGYpXG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGYuZWxlbWVudHNbc2VsZWN0b3JdKSkge1xuICAgICAgcmV0dXJuIHNlbGYuZWxlbWVudHNbc2VsZWN0b3JdXG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBbLi4uc2VsZi50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV1cbiAgICB9XG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvclxuICAgIH1cbiAgfSkuZm9yRWFjaChmb3VuZCA9PiBmb3VuZC5maWx0ZXIoZWwgPT4gZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkuZm9yRWFjaCh0YXJnZXQgPT4gdGFyZ2V0cy5wdXNoKHRhcmdldCkpKVxuXG4gIHJldHVybiB0YXJnZXRzXG59XG5cblxuXG4vKipcbiAqICBAY2xhc3MgPENvbXBvbmVudD4gaXMgdXNlZCB0byBidWlsZCBET00gZWxlbWVudHMsIGdlbmVyYXRpbmcgZGF0YSwgdGVtcGxhdGUgJiBldmVudHMuXG4gKiAgICBBIGNvbXBvbmVudCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAvKipcbiAgICogQG1ldGhvZCA8Y29uc3RydWN0b3I+IGJ1aWxkIHRoaXMgb2JqZWN0XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfGZ1bmN0aW9ufSBjb250YWluZXIgd2lsbCBjb250YWluIHRoaXMgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzLi4uIGFyZSBwYXNzZWQgaW4gdGVtcGxhdGUsIGVsZW1lbnRzIGFuZCBldmVudHMgZnVuY3Rpb25zXG4gICAqIEByZXR1cm4ge0NvbXBvbmVudH0gc2VsZlxuICAgKi9cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2J1aWxkZXJcIiwge1xuICAgICAgXCJlbnVtZXJhYmxlXCI6IGZhbHNlLFxuICAgICAgXCJjb25maWd1cmFibGVcIjogZmFsc2UsXG4gICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG4gICAgICAgIGVsZW1lbnRzOiB0aGlzLmVsZW1lbnRzLFxuICAgICAgICBldmVudHM6IHRoaXMuZXZlbnRzXG4gICAgICB9XG4gICAgfSlcblxuXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy50ZW1wbGF0ZSA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnRzID0gW11cbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICB0aGlzLnNldFRlbXBsYXRlKC4uLltudWxsLCAuLi5hcmd1bWVudHNdKVxuXG4gICAgaWYgKHRoaXMuX2J1aWxkZXIuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNldENvbnRhaW5lcih0aGlzLl9idWlsZGVyLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxzZXRUZW1wbGF0ZT4gYnVpbGQgdGhlIERPTSBvZiB0aGlzIENvbXBvbmVudCwgdGhlbiBsaXN0IGVsZW1lbnRzLFxuICAgKiAgICBmaW5hbGx5IGxpbmsgZWxlbWVudHMgd2l0aCBldmVudHMgZnVuY3Rpb25zXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8ZnVuY3Rpb258c3RyaW5nfSBkb20gaXMgdGhlIEhUTUwgb2YgdGhpcyBjb21wb25lbnRcbiAgICogQHBhcmFtIHsqfSBhcmd1bWVudHMuLi4gYXJlIHBhc3NlZCBpbiB0ZW1wbGF0ZSwgZWxlbWVudHMgYW5kIGV2ZW50cyBmdW5jdGlvbnNcbiAgICogQHJldHVybiB7Q29tcG9uZW50fSBzZWxmXG4gICAqL1xuXG4gIHNldFRlbXBsYXRlICgpIHtcbiAgICBjb25zdCBbZG9tLCAuLi5hcmdzXSA9IFsuLi5hcmd1bWVudHNdLFxuICAgICAgdHBsID0gdGVtcGxhdGUoZG9tIHx8IHRoaXMuX2J1aWxkZXIudGVtcGxhdGUsIHRoaXMsIGFyZ3MpXG4gICAgaWYgKHRwbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0aGlzLnRlbXBsYXRlID0gdHBsXG4gICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHModGhpcy5fYnVpbGRlci5lbGVtZW50cywgdGhpcywgYXJncylcbiAgICAgIGV2ZW50cyh0aGlzLl9idWlsZGVyLmV2ZW50cywgdGhpcywgYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPHNldENvbnRhaW5lcj4gc2V0IGZpcnN0IHBhcmFtZXRlciBhcyBwYXJlbnQgb2YgdGhpcyBjb21wb25lbnRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd8ZnVuY3Rpb259IGVsZW1lbnQgd2lsbCBjb250YWluIHRoaXMgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzLi4uIGFyZSBwYXNzZWQgaW4gdGVtcGxhdGUsIGVsZW1lbnRzIGFuZCBldmVudHMgZnVuY3Rpb25zXG4gICAqIEByZXR1cm4ge0NvbXBvbmVudH0gc2VsZlxuICAgKi9cblxuICBzZXRDb250YWluZXIgKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ID0gY29udGFpbmVyKGVsZW1lbnQsIHRoaXMsIGFyZ3VtZW50cylcbiAgICBpZiAoY29udCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRcbiAgICAgIGlmICh0aGlzLnRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQ0hJTEQgQ09NUE9ORU5UUyBNQU5BR0VSXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGNsZWFyRWxlbWVudD4gY2xlYXIgYW4gSFRNTCBlbGVtZW50IG9mIHRoaXMgQ29tcG9uZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIGlzIHRoZSBuYW1lIG9mIHRoZSBIVE1MIGVsZW1lbnRcbiAgICogQHJldHVybiB7Q29tcG9uZW50fSBzZWxmXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBpZiB0aGUgbmFtZSBkb2VzIG5vdCBtYXRjaCBhbiBlbGVtZW50XG4gICAqL1xuXG4gIGNsZWFyRWxlbWVudCAobmFtZSkge1xuICAgIGxldCBlbGVtZW50XG4gICAgaWYgKHRoaXMuZWxlbWVudHNbbmFtZV0gJiYgKFtlbGVtZW50XSA9IHRoaXMuZWxlbWVudHNbbmFtZV0pKSB7XG4gICAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKVxuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IFwiJHtuYW1lfVwiIGlzIG5vdCBhbiBlbGVtZW50IG9mIHRoaXMgY29tcG9uZW50YClcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxhcHBlbmRDb21wb25lbnQ+IGFwcGVuZCBhIENvbXBvbmVudCBpbiB0aGlzIENvbXBvbmVudCBIVE1MIGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgaXMgdGhlIG5hbWUgb2YgdGhlIEhUTUwgZWxlbWVudFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IGlzIHRoZSBDb21wb25lbnQgdG8gYXBwZW5kIGluIHRoZSBIVE1MIGVsZW1lbnRcbiAgICogQHJldHVybiB7Q29tcG9uZW50fSBzZWxmXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBpZiB0aGUgbmFtZSBkb2VzIG5vdCBtYXRjaCBhbiBlbGVtZW50IG9yIGlmIHRoZSBjb21wb25lbnRcbiAgICogICAgaXMgbm90IGEgQ29tcG9uZW50IGluc3RhbmNlLlxuICAgKi9cblxuICBhcHBlbmRDb21wb25lbnQgKG5hbWUsIGNvbXBvbmVudCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgaWYgKHRoaXMuZWxlbWVudHNbbmFtZV0gJiYgKFtlbGVtZW50XSA9IHRoaXMuZWxlbWVudHNbbmFtZV0pKSB7XG4gICAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRDb250YWluZXIoZWxlbWVudClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZWNvbmQgcGFyYW1ldGVyIGlzIG5vdCBhIENvbXBvbmVudCBvYmplY3RcIilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgXCIke25hbWV9XCIgaXMgbm90IGFuIGVsZW1lbnQgb2YgdGhpcyBjb21wb25lbnRgKVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGZpbGxDb21wb25lbnQ+IHNldCBjb21wb25lbnQgYXMgb25seSBjaGlsZCBvZiBIVE1MIGVsZW1lbnQgb2YgdGhpc1xuICAgKiAgICBieSBjbGVhcmluZyB0aGVuIGFwcGVuZGluZyBDb21wb25lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIGlzIHRoZSBuYW1lIG9mIHRoZSBIVE1MIGVsZW1lbnRcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudCBpcyB0aGUgQ29tcG9uZW50IHRvIGFwcGVuZCBpbiB0aGUgSFRNTCBlbGVtZW50XG4gICAqIEByZXR1cm4ge0NvbXBvbmVudH0gc2VsZlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gaWYgdGhlIG5hbWUgZG9lcyBub3QgbWF0Y2ggYW4gZWxlbWVudCBvciBpZiB0aGUgY29tcG9uZW50XG4gICAqICAgIGlzIG5vdCBhIENvbXBvbmVudCBpbnN0YW5jZS5cbiAgICovXG5cbiAgZmlsbENvbXBvbmVudCAobmFtZSwgY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJFbGVtZW50KG5hbWUpLmFwcGVuZENvbXBvbmVudChuYW1lLCBjb21wb25lbnQpXG4gIH1cblxuXG4gIC8vIFRFTVBMQVRFIEJVSUxERVJTXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPHRlbXBsYXRlPiBzaG91bGQgYmUgb3ZlcnJpZGVuIGFuZCBzaG91bGQgcmV0dXJuIHRleHQgaW4gSFRNTFxuICAgKiAgICBmb3JtYXQgb3IgYW4gSFRNTEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzLi4uIGFyZSB0cmFuc2ZlcmVkIGZyb20gPGNvbnN0cnVjdG9yPlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8SFRNTEVsZW1lbnR8ZnVuY3Rpb259XG4gICAqL1xuXG4gIHRlbXBsYXRlICgpIHtcbiAgICByZXR1cm4gXCJcIlxuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCA8ZWxlbWVudHM+IHNob3VsZCBiZSBvdmVycmlkZW4gYW5kIHNob3VsZCByZXR1cm4gb2JqZWN0IHdoZXJlIGtleXNcbiAgICogICAgYXJlIHRoZSBuYW1lLCBhbmQgdGhlIHZhbHVlcyBhcmUgdGhlIHNlbGVjdG9yIGluIHRoaXMgY29tcG9uZW50IChub3RcbiAgICogICAgaXRzIGNoaWxkcmVuISkuXG4gICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzLi4uIGFyZSB0cmFuc2ZlcmVkIGZyb20gPGNvbnN0cnVjdG9yPlxuICAgKiBAcmV0dXJuIHtvYmplY3QuPHthcnJheS48e0hUTUxFbGVtZW50fS4uLj59IHNlbGVjdG9yPnxmdW5jdGlvbn1cbiAgICogQHdhcm4gdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBzZWxlY3QgY2hpbGQgY29tcG9uZW50cyBlbGVtZW50cy5cbiAgICovXG5cbiAgZWxlbWVudHMgKCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCA8ZXZlbnRzPiBzaG91bGQgYmUgb3ZlcnJpZGVuIGFuZCBzaG91bGQgcmV0dXJuIG9iamVjdCB3aGVyZSBrZXlzXG4gICAqICAgIGFyZSB0aGUgbmFtZSBzcGFjZWQgd2l0aCBldmVudCwgYW5kIHRoZSB2YWx1ZXMgYXJlIHRoZSBjb21wb25lbnQgbWV0aG9kc1xuICAgKiAgICB0byBjYWxsIHdoZW4gZXZlbnQgaXMgdHJpZ2dlcmVkIChub3QgaXRzIGNoaWxkcmVuISkuXG4gICAqIEBwYXJhbSB7Kn0gYXJndW1lbnRzLi4uIGFyZSB0cmFuc2ZlcmVkIGZyb20gPGNvbnN0cnVjdG9yPlxuICAgKiBAcmV0dXJuIHtvYmplY3QuPHt9IHNlbGVjdG9yX2V2ZW50PnxmdW5jdGlvbn1cbiAgICovXG5cbiAgZXZlbnRzICgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGNvbnRhaW5lcj4gc2hvdWxkIGJlIG92ZXJyaWRlbiBhbmQgc2hvdWxkIHJldHVybiBhbiBIVE1MRWxlbWVudFxuICAgKiAgICB3aGljaCB3aWxsIGNvbnRhaW4gdGhpcyBjb21wb25lbnQncyB0ZW1wbGF0ZS5cbiAgICpcbiAgICovXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJfX2V2ZW50c19fXCIsIHtcbiAgICAgIFwiZW51bWVyYWJsZVwiOiBmYWxzZSxcbiAgICAgIFwiY29uZmlndXJhYmxlXCI6IGZhbHNlLFxuICAgICAgXCJ2YWx1ZVwiOiB7fVxuICAgIH0pXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxsaXN0ZW4+IGxpc3RlbiBhbiBldmVudCAke2V2ZW50TmFtZX0gaGFwcGVuaW5nIGFuZCByZWdpc3RlciB0aGVcbiAgICogICAgZnVuY3Rpb24gJHtmbn0gdG8gZXhlY3V0ZSBpdCB3aGVuIGV2ZW50IGhhcHBlbi5cbiAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufEFycmF5fSBmblxuICAgKiBAcmV0dXJuIHtDb21wb25lbnR9IHNlbGZcbiAgICovXG5cbiAgbGlzdGVuIChldmVudE5hbWUsIGZuKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdCA9IGV2ZW50TmFtZS5zcGxpdCgvW1xcblxccyxdKy9nKVxuICAgICAgaWYgKHQubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW4oWy4uLnRdLCBmbilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShldmVudE5hbWUpKSB7XG4gICAgICBldmVudE5hbWUuZm9yRWFjaCgoZXYpID0+IHtcbiAgICAgICAgc2VsZi5saXN0ZW4oZXYsIGZuKVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGZuKSkge1xuICAgICAgZm4uZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBzZWxmLmxpc3RlbihldmVudE5hbWUsIGYpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGV2cyA9IHRoaXNbXCJfX2V2ZW50c19fXCJdXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXZzW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgIGV2c1tldmVudE5hbWVdID0gW11cbiAgICAgIH1cbiAgICAgIGV2c1tldmVudE5hbWVdLnB1c2goZm4pXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxkaXNwYXRjaD4gdHJpZ2dlciBhbiBldmVudCAke2V2ZW50TmFtZX0gaGFwcGVuaW5nIGFuZCBleGVjdXRlIHRoZVxuICAgKiAgICByZWdpc3RlcmVkIGZ1bmN0aW9ucy5cbiAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBhcmdzXG4gICAqIEByZXR1cm4ge0NvbXBvbmVudH0gc2VsZlxuICAgKi9cblxuICBkaXNwYXRjaCAoZXZlbnROYW1lLCBhcmdzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdCA9IGV2ZW50TmFtZS5zcGxpdCgvW1xcblxccyxdKy9nKVxuICAgICAgaWYgKHQubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChbLi4udF0sIGFyZ3MpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnROYW1lKSkge1xuICAgICAgZXZlbnROYW1lLmZvckVhY2goKGV2KSA9PiB7XG4gICAgICAgIHNlbGYuZGlzcGF0Y2goZXYsIGFyZ3MpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBjb25zdCBldnMgPSB0aGlzW1wiX19ldmVudHNfX1wiXVxuICAgIGlmICghQXJyYXkuaXNBcnJheShldnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIGV2c1tldmVudE5hbWVdID0gW11cbiAgICB9XG4gICAgZXZzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZm4oKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGRldGFjaD4gcmVtb3ZlIHRoZSByZWdpc3RlcmVkIGZ1bmN0aW9uICR7Zm59IGxpc3RlbmVkIGJ5IGV2ZW50XG4gICAqICAgICR7ZXZlbnROYW1lfSwgb3IgYWxsIG9mIGl0cyBmdW5jdGlvbnMgaWYgJHtmbn0gaXMgdW5kZWZpbmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbnxBcnJheX0gZm5cbiAgICogQHJldHVybiB7Q29tcG9uZW50fSBzZWxmXG4gICAqL1xuXG4gIGRldGFjaCAoZXZlbnROYW1lLCBmbikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgaWYgKHR5cGVvZiBldmVudE5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHQgPSBldmVudE5hbWUuc3BsaXQoL1tcXG5cXHMsXSsvZylcbiAgICAgIGlmICh0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV0YWNoKFsuLi50XSwgZm4pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnROYW1lKSkge1xuICAgICAgZXZlbnROYW1lLmZvckVhY2goKGV2KSA9PiB7XG4gICAgICAgIHNlbGYuZGV0YWNoKGV2LCBmbilcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbikpIHtcbiAgICAgIGZuLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgc2VsZi5kZXRhY2goZXZlbnROYW1lLCBmKVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgY29uc3QgZXZzID0gdGhpc1tcIl9fZXZlbnRzX19cIl1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXZzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBldnNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuICAgIGlmIChmbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBldnNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXZzW2V2ZW50TmFtZV0gPSBldnNbZXZlbnROYW1lXS5zcGxpY2UoZXZzW2V2ZW50TmFtZV0uaW5kZXhPZihmbikpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxsaXN0ZW5PbmNlPiBsaXN0ZW4gZXZlbnQgJHtldmVudE5hbWV9IGhhcHBlbmluZyBmb3IgZXhlY3V0aW5nXG4gICAqICAgIGZ1bmN0aW9uICR7Zm59IG9ubHkgb25lIHRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbnxBcnJheX0gZm5cbiAgICogQHJldHVybiB7Q29tcG9uZW50fSBzZWxmXG4gICAqL1xuXG4gIGxpc3Rlbk9uY2UgKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcyxcbiAgICAgIGRlbCA9ICgpID0+IHtcbiAgICAgICAgc2VsZi5kZXRhY2goZXZlbnROYW1lLCBbZm4sIGRlbF0pXG4gICAgICB9XG4gICAgdGhpcy5saXN0ZW4oZXZlbnROYW1lLCBbZm4sIGRlbF0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIlxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZVwiXG5cbi8qKlxuICogQGNsYXNzIDxTZWN0aW9uPiBpcyBhIENvbXBvbmVudCB3aGljaCBzaG91bGQgYmUgb25seSBjaGlsZCBvZiBhIHBhZ2UgKHdoaWNoXG4gKiAgICBpcyB0aGUgb25seSBjaGlsZCBvZiBEb2N1bWVudCBib2R5KSBhdCB0aW1lLlxuICogQHdhcm4gU2VjdGlvbi53cmFwcGVyKCkgc2hvdWxkIHJldHVybiBhIFBhZ2UgY29uc3RydWN0b3IsIGVsc2Ugbm90aGluZyBpc1xuICogICAgZGlzcGxheWVkLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGNvbnN0cnVjdG9yPlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBpcyB0cmFuc2ZlcmVkIHRvIFNlY3Rpb24udGVtcGxhdGUsIFNlY3Rpb24uZWxlbWVudHNcbiAgICogICAgYW5kIFNlY3Rpb24uZXZlbnRzLlxuICAgKiBAcmV0dXJuIHtTZWN0aW9ufSBzZWxmXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpXG4gICAgdGhpcy50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoXCJzZWN0aW9uXCIsIHRoaXMudGVtcGxhdGUuZ2V0QXR0cmlidXRlKFwiY29tcG9uZW50XCIpKVxuICAgIHRoaXMudGVtcGxhdGUucmVtb3ZlQXR0cmlidXRlKFwiY29tcG9uZW50XCIpXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxzZXRTZWN0aW9uPiBzZXQgdGhpcyBzZWN0aW9uIGluIERvY3VtZW50IGFzIG9ubHkgY2hpbGQgb2YgYSBQYWdlXG4gICAqICAgIGFuZCBQYWdlIGluc3RhbmNlIGFzIG9ubHkgY2hpbGQgb2YgRG9jdW1lbnQgYm9keS5cbiAgICogQHJldHVybiB7U2VjdGlvbn0gc2VsZlxuICAgKi9cblxuICBzZXRTZWN0aW9uICgpIHtcbiAgICBjb25zdCBwYWdlID0gdGhpcy5nZXRXcmFwcGVyKClcbiAgICBpZiAocGFnZSkge1xuICAgICAgcGFnZS5zZXRQYWdlKHRoaXMpXG4gICAgICB0aGlzLl9idWlsZGVyLndyYXBwZXIgPSBwYWdlXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxnZXRXcmFwcGVyPiByZXR1cm5zIHNlY3Rpb24gd3JhcHBlciBjb21wb25lbnQsIGEgUGFnZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtQYWdlfSBhIGNvbXBvbmVudCB3aGljaCB3cmFwIHRoaXMgc2VjdGlvblxuICAgKi9cblxuICBnZXRXcmFwcGVyICgpIHtcbiAgICBpZiAoIXRoaXMuX2J1aWxkZXIud3JhcHBlcikge1xuICAgICAgdGhpcy5fYnVpbGRlci53cmFwcGVyID0gUGFnZS5nZXRQYWdlQnlDb25zdHJ1Y3Rvcih0aGlzLndyYXBwZXIoKSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkZXIud3JhcHBlclxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPHdyYXBwZXI+IHNob3VsZCBiZSBvdmVycmlkZW4gYW5kIHNob3VsZCByZXR1cm4gYSBQYWdlIGNoaWxkIGNsYXNzXG4gICAqICAgIGNvbnN0cnVjdG9yLlxuICAgKiBAcmV0dXJuIHtQYWdlfSB3aGljaCB3aWxsIHdyYXAgdGhpcyBzZWN0aW9uXG4gICAqL1xuXG4gIHdyYXBwZXIgKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsImZ1bmN0aW9uIGdldEN1c3RvbUNoaWxkcmVuIChub2RlKSB7XG4gIHJldHVybiBbLi4ubm9kZS5xdWVyeVNlbGVjdG9yQWxsKE9iamVjdC5rZXlzKERFRklORVMpLmpvaW4oXCIsXCIpLnRvVXBwZXJDYXNlKCkpXVxufVxuXG5mdW5jdGlvbiB0ZXN0IChub2RlKSB7XG4gIGNvbnN0IERlZiA9IERFRklORVNbbm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpXVxuICBpZiAoREVGSU5FRC5pbmRleE9mKG5vZGUpICE9PSAtMSkge1xuICAgIHJldHVyblxuICB9XG4gIGVsc2UgaWYgKERlZikge1xuICAgIG5ldyBEZWYobm9kZSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBjb25zdCBjaGlsZHJlbiA9IGdldEN1c3RvbUNoaWxkcmVuKG5vZGUpXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICAgIGlmICghY2hpbGRyZW4uZmlsdGVyKChfY2hpbGQpID0+IHsgcmV0dXJuIERFRklORUQuaW5kZXhPZihfY2hpbGQpID09PSAtMSB9KS5sZW5ndGgpIHtcbiAgICAgICAgICAgIERFRklORUQucHVzaChub2RlKVxuICAgICAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImxvYWRcIikpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBERUZJTkVELnB1c2gobm9kZSlcbiAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJsb2FkXCIpKVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgbm9kZS5jaGlsZE5vZGVzLmZvckVhY2godGVzdClcbiAgfVxufVxuXG5mdW5jdGlvbiBvbmxvYWQgKCkge1xuICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCh0ZXN0KVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgY25mID0ge1xuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9XG5cbiAgbW8ub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSwgY25mKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb25sb2FkKVxuaWYgKHdpbmRvdy5kb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgb25sb2FkKClcbn1cblxuXG5jb25zdCBERUZJTkVTID0ge31cbmNvbnN0IERFRklORUQgPSBbXVxuXG4vKipcbiAqIEBmdW5jdGlvbiA8ZGVmaW5lPiBydW4gYSBmdW5jdGlvbiAke2J1aWxkZXJ9IGVhY2ggJHtub2RlTmFtZX0gZmlyc3QgaW5zZXJ0aW9uXG4gKiAgICBpbiBjdXJyZW50IEhUTUwgRG9jdW1lbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbm9kZU5hbWUgaXMgdGhlIG5vZGVOYW1lIG9mIHlvdXIgSFRNTEVsZW1lbnQsIHBsZWFzZSB1c2UgY29ycmVjdCBzcGVsbGluZ1xuICogQHBhcmFtIHtGdW5jdGlvbn0gYnVpbGRlciBpcyB0aGUgZnVuY3Rpb24gcnVuIHdoZW4gYW4gSFRNTEVsZW1lbnQgdGhhdCBtYXRjaFxuICogICAgbm9kZU5hbWUgaXMgaW5zZXJ0ZWQgaW4gY3VycmVudCBIVE1MIERvY3VtZW50L1xuICovXG5cbmZ1bmN0aW9uIGRlZmluZSAobm9kZU5hbWUsIGJ1aWxkZXIpIHtcbiAgaWYgKHR5cGVvZiBub2RlTmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgc3RyaW5nICh0byBzZWxlY3QgaXRlbXMgYnkgbm9kZSBuYW1lIGluIGRvbSB0cmVlKVwiKVxuICBpZiAodHlwZW9mIGJ1aWxkZXIgIT09IFwiZnVuY3Rpb25cIilcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZWNvbmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIGNsYXNzIG9yIGEgZnVuY3Rpb24gKHRvIGNvbnN0cnVjdCBpdGVtKVwiKVxuICBERUZJTkVTW25vZGVOYW1lLnRvVXBwZXJDYXNlKCldID0gYnVpbGRlcjtcbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobm9kZU5hbWUudG9VcHBlckNhc2UoKSldLmZvckVhY2godGVzdClcbn1cblxuXG4vKipcbiAqIEBjbGFzcyA8Q3VzdG9tSFRNTEVsZW1lbnQ+IGlzIGFuIGFic3RyYWN0IGNsYXNzIGZvciBoZWxwaW5nIGRldlxuICovXG5cbmNsYXNzIEN1c3RvbUhUTUxFbGVtZW50IHtcbn1cblxuZXhwb3J0IHsgZGVmaW5lIGFzIGRlZmF1bHQsIGRlZmluZSwgQ3VzdG9tSFRNTEVsZW1lbnQgfVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIlxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vc2VjdGlvblwiXG5cbi8qKlxuICogQGNsYXNzIDxQYWdlPiBpcyBhIENvbXBvbmVudCB3aGljaCBpcyBzZXQgYXMgb25seSBjaGlsZCBvZiBEb2N1bWVudCBib2R5IGF0XG4gKiAgICB0aW1lLiBBIHNlY3Rpb24gaXMgZGVmaW5lZCB3aXRoIGEgUGFnZSwgc28gd2hlbiBhIHNlY3Rpb24gaXMgY2FsbGVkLCB0aGVcbiAqICAgIHBhZ2Ugd3JhcCB0aGUgb25seSBjaGlsZCBzZWN0aW9uIGluIHRoZSBwYWdlLiBJdCBzaW1wbGlmeSB0aGUgY29uc3RydWN0aW9uXG4gKiAgICBvZiB0aGUgRE9NLlxuICogQHdhcm4gUGFnZS5lbGVtZW50cyBzaG91bGQgY29udGFpbiBcInNlY3Rpb25cIiBlbGVtZW50XG4gKiBAYWR2aXNlIEEgc2luZ2xlIGNoaWxkIGNsYXNzIG9mIFBhZ2UgaW5zdGFuY2Ugc2hvdWxkIGV4aXN0cyBzbyBwbGVhc2VcbiAqICAgIGNhbGwgUGFnZS5nZXRQYWdlQnlDb25zdHJ1Y3RvcihwYWdlKSBpbiBzZWN0aW9uLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxjb25zdHJ1Y3Rvcj4gYXQgY29uc3RydWN0aW9uIG9mIHRoaXMgUGFnZSwgdGhlIHBhZ2UgZmlsbCB0aGVcbiAgICogICAgRG9jdW1lbnQgYm9keSBhcyBvbmx5IGNoaWxkLlxuICAgKiBAcmV0dXJuIHtQYWdlfSBzZWxmXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcihQYWdlLmNvbnRhaW5lcilcbiAgICB0aGlzLnRlbXBsYXRlLnNldEF0dHJpYnV0ZShcInBhZ2VcIiwgdGhpcy50ZW1wbGF0ZS5nZXRBdHRyaWJ1dGUoXCJjb21wb25lbnRcIikpXG4gICAgdGhpcy50ZW1wbGF0ZS5yZW1vdmVBdHRyaWJ1dGUoXCJjb21wb25lbnRcIilcbiAgICBQYWdlLmluc3RhbmNlc1t0aGlzLmNvbnN0cnVjdG9yLm5hbWVdID0gdGhpc1xuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCA8c2V0U2VjdGlvbj4gZmlsbCB0aGlzIHBhZ2Ugd2l0aCBhIFNlY3Rpb25cbiAgICogQHBhcmFtIHtTZWN0aW9ufSBzZWN0aW9uXG4gICAqIEByZXR1cm4ge1BhZ2V9IHNlbGZcbiAgICovXG5cbiAgc2V0U2VjdGlvbiAoc2VjdGlvbikge1xuICAgIGlmIChzZWN0aW9uIGluc3RhbmNlb2YgU2VjdGlvbikge1xuICAgICAgdGhpcy5maWxsQ29tcG9uZW50KFwic2VjdGlvblwiLCBzZWN0aW9uKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCA8c2V0UGFnZT4gc2V0IHRoaXMgcGFnZSBhcyBvbmx5IHBhZ2Ugd3JhcHBlciBvbiB0aGlzIERvY3VtZW50IGJvZHlcbiAgICogICAgYW5kIHNldCBhIHNlY3Rpb24gaWYgc2V0IGluIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIHtTZWN0aW9ufSBzZWN0aW9uXG4gICAqL1xuXG4gIHNldFBhZ2UgKHNlY3Rpb24pIHtcbiAgICBpZiAoUGFnZS5wYWdlICE9PSB0aGlzKSB7XG4gICAgICBjb25zdCBpbnRvID0gUGFnZS5jb250YWluZXJcbiAgICAgIHdoaWxlIChpbnRvLmZpcnN0Q2hpbGQpXG4gICAgICAgIGludG8ucmVtb3ZlQ2hpbGQoaW50by5maXJzdENoaWxkKVxuICAgICAgdGhpcy5zZXRDb250YWluZXIoaW50bylcbiAgICAgIFBhZ2UucGFnZSA9IHRoaXNcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2V0U2VjdGlvbihzZWN0aW9uKVxuICB9XG5cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIDxzZXRDb250YWluZXI+IHNldCB0aGUgY29udGFpbmVyIHdoZXJlIGV2ZXJ5IHBhZ2VzIHNob3VsZCBiZVxuICAgKiAgICBmaWxsZWQgaW4uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8RnVuY3Rpb258U3RyaW5nfSBpbnRvXG4gICAqL1xuXG4gIHN0YXRpYyBzZXRDb250YWluZXIgKGludG8pIHtcbiAgICBpZiAodHlwZW9mIGludG8gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIFBhZ2Uuc2V0Q29udGFpbmVyKGludG8oKSlcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpbnRvID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpbnRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnRvKVxuICAgIH1cbiAgICBpZiAoaW50byBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBQYWdlLmNvbnRhaW5lciA9IGludG9cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBQYWdlLmNvbnRhaW5lciA9IFBhZ2UuY29udGFpbmVyIHx8IGRvY3VtZW50LmJvZHlcbiAgICB9XG5cbiAgICBpZiAoUGFnZS5wYWdlKSB7XG4gICAgICBQYWdlLnBhZ2Uuc2V0Q29udGFpbmVyKGludG8pXG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIDxnZXRDdXJyZW50UGFnZT4gcmV0dXJucyBsYXN0IHBhZ2Ugc2V0IGluIGJvZHlcbiAgICogQHJldHVybiB7UGFnZX1cbiAgICovXG5cbiAgc3RhdGljIGdldEN1cnJlbnRQYWdlICgpIHtcbiAgICByZXR1cm4gUGFnZS5wYWdlXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gPGdldFBhZ2VCeUNvbnN0cnVjdG9yPiByZXR1cm5zIGEgUGFnZSBpbnN0YW5jZSBvZiAke0NvbnN0cn0gaWYgaXRcbiAgICogICAgZXhpc3RzIG9yIGEgbmV3IGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge1BhZ2V9IENvbnN0clxuICAgKiBAcmV0dXJuIHtQYWdlfVxuICAgKi9cblxuICBzdGF0aWMgZ2V0UGFnZUJ5Q29uc3RydWN0b3IgKENvbnN0cikge1xuICAgIGNvbnN0IGluc3QgPSBQYWdlLmluc3RhbmNlc1tDb25zdHIubmFtZV1cbiAgICBpZiAoaW5zdCBpbnN0YW5jZW9mIFBhZ2UpIHtcbiAgICAgIHJldHVybiBpbnN0XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBDb25zdHIoKVxuICAgIH1cbiAgfVxufVxuXG5QYWdlLmluc3RhbmNlcyA9IHt9XG5QYWdlLmNvbnRhaW5lciA9IG51bGxcbiIsIi8qKlxuICogIEBmdW5jdGlvbiA8YWpheD4gZXhlY3V0ZSBhIHJlcXVlc3QgdG8gc2VydmVyXG4gKiAgQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb258b2JqZWN0fSBtZXRob2Qgb3IgYnVpbGRlclxuICogIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSB1cmkgdG8gcmVzb3VyY2VcbiAqICBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gZGF0YSB0byBzZW5kIGluIHJlcXVlc3QgYm9keVxuICogIEBwYXJhbSB7ZnVuY3Rpb258QXJyYXkuPGZ1bmN0aW9uPn0gc3VjY2VzcyBmdW5jdGlvbnNcbiAqICBAcGFyYW0ge2Z1bmN0aW9ufEFycmF5LjxmdW5jdGlvbj59IGZhaWx1cmUgZnVuY3Rpb25zXG4gKiAgQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IGhlYWRlcnMgdG8gc2VuZCB0byByZXF1ZXN0IGhlYWRlcnNcbiAqICBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gb3ZlcnJpZGVNaW1lVHlwZSB0byBlbmZvcmNlIHJlc3BvbnNlIHJlYWRpbmcgZm9ybWF0XG4gKiAgQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuXG5mdW5jdGlvbiBhamF4ICguLi5hcmdzKSB7XG4gIGNvbnN0IGJ1aWxkZXIgPSBhamF4UGFyYW1ldGVycy5hcHBseShudWxsLCBhcmdzKVxuXG4gIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCAoKSA9PiB7XG4gICAgICByZXNvbHZlKHhocilcbiAgICB9KVxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0ICR7YnVpbGRlci5tZXRob2R9ICR7YnVpbGRlci51cml9IGZhaWxlZGApXG4gICAgICBlcnIueGhyID0geGhyXG4gICAgICByZWplY3QoZXJyKVxuICAgIH0pXG5cbiAgICB4aHIub3BlbihidWlsZGVyLm1ldGhvZCwgYnVpbGRlci51cmkpXG5cbiAgICBpZiAodHlwZW9mIGJ1aWxkZXIuaGVhZGVycyA9PT0gXCJvYmplY3RcIiAmJiBidWlsZGVyLmhlYWRlcnMgIT09IG51bGwpIHtcbiAgICAgIE9iamVjdC5rZXlzKGJ1aWxkZXIuaGVhZGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ciA9IHRyeUV4ZWMoYnVpbGRlci5oZWFkZXJzW2tleV0pXG4gICAgICAgIGlmICh0eXBlb2Ygc3RyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBzdHIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBidWlsZGVyLm92ZXJyaWRlTWltZVR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKGJ1aWxkZXIub3ZlcnJpZGVNaW1lVHlwZSlcbiAgICB9XG5cbiAgICB4aHIuc2VuZChidWlsZGVyLmRhdGEpXG4gIH0pXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYnVpbGRlci5zdWNjZXNzKSkge1xuICAgIGJ1aWxkZXIuc3VjY2Vzcy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBwcm9tLnRoZW4oZm4pXG4gICAgfSlcbiAgfVxuICBpZiAodHlwZW9mIGJ1aWxkZXIuc3VjY2VzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcHJvbS50aGVuKGJ1aWxkZXIuc3VjY2VzcylcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGJ1aWxkZXIuZmFpbHVyZSkpIHtcbiAgICBidWlsZGVyLmZhaWx1cmUuZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcHJvbS5jYXRjaChmbilcbiAgICB9KVxuICB9XG4gIGlmICh0eXBlb2YgYnVpbGRlci5mYWlsdXJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBwcm9tLmNhdGNoKGJ1aWxkZXIuZmFpbHVyZSlcbiAgfVxuXG4gIHJldHVybiBwcm9tXG59XG5cblxuLyoqXG4gKiAgQGZ1bmN0aW9uIDxhamF4UGFyYW1ldGVycz4gZXhlY3V0ZSBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIGluIGdvb2QgZm9ybWF0XG4gKiAgQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb258b2JqZWN0fSBtZXRob2Qgb3IgYnVpbGRlclxuICogIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSB1cmkgdG8gcmVzb3VyY2VcbiAqICBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gZGF0YSB0byBzZW5kIGluIHJlcXVlc3QgYm9keVxuICogIEBwYXJhbSB7ZnVuY3Rpb258QXJyYXkuPGZ1bmN0aW9uPn0gc3VjY2VzcyBmdW5jdGlvbnNcbiAqICBAcGFyYW0ge2Z1bmN0aW9ufEFycmF5LjxmdW5jdGlvbj59IGZhaWx1cmUgZnVuY3Rpb25zXG4gKiAgQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IGhlYWRlcnMgdG8gc2VuZCB0byByZXF1ZXN0IGhlYWRlcnNcbiAqICBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gb3ZlcnJpZGVNaW1lVHlwZSB0byBlbmZvcmNlIHJlc3BvbnNlIHJlYWRpbmcgZm9ybWF0XG4gKiAgQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGFqYXhQYXJhbWV0ZXJzIChtZXRob2QsIHVyaSwgZGF0YSwgc3VjY2VzcywgZmFpbHVyZSwgaGVhZGVycywgb3ZlcnJpZGVNaW1lVHlwZSkge1xuICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBhamF4UGFyYW1ldGVycyhcbiAgICAgIG1ldGhvZC5tZXRob2QsXG4gICAgICBtZXRob2QudXJpIHx8IG1ldGhvZC51cmwgfHwgbWV0aG9kLmZpbGUgfHwgbWV0aG9kLnNvdXJjZSxcbiAgICAgIG1ldGhvZC5kYXRhIHx8IG1ldGhvZC5ib2R5IHx8IG1ldGhvZC5wb3N0LFxuICAgICAgbWV0aG9kLnN1Y2Nlc3MgfHwgbWV0aG9kLmxvYWQsXG4gICAgICBtZXRob2QuZmFpbHVyZSB8fCBtZXRob2QuZXJyb3IsXG4gICAgICBtZXRob2QuaGVhZGVycyxcbiAgICAgIG1ldGhvZC5vdmVycmlkZU1pbWVUeXBlXG4gICAgKVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBtZXRob2Q6IHRyeUV4ZWMuY2FsbCh0aGlzLCBtZXRob2QsIFwiR0VUXCIsIGFyZ3VtZW50cyksXG4gICAgICB1cmk6IHRyeUV4ZWMuY2FsbCh0aGlzLCB1cmksIFwiXCIsIGFyZ3VtZW50cyksXG4gICAgICBkYXRhOiB0cnlFeGVjLmNhbGwodGhpcywgZGF0YSwgbnVsbCwgYXJndW1lbnRzKSxcbiAgICAgIHN1Y2Nlc3MsXG4gICAgICBmYWlsdXJlLFxuICAgICAgaGVhZGVyczogdHJ5RXhlYy5jYWxsKHRoaXMsIGhlYWRlcnMsIG51bGwsIGFyZ3VtZW50cyksXG4gICAgICBvdmVycmlkZU1pbWVUeXBlOiB0cnlFeGVjLmNhbGwodGhpcywgb3ZlcnJpZGVNaW1lVHlwZSwgbnVsbCwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG5cbi8qKlxuICogIEBmdW5jdGlvbiA8dHJ5RXhlYz4gZXhlY3V0ZSB7Zm59IGlmIGl0IGlzIGEgZnVuY3Rpb24gb3JcbiAqICAgIHJldHVybiB7Zm59IGlmIGl0IGlzIGEgc3RyaW5nIG9yXG4gKiAgICByZXR1cm4ge2RlZn0uXG4gKiAgQHJldHVybiB7c3RyaW5nfCp9XG4gKi9cblxuZnVuY3Rpb24gdHJ5RXhlYyAoZm4sIGRlZiwgYXJncykge1xuICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncylcbiAgfVxuICBpZiAodHlwZW9mIGZuID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGZuXG4gIH1cbiAgcmV0dXJuIGRlZlxufVxuXG5leHBvcnQgeyBhamF4IGFzIGRlZmF1bHQsIGFqYXgsIGFqYXhQYXJhbWV0ZXJzLCB0cnlFeGVjIH1cbiIsImltcG9ydCBhamF4IGZyb20gXCIuL2FqYXhcIlxuXG5mdW5jdGlvbiBtZXJnZSAoLi4uYXJncykge1xuICBjb25zdCByZXN1bHQgPSB7fSwgc3VjY2VzcyA9IFtdLCBmYWlsdXJlID0gW11cbiAgd2hpbGUgKGFyZ3MubGVuZ3RoKSB7XG4gICAgY29uc3QgYnVpbGRlciA9IGFyZ3Muc2hpZnQoKVxuICAgIGlmIChBcnJheS5pc0FycmF5KGJ1aWxkZXIuc3VjY2VzcykpIHN1Y2Nlc3MuY29uY2F0KGJ1aWxkZXIuc3VjY2VzcylcbiAgICBpZiAodHlwZW9mIGJ1aWxkZXIuc3VjY2VzcyA9PT0gXCJmdW5jdGlvblwiKSBzdWNjZXNzLnB1c2goYnVpbGRlci5zdWNjZXNzKVxuICAgIGlmIChBcnJheS5pc0FycmF5KGJ1aWxkZXIuZmFpbHVyZSkpIGZhaWx1cmUuY29uY2F0KGJ1aWxkZXIuZmFpbHVyZSlcbiAgICBpZiAodHlwZW9mIGJ1aWxkZXIuZmFpbHVyZSA9PT0gXCJmdW5jdGlvblwiKSBmYWlsdXJlLnB1c2goYnVpbGRlci5mYWlsdXJlKVxuICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LCBidWlsZGVyKVxuICB9XG4gIHJlc3VsdC5zdWNjZXNzID0gc3VjY2Vzc1xuICByZXN1bHQuZmFpbHVyZSA9IGZhaWx1cmVcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cbi8qKlxuICogIEBmdW5jdGlvbiA8YWpheFBhcmFtZXRlcnM+IGV4ZWN1dGUgcGFyYW1ldGVycyBhbmQgcmV0dXJucyBpbiBnb29kIGZvcm1hdFxuICogIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufG9iamVjdH0gbWV0aG9kIG9yIGJ1aWxkZXJcbiAqICBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gdXJpIHRvIHJlc291cmNlXG4gKiAgQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IGRhdGEgdG8gc2VuZCBpbiByZXF1ZXN0IGJvZHlcbiAqICBAcGFyYW0ge2Z1bmN0aW9ufEFycmF5LjxmdW5jdGlvbj59IHN1Y2Nlc3MgZnVuY3Rpb25zXG4gKiAgQHBhcmFtIHtmdW5jdGlvbnxBcnJheS48ZnVuY3Rpb24+fSBmYWlsdXJlIGZ1bmN0aW9uc1xuICogIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBoZWFkZXJzIHRvIHNlbmQgdG8gcmVxdWVzdCBoZWFkZXJzXG4gKiAgQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IG92ZXJyaWRlTWltZVR5cGUgdG8gZW5mb3JjZSByZXNwb25zZSByZWFkaW5nIGZvcm1hdFxuICogIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBhamF4UGFyYW1ldGVycyAobWV0aG9kLCB1cmksIGRhdGEsIHN1Y2Nlc3MsIGZhaWx1cmUsIGhlYWRlcnMsIG92ZXJyaWRlTWltZVR5cGUpIHtcbiAgaWYgKHR5cGVvZiBtZXRob2QgPT09IFwib2JqZWN0XCIgJiYgbWV0aG9kICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGFqYXhQYXJhbWV0ZXJzKFxuICAgICAgbWV0aG9kLm1ldGhvZCxcbiAgICAgIG1ldGhvZC51cmkgfHwgbWV0aG9kLnVybCB8fCBtZXRob2QuZmlsZSB8fCBtZXRob2Quc291cmNlLFxuICAgICAgbWV0aG9kLmRhdGEgfHwgbWV0aG9kLmJvZHkgfHwgbWV0aG9kLnBvc3QsXG4gICAgICBtZXRob2Quc3VjY2VzcyB8fCBtZXRob2QubG9hZCxcbiAgICAgIG1ldGhvZC5mYWlsdXJlIHx8IG1ldGhvZC5lcnJvcixcbiAgICAgIG1ldGhvZC5oZWFkZXJzLFxuICAgICAgbWV0aG9kLm92ZXJyaWRlTWltZVR5cGVcbiAgICApXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHVyaSxcbiAgICAgIGRhdGEsXG4gICAgICBzdWNjZXNzLFxuICAgICAgZmFpbHVyZSxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBvdmVycmlkZU1pbWVUeXBlXG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4gKiAgQGNsYXNzIDxSZXNvdXJjZT4gc3RvcmUgbWV0aG9kcyBvbiBhIGNvbW1vbiBkaXN0YW50IFwicmVzb3VyY2VcIi4gQSBkaXN0YW50XG4gKiAgICByZXNvdXJjZSBpcyBhIHN0cmVhbSB3aXRoIHNhbWUgb3JpZ2luIGFuZCAoYWxtb3N0KSBzYW1lIGFjZXNzIG1ldGhvZHMsXG4gKiAgICBsaWtlIGEgZGF0YSBzZXJ2ZXIuXG4gKiAgICBMb29rIGNhcmVmdWxseSwgdGhlIGNvbnN0cnVjdG9yLCB0aGUgYWRkTWV0aG9kIGFuZCBlYWNoIG1ldGhvZHMgYXJlIGNhbGxlZFxuICogICAgd2l0aCBzYW1lIHBhcmFtZXRlcnMsIGV4Y2VwdCBhZGRNZXRob2Qgd2hpY2ggaGFzIGEgXCJuYW1lXCIgYXQgZmlyc3RcbiAqICAgIHBhcmFtZXRlci4gVGhlc2VzIHBhcmFtZXRlcnMgYXJlIG1lcmdlZCB0byBjcmVhdGUgdGhlIGZpbmFsIGJ1aWxkZXIgZm9yXG4gKiAgICB0aGUgcmVxdWVzdC5cbiAqL1xuXG5jbGFzcyBSZXNvdXJjZSB7XG5cbiAgLyoqXG4gICAqICBAbWV0aG9kIDxjb25zdHJ1Y3Rvcj5cbiAgICogIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufG9iamVjdH0gbWV0aG9kIG9yIGJ1aWxkZXJcbiAgICogIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSB1cmkgdG8gcmVzb3VyY2VcbiAgICogIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBkYXRhIHRvIHNlbmQgaW4gcmVxdWVzdCBib2R5XG4gICAqICBAcGFyYW0ge2Z1bmN0aW9ufEFycmF5LjxmdW5jdGlvbj59IHN1Y2Nlc3MgZnVuY3Rpb25zXG4gICAqICBAcGFyYW0ge2Z1bmN0aW9ufEFycmF5LjxmdW5jdGlvbj59IGZhaWx1cmUgZnVuY3Rpb25zXG4gICAqICBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gaGVhZGVycyB0byBzZW5kIHRvIHJlcXVlc3QgaGVhZGVyc1xuICAgKiAgQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IG92ZXJyaWRlTWltZVR5cGUgdG8gZW5mb3JjZSByZXNwb25zZSByZWFkaW5nIGZvcm1hdFxuICAgKiAgQHJldHVybiB7UmVzb3VyY2V9IHNlbGZcbiAgICovXG5cbiAgY29uc3RydWN0b3IgKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmNvbW1vbkJ1aWxkZXIgPSBhamF4UGFyYW1ldGVycy5hcHBseShudWxsLCBhcmdzKVxuICAgIHRoaXMubWV0aG9kc0J1aWxkZXIgPSB7fVxuICB9XG5cbiAgLyoqXG4gICAqICBAbWV0aG9kIDxhZGRNZXRob2Q+IHJlZ2lzdGVyIGEgbmV3IG1ldGhvZCBvZiB0aGlzIHJlc291cmNlLCB3aGljaCBjb3VsZCBiZSBjYWxsZWRcbiAgICogICAgICB3aXRoIHJlc291cmNlLiR7bmFtZX0obWV0aG9kLCB1cmksIGRhdGEsIHN1Y2Nlc3MsIGZhaWx1cmUsIGhlYWRlcnMsIG92ZXJyaWRlTWltZVR5cGUpLlxuICAgKiAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgdXNlZCB0byBjYWxsIHRoZSBtZXRob2QuXG4gICAqICBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbnxvYmplY3R9IG1ldGhvZCBvciBidWlsZGVyXG4gICAqICBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gdXJpIHRvIHJlc291cmNlXG4gICAqICBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gZGF0YSB0byBzZW5kIGluIHJlcXVlc3QgYm9keVxuICAgKiAgQHBhcmFtIHtmdW5jdGlvbnxBcnJheS48ZnVuY3Rpb24+fSBzdWNjZXNzIGZ1bmN0aW9uc1xuICAgKiAgQHBhcmFtIHtmdW5jdGlvbnxBcnJheS48ZnVuY3Rpb24+fSBmYWlsdXJlIGZ1bmN0aW9uc1xuICAgKiAgQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IGhlYWRlcnMgdG8gc2VuZCB0byByZXF1ZXN0IGhlYWRlcnNcbiAgICogIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBvdmVycmlkZU1pbWVUeXBlIHRvIGVuZm9yY2UgcmVzcG9uc2UgcmVhZGluZyBmb3JtYXRcbiAgICogIEByZXR1cm4ge1Jlc291cmNlfSBzZWxmXG4gICAqL1xuXG4gIGFkZE1ldGhvZCAobmFtZSwgLi4uYXJncykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgaWYgKHRoaXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhpcyByZXNvdXJjZSBhbHJlYWR5IGhhcyBhICR7bmFtZX0gbWV0aG9kYClcbiAgICB9XG5cbiAgICB0aGlzLm1ldGhvZHNCdWlsZGVyW25hbWVdID0gYWpheFBhcmFtZXRlcnMuYXBwbHkobnVsbCwgYXJncylcbiAgICB0aGlzW25hbWVdID0gKCkgPT4ge1xuICAgICAgY29uc3QgYnVpbGRlciA9IGFqYXhQYXJhbWV0ZXJzLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgIHJldHVybiBhamF4KG1lcmdlKHNlbGYuY29tbW9uQnVpbGRlciwgc2VsZi5tZXRob2RzQnVpbGRlcltuYW1lXSwgYnVpbGRlcikpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8qKlxuICAgKiAgQGZ1bmN0aW9uIDxyZXF1ZXN0PiBzZW5kIGEgcmVxdWVzdFxuICAgKiAgQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb258b2JqZWN0fSBtZXRob2Qgb3IgYnVpbGRlclxuICAgKiAgQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHVyaSB0byByZXNvdXJjZVxuICAgKiAgQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IGRhdGEgdG8gc2VuZCBpbiByZXF1ZXN0IGJvZHlcbiAgICogIEBwYXJhbSB7ZnVuY3Rpb258QXJyYXkuPGZ1bmN0aW9uPn0gc3VjY2VzcyBmdW5jdGlvbnNcbiAgICogIEBwYXJhbSB7ZnVuY3Rpb258QXJyYXkuPGZ1bmN0aW9uPn0gZmFpbHVyZSBmdW5jdGlvbnNcbiAgICogIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBoZWFkZXJzIHRvIHNlbmQgdG8gcmVxdWVzdCBoZWFkZXJzXG4gICAqICBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gb3ZlcnJpZGVNaW1lVHlwZSB0byBlbmZvcmNlIHJlc3BvbnNlIHJlYWRpbmcgZm9ybWF0XG4gICAqICBAcmV0dXJuIHtQcm9taXNlLjxYTUxIdHRwUmVxdWVzdD4uPFhNTEh0dHBSZXF1ZXN0Pn1cbiAgICovXG5cbiAgc3RhdGljIHJlcXVlc3QgKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBidWlsZGVyID0gYWpheFBhcmFtZXRlcnMuYXBwbHkobnVsbCwgYXJncylcbiAgICByZXR1cm4gYWpheChidWlsZGVyKVxuICB9XG59XG5cbmV4cG9ydCB7IFJlc291cmNlIGFzIGRlZmF1bHQsIFJlc291cmNlLCBtZXJnZSB9XG4iLCJpbXBvcnQgUm91dGUgZnJvbSBcIi4vcm91dGVcIlxuXG5jb25zdCBST1VURVJTID0gW11cbmxldCBkZWZhdWx0Q29udHJvbGxlciA9IG51bGxcbmxldCBsYXVuY2hlZCA9IGZhbHNlXG5cbndpbmRvdy5yID0gUk9VVEVSU1xuXG4vKipcbiAqIEBjbGFzcyA8Um91dGVyPiBzdG9jayByb3V0ZXMsIGFkZCBwcmVmaXggaW4gdGhlaXIgcGF0aHMsIHRlc3RzIHRoZW0sIGFuZFxuICogICAgZXhlY3V0ZXMgdGhlaXIgY29udHJvbGxlcnMgaWYgb25lIG1hdGNoZXMuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxjb25zdHJ1Y3Rvcj4gc2V0IHByZWZpeCBvZiBlYWNoIHVybHNcbiAgICogQHJldHVybiB7Um91dGVyfSBzZWxmXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yIChiYXNlVXJsLCBmaXJzdENhbGwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsIHx8IFwiXCJcbiAgICB0aGlzLmZpcnN0Q2FsbCA9IGZpcnN0Q2FsbCB8fCBudWxsXG4gICAgdGhpcy5yb3V0ZXMgPSBbXVxuICAgIFJPVVRFUlMucHVzaCh0aGlzKVxuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCA8YWRkPiBhZGQgYSByb3V0ZSBpbiB0aGlzIHJvdXRlclxuICAgKiBAcGFyYW0ge1JvdXRlfHN0cmluZ30gcm91dGUgb3IgcGF0aFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb250cm9sbGVyIHRvIGV4ZWN1dGUgd2hlbiBwYXRoIG1hdGNoZXNcbiAgICogQHJldHVybiB7Um91dGV9IGNyZWF0ZWRcbiAgICovXG5cbiAgYWRkIChyb3V0ZSwgY29udHJvbGxlcikge1xuICAgIGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGNvbnRyb2xsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcm91dGUgPSBuZXcgUm91dGUodGhpcy5iYXNlVXJsICsgcm91dGUsIGNvbnRyb2xsZXIpXG4gICAgfVxuICAgIGlmIChyb3V0ZSBpbnN0YW5jZW9mIFJvdXRlKSB7XG4gICAgICB0aGlzLnJvdXRlcy5wdXNoKHJvdXRlKVxuICAgICAgaWYgKGxhdW5jaGVkKSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSByb3V0ZS5nZXRBcmdzKClcbiAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICB0aGlzLmNhbGxGaXJzdCgpXG4gICAgICAgICAgcm91dGUuZ28oYXJncylcbiAgICAgICAgICBSb3V0ZXIuY3VycmVudCA9IHJvdXRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDx0ZXN0PiBlYWNoIHJvdXRlcyBvZiB0aGlzIHJvdXRlciBhbmQgcmV0dXJuIGEgcGF0aCBpZiBpdCBtYXRjaGVzXG4gICAqIEByZXR1cm4ge1JvdXRlfG51bGx9IG51bGwgaWYgbm90IGZvdW5kXG4gICAqL1xuXG4gIHRlc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLmdldEFyZ3MoKSlcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGNhbGxGaXJzdD4gaXMgY2FsbGVkIG9uZSB0aW1lIHdoZW4gYSByb3V0ZSBvZiB0aGlzIHJvdXRlciBpcyBmb3VuZC5cbiAgICovXG5cbiAgY2FsbEZpcnN0ICgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlyc3RDYWxsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMuZmlyc3RDYWxsKClcbiAgICAgIHRoaXMuZmlyc3RDYWxsID0gbnVsbFxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiA8c2V0RGVmYXVsdD4gc2V0IHRoZSBjb250cm9sbGVyIHRvIGNhbGwgd2hlbiBubyBhbnkgcm91dGUgZm91bmQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbnRyb2xsZXJcbiAgICovXG5cbiAgc3RhdGljIHNldERlZmF1bHQgKGNvbnRyb2xsZXIpIHtcbiAgICBkZWZhdWx0Q29udHJvbGxlciA9IGNvbnRyb2xsZXJcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiA8bGlzdGVuUG9wc3RhdGU+IHNldCBldmVudCBpbiB0aGUgd2luZG93IHRvIHRyaWdnZXIgdGhlIHJvdXRlZFxuICAgKiAgICBjb250cm9sbGVyXG4gICAqL1xuXG4gIHN0YXRpYyBsaXN0ZW5Qb3BzdGF0ZSAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBwb3BzdGF0ZSlcbiAgICBpZiAoIWxhdW5jaGVkKSB7XG4gICAgICBwb3BzdGF0ZSgpXG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIDxnZXRBbGw+IHJldHVybnMgYSBsaXN0IG9mIGFsbCByb3V0ZXMgYXZhaWxhYmxlXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cblxuICBzdGF0aWMgZ2V0QWxsICgpIHtcbiAgICBjb25zdCBsaXN0ID0gUk9VVEVSUy5tYXAoKHJvdXRlcikgPT4ge1xuICAgICAgcmV0dXJuIHJvdXRlci5yb3V0ZXMubWFwKChyb3V0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gcm91dGUudG9TdHJpbmcoKVxuICAgICAgfSlcbiAgICB9KS5mbGF0KClcbiAgICBpZiAoZGVmYXVsdENvbnRyb2xsZXIpIHtcbiAgICAgIGxpc3QudW5zaGlmdChcIipcIilcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxufVxuXG5cbi8qKlxuICogQGZ1bmN0aW9uIDxwb3BzdGF0ZT4gaXMgdHJpZ2dlcmVkIHdoZW4gcGFnZSBpcyBsb2FkZWQgb3IgbmF2aWdhdGlvbiBjaGFuZ2VzLlxuICogQWxzbyBzZXRzIFJvdXRlci5jdXJyZW50IGlmIGEgUm91dGUgaXMgZm91bmQsIGVsc2Ugc2V0cyBkZWZhdWx0IGNvbnRyb2xsZXJcbiAqIGlmIGl0IGV4aXN0cy5cbiAqL1xuXG5mdW5jdGlvbiBwb3BzdGF0ZSAoKSB7XG4gIGxhdW5jaGVkID0gdHJ1ZVxuICBsZXQgcm91dGUsIGZvdW5kXG4gIFJPVVRFUlMuZm9yRWFjaCgocm91dGVyKSA9PiB7XG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcm91dGUgPSByb3V0ZXIudGVzdCgpXG4gICAgICBmb3VuZCA9IHJvdXRlclxuICAgIH1cbiAgfSlcbiAgaWYgKHJvdXRlKSB7XG4gICAgZm91bmQuY2FsbEZpcnN0KClcbiAgICByb3V0ZS5ydW4oKVxuICAgIFJvdXRlci5jdXJyZW50ID0gcm91dGVcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgZGVmYXVsdENvbnRyb2xsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGRlZmF1bHRDb250cm9sbGVyKClcbiAgfVxufVxuIiwiaW1wb3J0IENodW5rIGZyb20gXCIuL2NodW5rXCJcblxubGV0IGN1cnJlbnRBcmdzXG5cblxuLyoqXG4gKiBAY2xhc3MgPFJvdXRlPiBpZiBhIHJvdXRlIG1hdGNoZXMgY3VycmVudCBwYXRoLCByZXR1cm4gYXJncyB3aXRoIGdldEFyZ3MoKS5cbiAqICAgIElmIGFyZ3MgYXJlIHJldHVybmVkLCB0aGVuIGV4ZWN1dGUgZ28oYXJncykuXG4gKi9cblxuY2xhc3MgUm91dGUge1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIDxjb25zdHJ1Y3Rvcj4gc2V0IHBhdGggYW5kIGl0cyBjb250cm9sbGVyIGlmIHJvdXRlIG1hdGNoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIGZvcm1hdCBcIi9rZXk6dHlwZS9rZXk6Lzp0eXBlLypcIlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250cm9sbGVyXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yIChwYXRoLCBjb250cm9sbGVyKSB7XG4gICAgdGhpcy5vcmlnaW5hbCA9IHBhdGhcbiAgICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNwbGl0KFwiL1wiKVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSkge1xuICAgICAgdGhpcy5jaHVua3MgPSBwYXRoLm1hcChjaHVuayA9PiBuZXcgQ2h1bmsoY2h1bmspKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpcnN0IHBhcmFtZXRlciBzaG91bGQgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb250cm9sbGVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24uXCIpXG4gICAgfVxuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXJcbiAgICB0aGlzLm5vRW5kID0gdGhpcy5jaHVua3NbdGhpcy5jaHVua3MubGVuZ3RoLTFdLm9yaWdpbmFsID09PSBcIipcIlxuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCA8Z28+IHJlZGlyZWN0IHRvIHRoaXMgY29udHJvbGxlciBwYXNzaW5nIGJ5IFVSTFxuICAgKiBAcGFyYW0ge2FycmF5fSBhcmdzIG5ldyBhcmd1bWVudHMgZm9yIHRoaXMgY29udHJvbGxlciwgbWVyZ2VkIHdpdGggY3VycmVudCBhcmd1bWVudHNcbiAgICogQHJldHVybiB7Um91dGV9IHNlbGZcbiAgICovXG5cbiAgZ28gKGFyZ3MsIGZvcmNlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gQXJyYXkuaXNBcnJheShhcmdzKSA/IGFyZ3MgOiBbXVxuICAgIGNvbnN0IHBhdGggPSB0aGlzLmNyZWF0ZVBhdGgocGFyYW1zIHx8IGN1cnJlbnRBcmdzKVxuICAgIGlmIChmb3JjZSAmJiBwYXRoID09PSBSb3V0ZS5nZXRCcm93c2VyUmVxdWVzdCgpKSB7XG4gICAgICB0aGlzLnJ1bihhcmdzKVxuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZS5zZXRCcm93c2VyUmVxdWVzdChwYXRoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCA8cnVuPiBydW4gdGhpcyBjb250cm9sbGVyIGFueXdheSB3aXRoIHRoZXNlIGFyZ3VtZW50cy5cbiAgICogQHBhcmFtIHsqfSBhcmdzIGlmIGZhbHN5LCB0cnkgdG8gcmV0dXJuIHJvdXRlLmdldEFyZ3MoKS5cbiAgICogQHJldHVybiB7Kn0gcmV0dXJuZWQgYnkgY29udHJvbGxlci5cbiAgICovXG5cbiAgcnVuIChhcmdzKSB7XG4gICAgY3VycmVudEFyZ3MgPSBhcmdzIHx8IHRoaXMuZ2V0QXJncygpXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlcihjdXJyZW50QXJncylcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGdldEFyZ3M+IHJldHVybiBhbiBvYmplY3Qgb2YgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXJzIGluIGJyb3dzZXJcbiAgICogICAgcGF0aCBvciBudWxsIG9iamVjdCBpZiBpdCBkb2VzIG5vdCBtYXRjaC5cbiAgICogQHJldHVybiB7T2JqZWN0fG51bGx9IG51bGwgaWYgaXQgZG9lcyBub3QgbWF0Y2guXG4gICAqL1xuXG4gIGdldEFyZ3MgKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gUm91dGUuZ2V0QnJvd3NlclJlcXVlc3QoKS5zcGxpdChcIi9cIilcblxuICAgIHRyeSB7XG4gICAgICBsZXQgaSA9IDBcbiAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmNodW5rcy5tYXAoKGNodW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpKytdXG4gICAgICAgIGNvbnN0IHJlcyA9IGNodW5rLmV4dHJhY3RBcmdzKGl0ZW0pXG4gICAgICAgIHJldHVybiByZXNcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5jaHVua3NbaS0xXS5vcmlnaW5hbCA9PT0gXCIqXCIpIHtcbiAgICAgICAgYXJncy5wb3AoKVxuICAgICAgICBhcmdzLnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBpdGVtcy5zbGljZShpLTEpLmpvaW4oXCIvXCIpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGkgIT09IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3NcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgPGlzTWF0Y2g+IHJldHVybiBpZiBjdXJyZW50IHJvdXRlIG1hdGNoZXMgYnJvd3NlciBwYXRoXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuXG4gIGlzTWF0Y2ggKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFyZ3MoKSAhPT0gbnVsbFxuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCA8Y3JlYXRlUGF0aD4gY3JlYXRlIGEgcGF0aCBzdHJpbmcgd2l0aCBhcmd1bWVudHMsIGluIG9yZGVyIHRvXG4gICAqICAgIGNyZWF0ZSBhIGxpbmsgdG8gY2FsbCB0aGlzIHJvdXRlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJnc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHBhdGhcbiAgICovXG5cbiAgY3JlYXRlUGF0aCAoYXJncykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xuICAgICAgYXJncyA9IFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2h1bmtzLm1hcCgoY2h1bmssIGtleSkgPT4gY2h1bmsuY3JlYXRlUGF0aChhcmdzW2tleV0pKS5qb2luKFwiL1wiKVxuICB9XG5cblxuICB0b1N0cmluZyAoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9yaWdpbmFsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jaHVua3MubWFwKGNodW5rID0+IGNodW5rLnRvU3RyaW5nKCkpLmpvaW4oXCIvXCIpXG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIDxnZXRCcm93c2VyUmVxdWVzdD4gcmV0dXJucyB0aGUgY3VycmVudCBicm93c2VyIHBhdGhcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cblxuICBzdGF0aWMgZ2V0QnJvd3NlclJlcXVlc3QgKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSlcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiA8c2V0QnJvd3NlclJlcXVlc3Q+IHNldCB0aGUgY3VycmVudCBicm93c2VyIHBhdGhcbiAgICovXG5cbiAgc3RhdGljIHNldEJyb3dzZXJSZXF1ZXN0IChzdHIpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHN0clxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlXG4iLCJjbGFzcyBDaHVua0Vycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGNvZGUgPSAwLCBwcmV2aW91cyA9IG51bGwpIHtcbiAgICBjb25zdCBzdGFjayA9IChuZXcgRXJyb3IpLnN0YWNrLnNwbGl0KC9cXHMqW1xcclxcbl0rXFxzKi8pXG4gICAgc3RhY2suc2hpZnQoKVxuICAgIHN0YWNrLnNoaWZ0KClcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHttZXNzYWdlLCBjb2RlLCBwcmV2aW91cywgc3RhY2t9KVxuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9ICgke3RoaXMuY29kZX0pOiAke3RoaXMubWVzc2FnZX1cXG5cXHQke3RoaXMuc3RhY2suam9pbihcIlxcblxcdFwiKX1cXG5gXG4gIH1cbn1cblxuY29uc3QgRk9STUFUUyA9IHtcbiAgbnVtYmVyOiAoc3RyKSA9PiB7XG4gICAgY29uc3QgbiA9IHBhcnNlRmxvYXQoc3RyKVxuICAgIGlmIChpc05hTihuKSlcbiAgICAgIHRocm93IG5ldyBDaHVua0Vycm9yKFwiQmFkIHR5cGU6IGV4cGVjdCBhcmd1bWVudCB0byBiZSBhIG51bWJlci5cIilcbiAgICByZXR1cm4gblxuICB9LFxuICBpbnRlZ2VyOiAoc3RyKSA9PiB7XG4gICAgY29uc3QgbiA9IHBhcnNlSW50KHN0cilcbiAgICBpZiAoaXNOYU4obikpXG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYW4gaW50ZWdlci5cIilcbiAgICByZXR1cm4gblxuICB9LFxuICBmbG9hdDogKHN0cikgPT4ge1xuICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHN0cilcbiAgICBpZiAoaXNOYU4obikpXG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYSBmbG9hdC5cIilcbiAgICByZXR1cm4gblxuICB9LFxuICBzdHJpbmc6IChzdHIpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcyA9IEpTT04ucGFyc2Uoc3RyKVxuICAgICAgaWYgKHR5cGVvZiBzID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gc1xuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gc3RyXG4gIH0sXG4gIGpzb246IChzdHIpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbyA9IEpTT04ucGFyc2Uoc3RyKVxuICAgICAgaWYgKHR5cGVvZiBvID09PSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gb1xuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYSBqc29uIG9iamVjdC5cIilcbiAgfSxcbiAganNvbmFycmF5OiAoc3RyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG8gPSBKU09OLnBhcnNlKHN0cilcbiAgICAgIGlmICh0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBBcnJheS5pc0FycmF5KG8pKVxuICAgICAgICByZXR1cm4gb1xuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYSBqc29uIGFycmF5LlwiKVxuICB9LFxuICBqc29ub2JqZWN0OiAoc3RyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG8gPSBKU09OLnBhcnNlKHN0cilcbiAgICAgIGlmICh0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShvKSlcbiAgICAgICAgcmV0dXJuIG9cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJCYWQgdHlwZTogZXhwZWN0IGFyZ3VtZW50IHRvIGJlIGEganNvbiBvYmplY3Qgbm90IGFycmF5LlwiKVxuICB9LFxuICBib29sZWFuOiAoc3RyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGIgPSBKU09OLnBhcnNlKHN0cilcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgIHJldHVybiBiXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICAgIHRocm93IG5ldyBDaHVua0Vycm9yKFwiQmFkIHR5cGU6IGV4cGVjdCBhcmd1bWVudCB0byBiZSBhIGJvb2xlYW4uXCIpXG4gIH0sXG4gIGFueTogKHN0cikgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBzdHJcbiAgfSxcbiAgdXVpZDogKHN0cikgPT4ge1xuICAgIGlmIChzdHIubWF0Y2goL15bXFxkYS1mXXs4fS1bXFxkYS1mXXs0fS00W1xcZGEtZl17M30tWzg5YWJdW1xcZGEtZl17M30tW1xcZGEtZl17MTJ9JC8pKVxuICAgICAgcmV0dXJuIHN0clxuICAgIGVsc2VcbiAgICAgIHRocm93IG5ldyBDaHVua0Vycm9yKFwiQmFkIHR5cGU6IGV4cGVjdCBhcmd1bWVudCB0byBiZSBhbiB1dWlkLlwiKVxuICB9LFxuICBkYXRlOiAoc3RyKSA9PiB7XG4gICAgaWYgKHN0ci5tYXRjaCgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC8pKVxuICAgICAgcmV0dXJuIG5ldyBEYXRlKHN0cilcbiAgICBlbHNlXG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYSBkYXRlLlwiKVxuICB9LFxuICB0aW1lOiAoc3RyKSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSBzdHIubWF0Y2goL14oMlswLTNdfFswMV1bMC05XSk6KFswLTVdWzAtOV0pKDooWzAtNV1bMC05XSkoLihcXGR7MSwzfSkpPyk/JC8pXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKClcbiAgICAgIGR0LnNldEhvdXJzKGZvdW5kWzFdKVxuICAgICAgZHQuc2V0TWludXRlcyhmb3VuZFsyXSlcbiAgICAgIGlmIChmb3VuZFszXSkgZHQuc2V0U2Vjb25kcyhmb3VuZFs0XSlcbiAgICAgIGlmIChmb3VuZFs1XSkgZHQuc2V0TWlsbGlzZWNvbmRzKGZvdW5kWzZdKVxuICAgICAgcmV0dXJuIGR0XG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHRocm93IG5ldyBDaHVua0Vycm9yKFwiQmFkIHR5cGU6IGV4cGVjdCBhcmd1bWVudCB0byBiZSBhIHRpbWUuXCIpXG4gIH0sXG4gIGRhdGV0aW1lOiAoc3RyKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0cilcbiAgICBpZiAoIWlzTmFOKCtkYXRlKSlcbiAgICAgIHJldHVybiBkYXRlXG4gICAgZWxzZVxuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJCYWQgdHlwZTogZXhwZWN0IGFyZ3VtZW50IHRvIGJlIGFueSBEYXRlIGZvcm1hdC5cIilcbiAgfSxcbiAganNvbmRhdGU6IChzdHIpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RyKVxuICAgIGlmICghaXNOYU4oK2RhdGUpKVxuICAgICAgcmV0dXJuIGRhdGVcbiAgICBlbHNlXG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYW55IERhdGUgZm9ybWF0LlwiKVxuICB9LFxuICBpbnRlZ2VyZGF0ZTogKHN0cikgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChzdHIpKVxuICAgIGlmICghaXNOYU4oK2RhdGUpKVxuICAgICAgcmV0dXJuIGRhdGVcbiAgICBlbHNlXG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkJhZCB0eXBlOiBleHBlY3QgYXJndW1lbnQgdG8gYmUgYW4gaW50ZWdlci5cIilcbiAgfVxufVxuXG5GT1JNQVRTWycnXSA9IEZPUk1BVFNbJ2FueSddXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGVsKSB7XG4gIHJldHVybiB0eXBlb2YgZWwgPT09IFwib2JqZWN0XCIgJiYgZWwgIT09IG51bGxcbn1cblxuXG4vKipcbiAqIEBmdW5jdGlvbiA8cnVsZVRvT2JqZWN0PlxuICogQHBhcmFtIHtPYmplY3R8UmVnRXhwfEZ1bmN0aW9ufHN0cmluZ31cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBydWxlVG9PYmplY3QgKHJ1bGUpIHtcbiAgY29uc3QgcmVzID0ge31cbiAgaWYgKHR5cGVvZiBydWxlID09PSBcIm9iamVjdFwiKSB7XG4gICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJlcy5yZWdleHAgPSBydWxlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChydWxlLnZhbHVlKSB7XG4gICAgICAgIHJlcy52YWx1ZSA9IHJ1bGUudmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChydWxlLmtleSkgcmVzLmtleSA9IHJ1bGUua2V5XG4gICAgICAgIGlmIChydWxlLnR5cGUpIHJlcy50eXBlID0gcnVsZS50eXBlXG4gICAgICAgIGlmIChydWxlLnJlZ2V4cCkgcmVzLnJlZ2V4cCA9IHJ1bGUucmVnZXhwXG4gICAgICAgIGlmIChydWxlLm1hdGNoKSByZXMubWF0Y2ggPSBydWxlLm1hdGNoXG4gICAgICAgIGlmIChydWxlLnRyYW5zZm9ybSkgcmVzLnRyYW5zZm9ybSA9IHJ1bGUudHJhbnNmb3JtXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgcnVsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVzLnRyYW5zZm9ybSA9IHJ1bGVcbiAgfVxuICBpZiAodHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAocnVsZSA9PT0gXCIqXCIpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cbiAgICBjb25zdCBzcGxpdCA9IHJ1bGUuc3BsaXQoXCI6XCIpXG4gICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGtleSA9IHNwbGl0LnNoaWZ0KCksXG4gICAgICAgIHR5cGUgPSBzcGxpdC5qb2luKFwiOlwiKVxuICAgICAgcmVzLnR5cGUgPSB0eXBlXG4gICAgICBpZiAoa2V5Lmxlbmd0aCkge1xuICAgICAgICByZXMua2V5ID0ga2V5XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy52YWx1ZSA9IHJ1bGVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5cbi8qKlxuICogQGZ1bmN0aW9uIDx0ZXN0VmFsdWU+XG4gKiBAcGFyYW0ge09iamVjdH0gcnVsZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAdGhyb3dzIHtDaHVua0Vycm9yfVxuICovXG5cbmZ1bmN0aW9uIHRlc3RWYWx1ZSAocnVsZSwgdmFsdWUpIHtcbiAgaWYgKHJ1bGUudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChydWxlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHsgdmFsdWUgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkNodW5rIHZhbHVlIGRvZXMgbm90IG1hdGNoXCIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzID0ge31cbiAgaWYgKHJ1bGUudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKEZPUk1BVFNbcnVsZS50eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXMudmFsdWUgPSBGT1JNQVRTW3J1bGUudHlwZV0odmFsdWUpXG4gICAgICByZXMudHlwZSA9IHJ1bGUudHlwZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkNodW5rIHZhbHVlIG1hdGNoIHR5cGUgZG9lcyBub3QgZXhpc3RzXCIpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBpZiAocnVsZS5yZWdleHAgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICBjb25zdCBmb3VuZCA9IHZhbHVlLm1hdGNoKHJ1bGUucmVnZXhwKVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmVzLnJlZ2V4cCA9IHJ1bGUucmVnZXhwXG4gICAgICBpZiAoaXNPYmplY3QocnVsZS5tYXRjaCkpIHtcbiAgICAgICAgY29uc3QgZWwgPSBPYmplY3Qua2V5cyhydWxlLm1hdGNoKS5maW5kKG0gPT4gcnVsZS5tYXRjaFttXSA9PT0gZm91bmRbMF0pXG4gICAgICAgIGlmIChlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzLmluZGV4ID0gZWxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkNodW5rIFJlZ0V4cCBmb3VuZCB2YWx1ZSBkb2VzIG5vdCBtYXRjaCBsaXN0ZWQgdmFsdWVzXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJDaHVuayB2YWx1ZSBkb2VzIG5vdCBtYXRjaCBSZWdFeHBcIilcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzT2JqZWN0KHJ1bGUubWF0Y2gpKSB7XG4gICAgICBjb25zdCBlbCA9IE9iamVjdC5rZXlzKHJ1bGUubWF0Y2gpLmZpbmQobSA9PiBydWxlLm1hdGNoW21dID09PSB2YWx1ZSlcbiAgICAgIGlmIChlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlcy5pbmRleCA9IGVsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIkNodW5rIHZhbHVlIGRvZXMgbm90IG1hdGNoIGxpc3RlZCB2YWx1ZXNcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHJ1bGUudHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXMub3JpZ2luYWwgPSB2YWx1ZVxuICAgIHJlcy50cmFuc2Zvcm0gPSBydWxlLnRyYW5zZm9ybVxuICAgIHJldHVybiBydWxlLnRyYW5zZm9ybShyZXMpXG4gIH1cblxuICByZXR1cm4gcmVzXG59XG5cblxuLyoqXG4gKiBAZnVuY3Rpb24gPGV4dHJhY3RBcmdzPlxuICogQHBhcmFtIHtPYmplY3R9IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaHVua1xuICogQHJldHVybiB7T2JqZWN0fVxuICogQHRocm93cyB7Q2h1bmtFcnJvcn1cbiAqL1xuXG5mdW5jdGlvbiBleHRyYWN0QXJncyAocnVsZSwgY2h1bmspIHtcbiAgaWYgKHJ1bGUua2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBzcGxpdCA9IGNodW5rLnNwbGl0KFwiOlwiKVxuICAgIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBrZXkgPSBzcGxpdC5zaGlmdCgpLFxuICAgICAgICB2YWx1ZSA9IHNwbGl0LmpvaW4oXCI6XCIpLFxuICAgICAgICByZXMgPSB0ZXN0VmFsdWUocnVsZSwgdmFsdWUpXG4gICAgICByZXMua2V5ID0gcnVsZS5rZXlcbiAgICAgIHJldHVybiByZXNcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJDaHVuayBjb250ZW50IGRvZXMgbm90IG1hdGNoIGtleS92YWx1ZSBmb3JtYXRcIilcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRlc3RWYWx1ZShydWxlLCBjaHVuaylcbiAgfVxufVxuXG5cbi8qKlxuICogQGZ1bmN0aW9uIDxjcmVhdGVQYXRoPlxuICogQHBhcmFtIHtPYmplY3R9IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHRocm93cyB7Q2h1bmtFcnJvcn1cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVQYXRoKHJ1bGUsIHZhbHVlKSB7XG4gIGNvbnN0IHJlcyA9IChydWxlLmtleSA/IHJ1bGUua2V5ICsgXCI6XCIgOiBcIlwiKSArIHZhbHVlXG5cbiAgaWYgKHJ1bGUudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdHJ5IHtcbiAgICAgIEZPUk1BVFNbcnVsZS50eXBlXSh2YWx1ZSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgQ2h1bmtFcnJvcihcIlZhbHVlIGRvZXMgbm90IG1hdGNoIHBhdGggcmVxdWlyZW1lbnRzXCIpXG4gICAgfVxuICB9XG5cbiAgaWYgKHJ1bGUucmVnZXhwIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgY29uc3QgZm91bmQgPSB2YWx1ZS5tYXRjaChydWxlLnJlZ2V4cClcbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJ1bGUubWF0Y2gpICYmIHJ1bGUubWF0Y2guaW5kZXhPZihmb3VuZFswXSkgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBDaHVua0Vycm9yKFwiVmFsdWUgZG9lcyBub3QgbWF0Y2ggcGF0aCByZXF1aXJlbWVudHNcIilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJWYWx1ZSBkb2VzIG5vdCBtYXRjaCBwYXRoIHJlcXVpcmVtZW50c1wiKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShydWxlLm1hdGNoKSAmJiBydWxlLm1hdGNoLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IENodW5rRXJyb3IoXCJWYWx1ZSBkb2VzIG5vdCBtYXRjaCBwYXRoIHJlcXVpcmVtZW50c1wiKVxuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5cbmNsYXNzIENodW5rIHtcbiAgY29uc3RydWN0b3IgKHJ1bGUpIHtcbiAgICB0aGlzLm9yaWdpbmFsID0gcnVsZVxuICAgIHRoaXMucnVsZSA9IHJ1bGVUb09iamVjdChydWxlKVxuICB9XG5cbiAgZXh0cmFjdEFyZ3MgKGNodW5rKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RBcmdzKHRoaXMucnVsZSwgXCJcIiArIGNodW5rKVxuICB9XG5cbiAgY3JlYXRlUGF0aCAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5ydWxlLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGUudmFsdWVcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdmFsdWUgPSB2YWx1ZS52YWx1ZVxuICAgIH1cbiAgICBpZiAofltcInN0cmluZ1wiLCBcIm51bWJlclwiXS5pbmRleE9mKHR5cGVvZiB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVQYXRoKHRoaXMucnVsZSwgXCJcIit2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmlyc3QgcGFyYW1ldGVyIHNob3VsZCBiZSBhIHN0cmluZywgYSBudW1iZXIgb3IgYW4gb2JqZWN0IGNvbnRhaW5pbmcgXFxcInZhbHVlXFxcIiBmaWVsZFwiKVxuICAgIH1cbiAgfVxuXG4gIHNldFR5cGUgKHR5cGUpIHtcbiAgICB0aGlzLnJ1bGUudHlwZSA9IHR5cGVcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc2V0VHJhbnNmb3JtICh0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJ1bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpcnN0IHBhcmFtZXRlciBzaG91bGQgYmUgYSBGdW5jdGlvblwiKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc2V0UmVnRXhwIChyZWdleHApIHtcbiAgICBpZiAocmVnZXhwIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICB0aGlzLnJ1bGUucmVnZXhwID0gcmVnZXhwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgUmVnRXhwIGluc3RhbmNlXCIpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhZGRNYXRjaGVyIChtYXRjaGVyKSB7XG4gICAgaWYgKCF0aGlzLnJ1bGUubWF0Y2gpIHtcbiAgICAgIHRoaXMucnVsZS5tYXRjaCA9IFtdXG4gICAgfVxuICAgIHRoaXMucnVsZS5tYXRjaC5wdXNoKG1hdGNoZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHNldE1hdGNoZXJzIChtYXRjaGVycykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGNoZXJzKSkge1xuICAgICAgdGhpcy5ydWxlLm1hdGNoID0gbWF0Y2hlcnNcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IHBhcmFtZXRlciBzaG91bGQgYmUgYW4gQXJyYXlcIilcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3JpZ2luYWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsXG4gICAgfVxuICAgIGNvbnN0IHZhbCA9ICh0aGlzLnJ1bGUubWF0Y2ggJiYgdGhpcy5ydWxlLm1hdGhbMF0gfHwgKHRoaXMucnVsZS50eXBlICYmIChcIjpcIiArIHRoaXMucnVsZS50eXBlKSkgfHwgXCIqXCIpXG4gICAgaWYgKHRoaXMucnVsZS5rZXkpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnJ1bGUua2V5fToke3ZhbH1gXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGUudmFsdWUgPT09IHVuZGVmaW5lZCA/IHZhbCA6IHRoaXMucnVsZS52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRGb3JtYXQgKG5hbWUsIGZvcm1hdHRlcikge1xuICAgIGlmICghKHR5cGVvZiBmb3JtYXR0ZXIgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTZWNvbmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIEZ1bmN0aW9uXCIpXG4gICAgfVxuICAgIGlmIChGT1JNQVRTW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUeXBlICR7bmFtZX0gYWxyZWFkeSBleGlzdHNgKVxuICAgIH1cbiAgICBGT1JNQVRTW25hbWVdID0gZm9ybWF0dGVyXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDaHVua1xuIl19