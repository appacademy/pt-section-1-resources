//! --------------------------------------------------------------------
//*                            Functions
//! --------------------------------------------------------------------

// // console.log('Hey look at me!');

// // let myVal = 5;

// // function printAMessage(anotherThing, someMessage) {
// function printAMessage(someMessage, anotherThing) {
//     console.log(anotherThing);
// }
// // console.log(someMessage);

// // printAMessage('This message should show up'); // "Hey JS, run the 'printAMessage' function"
// // printAMessage('Literally anything'); // "Hey JS, run the 'printAMessage' function"
// // printAMessage(32); // "Hey JS, run the 'printAMessage' function"
// printAMessage(
//     1500 + 2000 + ' apples a day keeps all doctors out of business',
//     'another one'
// ); // "Hey JS, run the 'printAMessage' function"

// function add5(eldenGod, num2, num3) {
//     console.log(eldenGod, num2, num3);
//     return eldenGod + 5;
// }

// function subtract50(eldenGod, num2, num3) {
//     console.log(eldenGod, num2, num3);

//     return eldenGod - 50;
// }

// let num = 'whatever';

// // console.log(add5(let num = 10, let num2 = 20, let num3 = 400));
// console.log(add5(10, 20, 400));
// console.log(subtract50(100, 200, 4000));
// console.log(num);

//! --------------------------------------------------------------------
//*                            Conditionals
//! --------------------------------------------------------------------

// let whatever = "";

// if (whatever) {
//     console.log('This passed!');
// } else {
//     console.log('This did not pass!');
// }

// let c = 'cat';

// if (c === 'dog') {
//     console.log("I'm a dog!");
// } else if (c === 'turtle') {
//     console.log("I'm a turtle!");
// } else if (c === 'potato') {
//     console.log("I'm a potato");
// } else {
//     console.log("I don't know what I am");
// }

// function identifyAnimal(animal) {
//     if (animal === 'dog') {
//         return "I'm a dog!";
//     } else if (animal === 'turtle') {
//         return "I'm a turtle!";
//     } else if (animal === 'potato') {
//         return "I'm a potato!";
//     } else {
//         return "I don't know what I am :(";
//     }
// }

// let result = identifyAnimal('dog');
// console.log(result);
// let result = identifyAnimal;
// let result = console.log(identifyAnimal('dog'));
// console.log(typeof result);
// console.log(result);
// console.log(result + '!!');

// let result = "I'm a dog";

// console.log(identifyAnimal('dog'));

// console.pog = function (someVal) {
//     console.log( someVal);
// };

// console.log(console.pog(5 + 10))

// function identifyAnimal(animal) {
//     if (animal === 'dog') {
//         console.log("I'm a dog!");
//     } else if (animal === 'turtle') {
//         console.log("I'm a turtle!");
//     } else if (animal === 'turtle') {
//         console.log("I'm a turtle!");
//     } else if (animal === 'potato') {
//         console.log("I'm a potato!");
//     } else {
//         console.log("I don't know what I am :(");
//     }
// }

// function identifyAnimal(animal) {
//     // return 'No animals here!';
//     if (animal === 'dog') {
//         console.log("I'm a dog!");
//     }
//     if (animal === 'turtle') {
//         console.log("I'm a turtle!");
//     } else if (animal === 'turtle') {
//         console.log("I'm a turtle!");
//     }
//     if (animal === 'potato') {
//         console.log("I'm a potato!");
//     } else {
//         console.log("I don't know what I am :(");
//     }
// }

// function identifyAnimal(animal) {
//     if (typeof animal === 'number') {
//         console.log("That ain't no animal");
//     } else {
//         if (animal === 'dog') {
//             console.log("I'm a dog!");
//         } else {
//             console.log('Hey');
//         }
//         // separate, and both sections will run
//         if (animal === 'turtle') {
//             console.log("I'm a turtle!");
//         } else {
//             console.log("I don't know what I am :(");
//         }
//     }

//     // console.log("That's all I know *shrug*");
// }

// identifyAnimal('turtle');
// identifyAnimal(50);

//! --------------------------------------------------------------------
//*                              Loops
//! --------------------------------------------------------------------

// //! Don't do this!
// let i = 0;

// if (i < 5) {
//     console.log('New if statement just dropped 🔥');
//     console.log('hello world #', i + 1);
//     i++;
// }

// if (i < 5) {
//     console.log('New if statement just dropped 🔥');
//     console.log('hello world #', i + 1);
//     i++;
// }

// if (i < 5) {
//     console.log('New if statement just dropped 🔥');
//     console.log('hello world #', i + 1);
//     i++;
// }

// if (i < 5) {
//     console.log('New if statement just dropped 🔥');
//     console.log('hello world #', i + 1);
//     i++;
// }

// if (i < 5) {
// console.log('New if statement just dropped 🔥');
// console.log('hello world #', i + 1);
//     i++;
// }

// if (i < 5) {
//     console.log('New if statement didnt run');
//     console.log('hello world #', i + 1);
//     i++;
// }

//! --------------------------------------------------------------------
//*                             While loop
//! --------------------------------------------------------------------

// let i = 0;

// //? make progress towards making this statement false
// while (i < 5) {
//     console.log('New loop just dropped 🔥');
//     console.log('hello world #', i + 1);
//     i++; //? right here!
// }

//! --------------------------------------------------------------------
//*                              For loop
//! --------------------------------------------------------------------

// for ( Value to use in the loop; Condition to check after each loop; Code to run at the end of each loop ) { code to run }
// for (       let i = 0;                      i < 5;                            i++) { code to run }
// for (        Step 1;                        Step 4;                          Step 3) { Step 2 }

// for (let i = 0; i < 5; i++) {
//     console.log('New loop just dropped 🔥');
//     console.log('hello world #', i + 1);
// }

//! --------------------------------------------------------------------
//*                            Translation
//! --------------------------------------------------------------------
// let i = 0;

// while (i < 5) {
//     console.log('New loop just dropped 🔥');
//     console.log('hello world #', i + 1);
//     i++;
// }

for (let i = 0; i < 5; i++) {
    console.log('New loop just dropped 🔥');
    console.log('hello world #', i + 1);
}


//? When to use For vs While

// Do I know when I would like to stop?
    // Yes - Use a for loop
    // No - Use a while loop