//Nested Arrays - Arrays within arrays

let array = ["sheep", "cows", ["maincoon", "bombay", "tuxedo"], "fish"];

//console.log(array[2][1]); //"bombay"

let arr2 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

//console.log(arr2[3][3][1]); //8

let listOfFruits = [["Orange", "Lemon", "Lime"], ["Strawbie", "Bluebie", "BlackBerrie"], ["watermelon", "canteloupe"]];

//console.log(listOfFruits[1][0]) //Strawbie

//Nested Loopies

/*
A loop within a loop

For every ONE iteration of the outer loop, the inner loop must complete all iterations

The inner loop must complete all iterations before the outer loop can loop again

The INNER LOOP MUST STOP before the outer loop can run again
*/

// for (let i = 0; i < 5; i++) {
//     console.log("OUTER LOOP ITERATION: ", i);

//     for (let j = 45; j < 50; j++) {
//         console.log("innerloop iteration: ", j)
//     }

// }

// let sentence = "Crazy I was crazy once they locked me in a room a room with rats";

// let wordsArr = sentence.split(' ');

// for (let i = 0; i < wordsArr.length; i++) {
//     let word = wordsArr[i];

//     for (let j = 0; j < word.length; j++) {
//         console.log(word[j]);
//     }
// }

//Animal fightblub

let animals = ["rat", "poyo", "tiger", "giraffe", "my husband", "creeper", "King"];

//I want a list of animal fights, whos fighting who?
//The outer loop is gonna grab an animal, the inner loop is gonna grab every animal after that one
// console.log("FIGHT LIST: ")
// for (let i = 0; i < animals.length; i++) {
//     let animal1 = animals[i];

//     for (let j = i + 1; j < animals.length; j++) {
//         let animal2 = animals[j];

//         console.log(animal1, animal2);
//     }
// }

//There are a couple ways to declare functions
//Function Expressions - when we set a variable equal to a function, and to call the function we call the variable name


/*
Regular func declaration
function funcName() {
    //Code inside func
}
funcName()


Function expression:

let funcName = function() {
    
}
funcName()
*/

//When using function expression syntax, the function is considered anonymous because it doesn't have a name
// The only way to call it is to use the variable name that its inside of

//FUNCTION EXPRESSION AND FUNCTION DECLARATIONS ARE THE SAME
let sayHi = function(name) {
    console.log(`Hi ${name}!`);
}

sayHi("Poyo");

// function doMath(num1, num2) {
//     return num1 + num2 ;
// }


sayHi = function(name) { //REASSIGNING IT TO A NEW FUNC
    console.log(`Bye ${name}.`)
} 

sayHi("Rat")

let fruit = "apple";
fruit();