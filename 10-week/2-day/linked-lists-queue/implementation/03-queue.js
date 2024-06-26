const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
       const newNode = new SinglyLinkedNode(val);
       if (this.tail) this.tail.next = newNode
       else this.head = newNode;
       this.tail = newNode;
       return ++this.length;
    }

    dequeue() {
        if (!this.head) return null;
        let oldHead = this.head;
        if (oldHead.next) this.head = oldHead.next
        else this.head = this.tail = null;
        this.length--;
        return oldHead.value;
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
