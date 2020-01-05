console.log("I work! Go me!");

console.log(process.argv);

var a;
a = process.argv[2];
var b;
b = process.argv[3];

// function checkPair(arg1, arg2) {
//     if (arg1 === arg2) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// };
// console.log(arg1);
// console.log(arg2);

if (a === b) {
    console.log(true);
} else {
    console.log(false);
}


