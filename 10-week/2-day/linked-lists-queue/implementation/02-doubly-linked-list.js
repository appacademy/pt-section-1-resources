// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;

    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    const newNode = new DoublyLinkedNode(val);
    if (!this.head)
      this.tail = this.head =
        newNode; // if this is the first node, both head and tail should point to it
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  removeFromHead() {
    if (!this.head) return;
    let oldHead = this.head;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    // if there's still at least 1 node in my linked list
    else this.tail = null; // if there's no nodes, I should update my this.tail pointer to null
    this.length--;
    return oldHead.value;
  }

  removeFromTail() {
    if (!this.head) return;
    let oldTail = this.tail;
    if (oldTail.prev) oldTail.prev.next = null // if there's at least 2 nodes in the LL, make the 2nd node's next property point to null
    else this.head = null; // if there wasn't 2 nodes that means we're removing the only node
    this.tail = oldTail.prev;
    this.length--;
    return oldTail.value;
  }

  peekAtHead() {
    return this.head?.value;
  }

  peekAtTail() {
    return this.tail?.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
