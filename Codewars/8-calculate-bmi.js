//URL -> https://www.codewars.com/kata/57a429e253ba3381850000fb

//* NAME -> Calculate BMI

//TODO INSTRUCTIONS -> Write function bmi that calculates body mass index (bmi = weight / height2).

/* 
if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//SOLUTION(S) ->

function bmi(weight, height) {
	let bmi = weight / height ** 2;

	if (bmi <= 18.5) {
		return 'Underweight';
	} else if (bmi <= 25) {
		return 'Normal';
	} else if (bmi <= 30) {
		return 'Overweight';
	} else {
		return 'Obese';
	}
}

//Alternative with arrow function and ternary operator

const bmi = (w, h, bmi = w / h / h) =>
	bmi <= 18.5
		? 'Underweight'
		: bmi <= 25
		? 'Normal'
		: bmi <= 30
		? 'Overweight'
		: 'Obese';

//TEST CASES ->

console.log(bmi(80, 1.8)); // -> 'Normal'
console.log(bmi2(80, 1.8)); // -> 'Normal'
