/*
You are compiling a price checker for a grocery store. The grocery prices are as
follows:

  butter: $1,
  eggs: $2,
  milk: $3,
  bread: $4,
  cheese: $5

First, create a function called costOfGroceries(groceries) which takes a single
array of grocery items and returns the total cost.

Then, write a function mostExpensiveGroceries(groceriesList) that takes in a
2-dimensional array of grocery items and returns the index of the sub-array with
the highest cost.

Constraint: Use the costOfGroceries function as a helper function in the
mostExpensiveGroceries function to solve the problem.
*/

function costOfGroceries(groceries) {
  // groceries = ["cheese", "butter", "eggs"];
  let cost = 0; // 8
  for (let i = 0; i < groceries.length; i++) {
    let item = groceries[i]; // cheese -> butter
    if (item === "butter") {
      cost += 1;
    }
    if (item === "eggs") {
      cost += 2;
    }
    if (item === "milk") {
      cost += 3;
    }
    if (item === "bread") {
      cost += 4;
    }
    if (item === "cheese") {
      cost += 5;
    }
  }
  return cost;
}

function mostExpensiveGroceries(groceriesList) {
  // groceriesList = [        groceriesA,                       groceriesB               ]
  //                 [ ['cheese', 'butter', 'eggs'] , ['eggs', 'milk', 'bread', 'bread'] ]
  //                            $8                                    $13
  // groceriesList[0] = ['cheese', 'butter', 'eggs']
  let highestCost = 0;
  let highestIndex;

  for (let i = 0; i < groceriesList.length; i++) {
    // i=0 -> 1
    let items = groceriesList[i]; //  ['cheese', 'butter', 'eggs'] -> ['eggs', 'milk', 'bread', 'bread']
    let cost = costOfGroceries(items);
    if (cost > highestCost) {
      highestCost = cost;
      highestIndex = i;
    }
  }
  return highestIndex;
}

// const groceriesA = ['cheese', 'butter', 'eggs'];
// const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
// const groceriesC = ['cheese', 'bread'];
// const groceriesD = ['eggs', 'butter'];

// console.log(costOfGroceries(groceriesA)); // 8
// console.log(costOfGroceries(groceriesB)); // 13
// console.log(costOfGroceries(groceriesC)); // 9
// console.log(costOfGroceries(groceriesD)); // 3

// console.log(mostExpensiveGroceries(
//   [groceriesA, groceriesB, groceriesC, groceriesD]
// )); //=> 1
// console.log(mostExpensiveGroceries(
//   [groceriesA, groceriesD]
// )); //=> 0
// console.log(mostExpensiveGroceries(
//   [groceriesA, groceriesD, groceriesC]
// )); //=> 2

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  costOfGroceries,
  mostExpensiveGroceries,
};
