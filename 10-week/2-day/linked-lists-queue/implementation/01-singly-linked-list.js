// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++;
    return this;
  }

  removeFromHead() {
    let oldHead = this.head;
    if (oldHead) {
      this.head = oldHead.next;
      this.length--;
      return oldHead;
    }
  }

  removeFromTail() {
    if (!this.head) return;

    let curr = this.head;
    let prev;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    if (!prev) this.head = null; // if I never reassigned prev, the LL was only 1 node long
    else prev.next = null; // otherwise I want to reassign the next property on the second to last node

    this.length--;

    return curr;
  }

  peekAtHead() {
    return this.head?.value;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
