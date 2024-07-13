# Sorting Out Sorting Algos

## Bubble Sort

- Known for its simplicity
- It works by repeatedly stepping through the list, comparing adjacent elements.
  - If two elements are in the wrong order (smaller element comes after a larger element), they are swapped
  - This process continues for multiple passes through the list, with the largest element "bubbling" up to the end in each pass.

![bubble sort algo](https://upload.wikimedia.org/wikipedia/commons/5/54/Sorting_bubblesort_anim.gif?20140912160204)

- Average/Worst time complexity: O(n\*\*2)
  - Bubble Sort is almost NEVER used because it is not efficient!!
- Bubble Sort manipulates the array by swapping the position of two elements. To
  implement Bubble Sort in JS, you'll need to perform this operation. It helps to
  have a function to do that. A key detail in this function is that you need an
  extra variable to store one of the elements since you will be overwriting them
  in the array:

```js
// swapping 2 elements of an array without an extra variable
[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
```

## Insertion Sort

Insertion sort is another sorting algorithm that works intuitively. It starts with an empty sorted sub-list and considers each element from the unsorted portion of the list. For each element, it iterates through the sorted sub-list, finding the correct position to insert the element based on its value.

- This process is akin to sorting cards in hand, where you take a card, find its appropriate place among already sorted cards, and insert it there.
- Insertion sort also has an average/worst case time complexity of O(n^2), but it can outperform bubble sort for partially sorted data.

![Insertion Sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

Steps of Insertion Sort:

1. If the min is the first element, it is already sorted. return 1
2. Pick next element
3. Compare with all elements in the sorted sub-list
4. Shift all the elements in the sorted sub-list that is greater than the value
   to be sorted
5. Insert the value
6. Repeat until list is sorted

## Selection Sort

Selection sort works very similar to Bubble Sort, but it works on sending the
smallest elements down to the beginning of the array instead of sending the
largest elements up. For the same reasons as Bubble Sort, Selection Sort is not
very efficient at all.

- Selection sort also has an average/worst case time complexity of O(n^2)

![Selection sort](https://miro.medium.com/v2/resize:fit:720/format:webp/1*5WXRN62ddiM_Gcf4GDdCZg.gif)

The algorithm can be summarized as follows:

1. Set MIN to location 0.
2. Search the minimum element in the list.
3. Swap with value at location MIN
4. Increment MIN to point to next element
5. Repeat until list is sorted

## Merge Sort

Merge sort is the first of the efficient algorithms you will learn.

Merge sort operates with a much better time complexity than the more naive
approaches we started with.

The main ideas of merge sort are:

1. It is easy to merge elements of two sorted arrays into a single sorted array
2. You can consider an array containing only a single element as already sorted
3. You can also consider an empty array as sorted

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

This algorithm sorts values using the following divide and conquer approach:

1. Split the unsorted array in half (divide)
2. Sort the halves (conquer)
3. Merge the newly sorted halves

Because of this, the time complexity is the same for the best case, worst case, and average case scenarios: **O(n log n)**

## Quick Sort

Just like Merge Sort, Quick Sort uses a divide and conquer strategy.
The key ideas of Quick Sort are:

1. It is easy to sort elements of an array relative to a particular target
   value.
2. An array of 0 or 1 elements is already sorted

In the average case, quick sort has a time complexity of **O(n log n)**, making it significantly faster than bubble sort, insertion sort, and selection sort for large datasets.

- However, the worst-case time complexity of quick sort can be **O(n^2)**, which can occur if the chosen pivot element consistently leads to imbalanced partitions (e.g., the pivot is always the largest or smallest element).

Simplified components of a quick sort:

- Pivot selection: Quick sort chooses a pivot element from the list (often the first or last element).
- Partitioning: It then rearranges the list by partitioning it around the pivot element. Elements less than the pivot are placed to its left, and elements greater than the pivot are placed to its right.
- Recursive sorting: Quick sort then recursively sorts the sub-lists on both sides of the pivot (elements less than and greater than the pivot).

![Quick Sort](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Quicksort.gif/800px-Quicksort.gif?20140912163236)

There are some standard steps when implementing a quick sort algorithm:

1. choose an element called "the pivot", how that's done is up to the
   implementation
2. take two variables to point left and right of the list excluding pivot
3. left points to the low index
4. right points to the high
5. while value at left is less than pivot move right
6. while value at right is greater than pivot move left
7. if both step 5 and step 6 does not match swap left and right
8. if left ≥ right, the point where they met is new pivot
9. repeat, recursively calling this for smaller and smaller arrays
