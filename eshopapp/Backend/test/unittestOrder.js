const chai = require("chai");
const expect = chai.expect;
const {createOrder} = require("../controllers/order.contoller");

describe("Testing Order", function () {
    test("Testing 1st testcase, createOrder", () => {
      const result = createOrder("60bdfaa510882f20b88aecf2");
      expect(result).to.be.equal("60bdfaa510882f20b88aecf2");
      console.log("Testing Create Order");
    });
  });