// let car = "vroom"; // global

// function makeSounds(dogSound) { // function / local
//   let cow = "moo"; //function scoped

//   if (true) {
//     let turkey = "gobble"; // block

//     for (let i = 0; i < 2; i++) { // block
//       console.log(car, dogSound, cow, turkey, i);
//     }
//   }
// }

// makeSounds("woof");

// let hungry = false;
// function sayHungry() {

//   if (true) {
//     let hungry = true;
//   }
//   console.log(hungry);
// }
// sayHungry();

// not defined error

// let myLet = 'hello'
// console.log(myLet);

// const myConst = 'hello'
// console.log(myConst);

// not defined error

// var myVar = 'hello'
// console.log(myVar);

//var scoping behavior

// if(true){
//     const hello = 'world'
// };

// console.log(hello);


const countFrom = (n) => {
    let count = n;
    const innerFunc = () => {
        // return count++; // why doesn't this work?
        return ++count; // why does this work?
        // count++;
        // return count;
    }

    return innerFunc;
}

let count1 = countFrom(0);
console.log(count1); // [Function: InnerFunc]
// console.log(count); // cant access the value

console.log(count1()); // ?
console.log(count1()); // ?
console.log(count1()); // ?

let count2 = countFrom(5);
console.log(count2);
console.log(count2()); // ?
console.log(count2()); // ?
console.log(count1())