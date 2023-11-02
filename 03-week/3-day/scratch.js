/*
Given a sentence string, sentence, 
    -> write a function that returns the most common character
 If there are multiple characters that appear the most, 
    -> return the lexicographically smallest one 
(e.g. if 'a' and 'b' are both the most common, return 'a' 
because it is closest to the beginning of the alphabet). 

>Be sure to exclude spaces when counting characters.


Input: string
Output: string -> the most common char

1. write the function 
2. loop through the input string
    a) check if the current character is an " "
        1) if it is, do nothing
        2) if it is not, count the char
            - use an object
            - key should be the char
            - value should be the number of times we have counted that char
3. loop again, this time through the counter object we built in the prev loop
    a) have some way of tracking the highest val
    b) some way of tracking the key associated with the highest val
    c) if we have multiple highest values
        - we need to compare the keys alphabetically
4. return the key
*/




// const sentence = "What is the most common character in this sentencehh";

// const mostCommonChar = sentence => {
//     let counter = {};
//     let highestVal = 0;
//     let highestKey;

//     for(let i = 0; i < sentence.length; i++){
//         let char = sentence[i];
        
//         if(char !== " "){
//             if(counter[char] === undefined){
//                 counter[char] = 1;
//             } else {
//                 counter[char] += 1;
//             }
//         }
//     };

//     console.log(counter);

//     for(let char in counter){
//         let val = counter[char];

//         if(val >= highestVal){
//             if(val === highestVal){
//                 if(char < highestKey){
//                     highestKey = char
//                 }
//             } else {
//                 highestKey = char;
//                 highestVal = val;
//             }
//         }
//     };

//     return highestKey;
// }

// console.log(mostCommonChar(sentence));           //  "t"

// --------------------------------------------------------------------

/*
Given the nested array of objects below, 
write a function, getSecondObjValues,
that prints the value of the second object within each nested sub-array. 
If there is no second object, print null.
*/


// const nestedArr = [
//     [
//         { a: 1 },
//         { b: 2 }
//     ],
//     [
//         { c: 3 },
//         { d: 4 },
//         { e: 5 }
//     ],
//     [
//         { f: 6 }
//     ],
//     [
//         { g: 7 },
//         { h: 8 }
//     ]
// ];

// const getSecondObjValues = arr => {
//     for(let i = 0; i < arr.length; i++){
//         let subArr = arr[i]
//         let obj = subArr[1];

//         if(obj === undefined){
//             console.log(null);
//         } else {
//             let valArr = Object.values(obj);
//             let val = valArr[0];
//             console.log(val);
//         }
//     };
// }

// getSecondObjValues(nestedArr);               // 2 4 null 8


// ---------------------------------------------------------------


/*
Given an object that has other objects nested inside of it, write a function
that takes that object and returns all values that are at a depth of 2.
*/

// const nestedObj = {
//     a: "aloe",
//     b: {
//         c: "cello",
//         d: "dello"
//     },
//     e: {
//         f: "fellow",
//         g: {
//             h: "hello",
//             i: "io"
//         },
//         j: "jello"
//     }
// }

// const printDepthOfTwo = obj => {
//     for(let key in obj){
//         let val = obj[key];
//         if(typeof val === 'object'){
//             for(let innerKey in val){
//                 console.log(val[innerKey])
//             }
//         }
//     }
// }

// printDepthOfTwo(nestedObj);               
// // cello dello fellow { h: "hello", i: "io" } jello


// const sequence = "pop";
// const sequence1 = "kayak";
// const sequence2 = "yo banana boy";
// const sequence3 = "this is the truth";
// const sequence4 = "abab";

// const isPalindrome = string => {
//     let counter = {};
//     let count = 0;

//     for(let i = 0; i < string.length; i++){
//         let char = string[i];
//         if(char !== " "){
//             if(counter[char] === undefined){
//                 counter[char] = 1;
//             } else {
//                 counter[char] += 1;
//             }
//         }
//     };

//     for(let char in counter){
//         let val = counter[char];
//         if(val % 2 !== 0){
//             count++;
//         }
//     };

//     console.log(counter);
//     return count <= 1;
// }

// console.log(isPalindrome(sequence));             // true;
// console.log(isPalindrome(sequence1));            // true
// console.log(isPalindrome(sequence2));            // true
// console.log(isPalindrome(sequence3));            // false
// console.log(isPalindrome(sequence4));            // true



/*
Given a sentence string, sentence, 

write a function that 
    -> returns the most common character within the sentence. 

If there are multiple characters that appear the most, 
    -> return the lexicographically smallest one 
(e.g. if 'a' and 'b' are both the most common, 
return 'a' because it is closest to the beginning of the alphabet).

-- Be sure to exclude spaces when counting characters.

1. write the function
2. we need to have a count object -- declare a variable
3. loop through all chars in the input string
    a.  if the char is a " "
        1) do nothing
    b) if it is not
        2) count the char
        3) does the key exist (obj[key] === undefined)
            a) if yes
                - increment the value
            b_ if no
                - add it, set the initial value to 1
4. loop through the counter object to find the highest val
    a) var to store the current highest val
    b) var to store the key associated with that highest val



*/

// const sentence = "What isaaa the most common character in this sentencehh";

// const mostCommonChar = sentence => {
//     let counter = {};
//     let highestVal = 0;
//     let highestKey;


//     //exists to build the counter object
//     for(let i = 0; i < sentence.length; i++){
//         let char = sentence[i];

//         if(char !== " "){
//             if(counter[char] === undefined){
//                 counter[char] = 1;
//             } else {
//                 counter[char] += 1;
//             }
//         }
//     }

//     //exists to use the counter obj to determine the most common char
//     for(let char in counter){
//         let val = counter[char];

//         if(val >= highestVal){
//             if(val === highestVal){
//                 if(char < highestKey){
//                     highestKey = char;
//                 }
//             } else {
//                 highestVal = val;
//                 highestKey = char;
//             }
//         }
//     };

//     return highestKey;
// }

// console.log(mostCommonChar(sentence)); //  "t"

/*
Given the nested array of objects below, 
write a function, getSecondObjValues,
that prints the value of the second object within each nested sub-array. 
If there is no second object, print null.
*/



// const nestedArr = [
//     [
//         { a: 1 },
//         { b: 2 }
//     ],
//     [
//         { c: 3 },
//         { d: 4 },
//         { e: 5 }
//     ],
//     [
//         { f: 6 }
//         //nothing here
//     ],
//     [
//         { g: 7 },
//         { h: 8 }
//     ]
// ];

// const getSecondObjValues = arr => {
//     for(let i = 0; i < arr.length; i++){
//         let subArr = arr[i];
//         let ele = subArr[1];
//         // console.log("Sub Array: ", subArr);
//         // console.log("[1]: ", ele)
//         if(ele === undefined){
//             console.log(null);
//         } else {
//             let valArr = Object.values(ele);
//             let actVal = valArr[0];
//             console.log(actVal);
//         }
//     }
// }

// getSecondObjValues(nestedArr); // 2 4 null 8


// const nestedObj = {
//     a: "aloe",
//     b: {
//         c: "cello",
//         d: "dello"
//     },
//     e: {
//         f: "fellow",
//         g: {
//             h: "hello",
//             i: "io"
//         },
//         j: "jello"
//     }
// }

// const printDepthOfTwo = obj => {
//     for(let key in obj){
//         let outerVal = obj[key];

//         if(typeof outerVal === 'object'){
//             for(let innerKey in outerVal){
//                 console.log(outerVal[innerKey]);
//             };
//         }
//     }
// }

// printDepthOfTwo(nestedObj); // cello dello fellow { h: "hello", i: "io" } jello