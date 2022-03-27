//TODO Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
	let arr = name.split(' ');
	return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
}

console.log(abbrevName('Sebastian Ospina'));
