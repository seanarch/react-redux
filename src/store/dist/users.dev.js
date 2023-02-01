"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.userAdded = void 0;

var _toolkit = require("@reduxjs/toolkit");

var lastId = 0;
var slice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: function userAdded(users, action) {
      users.push({
        id: ++lastId,
        name: action.payload.name
      });
    }
  }
});
var userAdded = slice.actions.userAdded;
exports.userAdded = userAdded;
var _default = slice.reducer;
exports["default"] = _default;