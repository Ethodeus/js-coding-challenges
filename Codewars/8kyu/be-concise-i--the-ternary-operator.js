//URL -> https://www.codewars.com/kata/56f3f6a82010832b02000f38

//* NAME -> Be Concise I - The Ternary Operator

//TODO INSTRUCTIONS ->

/*
You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

If the age is 12 or lower, it return "You're a(n) kid"
If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
If the age is 65 or above, it return "You're a(n) elderly"
Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

I'll give you a few hints:

The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
Write everything in one line, \n and other whitespaces counts.
Whatever you do, do not change what the function does. Good luck :)
*/

//SOLUTION(S) ->

let str = "You're a(n)";
let describeAge = (age) =>
	age <= 12 ? `${str} kid` : age >= 13 && age <= 17 ? `${str} teenager` : age >= 18 && age <= 64 ? `${str} adult` : `${str} elderly`;

//spaces also count but it looks gross without them

//Codewars alternative ->

function describeAge(age) {
	return "You're a(n) " + (age < 13 ? 'kid' : age < 18 ? 'teenager' : age < 65 ? 'adult' : 'elderly');
}

//TEST CASES ->

console.log(describeAge(9), "You're a(n) kid");
console.log(describeAge(10), "You're a(n) kid");
console.log(describeAge(11), "You're a(n) kid");
console.log(describeAge(12), "You're a(n) kid");
console.log(describeAge(13), "You're a(n) teenager");
console.log(describeAge(14), "You're a(n) teenager");
console.log(describeAge(15), "You're a(n) teenager");
console.log(describeAge(16), "You're a(n) teenager");
console.log(describeAge(17), "You're a(n) teenager");
console.log(describeAge(18), "You're a(n) adult");
console.log(describeAge(19), "You're a(n) adult");
console.log(describeAge(63), "You're a(n) adult");
console.log(describeAge(64), "You're a(n) adult");
console.log(describeAge(65), "You're a(n) elderly");
console.log(describeAge(66), "You're a(n) elderly");
console.log(describeAge(100), "You're a(n) elderly");
