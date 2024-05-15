/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function(array, cb1, cb2) {
  // set up a results array
  // // iterate over the input array
  // let newArr = array.filter((el) => {
  //   // check if each element results in true for exactly one of the 2 cb functions
  //   return ((cb1(el) && !cb2(el)) || ( cb2(el) && !cb1(el)))
  // })
  // // return results array
  // return newArr;
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if ((cb1(el) && !cb2(el)) || ( cb2(el) && !cb1(el))) {
      res.push(el);
    }
  }
  return res;
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = xorSelect;
} catch(e) {
  return null;
}
