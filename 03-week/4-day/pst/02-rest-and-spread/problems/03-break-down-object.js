/*
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!
*/

// Your code here
function breakDownObj(obj) {
  let keys = Object.keys(obj);
  let vals = Object.values(obj);
  let entries = Object.entries(obj);
  console.log("Entries", entries)
  // console.log("Keys:", keys, "Vals:", vals)
  // return [...keys, ...vals]
  return  [...Object.keys(obj), ...Object.values(obj)];
}

console.log(breakDownObj(
  { name: 'Rupert', age: 5, speak: 'Meow' }
)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ] ['name', 'Rupert', ....]
// console.log(breakDownObj(
//   { location: 'NY', borough: 'Brooklyn' }
// )); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = breakDownObj;
} catch {}
