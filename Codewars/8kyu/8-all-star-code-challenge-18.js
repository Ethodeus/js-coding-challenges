//URL -> https://www.codewars.com/kata/5865918c6b569962950002a1

//* NAME -> All Star Code Challenge #18

//TODO INSTRUCTIONS ->

/*
All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1
*/

//SOLUTION(S) ->

function strCount(str, letter) {
	let count = 0;
	str.split('').forEach((e) => (e === letter ? count++ : count));
	return count;
}

//Codewars alternative

function strCount(str, letter) {
	return str.split(letter).length - 1;
}

//TEST CASES ->

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);
