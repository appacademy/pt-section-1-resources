// memoization
function fastFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

function slowFib(n) {
  if (n === 1 || n === 2) return 1;

  return slowFib(n - 1) + slowFib(n - 2);
}

console.log(fastFib(6)); // => 8
console.log(fastFib(50)); // => 12586269025

console.log(slowFib(6)); // => 8
console.log(slowFib(50)); // => 12586269025
