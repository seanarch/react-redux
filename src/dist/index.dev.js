"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _configureStore = _interopRequireDefault(require("./store/configureStore"));

var actions = _interopRequireWildcard(require("./store/bugs"));

var _projects = require("./store/projects");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _configureStore["default"])();
store.subscribe(function () {
  console.log("Store changed!");
});
store.dispatch(actions.bugAdded({
  description: 'Bug 1'
}));
store.dispatch(actions.bugAdded({
  description: 'Bug 2'
}));
store.dispatch(actions.bugAdded({
  description: 'Bug 3'
}));
store.dispatch(actions.bugResolved({
  id: 1
}));
store.dispatch((0, _projects.projectAdded)({
  name: 'New Project'
}));
console.log(store.getState()); // import store from "./store";
// import * as actions from "./actionTypes";
// import { bugAdded, bugResolved } from "./actions";
// const unsubscribe = store.subscribe(() => {
//     console.log("Store changed!", store.getState())
// })
// store.dispatch(bugAdded("Bug 1"))
// store.dispatch(bugResolved(1))
// unsubscribe();
// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })
// import { compose, pipe } from "lodash/fp";
// import { produce } from "immer";
// let input = "    JavaScript    ";
// let output = "<div>" + input.trim() + "</div>";
// const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrapInSpan = (str) => `<span>${str}</span>`;
// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();
// const pipeTransfrom = pipe(trim, toLowerCase, wrap("div"));
// //const transform = compose(wrapInDiv, toLowerCase, trim);
// //console.log(pipeTransfrom(input));
// const person = { name: "John" };
// console.log(person);
// const updated = { ...person, name: "Bob", age: 30 };
// console.log(updated);
// const numbers = [1, 2, 3];
// // Adding
// const added = [...numbers, 4];
// // [4, ...numbers]
// const index = numbers.indexOf(2);
// const before2 = [...numbers.slice(0, index)];
// const after2 = [...numbers.slice(index)];
// console.log("before2", before2);
// console.log("after2", after2);
// const added2 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
// console.log(added2);
// // Removing
// const removed = numbers.filter((n) => n != 2);
// console.log(removed);
// // Updating
// const updating20 = numbers.map((n) => (n === 2 ? 20 : n));
// console.log(updating20);
// let book = { title: "Harry Potter" };
// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.isPublished = true;
//   });
// }
// let updatedBook = publish(book);
// console.log(updatedBook);
// const someInput = { tag: "JAVASCRIPT" };
// const getWords = (str) => str.tag;
// const toLower = (str) => str.toLowerCase();
// const addSym = (str) => `"(${str})"`;
// const transform = pipe(getWords, toLower, addSym);
// console.log(transform(someInput));
// const recipe = {
//     name: "Spaghetti Bolognese",
//     ingredients: ['egg', 'salt']
// }
// console.log(recipe);
// function changeIng(rec) {
//     return produce(rec, (draftRec) => {
//         draftRec.ingredients = [...rec.ingredients, "cream"]
//     })
// }
// let newRec = changeIng(recipe)
// console.log(newRec)
// function changeEgg(rec) {
//     const temp = rec.ingredients.map(ing => ing === "egg" ? "egg white" : ing)
//     return produce(rec, (draftRec) => {
//         draftRec.ingredients = temp
//     })
// }
// let newRec2 = changeEgg(recipe)
// console.log(newRec2);
// function removeEgg(rec) {
//     return produce(rec, (draftRec) => {
//         const temp = rec.ingredients.filter(ing => ing !== "egg")
//         return produce(rec, (draftRec) => {
//             draftRec.ingredients = temp
//         })
//     })
// }
// let newRec3 = removeEgg(recipe)
// console.log(newRec3)