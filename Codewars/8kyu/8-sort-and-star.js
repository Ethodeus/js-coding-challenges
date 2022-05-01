//URL -> https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

//* NAME -> Sort and Star

//TODO INSTRUCTIONS -> You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

/*
The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

//SOLUTION(S) ->

function twoSort(s) {
	return s
		.sort()[0]
		.split('')
		.map((e, i, a) => (i === a.length - 1 ? e : `${e}***`))
		.join('');
}

//Alternative

function twoSort(s) {
	return s.sort()[0].split('').join('***');
}

//TEST CASES ->

console.log(
	twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps']),
	'b***i***t***c***o***i***n'
);
console.log(
	twoSort(['turns', 'out', 'random', 'test', 'cases', 'are', 'easier', 'than', 'writing', 'out', 'basic', 'ones']),
	'a***r***e'
);
