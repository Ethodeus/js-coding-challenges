//URL -> https://www.codewars.com/kata/565f5825379664a26b00007c

//* NAME -> Surface Area and Volume of a Box

//TODO INSTRUCTIONS -> Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//SOLUTION(S) ->

function getSize(w, h, l) {
	return [2 * (h * w) + 2 * (h * l) + 2 * (w * l), w * h * l];
}

//TEST CASES ->

console.log(getSize(4, 2, 6), [88, 48]);
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0], 88);
console.log(getSize(4, 2, 6)[1], 48);
