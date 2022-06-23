//URL -> https://www.codewars.com/kata/57a386117cb1f31890000039

//* NAME -> Parse float

//TODO INSTRUCTIONS -> Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

//SOLUTION(S) ->

function parseF(s) {
	return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

//TEST CASES ->

console.log(parseF('1'), 1.0);
console.log(parseF('123'), 123.0);
console.log(parseF('2.5'), 2.5);
console.log(parseF('one'), null);
console.log(parseF('0'), 0);
console.log(parseF(0), 0);
console.log(parseF(true), null);
console.log(parseF(false), null);
console.log(parseF(), null);
