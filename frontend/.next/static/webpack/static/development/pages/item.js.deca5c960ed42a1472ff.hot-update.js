webpackHotUpdate("static\\development\\pages\\item.js",{

/***/ "./components/SingleItem.js":
/*!**********************************!*\
  !*** ./components/SingleItem.js ***!
  \**********************************/
/*! exports provided: default, SINGLE_ITEM_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_ITEM_QUERY", function() { return SINGLE_ITEM_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
var _jsxFileName = "E:\\Advanced-React-master\\sick-fits\\frontend\\components\\SingleItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      price\n      description\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var SingleItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SingleItem__SingleItemStyles",
  componentId: "mflgtv-0"
})(["max-width:1200px;margin:2rem auto;box-shadow:", ";display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;img{width:100%;height:100%;object-fit:contain;}.details{margin:3rem;font-size:2rem;}"], function (props) {
  return props.theme.bs;
});
var SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var SingleItem =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleItem, _Component);

  function SingleItem() {
    _classCallCheck(this, SingleItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleItem).apply(this, arguments));
  }

  _createClass(SingleItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: SINGLE_ITEM_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Loading...");
        if (!data.item) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "No Item Found for ", _this.props.id);
        var item = data.item;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleItemStyles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "ShopAtHome | ", item.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.largeImage,
          alt: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, item.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, item.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "Price = ", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(item.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: {
            pathname: 'update',
            query: {
              id: item.id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            margin: 10
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "Edit Here\u270F\uFE0F"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_8__["default"], {
          id: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        })));
      });
    }
  }]);

  return SingleItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleItem);


/***/ })

})
//# sourceMappingURL=item.js.deca5c960ed42a1472ff.hot-update.js.map