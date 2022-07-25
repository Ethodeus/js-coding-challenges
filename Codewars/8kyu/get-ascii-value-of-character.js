//URL -> https://www.codewars.com/kata/55acfc59c3c23d230f00006d

//* NAME -> get ascii value of character

//TODO INSTRUCTIONS -> Get ASCII value of a character.

//SOLUTION(S) ->

function getASCII(c) {
	return c.charCodeAt(0);
}

//TEST CASES ->

console.log(getASCII('A'), 65);
console.log(getASCII(' '), 32);
console.log(getASCII('!'), 33);
