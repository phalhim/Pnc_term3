class House {
  bedroom: Room
  constructor() {
      this.bedroom = new Room();
  }
}
class Room {
  mainWindow: Windows

  constructor() {
      this.mainWindow = new Windows("WHITE");
  }
}
class Windows {
  color: string
  constructor(color: string) {
      this.color = color;
  }
}

//Q1.create the House sophanaHouse
let house = new House();

//Q2 Print the window color

console.log(house.bedroom.mainWindow.color);