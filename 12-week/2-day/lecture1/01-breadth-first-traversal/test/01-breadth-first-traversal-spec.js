const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));
const printBreadthFirst = require('../problems/01-breadth-first-traversal');

describe('printBreadthFirst', function() {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  it('printBreadthFirst(3) prints out 3, 2, 4, 1, 5, 6', function() {
    printBreadthFirst(3);
    expect(consoleSpy).on.nth(1).be.called.with(3);
    expect(consoleSpy).on.nth(2).be.called.with(2);
    expect(consoleSpy).on.nth(3).be.called.with(4);
    expect(consoleSpy).on.nth(4).be.called.with(1);
    expect(consoleSpy).on.nth(5).be.called.with(5);
    expect(consoleSpy).on.nth(6).be.called.with(6);
  });

  it('printBreadthFirst(6) prints out 6, 4, 3, 5, 2, 1', function() {
    printBreadthFirst(6);
    expect(consoleSpy).on.nth(1).be.called.with(6);
    expect(consoleSpy).on.nth(2).be.called.with(4);
    expect(consoleSpy).on.nth(3).be.called.with(3);
    expect(consoleSpy).on.nth(4).be.called.with(5);
    expect(consoleSpy).on.nth(5).be.called.with(2);
    expect(consoleSpy).on.nth(6).be.called.with(1);
  });

  it('printBreadthFirst(4) prints out 4, 3, 5, 6, 2, 1', function() {
    printBreadthFirst(4);
    expect(consoleSpy).on.nth(1).be.called.with(4);
    expect(consoleSpy).on.nth(2).be.called.with(3);
    expect(consoleSpy).on.nth(3).be.called.with(5);
    expect(consoleSpy).on.nth(4).be.called.with(6);
    expect(consoleSpy).on.nth(5).be.called.with(2);
    expect(consoleSpy).on.nth(6).be.called.with(1);
  });
});
