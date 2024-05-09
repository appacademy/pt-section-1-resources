/*
Write a function called getKeys(obj) that iterates through the object and
returns an array of the object's keys only.
*/

// Your code here
function getKeys(obj) {
  // return Object.keys(obj);
  let newArr = [];
  let myKeys = Object.keys(obj);
  for (i = 0; i < myKeys.length; i++) {
    newArr.push(myKeys[i]);
  }
  return newArr;
}

const obj = {
  first: "1",
  second: 2,
  third: "three",
};
console.log(getKeys(obj)); // [first, second, third]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getKeys;
} catch {}
