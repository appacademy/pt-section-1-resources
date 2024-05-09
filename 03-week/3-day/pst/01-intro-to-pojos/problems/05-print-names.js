/*
Write a function called printNames that takes in an array of objects. It should
loop through all of the objects and print the "name" key from each object.
*/

// Your code here
function printNames (arr) {
  // const res = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i]
    // let keys = Object.keys(el);
    // console.log(keys)
    console.log(el["name"]);
    // console.log(el.name);
  }

};

// Example:
printNames([
  { name: "Joey", likes: ["sandwiches"] },
  { hobby: "tells jokes", name: "Chandler" },
]); // prints 'Joey' then 'Chandler'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = printNames;
} catch {}
