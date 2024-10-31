
/**THIS IS SOME OF THE MOST COMMON & USEFUL ARRAY METHODS YOU NEED TO AWARE*/
const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11]

// map: this will loop through array & do the callback function and return a new array
const newArr = arr.map((item, index) => {
    return item * 2;
}) // This will return a new array thats double the every item value;


// reduce: run the accumulator function on the array
const sum = arr.reduce((acc, currentValue) => acc + currentValue, 0); // This will return 62


// Splice: used to remove, also replace a specific object in array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");


// filter: used to filter item in array
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);  //This will return any words that have length > 6 characters


//Some: used to check if array have some elements satisfy the callback function
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;