(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/components/avatars/avatar.png":
/*!**********************************************!*\
  !*** ./assets/components/avatars/avatar.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/avatar.e8dbe401.png";

/***/ }),

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
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Navbar */ "./assets/components/Navbar.jsx");
/* harmony import */ var _pages_main_Homepage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/main/Homepage */ "./assets/pages/main/Homepage.jsx");
/* harmony import */ var _pages_main_UsersPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/main/UsersPage */ "./assets/pages/main/UsersPage.jsx");
/* harmony import */ var _pages_main_LoginPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main/LoginPage */ "./assets/pages/main/LoginPage.jsx");
/* harmony import */ var _pages_main_RegisterPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/main/RegisterPage */ "./assets/pages/main/RegisterPage.jsx");
/* harmony import */ var _services_authAPI__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/authAPI */ "./assets/services/authAPI.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contexts/AuthContext */ "./assets/contexts/AuthContext.js");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/PrivateRoute */ "./assets/components/PrivateRoute.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _pages_main_ProductsPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/main/ProductsPage */ "./assets/pages/main/ProductsPage.jsx");
/* harmony import */ var _pages_main_ProductPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/main/ProductPage */ "./assets/pages/main/ProductPage.jsx");
/* harmony import */ var _services_usersAPI__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/usersAPI */ "./assets/services/usersAPI.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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















_services_authAPI__WEBPACK_IMPORTED_MODULE_12__.default.setup();

var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_services_authAPI__WEBPACK_IMPORTED_MODULE_12__.default.isAuthenticated()),
      _useState2 = _slicedToArray(_useState, 2),
      isAuthenticated = _useState2[0],
      setIsAuthenticated = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    firstName: "",
    lastName: "",
    username: "",
    email: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  var userId = window.localStorage.getItem("userId");

  var fetchUser = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userId) {
      var _yield$UsersAPI$find, firstName, lastName, username, email;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_usersAPI__WEBPACK_IMPORTED_MODULE_18__.default.find(userId);

            case 3:
              _yield$UsersAPI$find = _context.sent;
              firstName = _yield$UsersAPI$find.firstName;
              lastName = _yield$UsersAPI$find.lastName;
              username = _yield$UsersAPI$find.username;
              email = _yield$UsersAPI$find.email;
              setUser({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email
              });
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function fetchUser(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (isAuthenticated) {
      fetchUser(userId);
    }
  }, [userId]);
  var NavbarWithRouter = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.withRouter)(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_13__.default.Provider, {
    value: {
      isAuthenticated: isAuthenticated,
      setIsAuthenticated: setIsAuthenticated
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(NavbarWithRouter, {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("main", {
    className: "container pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_14__.default, {
    path: "/products/:id",
    component: _pages_main_ProductPage__WEBPACK_IMPORTED_MODULE_17__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_14__.default, {
    path: "/products",
    component: _pages_main_ProductsPage__WEBPACK_IMPORTED_MODULE_16__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    path: "/login",
    component: _pages_main_LoginPage__WEBPACK_IMPORTED_MODULE_10__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    path: "/register",
    component: _pages_main_RegisterPage__WEBPACK_IMPORTED_MODULE_11__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_14__.default, {
    path: "/users",
    component: _pages_main_UsersPage__WEBPACK_IMPORTED_MODULE_9__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    path: "/",
    component: _pages_main_Homepage__WEBPACK_IMPORTED_MODULE_8__.default
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_21__.ToastContainer, {
    position: react_toastify__WEBPACK_IMPORTED_MODULE_21__.toast.POSITION.BOTTOM_RIGHT
  }));
};

var rootElement = document.querySelector('#app');
react_dom__WEBPACK_IMPORTED_MODULE_4___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(App, null), rootElement);

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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_authAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authAPI */ "./assets/services/authAPI.js");
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ "./assets/contexts/AuthContext.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/navbar.css */ "./assets/styles/navbar.css");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Navbar = function Navbar(_ref) {
  var history = _ref.history,
      user = _ref.user;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.default),
      isAuthenticated = _useContext.isAuthenticated,
      setIsAuthenticated = _useContext.setIsAuthenticated;

  var handleLogout = function handleLogout() {
    _services_authAPI__WEBPACK_IMPORTED_MODULE_2__.default.logout();
    setIsAuthenticated(false);
    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.info("Vous êtes Déconnecté ! 😊");
    history.push('/login');
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var currentPath = history.location.pathname;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "navbar-brand",
    to: "/"
  }, "TAURUS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarColor01",
    "aria-controls": "navbarColor01",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarColor01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "navbar-nav mr-auto"
  }, isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "nav-link icon-button",
    to: "/products"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_7__.RiShoppingBag3Line, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "nav-link icon-button",
    to: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_go__WEBPACK_IMPORTED_MODULE_8__.GoPackage, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "nav-link icon-button",
    to: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaChartLine, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "nav-link icon-button",
    to: "/users"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaUsers, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "navbar-nav ml-auto"
  }, !isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "nav-link",
    to: "/register"
  }, "Insription")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    to: "/login",
    className: "btn btn-success"
  }, "Connexion"))) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "icon-button-circle",
    to: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaFacebookMessenger, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "icon-button-circle",
    to: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaBell, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "icon-button-circle pointer",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsFillCaretDownFill, null)), open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "menu-item menu-profil",
    to: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "icon-button-circle",
    style: {
      backgroundImage: "url(".concat(__webpack_require__(/*! ./avatars/avatar.png */ "./assets/components/avatars/avatar.png"), ")"),
      backgroundSize: "55px 55px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }), user.firstName + " " + user.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "menu-item",
    to: "#",
    style: {
      marginTop: "5px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "icon-button-circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaCog, null)), "Param\xE8tres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "menu-item",
    href: "#",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "icon-button-circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaDoorOpen, null)), "D\xE9connexion")))))));
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

/***/ "./assets/components/PopupModal.jsx":
/*!******************************************!*\
  !*** ./assets/components/PopupModal.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");




var PopupModal = function PopupModal(_ref) {
  var show = _ref.show,
      handleClose = _ref.handleClose,
      onChangeEvent = _ref.onChangeEvent,
      value = _ref.value,
      title = _ref.title,
      content = _ref.content,
      button = _ref.button,
      buttonColor = _ref.buttonColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default, {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Title, null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Body, null, content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "secondary",
    onClick: handleClose
  }, "Fermer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: buttonColor,
    onClick: function onClick() {
      return onChangeEvent(value);
    }
  }, button))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupModal);

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
      error = _ref$error === void 0 ? "" : _ref$error,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? "" : _ref$step;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    type: type,
    step: step,
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

/***/ "./assets/components/forms/Select.jsx":
/*!********************************************!*\
  !*** ./assets/components/forms/Select.jsx ***!
  \********************************************/
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



var Select = function Select(_ref) {
  var name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      error = _ref.error,
      onChange = _ref.onChange,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
    onChange: onChange,
    name: name,
    value: value,
    id: name,
    className: "form-control " + (error && " is-invalid")
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "invalid-feedback"
  }, error));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

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
/* harmony export */   "USERS_API": () => (/* binding */ USERS_API),
/* harmony export */   "PRODUCTS_API": () => (/* binding */ PRODUCTS_API)
/* harmony export */ });
var API_URL = 'https://fox-taurus-app.herokuapp.com/api/';
var LOGIN_API = API_URL + 'login_check';
var USERS_API = API_URL + 'users';
var PRODUCTS_API = API_URL + 'products';

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

/***/ "./assets/pages/main/ProductPage.jsx":
/*!*******************************************!*\
  !*** ./assets/pages/main/ProductPage.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_forms_Field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/forms/Field */ "./assets/components/forms/Field.jsx");
/* harmony import */ var _components_forms_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/forms/Select */ "./assets/components/forms/Select.jsx");
/* harmony import */ var _services_productsAPI__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/productsAPI */ "./assets/services/productsAPI.js");















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ProductPage = function ProductPage(_ref) {
  var match = _ref.match,
      history = _ref.history;
  var _match$params$id = match.params.id,
      id = _match$params$id === void 0 ? "new" : _match$params$id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)({
    productName: "",
    reference: "",
    description: "",
    quantity: 0,
    price: 0,
    category: 0,
    active: 1,
    user: 1,
    createdAt: new Date().toLocaleString()
  }),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)({
    productName: "",
    reference: "",
    description: "",
    quantity: "",
    price: "",
    category: "",
    createdAt: "",
    active: "",
    user: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      editing = _useState6[0],
      setEditing = _useState6[1];

  var fetchProduct = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
      var _yield$ProductsAPI$fi, productName, reference, description, quantity, price, category, active;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_productsAPI__WEBPACK_IMPORTED_MODULE_17__.default.find(id);

            case 3:
              _yield$ProductsAPI$fi = _context.sent;
              productName = _yield$ProductsAPI$fi.productName;
              reference = _yield$ProductsAPI$fi.reference;
              description = _yield$ProductsAPI$fi.description;
              quantity = _yield$ProductsAPI$fi.quantity;
              price = _yield$ProductsAPI$fi.price;
              category = _yield$ProductsAPI$fi.category;
              active = _yield$ProductsAPI$fi.active;
              setProduct({
                productName: productName,
                reference: reference,
                description: description,
                quantity: quantity,
                price: price,
                category: category,
                active: active
              });
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.response);
              history.replace("/products");

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function fetchProduct(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    if (id !== "new") {
      setEditing(true);
      fetchProduct(id);
    }
  }, [id]);

  var handleChange = function handleChange(_ref3) {
    var currentTarget = _ref3.currentTarget;
    var name = currentTarget.name;
    var value = currentTarget.name == 'quantity' || currentTarget.name == 'category' ? parseInt(currentTarget.value) : currentTarget.name == 'price' ? parseFloat(currentTarget.value) : currentTarget.value;
    setProduct(_objectSpread(_objectSpread({}, product), {}, _defineProperty({}, name, value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var data, response, violations, apiErrors;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.prev = 1;

              if (!editing) {
                _context2.next = 9;
                break;
              }

              _context2.next = 5;
              return _services_productsAPI__WEBPACK_IMPORTED_MODULE_17__.default.update(id, product);

            case 5:
              data = _context2.sent;
              console.log(data);
              _context2.next = 13;
              break;

            case 9:
              console.log(product);
              _context2.next = 12;
              return _services_productsAPI__WEBPACK_IMPORTED_MODULE_17__.default.create(product);

            case 12:
              history.replace("/products");

            case 13:
              setErrors({});
              _context2.next = 22;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](1);
              response = _context2.t0.response;
              violations = response.data.violations;
              console.log(response);

              if (violations) {
                apiErrors = {};
                violations.forEach(function (_ref6) {
                  var propertyPath = _ref6.propertyPath,
                      message = _ref6.message;
                  apiErrors[propertyPath] = message;
                });
                setErrors(apiErrors);
              }

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 16]]);
    }));

    return function handleSubmit(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, !editing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h1", null, "Cr\xE9ation d'un Produit") || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h1", null, "Modification d'un Produit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_15__.default, {
    name: "productName",
    label: "Nom de Produit",
    placeholder: "Nom de Produit",
    value: product.productName,
    onChange: handleChange,
    error: errors.productName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_15__.default, {
    name: "reference",
    label: "R\xE9f\xE9rence",
    placeholder: "R\xE9f\xE9rence du Produit",
    value: product.reference,
    onChange: handleChange,
    error: errors.reference
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_components_forms_Select__WEBPACK_IMPORTED_MODULE_16__.default, {
    name: "category",
    label: "Cat\xE9gorie",
    value: product.category,
    error: errors.category,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("option", {
    value: "1"
  }, "Informatique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("option", {
    value: "2"
  }, "Maison")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("label", {
    htmlFor: "description"
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("textarea", {
    value: product.description,
    onChange: handleChange,
    className: "form-control " + (errors.description && " is-invalid"),
    placeholder: "Description du Produit",
    id: "description",
    name: "description"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_15__.default, {
    name: "quantity",
    type: "number",
    label: "Quantit\xE9",
    placeholder: "Quantit\xE9 du Produit",
    value: product.quantity,
    onChange: handleChange,
    error: errors.quantity
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_components_forms_Field__WEBPACK_IMPORTED_MODULE_15__.default, {
    name: "price",
    step: "0.01",
    type: "number",
    label: "Prix",
    placeholder: "Prix du Produit",
    value: product.price.toLocaleString(),
    onChange: handleChange,
    error: errors.price
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    type: "submit",
    className: "btn btn-success"
  }, "Enregister"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
    to: "/products",
    className: "btn btn-link"
  }, "Retour \xE0 la Liste"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);

/***/ }),

/***/ "./assets/pages/main/ProductsPage.jsx":
/*!********************************************!*\
  !*** ./assets/pages/main/ProductsPage.jsx ***!
  \********************************************/
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Pagination */ "./assets/components/Pagination.jsx");
/* harmony import */ var _services_productsAPI__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/productsAPI */ "./assets/services/productsAPI.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_loaders_TableLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/loaders/TableLoader */ "./assets/components/loaders/TableLoader.jsx");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _components_PopupModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/PopupModal */ "./assets/components/PopupModal.jsx");
/* harmony import */ var _components_forms_Field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/forms/Field */ "./assets/components/forms/Field.jsx");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var ProductsPage = function ProductsPage(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({
    active: 0,
    quantity: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      line = _useState4[0],
      setLine = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      currentpage = _useState6[0],
      setCurrentpage = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      search = _useState8[0],
      setSearch = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      show = _useState12[0],
      setShow = _useState12[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    function fetchProducts() {
      return _fetchProducts.apply(this, arguments);
    }

    function _fetchProducts() {
      _fetchProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_productsAPI__WEBPACK_IMPORTED_MODULE_12__.default.findAll();

              case 3:
                data = _context.sent;
                setProducts(data);
                setLoading(false);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.error("Erreur lors du Chargement des Produits !");
                console.log(_context.t0.response);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
      return _fetchProducts.apply(this, arguments);
    }

    fetchProducts();
  }, []);

  var handlePageChange = function handlePageChange(page) {
    return setCurrentpage(page);
  };

  var handleSearch = function handleSearch(_ref) {
    var currentTarget = _ref.currentTarget;
    setSearch(currentTarget.value);
    setCurrentpage(1);
  };

  var handleDelete = function handleDelete(id) {
    var originalProducts = _toConsumableArray(products);

    setProducts(products.filter(function (product) {
      return product.id !== id;
    }));
    _services_productsAPI__WEBPACK_IMPORTED_MODULE_12__.default.deleteProduct(id)["catch"](function (error) {
      console.log(error);
      setProducts(originalProducts);
    });
    setShow(false);
  };

  var handleActiveChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, name, value) {
      var originalProducts, originalProduct, active, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              originalProducts = _toConsumableArray(products);
              originalProduct = originalProducts[e];
              originalProduct.active = value == 1 ? 0 : 1;
              active = value == 1 ? 0 : 1;
              setLine(_objectSpread(_objectSpread({}, originalProduct), {}, _defineProperty({}, name, active)));
              _context2.next = 7;
              return _services_productsAPI__WEBPACK_IMPORTED_MODULE_12__.default.update(originalProducts[e].id, originalProduct);

            case 7:
              data = _context2.sent;

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleActiveChange(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChange = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
      var currentTarget, name, index, originalProducts, originalProduct, value;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              currentTarget = _ref3.currentTarget;
              name = currentTarget.name;
              index = currentTarget.id.replace(name + "_", '');
              originalProducts = _toConsumableArray(products);
              originalProduct = originalProducts[index];
              value = parseInt(currentTarget.value);
              originalProduct.quantity = value;
              setLine(_objectSpread(_objectSpread({}, originalProduct), {}, _defineProperty({}, name, value)));
              _context3.next = 10;
              return _services_productsAPI__WEBPACK_IMPORTED_MODULE_12__.default.update(originalProduct.id, originalProduct);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleChange(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  var itemsParPage = 4;
  var filteredProducts = products.filter(function (c) {
    return c.productName.toLowerCase().includes(search.toLowerCase()) || c.reference.toLowerCase().includes(search.toLowerCase());
  });
  var paginatedProducts = _components_Pagination__WEBPACK_IMPORTED_MODULE_11__.default.getData(filteredProducts, currentpage, itemsParPage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react__WEBPACK_IMPORTED_MODULE_10___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("div", {
    className: "mb-3 d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("h1", null, "Liste des Produits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
    to: "/products/new",
    className: "btn btn-primary"
  }, "Cr\xE9er un Produit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", null, "Produit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", null, "R\xE9f\xE9rence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", null, "Cat\xE9gorie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", {
    className: "text-center"
  }, "Quantit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", {
    className: "text-center"
  }, "Prix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", {
    className: "text-center"
  }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", {
    className: "text-center"
  }))), !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("tbody", null, paginatedProducts.map(function (product, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("tr", {
      key: product.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_components_PopupModal__WEBPACK_IMPORTED_MODULE_14__.default, {
      show: show,
      handleClose: handleClose,
      onChangeEvent: handleDelete,
      value: product.id,
      title: "Supprimer Ce Produit ?",
      content: "Vous \xEAtes sur le point de supprimer ce Produit, \xEAtes-vous s\xFBr ?",
      button: "Supprimer",
      buttonColor: "danger"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/products/" + product.id
    }, product.productName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", null, product.reference), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("input", {
      type: "number",
      value: product.quantity,
      className: "form-control",
      onChange: handleChange,
      id: "quantity_" + index,
      name: "quantity"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", {
      className: "text-center"
    }, product.price.toLocaleString(), " DH"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", {
      className: "text-center"
    }, product.active == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_18__.AiFillCheckCircle, {
      onClick: function onClick() {
        return handleActiveChange(index, "active", 1);
      },
      style: {
        fill: "#159F5C",
        width: "30px",
        height: "30px"
      }
    }), product.active != 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_18__.AiFillCloseCircle, {
      onClick: function onClick() {
        return handleActiveChange(index, "active", 0);
      },
      style: {
        fill: "#DD5145",
        width: "30px",
        height: "30px"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("th", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/products/" + product.id,
      className: "btn btn-sm btn-primary"
    }, "Editer"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("button", {
      onClick: handleShow // onClick={() => handleDelete(product.id)} 
      ,
      className: "btn btn-sm btn-danger"
    }, "Supprimer")));
  }))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_components_loaders_TableLoader__WEBPACK_IMPORTED_MODULE_13__.default, null), itemsParPage < filteredProducts.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_11__.default, {
    currentpage: currentpage,
    itemsParPage: itemsParPage,
    length: filteredProducts.length,
    onPageChanged: handlePageChange
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsPage);

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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./assets/config.js");








function logout() {
  window.localStorage.removeItem("authToken");
  window.localStorage.removeItem("userId");
  delete (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.Authorization);
}

function authenticate(credentials) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default().post(_config__WEBPACK_IMPORTED_MODULE_6__.LOGIN_API, credentials).then(function (response) {
    return response.data.token;
  }).then(function (token) {
    window.localStorage.setItem("authToken", token);
    setAxiosToken(token);
    window.localStorage.setItem("userId", parseJwt(token).userId);
  });
}

function setAxiosToken(token) {
  (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.Authorization) = "Bearer " + token;
}

function setup() {
  var token = window.localStorage.getItem("authToken");

  if (token) {
    var _jwtDecode = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__.default)(token),
        expiration = _jwtDecode.exp;

    if (expiration * 1000 > new Date().getTime()) {
      setAxiosToken(token);
    }
  }
}

function isAuthenticated() {
  var token = window.localStorage.getItem("authToken");

  if (token) {
    var _jwtDecode2 = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__.default)(token),
        expiration = _jwtDecode2.exp;

    if (expiration * 1000 > new Date().getTime()) {
      return true;
    }

    return false;
  }

  return false;
}

function parseJwt(token) {
  if (!token) {
    return;
  }

  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  authenticate: authenticate,
  logout: logout,
  setup: setup,
  isAuthenticated: isAuthenticated
});

/***/ }),

/***/ "./assets/services/productsAPI.js":
/*!****************************************!*\
  !*** ./assets/services/productsAPI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./assets/config.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function findAll() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(_config__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_API).then(function (response) {
    return response.data['hydra:member'];
  });
}

function find(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get(_config__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_API + "/" + id).then(function (response) {
    return response.data;
  });
}

function update(id, product) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().put(_config__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_API + "/" + id, product);
}

function create(product) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post(_config__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_API, _objectSpread(_objectSpread({}, product), {}, {
    user: "/api/users/".concat(product.user)
  }));
}

function deleteProduct(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(_config__WEBPACK_IMPORTED_MODULE_2__.PRODUCTS_API + "/" + id);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  findAll: findAll,
  find: find,
  update: update,
  create: create,
  deleteProduct: deleteProduct
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

function find(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(_config__WEBPACK_IMPORTED_MODULE_1__.USERS_API + "/" + id).then(function (response) {
    return response.data;
  });
}

function register(user) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(_config__WEBPACK_IMPORTED_MODULE_1__.USERS_API, user);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  findAll: findAll,
  find: find,
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


/***/ }),

/***/ "./assets/styles/navbar.css":
/*!**********************************!*\
  !*** ./assets/styles/navbar.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./assets/app.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-16677e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1BvcHVwTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1ByaXZhdGVSb3V0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZm9ybXMvRmllbGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Zvcm1zL1NlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZGVycy9UYWJsZUxvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGV4dHMvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL21haW4vSG9tZXBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9tYWluL0xvZ2luUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL21haW4vUHJvZHVjdFBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9tYWluL1Byb2R1Y3RzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL21haW4vUmVnaXN0ZXJQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvbWFpbi9Vc2Vyc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9hdXRoQVBJLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9wcm9kdWN0c0FQSS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZXMvdXNlcnNBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvbmF2YmFyLmNzcz80NGQ1Il0sIm5hbWVzIjpbIkF1dGhBUEkiLCJBcHAiLCJ1c2VTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsInNldElzQXV0aGVudGljYXRlZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidXNlcm5hbWUiLCJlbWFpbCIsInVzZXIiLCJzZXRVc2VyIiwidXNlcklkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIlVzZXJzQVBJIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIk5hdmJhcldpdGhSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiTmF2YmFyIiwiUHJvZHVjdFBhZ2UiLCJQcm9kdWN0c1BhZ2UiLCJMb2dpblBhZ2UiLCJSZWdpc3RlclBhZ2UiLCJVc2Vyc1BhZ2UiLCJIb21lUGFnZSIsInRvYXN0IiwiQk9UVE9NX1JJR0hUIiwicm9vdEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJSZWFjdERPTSIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIiwiaGlzdG9yeSIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImhhbmRsZUxvZ291dCIsInB1c2giLCJvcGVuIiwic2V0T3BlbiIsImN1cnJlbnRQYXRoIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIm1hcmdpblRvcCIsIlBhZ2luYXRpb24iLCJjdXJyZW50cGFnZSIsIml0ZW1zUGFyUGFnZSIsImxlbmd0aCIsIm9uUGFnZUNoYW5nZWQiLCJwYWdlc0NvdW50IiwiTWF0aCIsImNlaWwiLCJwYWdlcyIsImkiLCJtYXAiLCJwYWdlIiwiZ2V0RGF0YSIsIml0ZW1zIiwic3RhcnQiLCJzbGljZSIsIlBvcHVwTW9kYWwiLCJzaG93IiwiaGFuZGxlQ2xvc2UiLCJvbkNoYW5nZUV2ZW50IiwidmFsdWUiLCJ0aXRsZSIsImNvbnRlbnQiLCJidXR0b24iLCJidXR0b25Db2xvciIsIlByaXZhdGVSb3V0ZSIsInBhdGgiLCJjb21wb25lbnQiLCJGaWVsZCIsIm5hbWUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZXJyb3IiLCJzdGVwIiwiU2VsZWN0IiwiY2hpbGRyZW4iLCJUYWJsZVJvdyIsInByb3BzIiwicmFuZG9tIiwiVGFibGVMb2FkZXIiLCJBcnJheSIsImZpbGwiLCJlIiwib3BhY2l0eSIsIk51bWJlciIsInRvRml4ZWQiLCJBUElfVVJMIiwicHJvY2VzcyIsIkxPR0lOX0FQSSIsIlVTRVJTX0FQSSIsIlBST0RVQ1RTX0FQSSIsIlJlYWN0IiwicGFzc3dvcmQiLCJjcmVkZW50aWFscyIsInNldENyZWRlbnRpYWxzIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcGxhY2UiLCJtYXRjaCIsInBhcmFtcyIsImlkIiwicHJvZHVjdE5hbWUiLCJyZWZlcmVuY2UiLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5IiwicHJpY2UiLCJjYXRlZ29yeSIsImFjdGl2ZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiZWRpdGluZyIsInNldEVkaXRpbmciLCJmZXRjaFByb2R1Y3QiLCJQcm9kdWN0c0FQSSIsInJlc3BvbnNlIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwiZGF0YSIsInZpb2xhdGlvbnMiLCJhcGlFcnJvcnMiLCJmb3JFYWNoIiwicHJvcGVydHlQYXRoIiwibWVzc2FnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsaW5lIiwic2V0TGluZSIsInNldEN1cnJlbnRwYWdlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRTaG93IiwiaGFuZGxlU2hvdyIsImZldGNoUHJvZHVjdHMiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlRGVsZXRlIiwib3JpZ2luYWxQcm9kdWN0cyIsImZpbHRlciIsImhhbmRsZUFjdGl2ZUNoYW5nZSIsIm9yaWdpbmFsUHJvZHVjdCIsImluZGV4IiwiZmlsdGVyZWRQcm9kdWN0cyIsImMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicGFnaW5hdGVkUHJvZHVjdHMiLCJ3aWR0aCIsImhlaWdodCIsInBhc3N3b3JkQ29uZmlybSIsInZpb2xhdGlvbiIsInVzZXJzIiwic2V0VXNlcnMiLCJmZXRjaFVzZXJzIiwiZmlsdGVyZWRVc2VycyIsInBhZ2luYXRlZFVzZXJzIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImF4aW9zIiwiYXV0aGVudGljYXRlIiwidGhlbiIsInRva2VuIiwic2V0SXRlbSIsInNldEF4aW9zVG9rZW4iLCJwYXJzZUp3dCIsInNldHVwIiwiand0RGVjb2RlIiwiZXhwaXJhdGlvbiIsImV4cCIsImdldFRpbWUiLCJiYXNlNjRVcmwiLCJzcGxpdCIsImJhc2U2NCIsIkpTT04iLCJwYXJzZSIsImF0b2IiLCJmaW5kQWxsIiwiZmluZCIsInVwZGF0ZSIsImNyZWF0ZSIsImRlbGV0ZVByb2R1Y3QiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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T0FBVCxHQUFtQjtBQUNmLFNBQU9sQixnREFBQSxDQUNFL0UsOENBREYsRUFFRmlGLElBRkUsQ0FFRyxVQUFBL0MsUUFBUTtBQUFBLFdBQUlBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLGNBQWQsQ0FBSjtBQUFBLEdBRlgsQ0FBUDtBQUdIOztBQUVELFNBQVM2RCxJQUFULENBQWNuRixFQUFkLEVBQWtCO0FBQ2QsU0FBT2dFLGdEQUFBLENBQ0UvRSw4Q0FBUyxHQUFHLEdBQVosR0FBa0JlLEVBRHBCLEVBRUZrRSxJQUZFLENBRUcsVUFBQS9DLFFBQVE7QUFBQSxXQUFJQSxRQUFRLENBQUNHLElBQWI7QUFBQSxHQUZYLENBQVA7QUFHSDs7QUFFRCxTQUFTaUUsUUFBVCxDQUFrQnJNLElBQWxCLEVBQXdCO0FBQ3BCLFNBQU84SyxpREFBQSxDQUFXL0UsOENBQVgsRUFBc0IvRixJQUF0QixDQUFQO0FBQ0g7O0FBRUQsaUVBQWU7QUFDWGdNLFNBQU8sRUFBUEEsT0FEVztBQUVYQyxNQUFJLEVBQUpBLElBRlc7QUFHWEksVUFBUSxFQUFSQTtBQUhXLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkJBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1wiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db250cm9sbGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBIYXNoUm91dGVyLCBTd2l0Y2gsIFJvdXRlLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vcGFnZXMvbWFpbi9Ib21lcGFnZSc7XG5pbXBvcnQgVXNlcnNQYWdlIGZyb20gJy4vcGFnZXMvbWFpbi9Vc2Vyc1BhZ2UnO1xuaW1wb3J0IExvZ2luUGFnZSBmcm9tICcuL3BhZ2VzL21haW4vTG9naW5QYWdlJztcbmltcG9ydCBSZWdpc3RlclBhZ2UgZnJvbSAnLi9wYWdlcy9tYWluL1JlZ2lzdGVyUGFnZSc7XG5pbXBvcnQgQXV0aEFQSSBmcm9tICcuL3NlcnZpY2VzL2F1dGhBUEknO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4vY29udGV4dHMvQXV0aENvbnRleHQnO1xuaW1wb3J0IFByaXZhdGVSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvUHJpdmF0ZVJvdXRlJztcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgUHJvZHVjdHNQYWdlIGZyb20gJy4vcGFnZXMvbWFpbi9Qcm9kdWN0c1BhZ2UnO1xuaW1wb3J0IFByb2R1Y3RQYWdlIGZyb20gJy4vcGFnZXMvbWFpbi9Qcm9kdWN0UGFnZSc7XG5pbXBvcnQgVXNlcnNBUEkgZnJvbSAnLi9zZXJ2aWNlcy91c2Vyc0FQSSc7XG5cbkF1dGhBUEkuc2V0dXAoKTtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2lzQXV0aGVudGljYXRlZCwgc2V0SXNBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKEF1dGhBUEkuaXNBdXRoZW50aWNhdGVkKCkpO1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZmlyc3ROYW1lOiBcIlwiLFxuICAgICAgICBsYXN0TmFtZTogXCJcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IHVzZXJJZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcblxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jIHVzZXJJZCA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIHVzZXJuYW1lLCBlbWFpbCB9ID0gYXdhaXQgVXNlcnNBUEkuZmluZCh1c2VySWQpO1xuICAgICAgICAgICAgc2V0VXNlcih7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIHVzZXJuYW1lLCBlbWFpbCB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIGZldGNoVXNlcih1c2VySWQpO1xuICAgICAgICB9XG4gICAgfSwgW3VzZXJJZF0pXG5cbiAgICBjb25zdCBOYXZiYXJXaXRoUm91dGVyID0gd2l0aFJvdXRlcihOYXZiYXIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzQXV0aGVudGljYXRlZCwgc2V0SXNBdXRoZW50aWNhdGVkIH19PlxuICAgICAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPE5hdmJhcldpdGhSb3V0ZXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzLzppZFwiIGNvbXBvbmVudD17UHJvZHVjdFBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVJvdXRlIHBhdGg9XCIvcHJvZHVjdHNcIiBjb21wb25lbnQ9e1Byb2R1Y3RzUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpblBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaXN0ZXJQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBwYXRoPVwiL3VzZXJzXCIgY29tcG9uZW50PXtVc2Vyc1BhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249e3RvYXN0LlBPU0lUSU9OLkJPVFRPTV9SSUdIVH0gLz5cbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW1lbnQpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgQXV0aEFQSSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoQVBJJztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IEZhVXNlcnMsIEZhQ2hhcnRMaW5lLCBGYUZhY2Vib29rTWVzc2VuZ2VyLCBGYUJlbGwsIEZhVXNlckNpcmNsZSwgRmFDb2csIEZhRG9vck9wZW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IEdvUGFja2FnZSB9IGZyb20gJ3JlYWN0LWljb25zL2dvJztcclxuaW1wb3J0IHsgUmlTaG9wcGluZ0JhZzNMaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xyXG5pbXBvcnQgeyBCc0ZpbGxDYXJldERvd25GaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9uYXZiYXIuY3NzJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGhpc3RvcnksIHVzZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIHNldElzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgQXV0aEFQSS5sb2dvdXQoKTtcclxuICAgICAgICBzZXRJc0F1dGhlbnRpY2F0ZWQoZmFsc2UpO1xyXG4gICAgICAgIHRvYXN0LmluZm8oXCJWb3VzIMOqdGVzIETDqWNvbm5lY3TDqSAhIPCfmIpcIik7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IGhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIHRvPVwiL1wiPlRBVVJVUzwvTmF2TGluaz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyQ29sb3IwMVwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJDb2xvcjAxXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJDb2xvcjAxXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rIGljb24tYnV0dG9uXCIgdG89XCIvcHJvZHVjdHNcIj48UmlTaG9wcGluZ0JhZzNMaW5lIC8+PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rIGljb24tYnV0dG9uXCIgdG89XCIjXCI+PEdvUGFja2FnZSAvPjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGluayBpY29uLWJ1dHRvblwiIHRvPVwiI1wiPjxGYUNoYXJ0TGluZSAvPjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGluayBpY29uLWJ1dHRvblwiIHRvPVwiL3VzZXJzXCI+PEZhVXNlcnMgLz48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7KCFpc0F1dGhlbnRpY2F0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9yZWdpc3RlclwiPkluc3JpcHRpb248L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5Db25uZXhpb248L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApKSB8fCAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJpY29uLWJ1dHRvbi1jaXJjbGVcIiB0bz1cIiNcIj48RmFGYWNlYm9va01lc3NlbmdlciAvPjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJpY29uLWJ1dHRvbi1jaXJjbGVcIiB0bz1cIiNcIj48RmFCZWxsIC8+PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb24tYnV0dG9uLWNpcmNsZSBwb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJzRmlsbENhcmV0RG93bkZpbGwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibWVudS1pdGVtIG1lbnUtcHJvZmlsXCIgdG89XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYnV0dG9uLWNpcmNsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3JlcXVpcmUoJy4vYXZhdGFycy9hdmF0YXIucG5nJyl9KWAsIGJhY2tncm91bmRTaXplOiBcIjU1cHggNTVweFwiLCBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5maXJzdE5hbWUgKyBcIiBcIiArIHVzZXIubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgdG89XCIjXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJ1dHRvbi1jaXJjbGVcIj48RmFDb2cgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcmFtw6h0cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJ1dHRvbi1jaXJjbGVcIj48RmFEb29yT3BlbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRMOpY29ubmV4aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+RMOpY29ubmV4aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2ID5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9ICh7IGN1cnJlbnRwYWdlLCBpdGVtc1BhclBhZ2UsIGxlbmd0aCwgb25QYWdlQ2hhbmdlZCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgcGFnZXNDb3VudCA9IE1hdGguY2VpbChsZW5ndGggLyBpdGVtc1BhclBhZ2UpO1xyXG4gICAgY29uc3QgcGFnZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwYWdlc0NvdW50OyBpKyspIHtcclxuICAgICAgICBwYWdlcy5wdXNoKGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJwYWdlLWl0ZW1cIiArIChjdXJyZW50cGFnZSA9PT0gMSAmJiBcIiBkaXNhYmxlZFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2VkKGN1cnJlbnRwYWdlIC0gMSl9PiZsYXF1bzs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlfSBjbGFzc05hbWU9e1wicGFnZS1pdGVtXCIgKyAoY3VycmVudHBhZ2UgPT09IHBhZ2UgJiYgXCIgYWN0aXZlXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2VkKHBhZ2UpfT57cGFnZX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wicGFnZS1pdGVtXCIgKyAoY3VycmVudHBhZ2UgPT09IHBhZ2VzQ291bnQgJiYgXCIgZGlzYWJsZWRcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlZChjdXJyZW50cGFnZSArIDEpfT4mcmFxdW87PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuUGFnaW5hdGlvbi5nZXREYXRhID0gKGl0ZW1zLCBjdXJyZW50cGFnZSwgaXRlbXNQYXJQYWdlKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydCA9IGN1cnJlbnRwYWdlICogaXRlbXNQYXJQYWdlIC0gaXRlbXNQYXJQYWdlO1xyXG4gICAgcmV0dXJuIGl0ZW1zLnNsaWNlKHN0YXJ0LCBzdGFydCArIGl0ZW1zUGFyUGFnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmNvbnN0IFBvcHVwTW9kYWwgPSAoeyBzaG93LCBoYW5kbGVDbG9zZSwgb25DaGFuZ2VFdmVudCwgdmFsdWUsIHRpdGxlLCBjb250ZW50LCBidXR0b24sIGJ1dHRvbkNvbG9yIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPnt0aXRsZX08L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT57Y29udGVudH08L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmVybWVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtidXR0b25Db2xvcn0gb25DbGljaz17KCkgPT4gb25DaGFuZ2VFdmVudCh2YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cE1vZGFsOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuXHJcbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IHBhdGgsIGNvbXBvbmVudCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICByZXR1cm4gaXNBdXRoZW50aWNhdGVkID8gPFJvdXRlIHBhdGg9e3BhdGh9IGNvbXBvbmVudD17Y29tcG9uZW50fSAvPiA6IDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUm91dGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgbmFtZSwgbGFiZWwsIHZhbHVlLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgPSBcIlwiLCB0eXBlID0gXCJ0ZXh0XCIsIGVycm9yID0gXCJcIiwgc3RlcCA9IFwiXCIgfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSBzdGVwPXtzdGVwfSB2YWx1ZT17dmFsdWV9IGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2xcIiArIChlcnJvciAmJiBcIiBpcy1pbnZhbGlkXCIpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCBsYWJlbH0gaWQ9e25hbWV9IG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3J9PC9wPn1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTZWxlY3QgPSAoeyBuYW1lLCBsYWJlbCwgdmFsdWUsIGVycm9yLCBvbkNoYW5nZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT17bmFtZX0gdmFsdWU9e3ZhbHVlfSBpZD17bmFtZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgXCIgKyAoZXJyb3IgJiYgXCIgaXMtaW52YWxpZFwiKX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9yfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250ZW50TG9hZGVyIGZyb20gJ3JlYWN0LWNvbnRlbnQtbG9hZGVyJ1xyXG5cclxuY29uc3QgVGFibGVSb3cgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogKDEgLSAwLjcpICsgMC43XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZW50TG9hZGVyIHZpZXdCb3g9XCIwIDAgMTA2MCA0MFwiIGhlaWdodD17NDB9IHdpZHRoPXsxMDYwfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIxNVwiIHJ4PVwiNFwiIHJ5PVwiNFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjYuNFwiIC8+XHJcbiAgICAgICAgICAgIDxyZWN0IHg9XCIzNFwiIHk9XCIxM1wiIHJ4PVwiNlwiIHJ5PVwiNlwiIHdpZHRoPXsyMDAgKiByYW5kb219IGhlaWdodD1cIjEyXCIgLz5cclxuICAgICAgICAgICAgPHJlY3QgeD1cIjYzM1wiIHk9XCIxM1wiIHJ4PVwiNlwiIHJ5PVwiNlwiIHdpZHRoPXsyMyAqIHJhbmRvbX0gaGVpZ2h0PVwiMTJcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiNjUzXCIgeT1cIjEzXCIgcng9XCI2XCIgcnk9XCI2XCIgd2lkdGg9ezc4ICogcmFuZG9tfSBoZWlnaHQ9XCIxMlwiIC8+XHJcbiAgICAgICAgICAgIDxyZWN0IHg9XCI3NTVcIiB5PVwiMTNcIiByeD1cIjZcIiByeT1cIjZcIiB3aWR0aD17MTE3ICogcmFuZG9tfSBoZWlnaHQ9XCIxMlwiIC8+XHJcbiAgICAgICAgICAgIDxyZWN0IHg9XCI5MzhcIiB5PVwiMTNcIiByeD1cIjZcIiByeT1cIjZcIiB3aWR0aD17ODMgKiByYW5kb219IGhlaWdodD1cIjEyXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjM5XCIgcng9XCI2XCIgcnk9XCI2XCIgd2lkdGg9XCIxMDYwXCIgaGVpZ2h0PVwiLjNcIiAvPlxyXG4gICAgICAgIDwvQ29udGVudExvYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgVGFibGVMb2FkZXIgPSBwcm9wcyA9PiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge0FycmF5KDEwKVxyXG4gICAgICAgICAgICAuZmlsbCgnJylcclxuICAgICAgICAgICAgLm1hcCgoZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IE51bWJlcigyIC8gaSkudG9GaXhlZCgxKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVMb2FkZXIiLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU5fQVBJID0gQVBJX1VSTCArICdsb2dpbl9jaGVjayc7XHJcbmV4cG9ydCBjb25zdCBVU0VSU19BUEkgPSBBUElfVVJMICsgJ3VzZXJzJztcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RTX0FQSSA9IEFQSV9VUkwgKyAncHJvZHVjdHMnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICBzZXRJc0F1dGhlbnRpY2F0ZWQ6ICh2YWx1ZSkgPT4geyB9XHJcbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTNcIj5IZWxsbywgd29ybGQhPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlRoaXMgaXMgYSBzaW1wbGUgaGVybyB1bml0LCBhIHNpbXBsZSBqdW1ib3Ryb24tc3R5bGUgY29tcG9uZW50IGZvciBjYWxsaW5nIGV4dHJhIGF0dGVudGlvbiB0byBmZWF0dXJlZCBjb250ZW50IG9yIGluZm9ybWF0aW9uLjwvcD5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTRcIiAvPlxyXG4gICAgICAgICAgICA8cD5JdCB1c2VzIHV0aWxpdHkgY2xhc3NOYW1lZXMgZm9yIHR5cG9ncmFwaHkgYW5kIHNwYWNpbmcgdG8gc3BhY2UgY29udGVudCBvdXQgd2l0aGluIHRoZSBsYXJnZXIgY29udGFpbmVyLjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiPkxlYXJuIG1vcmU8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dGhBUEkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aEFQSSc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBGaWVsZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0ZpZWxkJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoeyBoaXN0b3J5IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHNldElzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgW2NyZWRlbnRpYWxzLCBzZXRDcmVkZW50aWFsc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gY3VycmVudFRhcmdldDtcclxuICAgICAgICBzZXRDcmVkZW50aWFscyh7IC4uLmNyZWRlbnRpYWxzLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBBdXRoQVBJLmF1dGhlbnRpY2F0ZShjcmVkZW50aWFscyk7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgICAgICAgICBzZXRJc0F1dGhlbnRpY2F0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJWb3VzIMOqdGVzIENvbm5lY3TDqSAhIPCfmIFcIik7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShcIi91c2Vyc1wiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiQXVjdW4gQ29tcHRlIG5lIHBvc3PDqGRlIGNlIExvZ2luLCBvdSBiaWVuIGxlcyBpbmZvcm1hdGlvbnMgc2Fpc2llcyBuZSBzb250IHBhcyB2YWxpZGUhXCIpO1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIlVuZSBFcnJldXIgZXN0IFN1cnZlbnVlICFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPkNvbm5leGlvbiDDoCBMJ0FwcGxpY2F0aW9uPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTG9naW5cIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17Y3JlZGVudGlhbHMudXNlcm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBMb2dpblwiIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIk1vdCBkZSBQYXNzZVwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtjcmVkZW50aWFscy5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIE1vdCBkZSBQYXNzZVwiIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPkNvbm5leGlvbjwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvRmllbGQnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvU2VsZWN0JztcclxuaW1wb3J0IFByb2R1Y3RzQVBJIGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzQVBJJztcclxuXHJcbmNvbnN0IFByb2R1Y3RQYWdlID0gKHsgbWF0Y2gsIGhpc3RvcnkgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaWQgPSBcIm5ld1wiIH0gPSBtYXRjaC5wYXJhbXM7XHJcblxyXG4gICAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHByb2R1Y3ROYW1lOiBcIlwiLFxyXG4gICAgICAgIHJlZmVyZW5jZTogXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICBxdWFudGl0eTogMCxcclxuICAgICAgICBwcmljZTogMCxcclxuICAgICAgICBjYXRlZ29yeTogMCxcclxuICAgICAgICBhY3RpdmU6IDEsXHJcbiAgICAgICAgdXNlcjogMSxcclxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwcm9kdWN0TmFtZTogXCJcIixcclxuICAgICAgICByZWZlcmVuY2U6IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgcXVhbnRpdHk6IFwiXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBcIlwiLFxyXG4gICAgICAgIGFjdGl2ZTogXCJcIixcclxuICAgICAgICB1c2VyOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbZWRpdGluZywgc2V0RWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0ID0gYXN5bmMgaWQgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcHJvZHVjdE5hbWUsIHJlZmVyZW5jZSwgZGVzY3JpcHRpb24sIHF1YW50aXR5LCBwcmljZSwgY2F0ZWdvcnksIGFjdGl2ZSB9ID0gYXdhaXQgUHJvZHVjdHNBUEkuZmluZChpZCk7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3QoeyBwcm9kdWN0TmFtZSwgcmVmZXJlbmNlLCBkZXNjcmlwdGlvbiwgcXVhbnRpdHksIHByaWNlLCBjYXRlZ29yeSwgYWN0aXZlIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKFwiL3Byb2R1Y3RzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgICBzZXRFZGl0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICBmZXRjaFByb2R1Y3QoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGN1cnJlbnRUYXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IChjdXJyZW50VGFyZ2V0Lm5hbWUgPT0gJ3F1YW50aXR5JyB8fCBjdXJyZW50VGFyZ2V0Lm5hbWUgPT0gJ2NhdGVnb3J5JykgPyBwYXJzZUludChjdXJyZW50VGFyZ2V0LnZhbHVlKSA6ICgoY3VycmVudFRhcmdldC5uYW1lID09ICdwcmljZScpID8gcGFyc2VGbG9hdChjdXJyZW50VGFyZ2V0LnZhbHVlKSA6IGN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldFByb2R1Y3QoeyAuLi5wcm9kdWN0LCBbbmFtZV06IHZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGVkaXRpbmcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9kdWN0c0FQSS51cGRhdGUoaWQsIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFByb2R1Y3RzQVBJLmNyZWF0ZShwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShcIi9wcm9kdWN0c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRFcnJvcnMoe30pO1xyXG4gICAgICAgIH0gY2F0Y2ggKHsgcmVzcG9uc2UgfSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHZpb2xhdGlvbnMgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKHZpb2xhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwaUVycm9ycyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmlvbGF0aW9ucy5mb3JFYWNoKCh7IHByb3BlcnR5UGF0aCwgbWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpRXJyb3JzW3Byb3BlcnR5UGF0aF0gPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoYXBpRXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgeyFlZGl0aW5nICYmIDxoMT5DcsOpYXRpb24gZCd1biBQcm9kdWl0PC9oMT4gfHwgPGgxPk1vZGlmaWNhdGlvbiBkJ3VuIFByb2R1aXQ8L2gxPn1cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicHJvZHVjdE5hbWVcIiBsYWJlbD1cIk5vbSBkZSBQcm9kdWl0XCIgcGxhY2Vob2xkZXI9XCJOb20gZGUgUHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdC5wcm9kdWN0TmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gZXJyb3I9e2Vycm9ycy5wcm9kdWN0TmFtZX0gLz5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJyZWZlcmVuY2VcIiBsYWJlbD1cIlLDqWbDqXJlbmNlXCIgcGxhY2Vob2xkZXI9XCJSw6lmw6lyZW5jZSBkdSBQcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0LnJlZmVyZW5jZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gZXJyb3I9e2Vycm9ycy5yZWZlcmVuY2V9IC8+XHJcblxyXG4gICAgICAgICAgICA8U2VsZWN0IG5hbWU9XCJjYXRlZ29yeVwiIGxhYmVsPVwiQ2F0w6lnb3JpZVwiIHZhbHVlPXtwcm9kdWN0LmNhdGVnb3J5fSBlcnJvcj17ZXJyb3JzLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkluZm9ybWF0aXF1ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5NYWlzb248L29wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3Byb2R1Y3QuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBcIiArIChlcnJvcnMuZGVzY3JpcHRpb24gJiYgXCIgaXMtaW52YWxpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGR1IFByb2R1aXRcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicXVhbnRpdHlcIiB0eXBlPVwibnVtYmVyXCIgbGFiZWw9XCJRdWFudGl0w6lcIiBwbGFjZWhvbGRlcj1cIlF1YW50aXTDqSBkdSBQcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0LnF1YW50aXR5fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBlcnJvcj17ZXJyb3JzLnF1YW50aXR5fSAvPlxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT1cInByaWNlXCIgc3RlcD1cIjAuMDFcIiB0eXBlPVwibnVtYmVyXCIgbGFiZWw9XCJQcml4XCIgcGxhY2Vob2xkZXI9XCJQcml4IGR1IFByb2R1aXRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3QucHJpY2UudG9Mb2NhbGVTdHJpbmcoKX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gZXJyb3I9e2Vycm9ycy5wcmljZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5FbnJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdWN0c1wiIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiPlJldG91ciDDoCBsYSBMaXN0ZTwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC8+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuaW1wb3J0IFByb2R1Y3RzQVBJIGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzQVBJJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBUYWJsZUxvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvYWRlcnMvVGFibGVMb2FkZXInO1xyXG5pbXBvcnQgeyBBaUZpbGxDaGVja0NpcmNsZSwgQWlGaWxsQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCBQb3B1cE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9wdXBNb2RhbCc7XHJcbmltcG9ydCBGaWVsZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0ZpZWxkJztcclxuXHJcbmNvbnN0IFByb2R1Y3RzUGFnZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xpbmUsIHNldExpbmVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgICBxdWFudGl0eTogMFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbY3VycmVudHBhZ2UsIHNldEN1cnJlbnRwYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvZHVjdHNBUEkuZmluZEFsbCgpXHJcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJldXIgbG9ycyBkdSBDaGFyZ2VtZW50IGRlcyBQcm9kdWl0cyAhXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoUHJvZHVjdHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHNldEN1cnJlbnRwYWdlKHBhZ2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoeyBjdXJyZW50VGFyZ2V0IH0pID0+IHtcclxuICAgICAgICBzZXRTZWFyY2goY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0Q3VycmVudHBhZ2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUHJvZHVjdHMgPSBbLi4ucHJvZHVjdHNdO1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuaWQgIT09IGlkKSk7XHJcbiAgICAgICAgUHJvZHVjdHNBUEkuZGVsZXRlUHJvZHVjdChpZCkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKG9yaWdpbmFsUHJvZHVjdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFjdGl2ZUNoYW5nZSA9IGFzeW5jIChlLCBuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUHJvZHVjdHMgPSBbLi4ucHJvZHVjdHNdO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUHJvZHVjdCA9IG9yaWdpbmFsUHJvZHVjdHNbZV07XHJcbiAgICAgICAgb3JpZ2luYWxQcm9kdWN0LmFjdGl2ZSA9IHZhbHVlID09IDEgPyAwIDogMTtcclxuICAgICAgICBjb25zdCBhY3RpdmUgPSB2YWx1ZSA9PSAxID8gMCA6IDE7XHJcbiAgICAgICAgc2V0TGluZSh7IC4uLm9yaWdpbmFsUHJvZHVjdCwgW25hbWVdOiBhY3RpdmUgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb2R1Y3RzQVBJLnVwZGF0ZShvcmlnaW5hbFByb2R1Y3RzW2VdLmlkLCBvcmlnaW5hbFByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBjdXJyZW50VGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50VGFyZ2V0LmlkLnJlcGxhY2UobmFtZSArIFwiX1wiLCAnJyk7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQcm9kdWN0cyA9IFsuLi5wcm9kdWN0c107XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQcm9kdWN0ID0gb3JpZ2luYWxQcm9kdWN0c1tpbmRleF07XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChjdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBvcmlnaW5hbFByb2R1Y3QucXVhbnRpdHkgPSB2YWx1ZTtcclxuICAgICAgICBzZXRMaW5lKHsgLi4ub3JpZ2luYWxQcm9kdWN0LCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gICAgICAgIGF3YWl0IFByb2R1Y3RzQVBJLnVwZGF0ZShvcmlnaW5hbFByb2R1Y3QuaWQsIG9yaWdpbmFsUHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXRlbXNQYXJQYWdlID0gNDtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKGMgPT5cclxuICAgICAgICBjLnByb2R1Y3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgYy5yZWZlcmVuY2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBwYWdpbmF0ZWRQcm9kdWN0cyA9IFBhZ2luYXRpb24uZ2V0RGF0YShmaWx0ZXJlZFByb2R1Y3RzLCBjdXJyZW50cGFnZSwgaXRlbXNQYXJQYWdlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+TGlzdGUgZGVzIFByb2R1aXRzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RzL25ld1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkNyw6llciB1biBQcm9kdWl0PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByb2R1aXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UsOpZsOpcmVuY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2F0w6lnb3JpZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlF1YW50aXTDqTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlByaXg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BY3RpdmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cGFnaW5hdGVkUHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cHJvZHVjdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wdXBNb2RhbCBzaG93PXtzaG93fSBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2V9IG9uQ2hhbmdlRXZlbnQ9e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN1cHByaW1lciBDZSBQcm9kdWl0ID9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJWb3VzIMOqdGVzIHN1ciBsZSBwb2ludCBkZSBzdXBwcmltZXIgY2UgUHJvZHVpdCwgw6p0ZXMtdm91cyBzw7tyID9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbj1cIlN1cHByaW1lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3I9XCJkYW5nZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9wcm9kdWN0cy9cIiArIHByb2R1Y3QuaWR9Pntwcm9kdWN0LnByb2R1Y3ROYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3Byb2R1Y3QucmVmZXJlbmNlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3Byb2R1Y3QucXVhbnRpdHl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGlkPXtcInF1YW50aXR5X1wiICsgaW5kZXh9IG5hbWU9XCJxdWFudGl0eVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3Byb2R1Y3QucHJpY2UudG9Mb2NhbGVTdHJpbmcoKX0gREg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuYWN0aXZlID09IDEgJiYgPEFpRmlsbENoZWNrQ2lyY2xlIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjdGl2ZUNoYW5nZShpbmRleCwgXCJhY3RpdmVcIiwgMSl9IHN0eWxlPXt7IGZpbGw6IFwiIzE1OUY1Q1wiLCB3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCIgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuYWN0aXZlICE9IDEgJiYgPEFpRmlsbENsb3NlQ2lyY2xlIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjdGl2ZUNoYW5nZShpbmRleCwgXCJhY3RpdmVcIiwgMCl9IHN0eWxlPXt7IGZpbGw6IFwiI0RENTE0NVwiLCB3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCIgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL3Byb2R1Y3RzL1wiICsgcHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiPkVkaXRlcjwvTGluaz4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShwcm9kdWN0LmlkKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiPlN1cHByaW1lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT59XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxUYWJsZUxvYWRlciAvPn1cclxuXHJcbiAgICAgICAgICAgIHtpdGVtc1BhclBhZ2UgPCBmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gY3VycmVudHBhZ2U9e2N1cnJlbnRwYWdlfSBpdGVtc1BhclBhZ2U9e2l0ZW1zUGFyUGFnZX0gbGVuZ3RoPXtmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aH0gb25QYWdlQ2hhbmdlZD17aGFuZGxlUGFnZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvRmllbGQnO1xyXG5pbXBvcnQgVXNlcnNBUEkgZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlcnNBUEknO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJQYWdlID0gKHsgaGlzdG9yeSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBwYXNzd29yZENvbmZpcm06IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkQ29uZmlybTogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gY3VycmVudFRhcmdldDtcclxuICAgICAgICBzZXRVc2VyKHsgLi4udXNlciwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYXBpRXJyb3JzID0ge307XHJcbiAgICAgICAgaWYgKHVzZXIucGFzc3dvcmQgIT09IHVzZXIucGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICAgICAgICAgIGFwaUVycm9ycy5wYXNzd29yZENvbmZpcm0gPSBcIkNvbmZpcm1hdGlvbiBkZSBNb3QgZGUgUGFzcyBuJ2VzdCBwYXMgY29uZm9ybWUgw6AgbCdvcmlnaW5hbFwiO1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoYXBpRXJyb3JzKTtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJVbmUgRXJyZXVyIGVzdCBTdXJ2ZW51ZSAhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBVc2Vyc0FQSS5yZWdpc3Rlcih1c2VyKTtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKHt9KTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlZvdXMgw6p0ZXMgSW5zY3JpdCAhIPCfmIFcIik7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdmlvbGF0aW9ucyB9ID0gZXJyb3IucmVzcG9uc2UuZGF0YSA/IGVycm9yLnJlc3BvbnNlLmRhdGEgOiAnJztcclxuICAgICAgICAgICAgaWYgKHZpb2xhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHZpb2xhdGlvbnMuZm9yRWFjaCh2aW9sYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaUVycm9yc1t2aW9sYXRpb24ucHJvcGVydHlQYXRoXSA9IHZpb2xhdGlvbi5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoYXBpRXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIlVuZSBFcnJldXIgZXN0IFN1cnZlbnVlICFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPkluc2NyaXB0aW9uPC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJMb2dpblwiIG5hbWU9XCJ1c2VybmFtZVwiIHZhbHVlPXt1c2VyLnVzZXJuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVm90cmUgTG9naW5cIiBlcnJvcj17ZXJyb3JzLnVzZXJuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiUHLDqW5vbVwiIG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17dXNlci5maXJzdE5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBQcsOpbm9tXCIgZXJyb3I9e2Vycm9ycy5maXJzdE5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJOb21cIiBuYW1lPVwibGFzdE5hbWVcIiB2YWx1ZT17dXNlci5sYXN0TmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIE5vbVwiIGVycm9yPXtlcnJvcnMubGFzdE5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJFLU1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17dXNlci5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIEUtTWFpbFwiIGVycm9yPXtlcnJvcnMuZW1haWx9IC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJNb3QgZGUgUGFzc2VcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17dXNlci5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIE1vdCBkZSBQYXNzZVwiIGVycm9yPXtlcnJvcnMucGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJDb25maXJtYXRpb24gZGUgTW90IGRlIFBhc3NlXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkQ29uZmlybVwiIHZhbHVlPXt1c2VyLnBhc3N3b3JkQ29uZmlybX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnBhc3N3b3JkQ29uZmlybX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPkluc2NyaXB0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5KJ2FpIGTDqWphIHVuIENvbXB0ZTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclBhZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgVGFibGVMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sb2FkZXJzL1RhYmxlTG9hZGVyJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuaW1wb3J0IFVzZXJzQVBJIGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXJzQVBJJztcclxuXHJcbmNvbnN0IFVzZXJzUGFnZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRwYWdlLCBzZXRDdXJyZW50cGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcnMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgVXNlcnNBUEkuZmluZEFsbCgpXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VycyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJldXIgbG9ycyBkdSBDaGFyZ2VtZW50IGRlcyBVdGlsaXNhdGV1cnMgIVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaFVzZXJzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlKSA9PiBzZXRDdXJyZW50cGFnZShwYWdlKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoKGN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldEN1cnJlbnRwYWdlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGl0ZW1zUGFyUGFnZSA9IDQ7XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRVc2VycyA9IHVzZXJzLmZpbHRlcihjID0+XHJcbiAgICAgICAgYy5maXJzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICBjLmxhc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgYy5lbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgIGMudXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBwYWdpbmF0ZWRVc2VycyA9IFBhZ2luYXRpb24uZ2V0RGF0YShmaWx0ZXJlZFVzZXJzLCBjdXJyZW50cGFnZSwgaXRlbXNQYXJQYWdlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5MaXN0ZSBkZXMgVXRpbGlzYXRldXJzPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH0gdmFsdWU9e3NlYXJjaH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyIC4uLlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+I0lEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxvZ2luPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkUtbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICB7IWxvYWRpbmcgJiYgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYWdpbmF0ZWRVc2Vycy5tYXAodXNlciA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3VzZXIudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5maXJzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5sYXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+fVxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8VGFibGVMb2FkZXIgLz59XHJcblxyXG4gICAgICAgICAgICB7aXRlbXNQYXJQYWdlIDwgZmlsdGVyZWRVc2Vycy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGN1cnJlbnRwYWdlPXtjdXJyZW50cGFnZX0gaXRlbXNQYXJQYWdlPXtpdGVtc1BhclBhZ2V9IGxlbmd0aD17ZmlsdGVyZWRVc2Vycy5sZW5ndGh9IG9uUGFnZUNoYW5nZWQ9e2hhbmRsZVBhZ2VDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzUGFnZTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgeyBMT0dJTl9BUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFRva2VuXCIpO1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpO1xyXG4gICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdXRoZW50aWNhdGUoY3JlZGVudGlhbHMpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgIC5wb3N0KExPR0lOX0FQSSwgY3JlZGVudGlhbHMpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YS50b2tlbilcclxuICAgICAgICAudGhlbih0b2tlbiA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIHNldEF4aW9zVG9rZW4odG9rZW4pO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgcGFyc2VKd3QodG9rZW4pLnVzZXJJZCk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEF4aW9zVG9rZW4odG9rZW4pIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyB0b2tlbjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGNvbnN0IHsgZXhwOiBleHBpcmF0aW9uIH0gPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gICAgICAgIGlmIChleHBpcmF0aW9uICogMTAwMCA+IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgIHNldEF4aW9zVG9rZW4odG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBjb25zdCB7IGV4cDogZXhwaXJhdGlvbiB9ID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICBpZiAoZXhwaXJhdGlvbiAqIDEwMDAgPiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VKd3QodG9rZW4pIHtcclxuICAgIGlmICghdG9rZW4pIHsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xyXG4gICAgY29uc3QgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoJy0nLCAnKycpLnJlcGxhY2UoJ18nLCAnLycpO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGF1dGhlbnRpY2F0ZSxcclxuICAgIGxvZ291dCxcclxuICAgIHNldHVwLFxyXG4gICAgaXNBdXRoZW50aWNhdGVkXHJcbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgUFJPRFVDVFNfQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIGZpbmRBbGwoKSB7XHJcbiAgICByZXR1cm4gYXhpb3NcclxuICAgICAgICAuZ2V0KFBST0RVQ1RTX0FQSSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSlcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZChpZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgLmdldChQUk9EVUNUU19BUEkgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoaWQsIHByb2R1Y3QpIHtcclxuICAgIHJldHVybiBheGlvcy5wdXQoUFJPRFVDVFNfQVBJICsgXCIvXCIgKyBpZCwgcHJvZHVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShwcm9kdWN0KSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChQUk9EVUNUU19BUEksIHsgLi4ucHJvZHVjdCwgdXNlcjogYC9hcGkvdXNlcnMvJHtwcm9kdWN0LnVzZXJ9YCB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9kdWN0KGlkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKFBST0RVQ1RTX0FQSSArIFwiL1wiICsgaWQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmaW5kQWxsLFxyXG4gICAgZmluZCxcclxuICAgIHVwZGF0ZSxcclxuICAgIGNyZWF0ZSxcclxuICAgIGRlbGV0ZVByb2R1Y3RcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFVTRVJTX0FQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiBmaW5kQWxsKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgLmdldChVU0VSU19BUEkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmQoaWQpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgIC5nZXQoVVNFUlNfQVBJICsgXCIvXCIgKyBpZClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXIodXNlcikge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoVVNFUlNfQVBJLCB1c2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmluZEFsbCxcclxuICAgIGZpbmQsXHJcbiAgICByZWdpc3RlclxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==