/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Like the built in Array#slice, it should include the
		"start" index and exclude the "end" index. Do not use the built-in Array#slice method.

    If the start index is less than 0, the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should
		slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(1, 3);
    console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

    const slicer2 = dynamicSlice(2, 7);
    console.log(slicer2(['kittens', 'puppies', 'cats', 'dogs'])); // prints [ 'cats', 'dogs' ]

		const slicer3 = dynamicSlice(-10, 2);
    console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]
*/


// ITERATIVE SOLUTION
function dynamicSlice(start, end) {
  return (arr) => {
    return arr.filter((el, i) => i >= start && i < end)
  }
}

// RECURSIVE HELPER FUNCTION IN THE CLOSURE
// function dynamicSlice(start, end) {
//   // Your code here
//   let startPointer = start;
//   return (arr) => {
//     let newArr = [];
//     function recurse() {
//       if (start === end) return newArr;
//       if (start === arr.length) return newArr;
//       if (start < 0) {
//         start = 0;
//         // let target = arr.splice(start, 1)
//         let target = arr[start];
//         newArr.push(target);
//         // console.log(newArr, start);
//         start++;
//         return recurse(arr);
//       } else {
//         // let target = arr.splice(start, 1)
//         let target = arr[start];
//         newArr.push(target);
//         // console.log(newArr, start);
//         start++;
//         return recurse(arr);
//       }
//     }
//     recurse();
//     start = startPointer;
//     return newArr;
//   };
// }

// RECURSIVE CLOSURE
// function dynamicSlice(start, end) {
//   // Your code here
//   const startPointer = start;
//   return function recurse(arr, newArr = []) {
//     if (start === end) {
//       start = startPointer;
//       return newArr;
//     }
//     if (start === arr.length) {
//       start = startPointer;
//       return newArr;
//     }
//     if (start < 0) {
//       start = 0;
//       let target = arr[start];
//       newArr.push(target);
//       start++;
//       return recurse(arr, newArr);
//     } else {
//       let target = arr[start];
//       newArr.push(target);
//       start++;
//       return recurse(arr, newArr);
//     }
//   };
// }

// const slicer = dynamicSlice(2, 7);
// console.log(slicer(["kittens", "puppies", "cats", "dogs"])); // prints [ 1, 2 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicSlice;
} catch (e) {
  module.exports = null;
}
