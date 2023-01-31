"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _bugs = _interopRequireDefault(require("./bugs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)(_bugs["default"], (0, _reduxDevtoolsExtension.devToolsEnhancer)({
  trace: true
}));
var _default = store;
exports["default"] = _default;