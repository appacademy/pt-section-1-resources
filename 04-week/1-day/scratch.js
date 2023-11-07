// let higherOrderFunction = function(callback){
//     callback();
//   };
  
//   let intoAFunction = function() {
//     console.log('I\'m being passed into a function');
//   };
  
//   let intoAFunctionPt2 = function() {
//     console.log('I\'m ALSO being passed into a function');
//   }
  
// //   higherOrderFunction(intoAFunction);
//   higherOrderFunction(intoAFunctionPt2);


// let transformArr = (arr, cb) => {
//     let res = [];
    
//     for(let i = 0; i < arr.length; i++){
//         let val = arr[i];
//         let transformed = cb(val);
//         res.push(transformed);
//     };
    
//     return res;
// };

// let tripler = (num) => num * 3;
// let yell = (str) => str.toUpperCase();

// console.log(transformArr([1,2,3,4,5], tripler));
// console.log(transformArr(['a', 'b', 'c', 'd', 'e'], yell));


// let peopleArr = [
//     {
//         name: "bob",
//         age: 7
//     },
//     {
//         name: "joe",
//         age: 10
//     },
//     {
//         name: "jane",
//         age: 20
//     },
//     {
//         name: "simon",
//         age: 89
//     },
//     {
//         name: "blaire",
//         age: 112
//     },
//     {
//         name: "william",
//         age: 30
//     },
//     {
//         name: "kate",
//         age: 25
//     },
// ];

// let res = [];

// for(let i = 0; i < peopleArr.length; i++){
//     let person = peopleArr[i];
//     if(person.name !== 'bob'){
//         res.push(person);
//     }
// }

// console.log(res);

// console.log(oldestName);

// let arr = [67,33,112,88,99];

// let max = -Infinity;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max);


// -------------------------------- PST ------------------------------

let higherOrderFunction = function(callback){
    callback();
  };
  
  let intoAFunction = function() {
    console.log('I\'m being passed into a function');
  };
  
  let intoAFunctionPt2 = function() {
    console.log('I\'m ALSO being passed into a function');
  }
  
//   higherOrderFunction(intoAFunction);
//   higherOrderFunction(intoAFunctionPt2);


// let arr = [1,2,3,4,5,6];
// let letters = ['a', 'b', 'c', 'd'];

// let transform = (arr, cb) => {
//     let res = [];

//     for(let i = 0; i < arr.length; i++){
//         let el = arr[i];
//         let changed = cb(el);
//         res.push(changed);
//     };

//     return res;
// };

// let tripler = (n) => n * 3;
// let yell = (char) => char.toUpperCase()

// console.log(transform(arr, tripler));
// console.log(transform(letters, yell));