// // Old (ES5) way to declare classes
// function OldBook(title, series, author) {
//   this.title = title;
//   this.series = series;
//   this.author = author;
// }

// const gobletOfFire = new OldBook(
//   "The Goblet of Fire",
//   "Harry Potter",
//   "J.K. Rowling"
// );
// console.log(gobletOfFire.title); // The Goblet of Fire

// Converted to ES6 class syntax

// class Book {
//   constructor(title, series, author) {
//     this.title = title;
//     this.series = series;
//     this.author = author;
//   }
// }

// const sorcerersStone = new Book(
//   "The Sorcerer's Stone",
//   "Harry Potter",
//   "J.K. Rowling"
// );
// // console.log(gobletOfFire.title); //   "The Sorcerer's Stone"

// console.log(sorcerersStane)

class Dog {
  constructor(name) {
    this.name = name;
    this.sound = "woof";
  }

  speak() {
    return `${this.name} says '${this.sound}'`;
  }
}

let fido = new Dog("Fido");
let fidoSpeak = fido.speak.bind(fido)

console.log(fidoSpeak.apply(fido)); // ERROR
console.log(fidoSpeak())
