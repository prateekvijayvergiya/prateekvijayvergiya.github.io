webpackHotUpdate_N_E("pages/index",{

/***/ "./components/contact/contactForm/index.js":
/*!*************************************************!*\
  !*** ./components/contact/contactForm/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\contact\\contactForm\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
  name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("Required"),
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email("Invalid Email.").required("Required")
});

var ContactForm = function ContactForm() {
  _s();

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values) {
      console.log(values);
    }
  }),
      handleSubmit = _useFormik.handleSubmit,
      handleChange = _useFormik.handleChange,
      values = _useFormik.values,
      errors = _useFormik.errors;

  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("input", {
    name: "firstName",
    onChange: handleChange,
    values: values.firstName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), errors.firstName ? errors.firstName : null, __jsx("input", {
    name: "lastName",
    onChange: handleChange,
    values: values.firstName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), errors.lastName ? errors.lastName : null, __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Submit"));
};

_s(ContactForm, "O9z2iTc7m5Sy0nAC3HGozsnhla4=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"]];
});

_c = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c;

$RefreshReg$(_c, "ContactForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJuYW1lIiwicmVxdWlyZWQiLCJlbWFpbCIsIkNvbnRhY3RGb3JtIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMENBQUEsQ0FBVztBQUNsQ0MsTUFBSSxFQUFFRCwwQ0FBQSxHQUFhRSxRQUFiLENBQXNCLFVBQXRCLENBRDRCO0FBRWxDQyxPQUFLLEVBQUVILDBDQUFBLEdBQ0ZHLEtBREUsQ0FDSSxnQkFESixFQUVGRCxRQUZFLENBRU8sVUFGUDtBQUYyQixDQUFYLENBQXpCOztBQU9BLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxtQkFDK0JDLHdEQUFTLENBQUM7QUFDL0RDLGlCQUFhLEVBQUU7QUFDYkwsVUFBSSxFQUFFLEVBRE87QUFFYkUsV0FBSyxFQUFFLEVBRk07QUFHYkksYUFBTyxFQUFFO0FBSEksS0FEZ0Q7QUFNL0RSLG9CQUFnQixFQUFoQkEsZ0JBTitEO0FBTy9EUyxZQVArRCxvQkFPdERDLE1BUHNELEVBTzlDO0FBQ2ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0Q7QUFUOEQsR0FBRCxDQUR4QztBQUFBLE1BQ2hCRyxZQURnQixjQUNoQkEsWUFEZ0I7QUFBQSxNQUNGQyxZQURFLGNBQ0ZBLFlBREU7QUFBQSxNQUNZSixNQURaLGNBQ1lBLE1BRFo7QUFBQSxNQUNvQkssTUFEcEIsY0FDb0JBLE1BRHBCOztBQWF4QixTQUNFO0FBQU0sWUFBUSxFQUFFRixZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsV0FEUDtBQUVFLFlBQVEsRUFBRUMsWUFGWjtBQUdFLFVBQU0sRUFBRUosTUFBTSxDQUFDTSxTQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNR0QsTUFBTSxDQUFDQyxTQUFQLEdBQW1CRCxNQUFNLENBQUNDLFNBQTFCLEdBQXNDLElBTnpDLEVBT0U7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLFlBQVEsRUFBRUYsWUFGWjtBQUdFLFVBQU0sRUFBRUosTUFBTSxDQUFDTSxTQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFZR0QsTUFBTSxDQUFDRSxRQUFQLEdBQWtCRixNQUFNLENBQUNFLFFBQXpCLEdBQW9DLElBWnZDLEVBYUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsQ0FERjtBQWlCRCxDQTlCRDs7R0FBTVosVztVQUNtREMsZ0Q7OztLQURuREQsVztBQWdDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzJmMzU3NDQ2NWJkZGZhOTA5ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIlxyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3Qoe1xyXG4gIG5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIGVtYWlsOiBZdXAuc3RyaW5nKClcclxuICAgICAgLmVtYWlsKFwiSW52YWxpZCBFbWFpbC5cIilcclxuICAgICAgLnJlcXVpcmVkKFwiUmVxdWlyZWRcIilcclxufSk7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIGVycm9ycyB9ID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcclxuICAgIG9uU3VibWl0KHZhbHVlcykge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5maXJzdE5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvcnMuZmlyc3ROYW1lID8gZXJyb3JzLmZpcnN0TmFtZSA6IG51bGx9XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5maXJzdE5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvcnMubGFzdE5hbWUgPyBlcnJvcnMubGFzdE5hbWUgOiBudWxsfVxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=