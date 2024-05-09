# Week 3 Day 4: Destructuring, Rest, and Spread

## Destructuring

`Destructuring:` a powerful feature that allows us to unpack values from arrays or properties from objects into distinct variables. It's a concise and readable way to extract specific data you need from complex data structures.

- Destructuring is just matching a pattern.
- It is never necessary, but can be used to make your code cleaner.

### Arrays

- Use square brackets `[]` to destructure arrays.
- Assign variables to elements at specific positions.

```js
const numbers = [1, 2, 3];
const [first, second] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
```

### Objects

- Use curly braces `{}` to destructure objects.
- Assign variables to object properties by name.


```js
const person = { name: "Alice", age: 30 };
const { name: name, age: age } = person;
// const { name, age } = person;          <--- Shorthand version of the above line

console.log(name); // Output: "Alice"
console.log(age); // Output: 30
```

## Rest and Spread

- Rest Parameter takes the `rest` of the arguments and puts them into an array and single parameter

  ```js
  let makeThemBig = function (...strings) {
    //console.log(Array.isArray(strings));
    let result = [];

    for (let i = 0; i < strings.length; i++) {
      let string = strings[i];
      let upperString = string.toUpperCase();
      result.push(upperString);
    }

    return result.join(" ");
  };

  console.log(makeThemBig("hello", "world"));
  console.log(makeThemBig("hello"));
  console.log(makeThemBig("Hello", "world,", "how's", "it", "going", "today?"));
  ```

- Spread Operator takes some data and `spreads` it out of it's containing brackets.

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, arr1, arr2];
  let arr4 = [0, ...arr1, ...arr2];
  console.log(arr3);
  console.log(arr4);

  let obj1 = { name: "Mylo" };
  let obj2 = { animal: "elephant", game: "Dota 2" };
  let obj3 = { obj1, obj2, movie: "Fantastic Mr. Fox" };
  let obj4 = { ...obj1, ...obj2, movie: "Fantastic Mr. Fox" };
  console.log(obj3);
  console.log(obj4);
  ```

---

## Practice Session 1 - Rest and Spread Practice (40 mins)

## Practice Session 1 Walkthrough

## POJO Basics Practice (From Wednesday, Until EOD)
