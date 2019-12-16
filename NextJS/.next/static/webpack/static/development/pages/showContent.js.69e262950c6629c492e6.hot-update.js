webpackHotUpdate("static/development/pages/showContent.js",{

/***/ "./pages/showContent.js":
/*!******************************!*\
  !*** ./pages/showContent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/actions */ "./redux/actions/actions.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search */ "./pages/search.js");

var _jsxFileName = "/Users/pro/Desktop/test-task/next-js/with-redux-thunk-app/pages/showContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: calc(100% /3 - 50px);\n  padding: 20px;\n  justify-content: center;\n  .filmName{\n    text-align: center;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-wrap: wrap-reverse;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function ShowContent(props) {
  var films = props.films;
  var filmContent = films.map(function (e) {
    var show = e.show;

    var validationImg = function validationImg(value) {
      if (value && value.medium != null) {
        return value.medium;
      } else {
        return '';
      }
    };

    var validationArr = function validationArr(value) {
      if (value.length >= 1) {
        return value.join(', ');
      } else return value;
    };

    return __jsx(FilmWrapper, {
      key: show.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "filmName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, show.name)), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, validationArr(show.genres))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("img", {
      onClick: function onClick() {
        return props.actions.withShowFilm(show.id, router.push({
          pathname: "/filmDeskription",
          query: {
            id: id
          }
        }));
      },
      src: validationImg(show.image),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })));
  });
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, filmContent));
}

function mapStateToProps(_ref) {
  var search = _ref.search;
  return {
    films: search.contents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_4__, dispatch)
  };
}

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var FilmWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ShowContent));

/***/ }),

/***/ "./redux/actions/actions.js":
/*!**********************************!*\
  !*** ./redux/actions/actions.js ***!
  \**********************************/
/*! exports provided: search, searchSuccess, clearInputValue, ShowFilm, withShowFilm, withSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSuccess", function() { return searchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInputValue", function() { return clearInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFilm", function() { return ShowFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withShowFilm", function() { return withShowFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSearch", function() { return withSearch; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ "./redux/actions/action-types.js");
/* harmony import */ var _components_history_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/history/history */ "./components/history/history.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


 // import Router from 'next/router';


var search = function search(value) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["SEARCH"],
    value: value
  };
};
var searchSuccess = function searchSuccess(data) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["GET_SEARCH_SUCCESS"],
    payload: data
  };
};
var clearInputValue = function clearInputValue() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_INPUT_VALUE"]
  };
};
var ShowFilm = function ShowFilm(data) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["SHOW_FILM"],
    payload: data
  };
};
var withShowFilm = function withShowFilm(id) {
  return function (dispatch) {
    var queryToUrl = id;
    var url = "http://api.tvmaze.com/shows/".concat(queryToUrl);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (_ref) {
      var data = _ref.data;

      if (data) {
        dispatch(ShowFilm(data)); // const router = useRouter()
        // router.push({pathname: `/filmDeskription`, query: {id}})
        // Router.push({pathname: `/film`, query: {id}})
        // console.log(history)
      }
    })["catch"](function (err) {});
  };
};
var withSearch = function withSearch(query) {
  return function (dispatch) {
    var queryToUrl = query;
    var url = "http://api.tvmaze.com/search/shows?q=".concat(queryToUrl);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (_ref2) {
      var data = _ref2.data;

      if (data) {
        dispatch(searchSuccess(data));
        router.push({
          pathname: "/film",
          query: {
            id: id
          }
        });
        console.log(_components_history_history__WEBPACK_IMPORTED_MODULE_2__["default"]);
      }
    })["catch"](function (err) {});
  };
};

/***/ })

})
//# sourceMappingURL=showContent.js.69e262950c6629c492e6.hot-update.js.map