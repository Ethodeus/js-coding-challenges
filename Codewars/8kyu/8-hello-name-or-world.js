//URL -> https://www.codewars.com/kata/57e3f79c9cb119374600046b

//* NAME -> Hello, Name or World!

//TODO INSTRUCTIONS -> Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

/*
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
    or `name` = ""        => return "Hello, World!"
*/

//SOLUTION(S) ->

function hello(name) {
	return !name ? `Hello, World!` : `Hello, ${name[0].toUpperCase()}${name.slice(1, name.length).toLowerCase()}!`;
}

//TEST CASES ->

console.log(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
console.log(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
console.log(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
