function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  });
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    // case 1: both a and b are even or odd -> sort ascending
    if ((a + b) % 2 === 0) return a - b;
    //case 2: a is even, b is odd -> a should come after b
    if (a % 2 === 0) return 1;
    // case 3: a is odd, b is even -> a should come before b
    return -1;
  });
}

function validAnagrams(s, t) {
  // const sArr = s.split("");
  // const tArr = t.split("");

  // sArr.sort();
  // tArr.sort();

  // s = sArr.join("");
  // t = tArr.join("");

  // return s === t;
  // Same as above, just in one line
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    let baseA = Math.floor(Math.log10(a));
    let baseB = Math.floor(Math.log10(b));
    // case 1: both a and b have the same number of digits -> sort ascending
    if (baseA === baseB) return a - b;
    // case 2: a and b have a different number of digits -> sort desc order
    else return baseB - baseA;
  })
}

function frequencySort(arr) {
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (!count[el]) count[el] = 0;
    count[el]++;
  }

  return arr.sort((a, b) => {
    //case 1 a and b have the same count -> sort desc
    if (count[a] === count[b]) return b - a
    // case 2: a appears more than b -> sort a after b
    // else if (count[a] > count[b]) return 1;
    // // case 3: b appears more than a -> sort b after a
    // else return -1;
    // combine cases 2 + 3
    else return count[a] - count[b];
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
