var House = /** @class */ (function () {
    function House() {
        this.bedroom = new Room();
        this.livingRoom = new Room();
    }
    return House;
}());
var Room = /** @class */ (function () {
    function Room() {
        this.windows = [];
    }
    return Room;
}());
var Windows = /** @class */ (function () {
    function Windows(color, number) {
        this.color = color;
        this.number = number;
    }
    return Windows;
}());
// create the House name sophanaHouse
var sophanaHouse = new House();
// Complete this code to get the color of the first window  of the living r
var firstWindow = sophanaHouse.livingRoom.windows;
console.log(firstWindow);
