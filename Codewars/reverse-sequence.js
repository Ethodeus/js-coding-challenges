//TODO: Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
	let arr = [];
	for (i = 1; i <= n; i++) { //the loop starts from 1 because we would be adding a 0 to each array of we start from 0. 
		arr.push(i);
	}
	return arr.reverse();
};

console.log(reverseSeq(10))

//Alternative with a reverse loop

const reverseSeq2 = (n) => {
	let arr = [];
	for (let i = n; i > 0; i--) {
		arr.push(i);
	}
	return arr;
};