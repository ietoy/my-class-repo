// Function accepts a string and a function as arguments. should log the string then return the function

function strFx() {
    console.log("Hello there...")
};

// establish the function parameters
var newFx = function(str, fx) {
    console.log(str);
    return fx;
}

var obiQuote = "Obi Wan once said,";

newFx(obiQuote, strFx());


// write a function that accepts a boolean and a fx as arguments, it should run the function if and only if the boolean is true

function (bool, boolFx());