//URL -> https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

//* NAME -> Cat years, Dog years

//TODO INSTRUCTIONS ->

/*
Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1

humanYears are whole numbers only

*Cat Years

15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

*Dog Years

15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

//SOLUTION(S) ->

function humanYearsCatYearsDogYears(humanYears) {
	let results = [0, 0, 0];

	for (let i = 0; i < humanYears; i++) {
		results[0] += 1;
		if (i < 1) {
			results[1] += 15;
			results[2] += 15;
		} else if (i < 2) {
			results[1] += 9;
			results[2] += 9;
		} else {
			results[1] += 4;
			results[2] += 5;
		}
	}

	return results;
}

//Codewars Alternative

let humanYearsCatYearsDogYears = (y) => {
	if (y == 1) return [1, 15, 15];
	if (y == 2) return [2, 24, 24];
	return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]; //the y-2 is to account for the first 2 years that have a different value of years.
};

//TEST CASES ->

console.log(humanYearsCatYearsDogYears(1), [1, 15, 15]);
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24]);
console.log(humanYearsCatYearsDogYears(10), [10, 56, 64]);
