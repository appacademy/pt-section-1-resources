/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// check each letter in my word to see if it's a vowel
// if it's not, add to final string without modifying it
// if it IS a vowel:
// take that vowel, add 'b', then add that vowel
// "a" + "b" + "a"
// Finally, add that new silly string to the final string

function sillyString(word) {
    let finalValue = '';
    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        if (vowels.includes(currentLetter)) {
            let newSillyString = '';
            newSillyString = currentLetter + 'b' + currentLetter;
            finalValue += newSillyString;
        } else {
            finalValue += currentLetter; // not a vowel
        }
    }

    return finalValue;
}

// console.log(sillyString('stop')); // stobop
// console.log(sillyString('that')); // thabat
// console.log(sillyString('can')); // caban
// console.log(sillyString('cats')); // cabats
// console.log(sillyString('italy')); // ibitabaly
// console.log(sillyString('scooter')); // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
