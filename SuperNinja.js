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
        console.log(`\nDrinking Sake - Health is now: ${this.health}\n`)
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Wise message here.\n")
    }

    showStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}\nWisdom: ${this.wisdom}`)
    }
}

const newSensei = new Sensei("Super Slicer")
newSensei.speakWisdom();
newSensei.showStats();