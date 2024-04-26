// // Less than/Greater than
// console.log(5 < 9); // true
// console.log(5 > 9); // false
// console.log('a' < 'b'); // true (dictionary order)
// console.log('cat' < 'cats'); // true (dictionary order)
// console.log('Z' < 'a');
// console.log('a' < 'z');

// Inclusive comparison (... or equal to)
// console.log(7 <= 10); // true
// console.log(10 >= 10); // true

// console.log(5 === '5'); // false
// console.log(5 == '5'); // true (types are coerced)

// console.log(5 === Number("5"))

//? Better Comments
//! --------------------------------------------------------------------
//*                           Variables
//! --------------------------------------------------------------------

// let myStr = 'Literally anything I want';
// let myNum = 5;

// let catSentence = 'Today I took my cat to the vet';
// let vetBill = 200;

// let name; //? declaration

// name = 'Zaviar';
// name = 'Leroy'; //? assignment / reassignment

// let name2 = 'Jenkins'; //? initialization

// console.log(name, name2); // Leroy Jenkins

// let myVariable;
// console.log(myVariable); // undefined

// myVariable = 'Zaviar';
// console.log(myVariable); // "Zaviar"

// myVariable = 'Kirin';
// console.log(myVariable); // "Kirin"

// myVariable = '100';
// console.log(myVariable);

// myVariable = 100;
// console.log(myVariable);

// SyntaxError: Identifier 'myVariable' has already been declared
// let myVariable = 100;

// let myNewVariable = 100

// let kitchen = "forks and knives and plates and cups"
// let kitchen;
// kitchen = 'forks and knives and plates and cups';
// kitchen = 'fortnite';

//! --------------------------------------------------------------------
//*                           Variable Manipulation                                          
//! --------------------------------------------------------------------

// let num = 42;
// console.log(num + 8); // -> 50
// console.log(num); // -> 42

// num = num + 10;
// console.log(num); // -> 52

// let number = 0;
// number += 10; // equivalent to number = number + 10
// number -= 2; // equivalent to number = number - 2
// number /= 4; // equivalent to number = number / 4
// number *= 7; // equivalent to number = number * 7
// console.log(number); // 14

// let year = 3004;
// year++; // equivalent to year = year + 1 //! or year += 1
// console.log(year); // 3005
// year--;
// console.log(year); // 3004

//! --------------------------------------------------------------------
//*                          Prefix vs Postfix                                           
//! --------------------------------------------------------------------

// let preFix = 10;
// console.log(preFix); // 10
// console.log(++preFix); // 11
// console.log(preFix); // 11

let postFix = 10;
console.log(postFix); // 10
postFix++
console.log(postFix); // 11
// console.log(postFix++); // 10
// console.log(postFix = postFix + 1)

console.log(postFix); // 11