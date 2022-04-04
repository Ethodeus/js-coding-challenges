//URL -> https://www.codewars.com/kata/583710ccaa6717322c000105

//* NAME -> Simple multiplication

//TODO INSTRUCTIONS -> This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
/* */

//SOLUTION(S) ->

function simpleMultiplication(number) {
	if (number % 2 === 0) {
		return number * 8;
	} else if (number % 2 !== 0) {
		return number * 9;
	}
}

//Alternative with function expression, arrow function and ternary operator.

let simpleMultiplication = (n) => (n % 2 === 0 ? n * 8 : n * 9);

//TEST CASES ->

console.log(simpleMultiplication(2)); // -> 16
console.log(simpleMultiplication(8)); // -> 64
console.log(simpleMultiplication(5)); // -> 45
