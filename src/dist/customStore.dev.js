"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createStore(reducer) {
  var state;
  var listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    // call the reducer to get the new state
    state = reducer(state, action);

    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe: subscribe,
    dispatch: dispatch,
    getState: getState
  };
}

var _default = createStore(_reducer["default"]);

exports["default"] = _default;