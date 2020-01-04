// 1. Object
const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

// CODE BELOW HERE

const {first: firstName, last: lastName} = arya;



console.log(firstName); // <= Arya
console.log(lastName); // <= Stark


// 2. Nested Object
const john = {
  first: "John",
  last: "Snow",
  title: "Prince",
  family: {
    brothers: {
      brother1: "Rob Stark",
      brother2: "Rickon Stark"
    },
    sisters: {
      sister1: "Arya Stark",
      sister2: "Sansa Stark"
    }
  }
};

// CODE BELOW HERE

// the stuff on the right of the assignment operator SHOULD BE AN OBJECT with the key values that you are defining
// This is why we write john.family.brothers, because the object we want to look at is called "brothers"
const { brother1, brother2 } = john.family.brothers;

// console.log(family);

console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark


// 3. Arrays
const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

// CODE BELOW HERE
const [name, alias, allegiance] = characters;

console.log(name, alias, allegiance); 


// 4. Strings
const skills = 'The Usurper, male, Baratheon, Cersei'; 

// CODE BELOW HERE
const [alias, gender, family, spouse] = skills.split(",");

 
console.log(alias, gender, family, spouse); // print them by variable name