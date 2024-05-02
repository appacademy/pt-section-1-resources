// let myFunction = function (str) {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i]);
//     }

//     console.log('--------First loop done, Second loop begins----------');

//     for (let i = str.length - 1; i >= 0; i--) {
//         console.log(str[i]);
//     }
// };

// myFunction('Hades 2 lookin kind fireee');

// let myFunction = function (strArr) {
//     for (let i = 0; i < strArr.length; i++) {
//         let currentWord = strArr[i];

//         for (let anyVals = 0; anyVals < currentWord.length; anyVals++) {
//             let currentChar = currentWord[anyVals];
//             console.log(currentChar);
//         }
//     }
// };

// myFunction(strArr);

// let myOuterFunction = function (strArr) {
//     console.log(strArr);

//     for (let i = 0; i < strArr.length; i++) {
//         let currentWord = strArr[i];
//         console.log("Outer function's current word =>", currentWord);
//         let thisWordsVowelCount = myInnerFunction(currentWord);
//         console.log(
//             'Number of vowels in',
//             currentWord,
//             '=>',
//             thisWordsVowelCount
//         );
//     }
// };

// let myInnerFunction = function (currentWord) {
//     let vowels = 'aeiouAEIOU';
//     let vowelCounter = 0;

//     let vowelArray = [];

//     for (let anyVals = 0; anyVals < currentWord.length; anyVals++) {
//         let currentChar = currentWord[anyVals];
//         console.log(currentChar);
//         if (vowels.includes(currentChar)) {
//             vowelCounter++;
//             vowelArray.push(currentChar);
//         }
//     }

//     return vowelArray;
// };

// let str = 'Hades 2 lookin kind fireee';
// let strArr = str.split(' ');

// myOuterFunction(strArr);
// myInnerFunction('Hades');
// myInnerFunction('2');
// myInnerFunction('lookin');

//! --------------------------------------------------------------------
//*                          Pairs in arrays
//! --------------------------------------------------------------------

// let dogs = ['belka', 'strelka', 'laika', 'dezik'];

// for (let i = 0; i < dogs.length; i++) {
//     let dog1 = dogs[i];
//     console.log(dog1);

//     for (let j = 0; j < dogs.length; j++) {
//         let dog2 = dogs[j];
//         console.log(dog1, dog2);
//     }

//     console.log('----Outer loop ended----');
// }

//! --------------------------------------------------------------------
//*                           Unique Pairs in arrays
//! --------------------------------------------------------------------

// let dogs = ['belka', 'strelka', 'laika', 'dezik'];

// for (let i = 0; i < dogs.length; i++) {
//     let dog1 = dogs[i];
//     for (let j = i + 1; j < dogs.length; j++) {
//         let dog2 = dogs[j];
//         console.log(dog1, dog2);
//     }
// }

//! --------------------------------------------------------------------
//*                              2D Arrays
//! --------------------------------------------------------------------
// let twoDimensional = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

// let twoDimensional = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
// ];

// let twoDHades = ['Hades', '2', 'lookin', 'kind', 'fireee'];

// let myFunction = function (strArr) {
//     for (let i = 0; i < strArr.length; i++) {
//         let currentWord = strArr[i];

//         for (let anyVals = 0; anyVals < currentWord.length; anyVals++) {
//             let currentChar = currentWord[anyVals];
//             console.log(currentChar);
//         }
//     }
// };

// myFunction(twoDHades)
// myFunction(twoDimensional);

// let twoDimensional = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ];

// let twoDimensional = [
//     ['a', 'b', 'c'], // index 0
//     ['d', 'e', 'f'], // index 1
//     ['g', 'h', 'i'], // index 2
// ];

// let myLoopdyLoops = function (array) {
//     for (let row = 0; row < array.length; row++) {
//         // console.log(array[i][0]); // array[0] then array[1] then array[2]
//         // console.log(array[0][i]); // array[0] then array[0] then array[0]
//         console.log('----', array[row], '----');

//         for (let col = 0; col < array.length; col++) {
//             // console.log(array[row][col]);
//             console.log(array[col][row]);
//         }
//     }
// };

// myLoopdyLoops(twoDimensional);

//! --------------------------------------------------------------------
//*                         2D Product
//! --------------------------------------------------------------------
/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.
*/

// let twoDimensionalProduct = function (array) {
//     let finalProduct = 1;

//     for (let i = 0; i < array.length; i++) {
//         let eachNum = array[i];

//         finalProduct *= eachNum;
//     }

//     return finalProduct;
// };
// let arr1 = [6, 4, 5, 3, 1];

let twoDimensionalProduct = function (array) {
    let finalProduct = 1;

    console.log('Starter array', array);

    for (let i = 0; i < array.length; i++) {
        let eachArray = array[i];

        console.log(
            '-------------Outer loop #',
            i,
            'is',
            eachArray,
            '--------------'
        );

        for (let z = 0; z < eachArray.length; z++) {
            let eachNum = eachArray[z];
            console.log('Inner loop number =>', eachNum);
            console.log(
                { finalProduct },
                '*',
                { eachNum },
                '=',
                finalProduct * eachNum
            );
            finalProduct *= eachNum;
        }
    }

    return finalProduct;
};

// let twoDimensionalProduct = function (array) {
//     let finalProduct = 1;

//     for (let i = 0; i < array.length; i++) {
//         console.log('-------------First Loop i = ', i, '-------------');

//         let eachArray = array[i];

//         for (let z = 0; z < eachArray.length; z++) {
//             console.log('-----Second Loop z = ', z, '-----');

//             let eachNum = eachArray[z];
//             console.log(eachNum);

//             finalProduct *= eachNum;
//         }
//     }

//     return finalProduct;
// };

// let arr1 = [[6, 4], [5], [3, 1]];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [[11, 4], [2]];
// console.log(twoDimensionalProduct(arr2)); // 88

let arr3 = [
  [-9, 8, 4],
  [8, 2],
];
console.log(twoDimensionalProduct(arr3)); // -4608
