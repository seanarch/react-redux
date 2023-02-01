import configureStore from './store/configureStore'
import { bugAdded, bugResolved, getUnresolvedBugs, bugAssignedToUser, getBugsByUser } from './store/bugs'
import { projectAdded } from './store/projects'
import { userAdded } from './store/users';


const store = configureStore();

store.dispatch({
    type: "error",
    payload: { message: "An error occured." }
})

// store.subscribe(() => {
//     console.log("Store changed!");
// })

// store.dispatch((dispatch, getState) => {
//     dispatch({ type: "bugsReceived", bugs: [1, 2, 3] })
//     console.log(getState());
// })

// store.dispatch(userAdded({ name: "User 1" }))
// store.dispatch(userAdded({ name: "User 2" }))
// store.dispatch(bugAdded({ description: 'Bug 1' }))
// store.dispatch(bugAdded({ description: 'Bug 2' }))
// store.dispatch(bugAdded({ description: 'Bug 3' }))
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }))
// store.dispatch(bugResolved({ id: 1 }))

// store.dispatch(projectAdded({ name: 'New Project' }))

// const unresolvedBugs = getUnresolvedBugs(store.getState());

// console.log(unresolvedBugs)

// console.log(getBugsByUser(1)(store.getState()))



// import store from "./store";
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
