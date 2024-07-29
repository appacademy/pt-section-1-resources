//Conditionals

// if (true) {
//     console.log("Hello")
// }   

//Else if and else can only be chained onto an if statement

// if (true) {

// } else {
    
// }

//FUNction
//Reusable blocks of code
//You can put any valid code into them including conditionals, loops

// function sayHi() {
//     console.log("Hello")
// }

//To actually use the code inside of the function we have to call it

//sayHi(); //This triggers the code to run

//Parameters vs arguments 

// function sayHelloTo(name) {
//     console.log(`Hi, ${name}`);
// }

// sayHelloTo("King");
// sayHelloTo("Brett");

// function condish(name) {
//     //We can put conditionals into functions
//     if (name === "Marlon") {
//         console.log("Yay!! Marlon");
//     } else if (name === "Andres") {
//         console.log("Yay!! Andres");
//     } else {
//         console.log("Who are you: ", name)
//     }
// }

// condish("Marlon");
// condish("Alex");

//Mutable vs Immutable stuff

//Some things in javascript can change, others cant

//Things that can change: (mutable data types)
// -Arrays
// -Objects

//Things that cant change: (immutable data types)
// - Numbers
// - Strings
// - Booleans

//Since variables are just boxes that hold stuff, we can tell a variable to hold a NEW string

// let string = "King";

// let upperString = string.toUpperCase();

// string = string.toUpperCase();

// console.log(upperString, string);

//Arrays are mutable so we can change them

let fruit = ["Apple", "Orange", "Peach", "Guava"];

//console.log(fruit);

fruit[1] = "Lemon";

//console.log(fruit);

//IMMUTABILITY EXAMPLE - 
// let string = "Barnacle"
// string[1] = 'L'

// console.log(string)

//console.log(["Apple", "Orange", "Peach", "Guava"][1])

//Nested array - Arrays within arrays
let arr = [true, false, [1, 2, 3]]

//console.log(arr[2]) // [1, 2, 3]

//console.log([1, 2, 3][1])

//console.log(arr[2][1]) //Return 2

let nestedFruit = ["Apple", "Peach", "Guava", ["Lemon", "Lime", "Orange"], "cherries", "Watermelon"];

//console.log(nestedFruit[3][1]) //Lime

// console.log(nestedFruit[0])
// console.log(nestedFruit[3][0])

//console.log(nestedFruit[0] + nestedFruit[1])

nestedFruit[0] = true

//console.log(nestedFruit);

let citrusFruits = nestedFruit[3];

//console.log(citrusFruits) // ["Lemon", "Lime", "Orange"]

//console.log(citrusFruits[0]) // "Lemon"

//let animals = ["Lion", "Otter", ["Bobcat", "Housecat", ["Tabby", "Orange", "Hemmingway", "russian blue"], "Cougar"], "Penguin"]

//console.log(animals[2][2][3]) //Russian blue


//Loops 

let fruits = ["Apple", "Orange", "Peach", "Guava"];
let veggies = ["Brocc", "lettuce", "Tomato", "cucumber"]

//INSTEAD OF THIS
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// function printsEverythingInArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// printsEverythingInArray(veggies)

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function addNumsFromArray(arrOfNums) {
    let sum = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        sum += arrOfNums[i]
    }
    
    return sum;
}

console.log(addNumsFromArray(nums))

/*

Every time we call a function it starts from scratch

Every time we loop, the loop "starts from scratch"

*/

// let sum = 0
// function randoFunc(num) {
//     return sum += num;
// }

// console.log(randoFunc(5))
// console.log(randoFunc(5))
// console.log(randoFunc(5))


//RETURN STATEMENTS ARE ONLY FOR FUNCTIONS

function spitOutName(name, whisperOrYell) {
    if (whisperOrYell === 'whisper') {
        return name.toLowerCase()
    } else if (whisperOrYell === 'yell') {
        return name.toUpperCase()
    }

}

console.log(spitOutName("King", 'yell'))