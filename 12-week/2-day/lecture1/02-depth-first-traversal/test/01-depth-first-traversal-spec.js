const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));
const printDepthFirst = require('../problems/01-depth-first-traversal');

describe('printDepthFirst', function() {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  it('printDepthFirst(3) prints out 3, 4, 6, 5, 2, 1', function() {
    printDepthFirst(3);
    expect(consoleSpy).on.nth(1).be.called.with(3);
    expect(consoleSpy).on.nth(2).be.called.with(4);
    expect(consoleSpy).on.nth(3).be.called.with(6);
    expect(consoleSpy).on.nth(4).be.called.with(5);
    expect(consoleSpy).on.nth(5).be.called.with(2);
    expect(consoleSpy).on.nth(6).be.called.with(1);
  });

  it('printDepthFirst(6) prints out 6, 4, 5, 2, 3, 1', function() {
    printDepthFirst(6);
    expect(consoleSpy).on.nth(1).be.called.with(6);
    expect(consoleSpy).on.nth(2).be.called.with(4);
    expect(consoleSpy).on.nth(3).be.called.with(5);
    expect(consoleSpy).on.nth(4).be.called.with(2);
    expect(consoleSpy).on.nth(5).be.called.with(3);
    expect(consoleSpy).on.nth(6).be.called.with(1);
  });

  it('printDepthFirst(4) prints out 4, 6, 5, 2, 3, 1', function() {
    printDepthFirst(4);
    expect(consoleSpy).on.nth(1).be.called.with(4);
    expect(consoleSpy).on.nth(2).be.called.with(6);
    expect(consoleSpy).on.nth(3).be.called.with(5);
    expect(consoleSpy).on.nth(4).be.called.with(2);
    expect(consoleSpy).on.nth(5).be.called.with(3);
    expect(consoleSpy).on.nth(6).be.called.with(1);
  });
});
