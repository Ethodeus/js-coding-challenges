//URL -> https://www.codewars.com/kata/567bf4f7ee34510f69000032

//* NAME -> Regexp Basics - is it a digit?

//TODO INSTRUCTIONS -> Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

//SOLUTION(S) ->

String.prototype.digit = function () {
	return /^\d$/g.test(this);
};

//TEST CASES ->

console.log(''.digit(), false);
console.log('7'.digit(), true);
console.log(' '.digit(), false);
console.log('a'.digit(), false);
console.log('a5'.digit(), false);
console.log('14'.digit(), false);
