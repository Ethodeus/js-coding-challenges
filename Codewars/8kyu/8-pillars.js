//URL -> https://www.codewars.com/kata/5bb0c58f484fcd170700063d

//* NAME -> Pillars

//TODO INSTRUCTIONS ->

/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

1. number of pillars (≥ 1);
2. distance between pillars (10 - 30 meters);
3. width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

//SOLUTION(S) ->

function pillars(pill, dist, width) {
	if (pill === 1) {
		return 0;
	}
	const distCm = dist * 100;
	return (pill - 2) * width + (pill - 1) * distCm;
}

//Codewars Alternative

function pillars(num_pill, dist, width) {
	return num_pill > 1 ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width : 0;
}

//TEST CASES ->

console.log(pillars(1, 10, 10), 0);
console.log(pillars(2, 20, 25), 2000);
console.log(pillars(11, 15, 30), 15270);
