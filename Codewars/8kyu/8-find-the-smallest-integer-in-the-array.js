//URL -> https://www.codewars.com/kata/55a2d7ebe362935a210000b2

//* NAME -> Find the smallest integer in the arra

//TODO INSTRUCTIONS -> Given an array of integers your solution should find the smallest integer.

//SOLUTION(S) ->

function findSmallestInt(args) {
	let sorted = args.sort((a, b) => a - b);
	return sorted[0];
}

//TEST CASES ->

console.log(findSmallestInt([78, 56, 232, 12, 8])); // -> 8
console.log(findSmallestInt([78, 56, 232, 412, 228])); // -> 56
console.log(findSmallestInt([78, 56, 232, 12, 0])); // -> 0
