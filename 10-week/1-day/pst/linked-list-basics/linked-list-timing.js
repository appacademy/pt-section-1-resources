const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let n = 10000;

let ll1 = new LinkedList();

console.time("LL: addToHead");
for (let i = 0; i < n; i++) {
    ll1.addToHead(i);
}
console.timeEnd("LL: addToHead")

let ll2 = new LinkedList();
console.time("LL: addToTail");
for (let i = 0; i < n; i++) {
    ll2.addToTail(i);
}
console.timeEnd("LL: addToTail")

let dll = new DoublyLinkedList();
console.time("DLL: addToHead");
for (let i = 0; i < n; i++) {
    dll.addToHead(i);
}
console.timeEnd("DLL: addToHead")

let dll2 = new DoublyLinkedList();
console.time("DLL: addToTail");
for (let i = 0; i < n; i++) {
    dll2.addToTail(i);
}
console.timeEnd("DLL: addToTail")
