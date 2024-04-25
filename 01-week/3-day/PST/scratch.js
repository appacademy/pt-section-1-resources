// console.log('Hey');

// function myExample() {
//     return 3;
// }

// function myBetterExample() {
//     // return 42;
//     return 32;
// }

// let myNum = 0.1;
// let myOtherNum = 0.2
// let finalNum = myNum + myOtherNum
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log("This is the REAL finalNum", finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);
// console.log(finalNum);

// let myNum = 0.1;
// let myOtherNum = 0.2;
// let finalNum = myNum + myOtherNum;

// if (finalNum === 0.3) {
//     console.log("YUUUUP")
// } else {
//     console.log("who da what now?")
// }

// console.log(finalNum)

//! --------------------------------------------------------------------
//*                           Crazy for loop example
//! --------------------------------------------------------------------

// let counter = 3;

// for (let i = 0; i < 10; i++) {
//     console.log(
//         '-------------------------A new loop just began!----------------------------'
//     );
//     console.log('this loop is i =', i);
//     console.log('Counter before the math', counter);

//     console.log('running', i, '+ 5 *', counter);
//     counter = (i + 6) * counter;

//     console.log('Counter after the math', counter);
// }

// console.log('Counter after the loop', counter);

//! --------------------------------------------------------------------
//*                           Sad no console.log example
//! --------------------------------------------------------------------

// let counter = 3;

// for (let i = 0; i < 10; i++) {
//     counter = (i + 6) * counter;
// }

// console.log(counter);

//! --------------------------------------------------------------------
//*                           Numbers
//! --------------------------------------------------------------------

// console.log(5 + 5 / 2); // 7.5
// console.log((5 + 5) / 2); // 5
// console.log(5 + 5 / 2 * 10); // 2.5 => 25 => 30
// console.log(5 + 5 / (2 * 10)); // 5 + (5 / (2 * 10) ) => 5.25

// console.log(5 % 1); // 0
// console.log(5 % 2); // 1
// console.log(5 % 3); // 2
// console.log(5 % 4); // 1
// console.log(5 % 5); // 0
// console.log(5 % 5023892304);

// let theNumIsEven = 11;

// console.log(theNumIsEven % 2);

// if (theNumIsEven % 2 === 0) {
//     console.log('Yes this is even!');
// } else {
//     console.log('No it is odd!');
// }

//! --------------------------------------------------------------------
//*                               Boolean
//! --------------------------------------------------------------------

// console.log(true);
// console.log(false);
// console.log('true');
// console.log('false');

// let checkBoolVal = false;

// if (checkBoolVal || checkBoolVal) {
//     console.log('This value is truuueee');
// } else {
//     console.log('Nuh uhhhhh not true, false');
// }

//! --------------------------------------------------------------------
//*                            Short circuiting
//! --------------------------------------------------------------------

let checkBoolVal = true;

// if (aoiwjefoaiwejfoiaweijfaowei || checkBoolVal) {
if (checkBoolVal && aoiwjefoaiwejfoiaweijfaowei) {
    console.log('This value is truuueee');
} else {
    console.log('Nuh uhhhhh not true, false');
}
