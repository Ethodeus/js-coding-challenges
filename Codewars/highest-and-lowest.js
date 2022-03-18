//TODO In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
	const arrOfStr = numbers.split(' '); //We split the string of numbers setting the delimiter to be an empty space ' ', this results in an array of strings
	const arrOfNum = arrOfStr.map((str) => {
		//we use the map method to iterate through the array and convert every string to a number
		return Number(str);
	});

	console.log(arrOfNum); //console.log to test if we actually received a string of numbers

	let high = arrOfNum[0]; // set starting points to each expected returned value //?-> You can use the Number() constructor to change these values instead of converting the array.
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