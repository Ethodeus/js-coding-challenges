//URL -> https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

//* NAME -> Removing Elements

//TODO INSTRUCTIONS -> Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//SOLUTION(S) ->

function removeEveryOther(arr) {
	return arr.filter((e, i) => i % 2 === 0);
}

// Arrow function alternative

const removeEveryOther = (a) => a.filter((e, i) => i % 2 === 0);

//TEST CASES ->

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // -> ['Hello', 'Hello Again']
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // -> [1, 3, 5, 7, 9]
console.log(removeEveryOther([[1, 2]])); // -> [[1, 2]]
console.log(removeEveryOther([['Goodbye'], { Great: 'Job' }])); // -> [['Goodbye']]
