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















console.log("Hello World !!!");
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

  var NavbarWithRouter = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.withRouter)(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__.default);
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
    fetchUser(userId);
  }, [userId]);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:8000/api/products/" + id).then(function (response) {
    return response.data;
  });
}

function update(id, product) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().put("http://localhost:8000/api/products/" + id, product);
}

function create(product) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://localhost:8000/api/products", _objectSpread(_objectSpread({}, product), {}, {
    user: "/api/users/".concat(product.user)
  }));
}

function deleteProduct(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().delete("http://localhost:8000/api/products/" + id);
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8000/api/users/" + id).then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1BvcHVwTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1ByaXZhdGVSb3V0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZm9ybXMvRmllbGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Zvcm1zL1NlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZGVycy9UYWJsZUxvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGV4dHMvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL21haW4vSG9tZXBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9tYWluL0xvZ2luUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL21haW4vUHJvZHVjdFBhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9tYWluL1Byb2R1Y3RzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL21haW4vUmVnaXN0ZXJQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvbWFpbi9Vc2Vyc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9hdXRoQVBJLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9wcm9kdWN0c0FQSS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZXMvdXNlcnNBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvbmF2YmFyLmNzcz80NGQ1Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJBdXRoQVBJIiwiQXBwIiwidXNlU3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJzZXRJc0F1dGhlbnRpY2F0ZWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJ1c2VyIiwic2V0VXNlciIsIk5hdmJhcldpdGhSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiTmF2YmFyIiwidXNlcklkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIlVzZXJzQVBJIiwidXNlRWZmZWN0IiwiUHJvZHVjdFBhZ2UiLCJQcm9kdWN0c1BhZ2UiLCJMb2dpblBhZ2UiLCJSZWdpc3RlclBhZ2UiLCJVc2Vyc1BhZ2UiLCJIb21lUGFnZSIsInRvYXN0IiwiQk9UVE9NX1JJR0hUIiwicm9vdEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJSZWFjdERPTSIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIiwiaGlzdG9yeSIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImhhbmRsZUxvZ291dCIsInB1c2giLCJvcGVuIiwic2V0T3BlbiIsImN1cnJlbnRQYXRoIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIm1hcmdpblRvcCIsIlBhZ2luYXRpb24iLCJjdXJyZW50cGFnZSIsIml0ZW1zUGFyUGFnZSIsImxlbmd0aCIsIm9uUGFnZUNoYW5nZWQiLCJwYWdlc0NvdW50IiwiTWF0aCIsImNlaWwiLCJwYWdlcyIsImkiLCJtYXAiLCJwYWdlIiwiZ2V0RGF0YSIsIml0ZW1zIiwic3RhcnQiLCJzbGljZSIsIlBvcHVwTW9kYWwiLCJzaG93IiwiaGFuZGxlQ2xvc2UiLCJvbkNoYW5nZUV2ZW50IiwidmFsdWUiLCJ0aXRsZSIsImNvbnRlbnQiLCJidXR0b24iLCJidXR0b25Db2xvciIsIlByaXZhdGVSb3V0ZSIsInBhdGgiLCJjb21wb25lbnQiLCJGaWVsZCIsIm5hbWUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZXJyb3IiLCJzdGVwIiwiU2VsZWN0IiwiY2hpbGRyZW4iLCJUYWJsZVJvdyIsInByb3BzIiwicmFuZG9tIiwiVGFibGVMb2FkZXIiLCJBcnJheSIsImZpbGwiLCJlIiwib3BhY2l0eSIsIk51bWJlciIsInRvRml4ZWQiLCJBUElfVVJMIiwicHJvY2VzcyIsIkxPR0lOX0FQSSIsIlVTRVJTX0FQSSIsIlBST0RVQ1RTX0FQSSIsIlJlYWN0IiwicGFzc3dvcmQiLCJjcmVkZW50aWFscyIsInNldENyZWRlbnRpYWxzIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcGxhY2UiLCJtYXRjaCIsInBhcmFtcyIsImlkIiwicHJvZHVjdE5hbWUiLCJyZWZlcmVuY2UiLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5IiwicHJpY2UiLCJjYXRlZ29yeSIsImFjdGl2ZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiZWRpdGluZyIsInNldEVkaXRpbmciLCJmZXRjaFByb2R1Y3QiLCJQcm9kdWN0c0FQSSIsInJlc3BvbnNlIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwiZGF0YSIsInZpb2xhdGlvbnMiLCJhcGlFcnJvcnMiLCJmb3JFYWNoIiwicHJvcGVydHlQYXRoIiwibWVzc2FnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsaW5lIiwic2V0TGluZSIsInNldEN1cnJlbnRwYWdlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRTaG93IiwiaGFuZGxlU2hvdyIsImZldGNoUHJvZHVjdHMiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlRGVsZXRlIiwib3JpZ2luYWxQcm9kdWN0cyIsImZpbHRlciIsImhhbmRsZUFjdGl2ZUNoYW5nZSIsIm9yaWdpbmFsUHJvZHVjdCIsImluZGV4IiwiZmlsdGVyZWRQcm9kdWN0cyIsImMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicGFnaW5hdGVkUHJvZHVjdHMiLCJ3aWR0aCIsImhlaWdodCIsInBhc3N3b3JkQ29uZmlybSIsInZpb2xhdGlvbiIsInVzZXJzIiwic2V0VXNlcnMiLCJmZXRjaFVzZXJzIiwiZmlsdGVyZWRVc2VycyIsInBhZ2luYXRlZFVzZXJzIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImF4aW9zIiwiYXV0aGVudGljYXRlIiwidGhlbiIsInRva2VuIiwic2V0SXRlbSIsInNldEF4aW9zVG9rZW4iLCJwYXJzZUp3dCIsInNldHVwIiwiand0RGVjb2RlIiwiZXhwaXJhdGlvbiIsImV4cCIsImdldFRpbWUiLCJiYXNlNjRVcmwiLCJzcGxpdCIsImJhc2U2NCIsIkpTT04iLCJwYXJzZSIsImF0b2IiLCJmaW5kQWxsIiwiZmluZCIsInVwZGF0ZSIsImNyZWF0ZSIsImRlbGV0ZVByb2R1Y3QiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUVGaUYsSUFGRSxDQUVHLFVBQUEvQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDRyxJQUFULENBQWMsY0FBZCxDQUFKO0FBQUEsR0FGWCxDQUFQO0FBR0g7O0FBRUQsU0FBUzZELElBQVQsQ0FBY25GLEVBQWQsRUFBa0I7QUFDZCxTQUFPZ0UsZ0RBQUEsQ0FDRSxxQ0FBcUNoRSxFQUR2QyxFQUVGa0UsSUFGRSxDQUVHLFVBQUEvQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDRyxJQUFiO0FBQUEsR0FGWCxDQUFQO0FBR0g7O0FBRUQsU0FBU2lFLFFBQVQsQ0FBa0JuTSxJQUFsQixFQUF3QjtBQUNwQixTQUFPNEssaURBQUEsQ0FBVy9FLDhDQUFYLEVBQXNCN0YsSUFBdEIsQ0FBUDtBQUNIOztBQUVELGlFQUFlO0FBQ1g4TCxTQUFPLEVBQVBBLE9BRFc7QUFFWEMsTUFBSSxFQUFKQSxJQUZXO0FBR1hJLFVBQVEsRUFBUkE7QUFIVyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ25CQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29udHJvbGxlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihfZGVmYXVsdCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9kZWZhdWx0KTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KENvbnRyb2xsZXIpO1xuXG5leHBvcnQgeyBfZGVmYXVsdCBhcyBkZWZhdWx0IH07IiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgSGFzaFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL21haW4vSG9tZXBhZ2UnO1xuaW1wb3J0IFVzZXJzUGFnZSBmcm9tICcuL3BhZ2VzL21haW4vVXNlcnNQYWdlJztcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSAnLi9wYWdlcy9tYWluL0xvZ2luUGFnZSc7XG5pbXBvcnQgUmVnaXN0ZXJQYWdlIGZyb20gJy4vcGFnZXMvbWFpbi9SZWdpc3RlclBhZ2UnO1xuaW1wb3J0IEF1dGhBUEkgZnJvbSAnLi9zZXJ2aWNlcy9hdXRoQVBJJztcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuL2NvbnRleHRzL0F1dGhDb250ZXh0JztcbmltcG9ydCBQcml2YXRlUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL1ByaXZhdGVSb3V0ZSc7XG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0IFByb2R1Y3RzUGFnZSBmcm9tICcuL3BhZ2VzL21haW4vUHJvZHVjdHNQYWdlJztcbmltcG9ydCBQcm9kdWN0UGFnZSBmcm9tICcuL3BhZ2VzL21haW4vUHJvZHVjdFBhZ2UnO1xuaW1wb3J0IFVzZXJzQVBJIGZyb20gJy4vc2VydmljZXMvdXNlcnNBUEknO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkICEhIVwiKTtcblxuQXV0aEFQSS5zZXR1cCgpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaXNBdXRoZW50aWNhdGVkLCBzZXRJc0F1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoQXV0aEFQSS5pc0F1dGhlbnRpY2F0ZWQoKSk7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xuICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgICAgIGxhc3ROYW1lOiBcIlwiLFxuICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IE5hdmJhcldpdGhSb3V0ZXIgPSB3aXRoUm91dGVyKE5hdmJhcik7XG5cbiAgICBjb25zdCB1c2VySWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG5cbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyB1c2VySWQgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VybmFtZSwgZW1haWwgfSA9IGF3YWl0IFVzZXJzQVBJLmZpbmQodXNlcklkKTtcbiAgICAgICAgICAgIHNldFVzZXIoeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VybmFtZSwgZW1haWwgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaFVzZXIodXNlcklkKTtcbiAgICB9LCBbdXNlcklkXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc0F1dGhlbnRpY2F0ZWQsIHNldElzQXV0aGVudGljYXRlZCB9fT5cbiAgICAgICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXJXaXRoUm91dGVyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcml2YXRlUm91dGUgcGF0aD1cIi9wcm9kdWN0cy86aWRcIiBjb21wb25lbnQ9e1Byb2R1Y3RQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgY29tcG9uZW50PXtQcm9kdWN0c1BhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW5QYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBjb21wb25lbnQ9e1JlZ2lzdGVyUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcml2YXRlUm91dGUgcGF0aD1cIi91c2Vyc1wiIGNvbXBvbmVudD17VXNlcnNQYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPXt0b2FzdC5QT1NJVElPTi5CT1RUT01fUklHSFR9IC8+XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEF1dGhBUEkgZnJvbSAnLi4vc2VydmljZXMvYXV0aEFQSSc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBGYVVzZXJzLCBGYUNoYXJ0TGluZSwgRmFGYWNlYm9va01lc3NlbmdlciwgRmFCZWxsLCBGYVVzZXJDaXJjbGUsIEZhQ29nLCBGYURvb3JPcGVuIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBHb1BhY2thZ2UgfSBmcm9tICdyZWFjdC1pY29ucy9nbyc7XHJcbmltcG9ydCB7IFJpU2hvcHBpbmdCYWczTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IHsgQnNGaWxsQ2FyZXREb3duRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvbmF2YmFyLmNzcyc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBoaXN0b3J5LCB1c2VyIH0pID0+IHtcclxuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBzZXRJc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIEF1dGhBUEkubG9nb3V0KCk7XHJcbiAgICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKGZhbHNlKTtcclxuICAgICAgICB0b2FzdC5pbmZvKFwiVm91cyDDqnRlcyBEw6ljb25uZWN0w6kgISDwn5iKXCIpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFBhdGggPSBoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFya1wiPlxyXG4gICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiB0bz1cIi9cIj5UQVVSVVM8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhckNvbG9yMDFcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyQ29sb3IwMVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyQ29sb3IwMVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0F1dGhlbnRpY2F0ZWQgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGluayBpY29uLWJ1dHRvblwiIHRvPVwiL3Byb2R1Y3RzXCI+PFJpU2hvcHBpbmdCYWczTGluZSAvPjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGluayBpY29uLWJ1dHRvblwiIHRvPVwiI1wiPjxHb1BhY2thZ2UgLz48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmsgaWNvbi1idXR0b25cIiB0bz1cIiNcIj48RmFDaGFydExpbmUgLz48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmsgaWNvbi1idXR0b25cIiB0bz1cIi91c2Vyc1wiPjxGYVVzZXJzIC8+PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyghaXNBdXRoZW50aWNhdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvcmVnaXN0ZXJcIj5JbnNyaXB0aW9uPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q29ubmV4aW9uPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSkgfHwgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwiaWNvbi1idXR0b24tY2lyY2xlXCIgdG89XCIjXCI+PEZhRmFjZWJvb2tNZXNzZW5nZXIgLz48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwiaWNvbi1idXR0b24tY2lyY2xlXCIgdG89XCIjXCI+PEZhQmVsbCAvPjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uLWJ1dHRvbi1jaXJjbGUgcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCc0ZpbGxDYXJldERvd25GaWxsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBtZW51LXByb2ZpbFwiIHRvPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJ1dHRvbi1jaXJjbGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtyZXF1aXJlKCcuL2F2YXRhcnMvYXZhdGFyLnBuZycpfSlgLCBiYWNrZ3JvdW5kU2l6ZTogXCI1NXB4IDU1cHhcIiwgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiIH19Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIuZmlyc3ROYW1lICsgXCIgXCIgKyB1c2VyLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIHRvPVwiI1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1idXR0b24tY2lyY2xlXCI+PEZhQ29nIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXJhbcOodHJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIjXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1idXR0b24tY2lyY2xlXCI+PEZhRG9vck9wZW4gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIETDqWNvbm5leGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkTDqWNvbm5leGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdiA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBjdXJyZW50cGFnZSwgaXRlbXNQYXJQYWdlLCBsZW5ndGgsIG9uUGFnZUNoYW5nZWQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHBhZ2VzQ291bnQgPSBNYXRoLmNlaWwobGVuZ3RoIC8gaXRlbXNQYXJQYWdlKTtcclxuICAgIGNvbnN0IHBhZ2VzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGFnZXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgcGFnZXMucHVzaChpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc21cIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wicGFnZS1pdGVtXCIgKyAoY3VycmVudHBhZ2UgPT09IDEgJiYgXCIgZGlzYWJsZWRcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlZChjdXJyZW50cGFnZSAtIDEpfT4mbGFxdW87PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAge3BhZ2VzLm1hcChwYWdlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFnZX0gY2xhc3NOYW1lPXtcInBhZ2UtaXRlbVwiICsgKGN1cnJlbnRwYWdlID09PSBwYWdlICYmIFwiIGFjdGl2ZVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlZChwYWdlKX0+e3BhZ2V9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcInBhZ2UtaXRlbVwiICsgKGN1cnJlbnRwYWdlID09PSBwYWdlc0NvdW50ICYmIFwiIGRpc2FibGVkXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZWQoY3VycmVudHBhZ2UgKyAxKX0+JnJhcXVvOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblBhZ2luYXRpb24uZ2V0RGF0YSA9IChpdGVtcywgY3VycmVudHBhZ2UsIGl0ZW1zUGFyUGFnZSkgPT4ge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBjdXJyZW50cGFnZSAqIGl0ZW1zUGFyUGFnZSAtIGl0ZW1zUGFyUGFnZTtcclxuICAgIHJldHVybiBpdGVtcy5zbGljZShzdGFydCwgc3RhcnQgKyBpdGVtc1BhclBhZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5jb25zdCBQb3B1cE1vZGFsID0gKHsgc2hvdywgaGFuZGxlQ2xvc2UsIG9uQ2hhbmdlRXZlbnQsIHZhbHVlLCB0aXRsZSwgY29udGVudCwgYnV0dG9uLCBidXR0b25Db2xvciB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT57dGl0bGV9PC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+e2NvbnRlbnR9PC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZlcm1lclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD17YnV0dG9uQ29sb3J9IG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlRXZlbnQodmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXBNb2RhbDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XHJcblxyXG5jb25zdCBQcml2YXRlUm91dGUgPSAoeyBwYXRoLCBjb21wb25lbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgcmV0dXJuIGlzQXV0aGVudGljYXRlZCA/IDxSb3V0ZSBwYXRoPXtwYXRofSBjb21wb25lbnQ9e2NvbXBvbmVudH0gLz4gOiA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZVJvdXRlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGaWVsZCA9ICh7IG5hbWUsIGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyID0gXCJcIiwgdHlwZSA9IFwidGV4dFwiLCBlcnJvciA9IFwiXCIsIHN0ZXAgPSBcIlwiIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT17dHlwZX0gc3RlcD17c3RlcH0gdmFsdWU9e3ZhbHVlfSBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCIgKyAoZXJyb3IgJiYgXCIgaXMtaW52YWxpZFwiKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgbGFiZWx9IGlkPXtuYW1lfSBuYW1lPXtuYW1lfSAvPlxyXG4gICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9yfTwvcD59XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2VsZWN0ID0gKHsgbmFtZSwgbGFiZWwsIHZhbHVlLCBlcnJvciwgb25DaGFuZ2UsIGNoaWxkcmVuIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9e25hbWV9IHZhbHVlPXt2YWx1ZX0gaWQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIFwiICsgKGVycm9yICYmIFwiIGlzLWludmFsaWRcIil9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGVudExvYWRlciBmcm9tICdyZWFjdC1jb250ZW50LWxvYWRlcidcclxuXHJcbmNvbnN0IFRhYmxlUm93ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqICgxIC0gMC43KSArIDAuN1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGVudExvYWRlciB2aWV3Qm94PVwiMCAwIDEwNjAgNDBcIiBoZWlnaHQ9ezQwfSB3aWR0aD17MTA2MH0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMTVcIiByeD1cIjRcIiByeT1cIjRcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCI2LjRcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiMzRcIiB5PVwiMTNcIiByeD1cIjZcIiByeT1cIjZcIiB3aWR0aD17MjAwICogcmFuZG9tfSBoZWlnaHQ9XCIxMlwiIC8+XHJcbiAgICAgICAgICAgIDxyZWN0IHg9XCI2MzNcIiB5PVwiMTNcIiByeD1cIjZcIiByeT1cIjZcIiB3aWR0aD17MjMgKiByYW5kb219IGhlaWdodD1cIjEyXCIgLz5cclxuICAgICAgICAgICAgPHJlY3QgeD1cIjY1M1wiIHk9XCIxM1wiIHJ4PVwiNlwiIHJ5PVwiNlwiIHdpZHRoPXs3OCAqIHJhbmRvbX0gaGVpZ2h0PVwiMTJcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiNzU1XCIgeT1cIjEzXCIgcng9XCI2XCIgcnk9XCI2XCIgd2lkdGg9ezExNyAqIHJhbmRvbX0gaGVpZ2h0PVwiMTJcIiAvPlxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiOTM4XCIgeT1cIjEzXCIgcng9XCI2XCIgcnk9XCI2XCIgd2lkdGg9ezgzICogcmFuZG9tfSBoZWlnaHQ9XCIxMlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIzOVwiIHJ4PVwiNlwiIHJ5PVwiNlwiIHdpZHRoPVwiMTA2MFwiIGhlaWdodD1cIi4zXCIgLz5cclxuICAgICAgICA8L0NvbnRlbnRMb2FkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFRhYmxlTG9hZGVyID0gcHJvcHMgPT4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtBcnJheSgxMClcclxuICAgICAgICAgICAgLmZpbGwoJycpXHJcbiAgICAgICAgICAgIC5tYXAoKGUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBOdW1iZXIoMiAvIGkpLnRvRml4ZWQoMSkgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlTG9hZGVyIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOX0FQSSA9IEFQSV9VUkwgKyAnbG9naW5fY2hlY2snO1xyXG5leHBvcnQgY29uc3QgVVNFUlNfQVBJID0gQVBJX1VSTCArICd1c2Vycyc7XHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUU19BUEkgPSBBUElfVVJMICsgJ3Byb2R1Y3RzJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgc2V0SXNBdXRoZW50aWNhdGVkOiAodmFsdWUpID0+IHsgfVxyXG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0zXCI+SGVsbG8sIHdvcmxkITwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5UaGlzIGlzIGEgc2ltcGxlIGhlcm8gdW5pdCwgYSBzaW1wbGUganVtYm90cm9uLXN0eWxlIGNvbXBvbmVudCBmb3IgY2FsbGluZyBleHRyYSBhdHRlbnRpb24gdG8gZmVhdHVyZWQgY29udGVudCBvciBpbmZvcm1hdGlvbi48L3A+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS00XCIgLz5cclxuICAgICAgICAgICAgPHA+SXQgdXNlcyB1dGlsaXR5IGNsYXNzTmFtZWVzIGZvciB0eXBvZ3JhcGh5IGFuZCBzcGFjaW5nIHRvIHNwYWNlIGNvbnRlbnQgb3V0IHdpdGhpbiB0aGUgbGFyZ2VyIGNvbnRhaW5lci48L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIj5MZWFybiBtb3JlPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRoQVBJIGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGhBUEknO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9GaWVsZCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuY29uc3QgTG9naW5QYWdlID0gKHsgaGlzdG9yeSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBzZXRJc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IFtjcmVkZW50aWFscywgc2V0Q3JlZGVudGlhbHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgc2V0Q3JlZGVudGlhbHMoeyAuLi5jcmVkZW50aWFscywgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgQXV0aEFQSS5hdXRoZW50aWNhdGUoY3JlZGVudGlhbHMpO1xyXG4gICAgICAgICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgICAgICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKHRydWUpO1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiVm91cyDDqnRlcyBDb25uZWN0w6kgISDwn5iBXCIpO1xyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UoXCIvdXNlcnNcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBzZXRFcnJvcihcIkF1Y3VuIENvbXB0ZSBuZSBwb3Nzw6hkZSBjZSBMb2dpbiwgb3UgYmllbiBsZXMgaW5mb3JtYXRpb25zIHNhaXNpZXMgbmUgc29udCBwYXMgdmFsaWRlIVwiKTtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJVbmUgRXJyZXVyIGVzdCBTdXJ2ZW51ZSAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5Db25uZXhpb24gw6AgTCdBcHBsaWNhdGlvbjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkxvZ2luXCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9e2NyZWRlbnRpYWxzLnVzZXJuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVm90cmUgTG9naW5cIiBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJNb3QgZGUgUGFzc2VcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17Y3JlZGVudGlhbHMucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBNb3QgZGUgUGFzc2VcIiBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5Db25uZXhpb248L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBGaWVsZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0ZpZWxkJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL1NlbGVjdCc7XHJcbmltcG9ydCBQcm9kdWN0c0FQSSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0c0FQSSc7XHJcblxyXG5jb25zdCBQcm9kdWN0UGFnZSA9ICh7IG1hdGNoLCBoaXN0b3J5IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGlkID0gXCJuZXdcIiB9ID0gbWF0Y2gucGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwcm9kdWN0TmFtZTogXCJcIixcclxuICAgICAgICByZWZlcmVuY2U6IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgY2F0ZWdvcnk6IDAsXHJcbiAgICAgICAgYWN0aXZlOiAxLFxyXG4gICAgICAgIHVzZXI6IDEsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgcmVmZXJlbmNlOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIHF1YW50aXR5OiBcIlwiLFxyXG4gICAgICAgIHByaWNlOiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogXCJcIixcclxuICAgICAgICBhY3RpdmU6IFwiXCIsXHJcbiAgICAgICAgdXNlcjogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2VkaXRpbmcsIHNldEVkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGZldGNoUHJvZHVjdCA9IGFzeW5jIGlkID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHByb2R1Y3ROYW1lLCByZWZlcmVuY2UsIGRlc2NyaXB0aW9uLCBxdWFudGl0eSwgcHJpY2UsIGNhdGVnb3J5LCBhY3RpdmUgfSA9IGF3YWl0IFByb2R1Y3RzQVBJLmZpbmQoaWQpO1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0KHsgcHJvZHVjdE5hbWUsIHJlZmVyZW5jZSwgZGVzY3JpcHRpb24sIHF1YW50aXR5LCBwcmljZSwgY2F0ZWdvcnksIGFjdGl2ZSB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShcIi9wcm9kdWN0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICAgc2V0RWRpdGluZyh0cnVlKTtcclxuICAgICAgICAgICAgZmV0Y2hQcm9kdWN0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBjdXJyZW50VGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoY3VycmVudFRhcmdldC5uYW1lID09ICdxdWFudGl0eScgfHwgY3VycmVudFRhcmdldC5uYW1lID09ICdjYXRlZ29yeScpID8gcGFyc2VJbnQoY3VycmVudFRhcmdldC52YWx1ZSkgOiAoKGN1cnJlbnRUYXJnZXQubmFtZSA9PSAncHJpY2UnKSA/IHBhcnNlRmxvYXQoY3VycmVudFRhcmdldC52YWx1ZSkgOiBjdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRQcm9kdWN0KHsgLi4ucHJvZHVjdCwgW25hbWVdOiB2YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChlZGl0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvZHVjdHNBUEkudXBkYXRlKGlkLCBwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9kdWN0c0FQSS5jcmVhdGUocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UoXCIvcHJvZHVjdHNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0RXJyb3JzKHt9KTtcclxuICAgICAgICB9IGNhdGNoICh7IHJlc3BvbnNlIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgeyB2aW9sYXRpb25zIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICh2aW9sYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlFcnJvcnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZpb2xhdGlvbnMuZm9yRWFjaCgoeyBwcm9wZXJ0eVBhdGgsIG1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaUVycm9yc1twcm9wZXJ0eVBhdGhdID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKGFwaUVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIHshZWRpdGluZyAmJiA8aDE+Q3LDqWF0aW9uIGQndW4gUHJvZHVpdDwvaDE+IHx8IDxoMT5Nb2RpZmljYXRpb24gZCd1biBQcm9kdWl0PC9oMT59XHJcblxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT1cInByb2R1Y3ROYW1lXCIgbGFiZWw9XCJOb20gZGUgUHJvZHVpdFwiIHBsYWNlaG9sZGVyPVwiTm9tIGRlIFByb2R1aXRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3QucHJvZHVjdE5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGVycm9yPXtlcnJvcnMucHJvZHVjdE5hbWV9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicmVmZXJlbmNlXCIgbGFiZWw9XCJSw6lmw6lyZW5jZVwiIHBsYWNlaG9sZGVyPVwiUsOpZsOpcmVuY2UgZHUgUHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdC5yZWZlcmVuY2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGVycm9yPXtlcnJvcnMucmVmZXJlbmNlfSAvPlxyXG5cclxuICAgICAgICAgICAgPFNlbGVjdCBuYW1lPVwiY2F0ZWdvcnlcIiBsYWJlbD1cIkNhdMOpZ29yaWVcIiB2YWx1ZT17cHJvZHVjdC5jYXRlZ29yeX0gZXJyb3I9e2Vycm9ycy5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5JbmZvcm1hdGlxdWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+TWFpc29uPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtwcm9kdWN0LmRlc2NyaXB0aW9ufSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgXCIgKyAoZXJyb3JzLmRlc2NyaXB0aW9uICYmIFwiIGlzLWludmFsaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBkdSBQcm9kdWl0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT1cInF1YW50aXR5XCIgdHlwZT1cIm51bWJlclwiIGxhYmVsPVwiUXVhbnRpdMOpXCIgcGxhY2Vob2xkZXI9XCJRdWFudGl0w6kgZHUgUHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdC5xdWFudGl0eX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gZXJyb3I9e2Vycm9ycy5xdWFudGl0eX0gLz5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJwcmljZVwiIHN0ZXA9XCIwLjAxXCIgdHlwZT1cIm51bWJlclwiIGxhYmVsPVwiUHJpeFwiIHBsYWNlaG9sZGVyPVwiUHJpeCBkdSBQcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0LnByaWNlLnRvTG9jYWxlU3RyaW5nKCl9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGVycm9yPXtlcnJvcnMucHJpY2V9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+RW5yZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdHNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5SZXRvdXIgw6AgbGEgTGlzdGU8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcbmltcG9ydCBQcm9kdWN0c0FQSSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0c0FQSSc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgVGFibGVMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sb2FkZXJzL1RhYmxlTG9hZGVyJztcclxuaW1wb3J0IHsgQWlGaWxsQ2hlY2tDaXJjbGUsIEFpRmlsbENsb3NlQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgUG9wdXBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BvcHVwTW9kYWwnO1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9GaWVsZCc7XHJcblxyXG5jb25zdCBQcm9kdWN0c1BhZ2UgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsaW5lLCBzZXRMaW5lXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhY3RpdmU6IDAsXHJcbiAgICAgICAgcXVhbnRpdHk6IDBcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRwYWdlLCBzZXRDdXJyZW50cGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3coZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb2R1Y3RzQVBJLmZpbmRBbGwoKVxyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRXJyZXVyIGxvcnMgZHUgQ2hhcmdlbWVudCBkZXMgUHJvZHVpdHMgIVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlKSA9PiBzZXRDdXJyZW50cGFnZShwYWdlKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoKGN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldEN1cnJlbnRwYWdlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGlkID0+IHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFByb2R1Y3RzID0gWy4uLnByb2R1Y3RzXTtcclxuICAgICAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmlkICE9PSBpZCkpO1xyXG4gICAgICAgIFByb2R1Y3RzQVBJLmRlbGV0ZVByb2R1Y3QoaWQpLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0cyhvcmlnaW5hbFByb2R1Y3RzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVBY3RpdmVDaGFuZ2UgPSBhc3luYyAoZSwgbmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFByb2R1Y3RzID0gWy4uLnByb2R1Y3RzXTtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFByb2R1Y3QgPSBvcmlnaW5hbFByb2R1Y3RzW2VdO1xyXG4gICAgICAgIG9yaWdpbmFsUHJvZHVjdC5hY3RpdmUgPSB2YWx1ZSA9PSAxID8gMCA6IDE7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlID0gdmFsdWUgPT0gMSA/IDAgOiAxO1xyXG4gICAgICAgIHNldExpbmUoeyAuLi5vcmlnaW5hbFByb2R1Y3QsIFtuYW1lXTogYWN0aXZlIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9kdWN0c0FQSS51cGRhdGUob3JpZ2luYWxQcm9kdWN0c1tlXS5pZCwgb3JpZ2luYWxQcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAoeyBjdXJyZW50VGFyZ2V0IH0pID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lID0gY3VycmVudFRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFRhcmdldC5pZC5yZXBsYWNlKG5hbWUgKyBcIl9cIiwgJycpO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUHJvZHVjdHMgPSBbLi4ucHJvZHVjdHNdO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUHJvZHVjdCA9IG9yaWdpbmFsUHJvZHVjdHNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgb3JpZ2luYWxQcm9kdWN0LnF1YW50aXR5ID0gdmFsdWU7XHJcbiAgICAgICAgc2V0TGluZSh7IC4uLm9yaWdpbmFsUHJvZHVjdCwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgICAgICBhd2FpdCBQcm9kdWN0c0FQSS51cGRhdGUob3JpZ2luYWxQcm9kdWN0LmlkLCBvcmlnaW5hbFByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGl0ZW1zUGFyUGFnZSA9IDQ7XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihjID0+XHJcbiAgICAgICAgYy5wcm9kdWN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgIGMucmVmZXJlbmNlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgcGFnaW5hdGVkUHJvZHVjdHMgPSBQYWdpbmF0aW9uLmdldERhdGEoZmlsdGVyZWRQcm9kdWN0cywgY3VycmVudHBhZ2UsIGl0ZW1zUGFyUGFnZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxpc3RlIGRlcyBQcm9kdWl0czwvaDE+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdWN0cy9uZXdcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5DcsOpZXIgdW4gUHJvZHVpdDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWl0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlLDqWbDqXJlbmNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNhdMOpZ29yaWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5RdWFudGl0w6k8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Qcml4PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWN0aXZlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhZ2luYXRlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHVwTW9kYWwgc2hvdz17c2hvd30gaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlfSBvbkNoYW5nZUV2ZW50PXtoYW5kbGVEZWxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTdXBwcmltZXIgQ2UgUHJvZHVpdCA/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiVm91cyDDqnRlcyBzdXIgbGUgcG9pbnQgZGUgc3VwcHJpbWVyIGNlIFByb2R1aXQsIMOqdGVzLXZvdXMgc8O7ciA/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b249XCJTdXBwcmltZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yPVwiZGFuZ2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvcHJvZHVjdHMvXCIgKyBwcm9kdWN0LmlkfT57cHJvZHVjdC5wcm9kdWN0TmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntwcm9kdWN0LnJlZmVyZW5jZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwcm9kdWN0LnF1YW50aXR5fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBpZD17XCJxdWFudGl0eV9cIiArIGluZGV4fSBuYW1lPVwicXVhbnRpdHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntwcm9kdWN0LnByaWNlLnRvTG9jYWxlU3RyaW5nKCl9IERIPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmFjdGl2ZSA9PSAxICYmIDxBaUZpbGxDaGVja0NpcmNsZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY3RpdmVDaGFuZ2UoaW5kZXgsIFwiYWN0aXZlXCIsIDEpfSBzdHlsZT17eyBmaWxsOiBcIiMxNTlGNUNcIiwgd2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwiIH19IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmFjdGl2ZSAhPSAxICYmIDxBaUZpbGxDbG9zZUNpcmNsZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY3RpdmVDaGFuZ2UoaW5kZXgsIFwiYWN0aXZlXCIsIDApfSBzdHlsZT17eyBmaWxsOiBcIiNERDUxNDVcIiwgd2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwiIH19IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9wcm9kdWN0cy9cIiArIHByb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIj5FZGl0ZXI8L0xpbms+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUocHJvZHVjdC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIj5TdXBwcmltZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+fVxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8VGFibGVMb2FkZXIgLz59XHJcblxyXG4gICAgICAgICAgICB7aXRlbXNQYXJQYWdlIDwgZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGN1cnJlbnRwYWdlPXtjdXJyZW50cGFnZX0gaXRlbXNQYXJQYWdlPXtpdGVtc1BhclBhZ2V9IGxlbmd0aD17ZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGh9IG9uUGFnZUNoYW5nZWQ9e2hhbmRsZVBhZ2VDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBGaWVsZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0ZpZWxkJztcclxuaW1wb3J0IFVzZXJzQVBJIGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXJzQVBJJztcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUGFnZSA9ICh7IGhpc3RvcnkgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmRDb25maXJtOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBwYXNzd29yZENvbmZpcm06IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGFwaUVycm9ycyA9IHt9O1xyXG4gICAgICAgIGlmICh1c2VyLnBhc3N3b3JkICE9PSB1c2VyLnBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICAgICAgICBhcGlFcnJvcnMucGFzc3dvcmRDb25maXJtID0gXCJDb25maXJtYXRpb24gZGUgTW90IGRlIFBhc3Mgbidlc3QgcGFzIGNvbmZvcm1lIMOgIGwnb3JpZ2luYWxcIjtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKGFwaUVycm9ycyk7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiVW5lIEVycmV1ciBlc3QgU3VydmVudWUgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgVXNlcnNBUEkucmVnaXN0ZXIodXNlcik7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyh7fSk7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJWb3VzIMOqdGVzIEluc2NyaXQgISDwn5iBXCIpO1xyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UoXCIvbG9naW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHZpb2xhdGlvbnMgfSA9IGVycm9yLnJlc3BvbnNlLmRhdGEgPyBlcnJvci5yZXNwb25zZS5kYXRhIDogJyc7XHJcbiAgICAgICAgICAgIGlmICh2aW9sYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB2aW9sYXRpb25zLmZvckVhY2godmlvbGF0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhcGlFcnJvcnNbdmlvbGF0aW9uLnByb3BlcnR5UGF0aF0gPSB2aW9sYXRpb24ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKGFwaUVycm9ycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJVbmUgRXJyZXVyIGVzdCBTdXJ2ZW51ZSAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5JbnNjcmlwdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTG9naW5cIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlci51c2VybmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIExvZ2luXCIgZXJyb3I9e2Vycm9ycy51c2VybmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlByw6lub21cIiBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e3VzZXIuZmlyc3ROYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVm90cmUgUHLDqW5vbVwiIGVycm9yPXtlcnJvcnMuZmlyc3ROYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTm9tXCIgbmFtZT1cImxhc3ROYW1lXCIgdmFsdWU9e3VzZXIubGFzdE5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBOb21cIiBlcnJvcj17ZXJyb3JzLmxhc3ROYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiRS1NYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3VzZXIuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBFLU1haWxcIiBlcnJvcj17ZXJyb3JzLmVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTW90IGRlIFBhc3NlXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3VzZXIucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBNb3QgZGUgUGFzc2VcIiBlcnJvcj17ZXJyb3JzLnBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiQ29uZmlybWF0aW9uIGRlIE1vdCBkZSBQYXNzZVwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIiB2YWx1ZT17dXNlci5wYXNzd29yZENvbmZpcm19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5wYXNzd29yZENvbmZpcm19IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5JbnNjcmlwdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCI+SidhaSBkw6lqYSB1biBDb21wdGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFRhYmxlTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9hZGVycy9UYWJsZUxvYWRlcic7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcbmltcG9ydCBVc2Vyc0FQSSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2Vyc0FQSSc7XHJcblxyXG5jb25zdCBVc2Vyc1BhZ2UgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50cGFnZSwgc2V0Q3VycmVudHBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFVzZXJzQVBJLmZpbmRBbGwoKVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRXJyZXVyIGxvcnMgZHUgQ2hhcmdlbWVudCBkZXMgVXRpbGlzYXRldXJzICFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hVc2VycygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4gc2V0Q3VycmVudHBhZ2UocGFnZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaChjdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRDdXJyZW50cGFnZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpdGVtc1BhclBhZ2UgPSA0O1xyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkVXNlcnMgPSB1c2Vycy5maWx0ZXIoYyA9PlxyXG4gICAgICAgIGMuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgYy5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgIGMuZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICBjLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgcGFnaW5hdGVkVXNlcnMgPSBQYWdpbmF0aW9uLmdldERhdGEoZmlsdGVyZWRVc2VycywgY3VycmVudHBhZ2UsIGl0ZW1zUGFyUGFnZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+TGlzdGUgZGVzIFV0aWxpc2F0ZXVyczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9IHZhbHVlPXtzZWFyY2h9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciAuLi5cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiNJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Mb2dpbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FLW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cGFnaW5hdGVkVXNlcnMubWFwKHVzZXIgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnt1c2VyLnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuZmlyc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5Pn1cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgPFRhYmxlTG9hZGVyIC8+fVxyXG5cclxuICAgICAgICAgICAge2l0ZW1zUGFyUGFnZSA8IGZpbHRlcmVkVXNlcnMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBjdXJyZW50cGFnZT17Y3VycmVudHBhZ2V9IGl0ZW1zUGFyUGFnZT17aXRlbXNQYXJQYWdlfSBsZW5ndGg9e2ZpbHRlcmVkVXNlcnMubGVuZ3RofSBvblBhZ2VDaGFuZ2VkPXtoYW5kbGVQYWdlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1BhZ2U7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuaW1wb3J0IHsgTE9HSU5fQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhUb2tlblwiKTtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKTtcclxuICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXV0aGVudGljYXRlKGNyZWRlbnRpYWxzKSB7XHJcbiAgICByZXR1cm4gYXhpb3NcclxuICAgICAgICAucG9zdChMT0dJTl9BUEksIGNyZWRlbnRpYWxzKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEudG9rZW4pXHJcbiAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoVG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICBzZXRBeGlvc1Rva2VuKHRva2VuKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIHBhcnNlSnd0KHRva2VuKS51c2VySWQpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBeGlvc1Rva2VuKHRva2VuKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgdG9rZW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBjb25zdCB7IGV4cDogZXhwaXJhdGlvbiB9ID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICBpZiAoZXhwaXJhdGlvbiAqIDEwMDAgPiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICBzZXRBeGlvc1Rva2VuKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcclxuICAgIGNvbnN0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgeyBleHA6IGV4cGlyYXRpb24gfSA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgaWYgKGV4cGlyYXRpb24gKiAxMDAwID4gbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSnd0KHRva2VuKSB7XHJcbiAgICBpZiAoIXRva2VuKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICAgIGNvbnN0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKCctJywgJysnKS5yZXBsYWNlKCdfJywgJy8nKTtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBhdXRoZW50aWNhdGUsXHJcbiAgICBsb2dvdXQsXHJcbiAgICBzZXR1cCxcclxuICAgIGlzQXV0aGVudGljYXRlZFxyXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFBST0RVQ1RTX0FQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiBmaW5kQWxsKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgLmdldChQUk9EVUNUU19BUEkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmQoaWQpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb2R1Y3RzL1wiICsgaWQpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShpZCwgcHJvZHVjdCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdHMvXCIgKyBpZCwgcHJvZHVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShwcm9kdWN0KSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdHNcIiwgeyAuLi5wcm9kdWN0LCB1c2VyOiBgL2FwaS91c2Vycy8ke3Byb2R1Y3QudXNlcn1gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3QoaWQpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb2R1Y3RzL1wiICsgaWQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmaW5kQWxsLFxyXG4gICAgZmluZCxcclxuICAgIHVwZGF0ZSxcclxuICAgIGNyZWF0ZSxcclxuICAgIGRlbGV0ZVByb2R1Y3RcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFVTRVJTX0FQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiBmaW5kQWxsKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgLmdldChVU0VSU19BUEkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmQoaWQpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXJzL1wiICsgaWQpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyKHVzZXIpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KFVTRVJTX0FQSSwgdXNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZpbmRBbGwsXHJcbiAgICBmaW5kLFxyXG4gICAgcmVnaXN0ZXJcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=