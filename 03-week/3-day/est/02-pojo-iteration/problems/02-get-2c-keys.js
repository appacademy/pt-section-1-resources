/*
Write a function called get2CKeys(obj) that iterates through the object and
returns an array of the object's keys that have values with at least 2 'c's.
*/

// Your code here
const get2CKeys = (obj) => {
  const res = [];
  for (let key in obj) {
    let val = obj[key];
    let counter = 0;
    for (let i = 0; i < val.length; i++) {
      let letter = val[i]
      if (letter === "c") {
        counter++
      }
    }
    if (counter > 1) {
      res.push(key)
    }
  }
  return res;
};

// const obj = {
//   red: 'circle',
//   blue: 'octagon',
//   green: 'square'
// }
// console.log(get2CKeys(obj)); // ['red']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = get2CKeys;
} catch {}
