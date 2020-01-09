class Character {

  constructor(name, strength, hitpoints) {

    // VALIDATIONS
    if (!name) {
      throw new Error ("You are missing the name!");
    }
    if (!strength) {
      throw new Error ("You are missing the strength!");
    }
    if (!hitpoints) {
      throw new Error ("You are missing the hitpoints!");
    }
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
  // method which prints all of the stats for a character
  // ${} would make this a little cleaner, 
  printStats() {
    console.log(`Stats for ` + this.name + ` are as following:`);
    console.log(`Each attack will do ` + this.strength + ` damage.`);
    console.log(this.name + ` has ` + this.hitpoints +` hit points remaining!`);
    console.log("------------");
  }

  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if(this.hitpoints > 0) {
      console.log(this.name + " is still alive!");
      console.log("\n-------------\n");
      return true;
    }else{
      console.log(this.name + " has died :,( Pour one out for ya boi...");
      return false; 
    }
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`char1 hit char 2 for char1str!`)
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitpoints -= this.strength;
  }
}

// Create two unique characters using the "character" class
var catbug = new Character("Catbug", 5, 35);
    catbug.printStats();
    catbug.isAlive();

var impossibear = new Character("ImpossiBear", 8, 60)
    impossibear.printStats()
    impossibear.isAlive();

// Create an interval that alternates attacks every 2000 milliseconds
