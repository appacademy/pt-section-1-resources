const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const newWord = new Word("Dog");

      expect(newWord).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      const newWord = new Word("Banana");

      expect(newWord.word).to.equal("Banana")
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const newWord = new Word("Greg");

      const expected = "Grg";

      const actual = newWord.removeVowels();
      expect(actual).to.equal(expected);
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const newWord = new Word("Banana");

      const expected = "aaa";
      const actual = newWord.removeConsonants();
      expect(actual).to.equal(expected);
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const first = new Word("act");
      const second = new Word("banana");

      const expected1 = "actyay"
      const expected2 = "ananabay"

      const actual1 = first.pigLatin();
      const actual2 = second.pigLatin();

      expect(actual1).to.equal(expected1);
      expect(actual2).to.equal(expected2);
    });
  });
});
