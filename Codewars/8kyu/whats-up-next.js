//URL -> https://www.codewars.com/kata/542ebbdb494db239f8000046

//* NAME -> What's up next?

//TODO INSTRUCTIONS ->

/*
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
*/

//SOLUTION(S) ->

function nextItem(xs, item) {
	var found = false;
	for (var x of xs) {
		if (found) return x; //this only runs when the second 'if' is true and the value of found is changed to true, the reason it returns the next value is because the loop is going through the item next to item when found is true
		if (x == item) found = true;
	}
	return undefined;
}
