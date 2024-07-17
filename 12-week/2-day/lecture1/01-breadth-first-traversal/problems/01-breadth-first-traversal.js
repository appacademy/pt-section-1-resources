/*
Write a function called printBreadthFirst that will traverse the given graph
breadth-first, printing each node when visited exactly once, on a newline.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

function printBreadthFirst(start) {
  // NOT CHECKING IF WE'VE VISITED A NODE BEFORE ADDING TO Q
  //   // step 1 - create q, add starting node
  //   const q = [start];
  //  // step 2 - set up a visited set
  //   const visited = new Set();
  //  // while there are nodes in the queue....
  //   while (q.length) {
  //     // step 3 - shift off the first node
  //     let first = q.shift();
  //      // if we've already visited it, continue
  //     if (visited.has(first)) continue;
  //     // if we haven't visited, add it to the visited set
  //     visited.add(first)
  //     // DO THE THING
  //     console.log(first);
  //     // Add neighbors to the queue
  //     for (let neighbor of adjList[first]) {
  //       q.push(neighbor)
  //     }
  //   }


  // CHECKING TO SEE IF A NEIGHBOR NODE HAS BEEN VISITED BEFORE ADDING TO THE QUEUE
  // step 1 - create q, add starting node
  const q = [start];
  // step 2 - set up a visited set
  const visited = new Set();
  visited.add(start);
  // while there are nodes in the queue....
  while (q.length) {
    // step 3 - shift off the first node
    let first = q.shift();
    // DO THE THING
    console.log(first);
    // Add neighbors to the queue
    for (let neighbor of adjList[first]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        q.push(neighbor);
      }
    }
  }
}

// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                       // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                       // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                       // One possible solution:  4, 3, 5, 6, 2, 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printBreadthFirst;
