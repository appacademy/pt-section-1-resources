function getNeighbors(row, col, matrix) {
  const neighbors = [];

// FOR LOOPS!!
  for (let curRow = row - 1; curRow < row + 2; curRow++) {
    if (curRow < 0 || curRow >= matrix.length) continue;
    for (let curCol = col - 1; curCol < col + 2; curCol++) {
      if (curRow === row && curCol === col) continue;
      if (matrix[curRow][curCol]) neighbors.push([curRow, curCol])
    }
  }

 // BRUTE FORCE/NAIVE
  // Check top
  // if (row - 1 >= 0 && matrix[row - 1][col]) neighbors.push([row - 1, col]);
  // // Check top right
  // if (row - 1 >= 0 && matrix[row - 1][col + 1])
  //   neighbors.push([row - 1, col + 1]);
  // // Check right
  // if (matrix[row][col + 1]) neighbors.push([row, col + 1]);
  // // Check bottom right
  // if (row + 1 < matrix.length && matrix[row + 1][col + 1])
  //   neighbors.push([row + 1, col + 1]);
  // // Check bottom
  // if (row + 1 < matrix.length && matrix[row + 1][col])
  //   neighbors.push([row + 1, col]);
  // // Check bottom left
  // if (row + 1 < matrix.length && matrix[row + 1][col - 1])
  //   neighbors.push([row + 1, col - 1]);
  // // Check left
  // if (matrix[row][col - 1]) neighbors.push([row, col - 1]);
  // // Check top left
  // if (row - 1 >= 0 && matrix[row - 1][col - 1])
  //   neighbors.push([row - 1, col - 1]);
  // Return neighbors

  return neighbors;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  const visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If an index contains a 1 and has not been visited,
      if (matrix[row][col] && !visited.has(String([row, col]))) {
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        count++;
        // Initialize a stack with current index
        const stack = [[row, col]];
        // Add stringified version of current index to the visited set
        visited.add(String([row, col]));
        // While stack contains elements
        while (stack.length) {
          // Pop element from stack
          const curr = stack.pop();
          const [currRow, currCol] = curr;
          // Get valid neighbors of current element
          const neighbors = getNeighbors(currRow, currCol, matrix);
          // Iterate over neighbors
          for (let neighbor of neighbors) {
            const stringy = String(neighbor);
            // If neighbor has not been visited
            if (!visited.has(stringy)) {
              // Add neighbor to stack
              stack.push(neighbor);
              // Mark neighbor as visited
              visited.add(stringy);
            }
          }
        }
      }
    }
  }
  // Return island count
  return count;
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
