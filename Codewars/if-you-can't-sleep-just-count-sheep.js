//TODO Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
	let count = '';
	for (i = 1; i <= num; i++) {
		count = count + i + ' sheep...';
	}
	return count;
};

/** 
1. create an empty varilable before the loop, which will hold the strings that the loop will generate.
2. create a loop that iterates between 1 and the number provided in the argument. 
3. for each loop count is added i and the ' sheep...' string, in JS when you add a variable, that is a number, and a string,
the result will always be a string. 
*/
