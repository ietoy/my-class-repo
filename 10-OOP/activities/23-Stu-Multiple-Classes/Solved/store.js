class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  // this is our processProductSale function that takes in a name as a parameter
  processProductSale(name) {
    // we look at the stock of our store and run a function forEach that takes an item in as a parameter
    this.stock.forEach(item => {
      // if the name of the item equals a name
      if (item.name === name) {
        // and if the item count is greater than zero
        if (item.count > 0) {
          // we decrement the item count by one
          item.count--;
          // then we increase the store revenue by the price of the item
          this.revenue += item.price;
          // we then console.log that the item was purchased for its price
          console.log(`Purchased ${item.name} for ${item.price}`);
        } else {
          // if the item is out of stock, we console.log this
          console.log(`Sorry, ${item.name} is out of stock!`);
        }
      }
    });
  }

  // this is our replenishStock function, which takes in a name and a count as parameters
  replenishStock(name, count) {
    // we look at the stock for this item and run a function for each that takes in an item as a parameter
    this.stock.forEach(item => {
      // if the item name is equal to a name of a toy in our store.
      if (item.name === name) {
        // increment the item count by the number inputed into the funciton
        item.count += count;
        // console.log the change
        console.log(`Replenished ${item.name} by ${item.count}`);
      }
    });
  }

  
  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
