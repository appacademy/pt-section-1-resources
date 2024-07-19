# Traversing the Matrix - 2D Array Graphs

## Review: Solving Graph Problems

Most graph problems can be solved following these 3 steps:

1. Identify and define the type of graph
2. Implement the getNeighbors function
3. Traverse the graph

## The Matrix as a graph

We're going to continue to solve graph problems with this approach even if the graph is a matrix.

A matrix is a different way of representing a graph: as a two-dimensional (2-D) array. It represents similar relationships across data as an adjacency list, but the relationships are just represented in a different structure. The matrix includes **nodes**, which are represented as _elements_ within the 2-D array, and **edges**, which are represented as _adjacent nodes_ within the 2-D array.

Just as a node in an adjacency list can represent some real-world object or data (such as a person in a social network), each node in a matrix also represents real-world data and the relationships across pieces of data. It could be terrain on a game map (land: 1, water: 0), pixel colors in an image, distances between locations, or elevation data. The key is that the arrangement of these values creates connections between cells based on their positions.

### Benefits of 2D Arrays

- **Intuitive representation**: They visually map the relationships between elements based on their positions.
- **Efficient access**: Retrieving or modifying specific elements is a breeze using their `row` and `column` indices.
- **Wide range of applications**: 2D arrays are fundamental for various problems involving grids, images, matrices, and more.

## Applying the 3 Steps to Matrix Problems

### 1. Identify and define the type of graph

Once you've identified a graph problem as being a _matrix_ graph problem, you should immediately consider the following questions:

- What is the problem asking you to do?
- What does the matrix represent?
- What does each node represent?
- What relationship do the edges represent?
- What is considered a valid neighbor, in the context of this problem?
- Is this a search or traversal problem?
- Does this require a depth-first or breadth-first approach?

### 2. Implement the `getNeighbors` function

1. Identify Neighboring Cells
   - Since the connections in a matrix graph are represented by the values within the matrix, we can identify neighbors by looking at the surrounding cells of the target node.
     - In some problems, a node may have 4 neighbors: up, down, left, and right. In other problems a node may have 8 if we can move diagonally between nodes.
2. Check for Valid Neighbors

   - For nodes on the first row, there's no "up" neighbor. Similarly, for nodes on the last row, there's no "down" neighbor. Likewise, for nodes in the first and last columns, there are no "left" or "right" neighbors, respectively.
   - The problem may have restrictions on what's considered a valid neighbor

### 3. Traverse the Graph

1. Create a queue for a breadth-first traversal (or a stack for a depth-first traversal) and enqueue the starting node
2. Create a set to store visited nodes
3. While the queue is not empty, repeat steps 4-6
4. Dequeue the first node and check if it's been visited
5. If not, mark it as visited and **DO THE THING**
   - You will need to convert the node coordinates array into a string data type first!
6. Put all its neighbors in the back of the queue
