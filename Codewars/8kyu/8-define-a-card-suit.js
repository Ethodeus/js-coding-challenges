//URL -> https://www.codewars.com/kata/5a360620f28b82a711000047

//* NAME -> Define a card suit

//TODO INSTRUCTIONS -> You get any card as an argument. Your task is to return the suit of this card (in lowercase).

/*
Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

//SOLUTION(S) ->

function defineSuit(card) {
	return card[card.length - 1] === '♠'
		? 'spades'
		: card[card.length - 1] === '♦'
		? 'diamonds'
		: card[card.length - 1] === '♣'
		? 'clubs'
		: 'hearts';
}

//Codewars Alternative with an object

function defineSuit(card) {
	const s = {
		'♣': 'clubs',
		'♠': 'spades',
		'♦': 'diamonds',
		'♥': 'hearts',
	};
	return s[card.charAt(card.length - 1)];
}

//TEST CASES ->

console.log(); // ->
console.log(); // ->
console.log(); // ->
