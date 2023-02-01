"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBugsByUser = exports.getUnresolvedBugs = exports["default"] = exports.bugAssignedToUser = exports.bugResolved = exports.bugAdded = void 0;

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
        resolved: false,
        teamMemberId: []
      });
    },
    bugResolved: function bugResolved(bugs, action) {
      var index = bugs.findIndex(function (bug) {
        return bug.id === action.payload.id;
      });
      bugs[index].resolved = true;
    },
    bugAssignedToUser: function bugAssignedToUser(bugs, action) {
      var _action$payload = action.payload,
          bugId = _action$payload.bugId,
          userId = _action$payload.userId;
      var index = bugs.findIndex(function (bug) {
        return bug.id === bugId;
      });
      bugs[index].userId = userId;
    }
  }
});
var _slice$actions = slice.actions,
    bugAdded = _slice$actions.bugAdded,
    bugResolved = _slice$actions.bugResolved,
    bugAssignedToUser = _slice$actions.bugAssignedToUser;
exports.bugAssignedToUser = bugAssignedToUser;
exports.bugResolved = bugResolved;
exports.bugAdded = bugAdded;
var _default = slice.reducer;
exports["default"] = _default;
var getUnresolvedBugs = (0, _toolkit.createSelector)(function (state) {
  return state.entities.bugs;
}, function (state) {
  return state.entities.projects;
}, function (bugs, projects) {
  return bugs.filter(function (bug) {
    return !bug.resolved;
  });
});
exports.getUnresolvedBugs = getUnresolvedBugs;

var getBugsByUser = function getBugsByUser(userId) {
  return (0, _toolkit.createSelector)(function (state) {
    return state.entities.bugs;
  }, function (bugs) {
    return bugs.filter(function (bug) {
      return bug.userId === userId;
    });
  });
};

exports.getBugsByUser = getBugsByUser;