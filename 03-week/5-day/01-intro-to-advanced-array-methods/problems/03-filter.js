/*
Given the array `friends` below, use the `Array.filter()` method to filter the
array to only contain friends whose name starts with an "A" and who has been
friends for over 5 years. Assign the output of `Array.filter()` to the
`filteredFriends` variable.
*/

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];


const filteredFriends = friends.filter((friend) => {
  if (friend.name[0] === "A" && friend.yearsOfFriendship > 5) {
    // return friend
    // return true;
    // return friend.name;
  }
  return friend.name[0] === "A" && friend.yearsOfFriendship > 5;
});

console.log(filteredFriends); // [ { name: "Agatha", yearsOfFriendship: 6 } ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = filteredFriends;
} catch {}
