// define a function "warble" that takes in a string as an argument,
// appends " arglebargle" to the end of it, and returns the result
function warble(string){
    var result = string + "arglebargle";
    return result;
};

// console log the result of calling your "warble" function with the argument "hello"
console.log(warble("hello"))

// this is the code snippet from the solution page:
var result = warble("hello");
console.log(result);

// define a function "wibble" that takes a string as an argument,
// console logs the argument, prepends "wibbly " to the argument, and returns the result
function wibble(string) {
    console.log(string)
    var result = "wibbly " + string;
    return result;
};

// console log the result of calling your "wibble" function with the argument "bibbly"
var result = wibble("bibbly");
console.log(result);

// define a function "consoleSum" that takes in two numbers as arguments
// and console logs the sum of those two numbers
function consoleSum (num1, num2) {
    console.log(num1 + num2);
}

// testing your function - un-comment the following two lines when you have finished your function
console.log("The following should be 5");
consoleSum(2, 3);

// define a function "returnSum" that takes in two numbers as arguments
// and returns the sum of those two numbers
function returnSum(num1, num2) {
    var result = num1 + num2;
    return result;
}

// testing your function - un-comment the following two lines when you have finished your function
console.log("The following should be 12");
console.log(returnSum(5, 7));

// using either "consoleSum" or "returnSum" and no mathematical operators,
// define a function that takes in 3 arguments and finds the sum of those 3 numbers

// I tried this, it didnt work, i think because both elements fromthe function have to be
// returnSum products, because the return makes the output a workable element for use 
// // elsewhere in the code.
// var result = consoleSum(5, 10)
// console.log(returnSum(15, result));



// second attempt, defined first returnSum as a var, tried running returnSun on that sum plus the third number
// function threeSum(num1, num2, num3) {
//     var result = returnSum(num1, num2);
//     (returnSum(result, num3));
// }

// console.log("The following number should be 15.")
// console.log(threeSum(3, 5, 7))


// I was close to the solution, I have to define the SUMS as variables which get their answers from returnSum,
// then i return the sum of all of the numbers

function threeSum(num1, num2, num3) {
    var sum1 = returnSum(num1, num2);
    var sum2 = returnSum(sum1, num3);
    return sum2
}

console.log("The following number should be 30.");
console.log(threeSum(3, 7, 20))

// define a function "danceParty" that takes in a string as an argument,
// creates an alert that says "dance!",
// saves the result of calling your "wibbly" function with that argument,
// saves the result of calling your "warble" function with that argument,
// concatenates the two results together and returns that string

function danceParty(string) {
    alert("dance!")
    var result1 = wibble(string);
    var result2 = warble(string);
    var returnValue = result1 + " " + result2;
    return returnValue;
};

// console log the result of calling your "danceParty" function with your name as the argument

// console.log(danceParty(Ian Toy));

console.log(danceParty("Ian"));