//TODO You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

function smallEnough(a, limit) {
	return a.every((e) => e <= limit);
}

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
