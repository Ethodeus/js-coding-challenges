//TODO Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
	let arr = str.split('-'); //Splits the word into an array
	arr = arr.map(
		(
			word,
			index //Maps goes through every element of an array and performs a function (is evaluating every string)
		) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)) // if the index of the element is o, then retun the word without changes, otherwise, select the first letter of that word and set it to uppercase and add the slice of that word starting from the letter in index 1
	);
	arr = arr.join(''); //then join the words without any spaces.
	return arr;
}

camelize('background-color');

//TODO Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

let arr = [5, 3, 8, 1, 20, 4, 7];

let filtered = (arr, a, b) => {
	return arr.filter((item) => item >= a && item <= b); //filter through the arr, and take out the items that are >= than a AND <= than b
};

console.log(filtered(arr, 1, 7));
