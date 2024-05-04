# JavaScript 1 Practice Assessment - Coding

Welcome to your first practice assessment! Stay calm and get ready to
demonstrate what you have learned in the first week at App Academy!

The coding portion of this practice assessment tests your understanding of basic
JavaScript.

Your objective is to implement the functions in the __problems__ directory so
that all specs pass. Each spec is worth 1 point.

You will have **1 hour and 45 minutes** to complete the assessment (including
the multiple choice portion).

## Points breakdown

* __Multiple Choice Section:__ 12 points total
* __Coding Problem 1:__ 5 points
* __Coding Problem 2:__ 4 points
* __Coding Problem 3:__ 7 points

__Total Possible Points:__ 28 points

## Resources

For this assessment, you are allowed to use the following resources:

* [MDN]
* A whiteboard or paper to work out problems/code, but they must be within
  camera range
* VScode or a console for testing and experimentation during any part of the
  test, including multiple-choice questions
* Node
* Postman (when useful)

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., AA Open, StackOverflow), communication apps
(e.g., Slack, Discord), search engines, notes, or any of your previously
written code.

## Setup

1. Clone this starter repo and open it in VS Code.
2. Run `npm install` in the root directory.
3. Run `npm test` to see all the specs you need to pass.

## Running the specs for individual problems

To run specs for only a single problem, add the path of the test file that
corresponds to the problem you want to test. For example, to test the function
in the __problem/01-string-changer.js__ file by itself, you would run
`npm test test/01-string-changer-spec.js`.

Here are the commands to run each of the three test files individually:

```sh
npm test test/01-string-changer-spec.js
npm test test/02-debugging-is-sorted-spec.js
npm test test/03-most-expensive-groceries-spec.js
```

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `npm test` to re-run all of the unit tests.

2. Fix any syntax errors that cause the tests to crash. **If a unit test
   crashes or the tests fail to complete their run, you will receive a 0 for
   the coding portion of this assessment.** You can fail specs, but all the
   tests have to be able to finish running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your programs to crash.

3. The actual submission is a three-part process: you need to _add_ your changed
   files to the staging area, _commit_ them, and _push_ them to GitHub. (Don't
   worry if these concepts are still a bit fuzzy; you will become very familiar
   with them over the course of the bootcamp!) You can accomplish by running the
   following commands:

   a. To add your files to the staging area, run `git add .` (Don't forget to
      include the period at the end!)

   b. To commit your files, run `git commit -m "<brief description of the
      changes in this commit>"`

   c. To push your files to GitHub for grading, run `git push`. The first time
      you run this command, GitHub will likely tell you that "the current branch
      ... has no upstream branch," i.e., you need to tell it where, exactly, to
      push your files. Fortunately, git will also show the command you can
      use to do this. It will look like this:

      ```sh
      git push --set-upstream origin <your branch>
      ```

      Copy the `push` command that git suggests, paste it on the command line,
      and run it to submit your assessment.

**Note:** You can run tests, `add` files, and `commit` files as often as you
wish, but only your first **two pushes** will be graded. (If for some reason you
need more than two pushes, you must plead your case to an Instructor.)

### Summary of submission commands

1. `npm test`
2. `git add .`
3. `git commit -m "Finish the assessment (or some such descriptive message)"`
4. `git push` / `git push --set-upstream origin <your branch>`

[MDN]: https://developer.mozilla.org/en-US/
