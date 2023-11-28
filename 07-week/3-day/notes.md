# M2-W7-D3

- OOP
- Encapsulation
- Inheritance
- Static Methods and Variables
- Polymorphism

## OOP

Styles Compared

```js
// imperative
// say what you want in the order you want it done, very common in scripting languages
// no particular convention on mixing behavior and data

let arr1 = [1,2,3,4,5];

for(let i = 0; i < arr1.length; i++){
  arr1[i] = arr1[i] * 2;
}

console.log(arr1);

// functional
// data and behavior must not be mixed
// based on the composition of functions and not mutating data

let arr2 = [1,2,3,4,5];

const double = (arr) => arr.map(el => el * 2);

console.log('original', arr2);
console.log('output', double(arr2));

// OOP
// data and behavior are coupled
// based on modeling data types based on what they are and what they do, "blueprinting"

class Doubler {
  constructor(arr){
    this.data = arr;
  }

  double(){
    this.data = this.data.map(el => el * 2);
  }
}

let myDoubler = new Doubler([1,2,3,4,5]);
console.log(myDoubler);
myDoubler.double();
console.log(myDoubler); // instance properties

let parent = Object.getPrototypeOf(myDoubler); // get the class from the class instance
console.log(parent); // just an object with a particular context
console.log(Object.getOwnPropertyNames(parent)); // the instance has its own properties but inherits methods
```

Why OOP?

```js
//we could do this, but repetition is bad

let cali = {
  name: 'Cali',
  age: 5,
  color: 'black',
  sound: 'bark'
}

let chandler = {
  name: 'Chandler',
  age: 4,
  color: 'yellow',
  sound: 'bark'
}

let juice = {
  name: 'Juice',
  age: 2,
  color: 'black',
  sound: 'meow'
}

const makeSound = (animal) => {
  console.log(`${animal.name} says ${animal.sound}`);
};

makeSound(cali);
makeSound(juice);

//OOP approach

class Animal {
  constructor(name, age, color, sound){
    this.name = name;
    this.age = age;
    this.color = color;
    this.sound = sound;
  }

  makeSound(){
    console.log(`${this.name} says ${this.sound}`)
  }
}

let cali = new Animal('Cali', 5, 'black', 'woof');

cali.makeSound();

let juice = new Animal('Juice', 2, 'black', 'meow');

juice.makeSound();


class Dog extends Animal {
  constructor(name, age, color){
    super(name, age, color, 'bark');
  }
}

let chandler = new Dog('Chandler', 4, 'yellow');
chandler.makeSound();
```

Classes and OOP are about making blueprints in order to make a factory to
produce a peice of data with predefined rules.

## Practice: Class Syntax (SOLO, 20m)

Walkthrough after practice

## Encapsulation

- Encapsulation means to put behavior and data together behind an API that hides the implementation details.
- We dont need to know how it works, we just need to know how to use it.
- Basically it's configuring your code to hide the complexity of a behavior in an API.

## Inheritance

## Static Methods and Variables

```js
class Dog {
  constructor(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;

    Dog.dogs.push(this);
  }

  static dogs = [];

  static printDogs(){
    Dog.dogs.forEach((dog, i)=> {
      console.log(`${i + 1}: ${dog.name} is a ${dog.age} year old ${dog.color} dog.`);
    })
  }

  print(){
    console.log(`${this.name} is a ${this.age} year old ${this.color} dog.`);
  }
};

const cali = new Dog('Cali', 5, 'black');
const chandler = new Dog('Chandler', 4, 'yellow');

cali.print();
console.log('------')
Dog.printDogs();
```

## Practice: Inheritance (SOLO, 15m)

Walkthrough after practice.

## Polymorphism

- Function overloading: sending a different number or type of parameters to a
  particular function. (Doesn't properly exist in JS)
- Function overriding: a child class gives its own version of the implementation
  of a function from one of its ancestor classes (usually the parent)

Primary Idea: When a function or class has a different implentation of the same
thing in different places.

```js
class Animal {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  makeSound(){
    console.log('an animal sound');
  }
}

class Dog extends Animal {
  constructor(name){
    super(name, 'dog')
  }
}

class Cat extends Animal {
  constructor(name){
    super(name, 'cat')
  }
}
```

## Practice: Polymorphism (SOLO, 15m)

Walkthrough after practice.

