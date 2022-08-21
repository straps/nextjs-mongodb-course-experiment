"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 7057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js


const NewMeetupAPI = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const client = await external_mongodb_namespaceObject.MongoClient.connect('mongodb+srv://fstrappini:software@cluster0.jpcm9kt.mongodb.net/?retryWrites=true&w=majority');
      console.log('connect');
      const db = client.db('meetups');
      const collection = db.collection('meetups');
      const result = await collection.insertOne(data);
      console.log('result', result);
      client.close();
      res.status(201).json({
        err: null,
        data
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        err: err.message
      });
    }
  }
};

/* harmony default export */ const new_meetup = (NewMeetupAPI);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7057));
module.exports = __webpack_exports__;

})();