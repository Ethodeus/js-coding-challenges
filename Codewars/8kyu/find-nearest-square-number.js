//URL ->

//* NAME -> https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

//TODO INSTRUCTIONS -> Find Nearest square number

/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)
*/

//SOLUTION(S) ->

function nearestSq(n) {
	return Math.pow(Math.round(Math.sqrt(n)), 2);
}

// You take the square root of the integer, round it to the nearest number, and then square that. That should give you the closest square number.

//TEST CASES ->

console.log(nearestSq(1), 1);
console.log(nearestSq(2), 1);
console.log(nearestSq(10), 9);
console.log(nearestSq(111), 121);
console.log(nearestSq(9999), 10000);
