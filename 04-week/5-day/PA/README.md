# JavaScript 2 Practice Assessment - Coding Portion

Welcome to the second practice assessment!

The coding portion of this practice assessment continues to test your
understanding of basic JavaScript.

Your objective is to implement the functions in the __problems__ directory so
that all specs pass. Each spec is worth 1 point.

You will have **2 hours and 40 minutes** to complete the practice assessment
(including the multiple choice portion).

## Points breakdown

* __Multiple Choice Section:__ 9 points total
* __Coding Problem Section:__ 8 points total

__Total Possible Points:__ 17 points

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

## Running the specs for individual problems

To run specs for only a single problem, add the path of the test file that
corresponds to the problem you want to test. For example, to test the function
in the __problem/03-shopping-list.js__ file by itself, you would run `npm test
test/03-shopping-list-spec.js`.

Here are the commands to run each of the five test files individually:

```sh
npm test test/01-key-adder-unique-val-spec.js
npm test test/02-dupe-char-min-count-spec.js
npm test test/03-shopping-list-spec.js
npm test test/04-picky-my-map-spec.js
npm test test/05-filter-user-profiles-spec.js
npm test test/06-sentence-maker-spec.js
```

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `npm test` to re-run all of the unit tests.

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
