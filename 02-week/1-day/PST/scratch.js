// let arr = [1, 'hello', false, NaN, [1, 2, 3], function myCoolFunc() {}];

// console.log(arr[4][2]);

// let array = ['dog', 'cat', 'turtle'];

// console.log(array[1]); // "cat"
// console.log(array[array.length - 1]); // finds last element // "turtle"

// let array = ['dog', 'cat', 'turtle'];

//! --------------------------------------------------------------------
//*                            Array Index of
//! --------------------------------------------------------------------

// console.log(array.indexOf('dog')); // 0
// console.log(array.indexOf('elephant')); // -1

// let mySentence = 'Foul tarnished, in search of the Elden Ring';
// let mySentenceArray = ['Foul', 'tarnished,', 'in', 'search', 'arc'];

// console.log(mySentence.indexOf('Foul'));
// console.log(mySentence.indexOf('arc'));
// console.log(mySentence.includes('l t'));

// console.log(mySentenceArray.indexOf('Foul'));
// console.log(mySentenceArray.indexOf('arc'));
// console.log(mySentenceArray.indexOf('search'));
// console.log(mySentenceArray.includes('arc'));

//! --------------------------------------------------------------------
//*                             Concat
//! --------------------------------------------------------------------

// let array1 = [1, 2, 3];
// let aNumber = [4, 5, 6];
// let array3 = [7];

// let array4 = array1.concat(array2, array3);

// console.log(array4); // [1, 2, 3, 4, 5, 6, 7]

// let totallyNotAnArrayLikeTrustMeISwearItsNotAnArray = [1, 2, 3];
// let aNumber = [4, 5, 6];

// // let combinedArray = totallyNotAnArrayLikeTrustMeISwearItsNotAnArray.concat(aNumber)
// let combinedArray = aNumber.concat(
//     totallyNotAnArrayLikeTrustMeISwearItsNotAnArray,
//     aNumber,
//     totallyNotAnArrayLikeTrustMeISwearItsNotAnArray
// );

// console.log(combinedArray);

// array1 = [1, 2, 3,  4, 5,                                6, 7]

// let mySentence = 'Foul tarnished, in search of the Elden Ring';

// let numArr = [1, 2, 3];
// let strArr = ['Momo', 'Tenten', 'Kiki'];

// console.log(numArr.concat(strArr))

// let firstArr = [1, 'Momo', 2];
// let secondArr = ['Tenten', 3, 'Kiki'];

// console.log(firstArr.concat(secondArr));

//! --------------------------------------------------------------------
//*                        Mutability sneak peek
//! --------------------------------------------------------------------

// let firstArray = [100, 2, 32];
// let secondArray = ['whoops', 'I did it', 'again'];

// // let combined = firstArray.concat(secondArray);

// // console.log(combined);

// console.log(firstArray);
// console.log(secondArray);

// firstArray.push('Eggs', 'Bacon', 'Spam Musubi');

// console.log(firstArray);
// // let combined = firstArray.concat(secondArray);

// // console.log(combined);

// secondArray.pop();
// secondArray.shift();
// console.log(secondArray);

//! --------------------------------------------------------------------
//*                            Split & Join
//! --------------------------------------------------------------------

let mySentence = 'Foul tarnished, in search of the Elden Ring';

// console.log(mySentence.split());
// [ 'Foul tarnished, in search of the Elden Ring' ]

// console.log(mySentence.split(''));

// [
//   'F', 'o', 'u', 'l', ' ', 't', 'a',
//   'r', 'n', 'i', 's', 'h', 'e', 'd',
//   ',', ' ', 'i', 'n', ' ', 's', 'e',
//   'a', 'r', 'c', 'h', ' ', 'o', 'f',
//   ' ', 't', 'h', 'e', ' ', 'E', 'l',
//   'd', 'e', 'n', ' ', 'R', 'i', 'n',
//   'g'
// ]

// console.log(mySentence.split(' '));
// [ 'Foul', 'tarnished,', 'in', 'search', 'of', 'the', 'Elden', 'Ring' ]

let mySentenceArray = mySentence.split(' ');
// console.log(mySentenceArray.toString());
// console.log(`${mySentenceArray}`);


console.log(mySentenceArray);

// console.log(mySentenceArray.join());
// Foul,tarnished,,in,search,of,the,Elden,Ring

// console.log(mySentenceArray.join(''));
// Foultarnished,insearchoftheEldenRing

console.log(mySentenceArray.join(' 💀 '));
// Foul tarnished, in search of the Elden Ring

