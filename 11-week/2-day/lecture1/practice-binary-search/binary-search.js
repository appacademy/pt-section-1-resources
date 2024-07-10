function linearSearch (arr, target) {

  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;

  // While high and low indices do not overlap...
  while (low <= high) {
    // Find the midpoint between high and low indices
    let mid = Math.floor((high + low )/ 2)

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
    if (arr[mid] === target) return mid;
      // Return the midpoint index

    // If the target is higher than the midpoint...
    if (target > arr[mid]) low = mid + 1
      // Move the low pointer to midpoint + 1

    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
    else if (target < arr[mid]) high = mid - 1;

  }

  return -1;
  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]