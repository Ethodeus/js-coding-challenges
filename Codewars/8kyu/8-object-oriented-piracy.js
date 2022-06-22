//URL -> https://www.codewars.com/kata/54fe05c4762e2e3047000add

//* NAME -> Object Oriented Piracy

//TODO INSTRUCTIONS ->

/*
Ahoy matey!

You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

You begin with writing a generic Ship class / struct:

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}
Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

draft - an estimate of the ship's weight based on how low it is in the water
crew - the count of crew on board
var titanic = new Ship(15, 10);
Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt
to decide if the ship is worthy to loot. For example:

titanic.isWorthIt() // return false
This Kata teaches you the very basic of method creation.

Good luck!
*/

//SOLUTION(S) ->

function Ship(draft, crew) {
	this.draft = draft;
	this.crew = crew;
	this.crewMWeight = 1.5;
	this.isWorthIt = function () {
		return this.draft - this.crew * this.crewMWeight > 20;
	};
}

//TEST CASES ->

let emptyShip = new Ship(0, 0);
console.log(emptyShip.isWorthIt(), false);
let aBoat = new Ship(15, 20);
console.log(aBoat.isWorthIt(), false);
let biggerBoat = new Ship(35, 20);
console.log(biggerBoat.isWorthIt(), false);
let aWorthyShip = new Ship(100, 20);
console.log(aWorthyShip.isWorthIt(), true);
