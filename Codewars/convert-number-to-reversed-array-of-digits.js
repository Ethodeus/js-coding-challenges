//TODO  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

let digitize = (n) => {
	return String(n)
		.split('')
		.map((e) => Number(e))
		.reverse();
};

console.log(digitize(35231));

//Unoptimized

function digitize(n) {
	let str = String(n);
	str = str.split('');
	str = str.map((e) => Number(e));
	str = str.reverse().join('');
}
