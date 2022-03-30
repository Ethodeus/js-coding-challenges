//URL -> https://www.codewars.com/kata/515e271a311df0350d00000f

//* NAME -> Square(n) Sum

//TODO INSTRUCTIONS -> Complete the square sum function so that it squares each number passed into it and then sums the results together.

/* 
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

//SOLUTION(S) ->

function squareSum1(numbers) {
	let result = 0;
	numbers.forEach((e) => {
		result = result + e ** 2;
	});
	return result;
}

//Alternative with arrow function

let squareSum2 = (n) => {
	let r = 0;
	n.forEach((e) => (r = r + Math.pow(e, 2)));
	return r;
};

// A for each loop takes the parameters in the following order -> Element, index and Array, we don't need the index for this exercise since we are looking for the square of the ELEMENZTS, not the index.

//Alternative with function hoisting

function squareSum3(numbers) {
	return numbers.map(square).reduce(sum);
}

function square(number) {
	//this is the function that the .map() method will get whe you call it in the initial squareNum function, this takes every element of the array provided as (numbers) squares them and returns a new array with the swaured numbers.
	return number * number;
}

function sum(firstNumber, secondNumber) {
	//Then with the new array with the squared numbers the sum function, taken by the reduce() method adds all of these numbers and returns them.
	return firstNumber + secondNumber;
}

//TEST CASES ->

console.log(squareSum1([0, 3, 4, 5])); // -> 50
console.log(squareSum2([0, 3, 4, 5])); // -> 50
console.log(squareSum3([0, 3, 4, 5])); // -> 50
