// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

//TODO: Create a function which translates a given DNA string into RNA.

//This code works, but codewars does not recognize replaceAll() as a method or function

function DNAtoRNA(dna) {
	return dna.replaceAll('T', 'U');
}

console.log(DNAtoRNA('GGGGGCCAACTCAG'))

// Alternative

function DNAtoRNA(dna) {
	return dna
		.split('')
		.map((e, i, a) => (e === 'T' ? (a[i] = 'U') : e))
		.join('');
}

//Clever solution in codewars

function DNAtoRNA2(dna) {
	 return dna.split('T').join('U') //We split the string on every ocurrence of T, and then join the array filling the empty spaces with U
}

DNAtoRNA2('CTTCTTCGTCCT')