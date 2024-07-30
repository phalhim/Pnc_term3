abstract class Animal {
    private name: string;
    constructor(name: string) { 
        this.name = name;
    }
    abstract playsound(sounds: string): void;

    // normal method
    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    playsound(sounds: string) {
        console.log('sounds: '+ sounds);
        
    }
};
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    playsound(sounds: string): void {
        console.log("sounds: "+ sounds);
        
    }
}
// cannot create objects
// let animal1 = new Animal("dog");
let dog1 = new Dog('KiKi');
dog1.playsound('woesh woesh woesh');
console.log(dog1);

let cat = new Cat("yon");
cat.playsound('meow meow meow');
console.log(cat);

