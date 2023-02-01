"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var logger = function logger(param) {
  return function (store) {
    return function (next) {
      return function (action) {
        console.log("Logging", param);
        next(action);
      };
    };
  };
};

var _default = logger;
exports["default"] = _default;