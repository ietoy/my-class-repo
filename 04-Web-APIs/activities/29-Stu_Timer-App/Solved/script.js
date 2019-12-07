var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var status = "Working";
var interval;

getTimePreferences();

function getFormattedMinutes() {
  var secondsLeft = totalSeconds - secondsElapsed;

  var minutesLeft = Math.floor(secondsLeft / 60);

  var formattedMinutes;

  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }

  return formattedMinutes;
}

function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

// this is the setTime function, which when run
function setTime() {
  // defines the variable minutes
  var minutes;

  // if the status of the toggle switch is working,
  if (status === "Working") {
    // the minutes variable will be set to 
    // the workMinutesInput.value
    minutes = workMinutesInput.value.trim();
    // otherwise,
  } else {
    // the minutes variable will be set to the
    // restMinutesInput.value
    minutes = restMinutesInput.value.trim();
  }
  // then, the function clears interval
  clearInterval(interval);
  // and defines total seconds as minutes times 60
  totalSeconds = minutes * 60;
}

// this is the renderTime Function
function renderTime() {
  // it references the minutesDisplay and secondsDisplay
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();
  // and sets their respective textContent to be the result of
  // the functions getFormatedMinutes/seconds respectively


  // IF the seconds elapsed is greater than or equal to
  // the totalSeconds
  if (secondsElapsed >= totalSeconds) {
    // AND IF the toggle status is set to working
    if (status === "Working") {
      // alert the user that it is time for a break
      alert("Time for a break!");
      // otherwise, once the first condition is met,
      // (secondsElapsed is greater than or equal to 
      // total seconds...)
    } else {
      // Alert the user that it is time to get back to work
      alert("Time to get back to work!");
    }
    // then stop the timer 
    stopTimer();
  }
}

// this is the function that starts the timer
function startTimer() {
  // first, it runs the function setTime
  setTime();

  // then it sets the variable interval, which has 
  // been defined globally, to the setInterval function,
  // which increases the seconds elapsed by 1 every second, 
  // and runs the renderTime to show the time remaining
  // on the dom
  interval = setInterval(function() {
    secondsElapsed++;
    renderTime();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  renderTime();
}

function stopTimer() {
  secondsElapsed = 0;
  setTime();
  renderTime();
}

function toggleStatus(event) {
  var checked = event.target.checked;

  if (checked) {
    status = "Working";
  } else {
    status = "Resting";
  }

  statusSpan.textContent = status;

  secondsElapsed = 0;
  setTime();
  renderTime();
}

function getTimePreferences() {
  var preferences = JSON.parse(localStorage.getItem("preferences"));

  if (preferences) {
    if (preferences.workMinutes) {
      workMinutesInput.value = preferences.workMinutes;
    }

    if (preferences.restMinutes) {
      restMinutesInput.value = preferences.restMinutes;
    }
  }

  setTime();
  renderTime();
}

function setTimePreferences() {
  localStorage.setItem(
    "preferences",
    JSON.stringify({
      workMinutes: workMinutesInput.value.trim(),
      restMinutes: restMinutesInput.value.trim()
    })
  );
}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
statusToggle.addEventListener("change", toggleStatus);
