//Functions - Are reusable blocks of code 
// camelCaseCaseCase
/* 

function funcName() {
    CODE THAT THE FUNCTION WILL RUN
}

*/
//In order for the function to run the code inside of it
//We must "call"/"invoke" it
//To call a function, AFTER IT HAS BEEN CREATED, you simply use the function name()

function sayHello() {
    console.log("Hello!");
}

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

//The parenthesis store variables for the function that we call parameters

//Says hi to someone

//This right here is a function declaration
function sayHiTo(name, otherName) {   // let name;
    //the name and othername parameters will only exist inside of the curly braces
    console.log(`Hello ${name} welcome back. Is your bestfriend ${otherName}?`)
    // console.log('Hello ' + name + ', welcome back')
    // console.log('Hello ${name}')
}

//The values that we pass into the function call are arguments
// sayHiTo("King", "Onyx");

// sayHiTo("Greg", "Mary");

// sayHiTo("Pickles", "DoobleBob")

// function dataTypes(number) {
//     console.log(number * 9);
// }

// dataTypes(9)
// dataTypes("DoodleBob")

// function dataTypes(number, string, array, bool) {
//     console.log(number, string, array, bool)
// }

// dataTypes(8, "King", [1, 2, 3], true)

// function yellSomething(yell) {
//     console.log(yell.toUpperCase() + '!!!');
// }

// yellSomething("What are you doing?");

// function sayHello(name) {
//     console.log(`Hi ${name}`)
// }

// console.log(name)

// sayHello("King")

//RETURN STATEMENTS
//Spit stuff out of the function so we can use it anywhere in the program
//What if I want to save the result OUTSIDE of the function

function doesMath(num1, num2) {
    console.log(num1 * num2)  //SPIT THE RESULT OF THIS EXPRESSION OUT OF THE FUNCTION

    return "DoodleBob"
}
//How can we grab what a function spits out?

//THE FUNCTION CALL EVALUATES TO THE RETURN STATEMENT

//console.log(doesMath(9, 9))



//If we don't specify what the function is going to return, it will return undefined
//EVERY SINGLE FUNCTION IN JS has a return statement, but it is undefined unless otherwise specified

//But not only does the return spit stuff out, but also lets JS know that the function can end

//console.log(`The result of the math equation is: `)


//Return yelled name

function yellName(name) {
    let yelledName = name.toUpperCase();

    return yelledName
}

let kingUpperCase = yellName("King");

//console.log(kingUpperCase);

/*
write a function that takes in two parameters which would be two separate words 
and it would flip the first letter of each word. 
For example, if you put in 'monkey' and 'business' it would return bonkey musiness
*/

function flipFirstLetters(word1, word2) {
    //Get the first letter of each word
    let word1letter = word1[0] //First letter of word one
    let word2letter = word2[0] //First letter of word two

    let endOfWord1 = word1.slice(1, 6); //Create a NEW string from a specified portion of another string
    let endOfWord2 = word2.slice(1);

    console.log(word2letter + endOfWord1, word1letter + endOfWord2)
    //console.log("ORIGINALS", word1, word2)
}
// flipFirstLetters("monkey", "business");

// flipFirstLetters("Food", "Google");

// flipFirstLetters("Cheese", "Toastie");

//In javascript strings cannot be changed

//Shorter version of that ^^
function flipFirstLetter(word1, word2) {
 
    console.log(word2[0] + (word1.slice(1)), word1[0] + (word2.slice(1)))
   
}
   
//flipFirstLetter("monkey", "business")


//CONDITIONALS
//Control flow is the order in which instructions are executed
//Ex: if this, do this. If that, do that

//Two control structures which allow us to modify the flow of a program
// 1. Conditionals
// 2. Loops

//Conditionals
// - IF statements, ELSE IF statements, ELSE statements

/*
SYNTAX:

if (condition to be true) {
    CODE TO BE EXECUTED
} else if (another condition) {
    CODE TO BE EXECUTED
} else {
    CODE TO RUN IF NONE OF THE ABOVE CONDITIONS ARE TRUE
}

YOU DONT NEED TO CHAIN THEM, BUT YOU CAN IF YOU WANT TO

YOU CAN ONLY HAVE: 1 if statement and 1 else statement
BUT you can have as many else if statements as you want
*/

let color = "blue";

// if (color === 'pink' || color === 'Pink') {
//     console.log("Yay pink!"); //Will only run if the condition is true
// } else if (color == 'blue') {
//     console.log("OMG blue");
// } else if (color === "yellow") {
//     console.log("yellow.")
// } else {
//     console.log(`You chose: ${color}`);
// }

//IF ONE OF THESE CONDITIONS IS TRUE, js will run its code and it won't evaluate
//ANYTHING else
//These conditions are CHAINED together


//THE IF statement creates a block or a chain of conditionals
//THESE are two seperate blocks
//They will both run if the color is blue
// if (color === 'blue') {
//     console.log('blue')
// } 

// if (color[color.length - 1] === 'e') {
//     console.log("Ends in e")
// }

//THIS ONE is chained and so only one will run if the color is blue
// if (color === 'blue') {
//     console.log('blue')
// } else if (color[color.length - 1] === 'e') {
//     console.log("Ends in e")
// } else {
//     console.log("Dude what color are you talking about")
// }


//Write a function that takes in two params
//The first is a name and the second is whisper or yell
//Based on the second parameter console log the name whispered or yelled

function whisperOrYell(name, speakingVoice) {
    if (speakingVoice === 'whisper') {
        console.log(name.toLowerCase());
    } else if (speakingVoice === 'yell') {
        console.log(name.toUpperCase());
    } else {
        console.log("BOO");
    }
}

whisperOrYell('Greg', 'whisper');

whisperOrYell('Robert', 'yell');

whisperOrYell('Mike Jones', 'yell');

whisperOrYell('goobles', 'mary');

