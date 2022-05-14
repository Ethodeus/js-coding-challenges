//URL -> https://www.codewars.com/kata/572b6b2772a38bc1e700007a

//* NAME -> ASCII Total

//TODO INSTRUCTIONS -> You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

/*
examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

//SOLUTION(S) ->

function uniTotal(str) {
	return !str
		? 0
		: str
				.split('')
				.map((e) => (e = e.charCodeAt(0)))
				.reduce((a, c) => a + c, 0);
}

//Codewars Alternative

const uniTotal = (str) => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

//TEST CASES ->

console.log(uniTotal(''), 0);
console.log(uniTotal('a'), 97);
console.log(uniTotal('b'), 98);
console.log(uniTotal('c'), 99);
console.log(uniTotal('d'), 100);
console.log(uniTotal('e'), 101);
console.log(uniTotal('aaa'), 291);
console.log(uniTotal('Mary Had A Little Lamb'), 1873);
