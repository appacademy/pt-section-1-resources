//INTRO TO OBJECTS
//A collection of (normally) related items stored in key/value pairs
//Stores data very similarly to an array, every key/value pair is separated by a comma

//Objects are denoted by {}

/* 
We use the keys to get the values

Keys are very similar to variables, they're just a label with which we can find a value

Values can be ANY data type!

OBJECTS DO NOT HAVE INDICES - Objects do not have any inherent order
                              Also relates to why we cannot change keyNames

SYNTAX

{
    keyName: value,
    otherKeyName: otherValue
}
*/

//Sample object
// let cat = {
//     name: "King",
//     age: 13,
//     likesTreats: true,
//     toys: ["sushi", "mouse", "string"]
// }

//console.log(cat);

//How could we access individual values from an object
//We have two methods: bracket and dot notation

//Bracket notation -   objectName["keyName"]

// console.log(cat["name"]); //King

// //Dot notation - objectName.keyName

// console.log(cat.age) // 13

//Console log sushi
//console.log(cat.toys[0])

// let cat = {
//     name: "King",
//     age: 13,
//     likesTreats: true,
//     toys: ["sushi", "mouse", "string"]
// }

//Reassigning object values
//We can again use bracket or dot notation
//VERY similar to variable reassignment

//cat.likesTreats = false; //DOT NOTATION

//cat["likesTreats"] = false; //BRACKET NOTATION

//cat.name = "Kingifer"

//ADD ITEMS TO AN OBJECT
//Its again just like reassignment
//We can again use bracket or dot notation

//cat.color = "black and white";

//console.log(cat)

//You cannot change KEYS, you must instead delete them and add a new one

//To delete a key (key/value pair)  -> delete objectName.keyName ||  delete objectName["keyName"]

// delete cat.toys

// console.log(cat)

//How add another toy -> toys is an array

// let cat = {
//     name: "King",
//     age: 13,
//     likesTreats: true,
//     toys: ["sushi", "mouse", "string"]
// }

// cat.toys.push("feather");

// console.log(cat);

// cat.nickName = cat.name + 'y';

// cat["veryCute"] = true

// console.log(cat)



//Function declaration syntax
/* 
function funcName() {
//Code
}
funcName()
*/

//Function expression syntax
//We are able to do this because functions are considered first class objects
//It can live inside of a variable
/* 

let funcName = function() {
    //CODE
}
funcName()
*/

// let hello = function(name) {
//     console.log("Hey, " + name)
// }

// hello("King")

// let cat = {
//     name: "King",
//     age: 13,
//     likesTreats: true,
//     toys: ["sushi", "mouse", "string"],
//     meow: function() {
//         console.log("meowwwww my name is " + cat.name)
//     }
// }

//We can put functions into objects, but then we call them something different
//We call them METHODS

//cat.meow();

//Way to check if a key exists in an obj

//IN operator - tells us if a key exists within an object with a boolean

// console.log("meow" in cat)

// console.log("paws" in cat)

//console.log("admin" in user)

//FOR LOOPS

let cat = {
    name: "King",
    age: 13,
    likesTreats: true,
    toys: ["sushi", "mouse", "string"],
    meow: function() {
        console.log("meowwwww my name is " + cat.name)
    }
}

//We can use for ... in loop to iterate over the KEYS of an obj
/* 
if we're looping through the keys, and we can use the keys to access values
we can then iterate through the values

//SYNTAX
KEY can be named anything but it will ALWAYS contain the keys
for (let KEY in objectName) {
    //Code to repeat
}
*/
//When you want to use a variable to access a property within an obj, you cannot use dot notation
//you have to use bracket notation

// for (let key in cat) {
//     //console.log(key) THIS GIVES US THE KEYS
//     //KEY is a variable, it exists OUTSIDE of the object
//     //cat.key is a different thing, its going into cat and looking for a key property

//     console.log(cat[key]) //ex: cat["name"], cat["age"], etc
//     console.log(cat.key) // ex: cat["key"] or cat.key 
// }

let car = {
    make: 'BMW',
    model: 'M3',
    color: 'blue',
    year: 2024,
    rust: true,
    transmission: 'manual',
    mileage: 17000,
    features: ["apple carplay", "rats", "backup cam", "heated/leather seats", "jacuzzi"]
}

console.log(car.features[4]) // jacuzzi