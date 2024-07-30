

class House {
    numberHouse: number;
    rooms: Room[] = [];
    constructor(numberHouse: number) {
        this.numberHouse = numberHouse;
    }
    addRoom(room: Room) {
        this.rooms.push(room);
    }
}

class Door {
    
}

class Room {
    numberRoom: number;
    doors: Door[] = [];
    constructor(numberRoom: number) {
        this.numberRoom = numberRoom;
    }
    addDoor(door: Door) {
        this.doors.push(door);
    }
}

const house = new House(20);
const room1 = new Room(1);

house.addRoom(room1);
console.log(room1,house);


