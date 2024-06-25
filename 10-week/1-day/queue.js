class Queue {
  constructor() {
    this.data = new Array();
  }

  size() {
    return this.data.length;
  }

  enqueue(ele) {
    this.data.push(ele);
  }

  dequeue() {
    // 0n time to shift an array -> inefficient at large n sizes
    return this.data.shift();
  }
}

