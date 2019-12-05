// pointers! Add them! THey're important!
var count = document.querySelector("#count");


// this is needed, a starting value
var number = 0;

// we need to change the count
// show this new count on the display

// document.getElementById("count").setAttribute(count)

// when the increment button is clicked
document.getElementById("increment").addEventListener("click", function() {
    // now, you can change the text content
    // by manipulating the variable
    // you used as a starting point
    count.textContent += number)
});


// when the decrement button is clicked
document.getElementById("decrement").addEventListener("click", function() {
// decrease the count by 1
// something something count -= 1

// unless the count has reached 0,
// then do not change the count

});