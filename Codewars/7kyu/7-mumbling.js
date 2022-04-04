//URL -> https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

//* NAME -> Mumbling

//TODO INSTRUCTIONS -> This time no story, no theory. The examples below show you how to write function accum:

/* 
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//SOLUTION(S) ->

function accum(s) {
	const letters = s.split(''); //We split the string so we can target each leter of the string
	let solution = []; //create a new array that will hold new strings which contains every letter mutiplied by its element position(which is index+1)
	//we create a loop to iterate for all of our letters array
	for (let i = 0; i < letters.length; i++) {
		solution.push(letters[i].repeat(i + 1)); //for each iteration we are adding to our solution array the letter based on the index and repeat it multiplying the letter by its index +1
	}
	solution = solution.map((str) => str.toLowerCase()); //we reassign our solution array with a new one that converts all of its letters to lowercase
	solution = solution.map((str) => str.charAt(0).toUpperCase() + str.slice(1)); //we reassign our solution to a new array but this time we target the first character of every string and set it to upper case and then we add a slice of the original array starting from the element in the 1st index
	return solution.join('-'); //Then we join all the strings in the array with a -
}

//Alternative with arrow function

let accum = (s) =>
	s
		.split('')
		.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
		.join('-');

//TEST CASES ->

console.log(accum('ZpglnRxqenU')); // -> Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
console.log(accum('NyffsGeyylB')); // -> N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb
console.log(accum('MjtkuBovqrU')); // -> M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu
console.log(accum('HbideVbxncC')); // -> H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc
console.log(accum('EvidjUnokmM')); // -> E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm
