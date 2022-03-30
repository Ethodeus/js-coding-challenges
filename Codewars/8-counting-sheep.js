//URL -> https://www.codewars.com/kata/54edbc7200b811e956000556

//* NAME ->

//TODO INSTRUCTIONS -> Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

/* 
For example,

	[true,  true,  true,  false,
	true,  true,  true,  true ,
	true,  false, true,  false,
	true,  false, false, true ,
	true,  true,  true,  true ,
	false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

//SOLUTION(S) ->

function countSheeps(arrayOfSheep) {
	let t = 0;
	arrayOfSheep.forEach((e) => (e === true ? (t += 1) : (t += 0)));
	return t;
}

//Alternative with filter() method.

function countSheeps2(arrayOfSheeps) {
	return arrayOfSheeps.filter(Boolean).length; //array.filter(item => Boolean(item).length)
}

/*
The filter(Boolean) step does the following:

- Passes each item in the array to the Boolean() object

- The Boolean() object coerces each item to true or false depending on whether it's truthy or falsy

- If the item is truthy, we keep it
*/

var array1 = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
];

//TEST CASES ->

console.log(countSheeps(array1)); // -> 17
console.log(countSheeps2(array1)); // -> 17
