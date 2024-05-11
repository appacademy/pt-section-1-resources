/*
Given the `friends` array below, use the `Array.find()` method to get the first
friend whose name contains 3 or more vowels. Assign the output of
`Array.find()` to the `threeVowelFriend` variable.
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

// Hint: create an array of vowels to use in your solution.
const threeVowelFriend = friends.find((friend) => {
  // const vowels = ["a", "e", "i", "o", "u"];
  // let vowelCount = 0;
  // for (let char of friend.name.toLowerCase()){
  //   if (vowels.includes(char)) vowelCount++;
  // }
  // return vowelCount >= 3;
  const vowels = "aeiou";
  let count = 0;
  const nameArr = friend.name.split("");
  nameArr.forEach(letter => {
    if (vowels.includes(letter.toLowerCase())) count++;
  })
  return count >= 3;
});

console.log(threeVowelFriend); // [ { name: 'Angela', yearsOfFriendship: 2 } ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = threeVowelFriend;
} catch {}
