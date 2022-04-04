//URL -> https://www.codewars.com/kata/554b4ac871d6813a03000035

//* NAME -> Highest and Lowest

//TODO INSTRUCTIONS -> In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

/* 
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

-All numbers are valid Int32, no need to validate them.

-There will always be at least one number in the input string.

-Output string must be two numbers separated by a single space, and highest number is first.
*/

//SOLUTION(S) ->

function highAndLow(numbers) {
	const arrOfStr = numbers.split(' '); //We split the string of numbers setting the delimiter to be an empty space ' ', this results in an array of strings
	const arrOfNum = arrOfStr.map((str) => {
		//we use the map method to iterate through the array and convert every string to a number
		return Number(str);
	});

	console.log(arrOfNum); //console.log to test if we actually received a string of numbers

	let high = arrOfNum[0]; // set starting points to each expected returned value //-> You can use the Number() constructor to change these values instead of converting the array.
	let low = arrOfNum[0]; // set starting points to each expected returned value

	for (let i = 1; i < arrOfNum.length; i++) {
		// we didn't use 0 in the loop beacuse we have already set up the starting point in the variables
		//loop to go through the array.
		if (arrOfNum[i] > high) {
			//if the element that is in index (i), which changes per iteration, is higher than the one that was already on the variable...
			high = arrOfNum[i]; //change the previous number to that number
		}
		if (arrOfNum[i] < low) {
			//if the element that is in index (i), which changes per iteration, is lower than the one that was already on the variable...
			low = arrOfNum[i]; //change the previous number to that number
		}
	}
	return `${high} ${low}`; //use of template literals to return high and low with a space in the middle.
}

//Alternative after refactoring 10 days later

function highAndLow(number) {
	let arr = number.split(' ').sort((a, b) => a - b);

	return `${arr[arr.length - 1]} ${arr[0]}`;
}

//TEST CASES ->

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')); // -> "42 -9"
console.log(highAndLow('1 2 3')); // -> "3 1"
