/*
Build a function called stringChanger that takes in two arguments: a word
and an operation. Based on the operation, your function will return the word
modified in some way. The operations are:

  "capitalize": Capitalize the first letter in the word.

  "uppercase": Capitalize every letter in the word.

  "double": Return the word twice in a row.

  "reverse": Return the string with the letters in reverse order.

  If the operation is invalid, return the word, unchanged.
*/

function stringChanger(word, operation) {
  // Your code here
  // word = "foo"
  let newString = "";
  if (operation === "capitalize") {
    return word[0].toUpperCase() + word.slice(1); // return "Foo"
  } else if (operation === "uppercase" ) {
    return word.toUpperCase() // "FOO"
  } else if (operation === "double") {
    return word + word// "foofoo"
  } else if (operation === "reverse") {
    // "foo"
    // return word.split("").reverse().join("")  // "oof"
    // let newString = "";
    for (let i = word.length - 1; i >= 0; i--) {
      let char = word[i]; //  "f"
      newString += char; //  "oof"
    }
    return newString
  } else {
    return word
  }
}

// console.log(stringChanger('foo', 'capitalize')); // 'Foo'
// console.log(stringChanger('foo', 'uppercase'));  // 'FOO'
// console.log(stringChanger('foo', 'double'));     // 'foofoo'
// console.log(stringChanger('foo', 'reverse'));    // 'oof'
// console.log(stringChanger('foo', 'unknown'));    // 'foo'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = stringChanger;
