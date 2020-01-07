function Character(name, profession, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hp = hp;

}

const Windgrace = new Character("Lord Windgrace", "Warrior", "385", "7", "150");
console.log(Windgrace);

const Freyalise = new Character("Freyalise of Llanowar", "Druid", "5,209", "3", "230");
console.log(Freyalise);

Character.prototype.IsAlive = function() {
    if (this.hp > 0) {
        console.log(`${this.name} is alive!`)
    } else {
        console.log(`${this.name} has fallen!`)
    }
};

// must define this function if called, look at line 16 above, do so like this
var hasOwnProperty;

console.log(Windgrace.hasOwnProperty('name'));
console.log(Windgrace.hasOwnProperty('IsAlive'));
console.log(Character.prototype.hasOwnProperty('IsAlive'));
