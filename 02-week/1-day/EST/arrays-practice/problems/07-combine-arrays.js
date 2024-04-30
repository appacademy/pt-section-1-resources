/*
Define a function combineArrays that takes in two parameters. Both parameters
should be arrays of numbers. The function should return the two arrays combined
into a single array where the first array's elements comes before the second
array's elements. Research and use the Array.concat method on MDN.
*/

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

function combineArrays(firstArr, secondArr) {
    let finalArr = [];
    finalArr = firstArr.concat(secondArr);
    return finalArr;
}

// console.log(combineArrays([1, 2], [3, 4]));       // => [1, 2, 3, 4]
// console.log(combineArrays([17, 5, 11], [6, 7]));  // => [17, 5, 11, 6, 7]
// console.log(combineArrays([], [10]));             // => [10]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = combineArrays;
