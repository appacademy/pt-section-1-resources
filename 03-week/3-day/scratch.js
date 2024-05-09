// let firstName = "Greg";
// const name2 = firstName;
// console.log("Before reassignment", firstName, name2);
// firstName = "Bobert"
// // firstName[0] = "D";
// // firstName = "Luke"
// console.log("After reassignment", firstName, name2);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// console.log("Before", arr1, arr2);
// arr1[0] = 100;
// // arr1.push("new")
// console.log("After", arr1, arr2);

const one = {key: 1};
const two = {key: 2};
const three = one;

one.newKey = "newVal";

console.log(three); // { key: 1, newKey: 'newVal' }