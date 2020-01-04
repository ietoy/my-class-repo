// our function waits for an amount of seconds fed by the user
function waitFor(seconds) {
  // we return with a new promise that has a resolution case and a reject case
  return new Promise(function(resolve, reject) {
    // within this promise, if the the number of seconds is NaN OR is less than 1
    if (isNaN(seconds) || seconds < 1) {
      // return with the reject case and the error message below
      return reject(Error("Parameter 'seconds' must be a positive number!"));
    }
    // Otherwise, setTimeout function shows success after however many seconds are fed above
    setTimeout(function() {
      resolve("Success!");
    }, seconds * 1000);
  });
}

waitFor(2)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.log(err);
  });
