//Array methods
//Methods are functions they're a just little different
//Instead of just calling it funcName()

//methods are called after something  string.toUpperCase()

//Array methods are methods that called on arrays

//push, pop, shift, unshift, splice, slice, split, and join

let fruit = ["Apple", "Cherry", "Goji", "Mango", "Lemon", "Lime"];

//PUSH - Arguably the most commonly used array method
//Push adds an item(s) to the end of an array

//Push returns the length of the array console.log(fruit.push("Cantaloupe", "Banana"))
let newFruitlength = fruit.push("Cantaloupe", "Banana")
//console.log(fruit)
//console.log(newFruitlength)

//POP - Removes the LAST item in an array and returns the item it removed

let lastFruit = fruit.pop()
//console.log(fruit)

//console.log(lastFruit);

let emptyArr = [];

//console.log(emptyArr.pop()) //undefined

//UNSHIFT - Adds items to the beginning of the array

fruit.unshift("Strawbies");
//console.log(fruit)

//SHIFT - removes the FIRST item in an array

let firstItem = fruit.shift();
console.log(fruit)

//console.log(firstItem)

//SPLICE - Remove, replace, or add items to the original array
fruit.splice(1, 1); // Remove cherry start at index 1 and remove 1 item

fruit.splice(3, 0, "Peach", "Pear")

fruit.splice(3, 2)

console.log(fruit)
//SLICE - We read mdn go look at it

//Split and Join

//Split is a STRING method
//Split takes a string and splits it into baby strings based on a pattern and puts the baby strings
//into an array

//Most commonly used to iterate over a string

let sentence = "The quick brown fox jumps over the lazy dog.";

let stringArr = sentence.split(' ');

for (let i = 0; i < stringArr.length; i++) {
    console.log(stringArr[i])
}

//JOIN - concatenates an array

console.log(stringArr.join('-'))