function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length < 2) return arr;

  // Pick the first value as the pivot
  const pivot = arr[0];

  // Orient the pivot so that...
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    // every number smaller than the pivot is to the left
    // every number larger (or equal) than the pivot is to the right
    const el = arr[i];
    if (el < pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  }
  // Recursively sort the left
  left = quicksort(left);
  // Recursively sort the right
  right = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}

module.exports = [quicksort];
