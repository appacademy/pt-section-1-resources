//Break operator and the continue operator ONLY for loops


// let arr = ["apple", "pear", "lemon", "lime"];

// //The break operator will stop a loop

// //the continue operator won't break out of the loop entirely, just stop the current iteration

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     if (arr[i] === 'pear') {
//         //break; //ends the loop entirely
//         //continue; //ends the current iteration
//     }
//     console.log(arr[i])
// }

// while (true) {
//     continue;
//     console.log("woooo") //never happens, but loop is still looping
// }

// let users = ["bobby", "mary", "joe", "barnacle"];

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];

//     if (user === 'mary') {
//         continue;
//     }

//     //DELETE USER FROM DATABASE
//     console.log(`${user} was successfully deleted.`)
// }