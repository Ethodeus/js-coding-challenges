// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
	return number * -1;
}

//Convert a Number to a String!

function numberToString(num) {
	return String(num);
}

let numberToString = (num) => String(num);

//Reversed Strings

function solution(str) {
	return str.split('').reverse().join('');
}

const solution = (str) => str.split('').reverse().join('');

//Convert boolean values to strings 'Yes' or 'No'.

let boolToWord = (bool) => (bool ? 'Yes' : 'No');

// You get an array of numbers, return the sum of all of the positives ones. // Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum = sum + arr[i];
		}
	}
	return sum;
}

//-------------------------------

function positiveSum(arr) {
	let sum = 0;
	arr.forEach((element, index) => {
		if (arr[index] > 0) {
			sum = sum + arr[index];
		}
	});
	return sum;
}

//Why does't it work with arr[element]?

const array = ['cat', 'dog', 'bird'];

array.forEach((animal, idx) => {
	// two valid ways to log each animal in the array =>
	console.log(animal); // returns 'cat' the first time, 'dog', then 'bird'
	console.log(array[idx]); // same as above

	// the wrong way
	console.log(array[animal]); // going to return an error, because array['cat'] is not a valid way to select an index
	//*The correct way to do it is by just selecting the element.
});
	