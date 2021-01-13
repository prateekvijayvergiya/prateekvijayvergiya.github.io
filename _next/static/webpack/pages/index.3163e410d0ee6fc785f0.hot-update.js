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
    // e.preventDefault()    
    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm('service_exupccm', 'template_bmob55b', {
      values: values
    }, 'user_ZAkELR5Ak12fyoPIRdNOj'); // resetForm({values: ''})
  };

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, _ref) {
      var resetForm = _ref.resetForm;
      console.log(values); // sendEmail(values)

      emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.send('service_exupccm', 'template_bmob55b', values, 'user_ZAkELR5Ak12fyoPIRdNOj').then(function () {
        return resetForm({
          values: ''
        });
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
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImVtYWlsIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInNlbmRFbWFpbCIsInZhbHVlcyIsImVtYWlsanMiLCJzZW5kRm9ybSIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInJlc2V0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwidGhlbiIsInZhbGlkYXRlT25DaGFuZ2UiLCJSIiwidG91Y2hlZCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImVycm9ycyIsInRleHRGaWVsZCIsIkJvb2xlYW4iLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDBDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDMUNDLE1BQUksRUFBRUYsMENBQUEsR0FBYUcsR0FBYixDQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0IsRUFBeEIsRUFBNEJDLFFBQTVCLENBQXFDLFVBQXJDLENBRG9DO0FBRTFDQyxPQUFLLEVBQUVOLDBDQUFBLEdBQ0ZNLEtBREUsQ0FDSSxnQkFESixFQUVGRCxRQUZFLENBRU8sVUFGUCxDQUZtQztBQUsxQ0UsU0FBTyxFQUFFUCwwQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QixHQUF4QixFQUE2QkMsUUFBN0IsQ0FBc0MsVUFBdEM7QUFMaUMsQ0FBbkIsQ0FBekI7O0FBUUEsSUFBTUcsV0FBVyxHQUFH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b0JBRFQ7QUFFRSxhQUFTLE1BRlg7QUFHRSxXQUFPLEVBQUMsVUFIVjtBQUlFLFFBQUksRUFBQyxTQUpQO0FBS0UsWUFBUSxFQUFFcUIsWUFMWjtBQU1FLFVBQU0sRUFBRWYsTUFBTSxDQUFDTCxPQU5qQjtBQU9FLFNBQUssRUFBRWtCLE9BQU8sQ0FBQ2xCLE9BQVIsSUFBbUJ1QixPQUFPLENBQUNGLE1BQU0sQ0FBQ3JCLE9BQVIsQ0FQbkM7QUFRRSxjQUFVLEVBQUVrQixPQUFPLENBQUNsQixPQUFSLElBQW1CcUIsTUFBTSxDQUFDckIsT0FSeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCRixFQWtDRSxNQUFDLCtDQUFEO0FBQVEsV0FBTyxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0YsRUFtQ0UsTUFBQyxnRUFBRDtBQUFRLFdBQU8sRUFBQyxVQUFoQjtBQUEyQixTQUFLLEVBQUMsU0FBakM7QUFBMkMsUUFBSSxFQUFDLFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0YsQ0FERjtBQXVDRCxDQTlERDs7R0FBTUMsVztVQUNZRSxTLEVBTWdESyxnRDs7O0tBUDVEUCxXO0FBZ0VOLElBQU1FLFNBQVMsR0FBR3FCLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNILGFBQVMsRUFBRTtBQUNUSSxXQUFLLEVBQUU7QUFERTtBQUQ0QixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQU1lekIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzE2M2U0MTBkMGVlNmZjNzg1ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgU3BhY2VyIGZyb20gXCIuLi8uLi9zcGFjZXJcIlxyXG5cclxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgbmFtZTogWXVwLnN0cmluZygpLm1pbigyKS5tYXgoMjApLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAuZW1haWwoXCJJbnZhbGlkIEVtYWlsLlwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBtZXNzYWdlOiBZdXAuc3RyaW5nKCkubWluKDIpLm1heCgxMDApLnJlcXVpcmVkKCdSZXF1aXJlZCcpXHJcbn0pO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgc2VuZEVtYWlsID0gKHZhbHVlcykgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpICAgIFxyXG4gICAgZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV9leHVwY2NtJywgJ3RlbXBsYXRlX2Jtb2I1NWInLCB7dmFsdWVzfSwgJ3VzZXJfWkFrRUxSNUFrMTJmeW9QSVJkTk9qJylcclxuICAgIC8vIHJlc2V0Rm9ybSh7dmFsdWVzOiAnJ30pXHJcbiAgfVxyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkIH0gPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMsIHtyZXNldEZvcm19KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICAgICAgLy8gc2VuZEVtYWlsKHZhbHVlcylcclxuICAgICAgZW1haWxqcy5zZW5kKCdzZXJ2aWNlX2V4dXBjY20nLCAndGVtcGxhdGVfYm1vYjU1YicsIHZhbHVlcywgJ3VzZXJfWkFrRUxSNUFrMTJmeW9QSVJkTk9qJylcclxuICAgICAgLnRoZW4oKCkgPT4gcmVzZXRGb3JtKHt2YWx1ZXM6ICcnfSkpXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGVPbkNoYW5nZTogUi5pc0VtcHR5KHRvdWNoZWQpID8gZmFsc2UgOiB0cnVlXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgbGFiZWw9eydFbnRlciB5b3VyIG5hbWUnfVxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgIGVycm9yPXt0b3VjaGVkLm5hbWUgJiYgQm9vbGVhbihlcnJvcnMubmFtZSl9XHJcbiAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBlbWFpbCd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQuZW1haWwgJiYgQm9vbGVhbihlcnJvcnMuZW1haWwpfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBtZXNzYWdlJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLm1lc3NhZ2V9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQubWVzc2FnZSAmJiBCb29sZWFuKGVycm9ycy5tZXNzYWdlKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLm1lc3NhZ2UgJiYgZXJyb3JzLm1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17Mn0vPiBcclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3ByaW1hcnknIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9CdXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIGNvbG9yOiAnaW5oZXJpdCdcclxuICB9XHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==