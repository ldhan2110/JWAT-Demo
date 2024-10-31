console.log(sum1(1, 2)); // This will not work.
console.log(sum2(1, 2)); // This will work.


// Arrow Function
const sum1 = (a, b) => {
    return a + b;
}

// Function Declaration
function sum2(a, b) {
    return a + b;
}

/**The hoisting mechanisim of JS allow Function Declaration will always be defined first when compiling