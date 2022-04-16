//URL -> https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

//* NAME -> Find the first non-consecutive number

//TODO INSTRUCTIONS ->

/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
*/

//SOLUTION(S) ->

const firstNonConsecutive = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] + 1 !== arr[i + 1]) {
			//this is taking the current iteration of the loop, in this case 4 and adding 1 to it, and if the next iteration in the array is not equal to that, then we return that value.
			console.log(arr[i] + 1, arr[i + 1]);
			return arr[i + 1];
		}
	}

	return null; //if all the values in the array are consecutive we return
};

//TEST CASES ->

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // -> 6
