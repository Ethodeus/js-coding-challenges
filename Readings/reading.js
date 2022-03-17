//! 3, 2, 1... Code!

// 1. Write a program that displays your name and age. Here's the result for mine.

console.log(Sebastian);
console.log(28);

// 2. Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.

console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);

//3. Observe the following program and try to predict the values it displays.

console.log(4 + 5); //should display 9
console.log('4 + 5'); // should display 4 + 5
console.log('4' + '5'); // should display 45

//! Variables.

// 1. Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

const names = prompt('Please enter your first and last name');

alert(`Hello, ${names}`);

// 2. Observe the following program and try to predict the final values of its variables.

let a = 2; // a is equal to 2
a -= 1; // a is equal to 1
a++; //? a is equal to 2
let b = 8; //b is equal to 8
b += 2; //?b is equal to 10
const c = a + b * b; //c is equal to 102
const d = a * b + b; //d is equal to 30
const e = a * (b + b); // e is equal to 40
const f = (a * b) / a; // f i equal to 10
const g = (b / a) * a; // g is equial to 10
console.log(a, b, c, d, e, f, g);

// 3. Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

const price = Number(prompt('Please provide your price'));

let finalPrice = price + (price / 100) * 20.6;

alert(`YOur final prince including taxes is $${finalPrice}`);

// 4. Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

const celsius = Number(prompt('Please enter the temperature'));

const fahrenheit = (celsius * 9) / 5 + 32;

alert(`The temperature in °F is ${fahrenheit}`);

//5. Add the necessary code to swap the values of variables number1 and number2.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
let tmp = number1;
number1 = number2;
number2 = tmp;

console.log(number1); // Should show 3
console.log(number2); // Should show 5

//! Adding conditions

//1. Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

const day = prompt('Please enter one day of the week').toLowerCase();
if (day === 'monday') {
	console.log('tuesday');
} else if (day === 'tuesday') {
	console.log('wednesday');
} else if (day === 'wednesday') {
	console.log('thursday');
} else if (day === 'thursday') {
	console.log('friday');
} else if (day === 'friday') {
	console.log('sturday');
} else if (day === 'saturday') {
	console.log('sunday');
} else if (day === 'sunday') {
	console.log('monday');
} else {
	console.log('that is not a day of the week.');
}

// -----------------

const days = prompt('Please enter one day of the week').toLowerCase();
switch (days) {
	case 'monday':
		console.log('tuesday');
		break;
	case 'tuesday':
		console.log('wednesday');
		break;
	case 'wednesday':
		console.log('thursday');
		break;
	case 'thursday':
		console.log('friday');
		break;
	case 'friday':
		console.log('saturday');
		break;
	case 'saturday':
		console.log('sunday');
		break;
	case 'sunday':
		console.log('monday');
		break;
	default:
		console.log('that is not a day of the week');
}

//2. Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

const num1 = Number(prompt('Please enter the first number'));
const num2 = Number(prompt('Please enter the first number'));
if (num1 < num2) {
	console.log(`${num1} is less than ${num2}`);
} else if (num1 > num2) {
	console.log(`${num1} is greater than ${num2}`);
} else {
	console.log(`${num1} and ${num2} are equal`);
}

// 3. Determine final values before executing program

let nb1 = Number(prompt('Enter nb1:'));
let nb2 = Number(prompt('Enter nb2:'));
let nb3 = Number(prompt('Enter nb3:'));
if (nb1 > nb2) {
	nb1 = nb3 * 2;
} else {
	nb1++;
	if (nb2 > nb3) {
		nb1 += nb3 * 3;
	} else {
		nb1 = 0;
		nb3 = nb3 * 2 + nb2;
	}
}
console.log(nb1, nb2, nb3);

// Results:
// 1. 0 4 12
// 2. 4 3 2
// 3. 3 4 0

// 4. Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

const month = Number(prompt('Enter a month number:'));
if (
	month === 1 ||
	month === 3 ||
	month === 5 ||
	month === 7 ||
	month === 8 ||
	month === 10 ||
	month === 12
) {
	console.log('This month has 31 days');
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
	console.log('This month has 30 days');
} else if (month === 2) {
	console.log('This month has 28/29 days');
} else {
	console.log('Unknown month');
}

// -----------------

const months = Number(prompt('Enter a month number:'));
switch (months) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		alert('This month has 31 days');
		break;
	case 4:
	case 6:
	case 9:
	case 11:
		alert('This month has 30 days');
		break;
	case 2:
		alert('This month has 28/29 days');
		break;
	default:
		alert('UNknown month');
}

//---------------
const monthsYear = Number(prompt('Enter a month number:'));

if (monthsYear >= 1 && monthsYear <= 12) {
	//Sets all months to have 31 days by default by creating a variable equal to 31 if we type a month number between 1 and 12
	let numdays = 31;
	switch (
		monthsYear // Create a switch to create new conditions.
	) {
		case 4:
		case 6:
		case 9:
		case 11:
			numdays = 30; // if we type in a month number that has 30 days we change the variable that we created first to match that number of days
			break;
		case 2:
			numdays = '28/29'; //We do the same here in the case of February
			break;
	}
	console.log(`This month has ${numdays} days`); // we display the variable with a template literal
} else {
	console.log('Unknown month'); // if we type a number lower than 1 and higher than 12
}

//4. Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

let hours = Number(prompt('Enter the hours:'));
let minutes = Number(prompt('Enter the minutes:'));
let seconds = Number(prompt('Enter the seconds:'));

// We start by testing errors cases, to make sure that the user inputs correct values
if (
	hours >= 0 &&
	hours <= 23 &&
	minutes >= 0 &&
	minutes <= 59 &&
	seconds >= 0 &&
	seconds <= 59
) {
	seconds++; // Incrementing the seconds, this code block would stop here if the increment in seconds doesn't affect the minutes, hours or days.
	if (seconds === 60) {
		seconds = 0; //if seconds reaches 60, it resets to 0 and increments the minutes value
		minutes++; //this code block would stop here if the increment in minutes doesn't affect the hours or days.
		if (minutes === 60) {
			minutes = 0; //if minutes reaches 60, it resets to 0 and increments the hours value
			hours++; //this code block would stop here if the increment in hours doesn't affect the days.
			if (hours === 24) {
				hours = 0; //if hours reaches 24, it resets to 0 and it is midnight
			}
		}
	}
	console.log(
		`In a second, the time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds`
	);
} else {
	console.log(
		'Incorrect values; enter hours ranging from 0 to 24 and minutes, and seconds ranging from 0 to 60!'
	); //in case the user inputs an incorrect value for seconds, minutes and days.
}

//! Repeat statements (LOOPS)

//1. Write a program that launches a carousel for 10 turns, showing the turn number each time. When it's done, improve it so that the number of turns is given by the user.

let carouselTurns = 1;

while (carouselTurns <= 10) {
	console.log(carouselTurns);
	carouselTurns++;
}

let carouselTurn = 1;

for (i = carouselTurn; i <= 10; i++) {
	console.log(i);
}

//---------------

let carouselT = Number(prompt('Please enter the number of turns:'));
let startPoint = 1;

while (startPoint <= carouselT) {
	console.log(startPoint);
	startPoint++;
}

for (i = startPoint; i <= carouselT; i++) {
	console.log(i);
}

//2. Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	} else if (i % 2 === 1) {
		console.log(`${i} is uneven`);
	}
}

let initialNum = 1;

while (initialNum <= 10) {
	if (initialNum % 2 === 0) {
		console.log(`${initialNum} is even`);
	} else if (initialNum % 2 === 1) {
		console.log(`${initialNum} is uneven`);
	}
	initialNum++;
}

// ------------------------

let start = Number(prompt('PLease enter the initial number'));
let end = start + 10;

for (let i = start; i < end; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	} else if (i % 2 === 1) {
		console.log(`${i} is uneven`);
	}
}

let initialNum2 = Number(prompt('PLease enter the initial number'));
let ending = initialNum2 + 10;

while (initialNum2 < ending) {
	if (initialNum2 % 2 === 0) {
		console.log(`${initialNum2} is even`);
	} else if (initialNum2 % 2 === 1) {
		console.log(`${initialNum2} is uneven`);
	}
	2;
	initialNum2++;
}

//3. Write a program that continues to ask the user for a number until the entered number is less than or equal to 100. When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let number = Number(prompt('Please enter a number'));

while (number >= 100) {
	number = Number(prompt('Please enter a number between 0  and 100'));
}

let number = Number(prompt('Please enter a number'));

while (number > 100 || number < 50) {
	number = Number(prompt('Please enter a number between 50 and 100'));
}

// ----------

//4. Write a program that asks the user for a number, then shows the multiplication table for this number. When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

// this program consists of 2 while loops, one that determines the multiplicand and one that sets up the multiplier

let multiplicand = Number(prompt('Please enter your number')); //we ask the user for the starting number

while (multiplicand < 2 || multiplicand > 9) {
	// this loop helps us prevent the user to ernter a number that is less than 2 and higher than 9
	multiplicand = Number(prompt('Please enter a number between 2 and 9'));
}

console.log(`Here's the multiplication table for ${multiplicand}`);

let multiplier = 1; //here we set up the starting point of the multiplier which is 1

while (multiplier <= 10) {
	//this loop helps us increment the multiplier up to 10 to show the whole multiplication table
	console.log(`${multiplicand} x ${multiplier} = ${multiplicand * multiplier}`);
	multiplier++; //don't forget to add increments in while loops in the body to preven infinite loops
}

//---------------- Alternative with FOR LOOP

let multiplicand2 = Number(prompt('Please enter your number')); //we ask the user for the starting number

while (multiplicand2 < 2 || multiplicand2 > 9) {
	// this loop helps us prevent the user to ernter a number that is less than 2 and higher than 9
	multiplicand2 = Number(prompt('Please enter a number between 2 and 9'));
}

console.log(`Here's the multiplication table for ${multiplicand2}`);

for (multiplier = 1; multiplier <= 10; multiplier++) {
	console.log(
		`${multiplicand2} x ${multiplier} = ${multiplicand2 * multiplier}`
	);
}

//5. Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let input = ''; // we set up a value to enter the loop

while (input !== 'yes' && input !== 'no') {
	// if the input is not yes or no, then keep prompting if you want to play
	input = prompt(
		'Do you want to play "Neither yes, nor no" with me?'
	).toLowerCase();
}

alert('You lost!'); //if you type yes or no, you lose.

//6. FizzBuzz

for (let i = 1; i <= 100; i++) {
	// we set the initial number the end number and the increment for iteration.
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(`${i} FizzBuzz`); //if the number is divisible by 3 and 5 display FizzBuzz
	} else if (i % 3 === 0) {
		console.log(`${i} Fizz`); //if the number is divisible by 3 display Fizz
	} else if (i % 5 === 0) {
		console.log(`${i} Buzz`); //if the number is divisible by 3 display Buzz
	} else {
		console.log(i); //if the number not divisible by 3 nor 5 just display the number.
	}
}

//---- ALTERNATIVE with a concatenated message

// we set the initial number the end number and the increment for iteration.
for (let i = 1; i <= 100; i++) {
	//we create a variable which will contain our final FizzBUzz tag for now our tag is an empty string
	let tag = '';
	if (i % 3 === 0) {
		tag = tag + 'Fizz'; //if the number (i) is divisible by 3, we add the Fizz tag to our string
	}
	if (i % 5 === 0) {
		tag = tag + 'Buzz'; //if the number (i) is divisible by 5, we add the Buzz tag to our string
	}

	//We only use ifs because all those if statements need to be true.

	console.log(`${i} ${tag}`); //we display all the number with their corresponding Fizz, Buzz or FizzBuzz tags
}

//! WRITE FUNCTIONS

// 1.Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

function sayHello(firstName, lastName) {
	const message = `Hello, ${firstName} ${lastName}!`;
	return message;
}

let firstName = prompt('Please enter your first name:');
let lastName = prompt('Please enter your last name:');

alert(sayHello(firstName, lastName));

// 2. Complete the following program so that the square1() and square2() functions work properly.

function square1(x) {
	let result = x * x;
	return result;
}

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

const square2 = (x) => x * x;

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

//When it's done, update the program so that it shows the square of every number between 0 and 10.

for (let i = 0; i <= 10; i++) {
	//You can call functions inside loops
	console.log(square1(i));
}

// 3. Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

function min(num1, num2) {
	let min = '';
	if (num1 > num2) {
		min = num2;
	} else {
		min = num1;
	}
	return min;
}

let result = min(20, 30);
console.log(result);

//4. Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

calculate = (num1, operation, num2) => {
	let result;
	switch (operation) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '/':
			result = num1 / num2;
			break;
		case '*':
			result = num1 + num2;
			break;
	}
	return result;
};

console.log(calculate(4, '+', 6)); // Must show 10
console.log(calculate(4, '-', 6)); // Must show -2
console.log(calculate(2, '*', 0)); // Must show 0
console.log(calculate(12, '/', 0)); // Must show Infinity

// ----------Alternative with ternary operator.

let calculate = (num1, operation, num2) => {
	return operation === '+'
		? num1 + num2
		: operation === '-'
		? num1 - num2
		: operation === '*'
		? num1 * num2
		: num1 / num2;
};
//when you do not use the curly braces you the fucntion assumes that you are returning to where the function was called, if you want to use the curly braces you need to explicitly state that you are returning.

console.log(calculate(4, '+', 6)); // Must show 10
console.log(calculate(4, '-', 6)); // Must show -2
console.log(calculate(2, '*', 0)); // Must show 0
console.log(calculate(12, '/', 0)); // Must show Infinity

// 4. Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

const circumference = (radius) => 2 * Math.PI * radius;
const area = (radius) => Math.PI * radius ** 2;

const r = Number(prompt('Please enter the circle radius in centimeters'));

console.log(
	`The circumference of your circle is ${circumference(
		r
	)} cms, and the area of your circle is ${area(r)} squared cms`
);

//! ELOQUENT JS EXERCISES

//? Program structure

let triangle = '';
for (i = 0; i <= 7; i++) {
	console.log((triangle += '#'));
}

for (i = 1; i <= 100; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(`${i} FizzBuzz`);
	} else if (i % 3 === 0) {
		console.log(`${i} Fizz`);
	} else if (i % 5 === 0) {
		console.log(`${i} Buzz`);
	} else {
		console.log(i);
	}
}

for (i = 1; i <= 100; i++) {
	let tag = '';
	if (i % 3 === 0) {
		tag += 'Fizz';
	}
	if (i % 5 === 0) {
		tag += 'Buzz';
	}
	if (tag === '') {
		console.log(i);
	} else {
		console.log(i, tag);
	}
}

//------------------------------

let size = 8;

let board = '';

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += ' ';
		} else {
			board += '#';
		}
	}
	board += '\n';
}

console.log(board);

let limit = 8; //*sets a limit for iterations to be used in the loop

let rowContent = ''; //*is a blank placeholder to be filled with our conditions

for (let y = 0; y < limit; y++) {
	//* y represents the vertical axis or the rows, this is creating the loop for the rows.
	for (let x = 0; x < limit; x++) {
		//* x represents the horizontal axis or the columns, this is creating the loop for the rows, the x loop always completes all of its iterations before the y loop completes its iteration.

		if ((x + y) % 2 == 0) {
			//* Keep in mind that the initial value of x and y is 0, and y doesnt increase value until the 'x' loop has finished its 8 iterations.
			rowContent += ' '; //* when we set x + y every 2nd number will be divisible by 2, therfore every second charachter will execute the " " space character and each new rowContent will alternate between an even and an odd number.
		} else {
			rowContent += '#'; //* if the condition in our if statement is not met, instead of adding a blank space to our rowContent, we add the '#' symbol.
		}
	}
	rowContent += '\n'; //* this rowContent makes sure that the program creates a new line every iteration of our 'y' loop, and also makes sure that the x loop completes 8 iterations before breaking into a new rowContent.
}

console.log(rowContent);

//? Functions

let min = (num1, num2) => {
	if (num1 < num2) {
		return num1;
	} else {
		return num2;
	}
};

console.log(min(0, 10));
console.log(min(0, -10));

//

function isEven(n) {
	if (n == 0) return true;
	else if (n == 1) return false;
	else if (n < 0) return isEven(-n);
	else return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//

