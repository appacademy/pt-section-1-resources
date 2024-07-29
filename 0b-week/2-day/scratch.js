//Control flow - We can control in what directions the program goes
//Two control flow structures: conditionals and loops

//Two kinds of loops - FOR and WHILE


//WHILE LOOPS - Will execute code for as long as a condition remains true

/* 

SYNTAX - 

while (condition) {
    CODE TO EXECUTE WHILE CONDITION IS TRUE

    //Some piece of code that will push it towards ending the loop
    //If we don't have end loop expression we will create an infinite loop
}
*/
//If you ever need to stop an infinite loop you can run ctrl c

// while (true) {
//     console.log('King')
//     //This will be infinite
// }
//Generally there is a variable outside of the loop that controls the condition
//Every "loop" is an iteration
//WHY USE A WHILE OVER A FOR - You need to access your initial expression outside of the loop
//Generally with a while WE DONT KNOW THE AMOUNT OF ITERATIONS that will occur
// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++; //Loop end expression
// }

// console.log("After looping: ", i)

//FOR LOOPS
//Have 3 sections seperated by SEMICOLONS

/* 
initial expression - A variable that we increment or again just push towards an ending condition
// Init expression is run ONE TIME before the loop starts and NEVER AGAIN

condition - must be true to keep looping
CHECKED ON EVERY ITERATION

end loop expression - does something to get the initial expression to make the condition false
EXECUTED AFTER THE BLOCK OF CODE INSIDE THE CURLY BRACES

for (initial expression; condition; end loop expression) {
    CODE TO REPEAT
}

*/


// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
//console.log("After looping: ", i) This will throw an error


/*
Loop through a string and console log each letter
*/
let cat = "King";

for (let pickles = 0; pickles < cat.length; pickles++) {
    console.log(cat[pickles])
}

//console.log(cat[0]) //Indexing


// Loop through a string and console log each letter capitalized

let cat2 = "King";

for (let pickles = 0; pickles < cat2.length; pickles++) {
    console.log(cat2[pickles].toUpperCase())
}


/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/