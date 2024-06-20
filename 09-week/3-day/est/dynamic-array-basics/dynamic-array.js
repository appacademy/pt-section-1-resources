class DynamicArray {

  constructor(defaultSize=4) {
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;

  }

  read(index) {
    return this.data[index]
  }

  unshift(val) {
    for (let i = this.data.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[0] = val;
    this.length++;
  }

  push(val) {
    this.data[this.length] = val;
  }

}


module.exports = DynamicArray;
