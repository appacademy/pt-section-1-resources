# CompSci 3 Practice Assessment - Binary Trees And Graphs

Welcome to the binary trees and graphs practice assessment!

The coding portion of this assessment tests your ability to work with binary
trees and graphs.

Your objective is to implement the functions in the __problems__ directory so
that all specs pass. Each spec is worth 1 point. Further instructions appear
below.

You will have **2 hours and 55 minutes** to complete the assessment (including
the multiple choice portion).

## Points breakdown

* __Multiple Choice Section:__ 11 points total
* __Coding Problem Section:__ 12 points total

__Total Possible Points:__ 23 points

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

## Problem 1 (Binary Trees): Finding the largest value node at each level

Your objective is to find the node with the highest value at each level of a
binary tree.

__problems/01-bt-find-max-each-level.js__ contains  a solution that almost
works, but not quite. Your job is to debug the provided solution and make all of
the local test cases and test specs pass.

To run the test specs for this file alone, run

```sh
npm test test/01-bt-find-max-each-level.test.js
```

To run local tests from the code file, uncomment the tests at the bottom of the
file and run

```sh
node problems/01-bt-find-max-each-level.js
```

## Problem 2 (Graphs): Identifying Paths

A friend of yours is an avid hiker who is a little too old for climbing cliffs,
but still loves to reach new peaks.  He's trying to find new mountains to
conquer, within his limits.  He wants you to use your programming skills to help
him out.

Your friend has provided you with a series of topographic data of various areas.
The data takes this format:

```js
// Example 1
const mountain_1 = [
        [1, 0, 1, 1],
        [2, 3, 2, 1],
        [0, 2, 4, 1],
        [3, 2, 3, 1]
        ];
```

Depending on the scan, the provided matrix may be larger or smaller, but it will
always be rectangular.

The hiker is able to move from a node to any neighbor that is the same height,
one lower, or one higher.  Neighbors are considered to be nodes that are exactly
one node away.  **This includes diagonals!**

Your job is to find and return the starting point, at height 0 on the edge of
the map, that leads to the tallest peak on the map.  **Every map will only have
1 peak, and nodes of height 0 will only be found on the edge of the map.**

Mountains have the following properties:

1. There will be **exactly 1** peak with a height higher than the rest of the
   nodes.
1. There will always be **at least 1** starting point on the edge of the
   mountain with a height of 0.
1. **Only one** path will lead to the peak.
1. One path will **always** lead to the peak.

A valid path has the following properties:

1. It starts at a node with a height of 0 that is on an edge of the matrix.
1. It ends at the node with the highest height on the mountain.
1. The difference in height between two nodes on the path must be 1, 0, or -1.

In the example above, the correct starting point is `[0, 1]`.

**Important:** Your friend wants to do some exploring, so you don't need to
worry about reporting the exact path to them.  You just need to confirm the
location of the starting point!

A few examples:

```js
// Example 2
const mountain_2 = [
        [0, 2, 1, 1],
        [2, 2, 3, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 1]
        ];
```

There are many valid paths to reach the peak of this mountain, but it's not
reachable from the top left corner!  `[3, 1]` is the correct starting point.

```js
// Example 3
const mountain_3 = [
        [0, 1, 2, 0],
        [5, 1, 3, 2],
        [4, 1, 2, 1],
        [3, 4, 3, 1]
        ];
```

The peak of mountain 3 can be reached.  Up and down are allowed! But it can only
be reached from `[0, 0]`.

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `npm test` to re-run all of the tests.

2. Fix any syntax errors that cause the tests to crash. **If a unit test crashes
   or the tests fail to complete their run, you will receive a 0 for the coding
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
