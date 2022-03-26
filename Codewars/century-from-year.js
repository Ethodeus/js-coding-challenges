// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

//TODO Given a year, return the century it is in.

function century(year) {
	return Math.ceil(year / 100);
}

//The Math.ceil() function always rounds a number up to the next largest integer.
