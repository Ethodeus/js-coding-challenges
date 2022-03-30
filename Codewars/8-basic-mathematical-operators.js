//URL -> https://www.codewars.com/kata/57356c55867b9b7a60000bd7

//* NAME -> Basic Mathematical Operations

//TODO INSTRUCTIONS -> Your task is to create a function that does four basic mathematical operations.

/* 
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

//SOLUTION(S) ->

function basicOp(operation, value1, value2) {
	if (operation === '+') {
		return value1 + value2;
	} else if (operation === '-') {
		return value1 - value2;
	} else if (operation === '*') {
		return value1 * value2;
	} else if (operation === '/') {
		return value1 / value2;
	}
}

//Alternative with arrow function and ternary operator.

const basicOp = (o, v1, v2) => (o === '+' ? v1 + v2 : o === '-' ? v1 - v2 : o === '*' ? v1 * v2 : v1 / v2);

//TEST CASES ->

console.log(basicOp('+', 4, 7)); // -> 11
console.log(basicOp('-', 15, 18)); // -> -3
console.log(basicOp('*', 5, 5)); // -> 25
console.log(basicOp('/', 49, 7)); // -> 7
