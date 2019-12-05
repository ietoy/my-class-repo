
// the variable imageContainer looks at the div with the class "img-container"
var imageContainer = document.querySelector(".img-container");

// this adds an event listener to imageContainer that triggers on click
imageContainer.addEventListener("click", function(event) {
  // on click, we initate this function
  // first, we define the element as the event target
  // this specifies that the stuff the function does only works on the area clicked.
  var element = event.target;


  // if the element clicked on is an "img"
  if (element.matches("img")) {
    // here we define the state of the element in the js
    // by using getAttribute to check the "data-state" of the element
    var state = element.getAttribute("data-state");
    // AND if the state of the element is still
    if (state === "still") {
      // we change data-state to animate
      element.setAttribute("data-state", "animate");
      // and we change the source of the image tag to data-animate
      // which is already stored in the image
      element.setAttribute("src", element.getAttribute("data-animate"));
      // otherwise, if the state of the clicked element is animate,
    } else if (state === "animate") {
      // change the data state to still
      element.setAttribute("data-state", "still");
      // and change the img src to the data-still img
      element.setAttribute("src", element.getAttribute("data-still"));
    }
  }
});


// note for futre activities
// pay attention to flow
// ask what can i reference