//URL -> https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

//* NAME -> List Filtering

//TODO INSTRUCTIONS -> In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

/*
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//SOLUTION(S) ->

function filter_list(l) {
	const newlist = l.filter((number) => typeof number === 'number'); //filters out all the elements in the array which type is equal to 'number' and returns a new array with only those elements.
	return newlist;
}

// You can use the typeof operator to determine the data type of a variable, element, array, etc.

//Alternatives with arrow function

let filter_list = (l) => l.filter((number) => typeof number === 'number');

//You can also use The Number.isInteger() method to determines whether the evaluatred value is an integer.

let filter_list = (l) => l.filter((number) => Number.isInteger(number));

//TEST CASES ->

console.log(filter_list([1, 2, 'a', 'b'])); // -> [1,2]
console.log(filter_list([1, 'a', 'b', 0, 15])); // -> [1,0,15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); // -> [1,2,123]
