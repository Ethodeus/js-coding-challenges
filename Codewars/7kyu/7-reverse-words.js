//URL -> https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

//* NAME -> Reverse words

//TODO INSTRUCTIONS -> Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

/* 
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

//SOLUTION(S) ->

function reverseWords(str) {
	return str
		.split('') //[‘T’, ‘h’, ‘e’, ‘ ‘, ‘q’, ‘u’, ’i’, ’c’, ’k’,’ ‘, ‘b’, ’r’, ’o’, ’w’, ’n’, ’ ‘, ’f’, ’o’, ’x’, ’ ‘, ’j’, ’u’, ’m’, ’p’, ’s’, ’ ‘, ’o’, ’v’, ’e’, ’r’, ’ , ’t’, ’h’, ’e’, ’ ‘, ’l’, ’a’, ’z’, ’y’, ’ ‘, ’d’, ’o’, ’g’, ’.’].
		.reverse() //[‘.’, ’g’, ’o’, ’d’, ’ ‘, ’y’, ’z’, ’a’, ’l’, ’ ‘, ’e’, ’h’, ’t’, ’ ‘, ’r’, ’e’, ’v’, ’o’, ’ ‘, ’s’, ’p’, ’m’, ’u’, ’j’, ’ ‘, ’x’, ’o’, ’f’, ’ ‘, ’n’, ’w’, ’o’, ’r’, ’b’, ’ ‘, ’k’, ’c’, ’I’, ’u’, ’q’, ’ ‘, ’e’, ’h’, ’T’]
		.join('') //‘.god yzal eht revo spmuj xof nworb kciuq ehT’ //If we do join without the quotation marks every element will be joined with a , in between.
		.split(' ') //Since the words are reversed but in the wrong position, we split the string again but this time just into words, thus the space between quotations in the spli() method, to make a new array...
		.reverse() //...and be able to reverse it.
		.join(' '); //...and then join it back in, again a space in the join method so we can have a space inbetween words.
}

//Alternative with arrow function

let reverseWords = (str) => str.split('').reverse().join('').split(' ').reverse().join(' ');

//TEST CASES ->

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // -> 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')); // -> 'elppa'
console.log(reverseWords('a b c d')); // -> 'a b c d'
console.log(reverseWords('double  spaced  words')); // -> 'elbuod  decaps  sdrow'
