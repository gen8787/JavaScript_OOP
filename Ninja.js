class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`\nMy name is ${this.name}!\n`)
    }

    showStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}\n`)
    }

    drinkSake() {
        this.health += 10;
        console.log(`Drinking Sake - Health is now: ${this.health}`)
    }
}

const newNinja = new Ninja("Slice", 50);
newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();