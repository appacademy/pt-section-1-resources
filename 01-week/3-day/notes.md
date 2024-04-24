# It's Wednesday My Dudes 🕷️🤦‍♂️

## Commenting

- Comments allow us to write in a file without having JS read it
  - Very useful for notes!
- JS comment syntax is two forward slashes `//`
  - Every language has different comment syntax
    - Python uses `#`
- VSCode shortcut is:
  - Mac: `cmd` + `/`
  - Windows: `ctrl` + `/`

## Printing Code

- It's incredibly important to see what your code is actually doing
- The easiest way to do that is to `console.log()` it
- This allows us to verify if what we **_think_** is happening is **_actually_** happening
- This is also your **_#1_** debugging tool!

```js
console.log("Hello world"); // prints out: "Hello world"
```

## The Number Type

- We can have whole numbers, decimals, and negative numbers
- Order of Operations
  - P.E.M.D.A.S.
- All "normal" math operations apply
  - \+, -, /, \*
- Modulo is a new operation!

  - Returns the `remainder` of a division expression

  ```js
  console.log(5 % 1); // 0
  console.log(5 % 2); // 1
  console.log(5 % 3); // 2
  console.log(5 % 4); // 1
  console.log(5 % 5); // 0
  ```

- NaN

  - Any invalid mathematical operation

    ```js
    console.log(5 / "bread"); // NaN
    ```
