// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
  // If so, it's already sorted: return

  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort the left half
  left = mergeSort(left);
  // Recursively sort the right half
  right = mergeSort(right);

  // Merge the halves together and return
  return merge(left, right);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let res = [];

  // Point to the first value of each array
  let arrAIndex = 0;
  let arrBIndex = 0;
  // While there are still values in each array...
  while (arrAIndex < arrA.length && arrBIndex < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    if (arrA[arrAIndex] < arrB[arrBIndex]) {
      res.push(arrA[arrAIndex]);
      // Move the pointer to the next value in that array
      arrAIndex++;
    } else {
      res.push(arrB[arrBIndex]);
       // Move the pointer to the next value in that array
      arrBIndex++;
    }
  }
  if (arrAIndex < arrA.length) {
    res = res.concat(arrA.slice(arrAIndex));
  } else {
    res = res.concat(arrB.slice(arrBIndex));
  }
  return res;

  // Return the return array
}

module.exports = [merge, mergeSort];
