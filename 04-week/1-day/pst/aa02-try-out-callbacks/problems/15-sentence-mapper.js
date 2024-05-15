/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/

let sentenceMapper = function (sentence, cb) {
  // split sentence string on " ", store in array of words
  let words = sentence.split(" ");
  // iterate over word array
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    // pass words one at a time to the cb func
    // reassign value of word to the result of passing word into cb
    words[i] = cb(word);
  }
  return words.join(" ");
  // when done iterating, return the results array, joining it into a string again
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = sentenceMapper;
} catch (e) {
  return null;
}
