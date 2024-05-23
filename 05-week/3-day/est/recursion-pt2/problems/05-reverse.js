/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // base case
  if (str.length === 0) return "";

  // let reversed = str[str.length - 1] + reverse(str.slice(0, -1))
  // let reversed = str[str.length - 1] + reverse(str.slice(0, str.length - 1))

  let reversed = reverse(str.slice(1)) + str[0]

  return reversed
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
