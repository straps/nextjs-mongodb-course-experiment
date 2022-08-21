(() => {
var exports = {};
exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/meetups/MeetupDetails.module.scss
var MeetupDetails_module = __webpack_require__(9630);
var MeetupDetails_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetails_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetails.jsx




const MeetupDetails = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (MeetupDetails_module_default()).details,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: props.image,
      alt: props.title
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: props.title
    }), /*#__PURE__*/jsx_runtime_.jsx("address", {
      children: props.address
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: props.description
    })]
  });
};

/* harmony default export */ const meetups_MeetupDetails = (MeetupDetails);
;// CONCATENATED MODULE: ./pages/meetup/[id].jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MeetupDetailsPage = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupDetails, _objectSpread({}, props.meetup));
};

const getStaticPaths = async ({
  params
}) => {
  return {
    fallback: true,
    paths: [{
      params: {
        id: '1'
      }
    }, {
      params: {
        id: '2'
      }
    }]
  };
};
const getStaticProps = async ({
  params
}) => {
  const {
    id
  } = params;
  return {
    props: {
      meetup: {
        id: id,
        title: 'First Meetup',
        image: 'https://officinebrand.it/wp-content/uploads/2018/06/meetup.jpg',
        address: 'Via D.Alighieri 9',
        description: 'This is a first meetup for my nextjs test'
      }
    }
  };
};
/* harmony default export */ const _id_ = (MeetupDetailsPage);

/***/ }),

/***/ 9630:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "MeetupDetails_details__bDw0r"
};


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(152));
module.exports = __webpack_exports__;

})();