function findPeak(matrix) {
  let highest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[i][k] > highest) {
        highest = matrix[i][k];
      }
    }
  }

  return highest;
}

function findStarts(matrix) {
  let starts = [];

  // Top Row
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      starts.push([0, i]);
    }
  }

  // Bottom Row
  for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
    if (matrix[matrix.length - 1][i] == 0) {
      starts.push([matrix.length - 1, i]);
    }
  }

  // Left except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][0] == 0) {
      starts.push([i, 0]);
    }
  }

  // Right except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][matrix[0].length - 1] == 0) {
      starts.push([i, matrix[0].length - 1]);
    }
  }

  return starts; // [[row, col], [row, col]]
}

function findNeighbors(node, matrix) {
  // Don't forget to include diagonal neighbors!!!

  const res = [];

  const [row, col] = node;
  const height = matrix[row][col];

  // BRUTE FORCE/NAIVE APPROACH (start)
  //   // top neighbor
  //   if (row - 1 >= 0 && Math.abs(height - matrix[row - 1][col]) <= 1)
  //     res.push([row - 1, col]);
  //   // top right neighbor
  //   if (
  //     row - 1 >= 0 &&
  //     col + 1 < matrix[0].length &&
  //     Math.abs(height - matrix[row - 1][col + 1]) <= 1
  //   ) res.push([row - 1, col + 1])
  //     return res;

  // Nested For Loops
  for (let i = row - 1; i <= row + 1; i++) {
    if (i < 0 || i >= matrix.length) continue; // checking for valid row index
    for (let j = col - 1; j <= col + 1; j++) {
      if (j < 0 || j >= matrix[0].length) continue; // checking for a valid col index
      if (Math.abs(height - matrix[i][j]) <= 1 && !(i === row && j === col))
        res.push([i, j]);
    }
  }

  return res;
}

function pathTraversal(node, matrix, visited, peak) {
  const queue = [node]; // 1. - Set up queue with starting node
  visited.add(String(node)); // 2. visited set already created, but add start to it

  while (queue.length) {
    // 3.
    const curr = queue.shift(); // 4. Dequeue first node
    const [currRow, currCol] = curr;

    if (matrix[currRow][currCol] === peak) return true; // 5. DO THE THING - Check if we've reached the peak in this case

    let neighbors = findNeighbors(curr, matrix);

    neighbors.forEach((neighbor) => {
      const stringified = String(neighbor);
      if (!visited.has(stringified)) {
        // 6. Use the findNeighbors helper function to get neighbors, check for unvisited neighbors
        visited.add(stringified);
        queue.push(neighbor);
      }
    });
  }

  return false;
}

function identifyPath(mountain) {
  // Find the peak
  const peak = findPeak(mountain);
  // Find the starts
  const starts = findStarts(mountain);
  // set up visited set to pass into pathTraversal helper func
  const visited = new Set();
  // Traverse from the starts and try to get to the top
  for (let i = 0; i < starts.length; i++) {
    const start = starts[i];
    if (pathTraversal(start, mountain, visited, peak)) return start;
  }
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
