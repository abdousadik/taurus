(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navbar */ "./assets/components/Navbar.jsx");
/* harmony import */ var _pages_main_Homepage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main/Homepage */ "./assets/pages/main/Homepage.jsx");
/* harmony import */ var _pages_main_UsersPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main/UsersPage */ "./assets/pages/main/UsersPage.jsx");
/* harmony import */ var _pages_main_LoginPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/main/LoginPage */ "./assets/pages/main/LoginPage.jsx");
/* harmony import */ var _pages_main_RegisterPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/main/RegisterPage */ "./assets/pages/main/RegisterPage.jsx");
/* harmony import */ var _services_authAPI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/authAPI */ "./assets/services/authAPI.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contexts/AuthContext */ "./assets/contexts/AuthContext.js");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/PrivateRoute */ "./assets/components/PrivateRoute.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */


 // any CSS you import will output into a single css file (app.css in this case)

 // start the Stimulus application












console.log("Hello World !!!");
_services_authAPI__WEBPACK_IMPORTED_MODULE_10__.default.setup();

var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_services_authAPI__WEBPACK_IMPORTED_MODULE_10__.default.isAuthenticated()),
      _useState2 = _slicedToArray(_useState, 2),
      isAuthenticated = _useState2[0],
      setIsAuthenticated = _useState2[1];

  var NavbarWithRouter = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.withRouter)(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_11__.default.Provider, {
    value: {
      isAuthenticated: isAuthenticated,
      setIsAuthenticated: setIsAuthenticated
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavbarWithRouter, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("main", {
    className: "container pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/login",
    component: _pages_main_LoginPage__WEBPACK_IMPORTED_MODULE_8__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/register",
    component: _pages_main_RegisterPage__WEBPACK_IMPORTED_MODULE_9__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__.default, {
    path: "/users",
    component: _pages_main_UsersPage__WEBPACK_IMPORTED_MODULE_7__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/",
    component: _pages_main_Homepage__WEBPACK_IMPORTED_MODULE_6__.default
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_16__.ToastContainer, {
    position: react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.POSITION.BOTTOM_RIGHT
  }));
};

var rootElement = document.querySelector('#app');
react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null), rootElement);

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$"));

/***/ }),

/***/ "./assets/components/Navbar.jsx":
/*!**************************************!*\
  !*** ./assets/components/Navbar.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_authAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authAPI */ "./assets/services/authAPI.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ "./assets/contexts/AuthContext.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");






var Navbar = function Navbar(_ref) {
  var history = _ref.history;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.default),
      isAuthenticated = _useContext.isAuthenticated,
      setIsAuthenticated = _useContext.setIsAuthenticated;

  var handleLogout = function handleLogout() {
    _services_authAPI__WEBPACK_IMPORTED_MODULE_1__.default.logout();
    setIsAuthenticated(false);
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.info("Vous êtes Déconnecté ! 😊");
    history.push('/login');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    className: "navbar-brand",
    to: "/"
  }, "TAURUS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarColor01",
    "aria-controls": "navbarColor01",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarColor01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "navbar-nav mr-auto"
  }, isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    className: "nav-link",
    to: "/users"
  }, "Users")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "navbar-nav ml-auto"
  }, !isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    className: "nav-link",
    to: "/register"
  }, "Insription")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: "/login",
    className: "btn btn-success"
  }, "Connexion"))) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-danger",
    onClick: handleLogout
  }, "D\xE9connexion")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/components/Pagination.jsx":
/*!******************************************!*\
  !*** ./assets/components/Pagination.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var Pagination = function Pagination(_ref) {
  var currentpage = _ref.currentpage,
      itemsParPage = _ref.itemsParPage,
      length = _ref.length,
      onPageChanged = _ref.onPageChanged;
  var pagesCount = Math.ceil(length / itemsParPage);
  var pages = [];

  for (var i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", {
    className: "pagination pagination-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "page-item" + (currentpage === 1 && " disabled")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "page-link",
    onClick: function onClick() {
      return onPageChanged(currentpage - 1);
    }
  }, "\xAB")), pages.map(function (page) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
      key: page,
      className: "page-item" + (currentpage === page && " active")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
      className: "page-link",
      onClick: function onClick() {
        return onPageChanged(page);
      }
    }, page));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "page-item" + (currentpage === pagesCount && " disabled")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "page-link",
    onClick: function onClick() {
      return onPageChanged(currentpage + 1);
    }
  }, "\xBB"))));
};

Pagination.getData = function (items, currentpage, itemsParPage) {
  var start = currentpage * itemsParPage - itemsParPage;
  return items.slice(start, start + itemsParPage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./assets/components/PrivateRoute.jsx":
/*!********************************************!*\
  !*** ./assets/components/PrivateRoute.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/AuthContext */ "./assets/contexts/AuthContext.js");




var PrivateRoute = function PrivateRoute(_ref) {
  var path = _ref.path,
      component = _ref.component;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.default),
      isAuthenticated = _useContext.isAuthenticated;

  return isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    component: component
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
    to: "/login"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

/***/ }),

/***/ "./assets/components/forms/Field.jsx":
/*!*******************************************!*\
  !*** ./assets/components/forms/Field.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Field = function Field(_ref) {
  var name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? "" : _ref$error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    type: type,
    value: value,
    className: "form-control" + (error && " is-invalid"),
    onChange: onChange,
    placeholder: placeholder || label,
    id: name,
    name: name
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "invalid-feedback"
  }, error));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);

/***/ }),

/***/ "./assets/components/loaders/TableLoader.jsx":
/*!***************************************************!*\
  !*** ./assets/components/loaders/TableLoader.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");






function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var TableRow = function TableRow(props) {
  var random = Math.random() * (1 - 0.7) + 0.7;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_6__.default, _extends({
    viewBox: "0 0 1060 40",
    height: 40,
    width: 1060
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("rect", {
    x: "0",
    y: "15",
    rx: "4",
    ry: "4",
    width: "6",
    height: "6.4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("rect", {
    x: "34",
    y: "13",
    rx: "6",
    ry: "6",
    width: 200 * random,
    height: "12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("rect", {
    x: "633",
    y: "13",
    rx: "6",
    ry: "6",
    width: 23 * random,
    height: "12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("rect", {
    x: "653",
    y: "13",
    rx: "6",
    ry: "6",
    width: 78 * random,
    height: "12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("rect", {
    x: "755",
    y: "13",
    rx: "6",
    ry: "6",
    width: 117 * random,
    height: "12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("rect", {
    x: "938",
    y: "13",
    rx: "6",
    ry: "6",
    width: 83 * random,
    height: "12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("rect", {
    x: "0",
    y: "39",
    rx: "6",
    ry: "6",
    width: "1060",
    height: ".3"
  }));
};

var TableLoader = function TableLoader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, Array(10).fill('').map(function (e, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(TableRow, _extends({
      key: i,
      style: {
        opacity: Number(2 / i).toFixed(1)
      }
    }, props));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableLoader);

/***/ }),

/***/ "./assets/config.js":
/*!**************************!*\
  !*** ./assets/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "LOGIN_API": () => (/* binding */ LOGIN_API),
/* harmony export */   "USERS_API": () => (/* binding */ USERS_API)
/* harmony export */ });
var API_URL = 'http://localhost:8000/api/';
var LOGIN_API = API_URL + 'login_check';
var USERS_API = API_URL + 'users';

/***/ }),

/***/ "./assets/contexts/AuthContext.js":
/*!****************************************!*\
  !*** ./assets/contexts/AuthContext.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  isAuthenticated: false,
  setIsAuthenticated: function setIsAuthenticated(value) {}
}));

/***/ }),

/***/ "./assets/pages/main/Homepage.jsx":
/*!****************************************!*\
  !*** ./assets/pages/main/Homepage.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var HomePage = function HomePage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "jumbotron"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "display-3"
  }, "Hello, world!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "lead"
  }, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "my-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "It uses utility classNamees for typography and spacing to space content out within the larger container."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "lead"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "btn btn-primary btn-lg",
    href: "#",
    role: "button"
  }, "Learn more")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./assets/pages/main/LoginPage.jsx":
/*!*****************************************!*\
  !*** ./assets/pages/main/LoginPage.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_authAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authAPI */ "./assets/services/authAPI.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/AuthContext */ "./assets/contexts/AuthContext.js");
/* harmony import */ var _components_forms_Field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/forms/Field */ "./assets/components/forms/Field.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var LoginPage = function LoginPage(_ref) {
  var history = _ref.history;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_7__.default),
      setIsAuthenticated = _useContext.setIsAuthenticated;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    username: "",
    password: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      credentials = _useState2[0],
      setCredentials = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var handleChange = function handleChange(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var value = currentTarget.value,
        name = currentTarget.name;
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, _defineProperty({}, name, value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return _services_authAPI__WEBPACK_IMPORTED_MODULE_6__.default.authenticate(credentials);

            case 4:
              setError("");
              setIsAuthenticated(true);
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("Vous êtes Connecté ! 😁");
              history.replace("/users");
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              setError("Aucun Compte ne possède ce Login, ou bien les informations saisies ne sont pas valide!");
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error("Une Erreur est Survenue !");

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h1", null, "Connexion \xE0 L'Application"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_8__.default, {
    label: "Login",
    name: "username",
    value: credentials.username,
    onChange: handleChange,
    placeholder: "Votre Login",
    error: error
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_8__.default, {
    label: "Mot de Passe",
    type: "password",
    name: "password",
    value: credentials.password,
    onChange: handleChange,
    placeholder: "Votre Mot de Passe",
    error: error
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("button", {
    type: "submit",
    className: "btn btn-success"
  }, "Connexion"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

/***/ }),

/***/ "./assets/pages/main/RegisterPage.jsx":
/*!********************************************!*\
  !*** ./assets/pages/main/RegisterPage.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_forms_Field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/forms/Field */ "./assets/components/forms/Field.jsx");
/* harmony import */ var _services_usersAPI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/usersAPI */ "./assets/services/usersAPI.js");








function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var RegisterPage = function RegisterPage(_ref) {
  var history = _ref.history;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var handleChange = function handleChange(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var value = currentTarget.value,
        name = currentTarget.name;
    setUser(_objectSpread(_objectSpread({}, user), {}, _defineProperty({}, name, value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var apiErrors, _ref4, violations;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              apiErrors = {};

              if (!(user.password !== user.passwordConfirm)) {
                _context.next = 7;
                break;
              }

              apiErrors.passwordConfirm = "Confirmation de Mot de Pass n'est pas conforme à l'original";
              setErrors(apiErrors);
              react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Une Erreur est Survenue !");
              return _context.abrupt("return");

            case 7:
              _context.prev = 7;
              _context.next = 10;
              return _services_usersAPI__WEBPACK_IMPORTED_MODULE_9__.default.register(user);

            case 10:
              setErrors({});
              react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("Vous êtes Inscrit ! 😁");
              history.replace("/login");
              _context.next = 21;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](7);
              console.log(_context.t0.response);
              _ref4 = _context.t0.response.data ? _context.t0.response.data : '', violations = _ref4.violations;

              if (violations) {
                violations.forEach(function (violation) {
                  apiErrors[violation.propertyPath] = violation.message;
                });
                setErrors(apiErrors);
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Une Erreur est Survenue !");

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 15]]);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("h1", null, "Inscription"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_8__.default, {
    label: "Login",
    name: "username",
    value: user.username,
    onChange: handleChange,
    placeholder: "Votre Login",
    error: errors.username
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_8__.default, {
    label: "Pr\xE9nom",
    name: "firstName",
    value: user.firstName,
    onChange: handleChange,
    placeholder: "Votre Pr\xE9nom",
    error: errors.firstName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_8__.default, {
    label: "Nom",
    name: "lastName",
    value: user.lastName,
    onChange: handleChange,
    placeholder: "Votre Nom",
    error: errors.lastName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_8__.default, {
    label: "E-Mail",
    name: "email",
    value: user.email,
    onChange: handleChange,
    placeholder: "Votre E-Mail",
    error: errors.email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_8__.default, {
    label: "Mot de Passe",
    type: "password",
    name: "password",
    value: user.password,
    onChange: handleChange,
    placeholder: "Votre Mot de Passe",
    error: errors.password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_8__.default, {
    label: "Confirmation de Mot de Passe",
    type: "password",
    name: "passwordConfirm",
    value: user.passwordConfirm,
    onChange: handleChange,
    error: errors.passwordConfirm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("button", {
    type: "submit",
    className: "btn btn-success"
  }, "Inscription"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
    to: "/login",
    className: "btn btn-link"
  }, "J'ai d\xE9ja un Compte"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterPage);

/***/ }),

/***/ "./assets/pages/main/UsersPage.jsx":
/*!*****************************************!*\
  !*** ./assets/pages/main/UsersPage.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_loaders_TableLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loaders/TableLoader */ "./assets/components/loaders/TableLoader.jsx");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Pagination */ "./assets/components/Pagination.jsx");
/* harmony import */ var _services_usersAPI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/usersAPI */ "./assets/services/usersAPI.js");







function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var UsersPage = function UsersPage(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentpage = _useState4[0],
      setCurrentpage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    function fetchUsers() {
      return _fetchUsers.apply(this, arguments);
    }

    function _fetchUsers() {
      _fetchUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_usersAPI__WEBPACK_IMPORTED_MODULE_9__.default.findAll();

              case 3:
                data = _context.sent;
                setUsers(data);
                setLoading(false);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Erreur lors du Chargement des Utilisateurs !");
                console.log(_context.t0.response);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
      return _fetchUsers.apply(this, arguments);
    }

    fetchUsers();
  }, []);

  var handlePageChange = function handlePageChange(page) {
    return setCurrentpage(page);
  };

  var handleSearch = function handleSearch(_ref) {
    var currentTarget = _ref.currentTarget;
    setSearch(currentTarget.value);
    setCurrentpage(1);
  };

  var itemsParPage = 4;
  var filteredUsers = users.filter(function (c) {
    return c.firstName.toLowerCase().includes(search.toLowerCase()) || c.lastName.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.username.toLowerCase().includes(search.toLowerCase());
  });
  var paginatedUsers = _components_Pagination__WEBPACK_IMPORTED_MODULE_8__.default.getData(filteredUsers, currentpage, itemsParPage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h1", null, "Liste des Utilisateurs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("input", {
    type: "text",
    onChange: handleSearch,
    value: search,
    className: "form-control",
    placeholder: "Rechercher ..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("th", null, "#ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("th", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("th", null, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("th", null, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("th", null, "E-mail"))), !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("tbody", null, paginatedUsers.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("tr", {
      key: user.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("td", null, user.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("a", {
      href: "#"
    }, user.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("td", null, user.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("td", null, user.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("td", null, user.email));
  }))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_loaders_TableLoader__WEBPACK_IMPORTED_MODULE_7__.default, null), itemsParPage < filteredUsers.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_8__.default, {
    currentpage: currentpage,
    itemsParPage: itemsParPage,
    length: filteredUsers.length,
    onPageChanged: handlePageChange
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersPage);

/***/ }),

/***/ "./assets/services/authAPI.js":
/*!************************************!*\
  !*** ./assets/services/authAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./assets/config.js");





function logout() {
  window.localStorage.removeItem("authToken");
  delete (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.Authorization);
}

function authenticate(credentials) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post(_config__WEBPACK_IMPORTED_MODULE_3__.LOGIN_API, credentials).then(function (response) {
    return response.data.token;
  }).then(function (token) {
    window.localStorage.setItem("authToken", token);
    setAxiosToken(token);
  });
}

function setAxiosToken(token) {
  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.Authorization) = "Bearer " + token;
}

function setup() {
  var token = window.localStorage.getItem("authToken");

  if (token) {
    var _jwtDecode = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.default)(token),
        expiration = _jwtDecode.exp;

    if (expiration * 1000 > new Date().getTime()) {
      setAxiosToken(token);
    }
  }
}

function isAuthenticated() {
  var token = window.localStorage.getItem("authToken");

  if (token) {
    var _jwtDecode2 = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.default)(token),
        expiration = _jwtDecode2.exp;

    if (expiration * 1000 > new Date().getTime()) {
      return true;
    }

    return false;
  }

  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  authenticate: authenticate,
  logout: logout,
  setup: setup,
  isAuthenticated: isAuthenticated
});

/***/ }),

/***/ "./assets/services/usersAPI.js":
/*!*************************************!*\
  !*** ./assets/services/usersAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./assets/config.js");



function findAll() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(_config__WEBPACK_IMPORTED_MODULE_1__.USERS_API).then(function (response) {
    return response.data['hydra:member'];
  });
}

function register(user) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(_config__WEBPACK_IMPORTED_MODULE_1__.USERS_API, user);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  findAll: findAll,
  register: register
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./assets/app.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-c71e77"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1ByaXZhdGVSb3V0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZm9ybXMvRmllbGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2xvYWRlcnMvVGFibGVMb2FkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRleHRzL0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9tYWluL0hvbWVwYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvbWFpbi9Mb2dpblBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9tYWluL1JlZ2lzdGVyUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL21haW4vVXNlcnNQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZXMvYXV0aEFQSS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZXMvdXNlcnNBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJBdXRoQVBJIiwiQXBwIiwidXNlU3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJzZXRJc0F1dGhlbnRpY2F0ZWQiLCJOYXZiYXJXaXRoUm91dGVyIiwid2l0aFJvdXRlciIsIk5hdmJhciIsIkxvZ2luUGFnZSIsIlJlZ2lzdGVyUGFnZSIsIlVzZXJzUGFnZSIsIkhvbWVQYWdlIiwidG9hc3QiLCJCT1RUT01fUklHSFQiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJlYWN0RE9NIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiLCJoaXN0b3J5IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaGFuZGxlTG9nb3V0IiwicHVzaCIsIlBhZ2luYXRpb24iLCJjdXJyZW50cGFnZSIsIml0ZW1zUGFyUGFnZSIsImxlbmd0aCIsIm9uUGFnZUNoYW5nZWQiLCJwYWdlc0NvdW50IiwiTWF0aCIsImNlaWwiLCJwYWdlcyIsImkiLCJtYXAiLCJwYWdlIiwiZ2V0RGF0YSIsIml0ZW1zIiwic3RhcnQiLCJzbGljZSIsIlByaXZhdGVSb3V0ZSIsInBhdGgiLCJjb21wb25lbnQiLCJGaWVsZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJlcnJvciIsIlRhYmxlUm93IiwicHJvcHMiLCJyYW5kb20iLCJUYWJsZUxvYWRlciIsIkFycmF5IiwiZmlsbCIsImUiLCJvcGFjaXR5IiwiTnVtYmVyIiwidG9GaXhlZCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiTE9HSU5fQVBJIiwiVVNFUlNfQVBJIiwiUmVhY3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY3JlZGVudGlhbHMiLCJzZXRDcmVkZW50aWFscyIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXBsYWNlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkQ29uZmlybSIsInVzZXIiLCJzZXRVc2VyIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiYXBpRXJyb3JzIiwiVXNlcnNBUEkiLCJyZXNwb25zZSIsImRhdGEiLCJ2aW9sYXRpb25zIiwiZm9yRWFjaCIsInZpb2xhdGlvbiIsInByb3BlcnR5UGF0aCIsIm1lc3NhZ2UiLCJ1c2VycyIsInNldFVzZXJzIiwic2V0Q3VycmVudHBhZ2UiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImZldGNoVXNlcnMiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiaGFuZGxlU2VhcmNoIiwiZmlsdGVyZWRVc2VycyIsImZpbHRlciIsImMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicGFnaW5hdGVkVXNlcnMiLCJpZCIsImxvZ291dCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJheGlvcyIsImF1dGhlbnRpY2F0ZSIsInRoZW4iLCJ0b2tlbiIsInNldEl0ZW0iLCJzZXRBeGlvc1Rva2VuIiwic2V0dXAiLCJnZXRJdGVtIiwiand0RGVjb2RlIiwiZXhwaXJhdGlvbiIsImV4cCIsIkRhdGUiLCJnZXRUaW1lIiwiZmluZEFsbCIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsaUVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQsdUJBQXVCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRWpVO0FBQ0E7O0FBRXZELGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJC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e1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIF9pbmhlcml0cyhfZGVmYXVsdCwgX0NvbnRyb2xsZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoX2RlZmF1bHQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShDb250cm9sbGVyKTtcblxuZXhwb3J0IHsgX2RlZmF1bHQgYXMgZGVmYXVsdCB9OyIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBIYXNoUm91dGVyLCBTd2l0Y2gsIFJvdXRlLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vcGFnZXMvbWFpbi9Ib21lcGFnZSc7XG5pbXBvcnQgVXNlcnNQYWdlIGZyb20gJy4vcGFnZXMvbWFpbi9Vc2Vyc1BhZ2UnO1xuaW1wb3J0IExvZ2luUGFnZSBmcm9tICcuL3BhZ2VzL21haW4vTG9naW5QYWdlJztcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9wYWdlcy9tYWluL1JlZ2lzdGVyUGFnZSc7XG5pbXBvcnQgQXV0aEFQSSBmcm9tICcuL3NlcnZpY2VzL2F1dGhBUEknO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4vY29udGV4dHMvQXV0aENvbnRleHQnO1xuaW1wb3J0IFByaXZhdGVSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvUHJpdmF0ZVJvdXRlJztcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQgISEhXCIpO1xuXG5BdXRoQVBJLnNldHVwKCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtpc0F1dGhlbnRpY2F0ZWQsIHNldElzQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShBdXRoQVBJLmlzQXV0aGVudGljYXRlZCgpKTtcblxuICAgIGNvbnN0IE5hdmJhcldpdGhSb3V0ZXIgPSB3aXRoUm91dGVyKE5hdmJhcik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNBdXRoZW50aWNhdGVkLCBzZXRJc0F1dGhlbnRpY2F0ZWQgfX0+XG4gICAgICAgICAgICA8SGFzaFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8TmF2YmFyV2l0aFJvdXRlciAvPlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW5QYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBjb21wb25lbnQ9e1JlZ2lzdGVyUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcml2YXRlUm91dGUgcGF0aD1cIi91c2Vyc1wiIGNvbXBvbmVudD17VXNlcnNQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPXt0b2FzdC5QT1NJVElPTi5CT1RUT01fUklHSFR9IC8+XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgQXV0aEFQSSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoQVBJJztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBoaXN0b3J5IH0pID0+IHtcclxuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBzZXRJc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIEF1dGhBUEkubG9nb3V0KCk7XHJcbiAgICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKGZhbHNlKTtcclxuICAgICAgICB0b2FzdC5pbmZvKFwiVm91cyDDqnRlcyBEw6ljb25uZWN0w6kgISDwn5iKXCIpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgdG89XCIvXCI+VEFVUlVTPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJDb2xvcjAxXCIgYXJpYS1jb250cm9scz1cIm5hdmJhckNvbG9yMDFcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhckNvbG9yMDFcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNBdXRoZW50aWNhdGVkICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi91c2Vyc1wiPlVzZXJzPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyghaXNBdXRoZW50aWNhdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvcmVnaXN0ZXJcIj5JbnNyaXB0aW9uPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q29ubmV4aW9uPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSkgfHwgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+RMOpY29ubmV4aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBjdXJyZW50cGFnZSwgaXRlbXNQYXJQYWdlLCBsZW5ndGgsIG9uUGFnZUNoYW5nZWQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHBhZ2VzQ291bnQgPSBNYXRoLmNlaWwobGVuZ3RoIC8gaXRlbXNQYXJQYWdlKTtcclxuICAgIGNvbnN0IHBhZ2VzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGFnZXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgcGFnZXMucHVzaChpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc21cIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wicGFnZS1pdGVtXCIgKyAoY3VycmVudHBhZ2UgPT09IDEgJiYgXCIgZGlzYWJsZWRcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlZChjdXJyZW50cGFnZSAtIDEpfT4mbGFxdW87PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAge3BhZ2VzLm1hcChwYWdlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFnZX0gY2xhc3NOYW1lPXtcInBhZ2UtaXRlbVwiICsgKGN1cnJlbnRwYWdlID09PSBwYWdlICYmIFwiIGFjdGl2ZVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlZChwYWdlKX0+e3BhZ2V9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcInBhZ2UtaXRlbVwiICsgKGN1cnJlbnRwYWdlID09PSBwYWdlc0NvdW50ICYmIFwiIGRpc2FibGVkXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZWQoY3VycmVudHBhZ2UgKyAxKX0+JnJhcXVvOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblBhZ2luYXRpb24uZ2V0RGF0YSA9IChpdGVtcywgY3VycmVudHBhZ2UsIGl0ZW1zUGFyUGFnZSkgPT4ge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBjdXJyZW50cGFnZSAqIGl0ZW1zUGFyUGFnZSAtIGl0ZW1zUGFyUGFnZTtcclxuICAgIHJldHVybiBpdGVtcy5zbGljZShzdGFydCwgc3RhcnQgKyBpdGVtc1BhclBhZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuXHJcbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IHBhdGgsIGNvbXBvbmVudCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICByZXR1cm4gaXNBdXRoZW50aWNhdGVkID8gPFJvdXRlIHBhdGg9e3BhdGh9IGNvbXBvbmVudD17Y29tcG9uZW50fSAvPiA6IDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUm91dGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgbmFtZSwgbGFiZWwsIHZhbHVlLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgPSBcIlwiLCB0eXBlID0gXCJ0ZXh0XCIsIGVycm9yID0gXCJcIiB9KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IHZhbHVlPXt2YWx1ZX0gY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbFwiICsgKGVycm9yICYmIFwiIGlzLWludmFsaWRcIil9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyIHx8IGxhYmVsfSBpZD17bmFtZX0gbmFtZT17bmFtZX0gLz5cclxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcn08L3A+fVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudExvYWRlciBmcm9tICdyZWFjdC1jb250ZW50LWxvYWRlcidcclxuXHJcbmNvbnN0IFRhYmxlUm93ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqICgxIC0gMC43KSArIDAuN1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGVudExvYWRlciB2aWV3Qm94PVwiMCAwIDEwNjAgNDBcIiBoZWlnaHQ9ezQwfSB3aWR0aD17MTA2MH0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMTVcIiByeD1cIjRcIiByeT1cIjRcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCI2LjRcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiMzRcIiB5PVwiMTNcIiByeD1cIjZcIiByeT1cIjZcIiB3aWR0aD17MjAwICogcmFuZG9tfSBoZWlnaHQ9XCIxMlwiIC8+XHJcbiAgICAgICAgICAgIDxyZWN0IHg9XCI2MzNcIiB5PVwiMTNcIiByeD1cIjZcIiByeT1cIjZcIiB3aWR0aD17MjMgKiByYW5kb219IGhlaWdodD1cIjEyXCIgLz5cclxuICAgICAgICAgICAgPHJlY3QgeD1cIjY1M1wiIHk9XCIxM1wiIHJ4PVwiNlwiIHJ5PVwiNlwiIHdpZHRoPXs3OCAqIHJhbmRvbX0gaGVpZ2h0PVwiMTJcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiNzU1XCIgeT1cIjEzXCIgcng9XCI2XCIgcnk9XCI2XCIgd2lkdGg9ezExNyAqIHJhbmRvbX0gaGVpZ2h0PVwiMTJcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiOTM4XCIgeT1cIjEzXCIgcng9XCI2XCIgcnk9XCI2XCIgd2lkdGg9ezgzICogcmFuZG9tfSBoZWlnaHQ9XCIxMlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIzOVwiIHJ4PVwiNlwiIHJ5PVwiNlwiIHdpZHRoPVwiMTA2MFwiIGhlaWdodD1cIi4zXCIgLz5cclxuICAgICAgICA8L0NvbnRlbnRMb2FkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFRhYmxlTG9hZGVyID0gcHJvcHMgPT4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtBcnJheSgxMClcclxuICAgICAgICAgICAgLmZpbGwoJycpXHJcbiAgICAgICAgICAgIC5tYXAoKGUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBOdW1iZXIoMiAvIGkpLnRvRml4ZWQoMSkgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlTG9hZGVyIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOX0FQSSA9IEFQSV9VUkwgKyAnbG9naW5fY2hlY2snO1xyXG5leHBvcnQgY29uc3QgVVNFUlNfQVBJID0gQVBJX1VSTCArICd1c2Vycyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgIHNldElzQXV0aGVudGljYXRlZDogKHZhbHVlKSA9PiB7IH1cclxufSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktM1wiPkhlbGxvLCB3b3JsZCE8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+VGhpcyBpcyBhIHNpbXBsZSBoZXJvIHVuaXQsIGEgc2ltcGxlIGp1bWJvdHJvbi1zdHlsZSBjb21wb25lbnQgZm9yIGNhbGxpbmcgZXh0cmEgYXR0ZW50aW9uIHRvIGZlYXR1cmVkIGNvbnRlbnQgb3IgaW5mb3JtYXRpb24uPC9wPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNFwiIC8+XHJcbiAgICAgICAgICAgIDxwPkl0IHVzZXMgdXRpbGl0eSBjbGFzc05hbWVlcyBmb3IgdHlwb2dyYXBoeSBhbmQgc3BhY2luZyB0byBzcGFjZSBjb250ZW50IG91dCB3aXRoaW4gdGhlIGxhcmdlciBjb250YWluZXIuPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCI+TGVhcm4gbW9yZTwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0aEFQSSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoQVBJJztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvRmllbGQnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmNvbnN0IExvZ2luUGFnZSA9ICh7IGhpc3RvcnkgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgc2V0SXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBbY3JlZGVudGlhbHMsIHNldENyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyBjdXJyZW50VGFyZ2V0IH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBjdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIHNldENyZWRlbnRpYWxzKHsgLi4uY3JlZGVudGlhbHMsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IEF1dGhBUEkuYXV0aGVudGljYXRlKGNyZWRlbnRpYWxzKTtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgICAgICAgIHNldElzQXV0aGVudGljYXRlZCh0cnVlKTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlZvdXMgw6p0ZXMgQ29ubmVjdMOpICEg8J+YgVwiKTtcclxuICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKFwiL3VzZXJzXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgc2V0RXJyb3IoXCJBdWN1biBDb21wdGUgbmUgcG9zc8OoZGUgY2UgTG9naW4sIG91IGJpZW4gbGVzIGluZm9ybWF0aW9ucyBzYWlzaWVzIG5lIHNvbnQgcGFzIHZhbGlkZSFcIik7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiVW5lIEVycmV1ciBlc3QgU3VydmVudWUgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+Q29ubmV4aW9uIMOgIEwnQXBwbGljYXRpb248L2gxPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJMb2dpblwiIG5hbWU9XCJ1c2VybmFtZVwiIHZhbHVlPXtjcmVkZW50aWFscy51c2VybmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIExvZ2luXCIgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTW90IGRlIFBhc3NlXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e2NyZWRlbnRpYWxzLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVm90cmUgTW90IGRlIFBhc3NlXCIgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q29ubmV4aW9uPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGaWVsZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0ZpZWxkJztcclxuaW1wb3J0IFVzZXJzQVBJIGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXJzQVBJJztcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUGFnZSA9ICh7IGhpc3RvcnkgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmRDb25maXJtOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBwYXNzd29yZENvbmZpcm06IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGFwaUVycm9ycyA9IHt9O1xyXG4gICAgICAgIGlmICh1c2VyLnBhc3N3b3JkICE9PSB1c2VyLnBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICAgICAgICBhcGlFcnJvcnMucGFzc3dvcmRDb25maXJtID0gXCJDb25maXJtYXRpb24gZGUgTW90IGRlIFBhc3Mgbidlc3QgcGFzIGNvbmZvcm1lIMOgIGwnb3JpZ2luYWxcIjtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKGFwaUVycm9ycyk7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiVW5lIEVycmV1ciBlc3QgU3VydmVudWUgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgVXNlcnNBUEkucmVnaXN0ZXIodXNlcik7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJWb3VzIMOqdGVzIEluc2NyaXQgISDwn5iBXCIpO1xyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UoXCIvbG9naW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHZpb2xhdGlvbnMgfSA9IGVycm9yLnJlc3BvbnNlLmRhdGEgPyBlcnJvci5yZXNwb25zZS5kYXRhIDogJyc7XHJcbiAgICAgICAgICAgIGlmICh2aW9sYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB2aW9sYXRpb25zLmZvckVhY2godmlvbGF0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhcGlFcnJvcnNbdmlvbGF0aW9uLnByb3BlcnR5UGF0aF0gPSB2aW9sYXRpb24ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKGFwaUVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJVbmUgRXJyZXVyIGVzdCBTdXJ2ZW51ZSAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5JbnNjcmlwdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTG9naW5cIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlci51c2VybmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIExvZ2luXCIgZXJyb3I9e2Vycm9ycy51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlByw6lub21cIiBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e3VzZXIuZmlyc3ROYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVm90cmUgUHLDqW5vbVwiIGVycm9yPXtlcnJvcnMuZmlyc3ROYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTm9tXCIgbmFtZT1cImxhc3ROYW1lXCIgdmFsdWU9e3VzZXIubGFzdE5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBOb21cIiBlcnJvcj17ZXJyb3JzLmxhc3ROYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiRS1NYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3VzZXIuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBFLU1haWxcIiBlcnJvcj17ZXJyb3JzLmVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTW90IGRlIFBhc3NlXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3VzZXIucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBNb3QgZGUgUGFzc2VcIiBlcnJvcj17ZXJyb3JzLnBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiQ29uZmlybWF0aW9uIGRlIE1vdCBkZSBQYXNzZVwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIiB2YWx1ZT17dXNlci5wYXNzd29yZENvbmZpcm19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5wYXNzd29yZENvbmZpcm19IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5JbnNjcmlwdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCI+SidhaSBkw6lqYSB1biBDb21wdGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFRhYmxlTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9hZGVycy9UYWJsZUxvYWRlcic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcbmltcG9ydCBVc2Vyc0FQSSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2Vyc0FQSSc7XHJcblxyXG5jb25zdCBVc2Vyc1BhZ2UgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50cGFnZSwgc2V0Q3VycmVudHBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFVzZXJzQVBJLmZpbmRBbGwoKVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRXJyZXVyIGxvcnMgZHUgQ2hhcmdlbWVudCBkZXMgVXRpbGlzYXRldXJzICFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hVc2VycygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4gc2V0Q3VycmVudHBhZ2UocGFnZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaChjdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRDdXJyZW50cGFnZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpdGVtc1BhclBhZ2UgPSA0O1xyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkVXNlcnMgPSB1c2Vycy5maWx0ZXIoYyA9PlxyXG4gICAgICAgIGMuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgYy5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgIGMuZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICBjLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgcGFnaW5hdGVkVXNlcnMgPSBQYWdpbmF0aW9uLmdldERhdGEoZmlsdGVyZWRVc2VycywgY3VycmVudHBhZ2UsIGl0ZW1zUGFyUGFnZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+TGlzdGUgZGVzIFV0aWxpc2F0ZXVyczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9IHZhbHVlPXtzZWFyY2h9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciAuLi5cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiNJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Mb2dpbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FLW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cGFnaW5hdGVkVXNlcnMubWFwKHVzZXIgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnt1c2VyLnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuZmlyc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5Pn1cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgPFRhYmxlTG9hZGVyIC8+fVxyXG5cclxuICAgICAgICAgICAge2l0ZW1zUGFyUGFnZSA8IGZpbHRlcmVkVXNlcnMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBjdXJyZW50cGFnZT17Y3VycmVudHBhZ2V9IGl0ZW1zUGFyUGFnZT17aXRlbXNQYXJQYWdlfSBsZW5ndGg9e2ZpbHRlcmVkVXNlcnMubGVuZ3RofSBvblBhZ2VDaGFuZ2VkPXtoYW5kbGVQYWdlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1BhZ2U7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IHsgTE9HSU5fQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhUb2tlblwiKTtcclxuICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXV0aGVudGljYXRlKGNyZWRlbnRpYWxzKSB7XHJcbiAgICByZXR1cm4gYXhpb3NcclxuICAgICAgICAucG9zdChMT0dJTl9BUEksIGNyZWRlbnRpYWxzKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEudG9rZW4pXHJcbiAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoVG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICBzZXRBeGlvc1Rva2VuKHRva2VuKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QXhpb3NUb2tlbih0b2tlbikge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBcIkJlYXJlciBcIiArIHRva2VuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgIGNvbnN0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgeyBleHA6IGV4cGlyYXRpb24gfSA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgaWYgKGV4cGlyYXRpb24gKiAxMDAwID4gbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgc2V0QXhpb3NUb2tlbih0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGNvbnN0IHsgZXhwOiBleHBpcmF0aW9uIH0gPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gICAgICAgIGlmIChleHBpcmF0aW9uICogMTAwMCA+IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBhdXRoZW50aWNhdGUsXHJcbiAgICBsb2dvdXQsXHJcbiAgICBzZXR1cCxcclxuICAgIGlzQXV0aGVudGljYXRlZFxyXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFVTRVJTX0FQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiBmaW5kQWxsKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgLmdldChVU0VSU19BUEkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyKHVzZXIpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KFVTRVJTX0FQSSwgdXNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZpbmRBbGwsXHJcbiAgICByZWdpc3RlclxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==