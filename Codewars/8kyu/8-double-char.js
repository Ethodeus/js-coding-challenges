//URL -> https://www.codewars.com/kata/56b1f01c247c01db92000076

//* NAME -> Double Char

//TODO INSTRUCTIONS ->Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//SOLUTION(S) ->

function doubleChar(str) {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		newStr += str[i] + str[i];
	}
	return newStr;
}

//Alternative with arrow function

let doubleChar = (str) => {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		newStr += str[i] + str[i];
	}
	return newStr;
};

//TEST CASES ->

console.log(doubleChar('abcd')); // -> aabbccdd
console.log(doubleChar('Adidas')); // -> AAddiiddaass
console.log(doubleChar('1337')); // -> 11333377
