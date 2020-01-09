var Letter = require("..letter.js");

class Word {
    constructor(string) {
        this.letters = string.split("").map(function(char){
            return new Letter(char);
        })
    }
}

module.exports = Word;