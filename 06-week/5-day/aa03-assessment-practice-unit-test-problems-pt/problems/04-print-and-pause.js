/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

***********************************************************************/

function printAndPause(nums) {
  // base case -> if there's no nums left
  if (!nums.length) return;
  // otherwise, console.log the first num
  // let first = nums[0];
  let first = nums.shift();
  console.log(first);
  setTimeout(printAndPause, first, nums)
}
// printAndPause([200, 800, 200, 800, 200, 800])
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
