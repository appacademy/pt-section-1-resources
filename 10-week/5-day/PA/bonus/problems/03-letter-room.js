/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterBin` class found in the `./problems/02-letter-bin.js` file.


The second class is called `LetterRoom`. `LetterRoom` should hold a queue of
`LetterBin`'s. There are methods on the class to add and remove a bin from the
queue. There are also methods to get the first and last bin in the queue without
removing them. Finally, there's a method to get the total number of bins in the
queue. Implement these methods.

******************************************/

const LetterBin = require("./02-letter-bin");

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LetterRoom {
  constructor() {
    // create an empty queue
    // Hint: you may create helper classes in this file to use
    this.binQueue = [];
  }

  getLastBin() {
    // return the last bin added to the queue
    // if there are no bins in the queue, return null
    return this.binQueue.length
      ? this.binQueue[this.binQueue.length - 1]
      : null;
  }

  getFirstBin() {
    // return the first bin added to the queue
    // if there are no bins in the queue, return null
    return this.binQueue.length ? this.binQueue[0] : null;
  }

  numBins() {
    // returns the number of bins in the queue
    return this.binQueue.length;
  }

  addBin() {
    // create a new bin and add it to the end of the queue
    const newBin = new LetterBin();
    this.binQueue.push(newBin);
    // returns the newly created bin
    return newBin;
    // WARNING: you cannot add properties to a LetterBin like .next
  }

  removeBin() {
    // remove the bin at the beginning of the queue
    return this.binQueue.shift();
    // returns the removed bin
    // Your code here
  }
}

module.exports = LetterRoom;
