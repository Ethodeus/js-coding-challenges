//* Adding character experience

//TODO Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

const ethodeus = {
	name: 'Ethodeus', //dont' forget the comma after every property, except the last one.
	health: 150,
	strength: 50,
	xp: 100,

	describe() {
		return `${this.name} has ${this.health} health points and ${this.strength} points of strength, with a total of ${this.xp} experience gained.`;
	},
};

// Aurora is harmed by an arrow
ethodeus.health -= 20;

// Aurora equips a strength necklace
ethodeus.strength += 10;

// Aurora learn a new skill
ethodeus.xp += 15;

console.log(ethodeus.describe());

//* Modeling a Dog

//TODO Complete the following program to add the dog object definition.

const dog = {
	name: 'Fang',
	species: 'boarhound',
	size: 75,

	bark() {
		return 'Grrr! Grrr!';
	},
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//* Modeling a circle

//TODO Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt('Enter the circle radiusin centimeters:'));

const circle = {
	radius: r,

	circumference() {
		return (2 * Math.PI * this.radius).toFixed(3);
	},

	area() {
		return (Math.PI * this.radius ** 2).toFixed(3);
	},
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

//* Modeling a bank account

//TODO Write a program that creates an account object with the following characteristics:

const account = {
	name: 'Sebastian',
	balance: 0,

	credit(x) {
		return (this.balance += x); //When you are referrring to a key in the object inside a method you can use the name of the key or the 'this' keyword
	},

	describeA() {
		return `owner: ${this.name}, balance: ${this.balance} `;
	},
};

//I receive a credit of 250
account.credit(250);

console.log(account.describeA());

//I am debited 80
account.credit(-80);

console.log(account.describeA());
