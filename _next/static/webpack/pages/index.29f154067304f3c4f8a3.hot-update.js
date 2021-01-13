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
    name: "name",
    onChange: handleChange,
    values: values.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), errors.name ? errors.name : null, __jsx("input", {
    name: "email",
    onChange: handleChange,
    values: values.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), errors.email ? errors.email : null, __jsx("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJuYW1lIiwicmVxdWlyZWQiLCJlbWFpbCIsIkNvbnRhY3RGb3JtIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDBDQUFBLENBQVc7QUFDbENDLE1BQUksRUFBRUQsMENBQUEsR0FBYUUsUUFBYixDQUFzQixVQUF0QixDQUQ0QjtBQUVsQ0MsT0FBSyxFQUFFSCwwQ0FBQSxHQUNGRyxLQURFLENBQ0ksZ0JBREosRUFFRkQsUUFGRSxDQUVPLFVBRlA7QUFGMkIsQ0FBWCxDQUF6Qjs7QUFPQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsbUJBQytCQyx3REFBUyxDQUFDO0FBQy9EQyxpQkFBYSxFQUFFO0FBQ2JMLFVBQUksRUFBRSxFQURPO0FBRWJFLFdBQUssRUFBRSxFQUZNO0FBR2JJLGFBQU8sRUFBRTtBQUhJLEtBRGdEO0FBTS9EUixvQkFBZ0IsRUFBaEJBLGdCQU4rRDtBQU8vRFMsWUFQK0Qsb0JBT3REQyxNQVBzRCxFQU85QztBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNEO0FBVDhELEdBQUQsQ0FEeEM7QUFBQSxNQUNoQkcsWUFEZ0IsY0FDaEJBLFlBRGdCO0FBQUEsTUFDRkMsWUFERSxjQUNGQSxZQURFO0FBQUEsTUFDWUosTUFEWixjQUNZQSxNQURaO0FBQUEsTUFDb0JLLE1BRHBCLGNBQ29CQSxNQURwQjs7QUFheEIsU0FDRTtBQUFNLFlBQVEsRUFBRUYsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFRLEVBQUVDLFlBRlo7QUFHRSxVQUFNLEVBQUVKLE1BQU0sQ0FBQ1IsSUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUdhLE1BQU0sQ0FBQ2IsSUFBUCxHQUFjYSxNQUFNLENBQUNiLElBQXJCLEdBQTRCLElBTi9CLEVBT0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFlBQVEsRUFBRVksWUFGWjtBQUdFLFVBQU0sRUFBRUosTUFBTSxDQUFDTixLQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFZR1csTUFBTSxDQUFDWCxLQUFQLEdBQWVXLE1BQU0sQ0FBQ1gsS0FBdEIsR0FBOEIsSUFaakMsRUFhRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixDQURGO0FBaUJELENBOUJEOztHQUFNQyxXO1VBQ21EQyxnRDs7O0tBRG5ERCxXO0FBZ0NTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOWYxNTQwNjczMDRmM2M0ZjhhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiXHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCh7XHJcbiAgbmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAuZW1haWwoXCJJbnZhbGlkIEVtYWlsLlwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKVxyXG59KTtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgZXJyb3JzIH0gPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxyXG4gICAgb25TdWJtaXQodmFsdWVzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICB7ZXJyb3JzLm5hbWUgPyBlcnJvcnMubmFtZSA6IG51bGx9XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgLz5cclxuICAgICAge2Vycm9ycy5lbWFpbCA/IGVycm9ycy5lbWFpbCA6IG51bGx9XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==