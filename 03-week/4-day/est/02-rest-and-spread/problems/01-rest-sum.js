/*
Write a function named `restSum` that accepts all incoming parameters and sums
them.

**Hint**: Use rest parameter syntax!
*/

// Your code here
function restSum(...banana) {
  let sum = 0;
  for (let i = 0; i < banana.length; i++) {
    let num = banana[i];
    sum += num;
  }
  return sum;
};


console.log(restSum(3,5,6));                     // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(restSum(0));                         // => 0


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = restSum;
} catch {}
