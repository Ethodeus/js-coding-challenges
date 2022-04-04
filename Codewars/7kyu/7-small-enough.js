//URL -> https://www.codewars.com/kata/57cc981a58da9e302a000214

//* NAME ->

//TODO INSTRUCTIONS -> Small enough? - Beginner You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//You can assume all values in the array are numbers.

//SOLUTION(S) ->

function smallEnough(a, limit) {
	return a.every((e) => e <= limit);
}

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//TEST CASES ->

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // -> false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); // -> true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)); // -> true
