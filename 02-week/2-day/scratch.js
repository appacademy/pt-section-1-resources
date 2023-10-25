//slice -> returns a subsection(slice) of an array

//1. it does not mutate the input
//2. returns a new array
//start, end

// let arr = [1,2,3,4,5,6,7,8];

// let newArr = arr.slice(4);

// console.log(newArr);

//splice
//1. mutate the input
//2. change the content by removing or replacing elements
//startingIndex, deletionCount, *itemsToAdd

// arr.splice(2,3, 'hello', 'world')
// console.log(arr);

//join
// let charArr = ['hello', 'world'];

// // console.log(charArr + "");
// let joinedStr = charArr.join(" ");
// console.log(joinedStr)

//split
// let inputStr = 'The red fox jumps over the blue stream';
// let wordsArr = inputStr.split("r").join("");
// console.log(wordsArr);


// -------------------- PST -----------------------------


// Slice / Splice / Split / Join

//1. does not mutate the input
//2. returns a new array
// start, end


// let arr = [1,2,3,4,5,6];


// let newArrRef = arr;
// let newArrVal = arr.slice(2,4);

// arr[2] = 'hello';

// console.log(newArrVal);


// 1. mutates the input
// 2. whatever you removed from the input
// 3. startIdx, numToDelete, *argsToAdd


// function func(){

//     return 2;
// }

// let myVar = func()

// console.log(myVar);

// let res = arr.splice(2, 3, 'hello', 'world', true, false, 'other');

// console.log(arr);
// console.log(res);

let sentence = "the red fox jumps over the green meadow!"
let myVar = 'r';
let wordsArr = sentence.split(myVar).join('');
// console.log(wordsArr);

let str = wordsArr;
console.log(wordsArr);
