function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      // Iterate through the array

      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        // Do not move this console.log
        console.log(arr.join(","));
      }
    }

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
  }

  return arr;
}

module.exports = bubbleSort;
