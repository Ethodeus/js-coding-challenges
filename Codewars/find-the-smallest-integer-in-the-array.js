//TODO Given an array of integers your solution should find the smallest integer.

function findSmallestInt(args) {
	let sorted = args.sort((a, b) => a - b);
	return sorted[0];
}
