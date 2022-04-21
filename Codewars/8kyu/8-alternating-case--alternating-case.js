//URL ->    https://www.codewars.com/kata/56efc695740d30f963000557

//* NAME -> altERnaTIng cAsE <=> ALTerNAtiNG CaSe

//TODO INSTRUCTIONS ->

/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
*/

//SOLUTION(S) ->

//* This one is a regulat function *//

let toAlternatingCase = (str) => {
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			newStr += str[i].toLowerCase();
		} else {
			newStr += str[i].toUpperCase();
		}
	}
	return newStr;
};

//* This is how we define a new String.prototype.toAlternatingCase() *//

String.prototype.toAlternatingCase = function () {
	let newStr = '';

	for (let i = 0; i < this.length; i++) {
		if (this[i] === this[i].toUpperCase()) {
			newStr += this[i].toLowerCase();
		} else {
			newStr += this[i].toUpperCase();
		}
	}
	return newStr;
};

//Notes: This is so we can call this method to any string, in this case 'this' refers to to any string we call this method on.

//Codewars Alternative:

String.prototype.toAlternatingCase = function () {
	return this.split('')
		.map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
		.join('');
};

//TEST CASES ->

console.log('hello world'.toAlternatingCase()); // -> HELLO WORLD
console.log('String.prototype.toAlternatingCase'.toAlternatingCase()); // -> sTRING.PROTOTYPE.TOaLTERNATINGcASE
console.log('1a2b3c4d5e'.toAlternatingCase()); // -> 1A2B3C4D5E
