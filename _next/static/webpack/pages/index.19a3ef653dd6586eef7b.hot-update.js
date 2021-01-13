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
    onSubmit: function onSubmit(values) {
      console.log(values); // sendEmail(values)

      return emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.send('service_exupccm', 'template_bmob55b', values, 'user_ZAkELR5Ak12fyoPIRdNOj');
    },
    validateOnChange: ramda__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](touched) ? false : true
  }),
      handleSubmit = _useFormik.handleSubmit,
      handleChange = _useFormik.handleChange,
      values = _useFormik.values,
      errors = _useFormik.errors,
      touched = _useFormik.touched,
      resetForm = _useFormik.resetForm;

  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(_spacer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 55,
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
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Submit"));
};

_s(ContactForm, "lVzP9to9jA1VKpVdVKeD+m0TBh8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImVtYWlsIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInNlbmRFbWFpbCIsInZhbHVlcyIsImVtYWlsanMiLCJzZW5kRm9ybSIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwidmFsaWRhdGVPbkNoYW5nZSIsIlIiLCJ0b3VjaGVkIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwicmVzZXRGb3JtIiwidGV4dEZpZWxkIiwiQm9vbGVhbiIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMENBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUMxQ0MsTUFBSSxFQUFFRiwwQ0FBQSxHQUFhRyxHQUFiLENBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QixFQUF4QixFQUE0QkMsUUFBNUIsQ0FBcUMsVUFBckMsQ0FEb0M7QUFFMUNDLE9BQUssRUFBRU4sMENBQUEsR0FDRk0sS0FERSxDQUNJLGdCQURKLEVBRUZELFFBRkUsQ0FFTyxVQUZQLENBRm1DO0FBSzFDRSxTQUFPLEVBQUVQLDBDQUFBLEdBQWFHLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCLEdBQXhCLEVBQTZCQyxRQUE3QixDQUFzQyxVQUF0QztBQUxpQyxDQUFuQixDQUF6Qjs7QUFRQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEs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RW1CLFlBTFo7QUFNRSxVQUFNLEVBQUViLE1BQU0sQ0FBQ0wsT0FOakI7QUFPRSxTQUFLLEVBQUVnQixPQUFPLENBQUNoQixPQUFSLElBQW1Cc0IsT0FBTyxDQUFDSCxNQUFNLENBQUNuQixPQUFSLENBUG5DO0FBUUUsY0FBVSxFQUFFZ0IsT0FBTyxDQUFDaEIsT0FBUixJQUFtQm1CLE1BQU0sQ0FBQ25CLE9BUnhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkYsRUFrQ0UsTUFBQywrQ0FBRDtBQUFRLFdBQU8sRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENGLEVBbUNFLE1BQUMsZ0VBQUQ7QUFBUSxXQUFPLEVBQUMsVUFBaEI7QUFBMkIsU0FBSyxFQUFDLFNBQWpDO0FBQTJDLFFBQUksRUFBQyxRQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNGLENBREY7QUF1Q0QsQ0E3REQ7O0dBQU1DLFc7VUFDWUUsUyxFQU0yREssZ0Q7OztLQVB2RVAsVztBQStETixJQUFNRSxTQUFTLEdBQUdvQiwyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDSCxhQUFTLEVBQUU7QUFDVEksV0FBSyxFQUFFO0FBREU7QUFENEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFNZXhCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE5YTNlZjY1M2RkNjU4NmVlZjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCJcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vLi4vc3BhY2VyXCJcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIG5hbWU6IFl1cC5zdHJpbmcoKS5taW4oMikubWF4KDIwKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIGVtYWlsOiBZdXAuc3RyaW5nKClcclxuICAgICAgLmVtYWlsKFwiSW52YWxpZCBFbWFpbC5cIilcclxuICAgICAgLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgbWVzc2FnZTogWXVwLnN0cmluZygpLm1pbigyKS5tYXgoMTAwKS5yZXF1aXJlZCgnUmVxdWlyZWQnKVxyXG59KTtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKSAgICBcclxuICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2VfZXh1cGNjbScsICd0ZW1wbGF0ZV9ibW9iNTViJywge3ZhbHVlc30sICd1c2VyX1pBa0VMUjVBazEyZnlvUElSZE5PaicpXHJcbiAgICAvLyByZXNldEZvcm0oe3ZhbHVlczogJyd9KVxyXG4gIH1cclxuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAvLyBzZW5kRW1haWwodmFsdWVzKVxyXG4gICAgICByZXR1cm4gZW1haWxqcy5zZW5kKCdzZXJ2aWNlX2V4dXBjY20nLCAndGVtcGxhdGVfYm1vYjU1YicsIHZhbHVlcywgJ3VzZXJfWkFrRUxSNUFrMTJmeW9QSVJkTk9qJylcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiBSLmlzRW1wdHkodG91Y2hlZCkgPyBmYWxzZSA6IHRydWVcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBsYWJlbD17J0VudGVyIHlvdXIgbmFtZSd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQubmFtZSAmJiBCb29sZWFuKGVycm9ycy5uYW1lKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLm5hbWUgJiYgZXJyb3JzLm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17Mn0vPlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgbGFiZWw9eydFbnRlciB5b3VyIGVtYWlsJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICBlcnJvcj17dG91Y2hlZC5lbWFpbCAmJiBCb29sZWFuKGVycm9ycy5lbWFpbCl9XHJcbiAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17Mn0vPlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgbGFiZWw9eydFbnRlciB5b3VyIG1lc3NhZ2UnfVxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMubWVzc2FnZX1cclxuICAgICAgICBlcnJvcj17dG91Y2hlZC5tZXNzYWdlICYmIEJvb2xlYW4oZXJyb3JzLm1lc3NhZ2UpfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQubWVzc2FnZSAmJiBlcnJvcnMubWVzc2FnZX1cclxuICAgICAgLz5cclxuICAgICAgPFNwYWNlciBzcGFjaW5nPXsyfS8+IFxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmVkJyBjb2xvcj0ncHJpbWFyeScgdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L0J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgY29sb3I6ICdpbmhlcml0J1xyXG4gIH1cclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9