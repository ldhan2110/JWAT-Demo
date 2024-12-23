"use strict";
// Awaited: remove the Promise outer from the type
async function doSomething() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
}
const todo = {
    title: "Delete inactive users",
};
const cats = {
    age: { age: 10, breed: "Persian" },
    breed: { age: 5, breed: "Maine Coon" },
};
