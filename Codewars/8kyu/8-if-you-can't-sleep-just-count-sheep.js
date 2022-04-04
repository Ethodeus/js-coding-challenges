//URL -> https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

//* NAME -> If you can't sleep, just count sheep!!

//TODO INSTRUCTIONS -> Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//SOLUTION(S) ->

var countSheep = function (num) {
	let count = '';
	for (i = 1; i <= num; i++) {
		count += i + ' sheep...';
	}
	return count;
};

//TEST CASES ->

console.log(countSheep(0)); // -> ''
console.log(countSheep(1)); // -> '1 sheep...'
console.log(countSheep(2)); // -> '1 sheep...2 sheep...'
console.log(countSheep(3)); // -> '1 sheep...2 sheep...3 sheep...'
