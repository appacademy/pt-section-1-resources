# JavaScript's Built-in `array.sort()` Method

[MDN: Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## Which Sorting Algo Does it Use?

- Each browser runs their own version of JavaScript, with their own sorting implementation.
  - Chrome's V8 JS engine currently uses `merge sort` but has used `quick sort` in the past, with `insertion sort` for small inputs.
  - Regardless, it will be in-place with `O(1)` _space complexity_ and `O(n log n)` _time complexity_.

## How Does it Work?

- By default, `.sort()` sorts elements alphabetically when they are treated as strings.
  - This is because JavaScript is optimized for text parsing, so it stores everything, even numbers, as strings.

```js
const numbers = [10, 5, 1, 2];
numbers.sort(); // sorts the array in-place
console.log(numbers); // Output: ???
```

### Customizing the Sort Order

- The magic of `.sort()` lies in its ability to be customized. You can provide a comparison function to define the sorting criteria.
  - This function takes two arguments, `a` and `b`, representing elements within the array being compared. The function should return a value according to the desired order:
    - Return a **negative value** (e.g., -1) if `a` should come before `b`.
    - Return a **positive value** (e.g., 1) if `a` should come after `b`.
    - Return **0** if the order doesn't matter.

```js
numbers.sort((a, b) => a - b); // Sorts numbers in ascending order
console.log(numbers); // Output: [1, 2, 5, 10]

numbers.sort((a, b) => b - a); // Sorts numbers in descending order
console.log(numbers); // Output: [10, 5, 2, 1]
```

### Important Considerations

- `.sort()` modifies the original array in-place. If you want to preserve the original array, create a copy before sorting!
