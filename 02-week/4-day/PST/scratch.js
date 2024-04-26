// // Less than/Greater than
// let costOfGame = 5
// let usersTotalBalance = 9

// if (usersTotalBalance > costOfGame)
// if (costOfGame < usersTotalBalance)

// console.log(5 < 9); // true
// console.log(5 > 9); // false
// console.log('a' < 'b'); // true (dictionary order)
// console.log('cat' < 'cats'); // true (dictionary order)
// console.log("Z" > "a")

// Inclusive comparison (... or equal to)
// console.log(7 <= 10); // true
// console.log(10 >= 10); // true

// // Equality === and !==
// console.log(2 === 2); // true
// console.log(2 === 2.1); // false
// console.log(2 !== 2.1); // true

// // Two equality operators, === and ==
// console.log(5 === '5'); // false
// console.log(5 == '5'); // true (types are coerced)
// console.log(5 === Number('5'));
// console.log([] == 0); // true (can be unpredictable)

// let costOfGame = 5
// let usersTotalBalance = 9
// if (costOfGame === usersTotalBalance) {
//     console.log('HEYYYOOOOOO')
// }

//! --------------------------------------------------------------------
//*                             Variables
//! --------------------------------------------------------------------

// let kitchen = 'forks and knives and cups';

// let myNumber = 'Zaviar Brown';

// console.log(kitchen);

// kitchen = kitchen + ' and plates';

// console.log(kitchen);

// kitchen = 10000;
// console.log(kitchen);

// let name; // declaration

// name = 'Leroy'; // assignment / reassignment

// let lastName = 'Jenkins'; // initialization

// console.log(name, lastName); // Leroy Jenkins

// let counter = 0;

// for (let numOfUsers = 0; numOfUsers < 10; numOfUsers++) {
//     console.log('New user just signed up!');
//     counter = counter + 1;
//     console.log('New user total:', counter);
// }

// let firstName = "Zaviar"

// let catStory = "Today Zaviar's cats went to the vet"

// let myVariable;
// console.log(myVariable); // undefined

// myVariable = 'Zaviar';
// console.log(myVariable); // "Zaviar"

// myVariable = 'Kirin';
// console.log(myVariable); // "Kirin"

// let myVariable = 100;
// // SyntaxError: Identifier 'myVariable' has already been declared

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
// year++; // year += 1 // year = year + 1
// console.log(year); // 3005
// year--;
// console.log(year); // 3004

let preFix = 10;
console.log(preFix); // 10
console.log(++preFix); // 10
// console.log(++preFix / 2); // 11
// console.log(1 + preFix / 2); // 11
console.log(preFix); // 11

// let banana = 10;
// console.log(banana); // 10
// // banana++
// console.log(banana++); // 10
// console.log(banana); // 11
