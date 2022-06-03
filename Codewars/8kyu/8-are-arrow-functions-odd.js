//URL -> https://www.codewars.com/kata/559f80b87fa8512e3e0000f5

//* NAME -> Are arrow functions odd?

//TODO INSTRUCTIONS -> Time to test your basic knowledge in functions! Return the odds from a list:

/*
[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/

//SOLUTION(S) ->

function odds(values) {
	return values.filter((e) => e % 2 !== 0);
}

//TEST CASES ->

console.log(odds([]), [], 'Should handle empty array');
console.log(odds([2, 4, 6]), [], 'Should handle array with even numbers only');
console.log(odds([1, 3, 5]), [1, 3, 5], 'Should handle array with odd numbers only');
console.log(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], 'Should handle mixed array');
