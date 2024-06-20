function addToBack(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
}

function addToFrontPreallocated(n) {
  // Preallocate n slots of memory in an array
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

// n = 10000000;

// startTimeBack = Date.now();
// arr = addToBack(n);
// endTimeBack = Date.now();

// startTimePre = Date.now();
// arr = addToFrontPreallocated(n);
// endTimePre = Date.now();

// console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

// console.log(
//   "addToFrontPreallocated(" + n + ") = " + (endTimePre - startTimePre) + "ms"
// );

// function addToFront(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.unshift(n - i);
//   }
//   return arr;
// }

// n = 100000;

// startTimeBack = Date.now();
// arr = addToBack(n);
// endTimeBack = Date.now();

// startTimeFront = Date.now();
// arr = addToFront(n);
// endTimeFront = Date.now();

// console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

// console.log(
//   "addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms"
// );

// const newArr = [1, 2, 3, 4]
// [1, 2, 3, 4, empty, empty, empty, empty]


// const newStack = new Stack();

// class Stack {
//   constructor() {
//     this.data = [];
//   }

//   push(val) {
//     this.data.push(val);
//   }

//   pop() {
//     return this.data.pop()
//   }
// }

// const stack = [];