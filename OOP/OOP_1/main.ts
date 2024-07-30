class Base {
    name = "base";
    constructor() {
      console.log("My name is " + this.name);
    }
  }
   
  class Derived extends Base {
    name = "I want to create a new Derived";
  }
   
  // Prints "base", not "derived"
  const d = new Derived();
  console.log(d);
  