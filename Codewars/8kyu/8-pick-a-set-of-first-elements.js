//URL -> https://www.codewars.com/kata/572b77262bedd351e9000076

//* NAME -> pick a set of first elements

//TODO INSTRUCTIONS -> Write a function to get the first elements of a sequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

/*
If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

//SOLUTION(S) ->

function first(arr, n = 1) {
	return arr.slice(0, n);
}

//TEST CASES ->

console.log(first(arr), ["a"]);
console.log(first(arr, 2), ["a", "b"]);
