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
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../spacer */ "./components/spacer/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\contact\\contactForm\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(2).max(20).required("Required"),
  email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email("Invalid Email.").required("Required"),
  message: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(2).max(100).required('Required')
});

var ContactForm = function ContactForm() {
  _s();

  var classes = useStyles();

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"])({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values) {
      console.log(values);
    },
    validateOnChange: true
  }),
      handleSubmit = _useFormik.handleSubmit,
      handleChange = _useFormik.handleChange,
      values = _useFormik.values,
      errors = _useFormik.errors,
      touched = _useFormik.touched;

  console.log(touched, errors);
  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: 'Enter your name',
    fullWidth: true,
    variant: "outlined",
    name: "name",
    onChange: handleChange,
    values: values.name,
    className: classes.textField,
    error: touched.name && Boolean(errors.name),
    helperText: touched.name && errors.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: 'Enter your email',
    fullWidth: true,
    variant: "outlined",
    name: "email",
    onChange: handleChange,
    values: values.email,
    error: touched.email && Boolean(errors.email),
    helperText: touched.email && errors.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: 'Enter your message',
    fullWidth: true,
    variant: "outlined",
    name: "message",
    onChange: handleChange,
    values: values.message,
    error: touched.message && Boolean(errors.message),
    helperText: touched.message && errors.message,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "Submit"));
};

_s(ContactForm, "Z6Cu88D4p40jXYtGOJjipceeAlw=", false, function () {
  return [useStyles, formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"]];
});

_c = ContactForm;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    textField: {
      color: 'inherit'
    }
  };
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImVtYWlsIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwidG91Y2hlZCIsInRleHRGaWVsZCIsIkJvb2xlYW4iLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMENBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUMxQ0MsTUFBSSxFQUFFRiwwQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QixFQUF4QixFQUE0QkMsUUFBNUIsQ0FBcUMsVUFBckMsQ0FEb0M7QUFFMUNDLE9BQUssRUFBRU4sMENBQUEsR0FDRk0sS0FERSxDQUNJLGdCQURKLEVBRUZELFFBRkUsQ0FFTyxVQUZQLENBRm1DO0FBSzFDRSxTQUFPLEVBQUVQLDBDQUFBLEdBQWFHLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCLEdBQXhCLEVBQTZCQyxRQUE3QixDQUFzQyxVQUF0QztBQUxpQyxDQUFuQixDQUF6Qjs7QUFRQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFEd0IsbUJBRXdDQyx3REFB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REQ7O0dBQU1DLFc7VUFDWUUsUyxFQUNnREMsZ0Q7OztLQUY1REgsVztBQTRETixJQUFNRSxTQUFTLEdBQUdjLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNILGFBQVMsRUFBRTtBQUNUSSxXQUFLLEVBQUU7QUFERTtBQUQ0QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQU1lbEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmNlOTlmMDc3MGM1NWYwMGUxZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCJcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vLi4vc3BhY2VyXCJcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIG5hbWU6IFl1cC5zdHJpbmcoKS5taW4oMikubWF4KDIwKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIGVtYWlsOiBZdXAuc3RyaW5nKClcclxuICAgICAgLmVtYWlsKFwiSW52YWxpZCBFbWFpbC5cIilcclxuICAgICAgLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgbWVzc2FnZTogWXVwLnN0cmluZygpLm1pbigyKS5tYXgoMTAwKS5yZXF1aXJlZCgnUmVxdWlyZWQnKVxyXG59KTtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkIH0gPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxyXG4gICAgb25TdWJtaXQodmFsdWVzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZVxyXG4gIH0pXHJcblxyXG4gIGNvbnNvbGUubG9nKHRvdWNoZWQsIGVycm9ycylcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBsYWJlbD17J0VudGVyIHlvdXIgbmFtZSd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQubmFtZSAmJiBCb29sZWFuKGVycm9ycy5uYW1lKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLm5hbWUgJiYgZXJyb3JzLm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiB7ZXJyb3JzLm5hbWUgPyBlcnJvcnMubmFtZSA6IG51bGx9ICovfVxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBlbWFpbCd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQuZW1haWwgJiYgQm9vbGVhbihlcnJvcnMuZW1haWwpfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICB7Lyoge2Vycm9ycy5lbWFpbCA/IGVycm9ycy5lbWFpbCA6IG51bGx9ICovfVxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBtZXNzYWdlJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLm1lc3NhZ2V9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQubWVzc2FnZSAmJiBCb29sZWFuKGVycm9ycy5tZXNzYWdlKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLm1lc3NhZ2UgJiYgZXJyb3JzLm1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiB7ZXJyb3JzLm1lc3NhZ2UgPyBlcnJvcnMubWVzc2FnZSA6IG51bGx9ICovfVxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz4gXHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICBjb2xvcjogJ2luaGVyaXQnXHJcbiAgfVxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=