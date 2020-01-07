// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties

var dogs = new Animal(false, "Woof!");
var cats = new Animal(false, "Meow!");
var fox = new Animal(false, "Fraka-kaka-kaka-kaka-kow!");
var mice = new Animal(true, "Squeak!");

// Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();
fox.makeNoise();
mice.makeNoise();

// If we want, we can change an objects properties after they're created
// cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);