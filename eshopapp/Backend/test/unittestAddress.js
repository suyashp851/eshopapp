const chai = require("chai");
const expect = chai.expect;
const {create} = require("../controllers/address.contoller");

describe("Testing Address", function () {
    test("Testing 1st testcase, create", () => {
      const result = create("7903710346");
      expect(result).to.be.equal("7903710346");
      console.log("Testing Create Address");
    });
  });