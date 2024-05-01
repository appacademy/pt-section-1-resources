/*
Define a function called mirror that takes in an array as a parameter and
returns a new array where all the elements in the original array added to the
new array twice with the second set of elements in reverse order.
*/

let mirror = function (arr) {
    let finalArray = [];

    for (let i = 0; i < arr.length; i++) {
        finalArray.push(arr[i]);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        finalArray.push(arr[i])
    }

    return finalArray;
};

// let mirror = function (arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }

//     // return arr.concat(newArr.reverse());
//     return arr.concat(newArr); //Does this return  [ 1, 2, 3, 1, 2, 3 ]
// };

// arr[2] = 3  [1, 2, 3]
// newArr[2] = 3 [ ,  , 3]

// arr[1] = 2  [1, 2, 3]
// newArr[1] = 2 [ , 2, 3]

// let mirror = function (arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr[i] = arr[i];

//         console.log(newArr);
//     }
//     // return arr.concat(newArr.reverse());
//     return arr.concat(newArr); //Does this return  [ 1, 2, 3, 1, 2, 3 ]
// };

//! Doesn't need to make any sense
// let mirror = function (arr) {
//     return arr.concat(arr.slice().reverse());
// };

// console.log(mirror([1, 2, 3])); //-> [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirror(['a', 'b', 'c', 'd']));
// //=> [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mirror;
