// const add5AfterPause = (num) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num + 5);
//     }, 1000);
//   });
// };

// add5AfterPause(0).then((res) => console.log(res)); // 5
// add5AfterPause(0)
//   .then((nextNum) => add5AfterPause(nextNum))
//   .then((sum) => console.log(sum)); // 10

// console.log("Return value:", add5AfterPause(0));

// add5AfterPause(0)
//   // returns 5
//   .then((nextNum) => add5AfterPause(nextNum))
//   // nextNum = 5, returns 10
//   .then((sum) => {
//     console.log(sum)
//     return sum;
// })
//   // sum = 10, console.log() doesn't return anything (undefined)
//   .then((anotherNum) => add5AfterPause(anotherNum))
//   // anotherNum = undefined, returns NaN (undefined + 5 = NaN)
//   .then((thisWontWork) => console.log(thisWontWork)); // NaN

// const add = async () => {
//     let sum;
//     sum = await add5AfterPause(0); // using await, to block the flow of code until this promise is resolved.

//     console.log(sum); // will not run, until the promise above is resolved.

//     sum = await add5AfterPause(sum);
//     sum = await add5AfterPause(sum);
//     console.log(sum);

//     return sum;
//   };

//   // Invoking function
//   console.log("Return Value", add().then(() => console.log("Done adding")));
//   console.log("After add");

// const promiseFunc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//       console.log("RANDOM:", random) // random number between 1 - 10
//       if (random % 2 === 0) {
//         //if random is an even number reject promise
//         reject("ERROR number was even!"); // reject function takes in a string of the reason why promise was rejected
//       } else {
//         resolve(random); // number is odd! resolve takes in value to be passed on.
//       }
//     });
//   });
// };

// const asyncPromiseFunc = async () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const random = Math.floor(Math.random() * (10 - 1 + 1) + 1); // random number between 1 - 10
//          if (random % 2 === 0) {
//           //if random is an even number reject promise
//           reject("ERROR number was even!"); // reject function takes in a string of the reason why promise was rejected
//         } else {
//           resolve(random); // number is odd! resolve takes in value to be passed on.
//         }
//       });
//     });
//   };


// promiseFunc()
//   .then((res) => {
//     console.log(res);
//     return res + 20;
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const asyncCallPromiseFunc = async () => {
//     try {
//     let res = await promiseFunc()
//     console.log(res);
//     console.log(res + 20);
//     } catch (err) {
//         console.log(err)
//     }
// }

// asyncCallPromiseFunc();

// -------------------------------------- LECTURE 2 ---------------------------------

