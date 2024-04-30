/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

// // start at the end of the string
// // grab every other letter, starting at the last odd index
// // console.log('Length of the string =>', str.length);
// // // looping in order
// // console.log('index', i, ' modulo', i % 2 === 1);
// // for (let i = 0; i < str.length; i++) {
// // i += 1
// // i = i + 1
function elementsOfOddIndicesReversed(str) {
    let finalValue = '';

    for (let i = str.length - 1; i >= 0; i--) {
        console.log(i, str[i]);
        if (i % 2 === 1) {
            // finalValue = finalValue + str[i]
            finalValue += str[i];
        }
    }

    return finalValue;
}

// I need odd indexes
// Odd number % 2 === 1

// console.log(10 % 2);
// console.log(11 % 2);
// console.log(1102385213083 % 2);

// function elementsOfOddIndicesReversed(str) {
//     let finalValue = '';

//     for (let i = str.length - 1; i > 0; i -= 2) {
//         if (i % 2 === 0) {
//             i--;
//         }
//         finalValue += str[i];
//     }

//     return finalValue;
// }

console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
// console.log(elementsOfOddIndicesReversed('planet')); // 'tnl'
// console.log(elementsOfOddIndicesReversed('sport')); // 'rp'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
