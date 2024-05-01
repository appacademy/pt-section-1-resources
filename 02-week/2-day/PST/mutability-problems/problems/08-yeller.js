/*
Define a function yeller that takes in an array of words. The function should
return a NEW array where each element of the original array is yelled.
*/

let yeller = function (quietWordArray) {
    let yelledWordArray = [];

    for (let i = 0; i < quietWordArray.length; i++) {
        let currentWord = quietWordArray[i];
        let yelledVersion = currentWord.toUpperCase() + '!';

        yelledWordArray.push(yelledVersion);
    }

    return yelledWordArray;
};

// let words1 = ['hello', 'world'];
// let yelled1 = yeller(['hello', 'world']);
// console.log(yelled1); //-> [ 'HELLO!', 'WORLD!' ]
// console.log(words1 === yelled1); //-> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = yeller;
