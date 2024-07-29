//SCOPE - Where are variables accessible?
//Why? Security, Space, and Name collisions (two variables with the same name)

//3 types of scope in JS
// Global, local/function, block

//IMPORTANT: Inner scopes can access variables declared in outer scopes, but outer scopes
//           cannot access variables declared in inner scopes

//Global scope - 
//Widest possible scope
//Everything is declared in the global scope
//Everything has access to variables declared "globally" (as long as we're accessing them below
//where they were declared)
//Global scope is typically not desirable; we use it as minimally as possible

let fruit = 'apple' //Globally scoped variable (Hint: its not inside of curly braces)

//Local/Function scope -
//Scope within a function
//Any variables declared within the function/parameters of the function are all locally scoped
//Variables that functions have access to: variables in the global scope, functions parameters
//variables declared within the function, any other variables declared in the scope above function

//SCOPE CHAINING - When we use a variable in JS, JS will look for the value of that variable, and JS
//                 will start looking in the scope where the variable was used. If JS can't find the 
//                 value in the current scope it'll go up to the next outer scope and so on until
//                 it finds a value. JS will stop looking when it finds a value


// let catName = "King";

// function sayName() {
//     //let fruit2 = "pear" //fruit2 is locally scoped
//     let catName = 'Bobert'

//     //console.log(catName);


//     function greet() {
//         console.log("Hi " + catName)
//     }


//     greet()
// }

// function localScope(param) {
//     console.log(param)
// }

//console.log(param) //Parameters are local scoped

// function sayName2() {
//     console.log(catName)
// }

// //console.log(fruit2) //Fruit2 is inaccessible from an OUTER scope of where it was declared

// sayName()


//Block Scope - Any other curly braces (besides objects) 
// For loops, while loops, if, else, and else if statements

// if (true) {
//     let fruit3 = "lemon"; //Fruit3 is BLOCK scoped again inaccessible by outer scopes
//     console.log(fruit3)
// }

// console.log(fruit3)

// for (let i = 0; asdsadasdasdas) {
//     //i is a block scoped variable
// }

//Lexing time - JS first runthrough of the file before it executes anything
//During lexing time JS determines what variables and functions are declared and it determines
//what scope variables are in

//The keyword you use to declare a variable changes its scope

//var, let, and const
//each one is "scoped" differently

//Let and const were created in 2015, before then VAR was the only option

//VAR - enemy of the state
//Most people think that var is global scoped, it is, but its also function/local scoped
//If you declare a variable using var anywhere other than inside a function it will be accessible
//like a globally scoped variable
//YOU CAN ALSO DEFINE AS MANY VARS WITH THE SAME NAME AS YOU WANT

//NO ONE USES VAR UNLES YOU WANT JAIL TIME

//Declared a var variable within a block so it is globally scoped
// if (true) {
//     var fruit3 = "lemon"; //Fruit3 is BLOCK scoped again inaccessible by outer scopes
//     console.log(fruit3)
// }

//console.log(fruit3)

function hello() {
    var bunny = 'bunny';
    console.log(bunny)

    var bunny = 'carrot';

    console.log(bunny)
}

//console.log(bunny)
//hello()

//LET AND CONST
//Are both block scoped
//You cannot declare two lets with the same name

//Let can be reassigned a new value const cannot
let carrot = 'carrot';

carrot = 'tomato';

//CONST CAN NEVER BE REASSIGNED
//const stands for constant

const catName = 'King';

//catName = 'George';

//Before 2015 if we needed a constant in JS we would just name it in all caps
//Ex:
//var CONSTANT = 'bunny'; 

//Even though we now have const its still industry standard to capitalize constant variable names
const DATABASE_URI = 'asdasdsadsdasd'

//If you assign a const variable to a reference type, you cannot reassign the variable
// but you can manipulate the object/array

const CATGUY = {
    name: "King",
    age: 13
}

//CATGUY = [1, 2, 3] //CANNOT REASSIGN CATGUY

CATGUY.treats = 'churu'

console.log(CATGUY)