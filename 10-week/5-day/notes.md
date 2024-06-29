# Cache Me Outside

Memoization is an optimization technique used to improve the performance of functions by caching (saving) their results. Here's a breakdown of memoization in JavaScript:

### The Problem:

Some functions involve expensive computations, especially those involving recursion or complex calculations. Repeatedly performing these calculations can slow down your program.

### The Solution: Memoization

Memoization involves storing the results of a function call based on its arguments. When the function is called again with the same arguments, the cached result is returned instead of re-computing everything.

### Benefits of Memoization:

- Improved Performance: By avoiding redundant computations, memoization can significantly speed up your code.
- Reduced Memory Usage: While storing cached results uses some memory, it can be more efficient than repeatedly re-calculating large or complex data.

### Implementing Memoization:

Using an Object as a Cache:

```js
function fastFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

fastFib(6);     // => 8
fastFib(50);    // => 12586269025
```

- This function uses a cache object to store previously calculated Fibonacci numbers.
- If the argument n exists in the cache, the cached value is returned.
- Otherwise, the function calculates the Fibonacci number, stores it in the cache, and returns the result.

### Things to Consider:

- Memoization is most beneficial for functions with expensive computations and frequently used with the same arguments.
- Excessive use of memoization can lead to increased memory usage, so it's best to target specific functions that can significantly benefit from caching.