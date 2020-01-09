class Toy {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

// var trashMasters = new Toy("TrashMasters", 9.99, 20);
//     console.log(trashMasters)

const toys = [
  new Toy("Action Figure", 14.99, 5),
  new Toy("Rare Toy", 17.99, 1)
];

console.log(toys);

module.exports = {
  Toy,
  toys
};
