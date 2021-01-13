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






var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
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
    }
  }),
      handleSubmit = _useFormik.handleSubmit,
      handleChange = _useFormik.handleChange,
      values = _useFormik.values,
      errors = _useFormik.errors,
      touched = _useFormik.touched;

  console.log(touched);
  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), errors.name ? errors.name : null, __jsx(_spacer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: 'Enter your email',
    fullWidth: true,
    variant: "outlined",
    name: "email",
    onChange: handleChange,
    values: values.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), errors.email ? errors.email : null, __jsx(_spacer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: 'Enter your message',
    fullWidth: true,
    variant: "outlined",
    name: "message",
    onChange: handleChange,
    values: values.message,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), errors.message ? errors.message : null, __jsx(_spacer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RGb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJuYW1lIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJlbWFpbCIsIm1lc3NhZ2UiLCJDb250YWN0Rm9ybSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwidG91Y2hlZCIsInRleHRGaWVsZCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQywwQ0FBQSxDQUFXO0FBQ2xDQyxNQUFJLEVBQUVELDBDQUFBLEdBQWFFLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCLEVBQXhCLEVBQTRCQyxRQUE1QixDQUFxQyxVQUFyQyxDQUQ0QjtBQUVsQ0MsT0FBSyxFQUFFTCwwQ0FBQSxHQUNGSyxLQURFLENBQ0ksZ0JBREosRUFFRkQsUUFGRSxDQUVPLFVBRlAsQ0FGMkI7QUFLbENFLFNBQU8sRUFBRU4sMENBQUEsR0FBYUUsR0FBYixDQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0IsR0FBeEIsRUFBNkJDLFFBQTdCLENBQXNDLFVBQXRDO0FBTHlCLENBQVgsQ0FBekI7O0FBUUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7O0FBRHdCLG1CQUV3Q0Msd0RBQVMsQ0FBQztBQUN4RUMsaUJBQWEsRUFBRTtBQUNiVixVQUFJLEVBQUUsRUFETztBQUViSSxXQUFLLEVBQUUsRUFGTTtBQUdiQyxhQUFPLEVBQUU7QUFISSxLQUR5RDtBQU14RVAsb0JBQWdCLEVBQWhCQSxnQkFOd0U7QUFPeEVhLFlBUHdFLG9CQU8vREMsTUFQK0QsRUFPdkQ7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDRDtBQVR1RSxHQUFELENBRmpEO0FBQUEsTUFFaEJHLFlBRmdCLGNBRWhCQSxZQUZnQjtBQUFBLE1BRUZDLFlBRkUsY0FFRkEsWUFGRTtBQUFBLE1BRVlKLE1BRlosY0FFWUEsTUFGWjtBQUFBLE1BRW9CSyxNQUZwQixjQUVvQkEsTUFGcEI7QUFBQSxNQUU0QkMsT0FGNUIsY0FFNEJBLE9BRjVCOztBQWF4QkwsU0FBTyxDQUFDQyxHQUFSLENBQVlJLE9BQVo7QUFFQSxTQUNFO0FBQU0sWUFBUSxFQUFFSCxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUNFLFNBQUssRUFBRSxpQkFEVDtBQUVFLGFBQVMsTUFGWDtBQUdFLFdBQU8sRUFBQyxVQUhWO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxZQUFRLEVBQUVDLFlBTFo7QUFNRSxVQUFNLEVBQUVKLE1BQU0sQ0FBQ1osSUFOakI7QUFPRSxhQUFTLEVBQUVPLE9BQU8sQ0FBQ1ksU0FQckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUdGLE1BQU0sQ0FBQ2pCLElBQVAsR0FBY2lCLE1BQU0sQ0FBQ2pCLElBQXJCLEdBQTRCLElBVi9CLEVBV0UsTUFBQywrQ0FBRDtBQUFRLFdBQU8sRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRSxNQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFFLGtCQURUO0FBRUUsYUFBUyxNQUZYO0FBR0UsV0FBTyxFQUFDLFVBSFY7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLFlBQVEsRUFBRWdCLFlBTFo7QUFNRSxVQUFNLEVBQUVKLE1BQU0sQ0FBQ1IsS0FOakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBb0JHYSxNQUFNLENBQUNiLEtBQVAsR0FBZWEsTUFBTSxDQUFDYixLQUF0QixHQUE4QixJQXBCakMsRUFxQkUsTUFBQywrQ0FBRDtBQUFRLFdBQU8sRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLEVBc0JFLE1BQUMsbUVBQUQ7QUFDRSxTQUFLLEVBQUUsb0JBRFQ7QUFFRSxhQUFTLE1BRlg7QUFHRSxXQUFPLEVBQUMsVUFIVjtBQUlFLFFBQUksRUFBQyxTQUpQO0FBS0UsWUFBUSxFQUFFWSxZQUxaO0FBTUUsVUFBTSxFQUFFSixNQUFNLENBQUNQLE9BTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsRUE4QkdZLE1BQU0sQ0FBQ1osT0FBUCxHQUFpQlksTUFBTSxDQUFDWixPQUF4QixHQUFrQyxJQTlCckMsRUErQkUsTUFBQywrQ0FBRDtBQUFRLFdBQU8sRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JGLEVBZ0NFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDRixDQURGO0FBb0NELENBbkREOztHQUFNQyxXO1VBQ1lFLFMsRUFDZ0RDLGdEOzs7S0FGNURILFc7QUFxRE4sSUFBTUUsU0FBUyxHQUFHWSwyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDRixhQUFTLEVBQUU7QUFDVEcsV0FBSyxFQUFFO0FBREU7QUFENEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFNZWhCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc5YmEwYTU1NWQzNjY2NjM5YzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiXHJcbmltcG9ydCBTcGFjZXIgZnJvbSBcIi4uLy4uL3NwYWNlclwiXHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCh7XHJcbiAgbmFtZTogWXVwLnN0cmluZygpLm1pbigyKS5tYXgoMjApLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAuZW1haWwoXCJJbnZhbGlkIEVtYWlsLlwiKVxyXG4gICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBtZXNzYWdlOiBZdXAuc3RyaW5nKCkubWluKDIpLm1heCgxMDApLnJlcXVpcmVkKCdSZXF1aXJlZCcpXHJcbn0pO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQgfSA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICBvblN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnNvbGUubG9nKHRvdWNoZWQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBuYW1lJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLm5hbWV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgLz5cclxuICAgICAge2Vycm9ycy5uYW1lID8gZXJyb3JzLm5hbWUgOiBudWxsfVxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBlbWFpbCd9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWVzPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvcnMuZW1haWwgPyBlcnJvcnMuZW1haWwgOiBudWxsfVxyXG4gICAgICA8U3BhY2VyIHNwYWNpbmc9ezJ9Lz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPXsnRW50ZXIgeW91ciBtZXNzYWdlJ31cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlcz17dmFsdWVzLm1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvcnMubWVzc2FnZSA/IGVycm9ycy5tZXNzYWdlIDogbnVsbH1cclxuICAgICAgPFNwYWNlciBzcGFjaW5nPXsyfS8+IFxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgY29sb3I6ICdpbmhlcml0J1xyXG4gIH1cclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9