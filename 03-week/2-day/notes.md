# Fancy Functions and The ULTIMATE CONTAINER

## Arrow Functions

Arrow functions are what I'll use from now on until forever

They are going to be used **_`everywhere`_**, so start getting used to them now!

- Arrow Functions are always anonymous
  - More on this later 👀
- Arrow Functions have implicit return (one line)
- Optional parenthesis for single parameter
- Everything else is the same!

  ```js
  // Multiline
  let multilineName = (name) => {
    return "My name is " + name;
  };
  multilineName("Zaviar");

  // Single Line
  let returnName = (name) => "My name is " + name;
  console.log(returnName("Ricky"));

  // Anonymous callback
  let arr = [1, 2, 3];
  let addOne = arr.map((num) => num + 1);
  console.log(addOne);
  ```

## Objects

### `Keys` vs `Values`

`Keys` are on the left

`Values` are on the right

A key "points" to a value using `:`

Think of it like a variable inside a box!

- But, that "variable" can only be used inside that "box"!

```js
let catObj = {
  firstCat: "Momo", // kind of like ` let firstCat = "Momo" `
};

console.log(firstCat) //! ReferenceError: firstCat is not defined
```

### `Bracket` notation

- Keys are **_pretty much_** always strings
- JS knows this and doesn't require quotes!
- But if the key has special characters, you do need quotes

```js
let obj = {
  validKey: "✅",
  invalid key: "❌",
  "validButWhy": "Might as well not use quotes!",
  "another valid key": "✅✅",
  not-so-valid: "❌❌",
  "but-this-is-valid!!!": "✅✅✅"
};

console.log(obj["validKey"]); //
console.log(obj["validButWhy"]); //
console.log(obj["another valid key"]); //
console.log(obj["but-this-is-valid!!!"]); //
```

### `Dot` notation

- Since keys are usually strings, and we'd hate to have to write [''] all the time, we have dot notation
- But it only works if the keys are "normal"

```js
let obj = {
  validKey: "✅",
  "validButWhy": "Might as well not use quotes!",
  "another valid key": "✅✅",
  "but-this-is-valid!!!": "✅✅✅"
};

console.log(obj.validKey); //
console.log(obj.validButWhy); //
console.log(obj.another valid key); //
console.log(obj.but-this-is-valid!!!); //
```

### `Using a variable`

```js
let someVariable = "firstName";
let some = "second";
let variable = "Name";
let time = "FrEQUENcY";

let obj = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
};

console.log(obj[firstName]); //
console.log(obj[someVariable]); //
console.log(obj[some + variable]); //
console.log(obj[time.toLowerCase()]); //
```

## What JS thinks

```js
let catObj = {
    firstCat: 'Momo',
};
let whoopsSkippedACat = 'secondCat';
catObj[whoopsSkippedACat] = 'Tenten'; // JS sees => catObj['secondCat']

//! Object "dot" something MEANS
// take everything after the dot => whoopsSkippedACat
// put it in a string => 'whoopsSkippedACat'
// put that string in brackets => ['whoopsSkippedACat']
// catObj['whoopsSkippedACat']

//! Object "bracket" something MEANS
// look at what's in the bracket => [whoopsSkippedACat]
// is it a variable? => yes!
//? if yes, find the variables value, then put that in the brackets 
    //? whoopsSkippedACat = "secondCat"
    //? ["secondCat"]
//* if no, use the value as a string in the brackets
    //* ['whoopsSkippedACat']
```

## Which notation should I use? Which version is the best?

Technically either notation is fine, as long as it works

With that said, if it's a valid key, Bracket notation _ALWAYS_ works!

Dot notation is easier to write, but doesn't work with variables or special strings

If you're having trouble with objects, stick with Bracket notation!

## Checking if a key exists

- obj[key] !== undefined
- key in obj
- `.hasOwnProperty("key")`

## Modifying keys in an object

Objects are `mutable`

We can create new keys or update existing ones using assignment

```js
let catObj = {
  firstCat: "Momo",
};

catObj["secondCat"] = "Kiki";

console.log(catObj); //

catObj.thirdCat = "Kiki";

console.log(catObj); //

let whoopsSkippedACat = "secondCat";

catObj[whoopsSkippedACat] = "Tenten";

console.log(catObj); //
```

## Iterating over an Object

### **_OBJECTS ARE UNORDERED_**

- for in loop
- Object.keys
- Object.values
- Object.entries

### Why objects

- Instant look up time.
- Allows us a term/definition (key-value)
- Groups `like` information together

### Let's manipulate this object

```js
let userData = {
  name: "Zaviar",
  age: 26,
  game: {
    name: "Elden Ring",
    hours: 135,
    favWeapon: "Bloodhound's Fang",
    bossesKilled: [
      "Godrick the Grafted",
      "Margit, the Fell Omen",
      "Rennala, Queen of the Full Moon",
      "Astel, Natrualborn of the Void",
    ],
  },
};

//How would I print my name from the object?

//How would I add my location, Phoenix?

//How would I change my age to 32000?

//How would I add "Starscourge Radahn" to the bossesKilled array?
```
