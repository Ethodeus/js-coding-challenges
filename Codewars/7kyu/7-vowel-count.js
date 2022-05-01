//URL -> https://www.codewars.com/kata/54ff3102c1bad923760001f3

//* NAME -> Vowel Count

//TODO INSTRUCTIONS -> Return the number (count) of vowels in the given string.

/*
We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//SOLUTION(S) ->

function getCount(str) {
	let vowelsCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
			vowelsCount += 1;
		}
	}

	return vowelsCount;
}

//Alternative with reverse check.

function getCount(str) {
	let vowelsCount = 0;
	const vowels = 'aeiou';
	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			vowelsCount += 1;
		}
	}
	return vowelsCount;
}

//Alternative with filter and reverse checking with a string of vowels

function getCount(str) {
	const vowels = 'aeiou';
	return [...str].filter((e) => vowels.includes(e)).length;
}

//TEST CASES ->

console.log(getCount('abracadabra')); // -> 5
