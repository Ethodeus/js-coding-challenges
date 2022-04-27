//URL -> https://www.codewars.com/kata/55c28f7304e3eaebef0000da

//* NAME -> Unfinished Loop - Bug Fixing #1

//TODO INSTRUCTIONS -> Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

//SOLUTION(S) ->

function createArray(number) {
	var newArray = [];

	for (var counter = 1; counter <= number; counter++) {
		newArray.push(counter);
	}

	return newArray;
}

//The loop is missing the increment to the counter

//TEST CASES ->

console.log(createArray(1)); // -> [1]
console.log(createArray(2)); // -> [1,2]
console.log(createArray(3)); // -> [1,2,3]
console.log(createArray(4)); // -> [1,2,3,4]
