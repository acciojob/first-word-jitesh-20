function firstWord(s) {
  // your code here
	s=s.trim()
	let str=s.split(" ")
	return str[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
 