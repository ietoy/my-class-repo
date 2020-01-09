class Store {
  // code here
  constructor(name, stock, revenue) {
    this.name = name;
    this.stock = stock;
    this.revenue = revenue;
  }

  processProductSale(name) {
    revenue += name.price;
    name.count -= 1;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

processProductSale("Action Figure")

module.exports = Store;
