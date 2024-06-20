// function printPairSums(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(`${i} + ${j} = ${i + j}`);
//     }
//   }
// }

// printPairSums(2);
// console.log("-----------------------------")
// printPairSums(7);
// console.log("-----------------------------")
// printPairSums(20);

// function printTripleSums(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//         console.log(`${i} + ${j} + ${k} = ${i + j + k}`);
//       }
//     }
//   }
// }

// printTripleSums(1);
// console.log("-----------------------------")
// printTripleSums(3);
// console.log("-----------------------------")
// printTripleSums(10);

// function printNumbersTwice(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }

//   for (let j = 0; j < n; j++) {
//     console.log(j);
//   }
// }

// printNumbersTwice(2);
// console.log("-----------------------------")
// printNumbersTwice(4);
// console.log("-----------------------------")
// printNumbersTwice(6);

// function printTripleSums(n) {
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         for (let k = 0; k < n; k++) {
//           `${i} + ${j} + ${k} = ${i + j + k}`;
//         }
//       }
//     }
//   }

// function printPairSumsThenPrintNums(n) {
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         `${i} + ${j} = ${i + j}`;
//       }
//     }

//     for (let k = 0; k < n; k++) {
//       k;
//     }
//   }

// let increment = 1000;
// let before = Date.now()
// for (let n = increment; n <= 10 * increment; n += increment) {
//   let startTime = Date.now();
//   printPairSumsThenPrintNums(n);
//   let endTime = Date.now();

//   console.log(`${endTime - startTime}`);
// }
// console.log(`Total time: ${Date.now() - before}`)

// function createMatrix(max) {
//   const matrix = [];

//   for (let i = 0; i < max; i++) {
//     matrix.push([]);
//     for (let j = 0; j < max; j++) {
//       matrix[i].push(j);
//     }
//   }

//   return matrix;
// }

// console.log(createMatrix(1));
// console.log(createMatrix(3));
// console.log(createMatrix(5));

// ----------------------- PST --------------------------------

// const add = (num1, num2) => console.log(num1 + num2);

// add(0, 1);
// add(1000, 2000);
// add(100000, 200000);
// add(10000000, 200000000);

// const addToN = (n) => {
//   let total = 0;

//   for (let i = 1; i <= n; i++) {
//     total += n;
//     console.log(total);
//   }
//   return total;
// };

// addToN(1);
// console.log("------------------")
// addToN(5);
// console.log("------------------")
// addToN(50);

// function printPairSums(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(`${i} + ${j} = ${i + j}`);
//     }
//   }
// }

// printPairSums(1);
// console.log("------------------")
// printPairSums(5);
// console.log("------------------")
// printPairSums(15);

// function printTripleSums(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//         console.log(`${i} + ${j} + ${k} = ${i + j + k}`);
//       }
//     }
//   }
// }

// printTripleSums(1);
// console.log("------------------")
// printTripleSums(3);
// console.log("------------------")
// printTripleSums(5);

// function printNumbersTwice(n) {
//   for (let i = 0; i < n; i++) {
//     i;
//   }

//   for (let j = 0; j < n; j++) {
//     j;
//   }
// }

// function printPairSumsThenPrintNums(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       `${i} + ${j} = ${i + j}`;
//     }
//   }

//   for (let k = 0; k < n; k++) {
//     k;
//   }
// }

let increment = 1000;
for (let n = increment; n <= 10 * increment; n += increment) {
  startTime = Date.now();
  printPairSumsThenPrintNums(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}

// function createMatrix(max) {
//   const matrix = [];

//   for (let i = 0; i < max; i++) {
//     matrix.push([]);
//     for (let j = 0; j < max; j++) {
//       matrix[i].push(j);
//     }
//   }

//   return matrix;
// }

// console.log(createMatrix(1));
// console.log(createMatrix(3));
// console.log(createMatrix(5));

// const transformArr = (arr) => arr.map((x) => x * 2);

// const transformArr = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2
//     }
//     return arr;
// }