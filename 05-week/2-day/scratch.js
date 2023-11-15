// let word1 = 'hello';
// let word2 = 'world';

// let word3 = word1 + " " + word2;
// let names = [{name: 'William'}, {name: "Kate"}, {name: "Caleb"}];
// let word4 = `hello ${names.map(person => person.name).join(', ')}! :)`

// console.log(word4);

// function foo() {
//     debugger
//     return 2 + bar();
// }

// function bar() {
//     debugger
//     return 6 + baz();
// }

// function baz() {
//     debugger
//     return 3;
// }

// console.log(foo());


// const countToTen = (n) => {
//     debugger
//     //base case
//     if(n === 10) return;
//     //recursive case -- else to our ^ if
//     console.log(n);
//     //recursive step -- add 1 on every recursive call
//     countToTen(n+1);
// };

// countToTen(0);

// const sum = (nums) => {
//     if(nums.length === 0) return 0;
//     return nums[0] + sum(nums.slice(1));
// }

// // num  + allTheOtherNums

// const arr = [1,2,3,4,5] //  -> 15
// console.log(sum(arr));

// ------------------------------ PST -------------------------------------------------

// let word1 = 'hello';
// let word2 = 'world';
// let word3 = word1 + ' ' + word2;

// let people = [{name: "William"},{name: "Kate"},{name: "Cali"}];


// let word4 = `Hello ${people.map(person => person.name).join(', ')}! :)`;
// console.log(word4);

// function foo() {
//     debugger
//     return 2 + bar();
//   }
  
//   function bar() {
//     debugger
//     return 6 + baz();
//   }
  
//   function baz() {
//     debugger
//     return 3;
//   }
  
//   console.log(foo());

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }


// const func = (n) => {
//     // BC
//     debugger
//     if(n === 10) {
//         return
//     };
//     console.log(n);

//     // RC
//     // RS
//     return func(n+1)
// }

// console.log(func(0));

// let arr = [1,2,3,4,5];

// const recSum = (nums) => {
//     debugger
//     if(nums.length === 0) {
//         //base case
//         return 0;
//     } else { //                     |  recursive step
//         //recursive case            V 
//         return nums[0] + recSum(nums.slice(1));
//     }
// };

// console.log(recSum(arr)); //15