//! The sum of a range

function range(start, end) {
	let range = [];
	for (let i = start; i <= end; i++) {
		range.push(i);
	}
	return range;
}

let arrayRange = range(1, 10);

let sum = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
};

sum(arrayRange);

//modified range

function range2(start, end, step = end > start ? 1 : -1) {
	//if the end number is greater than the start number,  the step parameter will default to 1, otherwise, it will be -1
	let range = [];
	if (end > start) {
		for (let i = start; i <= end; i += step) {
			//the conditional on a for loop refers could be read as until instead of while
			range.push(i);
		}
	} else {
		for (let i = start; i >= end; i += step) {
			range.push(i);
		}
	}
	return range;
}

//if case
console.log(range2(20, 2));
//else case
console.log(range2(2, 20));

//! Reversing an array

function reverseArray(arr) {
	let newArr = [];
	for (let i = 0; i <= arr.length; i++) {
		newArr.unshift(arr[i]);
	}
	return newArr;
}

console.log(reverseArray(['A', 'B', 'C']));

function reverseArrayInPlace(arr) {
	const lastI = arr.length - 1;
	for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
		let firstE = arr[i]; //The first element of the array is assigned to the new variable FirstE
		arr[i] = arr[lastI - i]; //Then the last element of the array is assigned to the first element of the array
		arr[lastI - i] = firstE; //The first element of the array that was held by firstE is assigned to the last element of the array.
	}
	return arr;
}

console.log(reverseArrayInPlace(['a', 'b', 'c', 'd', 'e']));

//Alternative with methods

function reverseArrayInPlace(a) {
	for (let i = 0; i < a.length; i++) {
		let lastValue = a.pop(); //assign a variable with the last element of the array
		a.splice(i, 0, lastValue); // with this method we are not removing any elements from the array, which would be ['a', 'b', 'c', 'd'] (in the first iteration of the loop) and adding lastValue ['e'], to the ith position in the array, which should always be the beginning.
	}
	return a;
}

console.log(reverseArrayInPlace(['a', 'b', 'c', 'd', 'e']));
