/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterRoom` class found in the `./problems/03-letter-room.js` file.


The final class is called `LetterProcessor`. `LetterProcessor` should be
initialized with a maximum amount of letters in can add in a bin,
`maxLettersPerBin`. Each instance should have its own `LetterRoom`. Implement
the method to add a letter to last `LetterBin` added to its `LetterRoom`. The
letter should be added to the top of that `LetterBin`'s stack.
Implement the method to remove a letter from the first `LetterBin` added to
`LetterProcessor`'s `LetterRoom`. The letter should be removed from the top of
that `LetterBin`'s stack.

******************************************/

const LetterRoom = require("./03-letter-room");

class LetterProcessor {
  constructor(maxLettersPerBin) {
    this.letterRoom = new LetterRoom();
    this.maxLettersPerBin = maxLettersPerBin;
  }

  addLetter(message) {
    // add a letter with the specified message to the last bin added to the letter room
    const last = this.letterRoom.getLastBin();
    if (last) {
      // if we have a bin
      // is this bin full?
      if (last.numLetters() < this.maxLettersPerBin) {
        // if not full, add to the bin
        last.addLetter(message);
      } else {
        // if the last bin is full, add a new bin
        const newBin = this.letterRoom.addBin();
        // adding a letter to that new bin
        newBin.addLetter(message);
      }
    } else {
      // if the last bin is full, add a new bin
      const newBin = this.letterRoom.addBin();
      // adding a letter to that new bin
      newBin.addLetter(message);
    }
    // if the last bin added is full, add a new bin to the letter room
  }

  removeLetter() {
    // remove a letter from the first bin added to the letter room
    const firstBin = this.letterRoom.getFirstBin();
    // if the first bin is empty after removing the letter, remove the bin from the letter room
    if (firstBin) {
        let letter = firstBin.removeLetter();
        if (!firstBin.numLetters())  {// if our numLetters is 0
            // remove that empty bin
            this.letterRoom.removeBin();
        }
        return letter;
    } else {
        // if there are no more letters, then console.log 'No more letters to process!'
        console.log('No more letters to process!')
    }

  }
}

module.exports = LetterProcessor;
