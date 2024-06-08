//Truthy and Falsey value
//Certain expressions in JS are inherently truthful or false

4 > 3 //True
3 > 4 //False

//Indexing strings 

let str = "King";

//When using .indexOf we give it a character to receive an index
// Ex:   str.indexOf('K') // 0

//When using indexing str[0] we give it an index and it returns a character

//str[0] //K

//"King"[0] //K

//Indexing starts at 0

//Getting the last character of a string that we don't know the size of

//We can use the length of the string - 1

//console.log(str.length); //The length is 4

//console.log(str[str.length - 1]) // g   str.length - 1 will give us 3

//Interpolation vs Concatenation

//Concatenation - uses the +
//console.log("Hello " + "World");
// console.log(str + " says hello");

//Interpolation - Uses `` (backticks) and ${} to put variables into strings
//${} only works if it is inside of backticks
// console.log(`${str} says hello`);
// console.log('${str}');

// console.log(`${4 + 4} number`);

let nameVar = "Onyx";
let age = 13

// console.log(`${nameVar} is so cute and he happens to be ${age}.`);

//Numbers

let i = 4;
i + 3; //Do not reassign the value of i

// console.log(i + 3, i); //7 4

//Long hand
i = i + 3; //Reassign it to i + 3

//shorthand
i += 3; //Reassign it to i + 3

// console.log("AFter reassignment: " + i) // 7

//Increment and Decrement operators

//Long hand
i += 1;

i++; //Add one to a number DOES REASSIGN it

//long hand
i -= 1;

i--;

//Examples

let num = 4;

num--;
num + 45; //This evaluates to 48, but JS doesn't store that in num

//console.log(num);

let num5 = 14;

// console.log(num5) // 14

let expression5 = num5++;  //Will set expression5 to 14
num5++
// let expression5 = 5 += 1; //Its sets it to 15

// console.log(num5);

let predictExpression5 = 14;

// console.log(expression5);

// i++ Returns the value BEFORE incrementing 
// ++i return the value AFTER incrementing
// i+= 1 returns the value AFTER incrementing
//Alex promptly quits her job.

// console.log(num5 == num5++);

//  DeMorgans Law
//How you evaluate boolean expressions

/* 
If the ! is outside of parenthesis then you apply the ! to each expression
 and you flip the logical operator


A === True

B === False


!(A || B) -> False

!(!A && !B) -> True

!(A || !B) -> False

*/

// != / == loosely does not equal    !== strictly

// console.log('5' != 5); //Would be false because THEY DO loosely equal

// console.log('5' !== 5); //True bc they don't strictly equal

//When we use logical operators to chain expressions
//

//console.log(5 > 4 || 5 > 6);

//If JS sees that the first expression is true and that there is an OR
// IT WILL NOT check the second expression

//FUNCTIONS - A function in JS is a reusable block of code
// Stores a block of code, until we "Call" it and then it executes that code

//To create a JS function, start with the keyword function
//Then name it
/*
JS Function syntax:

function funcName() {
    //Code to execute
}

*/

//Let's write a function to say hello!

function sayHello() {
    console.log("Hello!");
    console.log("I'm greg");
}
//In order to get this to run we "call" or "invoke"
//To call a function use its name and then parenthesis

// sayHello(); //This line runs the code inside of the function

//Parameters vs Arguments
//Parameters are just variables that go into a function
//Function declaration is the act of creating a function
//The variables in the function declaration are PARAMETERS

function sum(x, y) {  // let x;   let y;
    console.log(x + y)
}
//How will I actually give those variables values?
//We will call the function and PASS in ARGUMENTS

//The values that we pass in for the parameters are called arguments
// sum(5, 7);
// sum(6, 8);
// console.log(5 + 4);
// console.log(45 + 6);

//Javascript doesn't care if you pass in too many arguments
//Javascript simply ignores the extra args
function hello(name) {     //let name;
    console.log("Hi " + name);
}

//hello("King", "Onyx") Providing extra

hello(); //Hi undefined