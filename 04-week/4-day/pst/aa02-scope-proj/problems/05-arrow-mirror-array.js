/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const arrowMirrorArray = (array) => {

  // let res = array.slice();
  let res = [...array, ...array.slice().reverse()]

  // for (let i = 0; i < array.length; i++) {
  //   let el = array[i];
  //   res.push(el);
  // }

  // for (let i = array.length - 1; i >= 0; i--) {
  //   let el = array[i];
  //   res.push(el);
  // }

  return res;

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
