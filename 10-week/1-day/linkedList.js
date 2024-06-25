class LinkedListNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


}

const ll1 = new LinkedList();

const node1 = new LinkedListNode(10);
const node2 = new LinkedListNode("Greg");
const node3 = new LinkedListNode({dog: "Yoshi"})

ll1.head = node1;
ll1.head.next = node2;
ll1.head.next.next = node3;