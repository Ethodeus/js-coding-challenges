//URL -> https://www.codewars.com/kata/596c6eb85b0f515834000049

//* NAME -> FIXME: Replace all dots

//TODO INSTRUCTIONS ->

/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/

//SOLUTION(S) ->

var replaceDots = function (str) {
	return str.replace(/\./g, "-");
};

//TEST CASES ->

console.log(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");
