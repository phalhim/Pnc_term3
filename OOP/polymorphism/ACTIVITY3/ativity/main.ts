abstract class Shape {
    constructor(protected leftX: number, protected bottomY: number){}
   getWidth(): number{
    return this.leftX;
   }
    getHeight(): number{
        return this.bottomY;
    }
    getArea(): number{
        return this.getWidth() * this.getHeight();
    }
}
class Square extends Shape{

    constructor(private size:number, leftX: number, bottomY: number){
        super(leftX, bottomY);
        this.size = size;
    }

}

class Rectangle extends Shape{
    constructor(leftX: number, bottomY: number, private rightX: number, private topY: number){
        super(leftX, bottomY);
        this.rightX = rightX;
        this.topY = topY;
        
    }
}
class Circle extends Shape{
    constructor(leftX: number, bottomY: number, private radius: number){
        super(leftX, bottomY);
        this.radius = radius;
    }
}
let square = new Square(12,22,24);
// console.log(square.getWidth());
// console.log(square.getHeight());
// console.log(square.getArea());

let rectangle = new Rectangle(12,22,24,32);
// console.log(rectangle);

let circle = new Circle(11,22,33)
// console.log(circle);


