# Scope && Closures

- Scope
- Closure

## Scope

- What is scope?

  - Scope determines what variables are available for use within any given line
    of a JavaScript program.

- Advantages of Using Scope Correctly

  - `Security` - Restricting variables to only predefined sections of a program.
  - `Avoiding Namespace Collisions` - Allows you to reuse variables
    names in different scopes without causing errors.

- Three types of scope

  - `Global` - Variables defined in the global scope.
    - Everything in js is an object. When running js in the browser the global
      scope represents the window; when running js locally (Node) it represents the
      global object.
    - If you initialize a variable without a declaration it defaults to the
      global scope.
  - `Local or Function` - Global, Parameters, Variables in the function
  - `Block`- Global, Local, Variables in the block

---

```js
let globalScope = 'I am globally scoped';

let myFunction = function(functionScope){
  let alsoFunctionScope = "I am also function scoped";
  if(!functionScope){
    let blockScope = 'I am block scoped";
  };
};

myFunction("I am function scoped");
```

---

```js
let car = "vroom";

function makeSounds(dogSound) {
  let cow = "moo";

  if (true) {
    let turkey = "gobble";

    for (let i = 0; i < 2; i++) {
      console.log(car, dogSound, cow, turkey, i);
    }
  }
}

makeSounds("woof");
```

---

- Scope Chaining
  - JS will search through scopes, working upwards until it finds a match.
    - Inner scopes have access to outer scopes but outer scopes don't have
      access to inner scopes

```js
let hungry = false;
function sayHungry() {
  let hungry = true;
  if (hungry) {
    console.log("I'm hungry!");
  } else {
    console.log("I'm coding");
  }
}
sayHungry();
```

### `Let, Const, and Var`

- `Let` is block scoped and CAN be reassigned.
- `Const` is also block scoped, but CANNOT be reassigned.
  - reassign !== mutable
- `Var` is function scoped, and CAN be reassigned.
- `Temporal Dead Zone` The state where variables are un-reachable. They are in scope, but they aren't declared.

|       | declaration | assignment  |  initialization  |  scope   |        hoisting        |
| :---: | :---------: | :---------: | :--------------: | :------: | :--------------------: |
|  var  |   var x;    | x = 'Toby'; |  var x = 'Tom';  | function | declared; not assigned |
|  let  |   let x;    | x = 'Toby'; |  let x = 'Tom';  |  block   |   Temporal Dead Zone   |
| const |             |             | const x = 'Tom'; |  block   |   Temporal Dead Zone   |

### Let

```js
// not defined error

console.log(myLet);
// let myLet = 'hello'
```

```js
// Access before initialization error (TDZ)

console.log(myLet);
let myLet = 'hello'
```

```js
// Success :)

let myLet = 'hello'
console.log(myLet);
```

### Const

```js
// not defined error

console.log(myConst);
// const myConst = 'hello'
```

```js
// Access before initialization error (TDZ)

console.log(myConst);
const myConst = 'hello'
```

```js
// Success :)

const myConst = 'hello'
console.log(myConst);
```

### Var


```js
// not defined error

console.log(myVar);
// var myVar = 'hello'
```

```js
// Access before initialization success?

console.log(myVar);
var myVar = 'hello'
```

```js
// Success :)

var myVar = 'hello'
console.log(myVar);
```

```js
//var scoping behavior

if(true){
    var hello = 'world'
};

console.log(hello);
```

## Practice Session (SOLO, 40m)

- Intro to Scope Practice
- Intro to Closure Practice

## Closures [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

- An inner function that uses or changes variables that were initialized
in an outer function.
- Technically every function creates a closure because of how scoping works in javascript. It is usually only called a closure when an inner function is actually being used to take advantage of that lexical environment (the functions scope).
- We can use/manipulate a Higher Order Functions' variables/parameters with a closure
- We can create multiple "instances" of a function's variables with closures

```js
const countFrom = (n) => {
    let count = n;
    const innerFunc = () => {
        // return count++; // why doesn't this work?
        // return ++count; // why does this work?
        count++;
        return count;
    }

    return innerFunc;
}

let count1 = countFrom(0);
console.log(count1); // [Function: InnerFunc]
// console.log(count); // cant access the value

console.log(count1());
console.log(count1());
console.log(count1());

let count2 = countFrom(5);
console.log(count2);
console.log(count2());
console.log(count2());
```

## Scope Project (Paired, Until EOD)

Will also be working on this tomorrow with the same pair.