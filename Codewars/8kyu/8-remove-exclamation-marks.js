//URL -> https://www.codewars.com/kata/57a0885cbb9944e24c00008e

//* NAME -> Remove exclamation marks

//TODO INSTRUCTIONS -> Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//SOLUTION(S) ->

function removeExclamationMarks(s) {
	return s.split('!').join('');
}

//Alternative with arrow function

removeExclamationMarks = (s) => s.split('!').join('');

//TEST CASES ->

console.log(removeExclamationMarks('Hello World!')); // -> Hello World
