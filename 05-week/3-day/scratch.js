//Default parameters
//You can specify a default value for a parameter, and if you don't pass
//a value in for that param, JS will use the default value otherwise it'll
//use the value passed in


// function sayHello(friend = "friend") { //friend will choose bro'lady if no value is passed in
//     console.log(`Hey ${friend}, how are ya?`);

//     console.log(`Hey ${friend}, how are ya?`);
//     console.log(`Hey ${friend}, how are ya?`);
//     console.log(`Hey ${friend}, how are ya?`);
// }

// sayHello();

// sayHello("Ratguy");

// if (true) {
//     let fruit = "lobster"


//     console.log(fruit);
// }
function recursiveSum(num) {
    if (num === 1) {
      return 1;
    }

    return num + recursiveSum(num - 1)
  }
  console.log(recursiveSum(5))
/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// function sumArray(arr) {
//     // Your code here 
//     if (arr.length === 0) {
//         return 0;
//     }

//     let firstItem = arr.shift();
//     return firstItem + sumArray(arr);
// }

// sumArray([5]) // 5

// console.log(sumArray([1, 2])) //  6
// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// function sumArray(arr) {
//     let lastNum = arr.pop(); //
//     let total = lastNum;
//     if(arr.length) {
//       total += sumArray(arr);
//     }
//     return total;
//   }


/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/


// function addToTwelve(arr) {
//     // Your code here 
//     if (arr.length < 2) return false;
//     if (arr[0] + arr[1] === 12) return true;

//     return addToTwelve(arr.slice(1));
// }

function addToTwelve(arr) {
    if (arr.length < 2) return false;
    if (arr[arr.length - 1] + arr[arr.length - 2] === 12) return true;

    arr.pop();
    return addToTwelve(arr);
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false
