//Rest
//Rest parameter will grab the REST of the arguments passed into a function and put them all into an array
//The rest parameter must be the last one

function sum(...nums) {    //(...nums) will grab all arguments passed into the function and put them into an array called nums
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
}

//console.log(sum(5, 6, 7, 8, 9));

//Spread 
//Spread copies items from an array or an object that we can move elsewhere

//Spread creates a deep copy of arrays or objects, but only on the top level. Nested arrays or objects
//will be shallow
//Takes items one by one, copies them, and puts them in a new location

let arr = [1, 2, 3, 4, [true, false]];

let copyArr = [...arr];

arr[0] = 'beep'

arr[4][0] = 'BOO'

//console.log(arr, copyArr)

//Using spread on objects

let cat = {name: 'apples', breed: 'tabby'};

let copyCat = { ...cat, eyeColor: "yellow", age: 1 };

//console.log(copyCat)



function sayHi(person, friend) {
    console.log(`${person} says hi to ${friend}`);
}

let people = ["Greg", 'Ralph'];

//sayHi(...people)

//Destructuring
//A quick way to create variables from values within arrays or objects
//Destructuring creates SHALLOW copies

// let fruit = ["apple", "orange", "lemon", "lime", [1, 2]];

//OLD WAY, TEDIOUS, GROSS
// let appleGuy = fruit[0];
// let orangeGuy = fruit[1];

//ARRAY DESTRUCTURING WAY:
//let [ pickles, jam, potato, , greenbean ] = fruit; //Each of these variables will get their values from the corresponding
//                                                       index in the fruit array

// greenbean[1] = 'BOOOO'

// console.log(greenbean)
// console.log(fruit)

//OBJECT DESTRUCTURING

//DRY - Don't Repeat Yourself
// let bob = { firstName: 'bob', lastName: 'bobert', email: 'bob@bob.com', password: 'password'}

//NOT DRY CODE 
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.password);

// let userFromProfileComponent = { name: 'ralph', age: 107}
// //UGLY AND HARD TO READ
// console.log(userFromProfileComponent.name);
// console.log(userFromProfileComponent.age)


//INSTEAD OF THAT^^^
//We can destructure

//OBJECT DESTRUCTURING
let bob = { firstName: 'bob', lastName: 'bobert', email: 'bob@bob.com', password: 'password'}

//Lets create some tiny crisp variables with bobs info

//Here we're creating each of these variables but their names match the keys
//What if we wanted to create a variable with a different name
//let { firstName, lastName, email, password } = bob;

//ALIASING
let { firstName: firstName, lastName: bobsLName, email, password } = bob;

//console.log(firstName); //Doesn't exist because we gave it an alias of 'bobsFName'


