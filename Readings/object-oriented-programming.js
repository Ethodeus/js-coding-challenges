class Dog {
	constructor(name, species, size) {
		this.name = name;
		this.species = species;
		this.size = size;
	}

	bark() {
		if (this.size > 60) {
			return `Grrr! Grrr!`;
		} else {
			return `Woof! Woof!`;
		}
	}
}

//TODO -> Complete the following program to add the definition of the Dog class.

const fang = new Dog('Fang', 'boarhound', 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog('Snowy', 'terrier', 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//TODO -> Improve the example RPG to add character inventory management according to the following rules:

/*

Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

When a character slays another character, the victim's inventory goes to its vanquisher.

Here's the expected execution result.

*/

class Character {
	constructor(name, health, strength) {
		this.name = name;
		this.health = health;
		this.strength = strength;
		this.xp = 0; // XP is always zero for new characters
		this.gold = 10;
		this.keys = 1;
	}
	// Attack a target
	attack(target) {
		if (this.health > 0) {
			const damage = this.strength;
			console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
			target.health -= damage;
			if (target.health > 0) {
				console.log(`${target.name} has ${target.health} health points left`);
			} else {
				target.health = 0;
				const bonusXP = 10;
				console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`);
				this.xp += bonusXP;
				this.keys += target.keys;
				this.gold += target.gold;
				target.keys = 0;
				target.gold = 0;
			}
		} else {
			console.log(`${this.name} can't attack (they've been eliminated)`);
		}
	}
	// Return the character description
	describe() {
		return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points. ${this.gold} gold and ${this.keys} key(s)`;
	}
}
//Now we can introduce a monster in the game and make it fight our players. Here's the rest of the final code of our RPG.

const aurora = new Character('Aurora', 150, 25);
const glacius = new Character('Glacius', 130, 30);

console.log('Welcome to the adventure! Here are our heroes:');
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character('Spike', 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());
