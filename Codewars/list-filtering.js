//TODO In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
	const newlist = l.filter((number) => typeof number === 'number'); //filters out all the elements in the array which type is equal to 'number' and returns a new array with only those elements.
	return newlist;
}

// You can use the typeof operator to determine the data type of a variable, element in an array, etc.

//Alternatives

function filter_list(l) {
	return l.filter((number) => typeof number === 'number');
}

//You can also use The Number.isInteger() method to determines whether the evaluatred value is an integer.

function filter_list(l) {
	return l.filter((number) => Number.isInteger(number));
}
