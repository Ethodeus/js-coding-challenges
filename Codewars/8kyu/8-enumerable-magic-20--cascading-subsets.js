//URL -> https://www.codewars.com/kata/545af3d185166a3dec001190

//* NAME -> Enumerable Magic #20 - Cascading Subsets

//TODO INSTRUCTIONS -> Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

/*

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]

*/

//SOLUTION(S) ->

function eachCons(array, n) {
	let newArr = [];

	array.forEach((e, i) => newArr.push(array.slice(i, i + n)));

	return newArr.filter((e) => e.length === n);
}

//TEST CASES ->

const lst = [3, 5, 8, 13];

console.log(eachCons(lst, 1), [[3], [5], [8], [13]]);
console.log(eachCons(lst, 2), [
	[3, 5],
	[5, 8],
	[8, 13],
]);
console.log(eachCons(lst, 3), [
	[3, 5, 8],
	[5, 8, 13],
]);
