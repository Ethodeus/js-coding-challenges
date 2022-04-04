//URL -> https://www.codewars.com/kata/53dc54212259ed3d4f00071c

//* NAME -> Sum Arrays

//TODO INSTRUCTIONS -> Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//SOLUTION(S) ->

function sum(numbers) {
	return numbers.reduce((a, c) => a + c, 0);
}

//TEST CASES ->

console.log(sum([])); // -> 0
console.log(sum([1, 5.2, 4, 0, -1])); // -> 9.2
