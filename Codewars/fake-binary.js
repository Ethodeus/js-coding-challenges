//TODO: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
	let arr = x.split('');
	return arr.map((e) => (e < 5 ? (e = 0) : (e = 1))).join('');
}

console.log(fakeBin('366058562030849490134388085'));
