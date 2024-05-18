/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.
You may not mutate the original array.

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

You may not use Array's `map()`, `filter()`, or `forEach()` methods.
***********************************************************************/

function pickyMyMap(arr, cb) {
	// initialize a results array
	const res = [];
	// iterate over my input array
	for (let i = 0; i < arr.length; i++) {
		let el = arr[i]  // optional
		// check if calling the cb results in a truthy or falsey value
		let returnVal = cb(el); // optional
		if (returnVal) {
			// if truthy, push into the results array;
			res.push(returnVal);
		};
	}
	// return results array
	return res;
	// return arr.filter(el => cb(el)).map(el => cb(el));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}
