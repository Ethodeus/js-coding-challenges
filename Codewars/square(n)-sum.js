//TODO Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
	let result = 0;
	numbers.forEach((e) => {
		result = result + e ** 2;
	});
	return result;
}

//Alternative with arrow function

let squareSum = (n) => {
	let r = 0;
	n.forEach((e) => (r = r + Math.pow(e, 2)));
	return r;
};

// A for each loop takes the parameters in the following order -> Element, index and Array, we don't need the index for this exercise since we are looking for the square of the ELEMENZTS, not the index.

//Alternative with function hoisting

function squareSum(numbers) {
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
