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
  // // Create a queue and enqueue the starting node
  // const q = [start];
  // // Create a set to store visited nodes
  // const visited = new Set();
  // // While the queue is not empty, repeat steps 4-6
  // while (q.length) {
  //   //Dequeue the first node
  //   const first = q.shift();
  //   if (visited.has(first)) continue;
  //   visited.add(first);
  //   console.log(first);
  //   for (let neighbor of adjList[first]) {
  //     q.push(neighbor)
  //   }
  // }

  // Create a queue and enqueue the starting node
  const q = [start];
  // Create a set to store visited nodes
  const visited = new Set();
  visited.add(start);
  // While the queue is not empty, repeat steps 4-6
  while (q.length) {
    //Dequeue the first node
    const first = q.shift();
    console.log(first);
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
