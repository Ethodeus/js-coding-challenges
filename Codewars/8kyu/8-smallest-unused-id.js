//URL -> https://www.codewars.com/kata/55eea63119278d571d00006a

//* NAME -> Smallest unused ID

//TODO INSTRUCTIONS ->

/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

//SOLUTION(S) ->

function nextId(ids) {
	for (let i = 0; i < ids.length + 1; i++) {
		if (ids.indexOf(i) == -1) return i;
	}
}

//TEST CASES ->

console.log(nextId([0, 1, 2, 3, 5]), 4);
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
