// function func () {
//     console.log(this)
// }

// func();

// const person = {
//     name: "Greg",
//     greet: function() {
//         console.log(`${this.name} says hi!`)
//     }
// };

// const person2 = {
//     name: "Bobert"
// }

// person.greet();
// console.log(person);
// person.func = func;
// console.log(person);
// person.func();
// person2.greet = person.greet;
// person2.greet();

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

// called with context
// cali.bark();

// save function with context but called on the global scope
// context has a runtime binding not a lexical binding
// caliBark();

// the function is called via the setTimeout
// its this binding is the timeout object, not cali
// setTimeout(cali.bark, 1000);

//this works, cali is calling bark directly
// setTimeout(() => cali.bark(), 2000);

// CALL

// function greet(greeting) {
//   console.log(greeting + ", " + this.name);
// }

// const person1 = { name: "Bob" };
// const person2 = { name: "Chuck" };

// greet.call(person1, "Hi"); // Output: Hi, Bob
// greet.call(person2, "Hello"); // Output: Hello, Chuck

// APPLY

// function greet(greeting, timeOfDay) {
//   console.log(greeting + ", " + this.name + "! Good " + timeOfDay);
// }

// const person3 = { name: "Rob" };

// greet.apply(person3, ["Hi", "morning"]); // Output: Hi, Rob! Good morning
// greet.call(person3, "Hi", "morning"); // Output: Hi, Rob! Good morning

// BIND

// function greet(greeting) {
//   console.log(greeting + ", " + this.name);
// }

// const person4 = { name: "Bob" };
// const greetBob = greet.bind(person4); // greetBob is a new function with this bound to person1
// console.log(greetBob)
// greetBob("Hi"); // Output: Hi, Bob (greetBob is called)

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   bark() {
//     console.log(`${this.name} says bark!`);
//   }

//   play(toy) {
//     console.log(`${this.name} likes to play with a ${toy}`);
//   }
// }

// const cali = new Dog("Cali");
// const caliBark = cali.bark;

// caliBark(); //Error -> the method lost its context [Function: bark]

// 1. bind allows us to permanently attach a context to a particular function

// const boundCaliBark = caliBark.bind(cali);
// boundCaliBark();
// boundCaliBark();
// boundCaliBark();
// console.log(boundCaliBark); // [Function: bound bark]

//2. Call and Apply allow temporary attaching a context to a function
// const play = cali.play;
// play("Kong toy");

//call, (C)omma Seperated Args
// play.call(cali, "stick");

//   //apply, (A)rray of Args
// play.apply(cali, ["ball"]);

// CONTEXT IN ARROW FUNCTIONS

// const person = {
//   name: "Alice",
//   greetArrow: () => {
//     console.log(this)
//     console.log(this.name + " says hi!"); // this might not refer to the person object!
//   },
//   greet: function () {
//     console.log(`${this.name} says hi!`);
//   },
// };

// person.greet();
// // person.greetArrow();
// const greetBound = person.greetArrow.bind(person);
// greetBound();

class Dog {
  constructor(name) {
    this.name = name;
  }

  delayedBark() {
    setTimeout(function () {
      console.log(this);
      console.log(`${this.name} says bark!`);
    }, 1000);
  }

  arrowDelayedBark() {
    setTimeout(() => {
      console.log(this);
      console.log(`${this.name} says bark!`);
    }, 1000);
  }
}

const cali = new Dog("Cali");

  cali.delayedBark(); //timeoutObject Context -> runtime binding
  cali.arrowDelayedBark(); //Dog {name: "Cali"} Context -> lexical binding
