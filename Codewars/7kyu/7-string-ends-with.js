//URL -> https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

//* NAME -> String ends with?

//TODO INSTRUCTIONS -> Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

/*
Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

//SOLUTION(S) ->

function solution(str, ending) {
	if (str.endsWith(ending)) {
		return true;
	} else {
		return false;
	}
}

//Alternatives

let solution = (a, b) => (a.endsWith(b) ? true : false);

let solution = (a, b) => a.endsWith(b); //since 1 line arrow functions can be implicitly returned, you don't need to set up a conditional.

//TEST CASES ->

console.log(solution('abcde', 'cde')); // -> true
console.log(solution('abcde', 'abc')); // -> false
