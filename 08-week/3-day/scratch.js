// const add = (num1, num2) => num1 + num2;
// console.log(add("banana", "orange"));

// try -> code we want to try to run
// catch -> only going to run if an error was thrown
// finally -> run after the try/catch, regardless of whether an error was thrown

// const add = (num1, num2) => {
//   try {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//       return num1 + num2;
//     } else {
//       throw new TypeError("Type Error: Invalid Inputs");
//     }
//   }
//   catch (error) {
//     console.log(error)
//     console.error(error.message);}
// //   }
// //   finally {
// //     console.log("In the finally block")
// //   }
// };
// add("banana", "orange");
// console.log(add(1, 4));

// throwing an error
// function safeDivide(a, b) {
//   if (b === 0) {
//     throw new Error("cannot divide by zero");
//     // throw new RangeError("cannot divide by zero");
//   } else {
//     return a / b;
//   }
// }

// try {
//   console.log(safeDivide(30, 5)); // prints 6
// } catch (error) {
//   console.error(error.name + ": " + error.message);
// }

// // try {
//   console.log(safeDivide(30, 0));
// // } catch (error) {
//   console.error(error.name + ": " + error.message); // prints error message
// // }

// console.log("hello"); // prints hello

// ------------------ PST -----------------

// throwing errors

// throw new Error("This is an error");

// console.log("HEYYYY");

//basic error handling

// //Doesn't throw an error, but probably should
// const add = (num1, num2) => num1 + num2;
// console.log(add("banana", "orange"));
// console.log(add({}, "banana"))

// const add = (num1, num2) => {
//     try {
//       if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2;
//       } else {
//         throw new TypeError('Type Error: Invalid Inputs')
//       }
//     } catch (nana) {
//       console.error(nana.message);
//     }
//   };
//   add("banana", "orange");
//   console.log(add(1,4))

// throwing an error
// function safeDivide(a, b) {
//   if (b === 0) {
//     throw new Error("cannot divide by zero");
//     // throw new RangeError("cannot divide by zero");
//   } else {
//     return a / b;
//   }
// }

// try {
//   console.log(safeDivide(30, 5)); // prints 6
// } catch (error) {
//   console.error(error.name + ": " + error.message);
// } finally {
//     console.log("This will always run");
// }

// try {
//   console.log(safeDivide(30, 0));
// } catch (error) {
//   console.error(error.name + ": " + error.message); // prints error message
// } finally {
//     console.log("This will always run");
// }

// console.log("hello"); // prints hello
