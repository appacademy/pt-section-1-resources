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

// let preFix = 10;
// console.log(preFix); // 10
// console.log(++preFix); // 10
// // console.log(++preFix / 2); // 11
// // console.log(1 + preFix / 2); // 11
// console.log(preFix); // 11

// let banana = 10;
// console.log(banana); // 10
// // banana++
// console.log(banana++); // 10
// console.log(banana); // 11

//! --------------------------------------------------------------------
//*                              Strings
//! --------------------------------------------------------------------

// let firstName = 'Zaviar';
// let lastName = 'Brown';
// console.log('Zaviar'.length);
// console.log(firstName.length);
// console.log(firstName.indexOf('q'));
// console.log(firstName[-1]);

// console.log(firstName[-1])
// console.log(firstName.at(-1));

// console.log(firstName, lastName)
// console.log(firstName + lastName);
// console.log(firstName + " " + lastName);
// let word = 'cooler';
// let word2 = 'than';
// let myNum = 100;
// function myFunc() {
//     console.log('Heyoooo');

//     return 'the return value';
// }

// console.log(myFunc);
// console.log(myFunc());

// console.log(`${firstName} ${'Brown'}`);
// console.log("${firstName} ${'Brown'}");
// console.log(`This is a normal string like any other type`);
// console.log(`This is a ${word} string ${myFunc()} any other type`);

//! --------------------------------------------------------------------
//*                          Loop Sneak Peak
//! --------------------------------------------------------------------

//? Create a for loop that increments a counter by 5 until counter = 50

let counter = 0;

for (let i = 0; i < 10; i += 10 ) {
    console.log(
        'New loop began with i =',
        i,
        'and counter starting at',
        counter
    );
    console.log('Just added 5 😎');

    counter += 5;
    console.log({ counter });
    i++;
    console.log('Loop ended, i is now', i);
}

console.log(counter);

//? Create a while loop that increments a counter by 5 until counter = 50

// let counter = 0;

// while (counter < 50) {
//     counter += 5;
// }

// console.log(counter);

//??? Translation!

// let counter = 0;
// let i = 0;
// for (; i < 10; ) {
//     counter += 5;
//     i++;
// }

// console.log(counter);

// let counter = 0;
// let i = 0;
// while ( i < 10 ) {
//     counter += 5;
//     i++;
// }

// console.log(counter);

//? When to while vs When to for

// Q: Do I know how many times I should be looping?
// A: Yes === For Loop
// A: No === While loop
