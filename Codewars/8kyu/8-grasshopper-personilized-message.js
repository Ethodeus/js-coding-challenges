//URL -> https://www.codewars.com/kata/5772da22b89313a4d50012f7

//* NAME -> Grasshopper - Personalized Message

//TODO INSTRUCTIONS -> Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

//SOLUTION(S) ->

function greet(name, owner) {
	switch (name) {
		case (name = owner):
			return 'Hello boss';
		default:
			return 'Hello guest';
	}
}

//Alternative with ternary

let greet = (n, o) => (n === o ? 'Hello boss' : 'Hello guest');

//TEST CASES ->

console.log(greet('Daniel', 'Daniel')); // -> Hello boss
console.log(greet('Greg', 'Daniel')); // -> Hello guest
