//While and for loops

/* 
WHILE LOOP SYNTAX -

while loops will keep running as long as their condition is true
we want to structure our code so that at some point the codition becomes false
^^doing this will prevent infinite loops

Typically we have an outside variable that the condition is reliant upon
so the at of changing the value of that variable should at some point
make the condition false

while (condition) {
    Code to repeat
}
*/

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i += 2;
// }
/* 
FOR LOOP SYNTAX
inside the parenthesis we have three semi colon separated sections

initial expression - variable that the condition is reliant upon. Its run ONE TIME
before the loop begins

condition - Is checked every iteration, and the 
loop will only continue as long as its true

loop end expression - Some expression that gets our initial expression closer
 to making the condition false

for (initial expression; condition; loop end expression) {
    code to repeat
}
*/

// for (let i = 300; i >= 0; i -= 25) {
//     console.log(i)
// }

let string = "barnacle"

// for (let i = 0; i < string.length; i += 1) {
//     console.log(string[i]);
// }

/* 
Define a function logBetweenStepper that takes in 3 numbers as parameters. The
function should print out numbers between a minimum number and a maximum number
at defined intervals. The first parameter should represent the minimum number.
The second parameter should represent the maximum number. The third parameter
should represent the interval.
*/

// function logBetweenStepper(min, max, interval) {
//     for (let i = min; i <= max; i += interval) {
//         console.log(i);
//     }
// }

//logBetweenStepper(5, 3000, 150);
//logBetweenStepper(0, 20, 2)


//ARRAYS - Another basic data type
// Arrays are just lists of items that can be any data type
// collections
//ARRAYS ALSO HAVE INDICES just like strings
/* 

[all of your data goes in here comma separated]

[1, 2, 3]

["Hi", "howdy", "hello"]

[true, false, true]

[1, 2, true, "Howdy", false]
*/

//let fruit = ["apple", "orange", "lemon", "pear"];

//Indexing
//console.log(fruit); //the whole thing
//console.log(fruit[2]);
// let orange = fruit[1];
// console.log(orange)

//Arrays have a length property

//console.log(fruit.length);

// fruit[1] = "strawbies";

// console.log(fruit);

// fruit[3] = false;

//console.log(fruit);

//You can also concatenate them

let veggies1 = ["brocc", "lettuce", "tomato"];

let veggies2 = ["greenbeans", "turnip", "spinach"];

let allVeggies = veggies1.concat(veggies2); // [giant array]

//console.log(allVeggies)

//Index of takes in an item and returns the index that it is in

//console.log(veggies1.indexOf('lettuce'))

//.index() is a function which is why we call() it

//fruit[1] //indexing using square brackies

let fruit23 = ["apple", "orange", "lemon", "pear", "cherries", "peach", "guava"];

//console.log(fruit23[fruit23.length - 1])

//Loop through the fruit23 array and console log each fruit

// for (let i = 0; i < fruit23.length; i++) {
//     console.log(fruit23[i])
// }å

//Loop backwards by one through an array

// for (let i = fruit23.length - 1; i >= 0; i--) {
//     console.log(fruit23[i])
// }

// //Loop backwards by two through an array
// for (let i = fruit23.length - 1; i >= 0; i -= 2) {
//     console.log(fruit23[i])
// }

