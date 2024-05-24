/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Your code here
  let res = [];

  arr.forEach(el => {
    if (Array.isArray(el)) {// if the current el is an array
      // recursive case
      // res.push(...flatten(el))
      res = res.concat(flatten(el))
    } else {// if the current el is not an array, just push the val into res
      res.push(el)
    }
  })

  return res;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
