// declare a variable named ourArray and assign an empty array to it
var ourArray;
ourArray =[];

// we can `push` values into an array with the push method. Documentation can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// Let's push the number 1 into ourArray
ourArray.push(1);
console.log(ourArray);

// push the string "hello" into ourArray
ourArray.push("Hello");

// push the boolean false into ourArray
ourArray.push(false);

// push the number 84 into ourArray
ourArray.push(84);

// push the string "world" into our Array
ourArray.push("World");

// console log ourArray
console.log(ourArray);



// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 1--------------------------");

// declare a variable named oneToTen and assign it an array containing the numbers from 1 to 10
var oneToTen;
oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console log the element at index 4
console.log(oneToTen[4]);

// console log the element at index 7
console.log(oneToTen[7]);



// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 2--------------------------");

// We've declared this array for you
var numArray = [2, 65, 3, 7, 39, 22, 11, 94, 299, 9, 20, 21, 51, 37];
// iterate through numArray and create an individual console log for every number greater than 50
for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] > 50) {
    console.log(numArray[i]);
  }
}


// iterate through numArray and create an alert that tells us 
// the index of all the occurances of the number 11
for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] === 11) {
    alert(i);
  }
}


// iterate through numArray and console log the sum of all the numbers
// FIRST ATTEMPT
// for (var i = 0; i < numArray.length; i++) {
//   if (numArray[i] < numArray.length){
//     console.log(parseInt(numArray[i]) + parseInt(numArray[i + 1])); 
//   }
// }
var sum = 0;
for (var i = 0; i < numArray.length; i++) {
  sum = sum + numArray[i];
}
console.log(sum);

// iterate through numArray and console log the sum of all the numbers greater than 50

var sum = 0;
for (var i = 0; i <numArray.length; i++) {
  if (numArray[i] > 50) {
    sum = sum + numArray[i];
  }
}
console.log(sum);

// ASK FOR HELP WITH THIS ONE
// iterate through numArray and console log the sum of all the even numbers
var sum = 0; 
for (var i = 0; i < numArray.length; i++) {
  if (numArray[i]) {
    sum = sum + numArray[i];
  }
}
console.log(sum);


// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 3--------------------------");

// We've declared this array for you
var fruits = [
  "Apple", "Orange", "Banana", "Pomelo", "Apple", "Kiwi", "Peach", "Banana", "Grape", "Tomato", 
  "Kiwi", "Apple", "Watermelon", "Lemon", "Pomelo", "Apple", "Banana", "Peach", "Apricot", "Grape"];

  // iterate through fruits and console log the number of times "Apple" appears in the array
var appleAppearance = 0;
for (var i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apple") {
    appleAppearance++;
  }
}
console.log(appleAppearance);
// this logged 4


// iterate through fruits and console log the number of times "Peach" appears in the array
var peachAppearance = 0;
for (var i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Peach") {
    peachAppearance++;
  }
}
console.log(peachAppearance);
// this logged 2


// iterate through fruits and console log the number of fruits that start with "P" in the array
var pFruitAppearance = 0;
for (var i = 0; i < fruits.length; i++) {
  // we can access the different characters within a string with the charAt method
  // Javascript also treats strings as arrays so you can also use the index for reference
  // var currentFruit = fruits[i];
  // currentFruit[0] === "P";
  if (fruits[i].charAt(0) === "P") {
    pFruitAppearance++;
  }
}
console.log(pFruitAppearance);


// create a new empty array named uniqueFruits

var uniqueFruits = [];

// iterate through fruits and populate uniqueFruits with only unique values from fruits

for (var i = 0; i < fruits.length; i++) {
  if (!uniqueFruits.includes(fruits[i])) {
    uniqueFruits.push(fruits[i]);
  }
}
// you should a shorter array without repeated values

// console log out your uniqueFruits array
console.log(uniqueFruits);



// This seperator is here to make your console logs a little easier to read 
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 4--------------------------");

// CHALLENGE (Optional!)
// In this challenge we're going to be working with nested arrays. 
// You can store any type of data within an array- even other arrays!
var twoDimArray = [
  [54, 6, 7, 46, 78],
  [43, 9, 6, 65, 65],
  [32, 1, 44, 1, 23],
  [55, 12, 2, 34, 2],
  [2, 12, 44, 2, 12]];
// another seperator for your convenience
console.log("     first array      ");
// iterate through the first array inside twoDimArray and console log all the numbers less than 25

for (var i = 0; i < twoDimArray.length; i++)
  if (twoDimArray[0][i] < 25) {
    console.log(twoDimArray[0][i]);
  }

// another seperator for your convenience
console.log("     second array      ");
// iterate through the second array inside twoDimArray and console log all the numbers less than 25
for (var i = 0; i < twoDimArray.length; i++)
  if (twoDimArray[1][i] < 25) {
    console.log(twoDimArray[1][i]);
  }

// another seperator for your convenience
console.log("     third array      ");
// iterate through the third array inside twoDimArray and console log all the numbers less than 25
for (var i = 0; i < twoDimArray.length; i++)
  if (twoDimArray[2][i] < 25) {
    console.log(twoDimArray[2][i])
  }
  
// another seperator for your convenience
console.log("     fourth array      ");
// iterate through the fourth array inside twoDimArray and console log all the numbers less than 25

for (var i = 0; i < twoDimArray.length; i++)
  if (twoDimArray[3][i] < 25) {
    console.log(twoDimArray[3][i]);
  }

// another seperator for your convenience
console.log("     fifth array      ");
// iterate through the fifth array inside twoDimArray and console log all the numbers less than 25
for (var i = 0; i < twoDimArray.length; i++)
  if (twoDimArray[4][i] < 25) {
    console.log(twoDimArray[4][i]);
  }



// another seperator for your convenience
console.log("     odd numbers      ");
// iterate through twoDimArray and the arrays inside of it and console log all the odd numbers
for (var outerIndex = 0; outerIndex < twoDimArray.length; outerIndex++)
  for (var innerIndex = 0; innerIndex < twoDimArray[outerIndex][innerIndex]; innerIndex++)
    if ((twoDimArray[outerIndex][innerIndex]) % 2 === 1) {
      console.log(twoDimArray[outerIndex][innerIndex]);
    }


// another seperator for your convenience
console.log("     sum of multiples of 3      ");
// iterate through twoDimArray and the arrays inside of it and 
// console log the sum of all the numbers that are a multiple of 3

var sum = 0;
for (var outerIndex=0; outerIndex<twoDimArray.length; outerIndex++)
  for (var innerIndex=0; innerIndex<twoDimArray[outerIndex][innerIndex]; innerIndex++)
    if ((twoDimArray[outerIndex][innerIndex]) % 3 === 0) {
      sum = sum + twoDimArray[outerIndex][innerIndex]
    }
console.log(sum)



