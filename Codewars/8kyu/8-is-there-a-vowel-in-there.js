//URL -> https://www.codewars.com/kata/57cff961eca260b71900008f

//* NAME -> Is there a vowel in there?

//TODO INSTRUCTIONS ->

/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

//SOLUTION(S) ->

function isVow(a) {
	let vowels = 'aeiou';
	return a.map((e) => (vowels.includes(String.fromCharCode(e)) ? String.fromCharCode(e) : e));
}

//TEST CASES ->

//prettier-ignore
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);

//prettier-ignore
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
