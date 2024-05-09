/*
Define a function called variableAsKey that accepts an object parameter and a
string parameter and returns the value from the object at the key of the string
passed in.
*/

// Your code here
const variableAsKey = (obj, str) => {
  return obj[str];
};

// const variableAsKey = (obj, str) => obj[str];


// Example:
const obj = {
  first: "1",
  second: 2,
  third: "three"
}
const str = "first";
console.log(variableAsKey(obj, str)); //=> "1"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = variableAsKey;
} catch {}
