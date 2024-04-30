/*
Write a function product(nums) that takes in an array of numbers. The function
should return the total product of multiplying all numbers of the array
together. You can assume that nums will not be an empty array.
*/

// print out each number one by one
// eachNum *= finalNumber

function product(nums) {
    let finalNumber = 1;

    for (let i = 0; i < nums.length; i++) {
        let eachNum = nums[i]; // 10 //! 3
        finalNumber *= eachNum; // 1 * 10 = 10 //! 10 * 3 = 30
        // // finalNumber = finalNumber * eachNum
    }

    return finalNumber;
}

console.log(product([10, 3, 5, 2])); // 300
console.log(product([4, 3])); // 12

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = product;
