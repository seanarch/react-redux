"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var func = function func(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (typeof action === "function") action(dispatch, getState);else next(action);
    };
  };
};

var _default = func;
exports["default"] = _default;