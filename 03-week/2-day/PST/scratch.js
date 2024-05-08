//! --------------------------------------------------------------------
//*                            Arrow Functions
//! --------------------------------------------------------------------

// // declaration
// function myFavGame() {
//     return 'Elden Ring 1';
// }

// // expression
// let myFavGame = function ()  {
//     return 'Elden Ring 2';
// };

// // arrow
// let myFavGame = () => {
//     return 'Elden Ring 3';
// };

// let myFavGame = () => 'Elden Ring Arrow'

// let myFavGame = () => 'Elden' + 'Ring';

// let myFavGame = () => "Elden Ring".split("").join(" - ")
// let myFavGame = () =>'Elden Ring'.split(' ').map((el) => el.split('').join(' - ')).join(' - ');

// let myName = "Z"
// let myName = "Z"

// console.log(myFavGame());

//! --------------------------------------------------------------------
//*                             Objects
//! --------------------------------------------------------------------

//??? JS === "Objects", Python === "Dictionaries"

// let cat = 'Momo';
// let cat = ['Momo', "Tenten"];
// console.log(cat);

// let firstCat = 'Momo';

// let catObj = {
//     firstCat: 'Momo', // kind of like ` let firstCat = "Momo" `
// };

// console.log(firstCat)

//! --------------------------------------------------------------------
//*                          Bracket Notation
//! --------------------------------------------------------------------

// let obj = {
//     //   invalid key: "❌",
//     //   not-so-valid: "❌❌",
//     validKey: '✅',
//     validButWhy: 'Might as well not use quotes!',
//     'another valid key': '✅✅',
//     'but-this-is-valid!!!': '✅✅✅',
//     lemon: 'an acid fruit that is botanically a many-seeded pale yellow oblong berry produced by a small thorny citrus tree (Citrus limon) and that has a rind from which an aromatic oil is extracted',
// };

// let myArr = ['a', 'b', 'c']
// console.log(myArr[1])

// console.log(obj['validKey']); // ✅
// console.log(obj['validButWhy']); // Might as well not use quotes!
// console.log(obj['another valid key']); // ✅✅
// console.log(obj['but-this-is-valid!!!']); // ✅✅✅
// console.log(obj["lemon"])

//! --------------------------------------------------------------------
//*                          Dot Notation
//! --------------------------------------------------------------------

// let obj = {
//   validKey: "✅",
//   "validButWhy": "Might as well not use quotes!",
//   "another valid key": "✅✅",
//   "but-this-is-valid!!!": "✅✅✅"
// };

// console.log(obj.validKey); // JS sees obj["validKey"] //? ✅
// console.log(obj.validButWhy); // JS sees obj['validButWhy'] //? Might as well not use quotes!
// // console.log(obj.another valid key); //
// // console.log(obj.but-this-is-valid!!!); //

//! --------------------------------------------------------------------
//*                            Using a variable
//! --------------------------------------------------------------------

// let someVariable = 'firstName';
// let some = 'second';
// let variable = 'Name';
// let time = 'FrEQUENcY';

// let obj = {
//     firstName: 'Oscar',
//     secondName: 'Mayer',
//     frequency: 'everyday',
// };

// function giveMeAString() {
//     // return 'Heyooo';
// }

// giveMeAString(); // JS sees "Heyooo"

// console.log(obj[firstName]); //! ReferenceError: firstName is not defined
// console.log(obj[someVariable]); // JS sees => obj['firstName'] //? Oscar

// console.log(obj[some + variable]);
// // JS sees => obj['second' + 'Name'] => obj['secondName'] //? Mayer

// console.log(obj[time.toLowerCase()]);
// // JS sees => obj['FrEQUENcY'.toLowerCase()] => obj['frequency'] //? everyday

// console.log(obj[time]); // undefined
// // JS sees => obj['FrEQUENcY']

// let myArr = ['a', 'b', 'c']
// console.log(myArr[1]) // 'b'
// console.log(myArr[100]) // undefined

//! --------------------------------------------------------------------
//*                            Mutability
//! --------------------------------------------------------------------

// let catObj = {
//     firstCat: 'Momo',
// };
// // console.log("firstCat" in catObj)
// console.log(catObj.hasOwnProperty('firstCat'));
// console.log(catObj.hasOwnProperty('anythingElse'));

// let catObj = {
//     firstCat: 'Momo',
// };

// // console.log(catObj); //? { firstCat: 'Momo' }

// catObj["secondCat"] = "Kiki";

// // console.log(catObj); // { firstCat: 'Momo', secondCat: 'Kiki' }

// catObj.thirdCat = "Kiki";

// // console.log(catObj); // { firstCat: 'Momo', secondCat: 'Kiki', thirdCat: 'Kiki' }

// let whoopsSkippedACat = "secondCat";

// catObj[whoopsSkippedACat] = "Tenten";

// console.log(catObj); // { firstCat: 'Momo', secondCat: 'Tenten', thirdCat: 'Kiki' }

//! --------------------------------------------------------------------
//*                        What JS is Thinking
//! --------------------------------------------------------------------

// let catObj = {
//     firstCat: 'Momo',
// };
// let whoopsSkippedACat = 'secondCat';
// catObj[whoopsSkippedACat] = 'Tenten'; // JS sees => catObj['secondCat']

// //! Object "dot" something MEANS
// // take everything after the dot => whoopsSkippedACat
// // put it in a string => 'whoopsSkippedACat'
// // put that string in brackets => ['whoopsSkippedACat']
// // catObj['whoopsSkippedACat']

// //! Object "bracket" something MEANS
// // look at what's in the bracket => [whoopsSkippedACat]
// // is it a variable? => yes!
// //? if yes, find the variables value, then put that in the brackets
//     //? whoopsSkippedACat = "secondCat"
//     //? ["secondCat"]
// //* if no, use the value as a string in the brackets
//     //* ['whoopsSkippedACat']

//! --------------------------------------------------------------------
//*                            Iteration
//! --------------------------------------------------------------------

// let userData = {
//     name: 'Zaviar',
//     age: 26,
//     game: 'Elden Ring',
// };
// 10: 'Hey????????',
// 1: 'Hey?',
// 2: 'Hey??',
// 3: 'Hey???',

// console.table(userData);

// for (let key in obj)
// for (let anyNameHere in userData) {
//     console.log('-------- Looking at a new key ------------');
//     console.log('key =>', anyNameHere);
//     console.log(`Accessing object... => userData["${anyNameHere}"]`);
//     console.log('value => ', userData[anyNameHere]);
// }

// console.log('AFTER LOOOOOOOOOOOOOOOOP');

// console.log(userData['name']);

// let userData = {
//     name: 'Zaviar',
//     age: 26,
//     game: 'Elden Ring',
// };

// let arrayOfKeys = Object.keys(userData);
// let arrayOfValues = Object.values(userData);
// let arrayOfEverything = Object.entries(userData)

// // console.log(arrayOfKeys);
// // console.log(arrayOfValues);
// console.log(arrayOfEverything)

// for (let i = 0; i < arrayOfKeys.length; i++) {
//     let currentKey = arrayOfKeys[i]
//     console.log('-------- Looking at a new key ------------');
//     console.log('key =>', currentKey);
//     console.log(`Accessing object... => userData["${currentKey}"]`);
//     console.log('value => ', userData[currentKey]);
// }


// let myNameObj = {
//     0: 'Z',
//     1: 'a',
//     2: 'v',
//     3: 'i',
//     4: 'a',
//     5: 'r',
//     length: 6,
// };

// console.log(myNameObj.length);

// let myName = 'Zaviar';
// console.log(myName['length']);