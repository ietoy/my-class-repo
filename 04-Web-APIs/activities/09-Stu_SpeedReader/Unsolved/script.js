var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 5;

function prepareRead() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till speed read.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }
  }, 1000);
}
  
prepareRead()
  
  // Create the countdown timer.

  // Starts when the page is opened

  // counts down from 5

  // uses same speed as read speed (60wpm)


function speedRead() {
  

  // Print words to the screen one at a time.

  // loop that moves through poem array items

  // same speed as count down

  // 

}
