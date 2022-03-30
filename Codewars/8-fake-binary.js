///URL -> https://www.codewars.com/kata/57eae65a4321032ce000002d

//* NAME -> Fake Binary

//TODO INSTRUCTIONS -> Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

//SOLUTION(S) ->

function fakeBin(x) {
	let arr = x.split('');
	return arr.map((e) => (e < 5 ? (e = 0) : (e = 1))).join('');
}

//TEST CASES ->

console.log(fakeBin('45385593107843568')); // -> 01011110001100111
console.log(fakeBin('509321967506747')); // -> 101000111101101
console.log(fakeBin('366058562030849490134388085')); // -> 011011110000101010000011011
