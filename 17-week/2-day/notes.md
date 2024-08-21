# ES6 Imports/Exports & DOM Selection

## ES6 Imports and Exports

### CommonJS Import and Export Review

```js
// File 1
module.exports = {
    someExport,
    someOtherExport
}
// File 2
const {someExport, someOtherExport} = require("./File1.js")
```

### ES6 Syntax

Named Import/Export

```js
// File 1
export class SomeClass {
    // some code
}
// File 2
import { SomeClass } from "File1.js";
```

Unnamed Import/Export

```js
// File1.js
export default function someFunc () {
    // some code
}
// File2.js
import func from "File1.js"
```

Aliasing imports

```js
// File1.js
export function sayHello() {
  console.log('Hello!');
}

export const sayHi = () => {
  console.log('Hi!');
};
// File2.js
import * as Greetings from 'File1.js';

Greetings.sayHello(); // Hello!
Greetings.sayHi();    // Hi!
```

### IMPORT/EXPORT PRACTICE

## DOM Selection

We've got several ways of selecting individual DOM elements or groups of elements built into the `document` object:

```js
document.getElementById("logo") // returns the element with an id attribute equal to "logo", or null if there was no match
document.getElementsByClassName("main") // returns an HTMLCollection of elements that have a class of "main"
document.getElementsByTagName("p") // returns an HTMLCollection of all <p> elements

// The .querySelector and .querySelectorAll methods take a CSS Selector as their argument

document.querySelector("#logo") // returns the element with an id attribute equal to "logo", or null if there was no match
document.querySelectorAll(".main") // returns an NodeList of elements that have a class of "main"
```
