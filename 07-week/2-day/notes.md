# M2-W7-D2

- Intro to Mod 2 
- Asking Great Questions
- Reading Tests
- Refactoring Code
- DRY
- SRP
- CommonJS Modules

## Intro to Mod 2

## Asking Great Questions

We have up to this point asked questions like this:
> "I have a question in room 1"

We will now be upgrading this procedure by asking questions in a little more precise way.
> "I have a question in room 1 on this specific problem, the error/unexpected result that I'm getting is this."

## Reading Tests (SOLO, 10m)

We will discuss the tests in the main room after the practice.

## SRP Lecture

- Every module, class, or function in a computer program should have responsibility over a **SINGLE** part of that programs functionality.
- Basically this means your functions should *do one thing and do it well*, if they are doing too many things you should refactor and break that function up into helper functions.
- Following this principle makes your code more readable and easier to maintain in the long run.
- The `Single Responsibility Principle` is all about limiting the impact of changing your code.

Consider the following example taken from yesterday's homework.

```js
const VOWELS = 'aeiou';

const abbreviateWords = function(sentence) {
  // make an array of words
  const words = sentence.split(' '); 

  // loop through and check if the length of each word is greater than 3, 
  // if so, loop through the characters and add non-vowels to a newString until it has a length of 3.
  //  then replace the word in the array with the updated newWord.
  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    const word = words[wordIdx];
    if (word.length > 3) {
      let newWord = "";
      let charIdx = 0;

      while (charIdx < word.length && newWord.length < 3) {
        let char = word[charIdx];
        if (!VOWELS.includes(char)) {
          newWord += char;
        }
        charIdx++;
      }

      words[wordIdx] = newWord;
    }
  }

  // join the words back together and return.
  return words.join(' ');
};

console.log(abbreviateWords("Hello World!")); // Hll Wrl
```

This function is lengthy and hard to read because it is trying to do too many things. The problem can be broken down into the following steps to correct that.

Lets break that function down into smaller helper functions.

## Single Responsibility Principle (SOLO, 30m)

Walkthrough after practice.

## DRY Lecture

- DRY is a principle of software development that says: `"Don't repeat yourself. Don't write the same code twice."`
- It's important for your code to be **clear, concise, and efficient**.
- Check your code for *patterns* that come up at least twice. If you find them, you can refactor your code by possibly adding that code to it's own function or storing a set of code to a variable to be reused later.
- Writing dry code is a matter of using **your own judgement**, so the more you practice the better your code will be.
- Just because one solution has fewer lines, does not mean it is better. If you have refactored to store repeated code in a function and you need to make a change to that code, you'll only have to change it once and not on every line that it was used. Your longer, dryer code just saved you time and a headache!

## Don't Repeat Yourself (SOLO, 30m)

Walkthrough after practice.

## CommonJS Modules (SOLO, 15m)

- CommonJS is a popular modularization pattern that's used in Node.js
- In Node.js each JS file defines a module.
- Up until now we've been writing all of our code in a single file, however once you start writing more complicated code, it becomes more difficult to manage.
- Organizing your code into multiple files makes it easier to manage.
- Modules defined within your project are known as local modules.
- We apply our `Single Responsibility Principle` to local modules, in that each local module has a single purpose and the related code is focused on implemeting a single bit of functionality.

Walkthrough after practice.
