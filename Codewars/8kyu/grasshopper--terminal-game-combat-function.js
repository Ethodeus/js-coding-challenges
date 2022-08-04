//URL -> https://www.smartwebsolutions.org/replace-space-with-hyphen/

//* NAME -> Grasshopper - Terminal game combat function

//TODO INSTRUCTIONS -> Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

//SOLUTION(S) ->

function combat(health, damage) {
	return health - damage < 0 ? 0 : health - damage;
}

//TEST CASES ->

console.log(combat(100, 5), 95);
console.log(combat(92, 8), 84);
console.log(combat(20, 30), 0, 'Health cannot go below 0');
