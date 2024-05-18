/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/

function keyAdderUniqueVal(object, key, value) {
  // Get all values the are already in the object
  const vals = Object.values(object); // give me an array of values in the object
  // check if the value passed into the function is already a value for another key
  if (!vals.includes(value)) {
    // if not, add the key value pair to the object
	object[key] = value;
	// object.key => "key" BAD, CAN'T DO THIS
  }
  // return the mutated object
  return object;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
