//TODO Given an array of integers, return a new array with each value doubled.

function maps(x) {
	let newmaps = [];
	x.forEach((num) => {
		newmaps.push(num + num);
	});
	return newmaps;
}

/** 
1. create an empty array that will hold the new values
2. create a loop to go through all elements on the array
3.  for each iteration add the number of array x to the newmaps array adding x again.
*/
