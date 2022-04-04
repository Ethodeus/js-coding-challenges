//URL -> https://www.codewars.com/kata/57f780909f7e8e3183000078

//* NAME -> Beginner - Reduce but Grow

//TODO INSTRUCTIONS -> Given a non-empty array of integers, return the result of multiplying the values together in order.

/*
Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

//SOLUTION(S) ->

const grow = (x) => x.reduce((a, b) => a * b, 1);

//TEST CASES ->

console.log(grow([1, 2, 3])); // -> 6
console.log(grow([4, 1, 1, 1, 4])); // -> 16
console.log(grow([2, 2, 2, 2, 2, 2])); // -> 64
