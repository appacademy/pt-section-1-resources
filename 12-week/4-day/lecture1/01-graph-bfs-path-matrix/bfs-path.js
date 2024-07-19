function findNeighbors(node, matrix) {
  // let row = node[0];
  // let col = node[1];
  const [row, col] = node;
  const neighbors = [];

  // Up
  if (row - 1 >= 0) neighbors.push([row - 1, col]);

  // Down
  if (row + 1 < matrix.length) neighbors.push([row + 1, col]);

  // Left
  if (col - 1 >= 0) neighbors.push([row, col - 1]);

  // Right
  if (col + 1 < matrix[0].length) neighbors.push([row, col + 1]);

  // Your code here
  return neighbors;
}

function bfsPath(matrix, startNode, endValue) {
  // setting up a q for BFS
  const queue = [startNode];
  // still need a visited set to prevent cycling over the same nodes over and over again
  const visited = new Set();
  // problem asked for path as return val
  const path = [];

  // We need to add each node to the visited set, but we need to stringify it first
  // using string interpolation
  // visited.add(`${startNode[0]},${startNode[1]}`);
  // or the string constructor
  visited.add(String(startNode));

  // While we still have nodes in the queue...
  while (queue.length) {
    // shift off the first node;
    const curr = queue.shift();
    // destructuring the row and col for ease (optional)
    const [currRow, currCol] = curr;

    // push the current node into the path
    path.push(curr);

    // check if we've reached the target node -> if so, return the path
    if (matrix[currRow][currCol] === endValue) return path;

    // use neighbors helper function to get an array of neighbor nodez
    let neighbors = findNeighbors(curr, matrix); // [[1, 2], [0, 1], [2, 3]]

    // iterate over the neighbor nodes
    for (let neighbor of neighbors) {
      // stringify so that we can check whether it's already in the `visited` set
      // const stringified = `${neighbor[0]},${neighbor[1]}`
      const stringified = String(neighbor);
      // if we haven't already visited...
      if (!visited.has(stringified)) {
        // add it to the visited set
        visited.add(stringified);
        // and push it into the back of the queue
        queue.push(neighbor);
      }
    }
  }
  // if the q is empty and we never hit the target val, then the target is not in the matrix
  return false;
}

// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]

// EXAMPLE TESTS #2. Tests for bfsPath function

console.log(bfsPath(matrix1, [0, 0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

console.log(bfsPath(matrix1, [2, 2], 11)); // returns a single node if end
// value is located at start node
// [ [ 2, 2 ] ]

console.log(bfsPath(matrix1, [1, 2], 8)); // can handle various start nodes
// and end values
// [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

console.log(bfsPath(matrix1, [0, 0], 17)); // can return false if end value
// is not found
// false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
