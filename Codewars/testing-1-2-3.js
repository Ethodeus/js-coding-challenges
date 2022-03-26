//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

//TODO   Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

const number = (array) => array.map((e, i) => `${i + 1}: ${e}`);

console.log(number(['', '', '', '', '']));

const number2 = (arr) => arr.map((e, i) => `${arr.indexOf(e, i) + 1}: ${e}`); //this solution is redundant sinbce you are already getting the index of all the elements of the original array with the map method.

console.log(number2(['', '', '', '', '']));

//Also to keep in mind, The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
