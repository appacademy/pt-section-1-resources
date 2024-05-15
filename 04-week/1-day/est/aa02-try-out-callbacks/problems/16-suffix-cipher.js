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
  // create an array of words in the sentence
  let array = sentence.split(" ");
  let res = [];
  // iterate over each word in the array
  for (let i = 0; i < array.length; i++) {
    // array.forEach((word, i) => {
    //   // iterate over keys in our cipher obj
    let word = array[i];
    //   for (let key in cipher) {
    let keys = Object.keys(cipher);
    let matched = false;
    for (let j = 0; j < keys.length; j++) {
      //     // check if our word ends in this key we are iterating over
      let key = keys[j];
      //     if (word.endsWith(key)) {
      if (word.endsWith(key)) {
        res.push(cipher[key](word));
        matched = true;
      }
    }
    if (!matched) {
      res.push(word);
    }
  }
  return res.join(" ");
  //       // reassign the word in the word array
  //       array[i] = cipher[key](word);
  //     }
  //   }
  // })
  // return array.join(" ");
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch(e) {
  return null;
}
