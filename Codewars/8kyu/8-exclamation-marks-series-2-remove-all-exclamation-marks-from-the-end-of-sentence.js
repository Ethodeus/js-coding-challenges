//URL -> https://www.codewars.com/kata/57faece99610ced690000165

//* NAME -> Exclamation marks series #2: Remove all exclamation marks from the end of sentence

//TODO INSTRUCTIONS -> Remove all exclamation marks from the end of sentence.

/*
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

*/

//SOLUTION(S) ->

function remove(string) {
	let arr = string.split('');
	while (arr[arr.length - 1] === '!') {
		arr.splice(-1);
	}
	return arr.join('');
}

//Codewars alternative with just string methods.

function remove(s) {
	while (s[s.length - 1] === '!') {
		s = s.slice(0, -1); //everytime the loop encounters an '!' at the end of the string s is set to be the same as the string minus the last character
	}
	return s;
}

//TEST CASES ->

console.log(remove('Hi!')); //-> Hi
console.log(remove('!Hi')); //-> !Hi
console.log(remove('!Hi!')); //-> !Hi
console.log(remove('Hi! Hi!')); //-> Hi! Hi
console.log(remove('Hi')); //-> Hi
