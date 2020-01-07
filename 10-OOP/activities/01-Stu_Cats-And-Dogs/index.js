const dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function() {
        if (this.raining === true) {
            console.log(dogs.noise)
        }
    },
};

dogs.makeNoise();

const cats = {
    raining: true,
    noise: "Meow!",
    makeNoise: function() {
        if (this.raining === true) {
            console.log(cats.noise)
        }
    },
};

cats.makeNoise();

function massHysteria() {
    if (dogs.raining === true && cats.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }
};

massHysteria();