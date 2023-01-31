"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.projectAdded = void 0;

var _toolkit = require("@reduxjs/toolkit");

var lastId = 0;
var slice = (0, _toolkit.createSlice)({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: function projectAdded(projects, action) {
      projects.push({
        id: ++lastId,
        name: action.payload.name
      });
    }
  }
});
var projectAdded = slice.actions.projectAdded;
exports.projectAdded = projectAdded;
var _default = slice.reducer;
exports["default"] = _default;