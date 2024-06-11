# Context, Bind, Call, Apply, and Arrow Functions Pt. 2

- Context
- Bind, Call, and Apply
- Arrow Functions and Context

## Context Lecture

There are 3 types of Context: function, class, and global.

The keyword `this` exists in every function and it evaluates to the object that is currently invoking that function. So the value of `this` relies entirely on where a function is invoked.

- Global Context: When a function is called outside of any object or function, `this` refers to the global object (usually window in browsers, global in Node.js).
- Method Context: When a function is called as a method of an object, `this` refers to that object.
- Class Context: `this` refers to either an instance or the class


```js
class Dog {
    constructor(name){
      this.name = name;
    }

    bark(){
      console.log(this);
      console.log(`${this?.name ?? 'it broke'} barks!`)
    }
};

const cali = new Dog('Cali');
let caliBark = cali.bark;

//called with context
cali.bark();


// save function with context but called on the global scope
//context has a runtime binding not a lexical binding
caliBark();

// the function is called via the setTimeout
// its this binding is the timeout object, not cali
setTimeout(cali.bark, 1000);

//this works, cali is calling bark directly
setTimeout(() => cali.bark(), 2000);
```

## Context Practices (20m, SOLO)

- Exercise: Context in Regular Functions

## Context Exercise Walkthrough

## Bind, Call, Apply Lecture

In JavaScript, functions are first-class objects, meaning they can be treated like variables and passed around. However, when a function is passed around or assigned to a variable, it loses its original execution context (this). The call(), apply(), and bind() methods come to the rescue, allowing us to control the context (this) and arguments when calling a function.

1. The `call()` method allows you to explicitly set the `this` value for a function call and provide arguments individually.
2. The `apply()` method is similar to `call()`, but it takes arguments as an array instead of individual parameters.
3. The `bind()` method creates a new function with a pre-defined `this` value and optional pre-defined arguments. The original function is not called.

```js
class Dog {
  constructor(name){
    this.name = name;
  }

  bark(){
    console.log(`${this.name} says bark!`)
  }

  play(toy){
    console.log(`${this.name} likes to play with a ${toy}`)
  }
};

const cali = new Dog('Cali');
const caliBark = cali.bark;

caliBark() //Error -> the method lost its context [Function: bark]

//1. bind allows us to permanantly attach a context to a particular function

const boundCaliBark = caliBark.bind(cali);
boundCaliBark();
console.log(boundCaliBark); // [Function: bound bark]

//2. Call and Apply allow temporary attaching a context to a function
const play = cali.play

//call, (C)omma Seperated Args
play.call(cali, 'stick');

//apply, (A)rray of Args
play.apply(cali, ['ball']);
```

## Call, Bind, Apply Practices (50m, SOLO)

- Practice: Bind
- Practice: Call and Apply

## Call, Bind, Apply Practices Walkthrough

## Arrow Functions and Context Lecture

Arrow functions do not have inherent bindings to a `this` object based on context; instead, their `this` is lexically bound.

This just means that an arrow function's `this` refers to whatever code contains it, not calls it. This makes them much more flexible for use in method callbacks than normal anonymous functions.

```js
class Dog {
  constructor(name){
    this.name = name;
  }

  delayedBark(){
    setTimeout(function(){
      console.log(this);
      console.log(`${this.name} says bark!`)
    }, 1000)
  }

  arrowDelayedBark(){
    setTimeout(() => {
      console.log(this);
      console.log(`${this.name} says bark!`)
    }, 1000)
  }
}

const cali = new Dog('Cali');

cali.delayedBark(); //timeoutObject Context -> runtime binding
cali.arrowDelayedBark(); //Dog {name: "Cali"} Context -> lexical binding
```

## Arrow Functions and Context Practices (30m, SOLO)

- Practice: Arrow Functions and Context

## Arrow Functions and Context Practice Walkthrough