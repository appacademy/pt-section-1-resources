//Callbacks
//Using a function as an argument
//Functions are first class objects which allows us to store them inside of variables, and this also
//allows us to pass them into other functions as arguments

//Advanced Array Methods like .map(), forEach(), and .filter() all accept callback functions as parameters

//If you have a function that has a parameter that is being used as a function (expecting a func) that is a callback

//REMINDER - helper functions and callback functions ARE REGULAR FUNCTIONS its just how we are using them
// that gives them a different

//Helpers are static used when it will never change, Callbacks are dynamic use when you may want to pass in different funcs

//Helper functions are called inside of functions (but you're always calling the same one)
//ex:

//Takes in two numbers and adds them together
function sum(num1, num2) {
    return num1 + num2;
}
//Iterates through array and calls sum on each element
function addsTwoToArrNum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(sum(arr[i], 2)) //THIS IS A HELPER FUNCTION BECAUSE IT NEVER CHANGES
    }

    return result;
}

//Callback functions, however, are passed in as arguments to a function so you can use different functions
//within the outer one
//Ex:

let sayHi = () => {
    console.log('Hello World')
}

let sayBye = () => {
    console.log('Goodbye World')
}

//Lets define a function that "takes in a callback"

function saySomething(callback) {
    console.log("Before callback");

    callback();

    console.log("After callback");
}

//When we call this function we can pass in WHATEVER function we want into the place of "callback"

// saySomething(sayHi) //When passing in a callback WE DO NOT CALL THE FUNCTION because that would pass in the RETURN statement

// saySomething(sayBye) 

let double = (num) => {
    return num * 2;
}

let triple = function (num) {
    return num * 3;
}

function sum(x, y, cb) {
    let sum = x + y;

    let result = cb(sum);

    console.log(result);
}

// sum(2, 2, triple) // Triple as the callback (we are passing the triple function in)

// sum(2, 2, double); //Double as the callback (we are passing the double function in)

//Example with a helper AND a callback

let cookingUp = (name) => {
    console.log(`${name} the rat is cooking up.`)
}

let ratatoulli = () => {
    console.log(`Ratatoulli is served.`)
}

let chickenNGnocci = () => {
    console.log(`Chicken gnocci is served.`)
}

//cookingUp('Guelrmo')

//RATPARTY takes in a callback, and also uses a helper function
let ratParty = function (rat1, rat2, cb) {
    console.log(`${rat1} welcomes you to the rat party!`);

    cookingUp(rat2); //CookinUp is a HELPER function bc it NEVER changes
    //cookingUp is NOT a parameter it is a literal function name so it will never change

    //HERE WE ANNOUNCE WHAT DISH HAS BEEN SERVED FOR THIS RAT PARTY
    cb(); //Here is the callback which will be whatever function we pass in (IT CAN CHANGE)
    //The word cb is a parameter, it is storing a function that we are calling
    //since cb is a parameter is could hold ANY function we want

    console.log(`Woooo parties over we got rat police otw`)
}

// ratParty('Remy', 'Barnacle Boi', ratatoulli) //the ratatoulli function will be the callback for this function call

// ratParty('Remy', 'guerlmo', chickenNGnocci)// the chickenGnocci function will be the callback for THIS function call


//REST - pattern that grabs the "rest" of the arguments
// Its most often used as a parameter but can also be used for destructuring to put the rest of the values into an array

//The rest parameter grabs the rest of the arguments and PUTS THEM INTO AN ARRAY
function sayHiToFriends(person, mom, ...friends) {
    console.log(`${person}'s mom ${mom} says hi to all their friends: `);

    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i]);
    }
}

// sayHiToFriends('Greg', 'Laura', 'Remy', 'Gerulmo', 'Borble');
//Gerg will go into the person param, Laura will go into the mom param, and EVERY SUBSEQUENT ARGUMENT goes in to friends

//SPREAD operator 
//Makes copies of items from an iterable (object/array) and then moves them to another place
//The spread operator creates SHALLOW copies

let arr = [1, 2, 3, 4];

let copyArr = [0, ...arr, 5, 6, 7];

// console.log(copyArr)

//Copying reference types
//Reference vs Primitive data types
//Shallow vs Deep copies
//Shallow copy - all variables containing the copies point to the same place in memory, so if you change one you change them all
//Deep copy - points to its own place in memory so nothing else can effect it

let fruit = ["apple", "grape", "watermelon", ["orange", "lemon", "lime"]];

let copyFruit = [...fruit]; // ANY REFERENCE TYPES that have been copied will be pointing to the same place in mem.

fruit[3][1] = 'pomegranate';

console.log(copyFruit, fruit);

//Destructuring Objects
//Its just a way to create variables from values of objects super quickly
let cat = { name: "King", age: 13, eyeColor: "Yellow", mean: true, petty: true }

//OLD way to create variables
//Gets very tedious very quickly
//IS not DRY (dont repeat yourself)
let kingsName = cat.name;
let kingsEyeColor = cat.eyeColor;

//Destructuring way:
//let {variables} = object
//The only way to find values within an object is to use the key names so by default
// our variables must share the same name as the keys we are trying to access

//If we want our variable to have a different name than the key we're accessing we must use ALIASING

//let { keyName: newName } = object

let { name, eyeColor, petty: isKingPetty } = cat;
//name = "King", eyeColor = "yellow", petty = true

console.log(name, eyeColor, isKingPetty)