var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "username"
    },
    {
        type: "input",
        message: "What languages do you know?",
        name: "languages",
            choices: [
                "English",
                "French",
                "German",
                "Japanese",
                "Chinese",
                "Spanish",
                "Other"
            ]
    },
    {
        type: "input",
        message: "What is your preferred method of communication?",
        name: "prefered",

    }
])
.then(function(data) {

    var filename = data.name.toLowerCase().split('.').join('') + ".json";

    fs. writeFile(filename, JSON.stringify(data, null, '/t'), function (err {
        if (err) {
            
        }
    }))

    console.log(response);
})


