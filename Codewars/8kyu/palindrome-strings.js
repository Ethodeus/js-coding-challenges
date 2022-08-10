//URL -> https://www.codewars.com/kata/57a5015d72292ddeb8000b31

//* NAME -> Palindrome Strings

//TODO INSTRUCTIONS ->

/*
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false
*/

//SOLUTION(S) ->

function isPalindrome(line) {
	let str = line.toString();
	return str === str.split('').reverse().join('');
}

//TEST CASES ->

console.log(isPalindrome('walter'), false);
console.log(isPalindrome(12321), true);
console.log(isPalindrome(123456), false);
console.log(isPalindrome('.'), true);
console.log(isPalindrome('.!!.'), true);
