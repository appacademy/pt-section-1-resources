// // default params

// function addToArray (arr, el = 100) {

//     arr.push(el);
//     return arr;
// };

// console.log(addToArray([1, 2, 3], 4)) // [1, 2, 3, 4]
// console.log(addToArray([1, 2, 3])) // ?? [1, 2, 3, undefined]
// console.log(addToArray())

// function multiply(num1, num2) {
//     // base case
//     if (num2 == 0) return 0;
//     if (num2 == 1) return num1;

//     return num1 + multiply(num1, num2 - 1);
// }
// multiply(5, 3)  // 15

// ----------------------PST-------------------

// const addTwoNums = (n1, n2 = 1000) => {
//     if (n2 === undefined) throw new Error("")
//     n1 + n2};

// console.log(addTwoNums(3, 10));
// console.log(addTwoNums(3, 100));
// console.log(addTwoNums(3));

// let str = "car"

// let reversed = "";

// let i = str.length - 1

// while (i >= 0) {
//     let char = str[i]
//     reversed += char
// }

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// console.log([...arr1, ...arr2])
// console.log(arr1.concat(arr2))
