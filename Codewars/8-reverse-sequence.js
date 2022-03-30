///URL -> https://www.codewars.com/kata/5a00e05cc374cb34d100000d

//* NAME -> Reversed sequence

//TODO INSTRUCTIONS -> Build a function that returns an array of integers from n to 1 where n>0.

//SOLUTION(S) ->

const reverseSeq = (n) => {
	let arr = [];
	for (i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr.reverse();
};

//Alternative

const reverseSeq2 = (n) => {
	let arr = [];
	for (let i = n; i > 0; i--) {
		arr.push(i);
	}
	return arr;
};

//TEST CASES->

console.log(reverseSeq(5));
console.log(reverseSeq2(5));
