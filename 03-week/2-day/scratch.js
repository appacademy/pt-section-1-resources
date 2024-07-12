//Function declaration syntax:
/* 

function funcName() {
    //CODE
}
funcName();
*/

//Function expression syntax - Assigning an anonymous function to a variable
/*

let funcName = function() {
    //CODE
}
funcName()
*/

//Arrow functions
/* 
They DO NOT use the function keyword
() => {}

If you only have ONE parameter you can actually omit the parenthesis
if the arrow function has only one expression or statement, you can omit the curly braces! and this will cause
an implicit return (returns without the keyword). 
You can only do these fun little tricks with arrow functions
If you have ZERO parameters you MUST have the parenthesis

let arrowFunc = (parameters) => {
    //CODE    
}
arrowFunc(arguments)
*/

// let sum = (num1, num2) => {
//     return num1 + num2;
// }

//console.log(sum(9, 8));

// function hello(name) {
//     return `Hello ${name}!`
// }

// hello('King')

//let hello = name => `Hello ${name}!`; //Implicit return

//console.log(hello('King'));

//let sum = (sum1, sum2) => sum1 + sum2;

//console.log(sum(45, 67))

// let arrow = () => {
//     return "arrow"
// }

// let favColor = (color) => {

//     if (color === 'blue') {
//         console.log("blue!")
//     } else if (color === 'pink') {
//         console.log("Pink!")
//     } else {
//         console.log(`Whoa bro you like ${color}?`)
//     }

//     for (let i = 0; i < 5; i++) {
//         console.log(color)
//     }
// }

// favColor('yellow')

/*

OBJECT SYNTAX
The keys are similar to variables/strings
the values can be any valid JS data type: arrays, strings, numbers, booleans, objects, null, undefined, functions
Object keys cannot start with a number

let variableName(objname) = {
    keyName: value,
    otherKey: otherValue
}

If we want to access the VALUES of an object we have to use the KEYS
*/

// let car = {
//     make: 'Ferrari',
//     model: '488',
//     year: 1837,
//     mileage: 2,
//     rust: false,
//     features: ['horse drawn', 'seats', 'cd player', 'muskets', 'apple car play', 'dubloons'],
//     headlights: null
// }

//console.log the year of this car
//Two different ways: dot notation and bracket notation

//Dot notation
//console.log(car.year);

//Bracket notation - Unless we are putting a VARIABLE into the brackets we must have quotes around the key
//Key Example:
//console.log(car["year"]); //We are using the literal key

//Variable example:

let keyName = 'year';
//console.log(car[keyName]); //We are using a variable

//We CANNOT use variables with DOT NOTATION
//console.log(car.keyName) //This isn't treating like a variable its treating it like a key
//If you want/need to use a variable as key to access a value YOU MUST USE BRACKET NOTATION

//REASSIGNING PROPERTIES - Dot or bracket
// console.log(car)
// //Dot notation:
// car.mileage = 1000000
// console.log(car);

// car["mileage"] = 4
// console.log(car);
//Write a function that takes in a car (object), takes in the property that we need to update, and the new value of that property

let updateCarData = (carObj, keyToUpdate, newValue) => {
    //keyToUpdate is a parameter (basically just a variable)
    carObj[keyToUpdate] = newValue;
    return carObj;
}

let car = {
    make: 'Ferrari',
    model: '488',
    year: 1837,
    mileage: 2,
    rust: false,
    features: ['horse drawn', 'seats', 'cd player', 'muskets', 'apple car play', 'dubloons'],
    headlights: null
}

// console.log(updateCarData(car, 'rust', true))

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

//Looping "through" an array

let fruit = ["apple", "cherry", "lemon", "lime", "orange", "blueberry", "guava", "pear", "fruit", "fruit", "fruit"];

//Console log every item in the fruit array

// console.log(fruit[0]) //apple
// console.log(fruit[1]) //cherry
// console.log(fruit[2]) //lemon
// console.log(fruit[3]) //lime
// console.log(fruit[4]) //orange

//Instead of doing this^^ We can take advantage of a loop that counts and do this:

console.log(fruit.length)

for (let i = 0; i <= fruit.length - 1; i++) {
    //console.log("VALUE OF i", i)
    console.log(fruit[i])
}
    