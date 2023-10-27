// function hello(str){
//     if(typeof str !== 'string'){
//         return "incorrect data type, use a string"
//     }

//     return "Hello " + str;
// }

// console.log(hello('William'));

// function sumArr(arr){
//     if(!Array.isArray(arr)){
//         return "Invalid Type: { " + arr + " }"
//     }

//     let sum = 0;

//     for(let i = 0; i < arr.length; i++){
//         let ele = arr[i];
//         if(typeof ele !== 'number'){
//             return "Array contains invalid type, not a array of only nums"
//         }
//         sum += arr[i];
//     }

//     return sum;
// };

// console.log(sumArr([1,'hello',3]));


/*
Rotate
Write a function rotate(array, num) that takes in an array and a number as args.
When the num is positive, the elements of the array should be rotated to the right.
When the num is negative, the elements of the array should be rotated to the left.
The function should mutate the original array. 

Define this function using function expression syntax.
*/

// let rotate = function(arr, num){
//     if(num > 0){
//         for(let i = 0; i < num; i++){
//             //rotate right
//             let last = arr.pop();
//             arr.unshift(last);
//         }
//     } else {
//         for(let i = num; i < 0; i++){
//             //rotate left
//             let first = arr.shift();
//             arr.push(first);
//         }
//     }
//     return arr;
// };



// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -2);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]


/*
Addition Mutator
Write a function additionMutator that accepts an array and a number as an arguments. 
The function should mutate the input array such that every element has the given number added to it

*/
// function additionMutator(arr, num){
//     for(let i = 0; i < arr.length; i++){
//         // let currNum = arr[i];
//         arr[i] = arr[i] + num;
//     }
//     return arr;
// }

// let nums1 = [3, 7, 1, 2];
// additionMutator(nums1, 4);
// console.log(nums1);     // [ 7, 11, 5, 6 ]

// let nums2 = [11, 9, 4];
// additionMutator(nums2, -1);
// console.log(nums2);     // [ 10, 8, 3 ]



/*
Alternating Words
Write a function alternatingWords that accepts an array of words as an argument.
The function should mutate the input array such that the words alternate between
fully uppercase or lowercase. The first word should be uppercase.
*/

// let alternatingWords = function(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 !== 0){
//             arr[i] = arr[i].toLowerCase();
//         } else {
//             //its odd
//             arr[i] = arr[i].toUpperCase();
//         }
//     };
    
//     return arr;
// }


// let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

// let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]




// ---------------------------------------------------------------------------------------

/*
// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged



// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')





//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//



// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?
*/


// function findLastVowelIdx(word){
//     let vowels = 'aeiou';
//     for(let i = word.length - 1; i >= 0; i--){
//         let char = word[i];
//         if(vowels.includes(char)){
//             return i;
//         }
//     };
// }

// function handleLongerWords(word){
//     let vowels = 'aeiou';

//     if(vowels.includes(word[word.length - 1])){
//         let repeated = word + word;
//         return repeated;
//     } else {
//         let lastIdx = findLastVowelIdx(word);
//         let repeatedPartial = word + word.slice(lastIdx);
//         return repeatedPartial;
//     }
// }


// function repeatingTranslate(str){
//     let wordsArr = str.split(" ");
//     let res = [];
    
//     for(let i = 0; i < wordsArr.length; i++){
//         let word = wordsArr[i];

//         if(word.length > 2){
//            let repeated = handleLongerWords(word);
//            res.push(repeated);
//         } else {
//             res.push(word);
//         }
//     };

//     return res.join(" ");
// };

// console.log(repeatingTranslate("we like to go running fast"));  
// // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    
// // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   
// // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   
// // "herer familyily flewew to FranceFrance"

/*
Max in Matrix
Write a function maxInMatrix(matrix) that takes in a 2-dimensional 
array (matrix) and returns the largest value in the matrix. 
The matrix contains at least one value.
*/


// function maxInMatrix(arr){
//     let max = -Infinity;

//     for(let rowIdx = 0; rowIdx < arr.length; rowIdx++){
//         let currRow = arr[rowIdx];
//         for(let col = 0; col < currRow.length; col++){
//             let num = currRow[col];
//             if(num > max){
//                 max = num;
//             }
//         }
//     };

//     return max;
// };

// matrix = [[11,  2,-99],
//           [20, 109, 10],
//           [47, 72, 56]]

// console.log(maxInMatrix(matrix)); // 72


/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array
and returns an array containing the maximum value in each column. 
The array length should be equal to the number of columns, such that returnArray[i]
is equal to the max value in the [i]th column.
*/


//        0    1   2
// // O: [12, 19,  21 ]

// function maxColumn(arr){
//     let res = [-Infinity, -Infinity, -Infinity];
    
//     for(let rowIdx = 0; rowIdx < arr.length; rowIdx++){
//         let currRow = arr[rowIdx];
        
//         for(let col = 0; col < currRow.length; col++){
//             let num = currRow[col];
//             if(num > res[col]){
//                 res[col] = num;
//             }
//         }
//     };

//     return res;
// };


// matrix = [[ 5,  9, 21],
//           [ 9, 19,  6],
//           [12, 14, 15]]

// console.log(maxColumn(matrix)); // [12, 19, 21]

// ----------------------------- PST -----------------------------


// function greet(name){
//     if(typeof name !== 'string'){
//         return "Invalid Data"
//     };

//     return "Hello " + name;
// }

// console.log(greet('William'));


// let sumArr = function(arr){
//     if(!Array.isArray(arr)){
//         return "Bad Data"
//     };

//     let sum = 0;

//     for(let i = 0; i < arr.length; i++){
//         let num = arr[i];
        
//         if(typeof num !== 'number'){
//             return "Cannot sum anything except numbers, bad data"
//         };

//         sum += num;
//     }
//     return sum;
// };

// console.log(sumArr([1,'hello',3]));


/*
Write a function rotate(array, num) that takes in an array and a number as args. 

When the num is positive, the elements of the array should be rotated to the right. 
When the num is negative, the elements of the array should be rotated to the left. 

The function should mutate the original array. 
Define this function using function expression syntax.
*/

// let rotate = function(arr, num){
//     if(num > 0){
//         //rotate right - 0..n
//         for(let i = 0; i < num; i++){
//             let last = arr.pop();
//             arr.unshift(last);
//         }
//     } else {
//         //rotate left - n..0
//         for(let i = num; i < 0; i++){
//             let first = arr.shift();
//             arr.push(first);
//         }
//     };

//     return arr;
// };


// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]


/*
Addition Mutator
Write a function additionMutator that accepts an array and a number as an arguments. 
The function should mutate the input array such that every element has the given number added to it.
*/


// let additionMutator = function(arr, num){
//     for(let i = 0; i < arr.length; i++){
//         // let ele = arr[i]
//         arr[i] += num;
//     };
//     return arr;
// };

// let nums1 = [3, 7, 1, 2];
// additionMutator(nums1, 4);
// console.log(nums1);     // [ 7, 11, 5, 6 ]

// let nums2 = [11, 9, 4];
// additionMutator(nums2, -1);
// console.log(nums2);     // [ 10, 8, 3 ]



/*
Alternating Words
Write a function alternatingWords that accepts an array of words as an argument. 
The function should mutate the input array such that the words alternate between
fully uppercase or lowercase. The first word should be uppercase.
*/

// function alternatingWords(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 === 0){
//             arr[i] = arr[i].toUpperCase();
//         } else {
//             arr[i] = arr[i].toLowerCase();
//         }
//     }
    
//     return arr;
// }


// let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

// let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]



/*
// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:



// - words that are shorter than 3 characters are unchanged



// - words that are 3 characters or longer are translated according to the
//   following rules:



//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')



//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')

// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?
*/

// function handleLongWords(word){
//     let vowels = 'aeiou';

//     if(vowels.includes(word[word.length - 1])){
//         let repeated = word + word;
//         return repeated;
//     } else {
//         for(let j = word.length - 1; j >= 0; j--){
//             let char = word[j];
//             if(vowels.includes(char)){
//                 let repeated = word + word.slice(j);
//                 return repeated;
//             };
//         }
//     }
// };

// function repeatingTranslate(str){
//     let words = str.split(' ');
//     let res = [];

//     for(let i = 0; i < words.length; i++){
//         let word = words[i];
//         if(word.length < 3){
//             res.push(word);
//         } else {
//             let repeated = handleLongWords(word);
//             res.push(repeated);
//         }
//     }

//     return res.join(' ');
// };  

// function handleLongWords(word){

// };

// function repeatingTranslate(str){
//     let words = str.split(' ');
//     let res = [];

//     for(let i = 0; i < words.length; i++){
//         let word = words[i];
//         if(word.length < 3){
//             res.push(word);
//         } else {
//             let vowels = 'aeiou';

//             if(vowels.includes(word[word.length - 1])){
//                 let repeated = word + word;
//                 res.push(repeated);
//             } else {
               
//             }
//         }
//     }

//     return res.join(' ');
// };  

// let vowelIdx;

// for(let i = 0; i < word.length; i++){
//     let char = word[i];
//     if(vowels.includes(char)){
//         vowelIdx = i;
//     };
// };

// let repeated = word + word.slice(vowelIdx);
// res.push(repeated);



// console.log(repeatingTranslate("we like to go running fast"));  
// // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    
// // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   
// // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   
// // "herer familyily flewew to FranceFrance"

/*
Max in Matrix
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array 
(matrix) and returns the largest value in the matrix. 
The matrix contains at least one value.
*/


// function maxInMatrix(arr){
//     let max = -Infinity;

//     for(let i = 0; i < arr.length; i++){
//         let subArr = arr[i];
//         for(let j = 0; j < subArr.length; j++){
//             let num = subArr[j];
//             if(num > max){
//                 max = num;
//             }
//         }
//     }
//     return max;
// }

// let matrix = [
//     [11,  2,-99],
//     [20, 19, 10],
//     [47, 72, 56]
// ]

// console.log(maxInMatrix(matrix)); // 72


/*
Max in Columns
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) 
and returns an array containing the maximum value in each column. The array length
should be equal to the number of columns, such that returnArrayi is equal to the max
value in the ith column.
*/

// function maxColumn(arr) {
//     let res = new Array(arr.length).fill(null)

//     for(let i = 0; i < arr.length; i++){
//         let subArr = arr[i];
//         for(let j = 0; j < subArr.length; j++){
//             let num = subArr[j];
//             if(num > res[j] || res[j] === null){
//                 res[j] = num;
//             }
//         }
//     }

//     return res;
// }
  
  
// let matrix = [
//     [ 5,  9, 21],
//     [ 9, 19,  6],
//     [12, 14, 15]
// ];
  
//   console.log(maxColumn(matrix)); // [12, 19, 21]