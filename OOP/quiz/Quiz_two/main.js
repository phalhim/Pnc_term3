var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var kitchen = new Rectangle(4, 5);
var bedroom = new Rectangle(5, 6);
var classroom = new Rectangle(8, 9);
var total = kitchen.getArea() + bedroom.getArea() + classroom.getArea();
console.log(total);
