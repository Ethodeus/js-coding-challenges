//URL -> https://www.codewars.com/kata/570a6a46455d08ff8d001002

//* NAME -> No zeros for heros

//TODO INSTRUCTIONS ->

/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

//SOLUTION(S) ->

function noBoringZeros(n) {
	let str = n.toString();
	let arr = str.split('');
	if (arr[0] === '0') {
		//If n is equal to 0, return 0
		return parseInt(arr.join(''));
	}
	//reversed loop through the array and remove the 0 while the index is more than 0
	for (var i = arr.length - 1; i > 0; i--) {
		if (arr[i] === '0') {
			arr.splice(i, 1);
		} else {
			return parseInt(arr.join(''));
		}
	}
}

//Alternative with recursion.

function noBoringZeros(n) {
	return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}

//TEST CASES ->

console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);
