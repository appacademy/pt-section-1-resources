// ----------------------- Array Methods ----------------------------------

// let arr = [1,2,3,4,5,6,7];


// //forEach
// let res = arr.forEach((ele) => {
//     if(ele % 2 === 0){
//         console.log(ele);
//     }
// });

//map
// let res = []

// for(let i = 0; i < arr.length; i++){
//     res.push(arr[i] * 2);
// }

// console.log(arr);
// console.log(res);

// let res = arr.map((el) =>{
//      return el * 2;
// });

// console.log(arr);
// console.log(res);

//filter


// let banana = [
//     {
//         name: "bob",
//         role: "admin",
//         age: 5
//     },
//     {
//         name: "joe",
//         role: "standard",
//         age: 10
//     },
//     {
//         name: "kate",
//         role: "admin",
//         age: 40
//     },
//     {
//         name: "samantha",
//         role: "standard",
//         age: 30
//     },
//     {
//         name: "william",
//         role: "standard",
//         age: 1
//     },
//     {
//         name: "james",
//         role: "admin",
//         age: 12
//     },
//     {
//         name: "maggie",
//         role: "admin",
//         age: 67
//     },
// ]

// let res = banana.filter(() => role === 'admin');

// console.log(res);
// console.log(arr);


//reduce

// let arr = [1,2,3,4,5,6,7];

// let sum = arr.reduce((acc, el, i, arr) => {
//     return acc + el;
// }, 0);

// let str = 'aaabbbccc';

// let letterArr = str.split('');

// let res = letterArr.reduce((acc, char) => {
//     if(acc[char] === undefined){
//         acc[char] = 1;
//     } else {
//         acc[char] += 1;
//     };

//     return acc;
// },[])

// console.log(res);
// let banana = [
//     {
//         name: "bob",
//         role: "admin",
//         age: 5
//     },
//     {
//         name: "joe",
//         role: "standard",
//         age: 10
//     },
//     {
//         name: "kate",
//         role: "admin",
//         age: 40
//     },
//     {
//         name: "samantha",
//         role: "standard",
//         age: 30
//     },
//     {
//         name: "william",
//         role: "standard",
//         age: 1
//     },
//     {
//         name: "james",
//         role: "admin",
//         age: 12
//     },
//     {
//         name: "maggie",
//         role: "admin",
//         age: 67
//     },
// ]

// for(let i = 0; i < banana.length; i++){
//     let ele = banana[i];
//     console.log(ele.role);
// }

// let res = banana.reduce((acc, person) => {
//     return acc + person.age;
// }, 0) / banana.length;

// let avg = res / banana.length;

// console.log(avg);

// console.log(res);

let arr = [1,2,3,4,5];

for(let key of arr){
    console.log(key);
}