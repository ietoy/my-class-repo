// 1. Configure Server
var express = require("express");

var app = express();
var PORT = 3000;

//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  
  var obj = {};

  var domainsAndCount = [];

  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    domainsAndCount.push(arr[i].split(" "))
  }

  for (var i = 0; i < arr.length; i++) {
    var visits = parseInt(domainsAndCount[i][0]);
    var domain = domainsAndCount[i][1]

    var subDomains = domain.split(".")
  }





  // ===================================================
}

getNumVisits(input);


// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  






  // ===================================================


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})

// 1. Create server