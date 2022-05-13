//URL -> https://www.codewars.com/kata/524f5125ad9c12894e00003f

//* NAME -> Find the Remainder

//TODO INSTRUCTIONS -> Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

/*
Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

//SOLUTION(S) ->

function remainder(n, m) {
	let arr = [n, m];

	arr.sort((a, z) => z - a);

	return arr[0] % arr[1];
}

//Alternative

let remainder = (a, m) => Math.max(a, m) % Math.min(a, m);

//TEST CASES ->

console.log(remainder(17, 5)); // -> 2
console.log(remainder(13, 72)); // -> 7
console.log(remainder(1, 0)); // -> NaN
console.log(remainder(0, 0)); // -> NaN
