// let arr = [1, 'hello', false, NaN, [1, 2, 3], function myCoolFun() {}];

// console.log(arr[1]);

// console.log(arr);

// let array = ['dog', 'cat', 'turtle', 5];

// console.log(array[1]); // "cat"
// console.log(array[array.length - 1]); // finds last element // "turtle"
// console.log(array[array.length]); // can't find this element // undefined

// console.log(array.indexOf('dog')); // 0
// console.log(array.indexOf(5)); // 0
// console.log(array.indexOf('elephant')); // -1

// let mySentence = "Hey whats up bro, you're looking kinda strong today";
// let myArr = ['Hey', 'whats', 'up', 'bro'];

// // console.log(mySentence.indexOf('bro')); // 13
// // console.log(myArr.indexOf('bro')); // 3

// // console.log(mySentence.indexOf('b')); // 13
// console.log(myArr.indexOf('b')); // -1

//! --------------------------------------------------------------------
//*                          String.split()
//! --------------------------------------------------------------------

// let mySentence = "Hey whats up bro, you're looking kinda strong today";

// console.log(mySentence.split()); //! below
// // [ "Hey whats up bro, you're looking kinda strong today" ]

// console.log(mySentence.split('')); //! below
// // [
// //   'H', 'e', 'y', ' ', 'w', 'h', 'a', 't',
// //   's', ' ', 'u', 'p', ' ', 'b', 'r', 'o',
// //   ',', ' ', 'y', 'o', 'u', "'", 'r', 'e',
// //   ' ', 'l', 'o', 'o', 'k', 'i', 'n', 'g',
// //   ' ', 'k', 'i', 'n', 'd', 'a', ' ', 's',
// //   't', 'r', 'o', 'n', 'g', ' ', 't', 'o',
// //   'd', 'a', 'y'
// // ]

// console.log(mySentence.split(' ')); //! below
// // [
// //   'Hey',    'whats',
// //   'up',     'bro,',
// //   "you're", 'looking',
// //   'kinda',  'strong',
// //   'today'
// // ]

//! --------------------------------------------------------------------
//*                              Array.join
//! --------------------------------------------------------------------

// let mySentence = "Hey whats up bro, you're looking kinda strong today";

// let mySentenceArray = mySentence.split(' '); // this is an array
// console.log(mySentenceArray);
// // console.log(mySentenceArray.join(' '));

// let myNewSentence = mySentenceArray.join('-');

// console.log(myNewSentence);

// // console.log(mySentence.length);
// // console.log(myNewSentence.length);

// // console.log(([1].join('Heyooo')))

//! --------------------------------------------------------------------
//*                             Array.concat(arr)
//! --------------------------------------------------------------------

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7];

// console.log(array1 + array2);
// console.log(array1);
// console.log(array2);

// array2.push('Burgers');

// console.log(array2);

// array1.pop();
// console.log(array1);

// // let array4 = array1.concat(array2, array3);

// // console.log(array4); // [1, 2, 3, 4, 5, 6, 7]

//! --------------------------------------------------------------------
//*                          Don't forget about return!
//! --------------------------------------------------------------------

// function helloWorld() {
//     console.log('Heyoooooo');
// }
// console.log(helloWorld())

// function silentWorld() {
//     return 'Literally anything';
// }

// // console.log(silentWorld())
// let myFunction = silentWorld;
// let myFunctionsReturnValue = silentWorld();

// console.log(myFunction);
// console.log(myFunctionsReturnValue);

// let array1 = [1, 2, 3];
// console.log(array1);

// let nextCustomerNumber = array1.pop();

// console.log(array1);

// console.log(
//     `Would customer #${function helloWorld() {
//         console.log('Heyoooooo');
//     }} please step forward`
// );
// console.log('Please have #' + nextCustomerNumber + ' please step forward');

let array1 = [1, 2, 3];

console.log(array1);

let nextCustomerNumber = array1.pop();
console.log(array1);

let nextNextCustomerNumber = array1.pop();
console.log(array1);

let nextNextNextCustomerNumber = array1.pop();
console.log(array1);

console.log(
    nextCustomerNumber,
    nextNextCustomerNumber,
    nextNextNextCustomerNumber
);

console.log('-----------------Pops are done!----------------------');

array1.unshift(nextCustomerNumber);

console.log(array1);

array1.unshift(nextNextCustomerNumber);

console.log(array1);

array1.shift();

console.log(array1);
