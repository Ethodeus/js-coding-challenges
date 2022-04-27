//URL -> https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

//* NAME -> Is the string uppercase?

//TODO INSTRUCTIONS ->

/*
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

//SOLUTION(S) ->

String.prototype.isUpperCase = function () {
	if (this == this.toUpperCase()) {
		return true;
	} else {
		return false;
	}
};

// === doesn't work because 'this' is an object, and since we don't want to compare type just the values, we use ==

//TEST CASES ->

console.log('c'.isUpperCase()); // -> false
console.log('C'.isUpperCase()); // -> true
console.log('hello I AM DONALD'.isUpperCase()); // -> false
console.log('HELLO I AM DONALD'.isUpperCase()); // -> true
