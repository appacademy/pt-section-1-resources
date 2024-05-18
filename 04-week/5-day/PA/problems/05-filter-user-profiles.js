/***********************************************************************
Implement the filterUserProfiles below. The filterUserProfiles accepts two
parameters: an array of objects and a callback function. Each object in the
array should represent a user profile. The callback function should be a
function that accepts a single user profile object as an argument and returns
true or false.

The filterUserProfiles function should return an array of filtered user
names extracted from the user profile objects. The array should contain
only the names of users that return true from the callback function when
their user profile object is passed into the callback function.

You can expect all user profiles to have a key of "name".

For example, let's say you have an array of user profiles called
facebookUsers and a function called cb1:

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

const cb1 = (user) => user.age > 30;

Then, filterUserProfiles(facebookUsers, cb1) should evaluate to
["Mary", "Judy", "Mike"] since Mary, Judy, and Mike are the names of the
users that over 30 years old.

If there is a different function called cb2:

const cb2 = (user) => user.state === "New York";

Then, filterUserProfiles(facebookUsers, cb2) should evaluate to
["Mike"] since Mike is the name of the only user that lives in New York
state.
***********************************************************************/

function filterUserProfiles(users, filter) {
  let res = [];
  // iterate over the users input array of objects
  users.forEach(userObj => {
    // check if the current user object returns true when passed into the callback (filter) function
    if (filter(userObj)) {
      // if yes, we want to include that user's name in the output/result array
      res.push(userObj.name)
    }
  });
  // return an array of names
  return res;
  // return users.filter(user => filter(user)).map(userObj => userObj.name)
}

// To test the example, comment out the code below and run the following command
// in your terminal: node problems/05-filter-user-profiles.js
// const facebookUsers = [
//   { name: "John", age: "21", state: "Florida" },
//   { name: "Mary", age: "57", state: "California" },
//   { name: "Judy", age: "47", state: "Texas" },
//   { name: "Mike", age: "32", state: "New York" }
// ];

// const cb1 = (user) => user.age > 30;
// console.log(filterUserProfiles(facebookUsers, cb1)); // ["Mary", "Judy", "Mike"]

// const cb2 = (user) => user.state === "New York";
// console.log(filterUserProfiles(facebookUsers, cb2)); // ["Mike"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = filterUserProfiles;
} catch (e) {
  module.exports = null;
}
