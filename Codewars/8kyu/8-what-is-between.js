//URL -> https://www.codewars.com/kata/55ecd718f46fba02e5000029

//* NAME -> What is between?

//TODO INSTRUCTIONS -> Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

/*
For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

//SOLUTION(S) ->

function between(a, b) {
	let arr = [];

	while (a <= b) {
		arr.push(a);
		a++;
	}

	return arr;
}

//TEST CASES ->

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);
