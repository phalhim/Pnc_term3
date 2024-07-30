var calculate = /** @class */ (function () {
    function calculate(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    calculate.prototype.sumNumber = function () {
        return this.number1 + this.number2;
    };
    calculate.prototype.minusNumber = function () {
        return this.number1 - this.number2;
    };
    calculate.prototype.diuide = function () {
        return this.number1 * this.number2;
    };
    calculate.prototype.multiple = function () {
        return this.number1 / this.number2;
    };
    return calculate;
}());
var sumNumber = new calculate(1, 2);
console.log(sumNumber.sumNumber());
var minusNumber = new calculate(40, 30);
console.log(minusNumber.minusNumber());
var diuide = new calculate(4, 3);
console.log(diuide.diuide());
var multiple = new calculate(8, 2);
console.log(multiple.multiple());
