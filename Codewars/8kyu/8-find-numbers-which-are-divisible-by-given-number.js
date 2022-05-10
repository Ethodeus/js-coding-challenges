//URL -> https://www.codewars.com/kata/55edaba99da3a9c84000003b

//* NAME -> Find numbers which are divisible by given number

//TODO INSTRUCTIONS ->Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

/*
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
*/

//SOLUTION(S) ->

function divisibleBy(numbers, divisor) {
	return numbers.filter((e) => e % divisor === 0);
}

//Alternative

function divisibleBy(numbers, divisor) {
	return numbers.filter((e) => Number.isInteger(e / divisor));
}

//TEST CASES ->

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1, 3, 5], 2), []);
