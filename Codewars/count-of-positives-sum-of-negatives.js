//TODO: Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//By count of positive numbers it doesnt mean to add all positive numbers, it means to return the length of the array of positive numbers.

function countPositivesSumNegatives(input) {
	let positiveNums = 0;
	let negativeNums = 0;
	if (input === null || input.length === 0) {
		//this checks if the array value is equal to null or if the array is empty.
		return [];
	} else {
		input.forEach((num) =>
			num > 0 ? (positiveNums += 1) : (negativeNums += num)
		);
	}
	//As we iterate through each element, if the number is greater than 0 add 1 to positiveNums to get the counter up, and if the number is less than 0 add that number to negativeNums to add all negative numbers.

	return [positiveNums, negativeNums];
}
