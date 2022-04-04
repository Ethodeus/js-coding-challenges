//URL -> https://www.codewars.com/kata/517abf86da9663f1d2000003

//* NAME -> Convert string to camel case

//TODO INSTRUCTIONS ->  Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

/*
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

//SOLUTION(S) ->

function toCamelCase(str) {
	let arr = [];

	str.includes('-') ? (arr = str.split('-')) : (arr = str.split('_'));

	arr = arr.map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)));
	arr = arr.join('');
	return arr;
}

//In case the first letter is upper case the map function ignores all the first elements of the array.

//TEST CASES ->

console.log(toCamelCase('')); // ->
console.log(toCamelCase('the_stealth_warrior')); // ->
console.log(toCamelCase('The-Stealth-Warrior')); // ->
console.log(toCamelCase('A-B-C')); // ->
