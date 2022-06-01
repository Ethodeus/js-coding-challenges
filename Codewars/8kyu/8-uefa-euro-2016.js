//URL -> https://www.codewars.com/kata/57613fb1033d766171000d60

//* NAME -> UEFA EURO 2016

//TODO INSTRUCTIONS -> Finish the uefaEuro2016() function so it return string just like in the examples below:

/*
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

//SOLUTION(S) ->

function uefaEuro2016(teams, scores) {
	return scores.every((e) => e === scores[0])
		? `At match ${teams[0]} - ${teams[1]}, teams played draw.`
		: `At match ${teams[0]} - ${teams[1]}, ${teams[scores.indexOf(Math.max(...scores))]} won!`;
}

//TEST CASES ->

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]));
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]));
