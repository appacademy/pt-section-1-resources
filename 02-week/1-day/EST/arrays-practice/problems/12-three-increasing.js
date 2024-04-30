/* Write a function threeIncreasing that accepts an array of numbers as an
argument. The function should return a boolean indicating whether or not the
array contains three consecutive numbers in consecutive increasing order, like
7, 8, 9.
*/

// function threeIncreasing(arr) {
//     let isIncreasing = false;
//     let counter = 0;

//     console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         console.log('******** New Loop Just Began! ********');

//         let currentNumber = arr[i];
//         let nextNumber = arr[i + 1];

//         console.log('currNum & nextNum', currentNumber, nextNumber);

//         if (currentNumber + 1 === nextNumber) {
//             counter++;
//             console.log('counter just went up!', counter);
//         } else {
//             counter = 0;
//             console.log('not consecutive, so counter resets', counter);
//         }

//         if (counter === 2) {
//             isIncreasing = true;
//         }
//     }

//     return isIncreasing;
// }

function threeIncreasing(arr) {
    let isIncreasing = false;
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        let nextNumber = arr[i + 1];

        if (currentNumber + 1 === nextNumber) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter === 2) {
            isIncreasing = true;
        }
    }

    return isIncreasing;
}

// function threeIncreasing(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] + 1 === arr[i + 1] && arr[i] + 2 === arr[i + 2]) {
//             return true;
//         }
//     }

//     return false;
// }

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // true
// console.log(threeIncreasing([2, 7, 8, 9]));                 // true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
// console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8])); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeIncreasing;
