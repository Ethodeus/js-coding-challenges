//URL -> https://www.codewars.com/kata/582cb0224e56e068d800003c

//* NAME -> Keep Hydrated!

//TODO INSTRUCTIONS ->

/* 
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

//SOLUTION(S) ->

function litres(time) {
	return Math.floor(time * 0.5);
}

//TEST CASES ->

console.log(litres(12.3)); // -> 6
console.log(litres(0.82)); // -> 0
console.log(litres(1787)); // -> 893
