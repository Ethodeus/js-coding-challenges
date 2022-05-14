//URL -> https://www.codewars.com/kata/55dc4520094bbaf50e0000cb

//* NAME -> Wilson primes

//TODO INSTRUCTIONS ->

/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

//SOLUTION(S) ->

//I have no idea how recursion works

function factorial(n) {
	if (n == 0) return 1;
	else return n * factorial(n - 1);
}

function amIWilson(p) {
	let result = (factorial(p - 1) + 1) / Math.pow(p, 2);
	return Number.isInteger(result);
}

//TEST CASES ->

console.log(amIWilson(5), true);
console.log(amIWilson(9), false);
console.log(amIWilson(6), false);
