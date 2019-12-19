var maths = require("./maths.js");

var operation = process.argv[2];

// parse int these!!!
var num1 = process.argv[3];
var num2 = process.argv[4];

switch(operation) {
    case 'sum':
        console.log(maths.sum(num1, num2));
        break;
    case 'difference':
        console.log(maths.difference(num1, num2));
        break;
    // add cases for product and quotient following this form
    default:
        console.log("Check your maths!");
}