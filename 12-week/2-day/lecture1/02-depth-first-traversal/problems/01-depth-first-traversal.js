/*
Write a function called printDepthFirst that will traverse the given graph
depth-first, printing each node when visited exactly once, on a newline.

Hint: How can you use your code from the breadth-first traversal to get a head
start writing your depth-first traversal?
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printDepthFirst(start) {
  // set up stack, place starting node inside
  // const stack = [start];
  // const visited = new Set();
  // while (stack.length) {
  //   const num = stack.pop();
  //   if (visited.has(num)) continue;
  //   visited.add(num);
  //   console.log(num);
  //   for (let neighbor of adjList[num]) {
  //     stack.push(neighbor);
  //   }
  // }


  const stack = [start];
  const visited = new Set();
  visited.add(start)
  while (stack.length) {
    const num = stack.pop();
    console.log(num);
    visited.add(num);
    for (let neighbor of adjList[num]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}

// console.log("First Test:")
// printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
//                     // One possible solution:  3, 4, 6, 5, 2, 1
// console.log("Second Test:")
// printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
//                     // One possible solution:  6, 4, 5, 2, 3, 1
// console.log("Third Test:")
// printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
//                     // One possible solution:  4, 6, 5, 2, 3, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printDepthFirst;
