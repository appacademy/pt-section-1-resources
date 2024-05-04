// let myFunction = function (sentence) {

// for (let i = 0; i < sentence.length; i++) {
//     // console.log('---New Loop Begins---');
//     let currentChar = sentence[i];
//     console.log(currentChar);
// }
// };
// let gameHypeStr = 'Hades 2 looks goooood';
// myFunction(gameHypeStr);

// let gameHypeStr = 'Hades 2 coming out so soon and lit looks goooood';
// let gameHypeArr = gameHypeStr.split(' ');

//! --------------------------------------------------------------------
//*                           Nested Loop
//! --------------------------------------------------------------------

// let myFunction = function (sentenceArr) {
//     for (let i = 0; i < sentenceArr.length; i++) {
//         let currentWord = sentenceArr[i];
//         console.log('-----', currentWord, '-----', 'i is', i);

//         for (let z = 0; z < currentWord.length; z++) {
//             let currentChar = currentWord[z];
//             console.log(currentChar, 'z is', z);
//         }
//     }
// };

// let myInnerFunction = function (currentWord) {
//     for (let z = 0; z < currentWord.length; z++) {
//         let currentChar = currentWord[z];
//         console.log(currentChar);
//     }
//     return 'Hey';
// };
// let myOuterFunction = function (sentenceArr) {
//     for (let i = 0; i < sentenceArr.length; i++) {
//         let currentWord = sentenceArr[i];
//         console.log(myInnerFunction(currentWord));
//     }
// };

// let myOuterFunction = function (sentenceArr) {
//     for (let i = 0; i < sentenceArr.length; i++) {
//         let currentWord = sentenceArr[i];
//         // console.log(currentWord);
//         console.log('-----', currentWord, '-----', 'i is', i);
//         myInnerFunction(currentWord)
//     }
// };

// let myInnerFunction = function (currentWord) {
//     for (let z = 0; z < currentWord.length; z++) {
//         let currentChar = currentWord[z];
//         // console.log(currentChar);
//         console.log(currentChar, 'z is', z);
//     }
// };

// let gameHypeArr = ['Hades', '2', 'looks', 'goooood'];
// myOuterFunction(gameHypeArr);

// myInnerFunction('Hades');
// myInnerFunction('2');
// myInnerFunction('looks');
// myInnerFunction('goooood');

//! --------------------------------------------------------------------
//*                             Pairs in Arrays
//! --------------------------------------------------------------------
// let dogs = ['belka', 'strelka', 'laika', 'dezik'];

// for (let i = 0; i < dogs.length; i++) {
//     let dog1 = dogs[i];

//     console.log('Currently on dog1 =', dog1);
//     for (let j = 0; j < dogs.length; j++) {
//         let dog2 = dogs[j];
//         console.log(dog1, dog2);
//     }

//     console.log('----Loop just ended------');
// }

//! --------------------------------------------------------------------
//*                          Unique Pairs in Arrays
//! --------------------------------------------------------------------
// let dogs = ['belka', 'strelka', 'laika', 'dezik'];
// //             0         1         2        3

// for (let i = 0; i < dogs.length; i++) {
//     let dog1 = dogs[i];

//     // console.log(dog1)
//     for (let j = i + 1; j < dogs.length; j++) {
//         let dog2 = dogs[j];
//         console.log(dog1, dog2);
//     }

//         console.log('----Loop just ended------');
// }

//! --------------------------------------------------------------------
//*                            2D Arrays
//! --------------------------------------------------------------------

// let twoDimensional = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ];
let twoDimensional = [
    ['a', 'b', 'c'], // index 0
    ['d', 'e', 'f'], // index 1
    ['g', 'h', 'i'], // index 2
    // ['j', 'k', 'l'], // index 3
];

for (let i = 0; i < twoDimensional.length; i++) {
    for (let z = 0; z < twoDimensional[0].length; z++) {
        // console.log(twoDimensional[i][z]);
        console.log(twoDimensional[z][i]);
    }
}

// for (let i = 0; i < twoDimensional.length; i++) {
//     console.log('---------------Start of new i loop---------------');
//     console.log('i =', i);
//     for (let z = 0; z < twoDimensional[0].length; z++) {
//         console.log('-------Start of new z loop-------');
//         console.log('z =', z);

//         console.log("New Printed Value! =>", twoDimensional[i][z]);
//     }
// }

// start of i loop
i = 0;

// start of z loop
z = 0;

twoDimensional[i][z] = twoDimensional[0][0] = 'a';

// next z loop
i = 0;
z = 1;

twoDimensional[i][z] = twoDimensional[0][1] = 'b';

// next z loop
i = 0;
z = 2;

twoDimensional[i][z] = twoDimensional[0][z] = 'c';

// next i loop
i = 1;

// start of new z loop
z = 0;

twoDimensional[i][z] = twoDimensional[1][0] = 'd';

// next z loop
i = 1;
z = 1;

twoDimensional[i][z] = twoDimensional[1][1] = 'e';

// next z loop
i = 1;
z = 2;

twoDimensional[i][z] = twoDimensional[1][z] = 'f';

// let twoDimensional = [
//     ['a'],
//     ['b', 'c', 'd', 'e', 'f', 'g'],
//     ['h', 'i']
// ];

// console.log(twoDimensional[0][0]);
// console.log(twoDimensional[1][0]);
// console.log(twoDimensional[2][0]);
// let myArr = ['a', 'b', 'c']

// console.log(['a', 'b', 'c'][0]);

// for (let i = 0; i < twoDimensional.length; i++) {
//     // console.log(twoDimensional[i][0]);
//     // console.log(twoDimensional[0])
//     // console.log(['a', 'b', 'c'][i]);
//     console.log(twoDimensional[2][i]);
// }
