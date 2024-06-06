//OOP approach

class Animal {
  constructor(name, age, color, sound="RUFF") {
    // if (typeof name !== "string") throw new Error("Name must be a string!")
    this.name = name;
    this.age = age;
    this.color = color;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

// let cali = new Animal("Cali", 5, "black", "woof");
// console.log(cali);

// cali.makeSound();

// let juice = new Animal("Juice", 2, "black", "meow");

// juice.makeSound();

class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age, color, "bark");
  }

 
}

let chandler = new Dog("Chandler", 4, "yellow");
chandler.makeSound();


// class Dog {
//   constructor(name, age, color){
//     this.name = name;
//     this.age = age;
//     this.color = color;

//     Dog.dogs.push(this);
//   }

//   static dogs = [];

//   static printDogs(){
//     Dog.dogs.forEach((animal, i)=> {
//       console.log(`${i + 1}:`, animal.print(), arr);
//     })
//   }

//   print(){
//     return (`${this.name} is a ${this.age} year old ${this.color} dog.`);
//   }
// };

// console.log(Dog.dogs)
// const cali = new Dog('Cali', 5, 'black');
// cali.printDogs()
// console.log(cali);
// console.log(cali.dogs);
// console.log(Dog.dogs)
// const chandler = new Dog('Chandler', 4, 'yellow');
// // console.log(chandler)
// console.log(Dog.dogs)

// console.log(cali.print());
// console.log(chandler.print());
// console.log('------')
// Dog.printDogs();