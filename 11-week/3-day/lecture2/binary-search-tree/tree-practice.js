const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (rootNode.left) {
    return findMinBST(rootNode.left);
  }

  return rootNode.val;
}

function findMaxBST(rootNode) {
  if (rootNode.right) {
    return findMaxBST(rootNode.right);
  }

  return rootNode.val;
}

function findMinBT(rootNode) {
  let min = rootNode.val;

  if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

  return min;
}

function findMaxBT(rootNode) {
  let max = rootNode.val;

  if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
  if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return 0;
  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}

function balancedTree(rootNode) {
  const q = [rootNode];

  while (q.length) {
    let curr = q.shift();

    if (Math.abs(getHeight(curr.left) - getHeight(curr.right)) <= 1) {
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    } else {
      return false;
    }
  }
  return true;
}

function countNodes(rootNode) {
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function getParentNode(rootNode, target) {
  if (rootNode.val === target) return null;

  let stack = [rootNode];

  while (stack.length) {
    let curr = stack.pop();

    if (
      (curr.left && curr.left.val === target) ||
      (curr.right && curr.right.val === target)
    ) {
      return curr;
    }
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return;
}

function inOrderPredecessor(rootNode, target) {
  // RECURSIVE
  // let pred = null;
  // let found = false;

  // const inOrderTraversal = (node) => {

  //   if (node.left) inOrderTraversal(node.left);
  //   if (node.val === target) {
  //     found = true
  //   }
  //   if (!found) pred = node.val;
  //   if (!found && node.right) inOrderTraversal(node.right);
  // }

  // inOrderTraversal(rootNode);
  // return pred;

  // // ITERATIVE
  let curr = rootNode;
  let stack = [];
  let pred = null;

  while (true) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else if (!curr && stack.length) {
      curr = stack.pop();

      if (curr.val === target) {
        if (!pred) return null;
        return pred.val;
      }
      pred = curr;
      curr = curr.right;
    } else {
      break;
    }
  }
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  let parent = getParentNode(rootNode, target);

  if (parent === undefined) return;

  let targetNode;

  let isLeftChild = false;
  if (!parent) targetNode = rootNode;
  else if (parent.left && parent.left.val === target) {
    targetNode = parent.left;
    isLeftChild = true;
  } else {
    targetNode = parent.right;
  }
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  if (!parent && !targetNode.left && !targetNode.right) {
    return null;
  }
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  else if (!targetNode.left && !targetNode.right) {
    if (isLeftChild) parent.left = null;
    else parent.right = null;
  }
  // Case 2: Two children:
  else if (targetNode.left && targetNode.right) {
    //  Set the value to its in-order predecessor, then delete the predecessor
    let pred = inOrderPredecessor(rootNode, target);
    //  Replace target node with the left most child on its right side,
    deleteNodeBST(rootNode, pred);
    //  or the right most child on its left side.
    targetNode.val = pred;
    //  Then delete the child that it was replaced with.
  }
  // Case 3: One child:
  //   Make the parent point to the child
  else {
    // EDGE CASE FOR WHEN WE'RE DELETING ROOT NODE WITH 1 CHILD
    if (!parent) {
      // If there's no parent, then we're deleting the root
      if (rootNode.left) {
        // If there's only a left subtree, we'll grab the root's predecessor from there
        let pred = inOrderPredecessor(rootNode, target);
        deleteNodeBST(rootNode, pred);
        rootNode.val = pred;
      } else { // else if there's only a right subtree, we need to find the in order successor from there
        let successor = rootNode.right; // initialize successor as the right subtree
        while (successor) { // move as far left as possible and reassign successor to the left-most node
          if (successor.left) successor = successor.left;
          else break;
        }
        deleteNodeBST(rootNode, successor.val);
        rootNode.val = successor.val;
      }
    } else if (targetNode.left) {
      if (isLeftChild) parent.left = targetNode.left;
      else parent.right = targetNode.left;
    } else {
      if (isLeftChild) parent.left = targetNode.right;
      else parent.right = targetNode.right;
    }
  }
}

const a = new TreeNode(10);
const b = new TreeNode(20);
const c = new TreeNode(7);
const d = new TreeNode(6);

const tree = {};

tree.root = d;
d.right = a;
a.left = c;
a.right = b;

console.log("Before:", tree);
deleteNodeBST(tree.root, 6);
console.log("After:", tree);

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
