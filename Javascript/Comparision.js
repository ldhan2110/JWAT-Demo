// Example 1:
let value1 = 0;
let value2 = "0"; // you can try with "boolean" (false) as well

console.log(value1 == value2); // This will return true, will only compare values.
console.log(value1 === value2); // This will be false, because the type is mismatch (number, string);

// Example 2:
let person1 = {
    firstname: "John",
    lastname: "Cena"
}

let person2 = {
    firstname: "John",
    lastname: "Cena"
}

console.log(person1 == person2);  // This will be false
console.log(person1 === person2);  //This will be false either, because when comparing to object, JS use it reference to compare.
console.log(JSON.stringify(person1) == JSON.stringify(person2)); // This will return true;