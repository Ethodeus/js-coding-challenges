function reverseWords(str) {
	return str
		.split('') //[‘T’, ‘h’, ‘e’, ‘ ‘, ‘q’, ‘u’, ’i’, ’c’, ’k’,’ ‘, ‘b’, ’r’, ’o’, ’w’, ’n’, ’ ‘, ’f’, ’o’, ’x’, ’ ‘, ’j’, ’u’, ’m’, ’p’, ’s’, ’ ‘, ’o’, ’v’, ’e’, ’r’, ’ , ’t’, ’h’, ’e’, ’ ‘, ’l’, ’a’, ’z’, ’y’, ’ ‘, ’d’, ’o’, ’g’, ’.’].
		.reverse() //[‘.’, ’g’, ’o’, ’d’, ’ ‘, ’y’, ’z’, ’a’, ’l’, ’ ‘, ’e’, ’h’, ’t’, ’ ‘, ’r’, ’e’, ’v’, ’o’, ’ ‘, ’s’, ’p’, ’m’, ’u’, ’j’, ’ ‘, ’x’, ’o’, ’f’, ’ ‘, ’n’, ’w’, ’o’, ’r’, ’b’, ’ ‘, ’k’, ’c’, ’I’, ’u’, ’q’, ’ ‘, ’e’, ’h’, ’T’]
		.join('') //‘.god yzal eht revo spmuj xof nworb kciuq ehT’ //If we do join without the quotation marks every element will be joined with a , in between.
		.split(' ') //Since the words are reversed but in the wrong position, we split the string again but this time just into words, thus the space between quotations in the spli() method, to make a new array...
		.reverse() //...and be able to reverse it.
		.join(' '); //...and then join it back in, again a space in the join method so we can have a space inbetween words. 
}
