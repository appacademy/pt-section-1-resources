/*
Given the following declaration of an object, `obj` below, declare values so
that the print statements output what is expected. Try using both dot and
bracket notation.
*/

const obj = {};

/******************** DO NOT MODIFY ANY CODE ABOVE THIS LINE *****************/

obj.firstKey = "firstValue";
obj.numeric = 2;
obj["boolean"] = false;
obj.object = { hello: "world!" }

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

console.log(obj.firstKey);       // firstValue
console.log(obj.numeric);        // 2
console.log(obj["boolean"]);     // false
console.log(obj.object);         // { hello: "world!" }

module.exports = obj;
