var House = /** @class */ (function () {
    function House() {
        this.bedroom = new Room();
    }
    return House;
}());
var Room = /** @class */ (function () {
    function Room() {
        this.mainWindow = new Windows("WHITE");
    }
    return Room;
}());
var Windows = /** @class */ (function () {
    function Windows(color) {
        this.color = color;
    }
    return Windows;
}());
//Q1.create the House sophanaHouse
var house = new House();
//Q2 Print the window color
console.log(house.bedroom.mainWindow.color);
