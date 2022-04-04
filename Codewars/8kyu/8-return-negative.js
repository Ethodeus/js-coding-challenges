//URL -> https://www.codewars.com/kata/55685cd7ad70877c23000102

//* NAME -> Return Negative

//TODO INSTRUCTIONS -> In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

/*
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

//SOLUTION(S) ->

function makeNegative(num) {
	return -Math.abs(num);
}

// Alternative

let makeNegative = (num) => (num < 0 ? num : -num);

//TEST CASES ->

console.log(makeNegative(42)); // -> -42
