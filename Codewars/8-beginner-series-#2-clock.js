//URL -> https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

//* NAME -> Beginner Series #2 Clock

//TODO INSTRUCTIONS -> Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

/* 
Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

//SOLUTION(S) ->

function past(h, m, s) {
	return h * 3.6e6 + m * 60000 + s * 1000;
}

//Alternatives with arrow function

let past = (h, m, s) => h * 3.6e6 + m * 60000 + s * 1000;

//TEST CASES ->

console.log(past(0, 1, 1)); // -> 61000
console.log(past(1, 1, 1)); // -> 3661000
console.log(past(1, 0, 1)); // -> 3601000
