var testWord = prompt("Enter word here");

function isPalindrome(word){
	// Returns true if palindrome
	var noSpaces = word.replace(/\s/g, '');
	alert("No Spaces: "+ noSpaces);
	var cased = noSpaces.toLowerCase();
	alert("Cased: "+cased);
	var arr = cased.split("")
	alert("Arr: "+ arr);
	var reverse = arr.reverse();
	alert("Reverse: "+reverse);
	var rev_word = reverse.join("");
	alert("Rev_word: "+rev_word);
	return (word == rev_word)

}

if(isPalindrome(testWord)){
	alert("OH COOL A PALINDROME");
}else{
	alert(testWord + " is not a palindrome");
}
