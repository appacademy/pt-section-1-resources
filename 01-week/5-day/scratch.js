// function declaration 
function funcName(){

};

// funcName();

// function expressions
let otherName = function(){

};

otherName(funcName);

// First Class Objects

/*
1. store it in a variable -> func expressions (we are doing this one right now)
2. pass it into another func as an argument (we will learn in week 4, and a little bit next week)
3. returned from a function (we will learn weeks late 4, and then 5)
*/

// Mutable Data: Every Reference Type - this isn't a value, it points at a value

// let arr = [5,true, 'hello'];

// Immutable: Every Primitive - this is a value
/* 
numbers
strings
booleans
undefined
null
*/
//          0 ..... 4
// let arr1 = [1,2,3,4,5];
// for(let i = 0; i < arr1.length; i = i + 1){
//     arr1[i]
// }

// console.log(arr1[2]);
//          0    1    2
// let arr = ['a', 'b', 'c'];


// for(let i = 0; i < arr.length; i++){
//     console.log(i);
//     console.log("     ", arr[i])
// };

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);