class Vehicle {
  constructor(id, numberOfWheels, sound) {
    this.id = id;
    this.numberOfWheels = numberOfWheels;
    this.sound = sound;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels.`);
    console.log(`This vehicle has an id of ${this.id}.`);
    console.log(`This vehicle makes the ${this.sound} sound.`)
  }
}

// var scooter = new Vehicle("scooter", 2, "oink-oink");
// scooter.printInfo();

module.exports = Vehicle;
