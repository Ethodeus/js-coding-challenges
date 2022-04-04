//URL -> https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

//* NAME -> Calculate average

//TODO INSTRUCTIONS -> Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.

//SOLUTION(S) ->

function find_average(array) {
	return array.length === 0
		? 0
		: array.reduce((a, b) => a + b, 0) / array.length;
}

//TEST CASES->

console.log(find_average([1, 1, 1])); // -> 1
console.log(find_average([1, 2, 3])); // -> 2
console.log(find_average([1, 2, 3, 4])); // -> 2.5
