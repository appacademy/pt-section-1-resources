class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;

// console.log(a);

//Boilerplate Binary Search Tree
/*
        4
      /   \
     2     6
    / \   / \
   1   3 5   7
*/

const binarySearch = (data, target) => {
  let start = 0;
  let end = data.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log({ start, end, mid });

    if (data[mid] === target) return mid;

    if (data[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 23, 34, 45, 56, 67, 78, 789];
console.log(binarySearch(arr, 12));
