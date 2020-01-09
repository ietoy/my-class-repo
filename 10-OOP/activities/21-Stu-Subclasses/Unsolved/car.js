const Vehicle = require("./vehicle");

class Car extends Vehicle {
    constructor(color, passengers, id, numberOfWheels, sound) {
        
        super(id, numberOfWheels, sound);

        this.color = color;
        this.passengers = passengers;
    }
    checkPassengers() {
        if (this.passengers > 4) {
            console.log("There are too many passengers!")
        }else{
            console.log("Still room for more!")
        }
    };
    useHorn() {

    };
}

const myCar = new Car ("blue", 4, "car", 4, "HONK!")
console.log(myCar);