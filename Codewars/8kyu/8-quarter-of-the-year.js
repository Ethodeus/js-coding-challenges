//URL -> https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

//* NAME -> Quarter of the year

//TODO INSTRUCTIONS -> Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

/*
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

*/

//SOLUTION(S) ->

const quarterOf = (month) => {
	if (month <= 3) {
		return 1;
	} else if (month <= 6) {
		return 2;
	} else if (month <= 9) {
		return 3;
	} else {
		return 4;
	}
};

//Alternative with arrow function

const quarterOf2 = (m) => Math.ceil(m / 3);

//TEST CASES ->

console.log(quarterOf(3)); // -> 1
console.log(quarterOf(8)); // -> 3
console.log(quarterOf(11)); // -> 4
