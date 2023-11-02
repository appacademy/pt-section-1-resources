# M1-W3-D4

- Rest and Spread
- Destructuring

## Rest and Spread

- Rest Parameter takes the `rest` of the arguments and puts them into an array and single parameter

  ```js
  let makeThemBig = function (...strings) {
    //console.log(Array.isArray(strings));
    let result = []
    
    for(let i = 0; i < strings.length; i++){
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

## Destructuring

Destructuring is just matching a pattern.

It is never necessary, but can be used to make your code cleaner.

```js
// array destructuring
let [game, player] = ["Dota 2", "Mylo"];
console.log(game, player);

//swapping values
[player, game] = [game, player];
console.log(game, player);

//object destructuring
let person = "Emily";
let { person: person2, animal } = { person: "Caleb", animal: "elephant" };
// let person = (the Object).person
// let animal = (the Object).animal
console.log(person, person2, animal);
```

## Practice Session 1

- Spread it out
- Break down Object
- Copy Array
- Clone Object

## Practice Session 1 Walkthrough

## POJO Basics Part 2 (PAIRED, UNTIL EOD)