/*
Define a function called minVal that takes in an array of numbers as a
parameter. The function should return the smallest number of the array. If the
array is empty, the function should return null.
*/

function minVal(nums) {
    if (nums.length === 0) {
        return null;
    }

    // let minNum = Infinity
    let minNum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];

        if (currNum < minNum) {
            minNum = currNum;
        }
    }

    return minNum;
}

// function minVal(arr1) {
//     let min = null;
//     for (i = 0; i < arr1.length; i++) {
//         let num = arr1[i];
//         if (min === null || num < min) {
//             min = num;
//         }
//     }
//     return min;
// }

// console.log(minVal([4, 6, 3, 5, 2, 4])); // 2
// console.log(minVal([-2, -3, -7, 3 ]));   // -7
// console.log(minVal([])); //null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = minVal;
