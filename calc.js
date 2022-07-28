class Calculator{
	constructor(firstNum, secondNum) {
		this.firstNum = firstNum;
		this.secondNum = secondNum;
	}
	
	add() {
		return this.firstNum + this.secondNum;
	}
	multiply() {
		return this.firstNum * this.secondNum;
	}
}

module.exports = new Calculator (5,6);

	