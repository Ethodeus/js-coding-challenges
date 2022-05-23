//URL -> https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

//* NAME -> Sum of differences in array

//TODO INSTRUCTIONS ->

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

[2, 1, 10]  ->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).
*/

//SOLUTION(S) ->

function sumOfDifferences(arr) {
	let newArr = [];
	let sum = 0;
	arr.sort((a, z) => z - a).forEach((e, i, a) => newArr.push(a[i] - a[i + 1]));
	newArr.pop();
	if (!arr || arr.length <= 1) {
		return 0;
	} else {
		return newArr.reduce((a, c) => a + c, 0);
	}
}

//Codewars Alternative with arrow functions and array methods

const sumOfDifferences = (arr) =>
	arr
		.sort((a, b) => b - a)
		.map((a, i) => a - arr[i + 1] || 0)
		.reduce((a, b) => a + b, 0);

//TEST CASES ->

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
