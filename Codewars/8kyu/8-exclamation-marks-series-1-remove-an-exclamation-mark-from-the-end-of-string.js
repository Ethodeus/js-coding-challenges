//URL -> https://www.codewars.com/kata/57fae964d80daa229d000126

//* NAME -> Exclamation marks series #1: Remove an exclamation mark from the end of string

//TODO INSTRUCTIONS -> Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

/*

Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"


*/

//SOLUTION(S) ->

function remove(string) {
	if (string[string.length - 1] === '!') {
		return string.slice(0, string.length - 1);
	}
	return string;
}

//Codewars alternative with endsWith() method.

function remove(s) {
	return s.endsWith('!') ? s.slice(0, -1) : s;
}

//TEST CASES ->

console.log(remove('Hi!', 'Hi'));
console.log(remove('Hi!!!', 'Hi!!'));
console.log(remove('!Hi', '!Hi'));
console.log(remove('!Hi!', '!Hi'));
console.log(remove('Hi! Hi!', 'Hi! Hi'));
console.log(remove('Hi', 'Hi'));
