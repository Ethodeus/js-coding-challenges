//URL -> https://www.codewars.com/kata/557b5e0bddf29d861400005d

//* NAME -> Miles per gallon to kilometers per liter

//TODO INSTRUCTIONS ->

/*
Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
*/

//SOLUTION(S) ->

function converter(mpg) {
	let litersInGallon = 4.54609188;
	let kilometersPerMile = 1.609344;
	let ratio = kilometersPerMile / litersInGallon;
	return Math.round(100 * mpg * ratio) / 100;
}

//TEST CASES ->

console.log(converter(10), 3.54);
console.log(converter(20), 7.08);
console.log(converter(30), 10.62);
