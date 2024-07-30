class Car {
    private name: string;
    lisense: string;
    public setName(theName: string) {
        this.name = theName;
    }
    public getName() {
        return this.name;
    }
    
}
let car = new Car();
car.setName("BMW");
console.log(car.getName());
