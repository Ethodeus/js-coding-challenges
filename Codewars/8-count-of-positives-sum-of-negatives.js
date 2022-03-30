//URL -> https://www.codewars.com/kata/576bb71bbbcf0951d5000044

//* NAME -> Count of positives / sum of negatives

//TODO INSTRUCTIONS ->

/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example:

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

//SOLUTION(S) ->

function countPositivesSumNegatives(input) {
	let positiveNums = 0;
	let negativeNums = 0;
	if (input === null || input.length === 0) {
		//this checks if the array value is equal to null or if the array is empty.
		return [];
	} else {
		input.forEach((num) =>
			num > 0 ? (positiveNums += 1) : (negativeNums += num)
		);
	}
	//As we iterate through each element, if the number is greater than 0 add 1 to positiveNums to get the counter up, and if the number is less than 0 add that number to negativeNums to add all negative numbers.

	return [positiveNums, negativeNums];
}

//TEST CASES ->

console.log(
	countPositivesSumNegatives([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
	])
); // -> [10, -65]
console.log(
	countPositivesSumNegatives([
		0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
	])
); // ->  [8, -50]
