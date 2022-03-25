//TODO Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
	return x.split(' ').join('');
}

//Alternative arrow function

let noSpace = (x) => x.split(' ').join('');
