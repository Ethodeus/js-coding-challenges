//URL -> https://www.codewars.com/kata/53f0f358b9cb376eca001079

//* NAME -> Regular Ball Super Ball

//TODO INSTRUCTIONS ->

/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

//SOLUTION(S) ->

var Ball = function (ballType = 'regular') {
	this.ballType = ballType;
};

//TEST CASES ->

console.log(new Ball().ballType, 'regular');
console.log(new Ball('super').ballType, 'super');
