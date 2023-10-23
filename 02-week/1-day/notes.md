# M1-W2-D1

- Nested Loops
- 2D Arrays
- How to Study Workshop

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

## Practice Session 1 (30m, SOLO)

- Pig Latin Recall
- Least Common Multiple

## How to Study Workshop (~1h)

## Practice Session 2 (Until EOD)

- Array Sum
- Two Dimensional Sum
- Least Common Multiple Recall
- Remove Last Vowel Recall
