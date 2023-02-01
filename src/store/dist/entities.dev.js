"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _bugs = _interopRequireDefault(require("./bugs"));

var _projects = _interopRequireDefault(require("./projects"));

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  bugs: _bugs["default"],
  projects: _projects["default"],
  users: _users["default"]
});

exports["default"] = _default;