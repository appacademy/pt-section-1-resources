# M2-W9-D2

Timing and Big-O Notation

## Big-O Notation Basics

The biggest thing to remember when using Big-O notation (O stands for order) is that
we are not concerned with exact values, we are looking at growth curves and
worst case scenarios.

The strength of this form of measurement is in understanding efficiency at scale. An important thing to remember is effeciency at scale is not always the best metric to use for all programming problems. It is a general rule that becomes increasingly important as your input size grows. 

### Constant Growth

![constant growth](./images/constant_growth.jpg)

```js
// No matter the size of the input the time complexity remains constant.

const add = (num1, num2) => num1 + num2;
```

### Linear Growth

![linear growth](./images/linear_growth.jpg)

```js
// The time complexity grows linearly, directly corresponding to the size of the input.

const addToN = (n) => {
  let total = 0;

  for(let i = 1; i <= n; i++){
    total += n;
  }
  return total;
}
```

### Quadratic Growth

![quadratic growth](./images/quadratic_growth.jpg)

```js
// exponentially grows dependent on input.
// n*n number of times.

function printPairSums(n) {

  for (let i = 0 ; i < n ; i++) {

    for (let j = 0 ; j < n ; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    }

  }
}
```

## Deducing Efficiency

Ignore Coefficients

```
  5n => On
  2n^2 => On^2
  5 => O1
```

Ignore Insignificant Factors

```
 n^2 + n => On^2
 5 + n => On
```

Lets Practice!
```
5n^2 + 2n + 5 => ??

n * n + n => ??

2 + 3 => ??
```


```js
//time complexity

function printTripleSums(n) {

  for (let i = 0 ; i < n ; i++) {

    for (let j = 0 ; j < n ; j++) {

      for (let k = 0 ; k < n ; k++) {
        console.log(`${i} + ${j} + ${k} = ${i + j + k}`);
      }
    }
  }
}

function printLettersNTimes(n) {

  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0 ; i < letters.length ; i++) {

    for (let j = 0 ; j < n ; j++) {
      console.log(letters[i]);
    }
  }
}

function printNumbersTwice(n) {

  for (let i = 0 ; i < n ; i++) {
    console.log(i);
  }

  for (let j = 0 ; j < n ; j++) {
    console.log(j);
  }
}

function printPairSumsThenPrintNums(n) {

  for (let i = 0 ; i < n ; i++) {

    for (let j = 0 ; j < n ; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    }
  }

  for (let k = 0 ; k < n ; k++) {
    console.log(k);
  }
}
```

```js
//space complexity

const addNums = (n1, n2) => n1 + n2;

function createMatrix(max){
    const matrix = [];

    for(let i = 0; i < max; i++){
        matrix.push([]);
        for(let j = 0; j < max; j++){
            matrix[i].push(j);
        }
    }

    return matrix;
};

const transformArr = (arr) => arr.map(x => x*2);
```

## Timing Benchmarks Practice pt1 (20m, SOLO)

## Timing Benchmarks Practice pt2 (20m, SOLO)

## Timing Benchmarks Practice pt3 (20m, SOLO)