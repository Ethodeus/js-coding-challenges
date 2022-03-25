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

//TODO Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

let filteredInPlace = (arr, a, b) => {
	for (let i = 0; i < arr.length; i++) {
		let spliced = arr[i];
		if (spliced < a || spliced > b) {
			arr.splice(i, 1); //since splicing an element from the array causes it to colapse...
			i--; //we tell the loop to 'take a step back' to make sure that it doesn't skip the element that colapsed into the spliced element spot
		}
	}
};

let newArr = [5, 3, 8, 1, 15];

filteredInPlace(newArr, 1, 10);

console.log(newArr);

//TODO Sort in decreasing order

let toSort = [5, 2, 1, -10, 8];

toSort.sort((a, b) => b - a);

alert(toSort);

//TODO We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

let strArr = ['HTML', 'JavaScript', 'CSS'];

let copySorted = (arr) => {
	return arr.slice().sort(); //slice without argument is just to create a copy of the original array without modifying the original, we the sort that new copy and return it.
};

console.log(copySorted(strArr));

//TODO
