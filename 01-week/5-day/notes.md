# M1-W1-D5

Throughout the day we will be checking in our your tech setup completion :)

- Personal Notes Setup
- Function Expressions
- Mutability
- Array Methods
- Nested Loops

## Personal Notes Setup

- open your terminal
- cd to your home directory (just type `cd` and press enter)
- run this command `git clone https://github.com/appacademy/pt-section-1-resources.git personal-notes`
- cd into personal-notes `cd personal-notes`
- checkout the student-template branch `git checkout student-template`
- remove the .git folder `rm -rf .git`
- You now have a place to put your personal notes from class and any local code that you work on including app academy practices that follows the same structure as my lecture notes!

## Practice Session 1 (25m, SOLO)

- Intermediate Functions Quiz
- Reverse String
- Range
- Log Between Stepper Recall

## Function Expressions

1. variable assignment (name)
2. `function` keyword
3. parenthesis with the functions parameter(s)
4. code block
5. semi-colon

```js
//declaration syntax
function greet(name) {
  console.log("Hello, " + name);
};

//expression syntax
let greet = function (name) {
  console.log("Hello, " + name);
};
```

## Functions are First Class Citizens / Objects

1. Can be stored in a variable.
2. Passed into a function as an argument.
3. Returned from a function.


## Mutability

1. Mutable types
   - Arrays
   - Objects (we will learn these later)
2. Immutable Types
   - Numbers
   - Strings
   - NaN
   - undefined
   - null

```js
let arr = [1, 2, 3];
arr[1] = 7;
console.log(arr); //[1,7,3]

let str = "abc";
str[1] = "x";
console.log(str); // 'abc';

//reassigning !== mutable
let str = "abc";
str += "d"; // str = str + 'd';
console.log(str); // 'abcd'
```

## Practice Session 2 (25m, SOLO)

- My Includes
- Sum Array Recall
- Factors Of

## Collaborative Problem Solving (1h-ish, Main Room)

- My Index Of
- Vowel Counter Recall
- Has Vowel
- Fizz Buzz Array
- First Vowel

## Practice Session 3 (25m, SOLO)

- Even Numbers
- Is Prime Recall

## Array Methods

---

### Array.push (MDN: [Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push))

- Syntax
  - `arr.push(el1, el2)`
- Description
  - Adds one or more elements to the end of an array and returns the new
    length of the array.
  - mutates the array it is called on.
- Arguments
  - The elements(s) to add to the end of the array.
- Return Value
  - The new length property of the array that the method was called on.
  - This is super critical to note, forgetting can lead to a very common
    mistake. Which is usually saving the new length rather than the actual array.

  ```js
  let animals = ["ant", "bear", "dog"];

  // appends "cat" to animals && returns length
  let animalLength = animals.push("cat");

  console.log(animals); // ["ant", "bear", "dog", "cat"]
  console.log(animalLength); // 4
  ```

---

### Array.pop (MDN: [Array.prototype.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop))

- Syntax
  - `arr.pop()`
- Description
  - Removes the last element from an array and returns that element.
  - Mutates the array it is called on.
- Arguments
  - None
- Return Value
  - Returns the removed element from the array.

  ```js
  let dogs = ["Fido", "Rover"];

  let lastDog = dogs.pop();

  console.log(dogs); //['Fido']
  console.log(lastDog); //'Rover'
  ```

---

### Array.unshift (MDN: [Array.prototype.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift))

- Syntax
  - `arr.unshift(ele1, ele2)`
- Description
  - Adds one or more elements to the beginning of an array and returns the new
    length of the array.
  - mutates the array it is called on
- Arguments
  - The element(s) to add to the beginning of the array.
- Return Value
  - The new length property of the array on which the method was called.

  ```js
  let cats = ["Whiskers", "Garfield"];
  let catsLength = cats.unshift("Jasper");

  console.log(cats); //['Jasper', 'Whiskers', 'Garfield']
  console.log(catsLength); //3
  ```

---

### Array.shift (MDN: [Array.prototype.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift))

- Syntax
  - `arr.shift()`
- Description
  - Removes the first element from an array and return the removed element
  - mutates the array it is called on
- Arguments
  - None
- Return Value
  - The removed element from the array.

  ```js
  let cats = ["Paprika", "Whiskers", "Garfield"];
  //removes 'Paprika' from cats and returns 'Paprika'
  let firstCat = cats.shift();

  console.log(firstCat); // 'Paprika'
  console.log(cats); // ['Whiskers', 'Garfield']
  ```

## Practice Session 4 (25m, SOLO)

- Last Vowel
- Pit Pat
- Remove Last Vowel

## Nested Loops

```js
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```

`Pairs In Arrays`

```js
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = 0; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

`Unique Pairs In Arrays`

```js
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

## Nested Arrays / 2D Arrays

```js

let nestedArray = [
    ['cat', 'dog', 'hamster', 'horse'],
    ['William', 'Kate', 'Caleb', 'Maggie'],
    ['Water', 'Fire', 'Earth', 'Air']
];

//Values are grabbed in the same exact way as a 1D array
let outerValue = nestedArray[2] // ['Water', 'Fire', 'Earth', 'Air']
let innerValue = outerValue[1] // 'Fire'

//alternatively
let innerValue = nestedArray[2][1] // 'Fire'
```

## Practice Session 5 (Until EOD)

Keep working on problems, ask for help when you get stuck, try to follow Polya's problem solving framework that we showcased earlier in class! 

- Understand the problem
- Make a plan
- Carry out the plan
- Look back and improve your solution