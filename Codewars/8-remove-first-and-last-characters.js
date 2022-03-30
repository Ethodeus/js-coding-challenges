//URL -> https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

//* NAME -> Remove First and Last Character

//TODO INSTRUCTIONS ->It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//SOLUTION(S) ->

function removeChar(str) {
	return str.slice(1, -1);
}

//Arrow function alternative

let removeChar = (str) => str.slice(1, -1);

//TEST CASES ->

console.log(removeChar('eloquent')); // -> loquen
console.log(removeChar('country')); // -> ountr
console.log(removeChar('person')); // -> erso
