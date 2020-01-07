var inquirer = require("inquirer");
var fs = require('fs');



inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    message: "Where u at?",
    name: "location",
  },
  {
    type: "input",
    message: "Tell me a bit about yourself!",
    name: "bio"
  },
  {
    type: "input",
    message: "What is your LinkedIn URL?",
    name: "linkedin"
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "github"
  },
  
]).then(function(data) {

    console.log(data);

    console.log("Success!");


    
  });

function genHTML(answers) {
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Mini-Project</title>
  </head>
  <body>
      <h1>This page is about you!</h1>
      <p>${answers.name}</p>
      <p>${answers.location}</p>
      <p>${answers.bio}</p>
      <p>${answers.linkedin}</p>
      <p>${answers.github}</p>
  </body>
  </html>`
};


