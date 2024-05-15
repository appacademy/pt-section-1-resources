/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

function suffixCipher(sentence, cipher) {
  // split up our sentence into a words array
  let array = sentence.split(" ");
  // iterate over words array
  let newArray = array.map((el) => {
    // check if our word ends in one of the suffixes aka matches a key in our obj
    for (let key in cipher) {
      let value = cipher[key];
      if (el.endsWith(key)) {
        // if it does, pass the word to the cb stored at that key in the obj
        return value(el);
      }
    }
    // if nah, then just keep the original word
    return el;
  });
  // when done, join our array of words back into a string
  return newArray.join(" ");

  // let array = sentence.split(" ");
  // for (let index = 0; index < array.length; index++) {
  //   let element = array[index];
  //   for (const key in cipher) {
  //     if (element.endsWith(key)) {
  //       array[index] = cipher[key](element);
  //     }
  //   }
  // }
  // return array.join(" ");
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch (e) {
  return null;
}
