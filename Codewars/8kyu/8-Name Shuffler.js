//URL -> https://www.codewars.com/kata/559ac78160f0be07c200005a

//* NAME -> Name Shuffler

//TODO INSTRUCTIONS -> Write a function that returns a string in which firstname is swapped with last name.

/*
nameShuffler('john McClane'); => "McClane john"
*/

//SOLUTION(S) ->

function nameShuffler(str) {
	return str.split(' ').reverse().join(' ');
}

//TEST CASES ->

console.log(nameShuffler('john McClane'), 'McClane john');
