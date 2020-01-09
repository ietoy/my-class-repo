// this is our Shape constructor function
class Shape {
  // our constructor takes in two params, area and perimeter
  constructor(area, perimeter) {
    // here we set the key value pairs for this new object to equal the input parameters
    this.area = area;
    this.perimeter = perimeter;
  }

  // this function prints info by console logging the keys and values in the new object
  printInfo() {
    for (var key in this) {
      console.log(`${key}: ${this[key]}`);
    }
  }
}

// var bigbox = new Shape(400, 800);
// console.log(bigbox);
// bigbox.printInfo();

module.exports = Shape;
