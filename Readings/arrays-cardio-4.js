// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
	'Bernhard, Sandra',
	'Bethea, Erin',
	'Becker, Carl',
	'Bentsen, Lloyd',
	'Beckett, Samuel',
	'Blake, William',
	'Berger, Ric',
	'Beddoes, Mick',
	'Beethoven, Ludwig',
	'Belloc, Hilaire',
	'Begin, Menachem',
	'Bellow, Saul',
	'Benchley, Robert',
	'Blair, Robert',
	'Benenson, Peter',
	'Benjamin, Walter',
	'Berlin, Irving',
	'Benn, Tony',
	'Benson, Leana',
	'Bent, Silas',
	'Berle, Milton',
	'Berry, Halle',
	'Biko, Steve',
	'Beck, Glenn',
	'Bergman, Ingmar',
	'Black, Elk',
	'Berio, Luciano',
	'Berne, Eric',
	'Berra, Yogi',
	'Berry, Wendell',
	'Bevan, Aneurin',
	'Ben-Gurion, David',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bennington, Chester',
	'Bierce, Ambrose',
	'Billings, Josh',
	'Birrell, Augustine',
	'Blair, Tony',
	'Beecher, Henry',
	'Biondo, Frank',
];

//* Array.prototype.filter()
//* 1. Filter the list of inventors for those who were born in the 1500's

const yearFifteen = inventors.filter(
	/** the filter loops through the whole arrow */ (inventors) => {
		if (inventors.year >= 1500 && inventors.year < 1600) {
			//the inventors function creates a condition to return values
			return true;
		}
	}
);

const fifteen = inventors.filter((inventor) =>
	inventor.year >= 1500 && inventor.year < 1600 ? true : false
);

console.table(yearFifteen);

console.table(fifteen);

//* Array.prototype.map()
//* 2. Give us an array of the inventors first and last names

const fullnames = inventors.map(
	(inventor) => inventor.first + ' ' + inventor.last
); //we use map to iterate through all the array elements and then we select their 'subelements' called first and last, the inventor function takes out those values, concatenates them and creates a new array with only those values.

console.log(fullnames);

//---------------------------

const fullnames2 = inventors.map(
	(inventor) => `${inventor.first} ${inventor.last}`
);

console.log(fullnames2);

//---------------------------

const inventorName = inventors.map(function (inventorName) {
	return inventorName.first + ' ' + inventorName.last;
});

console.table(inventorName);

//* Array.prototype.sort()
//* 3. Sort the inventors by birthdate, oldest to youngest

const oldestToYoungest = inventors.sort((first, second) => {
	if (first.year > second.year) {
		return 1;
	} else {
		return -1;
	}
});

console.table(oldestToYoungest);

//* Array.prototype.reduce()
//* 4. How many years did all the inventors live all together?

let sumAge = inventors.reduce((total, inventorAge) => {
	const age = inventorAge.passed - inventorAge.year;
	return (total += age);
}, 0);

console.log(sumAge);

//* 5. Sort the inventors by years lived

const inventorAge = inventors.sort((inventor1, inventor2) => {
	const age1 = inventor1.passed - inventor1.year; //This is getting the age of the first inventor
	const age2 = inventor2.passed - inventor2.year; //This is getting the age of the first inventor
	if (age1 < age2) {
		// we are comparing both ages and setting a condition to sort them from actually youngest to oldest
		return -1;
	} else {
		return 1;
	}
});

console.table(inventorAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
	.map((link) => link.textContent)
	.filter((streetName) => streetName.includes('de'));

//* 7. sort Exercise
// Sort the people alphabetically by last name

const sortLName = people.sort(function (lName1, lName2) {
	if (lName1 > lName2) {
		return 1;
	} else {
		return -1;
	}
});

console.table();

//* 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
	'car',
	'car',
	'truck',
	'truck',
	'bike',
	'walk',
	'car',
	'van',
	'bike',
	'walk',
	'car',
	'van',
	'car',
	'truck',
];

const transportation = data.reduce(function (
	obj /** array */,
	item /** tally */
) {
	if (!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
},
{});

console.log(transportation);
