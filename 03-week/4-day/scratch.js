// // // array destructuring
// let [game, player] = ["Dota 2", "Mylo"];
// // console.log(player);
// // console.log(game);

// // swapping values
// [player, game] = [game, player];
// console.log(player);
// console.log(game);

// object destructuring
// const person = "Emily";
// console.log(person, pet);
// let { person, pet: animal } = { person: "Caleb", pet: "dog" };
// // let person = (the Object).person
// // let animal = (the Object).animal
// console.log(person, animal);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
let arr4 = [0, ...arr1, ...arr2];
// console.log(arr3);
// console.log(arr4);

let obj1 = { name: "Mylo", nested: {class: "is cool"} };
let obj2 = { animal: "elephant", game: "Dota 2" };
let obj3 = { obj1, obj2, movie: "Fantastic Mr. Fox" };
let obj4 = { ...obj1, ...obj2, movie: "Fantastic Mr. Fox" };
console.log(obj3);
console.log(obj4);
