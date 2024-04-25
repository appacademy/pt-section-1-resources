function myExample() {
    // does all sorts of stuff

    return 32;
}

// function myBetterExample() {
//     return 32 + 32;
// }

// let myNumber = 0.1 + 0.2

// console.log(myNumber);
// console.log(myNumber);
// console.log(myNumber);
// console.log(myNumber);
// console.log(myNumber);
// console.log(myNumber);
// console.log("This was line 20", myNumber);
// console.log(myNumber);
// console.log(myNumber);
// console.log(myNumber);
// console.log(myNumber);

//! --------------------------------------------------------------------
//*                       console.log for loop example
//! --------------------------------------------------------------------

// let num = 3;

// for (let i = 0; i < 5; i++) {
//     console.log('----------A new loop as begun!---------------');
//     console.log('Loop with i =', i);
//     console.log('Num before adding', num);

//     num = i + num;

//     console.log('Num after adding', num);

//     console.log('----- End of this loop :) -------');
// }

// console.log(num);

//! --------------------------------------------------------------------
//*                           Numbers
//! --------------------------------------------------------------------

// console.log(5 + 5 / 2 * 10); // 30
// console.log((5 + 5) / 2 * 10); // 50
// console.log(5 + 5 / (2 * 10)); // 5.25

// //? How many times can num on the right fit 'perfectly' into num on the left
// console.log(5 % 1); // 0 // console.log(5 / 1); // 5, has 0 left
// console.log(5 % 2); // 1 // console.log(5 / 2); // 2, 2 2's = 4, 1 left
// console.log(5 % 3); // 2 // console.log(5 / 3);
// console.log(5 % 4); // 1 // console.log(5 / 4);
// console.log(5 % 5); // 0 // console.log(5 / 5);
// console.log(5 % 6); // 5

// console.log(5 % 2);
// console.log(10 % 2);
// console.log(2352356908 % 2);

// //     0
// if (9 % 2) {
//     // console.log('this is true!');
//     console.log('this is odd!');
// } else {
//     // console.log('this is false');
//     console.log('this is even!!!');
// }

// ! NaN is weird
// console.log(5 / "bread"); // NaN
// console.log(5 + "bread"); // 5bread
// console.log(typeof 5)
// console.log(typeof "bread");
// console.log(typeof NaN)

//! --------------------------------------------------------------------
//*                               Booleans
//! --------------------------------------------------------------------

// let checkBool = true;

// if (!checkBool || checkBool) {
//     console.log('This value is true!');
// } else {
//     console.log('This value is FAAALLLSSSEEEE');
// }

//! --------------------------------------------------------------------
//*                           Short circuiting
//! --------------------------------------------------------------------

let checkBool = true;

if (checkBool || aowiejfaoiefjaoweijfaoweif) {
// if (aowiejfaoiefjaoweijfaoweif || checkBool) {
// if (checkBool && aowiejfaoiefjaoweijfaoweif) {

    console.log('This value is true!');
} else {
    console.log('This value is FAAALLLSSSEEEE');
}

// if (checkBool && aowiejfaoiefjaoweijfaoweif) { error
//     console.log('This value is true!');
// } else {
//     console.log('This value is FAAALLLSSSEEEE');
// }
