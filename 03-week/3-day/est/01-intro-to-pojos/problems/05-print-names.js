/*
Write a function called printNames that takes in an array of objects. It should
loop through all of the objects and print the "name" key from each object.
*/

// Your code here

const printNames = (arr) => {
  // for (let obj of arr) {
  //   let value = obj.name;
  //   console.log(value)
  // }
  // arr.forEach((obj) => console.log(obj.name))
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i] // {name: }
    console.log(curr.name);
  }
}

// // Example:
// printNames([
//   { name: "Joey", likes: ["sandwiches"] },
//   { hobby: "tells jokes", name: "Chandler" },
// ]); // prints 'Joey' then 'Chandler'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = printNames;
} catch {}
