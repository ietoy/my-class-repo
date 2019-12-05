var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

var mouseX = document.querySelector("#x");
var mouseY = document.querySelector("#y");


eventType.addEventListener("click", function toggleDisplay(event) {
    var value = event.target.value;
    if(value === "keydown") {
      mouseEventsEl.classList.add("hide");
      keyEventsEl.classList.remove("hide");
    }
    else {
      mouseEventsEl.classList.remove("hide");
      keyEventsEl.classList.add("hide");
    }
  }
)

// document.addEventListener();

// var targetEl;
// var xEl;
// var yEl;

document.addEventListener("click", function(event) {
  console.log(event);
  mouseX.innerText = (event.clientX);
})