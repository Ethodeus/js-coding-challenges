//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
	return array.map((e) => -e);
}

//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
