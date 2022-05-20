//URL -> https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

//* NAME -> Remove duplicates from list

//TODO INSTRUCTIONS -> Define a function that removes duplicates from an array of numbers and returns it as a result. The order of the sequence has to stay the same.

//SOLUTION(S) ->

function distinct(a) {
	return [...new Set(a)];
}

//TEST CASES ->

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);
