# Welcome to Saturday! Time to grind 💪

## Functions

### What even are functions???

- Blocks of code that we can invoke multiple times
- Prevents us from having to rewrite code

### Terminology

- `function declaration` - writing a function (once)
- `function call` / `invoking` - using a function (once or many times)
- `parameter(s)` - input(s) to a function when _writing_ a function
- `argument(s)` - input(s) to a function when _calling_ a function
- `return` a function's 'value' or what it 'equals'

### Declaring

- Blueprint for `declaring` a function

  ```js
  function aName(optionalParams) {
    // may have a return value
  }
  ```

### Return

- Evaluates a function
  - It will evaluate to whatever you put after `return`
  - By default, functions evaluate to `undefined`
- Stops the rest of your function's code from running

### Invoking a function

- Blueprint for `invoking` a function

  ```js
  aName(optionalArgs);
  // if no args
  aName();
  ```

## `***WEE-WOO-WEE-WOO***`

### `console.log()` vs `return`

- `console.log()` is what's known as a `SIDE EFFECT`
  - Does not effect the value of the function
- `return` gives us a value when it's invoked

## `Truthy` vs `Falsy`

- In JS, there are only two booleans, `true` and `false`
- Code can be evaluated as a true or false statement
  - **_Everything_** in JS is either truthy or falsy

All falsy values:

- `false`
- All "forms" of `0`
- An empty string `""` || `''`
  - A string with a space `" "` is _NOT_ falsy
- `null`
- `undefined`
- `NaN`

Everything else is truthy

## Conditionals

- Keywords: `if` | `else if` | `else`

  - `if` & `else if` require a condition inside of parenthesis
    - If we pass something `truthy`, the conditional will run
    - If we pass something `falsy`, the conditional will be skipped
  - We can put whatever we want in a condition

  ```js
  let c = "turtle";

  if (c === "dog") {
    console.log("I'm a dog!");
  } else if (c === "turtle") {
    console.log("I'm a turtle!");
  } else if (c === "potato") {
    console.log("I'm a potato");
  } else {
    console.log("I don't know what I am");
  }
  ```

## Loops

### `while` loop

- an `initial expression` (like a counter)
- the `while` keyword
- parenthesis with a conditional of when to run the loop WHILE the condition is true
- a step case leading to the conditional being falsy.

```js
let i = 0;

while (i < 5) {
  console.log("hello world");
  i++;
}
```

### `for` loop

- `for` keyword
- parenthesis that has three sections, separated by semi-colons
  1. an `initial expression` (like a counter)
  2. a conditional of when to run the loop
     - while truthy, the loop will run.
  3. a step case leading to the conditional being falsy.

```js
for (let i = 0; i < 5; i++) {
  console.log("hello world");
}
```

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
