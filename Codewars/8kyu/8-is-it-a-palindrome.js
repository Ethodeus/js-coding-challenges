//URL -> https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

//* NAME -> Is it a palindrome?

//TODO INSTRUCTIONS -> Write a function that checks if a given string (case insensitive) is a palindrome.

/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

//SOLUTION(S) ->

function isPalindrome(x) {
	return x.toLowerCase() === x.split('').reverse().join('').toLowerCase();
}

//TEST CASES ->

console.log(isPalindrome('a'), true);
console.log(isPalindrome('aba'), true);
console.log(isPalindrome('Abba'), true);
console.log(isPalindrome('hello'), false);
console.log(isPalindrome('Bob'), true);
console.log(isPalindrome('Madam'), true);
console.log(isPalindrome('AbBa'), true);
console.log(isPalindrome(''), true);
