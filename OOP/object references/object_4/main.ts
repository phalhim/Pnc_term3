class Point{
    private priceAge: number;
    private priceFood: number;
    constructor(priceAge: number,priceFood: number) {
        this.priceAge = priceAge;
        this.priceFood = priceFood;
    }
    isEqual(other: Point) {
    return this.priceAge === other.priceAge;
    return this.priceFood === other.priceFood;
    }
}

let p1 = new Point(10,20)
let p2 = new Point(10,20)
let p3 = new Point(88,88)
console.log(p1==p2);
console.log(p1.isEqual(p2));
console.log(p2.isEqual(p3));



