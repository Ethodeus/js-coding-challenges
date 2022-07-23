//URL -> https://www.codewars.com/kata/55c0ac142326fdf18d0000af

//* NAME -> Playing with cubes II

//TODO INSTRUCTIONS ->

/*
Hey Codewarrior!

You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

The constructor taking no arguments should assign 0 to Cube's Side property.
*/

//SOLUTION(S) ->

class Cube {
	constructor(side) {
		this.side = !side ? 0 : Math.abs(side); // if there is no argument, side will always be 0, and making sure the argument is always a positive number.
	}

	getSide() {
		return this.side;
	}
	setSide(n) {
		this.side = Math.abs(n);
	}
}

//Codewars Alternative ->

class Cube {
	constructor(side) {
		this.setSide(side);
	}

	getSide() {
		return this.side;
	}

	setSide(side = 0) {
		this.side = Math.abs(side);
	}
}
