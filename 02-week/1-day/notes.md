## Arrays - Ordered Lists

### Variables === Boxes, Arrays === Dividers

- An array is written with square brackets `[]`, passing in comma separated values
- We refer to each item in an array as an `element`

  ```js
  let arr = [1, "hello", false, NaN, [1, 2, 3]];
  ```

### Indexing

There are a lot of syntax similarities between arrays and strings

- `.length` - returns the number of elements in an array

  ```js
  let array = ["dog", "cat", "turtle"];

  console.log(array.length); // 3
  ```

- We can get a specific index with `bracket notation`

  - Index starts at 0

  ```js
  let array = ["dog", "cat", "turtle"];

  console.log(array[1]); // "cat"
  console.log(array[array.length - 1]); // finds last element // "turtle"
  ```

- `.indexOf(element)` - finds the index of the first given element in an array. If not found, returns -1.

  ```js
  let array = ["dog", "cat", "turtle"];

  console.log(array.indexOf("dog")); // 0
  console.log(array.indexOf("elephant")); // -1
  ```

- `.concat(arr)` - allows us to join arrays together.

  ```js
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  let array3 = [7];

  let array4 = array1.concat(array2, array3);

  console.log(array4); // [1, 2, 3, 4, 5, 6, 7]
  ```

### More Methods

Other common methods you will use often: (Not needed _today_, but why not take a look at them on MDN)

- Array.push
- Array.pop
- Array.shift
- Array.unshift
- Array.slice
- Array.splice
- Array.join
