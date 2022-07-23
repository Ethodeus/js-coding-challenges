//URL ->

//* NAME -> https://www.codewars.com/kata/56c24c58e0c0f741d4001aef

//TODO INSTRUCTIONS -> isReallyNaN

/*
I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!
*/

//SOLUTION(S) ->

const isReallyNaN = (val) => {
	// return isNaN(val);  // wasn't working as planned :-(
	return val != val;
};

// Comments -> NaN will never be equal to NaN, in this case, when we encounter NaN as an argument we just have to check if the argument is equal to that same argument.

//TEST CASES ->

console.log(isReallyNaN(37), 'false');
console.log(isReallyNaN('37'), 'false');
console.log(isReallyNaN(NaN), 'true');
console.log(isReallyNaN(undefined), 'false');
