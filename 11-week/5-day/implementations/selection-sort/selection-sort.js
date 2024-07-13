function selectionSort(arr) {
  // Copy the original array
  const copy = arr.slice();

  // Create an array to store the sorted values
  const sorted = [];

  // While the array is not empty...
  while (copy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = copy[0];
    let index = 0;
    for (let i = 1; i < copy.length; i++) {
      if (copy[i] < min) {
        min = copy[i];
        index = i;
      }
    }

    // Save and remove the value at the min index
    copy.splice(index, 1);

    // Add the min value to the end of the sorted array
    sorted.push(min);
  }
  return sorted;
}

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;

  // Repeat while the unsorted half is not empty:
  while (pointer < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = arr[pointer];
    let minIndex = pointer;
    for (let i = pointer; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1
    while (minIndex > pointer) {
      arr[minIndex] = arr[minIndex - 1];
      minIndex--;
    }

    // Put the min value at the divider
    arr[pointer] = min;

    // Increment the divider and repeat
    pointer++;
  }
}

module.exports = [selectionSort, selectionSortInPlace];
