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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spacer */ "./components/spacer/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\contact\\contactForm\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(2).max(20).required("Required"),
  email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email("Invalid Email.").required("Required"),
  message: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(2).max(100).required('Required')
});

var ContactForm = function ContactForm() {
  _s();

  var classes = useStyles();

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values) {
      console.log(values);
    },
    validateOnChange: false
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
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: 'Enter your name',
    fullWidth: true,
    variant: "outlined",
    name: "name",
    onChange: handleChange,
    values: values.name,
    className: classes.textField,
    error: touched.email && Boolean(errors.email),
    helperText: touched.email && errors.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: 'Enter your message',
    fullWidth: true,
    variant: "outlined",
    name: "message",
    onChange: handleChange,
    values: values.message,
    error: touched.email && Boolean(errors.email),
    helperText: touched.email && errors.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, "Submit"));
};

_s(ContactForm, "Z6Cu88D4p40jXYtGOJjipceeAlw=", false, function () {
  return [useStyles, formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"]];
});

_c = ContactForm;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImVtYWlsIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwidG91Y2hlZCIsInRleHRGaWVsZCIsIkJvb2xlYW4iLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMENBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUMxQ0MsTUFBSSxFQUFFRiwwQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QixFQUF4QixFQUE0QkMsUUFBNUIsQ0FBcUMsVUFBckMsQ0FEb0M7QUFFMUNDLE9BQUssRUFBRU4sMENBQUEsR0FDRk0sS0FERSxDQUNJLGdCQURKLEVBRUZELFFBRkUsQ0FFTyxVQUZQLENBRm1DO0FBSzFDRSxTQUFPLEVBQUVQLDBDQUFBLEdBQWFHLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCLEdBQXhCLEVBQTZCQyxRQUE3QixDQUFzQyxVQUF0QztBQUxpQyxDQUFuQixDQUF6Qjs7QUFRQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFEd0IsbUJBRXdDQyx3REFBUyxDQUFD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QUNZRSxTLEVBQ2dEQyxnRDs7O0tBRjVESCxXO0FBNEROLElBQU1FLFNBQVMsR0FBR2MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0gsYUFBUyxFQUFFO0FBQ1RJLFdBQUssRUFBRTtBQURFO0FBRDRCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBTWVsQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ODYzZTI1YmZhMWQ3M2NmOTQ3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgU3BhY2VyIGZyb20gXCIuLi8uLi9zcGFjZXJcIlxyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgbmFtZTogWXVwLnN0cmluZygpLm1pbigyKS5tYXgoMjApLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAuZW1haWwoXCJJbnZhbGlkIEVtYWlsLlwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBtZXNzYWdlOiBZdXAuc3RyaW5nKCkubWluKDIpLm1heCgxMDApLnJlcXVpcmVkKCdSZXF1aXJlZCcpXHJcbn0pO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQgfSA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICBvblN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiBmYWxzZVxyXG4gIH0pXHJcblxyXG4gIGNvbnNvbGUubG9nKHRvdWNoZWQsIGVycm9ycylcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBsYWJlbD17J0VudGVyIHlvdXIgbmFtZSd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQuZW1haWwgJiYgQm9vbGVhbihlcnJvcnMuZW1haWwpfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICB7Lyoge2Vycm9ycy5uYW1lID8gZXJyb3JzLm5hbWUgOiBudWxsfSAqL31cclxuICAgICAgPFNwYWNlciBzcGFjaW5nPXsyfS8+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBsYWJlbD17J0VudGVyIHlvdXIgZW1haWwnfVxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgIGVycm9yPXt0b3VjaGVkLmVtYWlsICYmIEJvb2xlYW4oZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH1cclxuICAgICAgLz5cclxuICAgICAgey8qIHtlcnJvcnMuZW1haWwgPyBlcnJvcnMuZW1haWwgOiBudWxsfSAqL31cclxuICAgICAgPFNwYWNlciBzcGFjaW5nPXsyfS8+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBsYWJlbD17J0VudGVyIHlvdXIgbWVzc2FnZSd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5tZXNzYWdlfVxyXG4gICAgICAgIGVycm9yPXt0b3VjaGVkLmVtYWlsICYmIEJvb2xlYW4oZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH1cclxuICAgICAgLz5cclxuICAgICAgey8qIHtlcnJvcnMubWVzc2FnZSA/IGVycm9ycy5tZXNzYWdlIDogbnVsbH0gKi99XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17Mn0vPiBcclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIGNvbG9yOiAnaW5oZXJpdCdcclxuICB9XHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==