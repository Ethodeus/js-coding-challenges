//URL -> https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

//* NAME -> Draw stairs

//TODO INSTRUCTIONS ->

/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

//SOLUTION(S) ->

function drawStairs(n) {
	let arr = [...Array(n).keys()].map((_, i) => i + 1); //create an array from 1 to n

	for (let i = 0; i < arr.length; i++) { //loop through each element and replace it with an I, with spaces times i before it. 
		arr[i] = ' '.repeat(i) + 'I';
	}

	return arr.join('\n'); //join all the previous i's with '\n'
}