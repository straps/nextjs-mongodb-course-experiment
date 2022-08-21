(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9673);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Card(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ 6722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(3964);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(2430);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js






function MeetupItem(props) {
  const router = (0,router_.useRouter)();

  const showDetailsHandler = () => {
    router.push(`/meetup/${props.id}`);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: (MeetupItem_module_default()).item,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MeetupItem_module_default()).image,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: props.image,
          alt: props.title
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MeetupItem_module_default()).content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: props.title
        }), /*#__PURE__*/jsx_runtime_.jsx("address", {
          children: props.address
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MeetupItem_module_default()).actions,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        })
      })]
    })
  });
}

/* harmony default export */ const meetups_MeetupItem = (MeetupItem);
// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(6672);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js




function MeetupList(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: (MeetupList_module_default()).list,
    children: props.meetups.map(meetup => /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupItem, {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id))
  });
}

/* harmony default export */ const meetups_MeetupList = (MeetupList);
;// CONCATENATED MODULE: ./pages/index.jsx





const Index = props => {
  console.log("Running Index");
  return /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupList, {
    meetups: props.meetups
  });
}; //Questo codice gira sul server ed è gestito da Nextjs solo per i componenti in "pages"


const getStaticProps = async context => {
  console.log("Running getStaticProps");
  const client = await external_mongodb_namespaceObject.MongoClient.connect(process.env.REACT_APP_MONGODB_CONN);
  const db = client.db("meetups");
  const collection = db.collection("meetups");
  const result = await collection.find().toArray();
  client.close();
  return {
    props: {
      meetups: result.map(r => {
        r.id = r._id.toString();
        delete r._id;
        return r;
      })
    },
    revalidate: 600
  };
};
/* harmony default export */ const pages = (Index);

/***/ }),

/***/ 2430:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__pvgsv",
	"image": "MeetupItem_image__0jYm_",
	"content": "MeetupItem_content__fvTRB",
	"actions": "MeetupItem_actions__IeeH4"
};


/***/ }),

/***/ 6672:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__C2D8b"
};


/***/ }),

/***/ 9673:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6722));
module.exports = __webpack_exports__;

})();