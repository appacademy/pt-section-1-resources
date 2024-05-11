// declaring

const obj1 = {
  person: "Greg",
  age: 6,
  hobbies: ["music", "video games"],
  parent: { person: "Dan" },
};
const obj2 = {
  person: "Bobert",
  age: 60,
  hobbies: ["jazz"],
  parent: { person: "Bobert Sr." },
};
const emptyObj = {};

// accessing values

// console.log(obj1.age) // 6
// console.log(obj1.parent.person) // Dan
// const person = "hobbies";
// console.log("DOT NOTATION, PERSON:", obj1.person); // === obj1["person"]
// console.log(obj1["person"]) // Greg
// console.log(obj1[person]) // ["music", "video games"]
// console.log(obj2[person]) // ["jazz"]
// console.log(emptyObj[person]) // undefined

// adding key/ val pairs

let newKey = "username"

console.log("Before:", obj1)
obj1.pet = "elephant";
obj1["state"]  = "CA";
obj1[newKey] = "cooldude33";
obj1.newKey = "badgamertag22"
console.log("After:", obj1);

delete obj1.newKey;

console.log("After deleting:", obj1);

// iterating through an object:

// Object.keys

const obj1Keys = Object.keys(obj1); // ["person", "age", "hobbies", "parent"]
for (let i = 0; i < obj1Keys.length; i++) {
  let key = obj1Keys[i];
  // console.log(obj1[key]);
}

for (let banana in obj1) {
  // console.log(banana)
  // console.log(obj1[banana])
}

const obj1Entries = Object.entries(obj1);
// console.log(obj1Entries)

// obj1Entries.forEach(([key, val]) => {
//   // let [key, val] = subArr
//   console.log(subArr);
//   let key = subArr[0];
//   let val = subArr[1];
//   //   console.log(`Key: ${key}, Val: ${val}`);
// });

const objArr = [
  { char: "Yoshi", color: "Green" },
  { char: "Mario", color: "Red" },
  { char: "Peach", color: "Pink" },
  { char: "Bowser", color: "Red" },
  { char: "Luigi", color: "Green" },
  { char: "Wario", color: "Yellow" },
  { char: "DK", color: "Brown" },
];

objArr.forEach(({char: character, color}) => { // const {char} = { char: "Yoshi", color: "Green" }
    // console.log(character, color)
})

// const [val1, val2] = ["Yoshi", "Mario"];
// console.log(val1, val2);
