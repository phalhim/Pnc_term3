var House = /** @class */ (function () {
    function House(numberHouse) {
        this.rooms = [];
        this.numberHouse = numberHouse;
    }
    House.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    return House;
}());
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var Room = /** @class */ (function () {
    function Room(numberRoom) {
        this.doors = [];
        this.numberRoom = numberRoom;
    }
    Room.prototype.addDoor = function (door) {
        this.doors.push(door);
    };
    return Room;
}());
var house = new House(20);
var room1 = new Room(1);
house.addRoom(room1);
console.log(room1, house);
