//Example 1: The different between redeclaration.
var value1 = 0;
let value2 = 1;
var value1 = 1; // You can re-declare the var without issues.
let value2 = 2; //However, this will result error.


//Example 2: the different in calling before calling the initialization
console.log(a);
console.log(b);
let a = 10;  // This will throw Exception
var b = 10   // However this will return undefined.


//Example 3: This demo demonstrate the scoped of the "B"
function f() {
    if (true) {
        let b = 9

        // It prints 9
        console.log(b);
    }

    // It gives error as it
    // defined in if block
    console.log(b);
}
f()

//Example 4: Let's check with the "var"
function f() {
    if (true) {
        var b = 9

        // It prints 9
        console.log(b);
    }

    // This will also print 9
    console.log(b);
}
f()