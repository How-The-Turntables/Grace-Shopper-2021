const { expect } = require('chai');

// const app = require('supertest')(require('../app'))

describe('Mocha/Chai Test', function() {
  it('should show a passing test', function() {
    expect(1+1).to.equal(2);
  });
});