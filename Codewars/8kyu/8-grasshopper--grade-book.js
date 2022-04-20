//URL -> https://www.codewars.com/kata/55cbd4ba903825f7970000f5

//* NAME -> Grasshopper - Grade book

//TODO INSTRUCTIONS ->

/*
Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade

90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

//SOLUTION(S) ->

function getGrade(s1, s2, s3) {
	let average = (s1 + s2 + s3) / 3;

	if (90 <= average && average <= 100) {
		return 'A';
	} else if (80 <= average && average < 90) {
		return 'B';
	} else if (70 <= average && average < 80) {
		return 'C';
	} else if (60 <= average && average < 70) {
		return 'D';
	} else {
		return 'F';
	}
}

//TEST CASES ->

console.log(getGrade(100, 85, 96)); // -> A
console.log(getGrade(82, 85, 87)); // -> B
console.log(getGrade(75, 70, 79)); // -> C
console.log(getGrade(66, 62, 68)); // -> D
console.log(getGrade(48, 55, 52)); // -> F
