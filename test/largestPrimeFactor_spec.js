var challenge_3 = require("../largestPrimeFactor.js");
var chai = require('chai');
var should = chai.should();

describe("The largest Prime Factor", function () {

  it("for 13195 should be 29", function () {
    var primeNumber = challenge_3.largestPrimeFactor(13195);
    primeNumber.should.equal(29);
  });

  it("for 600851475143 should be 6857", function () {
    var primeNumber = challenge_3.largestPrimeFactor(600851475143);
    primeNumber.should.equal(6857);
  });
});