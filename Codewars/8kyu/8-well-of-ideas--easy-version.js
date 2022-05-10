//URL -> https://www.codewars.com/kata/57f222ce69e09c3630000212

//* NAME -> Well of Ideas - Easy Version

//TODO INSTRUCTIONS -> For every good kata idea there seem to be quite a few bad ones!

/*
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

//SOLUTION(S) ->

function well(x) {
	let newArr = x.filter((e) => e === 'good');

	if (newArr.length > 2) {
		return 'I smell a series!';
	}
	if (newArr.length > 0) {
		return 'Publish!';
	}

	return 'Fail!';
}

//Alternative with arrow function

//prettier-ignore
let well = (x) => x.filter((e) => e === 'good').length > 2 ? 'I smell a series!' : x.filter((e) => e === 'good').length > 0 ?  'Publish!' : 'Fail!'

//TEST CASES ->

console.log(); // ->
console.log(); // ->
console.log(); // ->
