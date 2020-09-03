/*
In this game there will be two different types of Cards: Units and Effects. Units will be played to gain control of the board and will battle with units played by an opponent. Effects require a Unit to be targeted in order to be played.

Effects will require a "target" when they are played. They increase or decrease either the power or the resilience of the "Unit" that they target. Similarly "Units" can attack other "Units", when they do they decrease the target's "resilience" by the attacker's "power".
*/

class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor (name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        // reduce target res by power
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor (name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play(target) {
        if( target instanceof Unit ) {
            // implement card text here
            console.log(`\n${this.text}`);
            // target.res += this.mag;
            // target.power += this.mag;

            if (this.stat == "resilience") {
                target.res += this.mag;
            } else if (this.stat == "power") {
                target.power += this.mag;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const effectHardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const effectPromRej = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const effectPairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Play out the following scenario:
    // Turn 1 - Player 1 summons "Red Belt Ninja" (name, cost, power, res)
        const unitRedNinja = new Unit("Red Belt Ninja", 3, 3, 4);
        console.log(`${unitRedNinja.name} - Power: ${unitRedNinja.power} Resilience: ${unitRedNinja.res}`);

    // Turn 1 - Player 1 plays "Hard Algorithm" on "Red Belt Ninja"
        effectHardAlgo.play(unitRedNinja);
        console.log(`${unitRedNinja.name} - Power: ${unitRedNinja.power} Resilience: ${unitRedNinja.res}`);

    // Turn 2 - Player 2 summons "Black Belt Ninja"
        const unitBlackNinja = new Unit("Black Belt Ninja", 4, 5, 4);
        console.log(`\n${unitBlackNinja.name} - Power: ${unitBlackNinja.power} Resilience: ${unitBlackNinja.res}`);

    // Turn 2 - Player 2 plays "Unhandled Promise Rejection" on "Red Belt Ninja"
        effectPromRej.play(unitRedNinja);
        console.log(`${unitRedNinja.name} - Power: ${unitRedNinja.power} Resilience: ${unitRedNinja.res}`);

    // Turn 3 - Player 1 plays "Pair Programming" on "Red Belt Ninja"
        effectPairProg.play(unitRedNinja);
        console.log(`${unitRedNinja.name} - Power: ${unitRedNinja.power} Resilience: ${unitRedNinja.res}`);

    // Turn 3 - Player 1 has "Red Belt Ninja" attack "Black Belt Ninja"
        unitRedNinja.attack(unitBlackNinja);
        console.log(`\n${unitBlackNinja.name} - Power: ${unitBlackNinja.power} Resilience: ${unitBlackNinja.res}`);