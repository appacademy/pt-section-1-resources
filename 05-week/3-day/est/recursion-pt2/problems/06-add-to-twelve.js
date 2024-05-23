/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/


function addToTwelve(arr) {
  // base case
  // stop recursing if there's not 2 elements in the array
  if (arr.length < 2) return false;
  // stop recursing if the first 2 elements of the array add up to 12
  if (arr[0] + arr[1] === 12) return true;

  // recursive case
  // slice is the recursive step -> moving us towards an arr.length < 2
  return addToTwelve(arr.slice(1))

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
