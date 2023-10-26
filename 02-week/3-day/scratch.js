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

// -------------------- PST -----------------------------

/*
Longest Word
Write a function longestWord(sentence) that takes in a sentence
string as an argument. The function should return the longest word
in the sentence. If there is more than one "longest word", return
the first of these instances.

I: string (sentence)
O: string (the longest word present in the input sentence)

1. split the sentence into an array 
2. create a variable where the longest word is stored
3. we need to iterate through the words
    a) assign it to something
    b) check if the length of the current word is > than the length of the current longest word
        - if its longer, we want to reassign our output
        - if its not longer, we do nothing
4. return the longest word
*/

// function longestWord(str){
//     let res = '';
//     let words = str.split(" ");

//     for(let i = 0; i < words.length; i++){
//         let word = words[i];
        
//         if(word.length > res.length){
//             res = word;
//         };
//     };
//     return res;
// };

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''



/*
Abbreviate
Write a function abbreviate(word) that takes in a string arg.
The function should return a new string where all of its vowels are removed.

I: strings
O: string (all of the vowels removed)

- write the function abbreviate(word)
- variable for the vowels "aeiou"
- we need a variable for the output, newStr
- we probably need to loop through each character
    - compare the word[index] to the vowels variable
        - if it is a vowel, ignore it
        - if it is not a vowel, we want add the element to the newStr, (concatanation) +
- return newStr
*/

// function abbreviate(word){
//     let newStr = '';
//     let vowels = 'aeiouAEIOU';

//     for(let i = 0; i < word.length; i++){
//         let char = word[i];
//         if(!vowels.includes(char)){
//             newStr += char;
//         };
//     };

//     return newStr;
// };

// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'


/*
Product Array
Write a function product(nums) that takes in an array of numbers.
The function should return the total product of multiplying all
numbers of the array together. You can assume that nums will not be an empty array.

I: array
O: number (product of all the elements in the array)

- write the function productNums(nums)
- set the variable for product = 1 (or the first number of the array, 0*n = 0)
- loop start=0,stop=nums.length,step=1
    - multiply stuff together
    - take the value at the index and multiply it by whatever is in the product variable
        - reassign the result to product
- return the product
*/


// function product(nums){
//     let product = 1;
//     for(let i = 0; i < nums.length; i++){
//         let num = nums[i];
//         product *= num;
//     };
//     return product;
// };


// console.log(product([10, 3, 5, 2])); // 300
// console.log(product([4, 3])); // 12


/*
Abbreviate Words
Write a function abbreviateWords(sentence) that takes in a sentence string.
The function should return a new sentence where words that are longer than
4 characters have their vowels removed. 

Hint: Consider creating a helper function to remove all vowels in a string.

I: string (sentence)
O: string (new string, where 1. words > 4 chars have the vowels removed, words < 4 chars do not)

- write a function, named abbreviateWords
- make a variable to hold our output, call it res
- make a variable to hold the array of words
    - create the array of words by using the split method
- Loop through the array of words
    - check if the current words length is greater than 4
        - if it is, remove the vowels (we should use the helper function)
        - if it is not, don't remove the vowels.
    - concat the string to the output variable, res
- return res
*/

function abbreviate(word){
    let newStr = '';
    let vowels = 'aeiouAEIOU';

    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(!vowels.includes(char)){
            newStr += char;
        };
    };

    return newStr;
};


function abbreviateWords(str){
    let res = [];
    let words = str.split(" ");

    for(let i = 0; i < words.length; i = i + 1){
        let word = words[i];
        
        if(word.length > 4){
            let noVowels = abbreviate(word);
            res.push(noVowels);
        } else {
            res.push(word);
        };
    };

    return res.join(" ");
};

console.log(abbreviateWords('what a wonderful place to live')); 
// what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); 
// she snds an xcllnt mssg