const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function(res) {

    console.log(res.data);

    const jokeJSON = JSON.stringify(res.data.joke);

    // console.log(jokeJSON);

    fs.appendFile("jokes.txt", jokeJSON, function(err) {
      if (err){
        throw err;
      }
    });

    console.log(jokes.txt)

  });
