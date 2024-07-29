//Closures
//A pretty common interview question
//A function that uses or manipulates variables declared 
//in the function its inside of

//Using the variable
// function outerFunc() {
//     let fruit = 'apple';

//     function innerFunc() {
//         console.log(fruit)
//     }

//     innerFunc()
// }

// outerFunc()

// function numberStuff() {
//     let number = 10;

//     function addToNum() {
//         number += 1;
//         console.log(number)
//     }
    

//     return addToNum;
// }

//number++ Number doesn't exist outside of the closure so we cant manipulate it out here
// let addToNumOutside = numberStuff(); //The return statement is the addToNumOutside function

// addToNumOutside();
// addToNumOutside();
// addToNumOutside();

//One main reason why we use closures is when we have a variable that we only want to be manipulated in VERY
// specific ways. So we wrap that variable in a function, and then inside that function create more functions
// that manipulate the variable. Then we return those functions and now outside of the closure we can only
// manipulate the variable using those functions

// function storeSocialSecurityNumber() {
//     let ssn = 10;

//     function addFour() {
//         ssn += 4;
//         console.log(ssn);
//     }

//     function minus9() {
//         ssn -= 9;
//         console.log(ssn)
//     }

//     function addAnyNum(num) {
//         ssn += num;
//         console.log(ssn)
//     }

//     return [addFour, minus9, addAnyNum]
// }


//Destructuring
//I want to create two variables, addFour and Minus9 and I'm taking their values from an array
// let [addFourOutside, minus9Outside, addAnyNumOutside] = storeSocialSecurityNumber()

// //let functions = storeSocialSecurityNumber();

// // let addFour2 = functions[0];

// // let minus9 = functions[1];

// addFourOutside();

// minus9Outside();

// addFourOutside();
// addFourOutside();
// addFourOutside();

// addAnyNumOutside(100);


//A super common use of closures is when you have a variable that you want to keep private
//AKA you only want to manipulate it in very speicifc ways

function fruitShop() {
    let fruitList = ["apple", "lemon", "orange"];

    function addFruitToList(fruit) {
        fruitList.push(fruit);
        console.log("Updated fruit list: " + fruitList)
    }

    return addFruitToList;
}


//fruitList.push("Crime Guava") THIS CANT HAPPEN because fruitlist does not exist in the global scope

let addToList = fruitShop(); // We assign addToList to the value of the addFruitToList function

addToList("Guava");

addToList("Watermelon");

addToList("Kumquat");

