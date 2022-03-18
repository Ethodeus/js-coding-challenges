//*Musketeers:

/*

Write a program that:

-Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
-Shows each array element using a for loop.
-Adds the "D'Artagnan" value to the array.
-Shows each array element using the forEach() method.
-Remove poor Aramis.
-Shows each array element using a for-of loop. 

*/

let musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
	const element = musketeers[i];
	console.log(element);
}

musketeers.push("D'Artagnan");

musketeers.forEach((x) => {
	console.log(x);
});

musketeers.splice(2, 1);

for (const x of musketeers) {
	console.log(x);
}

//* Sum of values

//TODO Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];

for (let i = 0; i < values.length; i++) {
	let sum = 0; //create a variable that will hold the value of all the additions.
	sum += values[i]; //sum = sum + values[i] (this selects the arrays element based on its index, and the index is determined by the loop)
}

console.log(sum);

//*Array maximum

//TODO Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = ['8', '3', '-5', '42', '-1', '0', '0', '-9', '4', '7', '4', '-4'];

let max = values[0]; //max is quivalent to 3 at this point.

for (let i = 1; i < values.length; i++) { // we didn't use 0 in the loop beacuse we have already set up the starting point in the variables
	//loop to go through the array.
	if (values[i] > max) {
		//if the element that is in index (i), which changes per iteration.
		max = values[i]; //change the value of max to that number.
	}
}
//the loop doesn't stop on index[i] because the number of iterations is set by the (i < valuesMax.length) condition.
console.log(max);

//* List of words

//TODO Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

const words = []; //create an empty variable to hold the words we type before stop

let word = ''; //We create an empty word variable so that when the program is run it goes automatically to the prompt.

while (word !== 'stop') {
	// as long as the word isn't stop prompt to ask for another word or stop to quit.
	word = prompt('Enter as many words as you like or "stop" to quit:');
	if (word !== 'stop') {
		//this condition is executed along with the prompt, if the word still isn't stop, we will push that word to the beginning of the emtpy array that we created.
		words.push(word); //if we use unshift, it causes the first word entered to be at the end of the array because every subsequent word will be added before that.
	}
}

console.log('You have entered the following words before quitting:');

words.forEach((w) => {
	//here we created a forEach loop to go through the array and log each of its elements.
	console.log(w);
});
