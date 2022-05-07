//URL -> https://www.codewars.com/kata/59342039eb450e39970000a6

//* NAME -> Count Odd Numbers below n

//TODO INSTRUCTIONS -> Given a number n, return the number of positive odd numbers below n, EASY!

/*
Examples (Input -> Output)

* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!
*/

//SOLUTION(S) ->

function oddCount(n) {
	return Math.floor(n / 2);
}

//TEST CASES ->

console.log(oddCount(15), 7, 'Oops! Wrong.');
console.log(oddCount(15023), 7511, 'Oops! Wrong.');
