//TODO This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
	if (number % 2 === 0) {
		return number * 8;
	} else if (number % 2 !== 0) {
		return number * 9;
	}
}

// 1. Create a conditional to determine if the number is even, if that is true, then return that same number mutiplied by 8.
// 2. Create a conditional to determine if the number is not even, if that is true, then return that same number mutiplied by 9.
