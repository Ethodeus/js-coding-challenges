//URL -> https://www.codewars.com/kata/5b853229cfde412a470000d0

//* NAME -> Twice as old

//TODO INSTRUCTIONS ->

/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/

//SOLUTION(S) ->

function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs(dadYearsOld - sonYearsOld * 2);
}

//Alternative arrow function

twiceAsOld = (d, s) => Math.abs(d - s * 2);

//TEST CASES ->

console.log(twiceAsOld(36, 7)); // -> 22
console.log(twiceAsOld(55, 30)); // -> 5
console.log(twiceAsOld(42, 21)); // -> 0
