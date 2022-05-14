//URL -> https://www.codewars.com/kata/575fa9afee048b293e000287

//* NAME -> How much water do I need?

//TODO INSTRUCTIONS -> My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

/*

*/

//SOLUTION(S) ->

function howMuchWater(water, load, clothes) {
	return clothes > load * 2
		? 'Too much clothes'
		: clothes < load
		? 'Not enough clothes'
		: +(water * 1.1 ** (clothes - load)).toFixed(2);
}

//TEST CASES ->

console.log(howMuchWater(10, 10, 21), 'Too much clothes');
console.log(howMuchWater(10, 10, 2), 'Not enough clothes');
console.log(howMuchWater(10, 11, 20), 23.58);
console.log(howMuchWater(50, 15, 29), 189.87);
