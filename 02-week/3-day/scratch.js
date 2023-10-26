/*
Longest Word

Write a function longestWord(sentence) that takes in a sentence string as an argument. 
The function should return the longest word in the sentence. If there is more than one 
"longest word", return the first of these instances.

Input: string
Output: string (the longest, if more than one are the same length, we want to return the first)

-1. convert the string into an array
0. set a variable to hold the output which will be a string
    a) first word in the sentence
1. loop -> checking to see which words are longest
    a) compare the length of the currWord to the word stored in the variable 
    b) greater, rather than >= to keep the initial word
    c) reassign the output to the currWord
2. return the output
*/

// function longestWord(str){
//     let wordsArr = str.split(" ");
//     let res = ''

//     for(let i = 0; i < wordsArr.length; i = i + 1){
//         if(wordsArr[i].length > res.length){
//             res = wordsArr[i];
//         };
//     };

//     return res; 
// }



// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''



/*
Abbreviate

Write a function abbreviate(word) that takes in a string arg.
The function should return a new string where all of its vowels are removed.

Input: string (look for the vowels, and remove them)
Output: string (but with the vowels removed)

1. define the variables
    a) results -> this is what we will return 
    b) vowels -> to allow us to use the .includes method when checking if a value is a vowel
2. write a loop to iterate through the word
    a) start: 0
    b) stop: length of the input word
    c) step: +1
    d) initialize the char that is at that index currChar = word[i] -> to let us check if that char is a vowel
    e) use includes method vowels.includes(word[i]), use in an if statement
    f)it is a vowel:
        1) remove it -> before the loop (maybe before the loop convert to an array?)





    g)it is not a vowel
        1) continue to the next letter 
3. return the res variable, the string without the vowels
*/

// function abbreviate(str){
//     let results = ''; // this should be all non-vowels
//     let vowels = 'aeiou';

//     for(let i = 0; i < str.length; i += 1){
//         let char = str[i];
//         let isVowel = vowels.includes(char.toLowerCase());

//         if(!isVowel){
//             results += char;
//         }
//     };

//     return results;
// };


// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'


/*
Product Array

Write a function product(nums) that takes in an array of numbers.
The function should return the total product of multiplying all numbers
of the array together. You can assume that nums will not be an empty array.

I: array (of nums)
O: number (product of the nums in the array)

1. define a variable to store the res, called product
2. loop through the array (start=0, stop=length of array, step=1)
    a) product *= nums[i]
3. return product
*/

// function product(nums){
//     let product = 1;
//     for(let i = 0; i < nums.length; i++){
//         product *= nums[i];
//     }
//     return product;
// };


// console.log(product([10, 3, 5, 2])); // 300
// console.log(product([4, 3])); // 12

//declaration
// function myFunction(args){

// }

// //expression
// let myFunc = function(args){

// };