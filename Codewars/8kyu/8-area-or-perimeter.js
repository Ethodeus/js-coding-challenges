//URL -> https://www.codewars.com/kata/5ab6538b379d20ad880000ab

//* NAME -> Area or Perimeter

//TODO INSTRUCTIONS -> You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.

/*
Examples:

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9

Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/

//SOLUTION(S) ->

const areaOrPerimeter = function (l, w) {
	if (l === w) {
		return l * w;
	} else {
		return 2 * (l + w);
	}
};

//Arrow function and ternary operator alternative

const area_or_perimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

//TEST CASES ->

console.log(area_or_perimeter(4, 4)); // -> 16
console.log(area_or_perimeter(6, 10)); // -> 32
