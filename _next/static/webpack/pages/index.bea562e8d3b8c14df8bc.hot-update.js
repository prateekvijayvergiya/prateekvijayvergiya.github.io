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
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../spacer */ "./components/spacer/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\M1053908\\Documents\\digital-portfolio\\components\\contact\\contactForm\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var validationSchema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2).max(20).required("Required"),
  email: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().email("Invalid Email.").required("Required"),
  message: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().min(2).max(100).required('Required')
});

var ContactForm = function ContactForm() {
  _s();

  var classes = useStyles();

  var sendEmail = function sendEmail(values) {
    // e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm('gmail', 'default_service', values, 'user_ZAkELR5Ak12fyoPIRdNOj').then(function (result) {
      console.log(result.text);
    }, function (error) {
      console.log(error.text);
    });
  };

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values) {
      console.log('coming in send meail', values); // sendEmail(values)

      emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm('service_exupccm', 'template_bmob55b', values, 'user_ZAkELR5Ak12fyoPIRdNOj').then(function (result) {
        console.log(result.text);
      }, function (error) {
        console.log(error.text);
      });
    },
    validateOnChange: ramda__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](touched) ? false : true
  }),
      handleSubmit = _useFormik.handleSubmit,
      handleChange = _useFormik.handleChange,
      values = _useFormik.values,
      errors = _useFormik.errors,
      touched = _useFormik.touched;

  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, "Submit"));
};

_s(ContactForm, "Z6Cu88D4p40jXYtGOJjipceeAlw=", false, function () {
  return [useStyles, formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"]];
});

_c = ContactForm;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImVtYWlsIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInNlbmRFbWFpbCIsInZhbHVlcyIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImVycm9yIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsaWRhdGVPbkNoYW5nZSIsIlIiLCJ0b3VjaGVkIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwidGV4dEZpZWxkIiwiQm9vbGVhbiIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMENBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUMxQ0MsTUFBSSxFQUFFRiwwQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QixFQUF4QixFQUE0QkMsUUFBNUIsQ0FBcUMsVUFBckMsQ0FEb0M7QUFFMUNDLE9BQUssRUFBRU4sMENBQUEsR0FDRk0sS0FERSxDQUNJLGdCQURKLEVBRUZELFFBRkUsQ0FFTyxVQUZQLENBRm1DO0FBSzFDRSxTQUFPLEVBQUVQLDBDQUFBLEdBQWFHLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCLEdBQXhCLEVBQTZCQyxRQUE3QixDQUFzQyxVQUF0QztBQUxpQyxDQUFuQixDQUF6Qjs7QUFRQSxJQUFNRyxXQUFX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Ijoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmVhNTYyZThkM2I4YzE0ZGY4YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgU3BhY2VyIGZyb20gXCIuLi8uLi9zcGFjZXJcIlxyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgbmFtZTogWXVwLnN0cmluZygpLm1pbigyKS5tYXgoMjApLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAuZW1haWwoXCJJbnZhbGlkIEVtYWlsLlwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBtZXNzYWdlOiBZdXAuc3RyaW5nKCkubWluKDIpLm1heCgxMDApLnJlcXVpcmVkKCdSZXF1aXJlZCcpXHJcbn0pO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgc2VuZEVtYWlsID0gKHZhbHVlcykgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBlbWFpbGpzLnNlbmRGb3JtKCdnbWFpbCcsICdkZWZhdWx0X3NlcnZpY2UnLCB2YWx1ZXMsICd1c2VyX1pBa0VMUjVBazEyZnlvUElSZE5PaicpXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCB9ID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcclxuICAgIG9uU3VibWl0KHZhbHVlcykge1xyXG4gICAgICBjb25zb2xlLmxvZygnY29taW5nIGluIHNlbmQgbWVhaWwnLCB2YWx1ZXMpXHJcbiAgICAgIC8vIHNlbmRFbWFpbCh2YWx1ZXMpXHJcbiAgICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2VfZXh1cGNjbScsICd0ZW1wbGF0ZV9ibW9iNTViJywgdmFsdWVzLCAndXNlcl9aQWtFTFI1QWsxMmZ5b1BJUmROT2onKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHZhbGlkYXRlT25DaGFuZ2U6IFIuaXNFbXB0eSh0b3VjaGVkKSA/IGZhbHNlIDogdHJ1ZVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBuYW1lJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICBlcnJvcj17dG91Y2hlZC5uYW1lICYmIEJvb2xlYW4oZXJyb3JzLm5hbWUpfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQubmFtZSAmJiBlcnJvcnMubmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPFNwYWNlciBzcGFjaW5nPXsyfS8+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBsYWJlbD17J0VudGVyIHlvdXIgZW1haWwnfVxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgIGVycm9yPXt0b3VjaGVkLmVtYWlsICYmIEJvb2xlYW4oZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH1cclxuICAgICAgLz5cclxuICAgICAgPFNwYWNlciBzcGFjaW5nPXsyfS8+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBsYWJlbD17J0VudGVyIHlvdXIgbWVzc2FnZSd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5tZXNzYWdlfVxyXG4gICAgICAgIGVycm9yPXt0b3VjaGVkLm1lc3NhZ2UgJiYgQm9vbGVhbihlcnJvcnMubWVzc2FnZSl9XHJcbiAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5tZXNzYWdlICYmIGVycm9ycy5tZXNzYWdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz4gXHJcbiAgICAgIDxCdXR0b24gdmFyaWFudD0nb3V0bGluZWQnIGNvbG9yPSdwcmltYXJ5JyB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICBjb2xvcjogJ2luaGVyaXQnXHJcbiAgfVxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=