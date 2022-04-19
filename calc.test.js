var calculator = require("./calc.js");
var assert = require("assert");

describe("Test the basic functions of my calculator", function() {
	it("test add function of my calculator", function() {
		let calc = new calculator(6, 5)
		let expected = 11;
		let result = calc.add();
		assert.equal(expected, result);
	});
	it("Test multiply function of my calculator", function() {
		let calc = new calculator(6, 5)
		let expected = 30;
		let result = calc.multiply();
		assert.equal(expected, result);
	});
});