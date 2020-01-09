// Here we are requiring the module exported from shape
const Shape = require("./shape");

// this is a sub constructor function that is an extension of the Shape constructor
class Rectangle extends Shape {
  // This takes in two params, side a and b
  constructor(sideA, sideB) {
    // we set the area of this new obj to equal the product of a and b
    const area = sideA * sideB;
    // similarly, the perimiter is equal to the sum of the products of each side times 2
    const perimeter = sideA * 2 + sideB * 2;

    // this looks at the super constructor, and feeds it the params needed based on the work we did above
    super(area, perimeter);
    
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();
