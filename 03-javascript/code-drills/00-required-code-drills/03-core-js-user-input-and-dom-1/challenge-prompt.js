// User Input and Writing to DOM 1



// Declare a variable `userName`
var userName;
userName = prompt("What is your name?");

// Prompt the user for their name and store their response into `userName`
// hint: use javascript's built in `prompt` method



// Create an alert welcoming the user to the "Sandwich Shop" using the name they just gave us

alert("Welcome to the sandwich shop, " + userName +"!");


// Using the `confirm` method, ask the user if they would like a sandwich
// Store their response into a new `wantsSandwich` variable

var wantsSandwich;
wantsSandwich = confirm("Would you like a sandwich, " + userName + "?");


// Check if the user wanted a sandwich


    // If the user did want a sandwich, use the `document.write` method to write "Your sandwich will be ready soon!" to the DOM
    if (wantsSandwich) {
        document.write("Your sandwich will be ready soon!")
    }
// Else, say goodbye to the user using the name they gave us earlier
    else {
        document.write("Goodbye " + userName + "!")
    }


