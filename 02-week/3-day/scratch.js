//Other types of FOR loops:

//Regular for loop

//let arr = ["apple", "pear", "cherry", "lemon"]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

//For .. of
//Only works on arrays and strings
// for (let fruit of arr) {
//     console.log("LOOP TWO",fruit)
// }

//For .. in
//A for .. in loop is used to iterate over the KEYS of an object

//Do ... while
//Almost exactly the same as a regular while except it will execute at least one time
//guaranteed

// do {
//     //CODE TO EXECUTE ONCE AND THEN HOPEFULLY REPEAt
// } while (condition to keep executing it)


//DETERMINING TYPES

// let cat = 'king';

// let catAge = 456;

// let bool = true;

// //typeof operator returns the data type of stuff

// console.log(typeof cat) //string
// console.log(typeof catAge) //number
// console.log(typeof bool) //boolean

// //This can help us prevent JS from doing weird stuff
// if (typeof catAge === 'number') {
//     console.log(catAge + 1000)
// }

// let arr = ["apple", "pear", "cherry", "lemon"]

// // Array.isArray(theArrayToCheck);
// //Will return a boolean

// console.log(Array.isArray(cat));

//Function expressions 

//Assigning a variable to an anonymous function
//And to call the function you use the variable name

let apple = function(fruit2) {
    console.log("apple", fruit2)
}

//apple()


//Helper functions
//Is just a function that happens to be being called in another functions declaration

function doesStuff(name) {
    console.log(`Hi, ${name}`);

    4+4;
    let arr = ["guava"]

    apple(arr[0]);
    /* 
    function(arr[0]) {
    console.log("apple", arr[0])
    }
    */

    return "barnacle"
}

//console.log(doesStuff("pickles"))


// apple("lemon")

//SCOPE -
//Where do things exist and where do things not exist?
//Global, local/function, block scopes
//console.log(dog) Can't access variables above either


//INNER SCOPES CAN ACCESS VARIABLES DECLARED IN OUTER SCOPES
//BUT OUTER SCOPES CANNOT ACCESS VARIABLES DECLARED IN INNER SCOPES

//Global - Can be accessed (exists in) by literally everything
// let dog = "onyx";

// function sayHi(name) {
//     //Name only exists within these curly braces and not outside
//     let fruit4 = "Lime" //Fruit4 ^^
//     console.log(name);
    

//     if (5 > 4) {
//         let barnacle = "barnacle";

//         console.log(fruit4);
//         fruit4 = "Peach"

//         console.log(dog)
//     }
//     console.log(fruit4)


//     for (let i = 0; i < 4; i++) {
//         //Block scope
//         let animal = "ostrich"
//         console.log(barnacle) 
//     }
//     console.log(animal) 
//     //console.log(barnacle) //Trying to access an inner scoped variable from an outer scope
// }

// sayHi("King")
// //console.log(name) //Trying to use name in a scope where it doesn't exist
// console.log(fruit4)

