//URL ->https://www.codewars.com/kata/5715eaedb436cf5606000381

//* NAME -> Sum of positive

//TODO INSTRUCTIONS -> You get an array of numbers, return the sum of all of the positives ones.

/*
Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

//SOLUTION(S) ->

function positiveSum(arr) {
	let sum = 0;
	arr.forEach((element, index) => {
		if (arr[index] > 0) {
			sum = sum + arr[index];
		}
	});
	return sum;
}

//Alternative with arrow function and reduce method.

let positiveSum = (arr) => arr.reduce((a, c, i) => (arr[i] > 0 ? a + c : a + 0), 0);

//TEST CASES ->

console.log(positiveSum([1, 2, 3, 4, 5])); // -> 15
console.log(positiveSum([1, -2, 3, 4, 5])); // -> 13
console.log(positiveSum([])); // -> 0
