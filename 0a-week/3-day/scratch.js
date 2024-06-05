//Basic data types of Javascript

//Numbers: 1, 2454365, 234.5, -234

//Strings: "Hey!!!", '34566@$%@Howdy', `GreetingS!!`

//Booleans: true false

//We gave it a value, it has a value of nothing
//Null: null

//That something was never given a value
//Undefined: undefined

//Lists of comma seperated items wrapped in square brackets
//You can put any data types in an array
//Arrays: [1, 2, 4, true, false, "Hey!", [], {}]

//Collection of related data using key value pairs in curly brackets
//Objects: { key: value }
//{ name: "King", age: 12}

//Variables - A box, with a name, in which we store data
//To create a variable we begin with the keyword let
//Then we name the variable
//Then we assign it a value using an =
//JS doesn't care about the variables name, it just uses it to find what is
// inside of the variable

let catsName = "King";

//console.log(catsName);

//Declaring vs. initializing

//Created an empty variable
let fruit;

//This will console log undefined as we never assigned it a value
//console.log(fruit);

//Declaring a variable is the let varName part

//Initialization is when we declare a variable and assign it a value on the same line

//Assignment is when we use the equal sign to give something a value


//Reassignment

let cat = "King";

//console.log(cat);


//We do not use let
//We are reassigning the value to uppercase

cat = "KING";

//console.log(cat)

//camelCase is the naming convention that JS uses

let numberVar = 12345;

let stringVar = "Anything";

let boolVar = true;

let nullVar = null;

let undefinedVar;

//Reassigning the variables
boolVar = false;

numberVar = "NUMBER"

//Comparison operators - how we compare stuff
//They spit out a true or a false

//  >, <, >=, <= ,        ==     ===

//console.log(8 <= 9);

//Double equals (Loose equality) ==
//Do the values equal eachother, doesn't care about data type
//console.log(5 == 5);
//console.log('5' == 5);

//Triple equals (Strict equality) ===
//Javascript is pretty smart
// The values and the data types equal eachother

//console.log('5' === 5);
//These will not equal eachother

//Arithmetic operators
// +, -, *, /
//    % Modulo
//Modulo - Divides two numbers and gives you the remainder

//console.log(17 % 5)

//Logical Operators - Allow us to chain comparison operators together
//  ! (not, bang)     && (and)     || (or)

// ! - Will flip a value to the opposite value
//You put the ! in front of the value

//console.log(!false)

//&& - Requires both expressions to be true, for it to return true

//console.log(5 > 3 && 5 > 2) //true

//console.log(5 > 3 && 5 > 10) //false

// ||   - Only requires one to be true
// only returns false if both are false

//console.log(5 > 3 || 5 > 2) //true

//console.log(5 > 3 || 5 > 10) //true

//console.log(5 < 3 || 5 > 10) // false

//String data type:

//let string = "Hello World!";

//Concatenation - Smushing two strings together
//You can do it with two or more strings or variables that contain strings
//We concatenate with the +

//JS will smush them together exactly as they are
//console.log("Hello" + ' ' + "World");

//Concat with variables
//console.log("My cat says " + string);

//console.log("Hey" + userName + "we miss you!");

//Javascript stores the length of every string in a length property

let string = "Hello World!";

console.log(string.length); //12

//To access an individual letter in a JS string
//we can use something called indexing
//WE ALWAYS USE SQUARE BRACKETS WHEN INDEXING
//Indexes start at 0

console.log(string[4]); // o

console.log("Hey"[2]); //y

console.log(string.indexOf('W')) //6
console.log(string.indexOf('w')) //Returns -1 because it can't find lowercase w
console.log(string.indexOf('o'))
