/*
Define a function called mirror that takes in an array as a parameter and
returns a new array where all the elements in the original array are added to the
new array twice with the second set of elements in reverse order.
*/

let mirror = function (arr) {
    let mirroredArray = [];

    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];
        mirroredArray.push(currentVal);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        let currentVal = arr[i];
        mirroredArray.push(currentVal);
    }

    return mirroredArray;
};

// let mirror = function (arr) {
//     let mirroredArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         let currentVal = arr[i];
//         mirroredArray.unshift(currentVal);
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//         let currentVal = arr[i];
//         mirroredArray.unshift(currentVal);
//     }

//     return mirroredArray;
// };
// //     [1, 2, 3]          [3, 2, 1]
// return arr.concat(arr.slice().reverse());

console.log(mirror([1, 2, 3])); //-> [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirror(['a', 'b', 'c', 'd']));
// //=> [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mirror;
