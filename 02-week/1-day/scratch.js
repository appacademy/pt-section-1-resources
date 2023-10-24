// for(start, stopping, step){}

// for(let i = 0; i < 10; i++){
//     console.log(i);
//     //inside the outer loop, will run to completion for every iteration
//     //of the outer loop
//     for(let j = 0; j < 4; j++){
//         console.log("     ", j);

//         for(let k = 0; k < 2; k++){
//             console.log("           ", k);
//         }
//     }
// }

// let fruits = ['apple', 'orange', 'kiwi', 'strawberry', 'pear'];

/*
apple orange
apple kiwi
apple strawberry
apple pear
orange kiwi
orange strawberry
orange pear
kiwi strawberry
kiwi pear
strawberry pear
*/


//pairs
// for(let i = 0; i < fruits.length; i++){
//     let fruit = fruits[i];
//     // console.log(fruit);

//     for(let j = 0; j < fruits.length; j++){
//         let innerFruit = fruits[j]
//         console.log(fruit, innerFruit)
//     }
// };

//unique pairs
// for(let i = 0; i < fruits.length; i++){
//     let fruit = fruits[i];
//     // console.log(fruit);

//     for(let j = i + 1; j < fruits.length; j++){
//         let innerFruit = fruits[j]
//         console.log(fruit, innerFruit)
//     }
// };

// let nestedArray = [
//     ['cat', 'dog', 'hamster', 'horse'],
//     ['William', 'Kate', 'Caleb', 'Maggie'],
//     ['Water', 'Fire', 'Earth', 'Air']
// ];

// console.log(nestedArray[1][2]);

// for(let i = 0; i < nestedArray.length; i++){
//     let subArr = nestedArray[i];
//     console.log(subArr);

//     for(let j = 0; j < subArr.length; j++){
//         let ele = subArr[j];
//         console.log(ele)
//     }
// }

// for(let i = 0; i < 10; i++){
//     console.log(i);
//     for(let j = 0; j < 5; j++){
//         console.log("   ",j);
//     }
// }

// function myFunc(){
//     for(start; stop; step){

//     }
// }

// myFun()

// let fruits = ['apple', 'orange', 'kiwi', 'strawberry', 'guava'];

// for(let i = 0; i < fruits.length; i = i + 1){
//     let outerVal = fruits[i];
    
//     for(let j = 0; j < fruits.length; j = j + 1){
//         let innerVal = fruits[j];
//         // let pair = [outerVal, innerVal]
//         console.log(outerVal, innerVal)
//     }
// }

// for(let i = 0; i < fruits.length; i = i + 1){
//     let outerVal = fruits[i];
    
//     for(let j = i + 1; j < fruits.length; j = j + 1){
//         let innerVal = fruits[j];
//         // let pair = [outerVal, innerVal]
//         console.log(outerVal, innerVal)
//     }
// }


// let nestedArray = [
//     ['cat', 'dog', 'hamster', 'horse'],
//     ['William', 'Kate', 'Caleb', 'Maggie'],
//     ['Water', 'Fire', 'Earth', 'Air']
// ];

// console.log(nestedArray[0][2]);

// for(let i = 0; i < nestedArray.length; i++){
//     let subArr = nestedArray[i];
//     console.log(i)

//     for(let j = 0; j < subArr.length; j++){
//         let value = subArr[j];
//         console.log("   ",value);
//     }
// };

// let subArr = nestedArray[1][1];
// console.log(subArr[1]);

function lcm(n1, n2){
    for(let count = n1 <= n2 ? n2 : n1; true; count++){
        if(count % n1 === 0 && count % n2 === 0){
            return count;
        }
    }
};

console.log(lcm(4,6));
console.log(lcm(3,5));
console.log(lcm(2,10));
