// let arr1 = [1, 2 ,3 ,4];

// let arr2 = arr1;

// let arr3 = arr1;

// let arr4 = arr3;

// arr1[1] = 'barnacle';

// arr2[3] = 456;

// arr3.push('rat');

// console.log(arr1, arr2, arr3, arr4);

//^^^These get manipulated because we're assigning the new variables to 
//existing ones (variables that contain reference types)

// let arr1 = [1, 2 ,3 ,4];

// let arr2 = [1, 2 ,3 ,4];

// arr1[1] = 'barnacle'

// console.log(arr1, arr2)
//^^ These do not get manipulated because THEY ARE NOT assigned to variables

//THIS EFFECT DOESNT HAPPEN WITH PRIMITIVE/IMMUTABLE DATA TYPES

// let num1 = 45;

// let num2 = num1;

// num1 += 7

// console.log(num1, num2)

//OBJECTS

let mikeJonesRat = {
    name: 'cheese',
    age: 0o1,
    hair: 'afro',
    occupation: 'cook',
    friends: ['Mike Jones', 'batman', 'turtles', 'Remy', 'tom cruise', 'Biggie Smalls'],
    mean: true,
    cookinUp: function(ingredients) {
        console.log(`${mikeJonesRat.name.toUpperCase()} whipped up a great meal with ${ingredients}.`)
    },
    hello: (buddy) => {
        for(let i = 0; i < 5; i++) {
            console.log("Nice to ya")
        }
        console.log('SO GOOD TO SEE YA ' + buddy)
    },
    lying: () => {
        if (mikeJonesRat.mean) {
            console.log("I'm very nice")
        } else {
            console.log('No, my gosh I am not mean!')
        }
    }
}

//console.log(mikeJonesRat);

//METHODS - A method is simply a function that belongs to an object
//To create a method you add a key and the value is a function

//How do we call a method?
// objectName.methodName()
//objectName["methodName"]()

// mikeJonesRat["cookinUp"]('pear, garlic, and broccoli')

// mikeJonesRat.hello("King")

// mikeJonesRat.lying();


// let outerHello = mikeJonesRat.hello;

// outerHello("BuddyOlePal")

//Object.keys(objectName), Object.values(objectName), Object.entries(objectName)

console.log(Object.keys(mikeJonesRat))
console.log(Object.entries(mikeJonesRat))
