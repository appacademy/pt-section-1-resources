// var myVar;

// let myVar = 5;
// if(true){
//     console.log(myVar);
// }

// console.log(__dirname)


// let name = 'Bob';

// if(true){
//     let name = 'James'
//     console.log(name);
// }

// function(){
//     let name = ""
// };
// function(){
//     let name = ""
// };
// function(){
//     let name = ""
// };
// function(){
//     let name = ""
// };
// function(){
//     let name = ""
// };
// function(){
//     let name = ""
// };
// function(){
//     let name = ""
// };
// function(){
//     let name = ""
// };
// function(){
//     let name = ""
// };

// function myFunc(name){
//     let myVar;
// }

// let hungry = false;

// function sayHungry() {

// //   let hungry = true;
//   if (hungry) {
//     console.log("I'm hungry!");
//   } else {
//     console.log("I'm coding");
//   }
// }

// sayHungry();

// const myFunc = () => {
//     const res = [];

//     for(){
//         res.push()
//     };

//     return res;
// }


// let myLet = 'hello'
// console.log(myLet);

// const myConst = 'hello'
// console.log(myConst);

// console.log(myVar);
// myVar = 'hello'

// const name = 'William'
// console.log(name)

// name = 'Kate'
// console.log(name)

// name += 'cat'

// const obj = {};
// obj.cat = 'juice'
// obj.dog = 'cali'
// console.log(obj);

// let hello = 'original value'

// if(true){
//     let hello = 'world'
// };

// console.log(hello);


// function myFunc(){
//     let count = 0;

//     function innerFunc (){
//         count++;
//         return count;
//     };

//     return innerFunc;
// };

// let count1 = myFunc();
// let count2 = myFunc();

// count1(); // 1
// count1(); // 2
// count1(); // 3 
// console.log(count1()); // 4
// console.log(count2()); // 1

/*
Prompt: I want to start a new business that sells robots to people.

Level One
    I need to build a factory that will produce robots to people that say, 
    "Hello" when they run them.

Level Two
    Customers would like it if they could decide what the robots said.

Level Three
    Customers would like it if their robots said their names

Level Four
    Customers would like it if the robots kept track of ALL the messages they've spoken.
*/

// const robotFactory = (name) => {
//     let storage = {};

//     const robot = (msg) => {
//         if(storage[msg] === undefined){
//             storage[msg] = 1;
//         } else {
//             storage[msg]++
//         }
//         console.log(msg + " " + name);
//         return storage;
//     }

//     return robot;
// };

// const helloRobot = robotFactory('William'); // [Function]
// helloRobot('hello');
// helloRobot('goobye');
// helloRobot('goobye');
// helloRobot('goobye');
// console.log(helloRobot('goobye'));


// --------------------------- PST -------------------------------------

// let num = 5;

// if(true){
//     console.log(num);
// }

// let myVar = 'hello';

// if(true){
//     let myVar = 'goodbye'
//     console.log(myVar);
// }


// console.log(__dirname);

// let globalScope = 'I am globally scoped';

// let myFunction = function(functionScope){
//   let alsoFunctionScope = "I am also function scoped";
//   if(!functionScope){
//     let blockScope = 'I am block scoped';
//   };
// };

// myFunction("I am function scoped");

// let hungry = false;
// function sayHungry() {

// //   let hungry = true;

//   if (hungry) {
//     console.log("I'm hungry!");
//   } else {
//     console.log("I'm coding");
//   }
// }
// sayHungry();

// const myVar = [];

// myVar.push(5)

// console.log(myLet);
// myLet = 'hello'


// let msg = 'hello';

// if(true){
//     let msg = 'goodbye'
// };

// console.log(msg);

// const myVar;

// let global = ""

// const outer = () => {
//     let count = 0;

//     const inner = () => {
//         count++;
//         return count;
//     };

//     return inner;
// }

// const counter1 = outer(); //function

// counter1() //1
// counter1() //2
// counter1() //3
// counter1() //4
// console.log(counter1()); //5

// const counter2 = outer(); // function

// console.log(counter2()); // 1


/* 
Prompt: I want to start a new business that sells robots to people.

Level One
I need to build a factory that will produce robots to people that say, "Hello" when they run them.

Level Two
Customers would like it if they could decide what the robots said.

Level Three
Customers would like it if their robots said their names

Level Four
Customers would like it if the robots kept track of ALL the names they've spoken to.
*/

// const factory = (name) => {
//     const storage = {};

//     const robot = (msg) => {
//         if(storage[msg] === undefined){
//             storage[msg] = 1;
//         } else {
//             storage[msg]++
//         }

//         console.log(msg + " " + name);
//         return storage;
//     };

//     return robot;
// };

// const helloRobot = factory('William');
// helloRobot('hello');
// helloRobot('goodbye');
// helloRobot('goodbye');
// helloRobot('goodbye');
// helloRobot('goodbye');
// helloRobot('howdy');
// helloRobot('howdy');
// console.log(helloRobot('howdy'));

// const otherRobot = factory('Kate');
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// otherRobot('hello')
// console.log(otherRobot('hello'));
