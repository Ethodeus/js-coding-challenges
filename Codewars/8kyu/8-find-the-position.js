//URL -> https://www.codewars.com/kata/5808e2006b65bff35500008f

//* NAME -> Find the position!

//TODO INSTRUCTIONS ->

/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

This kata is meant for beginners. Rank and upvote to bring it out of beta
*/

//SOLUTION(S) ->

function position(letter) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';

	return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

//TEST CASES ->

console.log(position('a'), 'Position of alphabet: 1');
console.log(position('z'), 'Position of alphabet: 26');
console.log(position('e'), 'Position of alphabet: 5');
