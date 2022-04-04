//URL -> https://www.codewars.com/kata/55d24f55d7dd296eb9000030

//* NAME -> Grasshopper - Summation

//TODO INSTRUCTIONS -> Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

//SOLUTION(S) ->

const summation = function (num) {
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		sum += i;
		console.log(i);
	}
	return sum;
};

//TEST CASES ->

console.log(summation(8)); // -> 36
