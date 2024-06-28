class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    if (this.count / this.capacity > 0.7) this.resize();

    const index = this.hashMod(key);

    let curr = this.data[index];
    while (curr && curr.key !== key) {
      curr = curr.next;
    }
    if (curr) {
      curr.value = value;
    } else {
      let newPair = new KeyValuePair(key, value);
      if (!this.data[index]) this.data[index] = newPair;
      else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }
      this.count++;
    }
  }

  read(key) {
    const index = this.hashMod(key);

    let curr = this.data[index];
    while (curr && curr.key !== key) {
      curr = curr.next;
    }
    return curr ? curr.value : undefined;
  }

  resize() {
    const copy = [...this.data];
    this.capacity *= 2;
    this.data = new Array(this.capacity);
    this.count = 0;
    copy.forEach((kvp) => {
      while (kvp) {
        this.insert(kvp.key, kvp.value);
        kvp = kvp.next;
      }
    });
  }

  delete(key) {
    const index = this.hashMod(key);

    let curr = this.data[index];
    let prev = null;
    while (curr && curr.key !== key) {
      prev = curr;
      curr = curr.next;
    }
    if (curr) {
      if (prev) {
        prev.next = curr.next;
      } else {
        this.data[index] = curr.next;
      }
      this.count--;
    }
    return "Key not found";
  }
}

module.exports = HashTable;
