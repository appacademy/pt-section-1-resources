# Our first Pseudo Friday!

## Comparison Operators

- Compares two elements and evaluates to a boolean

  ```js
  // Less than/Greater than
  console.log(5 < 9); // true
  console.log(5 > 9); // false
  console.log('a' < 'b'); // true (dictionary order)
  console.log('cat' < 'cats'); // true (dictionary order)

  // Inclusive comparison (... or equal to)
  console.log(7 <= 10); // true
  console.log(10 >= 10); // true
  ```

- Equality

  - `=` is an assignment operator
  - `==` coerces data to check equality, hard to predict; **_DO NOT USE_**
  - `===` strict equality
  - `!==` strict NOT equal

  ```js
  // Equality === and !==
  console.log(2 === 2); // true
  console.log(2 === 2.1); // false
  console.log(2 !== 2.1); // true

  // Two equality operators, === and ==
  console.log(5 === '5'); // false
  console.log(5 == '5'); // true (types are coerced)
  console.log([] == 0); // true (can be unpredictable)
  ```

## Variables

### Creation

- To declare a variable, we use the `let` keyword
- The `=` operator is the `assignment operator`
  - Left of the `assignment operator`
    - Creates a space in memory with that name
    - Think of it like putting a label on a box
  - Right of the `assignment operator`
    - The `value` that will be assigned to the namespace
    - Think of it like putting something inside your box

```js
let myVariableName = 'Whatever I want!';
```

### Terminology

- Declaration
  - The act of saying `let`
- Assignment
  - The act of giving the variable a value
- Initialization
  - The combination of both Declaration & Assignment

```js
let name; // declaration

name = 'Leroy'; // assignment / reassignment

let name2 = 'Jenkins'; // initialization

console.log(name, name2); // Leroy Jenkins
```

### Interactions

- Creating a variable with no value gives it a default of `undefined`
- Assigning a value to a variable that already had a value will overwrite that value
- You can't create multiple variables with the same name

```js
let myVariable;
console.log(myVariable); // undefined

myVariable = 'Zaviar';
console.log(myVariable); // "Zaviar"

myVariable = 'Kirin';
console.log(myVariable); // "Kirin"

let myVariable = 100; // SyntaxError: Identifier 'myVariable' has already been declared
```

### Manipulation

- To change the value of a variable, you MUST use an `=` sign

  - Any "changes" you make to a variable are not saved unless you assign them

  ```js
  let num = 42;
  console.log(num + 8); // => 50
  console.log(num); // => 42

  num = num + 10;
  console.log(num); // => 52
  ```

- Shorthands exist to make our lives easier!

  ```js
  let number = 0;
  number += 10; // equivalent to number = number + 10
  number -= 2; // equivalent to number = number - 2
  number /= 4; // equivalent to number = number / 4
  number *= 7; // equivalent to number = number * 7
  console.log(number); // 14
  ```

- It's very common to add/subtract 1 from a number, so there are also shorthands for that!

  ```js
  let year = 3004;
  year++;
  console.log(year); // 3005
  year--;
  console.log(year); // 3004
  ```

- Be careful with prefix vs postfix

```js
let preFix = 10;
console.log(preFix); // 10
console.log(++preFix); // 11
console.log(preFix); // 11

let postFix = 10;
console.log(postFix); // 10
console.log(postFix++); // 10
console.log(postFix); // 11
```

## Strings

### Syntax

- Must use single-quotes (`'`) or double quotes (`"`)
  - AirBnB Style guide prefers single by default
  - Be consistent
- You can use single within double or vice-versa
  - If you need both,escape character `\`

### Length

- The `.length` property returns the number of characters in a string:
  - Space and punctuation are also characters

### Indexing

- `Index`: position of an element

  - **Indices start at 0**

    | index | 0   | 1   | 2   | 3   |
    | ----- | --- | --- | --- | --- |
    | char  | d   | o   | g   | s   |

- Refer to a single character of a string using `bracket notation`

### IndexOf

- Find the index of _the first_ given character with `indexOf`

### Concatenate

- Use `+` to concatenate (join) strings together

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
