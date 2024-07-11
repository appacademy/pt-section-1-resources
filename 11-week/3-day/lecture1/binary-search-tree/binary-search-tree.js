// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    let curr = this.root;

    while (curr) {
      if (curr.val === val) return true;
      if (val > curr.val) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // initialize a queue with the root node
    const queue = [this.root];

    // while the queue is not empty
    while (queue.length) {
      // print and remove first node in queue
      const first = queue.shift();
      console.log(first.val);
      // if the node has a left node
      // push the left node on the back of the queue
      if (first.left) queue.push(first.left);
      // if the node has a right node
      // push the right node on the back of the queue
      if (first.right) queue.push(first.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // initialize a stack with the root node
    const stack = [this.root];

    // while the stack is not empty
    while (stack.length) {
      // print and remove first node in stack
      const first = stack.pop();
      console.log(first.val);
      // if the node has a left node
      if (first.left) stack.push(first.left);
      // push the left node on the back of the stack
      // if the node has a right node
      // push the right node on the back of the stack
      if (first.right) stack.push(first.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
