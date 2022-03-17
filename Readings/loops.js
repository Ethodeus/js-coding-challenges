//Variables 1

let admin, name; // can declare two variables at once

name = "John";

admin = name;

alert(admin); // "John"

//Variables 2

let ourPlanetName = "Earth";

let currentUserName = "John";

//Functions

function checkAge(age) {
	return age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
	return age > 18 || confirm("Did parents allow you?");
}

function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

function min(a, b) {
	return a < b ? a : b;
}

function pow(x, n) {
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}

	return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
	alert(`Power ${n} is not supported, use a positive integer`);
} else {
	alert(pow(x, n));
}

//Arrow Functions

function ask(question, yes, no) {
	if (confirm(question)) yes();
	else no();
}

ask(
	"Do you agree?",
	() => alert("You agreed."),
	() => alert("You canceled the execution.")
);

//////////////LOOPS/////////////

// Carousel

turns = 1;
while (turns <= 10) {
	console.log(turns);
	turns++;
}

let turns;
for (turns = 1; turns <= 5; turns++) {
	console.log(turns);
}

let turns = prompt("Please insert the number of turns");
let showTurns = 1;
while (showTurns <= turns) {
	console.log(showTurns);
	showTurns++;
}

//Parity

for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	}
	if (i % 2 === 1) {
		console.log(`${i} is uneven`);
	}
}

let start = prompt("Insert the initial number");
let end = Number(start) + 10; //The reason you have to put number here is because all values entered through promts are strings. For example '10'+10 = 1010 not 20

//You can also use +prompt to conver values to numbers
for (let i = start; i < end; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	}
	if (i % 2 === 1) {
		console.log(`${i} is uneven`);
	}
}

// INPUT VALIDATION

let number = Number(prompt("Please enter a number"));
let limit = 100;
let base = 50;
while (number > limit || number < base) {
	number = prompt("Please enter a number between 50  and 100"); // Make sure that the prompt inside the loop reassigns the variable for the condition to be false.
}

// MULTIPLICATION TABLE

let mult = prompt("Please enter a number:");
while (mult > 9 || mult < 2) {
	mult = prompt("Please enter a number between 2 and 9");
}

for (let mplier = 1; mplier <= 10; mplier++) {
	console.log(`${mult} times ${mplier} = ${mult * mplier}`); // dont forget the ticks
}

// Fizz Buzz

for (let i = 1; i <= 20; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(`${i} FizzBuzz`);
	} else if (i % 3 === 0) {
		console.log(`${i} Fizz`);
	} else if (i % 5 === 0) {
		console.log(`${i} Buzz`);
	} else {
		console.log(i);
	}
}

// The else kinda stands for "if none of the previous conditions above are true, check this one." Once it finds a true condition, it executes that code and stops checking. Since the las if statement is a combination of the previous if statements if the previous statments are true it will not check the last one because the requirements have been met already.

for (let i = 1; i <= 20; i++) { //! THIS IS WRONG
	if (i % 3 === 0) {
		console.log(`${i} Fizz`);
	} else if (i % 5 === 0) {
		console.log(`${i} Buzz`);
	} else if (i % 5 === 0 && i % 3 === 0) {
		console.log(`${i} FizzBuzz`);
	} else {
		console.log(i);
	}
}
