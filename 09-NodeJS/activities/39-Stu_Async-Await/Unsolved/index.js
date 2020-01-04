const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    // read data from each file

    // do this one at a time using the async await syntax

      const {} = await inquirer.prompt({
        
      })
    // Parse this data from each file to objects using json. parse

    // store the animal objects into an array and stringify to convert 

    // save new combined animal JSON to json .file

    // print message to console taht this was successful
    // console.log("Success!");

  } catch(err) {

  }
}

combineAnimals();
