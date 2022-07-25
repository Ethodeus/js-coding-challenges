//URL -> https://www.codewars.com/kata/57ab2d6072292dbf7c000039

//* NAME -> Polish alphabet

//TODO INSTRUCTIONS ->

/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

//SOLUTION(S) ->

function correctPolishLetters(str) {
	const alphabet = {
		ą: 'a',
		ć: 'c',
		ę: 'e',
		ł: 'l',
		ń: 'n',
		ó: 'o',
		ś: 's',
		ź: 'z',
		ż: 'z',
	};

	return str
		.split('')
		.map((e) => (alphabet[e] ? (e = alphabet[e]) : e))
		.join('');
}

//Alternative with for loop.

function correctPolishLetters(str) {
	const alphabet = {
		ą: 'a',
		ć: 'c',
		ę: 'e',
		ł: 'l',
		ń: 'n',
		ó: 'o',
		ś: 's',
		ź: 'z',
		ż: 'z',
	};

	let arr = str.split('');

	for (let i = 0; i < arr.length; i++) {
		let l = arr[i];
		if (alphabet[l]) {
			arr[i] = alphabet[l];
		}
	}

	return arr.join('');
}

//TEST CASES ->

console.log(correctPolishLetters('Jędrzej Błądziński'), 'Jedrzej Bladzinski');
console.log(correctPolishLetters('Lech Wałęsa'), 'Lech Walesa');
console.log(correctPolishLetters('Maria Skłodowska-Curie'), 'Maria Sklodowska-Curie');
