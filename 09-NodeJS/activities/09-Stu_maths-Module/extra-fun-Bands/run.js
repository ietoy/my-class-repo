var bandList = require("./bands.js/index.js");

// console.log(bands.all)

// loop thru badn list and print out details

for (var key in bandList.bands) {
    console.log("A " + key + " band is " + bandList.bands[key] + ".");
}