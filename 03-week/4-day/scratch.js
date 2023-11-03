// Rest ****Parameter****

// num is a parameter to the function
// let myFunc = (str, ...nums) => {
//     console.log(str);
//     console.log(nums);
// };


// // 5 is an argument
// myFunc('hello',5,4,5,6,7,1,8,9,0);


// Spread Operator
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let arr3 = [...arr1] // new Array 1 2 3

// console.log(arr3);

// let obj1 = {
//     a:1,
//     b:2,
//     c:3
// };

// let obj2 = {...obj1}
// console.log(obj2)


// let arr = ['blue', 'green', 'red'];

// let [blue, green, banana] = arr;

//swap values
// [green, blue] = [blue, green]

// console.log(green);

// let obj1 = {
//     a:1,
//     b:2,
//     c:3,
//     d: {
//         hello: 'world'
//     }
// };

// let {b} = obj1;

// let {d: { hello: banana }} = obj1;

// console.log(banana);


// ------------------------------------ PST -----------------------------------------------------


// Rest Parameter 

// let myFunc = (...banana) => {
//     console.log(banana);
// };

// myFunc(5, 5,1,2,3,4,4,5,6,6,7,7,8,98,9);

// Spread Operator


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// console.log([...arr1, ...arr2]);
// console.log(arr1.concat(arr2));
// let arr = [...arr1];

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// let copy = {...obj};

// console.log(copy);

// {hello: 'world'}

// let arr = [{hello: 'world'},{hello: 'world'},{hello: 'world'},{hello: 'world'},{hello: 'world'}]

// console.log(...arr)


// rest property

// let arr = ['satisfactory', 'William Vincent', 5,6,7,8, true, 'hello'];
// let [game, player, ...otherStuff] = arr;

// console.log(otherStuff);

let obj = {
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    cat: 'juice',
    other: {
        a: 1,
        b: 2,
        c: 3
    }
};


let {blue, green, ...hello} = obj;

console.log(hello)