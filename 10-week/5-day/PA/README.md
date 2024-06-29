# CompSci 2 Practice Assessment - Conversion And LRU Cache

Welcome to the conversion and LRU cache assessment!

The coding portion of this assessment consists of two problems:

1. Binary to string, a conversion problem (6 specs)
2. Number sorter, an LRU cache problem (15 specs)

The code file for each problem is in the __problems__ directory. Your objective
is to complete the code in the __problems__ directory so that all specs pass.
Each spec is worth 1 point. Further instructions appear below.

__Total Possible Points on Coding Section:__ 21 points

You will have **2 hours and 55 minutes** to complete the assessment (including
the multiple choice portion).

**Note:** The __bonus__ folder contains extra practice problems with their own
test specs. See the __README__ in the __bonus__ directory for more information.

## Resources

For this assessment, you are allowed to use the following resources:

* [a/A curriculum on Canvas][canvas]
* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation during any part
  of the test, including multiple-choice questions
* Node
* Postman (when useful)
* Previously written code you wrote yourself
  * Except for code from previous assessment submissions
* Comments within code
  * If there are comments in your code about your specific code and about what
    your code is doing, that is appropriate. If your comments are about concepts
    and based on the readings, then that counts as notes. Those would not be
    appropriate.

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., StackOverflow), communication apps (e.g.,
Slack, Discord), search engines, notes, or code from previous assessment
submissions.

[canvas]: https://appacademy.instructure.com/

## Setup

1. Clone this starter repo and open it in VS Code.
2. Run `npm install` in the root directory.
3. Run `npm test` to see all the specs you need to pass.
4. Read the instructions below to get started!

## Binary to string

Fill out the function `binaryToString()` which takes in a binary string (all
1s and 0s) and returns the string translated to ASCII.

```js
binaryToString('010000010100001001000011');  // Returns 'ABC'
```

This example string returns 'ABC' because the 8 bit values '01000001',
'01000010' and '01000011' translate to the base-10 values of 65, 66 and 67,
which translate to the ASCII values of 'A', 'B' and 'C'.

1. The length of all input strings will be multiples of 8 and contain only 1s
   and 0s.
2. You are allowed to use built-in JavaScript functions like
   [`String.fromCharCode()`][fromcharcode-mdn].

### Binary to string hints

1. It will be helpful to separate this task into steps:
   - Split the full string into 8-bit strings.
   - Convert the strings to integers.
   - Convert the integers to ASCII characters.
   - Then join the characters into a return string.
2. Testing each step in isolation will help keep your code organized and avoid
   errors.
3. You may find [`parseInt()`][parseint-mdn] helpful.

Note there are local tests to verify your work.

Run specs for this section with:

```bash
npm test test/01-binary-to-string-spec.js
```

## Number sorter

This problem will test your understanding of data structures and time
complexity. In particular, you will need to identify instances of `O(n)`
operations and optimize them to be `O(1)`.

You are given a class called `NumSorter` which stores an ordered list of
numbers, and a collection of allowed numbers. You can add allowed numbers to
the list, and retrieve them in the order they were added. You cannot add a
number to the list that is not allowed.

-   `addAllowedNum(num)` adds a number to the "allowed" list. Returns a string
  if successful or denied.
-   `isNumAllowed(num)` returns true if the number is in the allowed list.
-   `addNumToBack(num)` adds a number to the back of the number list. Returns
  the last number in `numList`.
-   `getFirstNum()` removes and returns the first number in the number list;
  returns `undefined` if `numList` is empty.
-   `numCount()` returns the amount of numbers in the number list.
-   `buildNumList(n)` takes in a number, `n` and adds all allowed numbers from
  0 through n to the list in order. It returns the length of the `numList`.

When you first run specs, implementation specs will be passing with the
exception of the two asking you to change your array data structures. Combined
with the timing benchmark specs, you will see that the `NumSorter` already
works but it is slow.

Your task is to optimize the code until all implementation *and* timing tests
are passing. The performance is normalized with a speed benchmark so the tests
should run similarly regardless of the speed of your computer.

You must optimize without changing the logic of the `NumSorter`. This means
that __overall functionality must remain the same__ (i.e., if you change code
in a method, the method must still be fulfilling its original purpose).

If you see failing specs from `implementation-spec`, it means the logic must be
corrected before you continue. You must fix this before performance tests will
run.

## Number sorter hints

1. Start by understanding the problem and identifying performance bottlenecks.
2. Use big-O analysis: Which operations can be optimized?
3. Consider all the tools (data structures) you have learned this week and pick
   the right tool for the job.
   * __An optimal solution for this problem will use 1 set, 1 linked list, and
     0 arrays.__
   * Important: You __must__ use the `LinkedList` class provided for you
     in the starter code.

There are two test sets of specs for this problem, implementation and timing
specs. There are local tests available as well to verify your work.

You can test the implementation of your code with the implementation specs
using the following command:

```bash
npm test test/02a-num-sorter-implementation-spec.js
```

You can test the optimization of your code with the timing specs using the
following command:

```bash
npm test test/02b-num-sorter-timing-spec.js
```

An important note for the timing specs:

There is a time buffer built into the timing specs to account for processor
speeds. Your actual grade will be scored on a processor that is different from
yours, so the amount of test specs you actually fail/pass may be different from
what you see in your local machine when you run the timing specs. Make sure you
read the instructions carefully to check that you achieved what the problem is
asking you to do.

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `npm test` in the root directory to re-run all of the tests.
  
2. Fix any syntax errors that cause the tests to crash. **If a test crashes or
   the tests fail to complete their run, you will receive a 0 for the coding
   portion of this assessment.** You can fail specs, but all the tests have to
   be able to finish running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your programs to crash.

3. Add, commit, and push your changed files:

   ```sh
   git add .
   git commit -m "Finish the assessment (or some such descriptive message)"
   git push
   ```

   **Note:** The first time you run `git push`, git will tell you to run a more
   complete version of the command:

   ```sh
   git push --set-upstream origin <your branch>
   ```

You can run tests, `add` files, and `commit` files as often as you wish, but
only your first **two pushes** will be graded. (If for some reason you need more
than two pushes, you must plead your case to an Instructor.)

[MDN]: https://developer.mozilla.org/en-US/
[fromcharcode-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
[parseint-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
