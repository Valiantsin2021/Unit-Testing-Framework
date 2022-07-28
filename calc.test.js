const calculator = require("./calc.js");
const assert = require("assert");
// let calc = new calculator(6, 5)

describe("Test the basic functions of my calculator", function() {
	it("test add function of my calculator", function() {
		let expected = 11;
		let result = calculator.add();
		assert.equal(expected, result);
	});
	it("Test multiply function of my calculator", function() {
		let expected = 30;
		let result = calculator.multiply();
		assert.equal(expected, result);
	});
});