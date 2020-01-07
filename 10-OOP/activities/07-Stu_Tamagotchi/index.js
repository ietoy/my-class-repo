function DigiPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
};

const faeFox = new DigiPal;

console.log(faeFox);

DigiPal.prototype.feed() = function() {
    if (this.hungry === true) {
        console.log("That was yummy!");
        hungry === false;
        sleepy === true;
    } else {
        console.log("No thanks! I'm full");
    };
}