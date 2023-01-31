"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.bugResolved = exports.bugAdded = void 0;

var _toolkit = require("@reduxjs/toolkit");

var lastId = 0;
var slice = (0, _toolkit.createSlice)({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: function bugAdded(bugs, action) {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      });
    },
    bugResolved: function bugResolved(bugs, action) {
      var index = bugs.findIndex(function (bug) {
        return bug.id === action.payload.id;
      });
      bugs[index].resolved = true;
    }
  }
});
var _slice$actions = slice.actions,
    bugAdded = _slice$actions.bugAdded,
    bugResolved = _slice$actions.bugResolved;
exports.bugResolved = bugResolved;
exports.bugAdded = bugAdded;
var _default = slice.reducer;
exports["default"] = _default;