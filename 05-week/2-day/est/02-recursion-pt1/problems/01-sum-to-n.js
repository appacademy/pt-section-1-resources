/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

***********************************************************************/

function sumToN(n) {
  // edge case
  if (n < 0) {
    return null;
  }
  // base case
  if (n === 1) return 1;

  // recursive
 let sum =  n + sumToN(n - 1);
  return sum;
}

console.log(sumToN(5)) // returns 15
console.log(sumToN(1))  // returns 1
console.log(sumToN(9))  // returns 45
console.log(sumToN(-8))  // returns null
console.log(sumToN(0)) // returns ?
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
