//URL -> https://www.codewars.com/kata/57faf7275c991027af000679

//* NAME -> Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

//TODO INSTRUCTIONS ->

/*
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

//SOLUTION(S) ->

function remove(s, n) {
	let input = s;
	while (n) {
		input = input.replace(/!/, '');
		n--;
	}
	return input;
}

//Notes -> I can definitely do it with a for loop, however, i wasn't storing the new string anywher.

//TEST CASES ->

console.log(remove('Hi!', 1), 'Hi');
console.log(remove('Hi!', 100), 'Hi');
console.log(remove('Hi!!!', 1), 'Hi!!');
console.log(remove('Hi!!!', 100), 'Hi');
console.log(remove('!Hi', 1), 'Hi');
console.log(remove('!Hi!', 1), 'Hi!');
console.log(remove('!Hi!', 100), 'Hi');
console.log(remove('!!!Hi !!hi!!! !hi', 1), '!!Hi !!hi!!! !hi');
console.log(remove('!!!Hi !!hi!!! !hi', 3), 'Hi !!hi!!! !hi');
console.log(remove('!!!Hi !!hi!!! !hi', 5), 'Hi hi!!! !hi');
console.log(remove('!!!Hi !!hi!!! !hi', 100), 'Hi hi hi');
