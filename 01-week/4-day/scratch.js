//Nested Loops

let fruit = ["Apple", "Orange", "Lemon", "Lime", "Blueberry", "Cherry"];

//Nested loop that console logs every unique pair of fruits

//IMPORTANT - For every iteration of the outer loop, the inner loop must complete ALL
// of its iterations

for (let i = 0; i < fruit.length; i++) {
    let fruit1 = fruit[i];
    
    //Write an inner loop
    for (let j = i + 1; j < fruit.length; j++) {
        let fruit2 = fruit[j];
        console.log(fruit1, fruit2)
    }
}

