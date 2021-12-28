const chai = require("chai");
const expect = chai.expect;
const { findProducts, findProductsByCategory, findOneProduct } = require("../controllers/product.contoller");

describe("Testing Products", function () {
    test("Testing 1st testcase, findProducts", () => {
      const result = findProducts("Levi Strauss Jeans");
      expect(result).to.be.equal("Levi Strauss Jeans");
      console.log("Testing find Products");
    });
 });