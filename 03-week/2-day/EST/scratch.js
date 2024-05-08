//! --------------------------------------------------------------------
//*                        Arrow Functions
//! --------------------------------------------------------------------

// function myFavGame() {
//     return 'Elden Ring 1';
// }

// let myFavGame = function () {
//     return 'Elden Ring 2';
// };

// let myFavGame = () => {
//     return "Elden Ring 2"
// }

// let myFavGame = () => "Elden Ring" // return "Elden Ring 2"
// let myFavGame = () => "Elden" + "Ring"
// let myFavGame = () => 'Elden Ring'.split('').join(' - ');
// let myFavGame = (nameOfGame) => {
//     return nameOfGame + " is pretty cool too"
// }

// console.log(myFavGame("Sea of Thieves"));

// let name = "Z"
// let name = "Z"

// Return the last character of a string

// function lastStringChar(str) {
//     // return str[str.length - 1]
//     return str.at(-1);
// }

// let lastStringChar = str => str.at(-1);

// console.log(lastStringChar("Heyooooo"))

//! --------------------------------------------------------------------
//*                            Objects
//! --------------------------------------------------------------------

//??? Python calls objects "Dictionaries"

// let cat = "Momo"
// let cat = ['Momo', "Tenten", 'Kiki'];
// console.log(cat);
// let firstCat = 'Momo';
// console.log(firstCat); //* Momo

// let catObj = {
//     firstCat: 'Momo', // kind of like ` let firstCat = "Momo" `
// };

// console.log(firstCat); //! ReferenceError: firstCat is not defined

//! --------------------------------------------------------------------
//*                          Bracket Notation
//! --------------------------------------------------------------------
// let obj = {
//     validKey: '✅',
//     //   invalid key: "❌",
//     validButWhy: 'Might as well not use quotes!',
//     'another valid key': '✅✅',
//     //   not-so-valid: "❌❌",
//     'but-this-is-valid!!!': '✅✅✅',
//     onomatopoeia: 'ex. BANG!',
// };
// // let myArr = ['a', 'b', 'c']
// // console.log(myArr[1])

// console.log(obj['validKey']); // ✅
// console.log(obj['validButWhy']); // Might as well not use quotes!
// console.log(obj['another valid key']); // ✅✅
// console.log(obj['but-this-is-valid!!!']); // ✅✅✅
// let myArr = ['a', 'b', 'c']
// console.log(myArr[100]); // undefined
// console.log(myArr[1]) // 'b'
// console.log(obj['Onomatopoeia']); // undefined
// console.log(obj['onomatopoeia']); // 'ex. BANG!'

//! --------------------------------------------------------------------
//*                            Dot Notation
//! --------------------------------------------------------------------

// let obj = {
//     validKey: '✅',
//     validButWhy: 'Might as well not use quotes!',
//     'another valid key': '✅✅',
//     'but-this-is-valid!!!': '✅✅✅',
// };

// console.log(obj.validKey); // ✅
// console.log(obj.validButWhy); // Might as well not use quotes!
// // console.log(obj.another valid key); //! SyntaxError
// // console.log(obj.but-this-is-valid!!!); //! SyntaxError

//! --------------------------------------------------------------------
//*                        Using a Variable
//! --------------------------------------------------------------------

// let someVariable = 'firstName';
// let some = 'second';
// let variable = 'Name';
// let time = 'FrEQUENcY';

// let obj = {
//     firstName: 'Oscar',
//     secondName: 'Mayer',
//     frequency: 'everyday',
//     // FREQUENCY: "fOIWJESFlawiefjawoelfiajwefliJALISJGLEIF"
// };

// function giveMeAString () {
//     return "Hello"
// }

// giveMeAString() // JS sees => "Hello"

// console.log(someVariable);
// console.log(obj.someVariable); // JS sees => obj['someVariable'] //? undefined
// console.log(obj[someVariable]); // JS sees => obj['firstName'] //? 'Oscar'
// console.log(obj['firstName']); // JS sees => obj['firstName'] //? 'Oscar'
// console.log(obj.firstName); // JS sees => obj['firstName'] //? 'Oscar'

// console.log(firstName)
// let firstName = 'Potato';
// console.log(obj["whodawhatnow?"])
// console.log(obj['firstName']); //! "Oscar"
// console.log(obj[firstName]); //! ReferenceError
// console.log(obj[someVariable]); // JS sees => obj['firstName']  //? "Oscar"
// console.log(obj['firstName'])  //? "Oscar"
// console.log(obj[some + variable]); // JS sees => obj['second' + 'Name'] => obj['secondName']
// console.log(obj[time.toLowerCase()]);
// JS sees => obj['FrEQUENcY'.toLowerCase()] => obj['frequency'] //? "everyday"
// console.log(obj[time.toUpperCase()]);
// console.log(obj[frequency].toUpperCase()); //! ReferenceError
// console.log(obj['frequency'].toUpperCase());
// JS sees => "everyday".toUpperCase() //? "EVERYDAY"

// let catObj = {
//     firstCat: 'Momo',
// };

// // console.log(catObj['secondCat']) // undefined

// catObj['secondCat'] = 'Kiki';

// console.log(catObj); // { firstCat: 'Momo', secondCat: 'Kiki' }
// console.log(catObj['secondCat']); // Kiki

// catObj.thirdCat = 'Kiki'; //? These are the same!
// catObj['thirdCat'] = 'Kiki'; //? These are the same!

// console.log(catObj); // { firstCat: 'Momo', secondCat: 'Kiki', thirdCat: 'Kiki' }

// let whoopsSkippedACat = 'secondCat';

// catObj[whoopsSkippedACat] = 'Tenten'; // JS sees => catObj['secondCat']
// catObj.whoopsSkippedACat = 'Tenten'; // JS sees => catObj['secondCat']

// console.log(catObj); // { firstCat: 'Momo', secondCat: 'Tenten', thirdCat: 'Kiki' }

// catObj.whoopsSkippedACat = 'Tenten'; // JS sees => catObj['whoopsSkippedACat']

//! Object "dot" something MEANS
// take everything after the dot => whoopsSkippedACat
// put it in a string => 'whoopsSkippedACat'
// put that string in brackets => ['whoopsSkippedACat']
// catObj['whoopsSkippedACat']

//! Object "bracket" something MEANS
// look at what's in the bracket => [whoopsSkippedACat]
// is it a variable? => yes!
//? if yes, find the variables value, then put that in the brackets
//? whoopsSkippedACat = "secondCat"
//? ["secondCat"]
//* if no, use the value as a string in the brackets
//* ['whoopsSkippedACat']

//! --------------------------------------------------------------------
//*                         Looping over Objects
//! --------------------------------------------------------------------
// let userData = {
//     name: 'Zaviar',
//     age: 26,
//     game: 'Elden Ring',
// };

// // anyNameHere represents the KEY in the object
// for (let anyNameHere in userData) {
//     console.log(anyNameHere); // prints the keys
//     console.log(userData[anyNameHere]);
// }

// let arrayOfKeys = Object.keys(userData);
// let arrayOfValues = Object.values(userData);

// console.log(arrayOfKeys);
// console.log(arrayOfValues);

// for (let i = 0; i < arrayOfKeys.length; i++) {
//     console.log(arrayOfKeys[i])
//     console.log(arrayOfValues[i])
// }

// let arrayOfEverything = Object.entries(userData)

// console.log(arrayOfEverything)