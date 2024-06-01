const path = require("path");
const fs = require("fs");
const assert = require("assert");

const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const makeAnimalSound = require("../problems/05-string-interpolation.js");
const fileName = "05-string-interpolation.js";

describe("makeAnimalSound(animal, sound)", function () {
  it("should use string interpolation to return a new string of the form '<animal> goes <sound>!'", function () {
    let string = makeAnimalSound("cow", "moo");
    assert.strictEqual(string, "cow goes moo!");

    string = makeAnimalSound("DUCK", "QUACK");
    assert.strictEqual(string, "DUCK goes QUACK!");

    const testPath = path.resolve(__dirname, "../problems", fileName);
    const file = fs.readFileSync(testPath, "utf-8");
    expect(file).to.match(
      /^[\s\S]*?`[\s\S]*?\${[\s\S]*?}[\s\S]*?\${[\s\S]*?}[\s\S]*?`/,
      "Function must use string interpolation for both arguments"
    );
  });
});
