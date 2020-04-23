var req=(function(e,f){function r(x){return function(p){var i=x[p];if(f[i][2])return f[i][2].exports;var o={},m={exports:o},[s,h]=f[i];f[i][2]=m;h.call(o,r(s),m,o);return m.exports}}; return r({"":e})("")})(0, [[{"./libs/layout/event-target":1,"./libs/layout/component":2,"./libs/layout/section":3,"./libs/layout/page":4,"./libs/layout/define":5,"./libs/request/ajax":6,"./libs/request/resource":7,"./libs/router/router":8,"./libs/router/route":9},function (require,module,exports) {
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
}],[{},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
}],[{"./event-target":1},function (require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventTarget = _interopRequireDefault(require("./event-target"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
        result[name] = el[name].filter(function (item) {
          return item instanceof HTMLElement;
        });
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

  var _super = _createSuper(Component);

  function Component() {
    var _this2, _this$__builder__;

    var _this;

    _classCallCheck(this, Component);

    _this = _super.call(this);
    Object.defineProperty(_assertThisInitialized(_this), "__builder__", {
      "enumerable": false,
      "configurable": false,
      "value": {
        container: _this.container.bind(_assertThisInitialized(_this)),
        template: _this.template.bind(_assertThisInitialized(_this)),
        elements: _this.elements.bind(_assertThisInitialized(_this)),
        events: _this.events.bind(_assertThisInitialized(_this))
      }
    });
    _this.container = null;
    _this.template = null;
    _this.elements = [];
    _this.events = {};

    (_this2 = _this).setTemplate.apply(_this2, [null].concat(Array.prototype.slice.call(arguments)));

    var cont = (_this$__builder__ = _this.__builder__).container.apply(_this$__builder__, arguments);

    if (cont) {
      var _this3;

      (_this3 = _this).setContainer.apply(_this3, [cont].concat(Array.prototype.slice.call(arguments)));
    }

    return _this;
  }

  _createClass(Component, [{
    key: "setTemplate",
    value: function setTemplate(dom) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var tpl = template(dom || this.__builder__.template, this, args);

      if (tpl instanceof HTMLElement) {
        this.template = tpl;
        this.elements = elements(this.__builder__.elements, this, args);
        events(this.__builder__.events, this, args);
      }

      return this;
    }
  }, {
    key: "setContainer",
    value: function setContainer(element) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var cont = container(element, this, args);

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
    key: "container",
    value: function container() {
      return null;
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
}],[{"./component":2,"./page":4},function (require,module,exports) {
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Section = function (_Component) {
  _inherits(Section, _Component);

  var _super = _createSuper(Section);

  function Section() {
    var _this;

    _classCallCheck(this, Section);

    _this = _super.apply(this, arguments);

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
        this.__builder__.wrapper = page;
      }

      return this;
    }
  }, {
    key: "getWrapper",
    value: function getWrapper() {
      if (!this.__builder__.wrapper) {
        this.__builder__.wrapper = _page["default"].getPageByConstructor(this.wrapper());
      }

      return this.__builder__.wrapper;
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
}],[{"./component":2,"./section":3},function (require,module,exports) {
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Page = function (_Component) {
  _inherits(Page, _Component);

  var _super = _createSuper(Page);

  function Page() {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this);

    _this.template.setAttribute("page", _this.template.getAttribute("component"));

    _this.template.removeAttribute("component");

    Page.instances[_this.constructor.name] = _assertThisInitialized(_this);
    return _this;
  }

  _createClass(Page, [{
    key: "template",
    value: function template() {
      return "<section></section>";
    }
  }, {
    key: "elements",
    value: function elements() {
      return {
        'section': 'section,.section'
      };
    }
  }, {
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
exports.define = exports["default"] = define;
exports.CustomHTMLElement = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

try {
  window.addEventListener("load", onload);

  if (window.document.readyState === "complete") {
    onload();
  }
} catch (e) {}

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
module.exports=req['default'];
