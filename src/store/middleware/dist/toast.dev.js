"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var toast = function toast(store) {
  return function (next) {
    return function (action) {
      if (action.type === "error") console.log("Toastify", action.payload.message);else next(action);
    };
  };
};

var _default = toast;
exports["default"] = _default;