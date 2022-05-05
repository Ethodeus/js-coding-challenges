//URL -> https://www.codewars.com/kata/57f6ad55cca6e045d2000627

//* NAME -> To square(root) or not to square(root)

//TODO INSTRUCTIONS -> Write a method, that will get an integer array as parameter and will process every number from this array.

/*
Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

//SOLUTION(S) ->

function squareOrSquareRoot(array) {
	return array.map((e) => (Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : Math.pow(e, 2)));
}

//TEST CASES ->

console.log(); // ->
console.log(); // ->
console.log(); // ->
