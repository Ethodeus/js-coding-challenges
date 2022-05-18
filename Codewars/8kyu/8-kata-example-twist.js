//URL -> https://www.codewars.com/kata/525c1a07bb6dda6944000031

//* NAME -> Kata Example Twist

//TODO INSTRUCTIONS ->

/*
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []
*/

//SOLUTION(S) ->

var websites = [];

for (let i = 0; i < 1000; i++) {
	websites.push('codewars');
}

//Codewars Alternative

var websites = new Array(1000).fill('codewars');
