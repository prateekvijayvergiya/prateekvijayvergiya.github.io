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
          name: "",
          email: "",
          message: ""
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
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImVtYWlsIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInNlbmRFbWFpbCIsInZhbHVlcyIsImVtYWlsanMiLCJzZW5kRm9ybSIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInJlc2V0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwidGhlbiIsInZhbGlkYXRlT25DaGFuZ2UiLCJSIiwidG91Y2hlZCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImVycm9ycyIsInRleHRGaWVsZCIsIkJvb2xlYW4iLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDBDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDMUNDLE1BQUksRUFBRUYsMENBQUEsR0FBYUcsR0FBYixDQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0IsRUFBeEIsRUFBNEJDLFFBQTVCLENBQXFDLFVBQXJDLENBRG9DO0FBRTFDQyxPQUFLLEVBQUVOLDBDQUFBLEdBQ0ZNLEtBREUsQ0FDSSxnQkFESixFQUVGRCxRQUZFLENBRU8sVUFGUCxDQUZtQztBQUsxQ0UsU0FBTyxFQUFFUCwwQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QixHQUF4QixFQUE2QkMsUUFBN0IsQ0FBc0MsVUFBdEM7QUFMaUMsQ0FBbkIsQ0FBekI7O0FBUUEsSUFBTUcsV0FBVyxHQUFH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QUE7QUFBQSxJQXZCRixFQXdCRSxNQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFFLG9CQURUO0FBRUUsYUFBUyxNQUZYO0FBR0UsV0FBTyxFQUFDLFVBSFY7QUFJRSxRQUFJLEVBQUMsU0FKUDtBQUtFLFlBQVEsRUFBRXFCLFlBTFo7QUFNRSxVQUFNLEVBQUVmLE1BQU0sQ0FBQ0wsT0FOakI7QUFPRSxTQUFLLEVBQUVrQixPQUFPLENBQUNsQixPQUFSLElBQW1CdUIsT0FBTyxDQUFDRixNQUFNLENBQUNyQixPQUFSLENBUG5DO0FBUUUsY0FBVSxFQUFFa0IsT0FBTyxDQUFDbEIsT0FBUixJQUFtQnFCLE1BQU0sQ0FBQ3JCLE9BUnhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkYsRUFrQ0UsTUFBQywrQ0FBRDtBQUFRLFdBQU8sRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENGLEVBbUNFLE1BQUMsZ0VBQUQ7QUFBUSxXQUFPLEVBQUMsVUFBaEI7QUFBMkIsU0FBSyxFQUFDLFNBQWpDO0FBQTJDLFFBQUksRUFBQyxRQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNGLENBREY7QUF1Q0QsQ0FoRUQ7O0dBQU1DLFc7VUFDWUUsUyxFQU1nREssZ0Q7OztLQVA1RFAsVztBQWtFTixJQUFNRSxTQUFTLEdBQUdxQiwyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDSCxhQUFTLEVBQUU7QUFDVEksV0FBSyxFQUFFO0FBREU7QUFENEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFNZXpCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxNjYxYzk3ZjM5MzIxZWI1NDM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCJcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vLi4vc3BhY2VyXCJcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIG5hbWU6IFl1cC5zdHJpbmcoKS5taW4oMikubWF4KDIwKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIGVtYWlsOiBZdXAuc3RyaW5nKClcclxuICAgICAgLmVtYWlsKFwiSW52YWxpZCBFbWFpbC5cIilcclxuICAgICAgLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgbWVzc2FnZTogWXVwLnN0cmluZygpLm1pbigyKS5tYXgoMTAwKS5yZXF1aXJlZCgnUmVxdWlyZWQnKVxyXG59KTtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKSAgICBcclxuICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2VfZXh1cGNjbScsICd0ZW1wbGF0ZV9ibW9iNTViJywge3ZhbHVlc30sICd1c2VyX1pBa0VMUjVBazEyZnlvUElSZE5PaicpXHJcbiAgICAvLyByZXNldEZvcm0oe3ZhbHVlczogJyd9KVxyXG4gIH1cclxuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCB9ID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblNjaGVtYSxcclxuICAgIG9uU3VibWl0OiAodmFsdWVzLCB7cmVzZXRGb3JtfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICAgIC8vIHNlbmRFbWFpbCh2YWx1ZXMpXHJcbiAgICAgIGVtYWlsanMuc2VuZCgnc2VydmljZV9leHVwY2NtJywgJ3RlbXBsYXRlX2Jtb2I1NWInLCB2YWx1ZXMsICd1c2VyX1pBa0VMUjVBazEyZnlvUElSZE5PaicpXHJcbiAgICAgIC50aGVuKCgpID0+IHJlc2V0Rm9ybSh7bmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCIsfSkpXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGVPbkNoYW5nZTogUi5pc0VtcHR5KHRvdWNoZWQpID8gZmFsc2UgOiB0cnVlXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgbGFiZWw9eydFbnRlciB5b3VyIG5hbWUnfVxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgIGVycm9yPXt0b3VjaGVkLm5hbWUgJiYgQm9vbGVhbihlcnJvcnMubmFtZSl9XHJcbiAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBlbWFpbCd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQuZW1haWwgJiYgQm9vbGVhbihlcnJvcnMuZW1haWwpfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBtZXNzYWdlJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLm1lc3NhZ2V9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQubWVzc2FnZSAmJiBCb29sZWFuKGVycm9ycy5tZXNzYWdlKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLm1lc3NhZ2UgJiYgZXJyb3JzLm1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17Mn0vPiBcclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3ByaW1hcnknIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9CdXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIGNvbG9yOiAnaW5oZXJpdCdcclxuICB9XHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==