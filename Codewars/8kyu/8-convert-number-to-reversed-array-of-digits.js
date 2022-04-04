//URL -> https://www.codewars.com/kata/5583090cbe83f4fd8c000051

//* NAME -> Convert number to reversed array of digits

//TODO INSTRUCTIONS ->  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

/* 
Example:

348597 => [7,9,5,8,4,3]
0 => [0]
*/

//SOLUTION(S) ->

let digitize = (n) => {
	return String(n)
		.split('')
		.map((e) => Number(e))
		.reverse();
};

//TEST CASES ->

console.log(digitize(35231)); // -> [1,3,2,5,3]
console.log(digitize(0)); // -> [0]
