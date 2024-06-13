const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const newWord = new Word("banana");

      expect(newWord).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      const newWord = new Word("banana");

      expect(newWord.word).to.equal("banana");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const newWord = new Word("banana");

      const expected = "bnn";
      const actual = newWord.removeVowels();

      expect(actual).to.equal(expected);
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const newWord = new Word("banana");

      const expected = "aaa";
      const actual = newWord.removeConsonants();

      expect(actual).to.equal(expected);
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const newWord = new Word("banana");
      const vowelWord = new Word("app");

      const expected1 = "ananabay";
      const expected2 = "appyay";

      const actual1 = newWord.pigLatin();
      const actual2 = vowelWord.pigLatin();

      expect(actual1).to.equal(expected1);
      expect(actual2).to.equal(expected2);

    });
  });
});
