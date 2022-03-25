//TODO Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
	let t = 0;
	arrayOfSheep.forEach((e) => (e === true ? (t += 1) : (t += 0)));
	return t;
}

//Alternative with filter() method.

function countSheeps(arrayOfSheeps) {
	return arrayOfSheeps.filter(Boolean).length;
}
