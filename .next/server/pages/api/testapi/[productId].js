"use strict";
(() => {
var exports = {};
exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TestAPI = (req, res) => {
  res.json({
    err: null,
    message: "productId=" + req.query.productId
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestAPI);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(898));
module.exports = __webpack_exports__;

})();