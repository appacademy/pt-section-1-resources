// Your code here
// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   introduce() {
//     console.log(
//       `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
//     );
//   }

//   static introducePeople(people) {
//     if (!Array.isArray(people))
//       throw new Error("introducePeople only takes an array as an argument.");

//     for (let i = 0; i < people.length; i++) {
//       let person = people[i];
//       if (!(person instanceof Person))
//         throw new Error("All items in array must be Person class instances.");
//     }

//     people.forEach((person) => person.introduce());
//   }
// }

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
//   }

//   static introducePeople(people) {
//     if (!Array.isArray(people)) {
//       throw new Error("introducePeople only takes an array as an argument.");
//     }

//     for (let person of people) {
//       if (!(person instanceof Person)) {
//         throw new Error("All items in array must be Person class instances.");
//       }
//     }

//     people.forEach((person) => person.introduce());
//   }
// }

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }

  static introducePeople(people) {
    if (!Array.isArray(people))
      throw new Error("introducePeople only takes an array as an argument.");

    for (let i = 0; i < people.length; i++) {
      let person = people[i];
      if (!(person instanceof Person))
        throw new Error("All items in array must be Person class instances.");
    }

    people.forEach((person) => person.introduce());
  }
}

// const greg = {
//   firstName : "Greg",
//   lastName : "Isales",
//   age: 100,
//   introduce: () => {
//     console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
//   }

// }

const greg = new Person("Greg", "Isales", 31);
// console.log(greg.lastName)
// console.log(greg)
// greg.introduce();

const bob = new Person("Bob", "Bobbington", 50);
Person.introducePeople([greg, bob]);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
