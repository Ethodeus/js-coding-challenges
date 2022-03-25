//TODO Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

let summation = (num) => {
	let sum = 0; //create a variable that will hold the end result.
	// -> Create a loop to iterate from 0 to (num).
	for (let i = 0; i <= num; i++) {
		console.log(i);
		sum += i; // -> every iteration, sum gets the value of i, adding the value of i per iteration and storing it in sum (sum = sum + i)
		console.log('->', sum);
	}
	return sum;
};

summation(8);
