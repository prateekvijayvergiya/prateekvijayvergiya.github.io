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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\contact\\contactForm\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Required"),
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email("Invalid Email.").required("Required")
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
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullWidth: true,
    variant: "outlined",
    name: "name",
    onChange: handleChange,
    values: values.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), errors.name ? errors.name : null, __jsx("input", {
    name: "email",
    onChange: handleChange,
    values: values.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), errors.email ? errors.email : null, __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJuYW1lIiwicmVxdWlyZWQiLCJlbWFpbCIsIkNvbnRhY3RGb3JtIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDBDQUFBLENBQVc7QUFDbENDLE1BQUksRUFBRUQsMENBQUEsR0FBYUUsUUFBYixDQUFzQixVQUF0QixDQUQ0QjtBQUVsQ0MsT0FBSyxFQUFFSCwwQ0FBQSxHQUNGRyxLQURFLENBQ0ksZ0JBREosRUFFRkQsUUFGRSxDQUVPLFVBRlA7QUFGMkIsQ0FBWCxDQUF6Qjs7QUFPQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsbUJBQytCQyx3REFBUyxDQUFDO0FBQy9EQyxpQkFBYSxFQUFFO0FBQ2JMLFVBQUksRUFBRSxFQURPO0FBRWJFLFdBQUssRUFBRSxFQUZNO0FBR2JJLGFBQU8sRUFBRTtBQUhJLEtBRGdEO0FBTS9EUixvQkFBZ0IsRUFBaEJBLGdCQU4rRDtBQU8vRFMsWUFQK0Qsb0JBT3REQyxNQVBzRCxFQU85QztBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNEO0FBVDhELEdBQUQsQ0FEeEM7QUFBQSxNQUNoQkcsWUFEZ0IsY0FDaEJBLFlBRGdCO0FBQUEsTUFDRkMsWUFERSxjQUNGQSxZQURFO0FBQUEsTUFDWUosTUFEWixjQUNZQSxNQURaO0FBQUEsTUFDb0JLLE1BRHBCLGNBQ29CQSxNQURwQjs7QUFheEIsU0FDRTtBQUFNLFlBQVEsRUFBRUYsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDQSxhQUFTLE1BRFQ7QUFFQyxXQUFPLEVBQUMsVUFGVDtBQUdFLFFBQUksRUFBQyxNQUhQO0FBSUUsWUFBUSxFQUFFQyxZQUpaO0FBS0UsVUFBTSxFQUFFSixNQUFNLENBQUNSLElBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFHYSxNQUFNLENBQUNiLElBQVAsR0FBY2EsTUFBTSxDQUFDYixJQUFyQixHQUE0QixJQVIvQixFQVNFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxZQUFRLEVBQUVZLFlBRlo7QUFHRSxVQUFNLEVBQUVKLE1BQU0sQ0FBQ04sS0FIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBY0dXLE1BQU0sQ0FBQ1gsS0FBUCxHQUFlVyxNQUFNLENBQUNYLEtBQXRCLEdBQThCLElBZGpDLEVBZUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkYsQ0FERjtBQW1CRCxDQWhDRDs7R0FBTUMsVztVQUNtREMsZ0Q7OztLQURuREQsVztBQWtDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWViYWFlYjcxODk4NDE3NmE3ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCJcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KHtcclxuICBuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBlbWFpbDogWXVwLnN0cmluZygpXHJcbiAgICAgIC5lbWFpbChcIkludmFsaWQgRW1haWwuXCIpXHJcbiAgICAgIC5yZXF1aXJlZChcIlJlcXVpcmVkXCIpXHJcbn0pO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCBlcnJvcnMgfSA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICBvblN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvcnMubmFtZSA/IGVycm9ycy5uYW1lIDogbnVsbH1cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICB7ZXJyb3JzLmVtYWlsID8gZXJyb3JzLmVtYWlsIDogbnVsbH1cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9