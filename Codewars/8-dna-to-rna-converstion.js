//URL -> https://www.codewars.com/kata/5556282156230d0e5e000089

//* NAME -> DNA to RNA Conversion

//*TODO INSTRUCTIONS ->

/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. */

//SOLUTION(S) ->

//This code works, but codewars does not recognize replaceAll() as a method or function

function DNAtoRNA1(dna) {
	return dna.replaceAll('T', 'U');
}

// Alternative

function DNAtoRNA2(dna) {
	return dna
		.split('')
		.map((e, i, a) => (e === 'T' ? (a[i] = 'U') : e))
		.join('');
}

//Clever solution in codewars

function DNAtoRNA3(dna) {
	return dna.split('T').join('U'); //We split the string on every ocurrence of T, and then join the array filling the empty spaces with U
}

//TEST CASES->

console.log(DNAtoRNA1('TTTT')); // -> 'UUUU'
console.log(DNAtoRNA2('GCAT')); // -> 'GCAU'
console.log(DNAtoRNA3('GACCGCCGCC')); // -> 'GACCGCCGCC'
