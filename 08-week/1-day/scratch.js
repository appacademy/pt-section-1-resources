// class Dog {
//     constructor(name){
//       this.name = name;
//     }
  
//     bark(){
//       console.log(this);
//       console.log(`${this?.name ?? 'it broke'} barks!`)
//     }
// };
// class Dog {
//     constructor(name){
//       this.name = name;
//     }
  
//     bark(){
//       console.log(this);
//       console.log(`${this?.name} barks!`)
//     }
// };

// const cali = new Dog('Cali');
// let caliBark = cali.bark;
  
// //called with context
// cali.bark();

// const sayHello = function () {
//     console.log(this);
//     // console.log(`Hello, ${this.name}`);
// };

// sayHello.call({name: 'abcd'});
// sayHello.call({hello: 'world'});

// // save function with context but called on the global scope
// //context has a runtime binding not a lexical binding
// caliBark.call(cali);
// console.log(caliBark);

// // the function is called via the setTimeout
// // its this binding is the timeout object, not cali
// // setTimeout(cali.bark, 1000); 

// //this works, cali is calling bark directly
// setTimeout(() => cali.bark(), 2000);

// const myObj = {
//     name: "Cali",
//     sayHello: function(){
//         console.log(this);
//         console.log(`Hello, ${this.name}`);
//     }
// }

// myObj.sayHello();

// function MyClass(name){
//     this.name = name;
// }

// let myInstance = new MyClass('name');
// console.log(myInstance);

// class Dog {
//     constructor(name){
//       this.name = name;
//     }
  
//     bark(){
//       console.log(`${this.name} says bark!`)
//     }
  
//     play(toy){
//       console.log(`${this.name} likes to play with a ${toy}`)
//     }
// };
  
// const cali = new Dog('Cali');
// const caliBark = cali.bark;

// // caliBark() //Error -> the method lost its context [Function: bark]

// //1. bind allows us to permanantly attach a context to a particular function

// // const boundCaliBark = caliBark.bind(cali);
// // console.log(boundCaliBark); // [Function: bound bark]
// // boundCaliBark();

// //2. Call and Apply allow temporary attaching a context to a function
// const play = cali.play
// console.log(cali)

// //call, (C)omma Seperated Args
// play.call(, 'stick', 'other', 'args');

// //apply, (A)rray of Args
// play.apply(cali, ['ball', 'stick', 'args']);

// class Dog {
//     constructor(name){
//       this.name = name;
//     }
  
//     delayedBark(){
//       setTimeout(function(){
//         console.log(this);
//         console.log(`${this.name} says bark!`)
//       }, 1000)
//     }
  
//     arrowDelayedBark(){
//       setTimeout(() => {
//         console.log(this);
//         console.log(`${this.name} says bark!`)
//       }, 1000)
//     }
//   }
  
//   const cali = new Dog('Cali');
  
// //   cali.delayedBark(); //timeoutObject Context -> runtime binding
//   cali.arrowDelayedBark(); //Dog {name: "Cali"} Context -> lexical binding

// const obj1 = {
//     name: 'obj1',
//     hello: function(){
//         console.log(this)
//         console.log(`hello ${this.name}`);
//     }
// };

// const obj2 = {
//     name: 'obj2',
//     hello: () => {
//         console.log(this)
//         console.log(`hello ${this.name}`);
//     }
// };

// obj2.hello(); // -? hello undefined? -> hello obj1


// ------------------------ PST -----------------------------------


// class Dog {
//     constructor(name){
//       this.name = name;
//     }
  
//     bark(){
//       console.log(this);
//       console.log(`${this?.name ?? 'it broke'} barks!`)
//     }
// };

// const cali = new Dog('Cali');
// let caliBark = cali.bark;
  
// //called with context
// // cali.bark();


// // save function with context but called on the global scope
// //context has a runtime binding not a lexical binding
// // caliBark(); 

// // the function is called via the setTimeout
// // its this binding is the timeout object, not cali
// // setTimeout(cali.bark, 1000); 

// //this works, cali is calling bark directly
// setTimeout(() => cali.bark(), 2000);

// class Dog {
//     constructor(name){
//       this.name = name;
//     }
  
//     bark(){
//       console.log(`${this.name} says bark!`)
//     }
  
//     play(toy){
//       console.log(`${this.name} likes to play with a ${toy}`)
//     }
// };
  
// const cali = new Dog('Cali');
// const caliBark = cali.bark;

// caliBark() //Error -> the method lost its context [Function: bark]

//1. bind allows us to permanantly attach a context to a particular function

// const boundCaliBark = caliBark.bind(cali);
// // console.log(boundCaliBark); // [Function: bound bark]
// // boundCaliBark();

// //2. Call and Apply allow temporary attaching a context to a function
// const play = cali.play

// //call, (C)omma Seperated Args
// play.call(cali, 'stick', 'other', 'args');

// //apply, (A)rray of Args
// play.apply(cali, ['ball', 'other', 'args']);

// const myObj = {
//     name: 'William',
//     hello: function(){
//         console.log(`hello ${this.name}`);
//     }
// };

// myObj.hello();

// class Dog {
//     constructor(name){
//       this.name = name;
//     }
  
//     delayedBark(){
//       setTimeout(function(){
//         console.log(this);
//         console.log(`${this.name} says bark!`)
//       }, 1000)
//     }
  
//     arrowDelayedBark(){
//       setTimeout(() => {
//         console.log(this);
//         console.log(`${this.name} says bark!`)
//       }, 1000)
//     }
// };
  
// const cali = new Dog('Cali');

// // cali.delayedBark(); //timeoutObject Context -> runtime binding
// cali.arrowDelayedBark(); //Dog {name: "Cali"} Context -> lexical binding