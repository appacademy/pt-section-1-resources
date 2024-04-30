/*
Define a function firstAndLast that takes in an array of numbers and returns the
sum of the first and last element if there is an even number of elements in the
array. If there is an odd number of elements in the array, then the function
should return the difference between the first and last elements of the array.
*/

// find first and last number
// check if the array's length is even or odd

// if odd, first num - last num

// if even, first num + last num

function firstAndLast(numArr) {
    let sumOrDiff = 0;

    //? This uses "old" index syntax
    // let firstNumber = numArr[0];
    // let lastNumber = numArr[numArr.length - 1];

    //? This uses array methods that mutate the array
    // let firstNumber = numArr.shift();
    // let lastNumber = numArr.pop();

    //? This uses the new transfer kid/method
    let firstNumber = numArr.at(0);
    let lastNumber = numArr.at(-1);
    let isEven = numArr.length % 2 === 0;

    if (isEven) {
        sumOrDiff = firstNumber + lastNumber;
    } else {
        sumOrDiff = firstNumber - lastNumber;
    }

    return sumOrDiff;

    // if (isEven) {
    //     return firstNumber + lastNumber;
    // } else {
    //     return firstNumber - lastNumber;
    // }
}

// console.log(firstAndLast([1, 2, 3, 4])); // 5
// console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
// console.log(firstAndLast([12, 5])); // 17
// console.log(firstAndLast([12])); // 0
// console.log(firstAndLast([-1, -3, -5, -20])); // -21
// console.log(firstAndLast([-1, -3, -5, -7, -20])); // 19

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstAndLast;
