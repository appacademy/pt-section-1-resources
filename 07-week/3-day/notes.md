# M2-W7-D3

- OOP
- Encapsulation
- Inheritance
- Static Methods and Variables
- Polymorphism

## OOP

The main concept behind OOP is the idea that you can group data and related actions or behaviors together in order to treat them as a single entity within a larger system.

An item containing attributes and behaviors is called an object.

The characteristics are called properties or attributes of the object.

The actions are called methods of the object.

In this way, properties are like an object's "adjectives", and methods are its "verbs".

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

  makeSound(){
    console.log("Woof woof")
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