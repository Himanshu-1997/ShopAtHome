webpackHotUpdate("static\\development\\pages\\items.js",{

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }; // if its a whole, dollar amount, leave off the .00
  //if (amount % 100 === 0) options.minimumFractionDigits = 2;

  var formatter = new Intl.NumberFormat('en-IN', options);
  return formatter.format(amount);
});

/***/ })

})
//# sourceMappingURL=items.js.6538cee18792a0f8ae18.hot-update.js.map