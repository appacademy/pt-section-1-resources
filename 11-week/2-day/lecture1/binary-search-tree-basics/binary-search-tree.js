// Do not change this
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
      // if there's no root
      this.root = new TreeNode(val);
      return;
    }

    if (val < currentNode.val) {
      // if the val is less than the curr node
      if (!currentNode.left) {
        // check to see if there's space on the left side of curr node
        currentNode.left = new TreeNode(val); // if there's space, insert
        return;
      } else {
        this.insert(val, currentNode.left); // if not, recurse down the left side
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
        return;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    let currNode = this.root;

    while (currNode) {
      // check root val
      // if it's the val we're looking for, return true,
      if (currNode.val === val) return true;
      // else
      // if val is greater than root, move right down the bst
      if (val > currNode.val) {
        currNode = currNode.right;
      } else {
        // if val is less than root, move left down the bst
        currNode = currNode.left;
      }
    }
    // if we hit a leaf/end node and it's not our val, return false
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
      if (first.left) queue.push(first.left);
        // push the left node on the back of the queue
      // if the node has a right node
      if (first.right) queue.push(first.right);
        // push the right node on the back of the queue
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // initialize a stack with the root node
    const stack = [this.root];
    // while the stack is not empty
    while (stack.length) {
      // print and remove first node in stack
      let curr = stack.pop();
      console.log(curr.val);
      // if the node has a left node
      if (curr.left) stack.push(curr.left);
      // push the left node on the back of the stack
      // if the node has a right node
      if (curr.right) stack.push(curr.right);
      // push the right node on the back of the stack
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
