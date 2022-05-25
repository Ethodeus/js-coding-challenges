//URL -> https://www.codewars.com/kata/58dced7b702b805b200000be

//* NAME -> Geometry Basics: Distance between points in 2D

//TODO INSTRUCTIONS ->

/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
*/

//SOLUTION(S) ->

function distanceBetweenPoints(a, b) {
	return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

//TEST CASES ->

console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001);
