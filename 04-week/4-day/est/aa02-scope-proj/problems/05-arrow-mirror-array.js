/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const arrowMirrorArray = (array) => {
  // const newArray = [...array];
  // const newArray = array.slice();
  const newArray = [];
  array.forEach(el => newArray.push(el))

  // for (let i = array.length - 1; i >= 0; i--) {
  //   let el = array[i];
  //   newArray.push(el)
  // }
  newArray.push(...array.slice().reverse())

  return newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
