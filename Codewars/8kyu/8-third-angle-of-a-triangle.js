//URL -> https://www.codewars.com/kata/5a023c426975981341000014

//* NAME -> Third Angle of a Triangle

//TODO INSTRUCTIONS -> You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.

//SOLUTION(S) ->

function otherAngle(a, b) {
	return 180 - (a + b);
}

//Arrow function alternative

const otherAngle = (a, b) => {
	return 180 - (a + b);
};

//TEST CASES ->

console.log(otherAngle(30, 60)); // -> 90
console.log(otherAngle(60, 60)); // -> 60
console.log(otherAngle(43, 78)); // -> 59
console.log(otherAngle(10, 20)); // -> 150
