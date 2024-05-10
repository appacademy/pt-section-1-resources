/*
Time to practice object destructuring! Practice destructuring objects by
assigning variables to every key-value pair in the object below all in
**one line of code**.

A variable called `color` should evaluate to 'green'.
A variable called `type` should evaluate to 'party'.
A variable called `lights` should evaluate to 'dark'.
*/

let bigObj = { name: 'party', color: 'green', theme: 'dark' }
// Your code here
let {color, name: type, theme: lights } = bigObj;
// const newObj = {...bigObj};
// console.log(newObj)

// let newObj=  {type : "party", lights : "dark"}
// let obj= {...bigObj, ...newObj}
// console.log(obj)

console.log(color);   // 'green'
console.log(type);    // 'party'
console.log(lights);  // 'dark'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    color,
    type,
    lights,
  };
} catch {}
