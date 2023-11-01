// //declaration
// function myFunc(){

// };

// //expression
// let myOtherFunc = function(){

// };

// let myOtherOtherFunc = () => {
//     console.log('hello')
// };

// let isFive = (num) => num === 5;

// console.log(isFive(5));

// let dog = {
//     name: 'Callie',
//     age: 6,
//     color: 'black',
//     hobbies: [
//         'chase cats',
//         'eat peoples feet',
//         'jump in peoples laps',
//         'eat everything that has ever existed'
//     ],
//     species: {
//         name: 'dog'
//     }
// };

// let arrDog = ['Callie', 6, 'black'];

// let myVar = 'name';

// console.log(dog.hobbies[2]);
// console.log(dog[myVar]);

//for(let keyVar in Obj)

// let objArr = [
//     {name: 'William'},
//     {name: 'Kate'},
//     {name: 'Caleb'},
//     {name: 'Maggie'},
// ];

// for(let i = 0; i < objArr.length; i++){
//     let ele = objArr[i];
//     console.log(ele.name);
// };

// let dog = {
//     name: 'Callie',
//     age: 6,
//     color: 'black',
//     hobbies: [
//         'chase cats',
//         'eat peoples feet',
//         'jump in peoples laps',
//         'eat everything that has ever existed'
//     ],
//     species: {
//         name: 'dog'
//     }
// };

// console.log(dog.color !== undefined);


// ------------------------------ PST -------------------------------------

//declaration
// function hello(){
//     console.log('hello');
// };

//expression
// let goodbye = function(){
//     console.log('goodbye');
// };

// let addFive = (num) => {
//     return num + 5;
// };

// console.log(addFive(5)); // 10

//implicit returns -- single expression

// let addTen = (num) => num + 10;

// console.log(addTen(5)); // 15;

// let dog = {
//     name: 'cali',
//     color: 'black',
//     age: 6
// };

// dot notation
// console.log(dog.name);

// bracket notation

// let myVar = 'color'

// let dogName = dog['name'];
// console.log(dog[myVar]);
// console.log(dogName);


//for-in

// iterable name -> color -> age
// for(let key in dog){
//     console.log(key, ": ",dog[key])
// }

// let arr = ['a', 'b', 'c'];

// for(let key in arr){
//     console.log(key)
// };

// 0 -> 1 -> 2 -> 
// for(let i = 0; i < arr.length; i++){

// }

let myVar = [1,2,3]

let dog = {
    name: 'cali',
    color: 'black',
    age: myVar // -> 'hello world'
};

//check if key exists
// console.log(dog['name'] !== undefined);
myVar.push('hello')
console.log(dog.age)
console.log(myVar);