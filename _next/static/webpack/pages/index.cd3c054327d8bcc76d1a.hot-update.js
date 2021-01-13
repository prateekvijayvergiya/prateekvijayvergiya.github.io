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

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: validationSchema,
    validateOnChange: ramda__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](touched) ? false : true
  }),
      handleChange = _useFormik.handleChange,
      values = _useFormik.values,
      errors = _useFormik.errors,
      touched = _useFormik.touched,
      resetForm = _useFormik.resetForm;

  var sendEmail = function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm('service_exupccm', 'template_bmob55b', e.target, 'user_ZAkELR5Ak12fyoPIRdNOj');
    resetForm();
  };

  return __jsx("form", {
    onSubmit: sendEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "Submit"));
};

_s(ContactForm, "vwWkIKCNMSihvmfjmor35IF+e6U=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImVtYWlsIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwiUiIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJyZXNldEZvcm0iLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbGpzIiwic2VuZEZvcm0iLCJ0YXJnZXQiLCJ0ZXh0RmllbGQiLCJCb29sZWFuIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQywwQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDQyxNQUFJLEVBQUVGLDBDQUFBLEdBQWFHLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCLEVBQXhCLEVBQTRCQyxRQUE1QixDQUFxQyxVQUFyQyxDQURvQztBQUUxQ0MsT0FBSyxFQUFFTiwwQ0FBQSxHQUNGTSxLQURFLENBQ0ksZ0JBREosRUFFRkQsUUFGRSxDQUVPLFVBRlAsQ0FGbUM7QUFLMUNFLFNBQU8sRUFBRVAsMENBQUEsR0FBYUcsR0FBYixDQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0IsR0FBeEIsRUFBNkJDLFFBQTdCLENBQXNDLFVBQXRDO0FBTGlDLENBQW5CLENBQXpCOztBQVFBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFD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TyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0YsRUFtQ0UsTUFBQyxnRUFBRDtBQUFRLFdBQU8sRUFBQyxVQUFoQjtBQUEyQixTQUFLLEVBQUMsU0FBakM7QUFBMkMsUUFBSSxFQUFDLFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0YsQ0FERjtBQXVDRCxDQXpERDs7R0FBTUMsVztVQUNZRSxTLEVBQzZDQyxnRDs7O0tBRnpESCxXO0FBMkROLElBQU1FLFNBQVMsR0FBR2tCLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNILGFBQVMsRUFBRTtBQUNUSSxXQUFLLEVBQUU7QUFERTtBQUQ0QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQU1ldEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2QzYzA1NDMyN2Q4YmNjNzZkMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgU3BhY2VyIGZyb20gXCIuLi8uLi9zcGFjZXJcIlxyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgbmFtZTogWXVwLnN0cmluZygpLm1pbigyKS5tYXgoMjApLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAuZW1haWwoXCJJbnZhbGlkIEVtYWlsLlwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBtZXNzYWdlOiBZdXAuc3RyaW5nKCkubWluKDIpLm1heCgxMDApLnJlcXVpcmVkKCdSZXF1aXJlZCcpXHJcbn0pO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgeyBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCByZXNldEZvcm0gfSA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiBSLmlzRW1wdHkodG91Y2hlZCkgPyBmYWxzZSA6IHRydWVcclxuICB9KVxyXG5cclxuICBjb25zdCBzZW5kRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICBcclxuICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2VfZXh1cGNjbScsICd0ZW1wbGF0ZV9ibW9iNTViJywgZS50YXJnZXQsICd1c2VyX1pBa0VMUjVBazEyZnlvUElSZE5PaicpXHJcbiAgICByZXNldEZvcm0oKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kRW1haWx9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgbGFiZWw9eydFbnRlciB5b3VyIG5hbWUnfVxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgIGVycm9yPXt0b3VjaGVkLm5hbWUgJiYgQm9vbGVhbihlcnJvcnMubmFtZSl9XHJcbiAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBlbWFpbCd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQuZW1haWwgJiYgQm9vbGVhbihlcnJvcnMuZW1haWwpfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBtZXNzYWdlJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLm1lc3NhZ2V9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQubWVzc2FnZSAmJiBCb29sZWFuKGVycm9ycy5tZXNzYWdlKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLm1lc3NhZ2UgJiYgZXJyb3JzLm1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17Mn0vPiBcclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3ByaW1hcnknIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9CdXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIGNvbG9yOiAnaW5oZXJpdCdcclxuICB9XHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==