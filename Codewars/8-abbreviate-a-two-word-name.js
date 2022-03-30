//URL -> https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

//* NAME -> Abbreviate a Two Word Name

//TODO INSTRUCTIONS -> Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

/*
The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

//SOLUTION(S) ->

function abbrevName(name) {
	let arr = name.split(' ');
	return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
}

//TEST CASES ->

console.log(abbrevName('Sam Harris')); // -> 'S.H'
console.log(abbrevName('Patrick Feenan')); // -> 'P.F"'
console.log(abbrevName('Evan Cole')); // -> 'E.C'
