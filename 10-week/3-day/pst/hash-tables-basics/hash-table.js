const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null)
  }

  hash(key) {
    const shaCode = sha256(key).slice(0, 8);
    return parseInt(shaCode, 16)
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
   const index = this.hashMod(key);

   if (this.data[index]) {
    throw Error('hash collision or same key/value pair already exists!')
   } else {
    const newPair = new KeyValuePair(key, value);
    this.data[index] = newPair;
    this.count++;
   }
  }

  insertWithHashCollisions(key, value) {
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    if (!this.data[index]) {
      this.data[index] = newPair;
    } else {
      newPair.next = this.data[index];
      this.data[index] = newPair;
    }
    this.count++;
  }

  insert(key, value) {
    const index = this.hashMod(key);

    let currPair = this.data[index];
    while (currPair && currPair.key !== key) {
      currPair = currPair.next;
    }
    if (currPair) {
      currPair.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);

      if (!this.data[index]) {
        this.data[index] = newPair;
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }
      this.count++;
    }
  }

}


module.exports = HashTable;
