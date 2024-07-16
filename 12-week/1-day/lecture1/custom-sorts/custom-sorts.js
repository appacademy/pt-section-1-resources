function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  })
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    // case 1: both even or odd, sort a & b in ascending order
    if ((a + b) % 2 === 0) return a - b // both are even or both are odd
    // case 2: a is even, b is odd -> send a to the right, send b to the left
    else if (a % 2 === 0) return 1; // only a is even, we'll sort it after b, aka send it to the right of b
    // case 3: a is odd, b is even -> send a to the left, send b to the right of the array
    return -1; // only b is even
  })
}

function validAnagrams(s, t) {
  // let sArr = s.split("");
  // let tArr = t.split("");

  // sArr.sort();
  // tArr.sort();

  // s = sArr.join("");
  // t= tArr.join("");
  // return s === t;

  // one-line flex
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    let baseA = Math.floor(Math.log10(a)); // give me the number of digits in el a
    let baseB = Math.floor(Math.log10(b));
    // if they have the same number of digits
    if (baseA === baseB) return a - b;
    // else organize numbers by number of digits in descending order
    else return baseB - baseA;
  })
}

function frequencySort(arr) {
  // count object to keep track of the frequency of each int
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (!count[el]) count[el] = 0;
    count[el]++;
  }

  return arr.sort((a, b) => {
    // case 1: a and b appear the same number of times -> sort in desc order
    if (count[a] === count[b]) return b - a;
    // case 2: a appears more than b -> a should be after b
    else if (count[a] > count[b]) return 1;
    // case 3: b appears more than a -> a should be before b
    else return -1;
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
