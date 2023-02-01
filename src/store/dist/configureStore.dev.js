"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _toolkit = require("@reduxjs/toolkit");

var _reducer = _interopRequireDefault(require("./reducer"));

var _logger = _interopRequireDefault(require("./middleware/logger"));

var _toast = _interopRequireDefault(require("./middleware/toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _default() {
  return (0, _toolkit.configureStore)({
    reducer: _reducer["default"],
    middleware: [].concat(_toConsumableArray((0, _toolkit.getDefaultMiddleware)()), [(0, _logger["default"])({
      destination: "console"
    }), _toast["default"]])
  });
}