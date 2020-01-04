const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  for(const animal of animalJSON) {
    // console.log(animal);

    const {species} = animal;

    if (species === "dog") {
      dogs.push(animal);

    } else if (species === "cat") {
      cats.push(animal);
    }

  }

  // Turn the arrays into JSON strings so they can be written to files

                // CHECK DOCS!---arr--replace--space
  const dogJSON = JSON.stringify(dogs, null, 2);
  const catJSON = JSON.stringify(cats, null, 2);

  // console.log(dogJSON);
  // console.log(catJSON);

  fs.writeFile("dogs.json", dogJSON, function(err) {
    if (err) {
      throw err
    }
    console.log("Made the dog file thingy!")
  })

});
