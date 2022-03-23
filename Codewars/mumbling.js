//TODO This time no story, no theory. The examples below show you how to write function accum:

//*Examples:

/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(s) {
	const letters = s.split(''); //We split the string so we can target each leter of the string
	let solution = []; //create a new array that will hold new strings which contains every letter mutiplied by its element position(which is index+1)
	//we create a loop to iterate for all of our letters array
	for (let i = 0; i < letters.length; i++) {
		solution.push(letters[i].repeat(i + 1)); //for each iteration we are adding to our solution array the letter based on the index and repeat it multiplying the letter by its index +1
	}
	solution = solution.map((str) => str.toLowerCase()); //we reassign our solution array with a newone that convers all of its letters to lowercase
	solution = solution.map((str) => str.charAt(0).toUpperCase() + str.slice(1)); //we reassign our solution to a new array but this time we target the first character of every string and set it to upper case and then we add a slice of the original array starting from the element in the 1st index
	return solution.join('-'); //Then we join all the strings in the array with a -
}
