//URL -> https://www.codewars.com/kata/56a29b237e9e997ff2000048

//* NAME -> Grasshopper - Create the rooms

//TODO INSTRUCTIONS ->

/*
Escape the room

You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
*/

//SOLUTION(S) ->

var rooms = {
	firstRoom: {
		name: 'firstRoom',
		decription: 'This room is red',
		completed: true,
	},
	secondRoom: {
		name: 'secondRoom',
		decription: 'This room is blue',
		completed: false,
	},
	thirdRoom: {
		name: 'secondRoom',
		decription: 'This room is blue',
		completed: false,
	},
};
