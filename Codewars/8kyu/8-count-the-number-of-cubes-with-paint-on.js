//URL -> https://www.codewars.com/kata/5763bb0af716cad8fb000580

//* NAME -> Count the number of cubes with paint on

//TODO INSTRUCTIONS ->

/*
Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

https://i.imgur.com/36x8Fkv.png

Examples:
countSquares(2) --> 26
countSquares(4) --> 98
*/

//SOLUTION(S) ->

var countSquares = function (cuts) {
	return cuts === 0 ? 1 : 6 * cuts * cuts + 2;
};

//TEST CASES ->

console.log(countSquares(5), 152);
console.log(countSquares(16), 1538);
console.log(countSquares(23), 3176);
