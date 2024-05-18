/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	const count = {}; // initializing a count object
	const stringArray = string.split("");
	stringArray.forEach(char => {
		if (count[char])  {// check if we already have this char as a key in the count object
			// if we do, increment the count by one
			count[char]++;
		} else { // if this is the first time we're seeing this char
			// add this char as a key, and set it's count to 1
			count[char] = 1;
		}
	})
	// for (let i = 0; i < string.length; i++) { // iterating over the string, one char at a time
	// 	let char = string[i];  // creating a variable for my current char (optional)
	// 	if (count[char])  {// check if we already have this char as a key in the count object
	// 		// if we do, increment the count by one
	// 		count[char]++;
	// 	} else { // if this is the first time we're seeing this char
	// 		// add this char as a key, and set it's count to 1
	// 		count[char] = 1;
	// 	}
	// }
	// once done iterating over string, return count object
	return count;
}

function duplicateCharMinCount(string, minCount) {
	// I want a count of all chars in the string => helper function
	  // object with chars as the keys, and their counts as the values
	  const counter = countCharacters(string)
	//   console.log("COUNTER:", counter)
	const res = [];
	// iterate thru the count object, comparing the count values against our minCount
	for (let char in counter) { // for in loop => let `some variable` (char) === key in counter object
		// if the count of a char >  minCount, push the char into a results array
		if (counter[char] >= minCount) {
			res.push(char);
		}
	}
	// return that array of chars
	return res;
}

// console.log(duplicateCharMinCount("apple", 2)) // ["p"]
// console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
// console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
