class Letter {
    constructor(char) {
        this.visible = !/[a-z1-9]/i.test(char);
        this.char = char;
    };

    toString() {
        if (this.visible === true) {
            return this.char;
        }else{
            return "_";
        }
    }

    guess(char) {
        if (char === this.char) {
            this.visible = true;
            return true;
        }else{
            return false;
        }
    }
    getSolution() {
        return this.char;
    }


}

const testLetter = new Letter("Q");
console.log(testLetter);
console.log(testLetter.toString());


module.exports = Letter;
