// const add = (num1, num2) => num1 - num2;
// console.log(add("banana", "orange"));


// try {
//     //code to attempt to run
// } catch(errorObj) {
//     //code to execute if the try block fails
// }


// const add = (num1, num2) => {
//     try {
//       if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2;
//       } else {
//         throw new TypeError('Type Error: Invalid Inputs');
//         // throw new TypeError('aaaaaaaaaaaaaaa');
//       }
//     } catch (e) {
//       console.error(e.message);
//     };
// };

// add("banana", "orange");
// console.log(add(1,4));


// throwing an error
// function safeDivide(a, b) {
//     if (b === 0) {
//     //   throw new Error("cannot divide by zero");
//       throw new RangeError("cannot divide by zero");
//     } else {
//       return a / b;
//     }
// };
  
// try {
//     console.log(safeDivide(30, 5)); // prints 6
// } catch (error) {
//     console.error(error.name + ": " + error.message);
// }

// try {
//     console.log(safeDivide(30, 0));
// } catch (error) {
//     console.error(error.name + ": " + error.message); // prints error message
// }

// const divide = (a,b) => a / b;

// console.log(safeDivide(30, 0));

// console.log("hello"); // prints hello

// function trySafeDivide(n) {
//     try {
//         console.log(safeDivide(30, n));
//     } catch (error) {
//         console.error(error.name + ": " + error.message); // Error: cannot divide by zero
//         return;
//     } finally {
//         console.log("This will always run");
//     }
// }

// trySafeDivide(0)

// ------------------------------- PST ----------------------------------------

// const sub = (num1, num2) => num1 - num2;
// console.log(sub("banana", "orange"));


// try-catch error handling
// try {
//     //code to attempt to run
// } catch(errorObj) {
//     //code to execute if the try block fails
// }

// const add = (num1, num2) => {
//     try {
//       if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2;
//       } else {
//         throw new TypeError('Type Error: Invalid Inputs');
//       }
//     } catch (e) {
//       console.error(e.message);
//     } //finally {
//     //     console.log('i always run');
//     // };

//     console.log('other');
// };

// // const add = (num1, num2) => {
// //     if(typeof num1 === 'number' && typeof num2 === 'number'){
// //         return num1 + num2;
// //     } else {
// //         throw new TypeError(`Type Error: Invalid Inputs. num1: ${num1}, num2: ${num2}`);
// //     }
// // };

// add("banana", "orange");
// console.log(add(1,4));

// console.log('i got here');