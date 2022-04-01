//URL -> https://www.codewars.com/kata/555086d53eac039a2a000083

//* NAME -> Opposites Attract

//TODO INSTRUCTIONS ->

/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

//SOLUTION(S) ->

function lovefunc(flower1, flower2) {
	if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
		return true;
	} else {
		return false;
	}
}

//Alternatives

let lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2; //this function just makes sure that the result of the modulus operation in both variables is not equal to return true, otherwise, false.

//TEST CASES ->

console.log(lovefunc(1, 4)); // -> true
console.log(lovefunc(2, 2)); // -> false
console.log(lovefunc(0, 1)); // -> true
