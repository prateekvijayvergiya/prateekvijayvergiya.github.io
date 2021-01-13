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

      return emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm('service_exupccm', 'template_bmob55b', {
        values: values
      }, 'user_ZAkELR5Ak12fyoPIRdNOj');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImVtYWlsIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInNlbmRFbWFpbCIsInZhbHVlcyIsImVtYWlsanMiLCJzZW5kRm9ybSIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwiUiIsInRvdWNoZWQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiLCJyZXNldEZvcm0iLCJ0ZXh0RmllbGQiLCJCb29sZWFuIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQywwQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDQyxNQUFJLEVBQUVGLDBDQUFBLEdBQWFHLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCLEVBQXhCLEVBQTRCQyxRQUE1QixDQUFxQyxVQUFyQyxDQURvQztBQUUxQ0MsT0FBSyxFQUFFTiwwQ0FBQSxHQUNGTSxLQURFLENBQ0ksZ0JBREosRUFFRkQsUUFGRSxDQUVPLFVBRlAsQ0FGbUM7QUFLMUNFLFNBQU8sRUFBRVAsMENBQUEsR0FBYUcsR0FBYixDQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0IsR0FBeEIsRUFBNkJDLFFBQTdCLENBQXNDLFVBQXRDO0FBTGlDLENBQW5CLENBQXpCOztBQVFBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdB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SlA7QUFLRSxZQUFRLEVBQUVrQixZQUxaO0FBTUUsVUFBTSxFQUFFWixNQUFNLENBQUNMLE9BTmpCO0FBT0UsU0FBSyxFQUFFZSxPQUFPLENBQUNmLE9BQVIsSUFBbUJxQixPQUFPLENBQUNILE1BQU0sQ0FBQ2xCLE9BQVIsQ0FQbkM7QUFRRSxjQUFVLEVBQUVlLE9BQU8sQ0FBQ2YsT0FBUixJQUFtQmtCLE1BQU0sQ0FBQ2xCLE9BUnhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkYsRUFrQ0UsTUFBQywrQ0FBRDtBQUFRLFdBQU8sRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENGLEVBbUNFLE1BQUMsZ0VBQUQ7QUFBUSxXQUFPLEVBQUMsVUFBaEI7QUFBMkIsU0FBSyxFQUFDLFNBQWpDO0FBQTJDLFFBQUksRUFBQyxRQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNGLENBREY7QUF1Q0QsQ0E5REQ7O0dBQU1DLFc7VUFDWUUsUyxFQU0yREssZ0Q7OztLQVB2RVAsVztBQWdFTixJQUFNRSxTQUFTLEdBQUdtQiwyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDSCxhQUFTLEVBQUU7QUFDVEksV0FBSyxFQUFFO0FBREU7QUFENEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFNZXZCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUzNzVkOGRiNTk0ZTY0MzdiYTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCJcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vLi4vc3BhY2VyXCJcclxuXHJcbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIG5hbWU6IFl1cC5zdHJpbmcoKS5taW4oMikubWF4KDIwKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIGVtYWlsOiBZdXAuc3RyaW5nKClcclxuICAgICAgLmVtYWlsKFwiSW52YWxpZCBFbWFpbC5cIilcclxuICAgICAgLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgbWVzc2FnZTogWXVwLnN0cmluZygpLm1pbigyKS5tYXgoMTAwKS5yZXF1aXJlZCgnUmVxdWlyZWQnKVxyXG59KTtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKSAgICBcclxuICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2VfZXh1cGNjbScsICd0ZW1wbGF0ZV9ibW9iNTViJywge3ZhbHVlc30sICd1c2VyX1pBa0VMUjVBazEyZnlvUElSZE5PaicpXHJcbiAgICAvLyByZXNldEZvcm0oe3ZhbHVlczogJyd9KVxyXG4gIH1cclxuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAvLyBzZW5kRW1haWwodmFsdWVzKVxyXG4gICAgICByZXR1cm4gZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV9leHVwY2NtJywgJ3RlbXBsYXRlX2Jtb2I1NWInLCB7dmFsdWVzfSwgJ3VzZXJfWkFrRUxSNUFrMTJmeW9QSVJkTk9qJylcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiBSLmlzRW1wdHkodG91Y2hlZCkgPyBmYWxzZSA6IHRydWVcclxuICB9KVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgbGFiZWw9eydFbnRlciB5b3VyIG5hbWUnfVxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgIGVycm9yPXt0b3VjaGVkLm5hbWUgJiYgQm9vbGVhbihlcnJvcnMubmFtZSl9XHJcbiAgICAgICAgaGVscGVyVGV4dD17dG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBlbWFpbCd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQuZW1haWwgJiYgQm9vbGVhbihlcnJvcnMuZW1haWwpfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e3RvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBtZXNzYWdlJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLm1lc3NhZ2V9XHJcbiAgICAgICAgZXJyb3I9e3RvdWNoZWQubWVzc2FnZSAmJiBCb29sZWFuKGVycm9ycy5tZXNzYWdlKX1cclxuICAgICAgICBoZWxwZXJUZXh0PXt0b3VjaGVkLm1lc3NhZ2UgJiYgZXJyb3JzLm1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTcGFjZXIgc3BhY2luZz17Mn0vPiBcclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lZCcgY29sb3I9J3ByaW1hcnknIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9CdXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIGNvbG9yOiAnaW5oZXJpdCdcclxuICB9XHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==