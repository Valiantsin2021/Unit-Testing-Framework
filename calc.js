class Calculator{
	constructor(fnum, snum) {
		this.fnum = fnum;
		this.snum = snum;
	}
	add() {
		return this.fnum + this.snum;
	}
	multiply() {
		return this.fnum*this.snum;
	}
}

module.exports = Calculator

	