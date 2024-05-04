# Loops and loops and functions and functions

`Nested Loops`

```js
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```

`Pairs In Arrays`

```js
let dogs = ['belka', 'strelka', 'laika', 'dezik'];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = 0; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

![Pairs In Arrays]

`Unique Pairs In Arrays`

```js
let dogs = ['belka', 'strelka', 'laika', 'dezik'];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

![Unique Pairs In Arrays]

---

## 2D Arrays

Arrays within arrays

```js
let twoDimensional = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ];

```

Much easier to visualize them as a grid!

```js
let twoDimensional = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];
```

Arrays are not required to have matching lengths

```js
let twoDimensional = [['a'], ['b', 'c', 'd', 'e', 'f', 'g'], ['h', 'i']];
```

Accessing them can look a little funky

```js
let twoDimensional = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];

console.log(twoDimensional[0][0]); // a
console.log(twoDimensional[0][1]); // b
console.log(twoDimensional[0][2]); // c

console.log(twoDimensional[1][0]); // d
console.log(twoDimensional[2][0]); // g
```

---

## Helper Functions

### We heard you like functions so we've put some functions in your functions so you can call a function while you call a function

---

Sometimes a problem is easy to solve in a single function

Other times, solving a problem in a single function is **_doable_**, but it's not necessarily **_feasible_**.

`Helper functions` are functions we write to help us solve a more complex problem

- ### Remove E Words

```js
// Removes all words from the sentence with the letter "e"
let removeEWords = function (sentence) {};
```

- ### Echo

```js
// Returns a string "echo-ized"
let echo = function (string) {};
```

[unique pairs in arrays]: ./images/unique_pairs_in_arrays.png
[pairs in arrays]: ./images/pairs_in_arrays.png
