/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOGGED_IN = 1;
var PENDING = 2;
var LOGGED_OUT = 0;
var INVALID_USER = -1;

exports.default = {
  LOGGED_IN: LOGGED_IN,
  PENDING: PENDING,
  LOGGED_OUT: LOGGED_OUT,
  INVALID_USER: INVALID_USER
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoppingProvider = exports.ShoppingContext = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(19);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

var _ProductsContainer = __webpack_require__(14);

var _ProductsContainer2 = _interopRequireDefault(_ProductsContainer);

var _Basket = __webpack_require__(16);

var _Basket2 = _interopRequireDefault(_Basket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ShoppingContext = exports.ShoppingContext = _react2.default.createContext({});
var ShoppingProvider = exports.ShoppingProvider = ShoppingContext.Provider;

var getItemFromList = function getItemFromList(list, item) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var itemList = _step.value;

      if (itemList.name === item.name) return item;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
};

var ShoppingPage = function ShoppingPage(_ref) {
  var history = _ref.history,
      registrationStatus = _ref.registrationStatus,
      signOut = _ref.signOut;

  if (registrationStatus === _constants2.default.LOGGED_OUT) history.push('/');

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      basketItems = _useState2[0],
      setBasketItems = _useState2[1];

  var removeItem = function removeItem(itemToRemove) {
    setBasketItems(function (prevState) {
      var item = getItemFromList(prevState, itemToRemove);

      if (item && item.quantity !== 1) {
        return prevState.map(function (item) {
          return item.name === itemToRemove.name ? _extends({}, item, { quantity: item.quantity - 1 }) : item;
        });
      } else if (item) {
        return prevState.filter(function (item) {
          return item.name !== itemToRemove.name;
        });
      } else {
        return [].concat(_toConsumableArray(prevState), [_extends({}, itemToRemove, { quantity: 1 })]);
      }
    });
  };

  var addItem = function addItem(itemToAdd) {
    setBasketItems(function (prevState) {
      var item = getItemFromList(prevState, itemToAdd);

      if (item) {
        return prevState.map(function (item) {
          return item.name === itemToAdd.name ? _extends({}, item, { quantity: item.quantity + 1 }) : item;
        });
      }

      return [].concat(_toConsumableArray(prevState), [_extends({}, itemToAdd, { quantity: 1 })]);
    });
  };

  return _react2.default.createElement(
    ShoppingProvider,
    { value: { addItem: addItem, removeItem: removeItem } },
    _react2.default.createElement(
      'button',
      {
        className: 'sign-out',
        onClick: function onClick() {
          return signOut();
        } },
      'SIGN OUT'
    ),
    _react2.default.createElement(
      'div',
      { className: 'shopping-screen' },
      _react2.default.createElement(_Basket2.default, { basketList: basketItems }),
      _react2.default.createElement(_ProductsContainer2.default, null)
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return { registrationStatus: state.loggedIn };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { signOut: _actions.signOut })(ShoppingPage);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOG_IN_STATUS = "LOG_IN_STATUS";

exports.default = {
  LOG_IN_STATUS: LOG_IN_STATUS
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(10);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  res.send((0, _renderer2.default)(req));
});

app.listen(3000, function () {
  console.log('Listening to Port 3000');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _reducers = __webpack_require__(12);

var _reducers2 = _interopRequireDefault(_reducers);

var _Routes = __webpack_require__(13);

var _Routes2 = _interopRequireDefault(_Routes);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var loggedInStatus = _constants2.default.PENDING;
  if (req.get('cookie')) loggedInStatus = req.get('cookie').split('=')[1] === 'true' ? _constants2.default.LOGGED_IN : _constants2.default.PENDING;

  var store = (0, _redux.createStore)(_reducers2.default, { loggedIn: loggedInStatus });

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _App2.default,
      null,
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: {} },
        _react2.default.createElement(_Routes2.default, null)
      )
    )
  ));

  return '\n    <html lang="eng">\n        <head>\n            <title>My APP</title>\n            <link rel="stylesheet" href="reset.css" />\n            <link rel="stylesheet" href="styles.css" />\n        </head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script src="bundle.js"></script>\n        </body>\n    </html>\n  ';
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _types = __webpack_require__(6);

var _types2 = _interopRequireDefault(_types);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logInInfo = function logInInfo() {
  var loggedIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants2.default.PENDING;
  var action = arguments[1];

  switch (action.type) {
    case _types2.default.LOG_IN_STATUS:
      return action.payload;
    default:
      return loggedIn;
  }
};

exports.default = (0, _redux.combineReducers)({
  loggedIn: logInInfo
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _ShoppingPage = __webpack_require__(3);

var _ShoppingPage2 = _interopRequireDefault(_ShoppingPage);

var _RegistrationPage = __webpack_require__(17);

var _RegistrationPage2 = _interopRequireDefault(_RegistrationPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: "/", exact: true, component: _RegistrationPage2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: "/shopping", component: _ShoppingPage2.default })
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ShoppingPage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productsList = __webpack_require__(15);

var Product = function Product(_ref) {
  var product = _ref.product;

  var _useContext = (0, _react.useContext)(_ShoppingPage.ShoppingContext),
      addItem = _useContext.addItem;

  return _react2.default.createElement(
    'div',
    { className: 'product' },
    _react2.default.createElement(
      'div',
      { className: 'product__name' },
      product.name
    ),
    _react2.default.createElement('img', { className: 'product__image', src: product.imagePath, alt: 'phone photo' }),
    _react2.default.createElement(
      'button',
      { className: 'product__add-button', onClick: function onClick() {
          return addItem(product);
        } },
      'ADD'
    )
  );
};

var ProductsContainer = function ProductsContainer() {
  return _react2.default.createElement(
    'div',
    { className: 'products-container' },
    productsList.map(function (product) {
      return _react2.default.createElement(Product, { product: product });
    })
  );
};

exports.default = ProductsContainer;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = [{"name":"Google Pixel 4 XL","price":999,"imagePath":"/phoneImages/google-pixel-4-xl.jpg"},{"name":"Google Pixel 2 XL","price":999,"imagePath":"/phoneImages/google-pixel-xl2.jpg"},{"name":"Apple iPhone 11 Pro Max","price":1090,"imagePath":"/phoneImages/apple-iphone-11-pro.jpg"},{"name":"OnePlus 7T Pro","price":749,"imagePath":"/phoneImages/oneplus-7t-pro.jpg"},{"name":"Samsung Galaxy S10+","price":879,"imagePath":"/phoneImages/samsung-galaxy-s10-plus-new.jpg"},{"name":"Samsung Galaxy Note10+","price":879,"imagePath":"/phoneImages/samsung-galaxy-note10-plus.jpg"},{"name":"ZTE Blade 20","price":900,"imagePath":"/phoneImages/ztel-blade-v20.jpg"}]

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ShoppingPage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasketItem = function BasketItem(_ref) {
  var item = _ref.item;

  var _useContext = (0, _react.useContext)(_ShoppingPage.ShoppingContext),
      removeItem = _useContext.removeItem;

  return _react2.default.createElement(
    'div',
    { className: 'basket-item' },
    _react2.default.createElement(
      'div',
      { className: 'basket-item__name' },
      item.name
    ),
    _react2.default.createElement(
      'div',
      { className: 'itemData' },
      item.quantity
    ),
    _react2.default.createElement(
      'button',
      { className: 'basket-item__remove-button', onClick: function onClick() {
          return removeItem(item);
        } },
      'Remove'
    )
  );
};

var TotalPrice = function TotalPrice(_ref2) {
  var basketList = _ref2.basketList;

  var totalPrice = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = basketList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      totalPrice += item.price * item.quantity;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return _react2.default.createElement(
    'div',
    { className: 'price' },
    'Total Price = ',
    totalPrice,
    ' $'
  );
};

var Basket = function Basket(_ref3) {
  var basketList = _ref3.basketList;

  return _react2.default.createElement(
    'div',
    { className: 'basket-container' },
    _react2.default.createElement(
      'div',
      { className: 'basket' },
      _react2.default.createElement(
        'div',
        { className: 'basket-list' },
        basketList.length === 0 && _react2.default.createElement(
          'div',
          { className: 'hint' },
          'Add Items to Your Basket'
        ),
        basketList.map(function (item) {
          return _react2.default.createElement(BasketItem, { item: item });
        })
      ),
      _react2.default.createElement(TotalPrice, { basketList: basketList })
    )
  );
};

exports.default = Basket;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LogInPage = __webpack_require__(20);

var _LogInPage2 = _interopRequireDefault(_LogInPage);

var _reactRedux = __webpack_require__(2);

var _SignUp = __webpack_require__(21);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _SignUpInfo = __webpack_require__(22);

var _SignUpInfo2 = _interopRequireDefault(_SignUpInfo);

var _LogInInfo = __webpack_require__(23);

var _LogInInfo2 = _interopRequireDefault(_LogInInfo);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIRST_LOAD = '';
var LEFT = 'slideToLeft';
var RIGHT = 'slideToRight';

var RegistrationPage = function RegistrationPage(_ref) {
  var history = _ref.history,
      registrationStatus = _ref.registrationStatus;

  var _useState = (0, _react.useState)(FIRST_LOAD),
      _useState2 = _slicedToArray(_useState, 2),
      sliderPosition = _useState2[0],
      setSliderPosition = _useState2[1];

  if (registrationStatus === _constants2.default.LOGGED_IN) {
    history.push('/shopping');
    return null;
  }

  var switchSlider = function switchSlider() {
    switch (sliderPosition) {
      case FIRST_LOAD:
        setSliderPosition(LEFT);break;
      case RIGHT:
        setSliderPosition(LEFT);break;
      case LEFT:
        setSliderPosition(RIGHT);
    }
  };

  return _react2.default.createElement(
    'div',
    { className: 'registration-page' },
    _react2.default.createElement(
      'div',
      { className: 'registration-container' },
      _react2.default.createElement('div', { className: 'white-slider ' + sliderPosition }),
      sliderPosition === RIGHT || sliderPosition === FIRST_LOAD ? _react2.default.createElement(_SignUpInfo2.default, { switchSlider: switchSlider }) : _react2.default.createElement(_SignUp2.default, null),
      sliderPosition === RIGHT || sliderPosition === FIRST_LOAD ? _react2.default.createElement(_LogInPage2.default, { registrationStatus: true }) : _react2.default.createElement(_LogInInfo2.default, { switchSlider: switchSlider })
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return { registrationStatus: state.loggedIn };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(RegistrationPage);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(19);

var _reactRedux = __webpack_require__(2);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.logInFromLocalStorage();
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.registrationStatus === _constants2.default.PENDING) return _react2.default.createElement(
        'div',
        null,
        'Loading'
      );

      return this.props.children;
    }
  }]);

  return App;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { registrationStatus: state.loggedIn };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logInFromLocalStorage: _actions.logInFromLocalStorage })(App);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logInFromLocalStorage = exports.signOut = exports.verifyUser = undefined;

var _types = __webpack_require__(6);

var _types2 = _interopRequireDefault(_types);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL = "admin";
var PASSWORD = "admin";

var verifyUser = exports.verifyUser = function verifyUser(email, password) {
  if (email === EMAIL && password === PASSWORD) {
    document.cookie = "loggedIn=true";
    return {
      type: _types2.default.LOG_IN_STATUS,
      payload: _constants2.default.LOGGED_IN
    };
  } else {
    document.cookie = "loggedIn=false";
    return {
      type: _types2.default.LOG_IN_STATUS,
      payload: _constants2.default.INVALID_USER
    };
  }
};

var signOut = exports.signOut = function signOut() {
  document.cookie = "loggedIn=false";
  return {
    type: _types2.default.LOG_IN_STATUS,
    payload: _constants2.default.LOGGED_OUT
  };
};

var logInFromLocalStorage = exports.logInFromLocalStorage = function logInFromLocalStorage() {
  var isLoggedIn = 'false';
  if (document.cookie) isLoggedIn = document.cookie.split('=')[1];

  if (isLoggedIn && isLoggedIn === 'true') {
    return {
      type: _types2.default.LOG_IN_STATUS,
      payload: _constants2.default.LOGGED_IN
    };
  } else {
    return {
      type: _types2.default.LOG_IN_STATUS,
      payload: _constants2.default.LOGGED_OUT
    };
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(19);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogInPage = function LogInPage(_ref) {
  var registrationStatus = _ref.registrationStatus,
      verifyUser = _ref.verifyUser;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      emailInput = _useState2[0],
      setEmailInput = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      passwordInput = _useState4[0],
      setPasswordInput = _useState4[1];

  var handleLogIn = function handleLogIn(event) {
    event.preventDefault();
    verifyUser(emailInput, passwordInput);
  };

  return _react2.default.createElement(
    'div',
    { className: 'reg-side' },
    _react2.default.createElement(
      'form',
      { className: 'form-container', onSubmit: handleLogIn },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'reg-title' },
          'Log In'
        ),
        _react2.default.createElement('input', {
          className: 'reg-input',
          placeholder: 'Email Or User Name',
          value: emailInput,
          onChange: function onChange(_ref2) {
            var target = _ref2.target;
            return setEmailInput(target.value);
          },
          type: 'text'
        }),
        _react2.default.createElement('input', {
          className: 'reg-input',
          placeholder: 'Password',
          value: passwordInput,
          onChange: function onChange(_ref3) {
            var target = _ref3.target;
            return setPasswordInput(target.value);
          },
          type: 'password'
        }),
        registrationStatus === _constants2.default.INVALID_USER && _react2.default.createElement(
          'div',
          { className: 'error' },
          'Wrong Email Or Password'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'button-container' },
        _react2.default.createElement(
          'button',
          { className: 'button' },
          'LOG IN'
        )
      )
    )
  );
};

exports.default = (0, _reactRedux.connect)(null, { verifyUser: _actions.verifyUser })(LogInPage);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUp = function SignUp() {
  return _react2.default.createElement(
    "div",
    { className: "reg-side" },
    _react2.default.createElement(
      "form",
      { className: "form-container", onSubmit: function onSubmit(e) {
          return e.preventDefault();
        } },
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "reg-title" },
          "sign up"
        ),
        _react2.default.createElement("input", {
          className: "reg-input",
          placeholder: "User Name",
          type: "text"
        }),
        _react2.default.createElement("input", {
          className: "reg-input",
          placeholder: "Email Address",
          type: "text"
        }),
        _react2.default.createElement("input", {
          className: "reg-input",
          placeholder: "Password",
          type: "text"
        })
      ),
      _react2.default.createElement(
        "div",
        { className: "button-container" },
        _react2.default.createElement(
          "button",
          { className: "button" },
          "SIGN UP"
        )
      )
    )
  );
};

exports.default = SignUp;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUpInfo = function SignUpInfo(_ref) {
  var switchSlider = _ref.switchSlider;

  return _react2.default.createElement(
    "div",
    { className: "reg-side" },
    _react2.default.createElement(
      "div",
      { className: "info-section info-section-left" },
      _react2.default.createElement(
        "div",
        { className: "info-section__title" },
        "Don't Have an account?"
      ),
      _react2.default.createElement(
        "div",
        { className: "info-section__body" },
        "I just created it for the animation, click below to see it"
      ),
      _react2.default.createElement(
        "button",
        { className: "info-section__Button", onClick: function onClick() {
            return switchSlider();
          } },
        "SIGN UP"
      )
    )
  );
};

exports.default = SignUpInfo;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogInInfo = function LogInInfo(_ref) {
  var switchSlider = _ref.switchSlider;

  return _react2.default.createElement(
    "div",
    { className: "reg-side" },
    _react2.default.createElement(
      "div",
      { className: "info-section info-section-right" },
      _react2.default.createElement(
        "div",
        { className: "info-section__title" },
        "Have an account?"
      ),
      _react2.default.createElement(
        "div",
        { className: "info-section__body" },
        "Click below to sign in, enter admin admin"
      ),
      _react2.default.createElement(
        "button",
        { className: "info-section__Button", onClick: function onClick() {
            return switchSlider();
          } },
        "LOG IN"
      )
    )
  );
};

exports.default = LogInInfo;

/***/ })
/******/ ]);