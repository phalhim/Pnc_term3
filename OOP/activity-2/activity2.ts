class House {
  bedroom: Room
  livingRoom: Room
  constructor() {
      this.bedroom = new Room();
      this.livingRoom = new Room();
  }
}
class Room {
  windows: Windows[]

  constructor() {
      this.windows = [];
  }
}
class Windows {
  color: string
  number: number
  constructor(color: string , number: number) {
      this.color = color;
      this.number = number;
  }
}

// create the House name sophanaHouse
let sophanaHouse = new House();
// Complete this code to get the color of the first window  of the living r
let firstWindow = sophanaHouse.livingRoom.windows
console.log(firstWindow);
