var Numder = /** @class */ (function () {
    function Numder(a, b) {
        this.a = a;
        this.b = b;
    }
    Numder.prototype.getSquare = function () {
        return new Numder(Math.pow((this.a), 2), Math.pow((this.b), 2));
    };
    return Numder;
}());
var obj = new Numder(2, 3);
console.log("a=" + obj.getSquare().a + ",b=" + obj.getSquare().b);
