/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
***********************************************************************/

function iceCreamShop(flavors, favorite) {
  // base case -> if empty array, return false
  if (flavors.length === 0) return false;
  let last = flavors.pop(); // also mutates our flavors (removes the last el) -> recursive step
  if (last === favorite) return true;
  // recursive case
  return iceCreamShop(flavors, favorite);
}

// console.log(iceCreamShop(["vanilla", "strawberry"], "blue moon")); // false
// console.log(
//   iceCreamShop(
//     ["pistachio", "green tea", "chocolate", "mint chip"],
//     "green tea"
//   )
// ); // true
// console.log(
//   iceCreamShop(
//     [
//       "cookies n cream",
//       "blue moon",
//       "superman",
//       "honey lavender",
//       "sea salt caramel",
//     ],
//     "pistachio"
//   )
// ); // false
// console.log(iceCreamShop(["moose tracks"], "moose tracks")); // true
// console.log(iceCreamShop([], "honey lavender")); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
