function simpleHash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}

console.log(simpleHash("Greg"));
console.log(simpleHash("Greg"));
console.log(simpleHash("abcd"));
console.log(simpleHash("aadd"));


class HashTable {
    constructor() {
        this.data = new Array(10);
        this.count = 8;
    }

}

