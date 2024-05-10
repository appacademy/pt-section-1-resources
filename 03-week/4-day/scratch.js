// array destructuring
let [game, player] = ["Dota 2", "Mylo"];
// console.log(game, player);

// //swapping values
// [player, game] = [game, player];
// console.log(game, player);

//object destructuring
let person = "Emily";
let { person: human, animal } = { person: "Caleb", animal: "elephant" };
// if (person === "Caleb") {
//     person = "Not Caleb"
// }
// let person = (the Object).person
// let animal = (the Object).animal
// console.log(person, human, animal);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
let arr4 = [0, ...arr1, ...arr2];
// console.log(arr3);
// console.log(arr4);

let obj1 = { name: "Mylo" };
let obj2 = { animal: "elephant", game: "Dota 2"};
let obj3 = { obj1, obj2, movie: "Fantastic Mr. Fox" };
let obj4 = { ...obj2, ...obj1, movie: "Fantastic Mr. Fox" };
// console.log(obj3);
// console.log(obj4);

const o = {a:'aa'}
//undefined
const b = {o, name: "bb"}
console.log(b)
//{ o: { a: 'aa' }, name: 'bb' }