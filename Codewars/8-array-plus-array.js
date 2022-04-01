//URL -> https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

//* NAME -> Array plus array

//TODO INSTRUCTIONS -> I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

/*
P.S. Each array includes only integer numbers. Output is a number too.
*/

//SOLUTION(S) ->

let arrayPlusArray = (arr1, arr2) => arr1.reduce((a, c) => a + c, 0) + arr2.reduce((a, c) => a + c, 0);

//TEST CASES ->

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // -> 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -> -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // -> 15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // -> 2100
