/*
Write a function fibonacciSequence that accepts a number as an argument. The
function should return an array representing the fibonacci sequence up to the
given length. The first and second numbers of the sequence are 1 and 1. To
generate subsequent numbers of the sequence, we take the sum of the previous two
numbers of the sequence.
*/

// if I get 0, return []
// if I get 1, return [1]
// if I get 2, return [1, 1]

let fibonacciSequence = function (n) {
    if (n === 0) {
        return [];
    }

    if (n === 1) {
        return [1];
    }

    if (n === 2) {
        return [1, 1];
    }

    let fibArr = [1, 1];

    for (let i = 0; fibArr.length < n; i++) {
        // let lastNum = fibArr[fibArr.length - 1]
        // let secondToLastNum = fibArr[fibArr.length - 2];

        let lastNum = fibArr.at(-1);
        let secondToLastNum = fibArr.at(-2);

        let newFibNum = lastNum + secondToLastNum;

        fibArr.push(newFibNum);
    }

    return fibArr;
};

// console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
// console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
// console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(2));  // [ 1, 1 ]
// console.log(fibonacciSequence(1));  // [ 1 ]
// console.log(fibonacciSequence(0));  // [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fibonacciSequence;
