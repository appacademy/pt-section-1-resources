const numbers = [10, 5, 1, 2];
numbers.sort(); // sorts the array in-place
console.log(numbers); // Output: ???
// "1" "one"
// "10" "ten"
// "5"
// "a" "aa"

numbers.sort((a, b) => a < b); // Sorts numbers in ascending order
console.log(numbers); // Output: [1, 2, 5, 10]

numbers.sort((a, b) => b - a); // Sorts numbers in descending order
console.log(numbers); // Output: [10, 5, 2, 1]