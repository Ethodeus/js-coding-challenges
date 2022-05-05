//URL -> https://www.codewars.com/kata/57a5c31ce298a7e6b7000334

//* NAME -> Bin to Decimal

//TODO INSTRUCTIONS -> Complete the function which converts a binary number (given as a string) to a decimal number.

//SOLUTION(S) ->

function binToDec(bin) {
	return parseInt(bin, 2);
}

//Referred to the MDN article about the parseInt() function taht says that The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems). (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

//TEST CASES ->

console.log(binToDec('1')); // -> 1
console.log(binToDec('0')); // -> 0
console.log(binToDec('1001001')); // -> 73
