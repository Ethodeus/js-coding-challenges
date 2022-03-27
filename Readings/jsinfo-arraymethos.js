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

function camelize(str) {
	let arr = str.split('-');
	arr = arr.map((word, index) =>
		index == 0 ? word : word[0].toUpperCase() + word.slice(1)
	);
	arr = arr.join('');
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

let arr2 = [5, 3, 8, 1, 15];

filteredInPlace(arr2, 1, 10);

console.log(arr2);

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

//TODO: You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => ` ${item.name}`);

alert(names); // John, Pete, Mary

//TODO: You have an array of user objects, each one has name, surname and id.

let john = { name: 'John', surname: 'from Dallas', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => {
	let newUser = {
		fullName: `${user.name} ${user.surname}`,
		id: user.id,
	};
	return newUser;
});

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith

//TODO: Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arrOfUsers = [pete, john, mary];

let sortByAge = (array) => arrOfUsers.sort((a, b) => a.age - b.age);

sortByAge(arrOfUsers);

// now: [john, mary, pete]
console.log(arrOfUsers[0].name); // John
console.log(arrOfUsers[1].name); // Mary
console.log(arrOfUsers[2].name); // Pete

//TODO: Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

let arrOfNums = [1, 2, 3];

let shuffle = () => arrOfNums.sort(() => Math.random() - 0.5);

shuffle(arrOfNums);

console.log(arrOfNums);

//TODO: Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arrOfUsers = [pete, john, mary];

let getAverage = (users) => {
	return users.reduce((a, b) => a + b.age, 0) / users.length;
};

console.log(getAverage(arrOfUsers));

//TODO: Let arr be an array. Create a function unique(arr) that should return an array with unique items of arr.

let strings = [
	'Hare',
	'Krishna',
	'Hare',
	'Krishna',
	'Krishna',
	'Krishna',
	'Hare',
	'Hare',
	':-O',
];

let newArray = [...new Set(strings)];

console.log(newArray);

//-------------------------------------------

function unique(arr) {
	let result = [];

	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}
	return result;
}

console.log(unique(strings)); // Hare, Krishna, :-O

//TODO: Let’s say we received an array of users in the form {id:..., name:..., age:... }. Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

let users = [
	{ id: 1, name: 'John Smith', age: 20 },
	{ id: 2, name: 'Ann Smith', age: 24 },
	{ id: 3, name: 'Pete Peterson', age: 31 },
];

function groupById(array) {
	return array.reduce((obj, value) => {
		obj[value.id] = value;
		return obj;
	}, {});
}

// {
// 	1:{ id: 'john', name: 'John Smith', age: 20 },
// 	2:{ id: 'ann', name: 'Ann Smith', age: 24 },
// 	3:{ id: 'pete', name: 'Pete Peterson', age: 31 }
// }

let usersById = groupById(users);

console.log(usersById);
