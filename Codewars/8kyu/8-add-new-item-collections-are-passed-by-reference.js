//URL -> https://www.codewars.com/kata/566dc05f855b36a031000048

//* NAME -> Add new item (collections are passed by reference)

//TODO INSTRUCTIONS ->

/*

Add an item to the list:

AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)

*/

//SOLUTION(S) ->

function addExtra(listOfNumbers) {
	let newArr = [...listOfNumbers];

	newArr.push(1);

	return newArr;
}

//Since arrays are reference type objects, we cannot do let newArr = listOfNumbers, because if we modify the new array, it will also modify the reference, to create a shallow copy we can use the spread operator.

//TEST CASES ->

console.log(addExtra([1, 2, 3]).length, 4);
console.log(addExtra([1, 2]).length, 3);
console.log(addExtra([]).length, 1);
