//URL -> https://www.codewars.com/kata/57a083a57cb1f31db7000028

//* NAME -> Powers of 2

//TODO INSTRUCTIONS -> Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//SOLUTION(S) ->

function powersOfTwo(n) {
	let arr = [];

	for (let i = 0; i <= n; i++) {
		arr.push(Math.pow(2, i));
	}

	return arr;
}

//TEST CASES ->

console.log(powersOfTwo(0), [1]);
console.log(powersOfTwo(1), [1, 2]);
console.log(powersOfTwo(4), [1, 2, 4, 8, 16]);
