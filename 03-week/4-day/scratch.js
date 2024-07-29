//Rest, spread, and destructuring!

//REST 

//Functions in JS can accept as many or as few arguments as you want

//Passing more arguments into a function than it expects

//The REST operator (...) allows us to grab the "rest" of the arguments (any additional argument)
//The rest operator must be the last argument

// let sum = (num1, num2) => {
//     return num1 + num2
// }

// console.log(sum(5, 6, 7, 7, 8))

//Using rest (...) THE REST OPERATOR IS IN THE PARAMETERS of a function

//syntax ...parameterName -> will be an array

let sayHiToFriends = (person, mom, ...friends) => {
    console.log(`${mom} says hi to all of ${person}'s friends: `);

    console.log(friends)
    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i])
    }
}

//sayHiToFriends('Greg','Debby', 'jill', 'goobles', 'thorton');

//Spread operator (...) is used with arrays and objects
//Copies arrays and objects
//Spread operator creates a deep copy of arrays and objects

let numArr = [1, 2, 3, 4];

//Copy arrays

let copyArr = [...numArr]; 

//numArr[0] = 9

//console.log(copyArr)

//Deep copy vs a shallow copy
//A deep copy does not point to the same place in memory
//A shallow copy means that there is now another thing pointing to the same place

let newArr = [...numArr, 5, 6, 7, 8];

//console.log(newArr);


//Destructuring - Objects and arrays can be destructured

//OLD WAY TO CREATE VARIABLES FROM ARRAYS

let fruit = ['apple', 'orange', 'lemon', 'lime']

let apple = fruit[0];
let orange = fruit[1];
let lemon = fruit[2];
let limeGuy = fruit[3];


//Array Destructuring syntax: let [variables] = arrayName
//Create four variables apple2, orange2, lemon2, lime2 and get their values from the fruit array'
//For ARRAY destructuring JS assigns the values based on what index the variables are in


let [apple2, orange2, lemon2, lime2] = fruit;

//console.log(orange2)


//OBJECT destructuring: let {variables} = objectName

let cat = {name: 'apples', breed: 'diva'};

//The variables MUST be named the keys in which you want the values of

//We have two new variables name and breed
let { name, breed } = cat;

//Name is its own variable that IS NOT connected to an object (it just got its value from an object)
name = 'pickles' //Reassigning the name variable ONLY
console.log(name)

console.log(cat)

cat.name = 'jerry' //Reassigning the CAT OBJECTS name property


console.log(cat)


let userFromProfileComponent = { firstName: 'bob', lastname: 'bobert', email: 'bob@bob.com', password: 'password'};


//THIS IS GROSS
console.log(userFromProfileComponent.name);
console.log(userFromProfileComponent.lastname)

//INSTEAD DESTRUCTURE INTO TINY VARIABLES

let { firstName, lastname, email, password } = userFromProfileComponent


console.log({} + {})