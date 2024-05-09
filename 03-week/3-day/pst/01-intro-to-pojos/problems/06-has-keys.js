/*
Write a function called hasKeys that takes in an object and an array of
strings. It should return true if all of the strings in the array are keys in
the object.
*/

// Your code here
function hasKeys (obj, arr) {
  let myKeys = Object.keys(obj); // array of keys in obj
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    console.log(key);
    // if (!myKeys.includes(key)) {
    //   return false
    // }
    // if (obj[key] === undefined) {
    //   return false;
    // }
    if (!obj.hasOwnProperty(key)) {
      return false;
    }

  }
  return true;
}

let survey = {
  name: 'Check',
  question: 'Satisfied?',
  choices: ['Yes', 'No']
}
console.log(hasKeys(survey, ['question', 'choices'])); // true
console.log(hasKeys(survey, ['numSubmitted', 'choices'])); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = hasKeys;
} catch {}
