//URL -> https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

//* NAME -> Testing 1-2-3

//TODO INSTRUCTIONS ->

/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/

//SOLUTION(S) ->

const number = (array) => array.map((e, i) => `${i + 1}: ${e}`);

//You are already getting the index from the map method, there is no need to use indexOf().

//Also to keep in mind, The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

//TEST CASES ->

console.log(number([])); // -> []
console.log(number(['a', 'b', 'c'])); // -> ['1: a', '2: b', '3: c']
