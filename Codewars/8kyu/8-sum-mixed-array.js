//URL -> https://www.codewars.com/kata/57eaeb9578748ff92a000009

//* NAME -> Sum Mixed Array

//TODO INSTRUCTIONS ->

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

//SOLUTION(S) ->

function sumMix(x) {
	return x.map((e) => Number(e)).reduce((a, c) => a + c, 0);
}

//Alternative with arrow function

const sumMix = (x) => x.map((e) => Number(e)).reduce((a, c) => a + c, 0);

//TEST CASES ->

console.log(sumMix([9, 3, '7', '3'])); // -> 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // -> 42
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // -> 41
