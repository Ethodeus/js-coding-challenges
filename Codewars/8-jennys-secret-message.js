//URL -> https://www.codewars.com/kata/55225023e1be1ec8bc000390

//* NAME -> Jenny's secret message

//TODO INSTRUCTIONS -> Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?

//SOLUTION(S) ->

function greet(name) {
	if (name === 'Johnny') {
		return 'Hello, my love!';
	} else {
		return 'Hello, ' + name + '!';
	}
}

//Alternative with an arrow function and ternary operator

const greet2 = (name) =>
	name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`;

//TEST CASES ->

console.log(greet('Jim')); // -> 'Hello, Jim!'
console.log(greet('Jane')); // -> 'Hello, Jane!'
console.log(greet('Simon')); // -> 'Hello, Simon!'
console.log(greet('Johnny')); // -> 'Hello, my love!'

console.log(greet2('Jim')); // -> 'Hello, Jim!'
console.log(greet2('Jane')); // -> 'Hello, Jane!'
console.log(greet2('Simon')); // -> 'Hello, Simon!'
console.log(greet2('Johnny')); // -> 'Hello, my love!'
