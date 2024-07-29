//Write a function findMax that takes in an array as an argument and returns
//the maximum number

function findMax(arr) {
    let max = null;

    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];

        for (let j = 0; j < subArray.length; j++) {
            if (subArray[j] > max) {
                max = subArray[j];
            }
        }

    }

    return max;
}

//console.log(findMax([[1, 2, 3, 4], [5, 56, 65], [34, 25, 89, 34, 34, 24]])) //89


//Helper Functions - When we call a function inside another function

//SRP - Single Responsibility Principle 
//The idea that every function in Javascript should have only ONE job and do that one job well

//Why? It allows for easier debugging, easier maintainability, quicker changes to the program

//Whichever function is the HELPER should exist before you use it
//AKA its declaration should be above wherever it is called

// let apple;


// function sayHi(name) {
//     //Any variable declared within CURLY braces DOES NOT exist outside of them (generally)
//     let pear;
// }

//HELPER FUNCTIONS

//Helper function

//Takes in a string and returns it as uppercase
///THIS IS THE HELPER FUNCTION
function yellStr(str) {
    return str.toUpperCase();
}

//Create a new array with all strings from the old one in uppercase
function arrOfStrings(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let string = arr[i];

        let upperCaseStr = yellStr(string);

        result.push(upperCaseStr);
    }

    return result
}

// console.log(arrOfStrings(["apple", "pear", "lemon", "lime"]));

// console.log(yellStr("barnacle"));

//TERNARY OPERATOR - A shorthand for an if else statement

//NORMAL WAY -

// if (5 < 4) {
//     console.log("Wooo");
// } else {
//     console.log("aww")
// }

//Ternary - 
/*The first item is the condition, the expression after the ? is what to run if its true, and the
expression after the : is what to run if its false

TERNARIES DO NOT HAVE ELSE IF STATEMENTS
*/
//(5 > 4) ? console.log("Wooo") : console.log("aww")

//Objects - Is similar to an array except each item is labelled by what we call a key
// Objects are denoted by {} typically used for related data

//An array - 
//let king1 = ["King", 13, "likesTreats", "evil"]

//Objects use key/value pairs and the keys are similar to variables, they are not strings
/* 
OBJECT SYNTAX

{
    key: value,
    key: value
}
Key/value pairs are referred to as properties
Keys are like variables, values must be actual javascript data types
*/

let king = {
    name: "King",
    age: 13,
    likesTreats: true,
    friendly: false,
    toys: ["mouse", "feather", "catnip"]
}

//console.log(king)

//Accessing items within an object: we use the keys
//Two different ways to access values using keys

//The first way is VERY similar to indexing
//OBJECTS DO NOT HAVE INDICES

// console.log(king["name"]) //BRACKET NOTATION   objectName["keyname"] -> value

//Second way to access values:

// console.log(king.name) //DOT NOTATION objectName.keyname

//How do we change values?

//BRACKET NOTATION REASSIGNMENT:
king["age"] = 12;
// console.log(king);

//DOT NOTATION REASSIGNMENT

// king.likesTreats = false
// console.log(king);

//Key names can't be changed, but their values can
//Keys can be deleted and new keys can be added

//Add a key

//BRACKET NOTATION ADDING KEYS/VALUES

king["healthy"] = true;
// console.log(king);

//DOT NOTATION

king.color = "black and white";
// console.log(king);

//Accessing a specific toy

//First get his toys

king.toys.push("sushi")

console.log(king.toys);

console.log(king)

// let arr = [1, 2, 3, 4, {name: "King", age: 12}]
// console.log(arr)

//To delete a key use the delete keyword:

delete king.healthy

console.log(king);
