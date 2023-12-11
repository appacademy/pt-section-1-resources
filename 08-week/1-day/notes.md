# M2-W8-D1

- Context
- Bind
- Call and Apply

## Context Lecture 

The keyword this exists in every function and it evaluates to the object that is currently invoking that function. So the value of this relies entirely on where a function is invoked.

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

- Context in Regular Functions Quiz
- Exercise: Context in Regular Functions

## Context Exercise Walkthrough

## Bind, Call, Apply Lecture

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

- Bind Quiz
- Practice: Bind
- Call and Apply Quiz
- Practice: Call and Apply

## Call, Bind, Apply Practices Walkthrough

## Arrow Functions and Context Lecture

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

## Arrow Functions and Context Practices (40m)

- Arrow Functions Review and Context Quiz
- Practice: Arrow Functions and Context

## Arrow Functions and Context Practice Walkthrough