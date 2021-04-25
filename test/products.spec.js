const { expect } = require('chai');

describe('Mocha/Chai Test', function () {
  it('should show a passing test', function () {
    expect(1 + 1).to.equal(2);
  });
});
