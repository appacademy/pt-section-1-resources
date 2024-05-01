/*
Define a function range(min, max) that takes in two number parameters. The
function should return an array containing an inclusive range of all numbers
from a minimum number to a maximum number. The first parameter should be the
minimum number for the range, and the second parameter should be the maximum
number for the range.  If the min number is greater than the max number then return
an empty array.
*/

let str = 'Some thing';

//!       (where to start;  where to stop;   how to change each time)
//? for (   let i = 0;     i < str.length;               i++        )

let range = function (min, max) {
    let finalArray = [];

    for (let i = min; i <= max; i++) {
        finalArray.push(i);
    }

    return finalArray;
};

// let reverseRange = function (min, max) {
//     let finalArray = [];

//     for (let i = max; i >= min; i--) {
//         finalArray.push(i);
//     }

//     return finalArray;
// };

// console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(reverseRange(3, 10)); // [10, 9, 8, 7, 6, 5, 4, 3];
// console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
// console.log(range(10, 3));    // []

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = range;
